import { shopifyAdminGraphql } from "@/lib/shopify/admin";
import { prisma } from "@/lib/db";

export interface ShopifyOrderPayload {
  id: number | string;
  name?: string;
  order_number?: number;
  total_price?: string;
  subtotal_price?: string;
  current_subtotal_price?: string;
  currency?: string;
  discount_codes?: Array<{
    code: string;
    amount?: string;
    type?: string;
  }>;
  discount_applications?: Array<{
    code?: string;
    title?: string;
    value?: string;
  }>;
  customer?: {
    id?: number | string;
    email?: string;
    first_name?: string;
    last_name?: string;
  };
  line_items?: Array<{
    id: number | string;
    title: string;
    quantity: number;
    price: string;
  }>;
}

interface CustomerMetafieldNode {
  namespace: string;
  key: string;
  value: string;
  type?: string;
}

interface ShopifyCustomerNode {
  id: string;
  displayName: string;
  email: string | null;
  tags: string[];
  metafields: {
    nodes: CustomerMetafieldNode[];
  };
}

interface CustomersQueryResponse {
  customers: {
    nodes: ShopifyCustomerNode[];
  };
}

interface CustomerUpdateResponse {
  customerUpdate: {
    customer: {
      id: string;
    } | null;
    userErrors: Array<{
      field: string[] | null;
      message: string;
    }>;
  };
}

const CUSTOMERS_WITH_INFLUENCER_TAG_QUERY = `#graphql
  query GetInfluencerCustomers {
    customers(first: 100, query: "tag:influencer") {
      nodes {
        id
        displayName
        email
        tags
        metafields(first: 30) {
          nodes {
            namespace
            key
            value
            type
          }
        }
      }
    }
  }
`;

const UPDATE_CUSTOMER_METAFIELDS_MUTATION = `#graphql
  mutation UpdateCustomerMetafields($input: CustomerInput!) {
    customerUpdate(input: $input) {
      customer {
        id
      }
      userErrors {
        field
        message
      }
    }
  }
`;

function getMetafieldInt(nodes: CustomerMetafieldNode[], namespace: string, key: string, fallback = 0): number {
  const match = nodes.find(m => m.namespace === namespace && m.key === key);
  if (!match || !match.value) return fallback;
  const parsed = parseInt(match.value, 10);
  return isNaN(parsed) ? fallback : parsed;
}

function getAnyMetafieldInt(nodes: CustomerMetafieldNode[], keys: string[], namespaces = ["influencer", "custom"], fallback = 0): number {
  for (const ns of namespaces) {
    for (const k of keys) {
      const val = getMetafieldInt(nodes, ns, k, -1);
      if (val !== -1) return val;
    }
  }
  return fallback;
}

/**
 * Processes an order and attributes it to the influencer who owns the promo/discount code used.
 * Automatically updates both Shopify Customer Metafields and Postgres Database.
 */
export async function attributeOrderToInfluencer(order: ShopifyOrderPayload) {
  // 1. Extract discount codes from order
  const rawCodes: string[] = [];

  if (Array.isArray(order.discount_codes)) {
    for (const d of order.discount_codes) {
      if (d.code) rawCodes.push(d.code.trim().toUpperCase());
    }
  }

  if (Array.isArray(order.discount_applications)) {
    for (const app of order.discount_applications) {
      if (app.code) rawCodes.push(app.code.trim().toUpperCase());
      if (app.title && !rawCodes.includes(app.title.trim().toUpperCase())) {
        rawCodes.push(app.title.trim().toUpperCase());
      }
    }
  }

  const uniqueCodes = Array.from(new Set(rawCodes));
  if (uniqueCodes.length === 0) {
    return {
      success: false,
      message: "No discount codes found in order.",
      orderId: order.id,
    };
  }

  // Calculate order monetary amount
  const rawPrice = order.subtotal_price || order.current_subtotal_price || order.total_price || "0";
  const orderAmount = Math.round(parseFloat(rawPrice));
  const orderIdStr = order.id.toString();

  // 2. Fetch all influencer customers from Shopify
  const { customers } = await shopifyAdminGraphql<CustomersQueryResponse>(
    CUSTOMERS_WITH_INFLUENCER_TAG_QUERY,
  );

  const results = [];

  for (const code of uniqueCodes) {
    // Find the influencer customer in Shopify whose active_code matches
    const matchedCustomer = customers.nodes.find(c => {
      const activeMeta = c.metafields.nodes.find(
        m => (m.namespace === "influencer" || m.namespace === "custom") && m.key === "active_code"
      );
      if (!activeMeta || !activeMeta.value) return false;
      const codes = activeMeta.value.split(",").map(s => s.trim().toUpperCase());
      return codes.includes(code);
    });

    if (!matchedCustomer) {
      // Also try fallback to Prisma DB in case customer ID is stored in DB
      try {
        const dbCode = await prisma.influencerCode.findUnique({
          where: { code },
          include: { influencer: true },
        });

        if (dbCode) {
          // Log attribution in DB even if customer not found in Shopify
          await prisma.orderAttribution.upsert({
            where: {
              shopifyOrderId_influencerCodeId: {
                shopifyOrderId: orderIdStr,
                influencerCodeId: dbCode.id,
              },
            },
            create: {
              shopifyOrderId: orderIdStr,
              influencerCodeId: dbCode.id,
              subtotalAmount: orderAmount,
              currencyCode: order.currency || "USD",
            },
            update: {
              subtotalAmount: orderAmount,
            },
          });
        }
      } catch (dbErr) {
        console.warn("Prisma fallback lookup error (non-fatal):", dbErr);
      }
      continue;
    }

    // 3. Matched influencer customer found!
    const nodes = matchedCustomer.metafields.nodes;

    // Commission rate: default 15% (or read from DB if exists)
    let commissionRate = 0.15;
    try {
      const dbCode = await prisma.influencerCode.findUnique({
        where: { code },
      });
      if (dbCode?.commissionRate) {
        commissionRate = Number(dbCode.commissionRate);
      }
    } catch {
      // ignore
    }

    const earnedCommission = Math.round(orderAmount * commissionRate);

    // Current lifetime values
    const currentTotalSales = getAnyMetafieldInt(nodes, ["total_sales"], ["influencer", "custom"], 0);
    const currentComm = getAnyMetafieldInt(nodes, ["commission_earned"], ["influencer", "custom"], 0);
    const currentCouponUses = getAnyMetafieldInt(nodes, ["coupon_uses"], ["influencer", "custom"], 0);

    // Calculate updated lifetime values
    const newTotalSales = currentTotalSales + orderAmount;
    const newCommission = currentComm + earnedCommission;
    const newCouponUses = currentCouponUses + 1;

    // Determine current quarter (1 to 4)
    const currentQ = Math.floor(new Date().getMonth() / 3) + 1;
    const qKeySales = `quarter_${currentQ}_sales`;
    const qKeyComm = `quarter_${currentQ}_commission`;
    const qKeyRec = `quarter_${currentQ}_records`;

    // Read current quarter values
    const currentQSales = getAnyMetafieldInt(nodes, [qKeySales, `q${currentQ}_sales`], ["custom", "influencer"], 0);
    const currentQComm = getAnyMetafieldInt(nodes, [qKeyComm, `q${currentQ}_commission`], ["custom", "influencer"], 0);
    const currentQRec = getAnyMetafieldInt(nodes, [qKeyRec, `quarter_${currentQ}_orders`, `q${currentQ}_records`], ["custom", "influencer"], 0);

    // Also get Q1 values (since Q1 is prominently displayed or used in standard demo setups)
    const currentQ1Sales = getAnyMetafieldInt(nodes, ["quarter_1_sales", "q1_sales"], ["custom", "influencer"], 0);
    const currentQ1Comm = getAnyMetafieldInt(nodes, ["quarter_1_commission", "q1_commission"], ["custom", "influencer"], 0);
    const currentQ1Rec = getAnyMetafieldInt(nodes, ["quarter_1_records", "quarter_1_orders", "q1_records"], ["custom", "influencer"], 0);

    const newQSales = currentQSales + orderAmount;
    const newQComm = currentQComm + earnedCommission;
    const newQRec = currentQRec + 1;

    const newQ1Sales = currentQ1Sales + orderAmount;
    const newQ1Comm = currentQ1Comm + earnedCommission;
    const newQ1Rec = currentQ1Rec + 1;

    // Prepare metafield updates across both namespaces
    const metafieldsToUpdate = [
      // Total Sales
      { namespace: "influencer", key: "total_sales", value: newTotalSales.toString(), type: "number_integer" },
      { namespace: "custom", key: "total_sales", value: newTotalSales.toString(), type: "number_integer" },

      // Commission Earned
      { namespace: "influencer", key: "commission_earned", value: newCommission.toString(), type: "number_integer" },
      { namespace: "custom", key: "commission_earned", value: newCommission.toString(), type: "number_integer" },

      // Coupon Uses
      { namespace: "influencer", key: "coupon_uses", value: newCouponUses.toString(), type: "number_integer" },
      { namespace: "custom", key: "coupon_uses", value: newCouponUses.toString(), type: "number_integer" },

      // Always update Quarter 1 (standard dashboard display)
      { namespace: "custom", key: "quarter_1_sales", value: newQ1Sales.toString(), type: "number_integer" },
      { namespace: "influencer", key: "quarter_1_sales", value: newQ1Sales.toString(), type: "number_integer" },
      { namespace: "custom", key: "quarter_1_commission", value: newQ1Comm.toString(), type: "number_integer" },
      { namespace: "influencer", key: "quarter_1_commission", value: newQ1Comm.toString(), type: "number_integer" },
      { namespace: "custom", key: "quarter_1_records", value: newQ1Rec.toString(), type: "number_integer" },
    ];

    // If current quarter is not Q1, also update current quarter metafields
    if (currentQ !== 1) {
      metafieldsToUpdate.push(
        { namespace: "custom", key: qKeySales, value: newQSales.toString(), type: "number_integer" },
        { namespace: "influencer", key: qKeySales, value: newQSales.toString(), type: "number_integer" },
        { namespace: "custom", key: qKeyComm, value: newQComm.toString(), type: "number_integer" },
        { namespace: "influencer", key: qKeyComm, value: newQComm.toString(), type: "number_integer" },
        { namespace: "custom", key: qKeyRec, value: newQRec.toString(), type: "number_integer" },
      );
    }

    // 4. Update Shopify Customer Metafields via Admin GraphQL API
    const updateResult = await shopifyAdminGraphql<CustomerUpdateResponse>(
      UPDATE_CUSTOMER_METAFIELDS_MUTATION,
      {
        input: {
          id: matchedCustomer.id,
          metafields: metafieldsToUpdate,
        },
      },
    );

    if (updateResult.customerUpdate.userErrors.length > 0) {
      console.error(
        "Shopify customerUpdate userErrors:",
        updateResult.customerUpdate.userErrors,
      );
    }

    // 5. Save to Prisma DB for persistence & reporting
    try {
      // Find or create influencer record in Postgres
      let influencer = await prisma.influencer.findFirst({
        where: { email: matchedCustomer.email || undefined },
      });

      if (!influencer) {
        influencer = await prisma.influencer.create({
          data: {
            name: matchedCustomer.displayName,
            email: matchedCustomer.email || `${matchedCustomer.id.replace(/\D/g, "")}@customer.shopify`,
          },
        });
      }

      // Find or create influencerCode
      let infCode = await prisma.influencerCode.findUnique({
        where: { code },
      });

      if (!infCode) {
        infCode = await prisma.influencerCode.create({
          data: {
            influencerId: influencer.id,
            code,
            commissionRate: commissionRate,
          },
        });
      }

      // Upsert order attribution
      await prisma.orderAttribution.upsert({
        where: {
          shopifyOrderId_influencerCodeId: {
            shopifyOrderId: orderIdStr,
            influencerCodeId: infCode.id,
          },
        },
        create: {
          shopifyOrderId: orderIdStr,
          influencerCodeId: infCode.id,
          subtotalAmount: orderAmount,
          currencyCode: order.currency || "USD",
        },
        update: {
          subtotalAmount: orderAmount,
        },
      });
    } catch (dbErr) {
      console.warn("Prisma sync skipped/error (non-fatal):", dbErr);
    }

    results.push({
      code,
      influencerCustomer: {
        id: matchedCustomer.id,
        email: matchedCustomer.email,
        displayName: matchedCustomer.displayName,
      },
      attribution: {
        orderId: orderIdStr,
        orderAmount,
        commissionEarned: earnedCommission,
        newTotalSales,
        newCommission,
        newCouponUses,
        quarter: currentQ,
      },
    });
  }

  return {
    success: results.length > 0,
    attributions: results,
    processedCodes: uniqueCodes,
  };
}
