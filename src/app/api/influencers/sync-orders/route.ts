import { NextResponse } from "next/server";
import { shopifyAdminGraphql } from "@/lib/shopify/admin";
import { attributeOrderToInfluencer } from "@/lib/shopify/influencerAttribution";

export const runtime = "nodejs";

interface ShopifyOrderNode {
  id: string;
  name: string;
  createdAt: string;
  totalPriceSet: {
    shopMoney: {
      amount: string;
      currencyCode: string;
    };
  };
  subtotalPriceSet?: {
    shopMoney: {
      amount: string;
    };
  };
  discountCodes: string[];
  customAttributes: Array<{ key: string; value: string }>;
  tags: string[];
  note: string | null;
}

interface OrdersQueryResponse {
  orders: {
    nodes: ShopifyOrderNode[];
  };
}

const GET_ORDERS_QUERY = `#graphql
  query GetRecentShopifyOrders {
    orders(first: 50, reverse: true) {
      nodes {
        id
        name
        createdAt
        totalPriceSet {
          shopMoney {
            amount
            currencyCode
          }
        }
        subtotalPriceSet {
          shopMoney {
            amount
          }
        }
        discountCodes
        customAttributes {
          key
          value
        }
        tags
        note
      }
    }
  }
`;

export async function GET() {
  return handleSync();
}

export async function POST() {
  return handleSync();
}

async function handleSync() {
  try {
    const data = await shopifyAdminGraphql<OrdersQueryResponse>(GET_ORDERS_QUERY);
    const orders = data.orders?.nodes || [];

    const syncedResults = [];

    for (const rawOrder of orders) {
      const discountCodes = rawOrder.discountCodes || [];
      const customAttrs = rawOrder.customAttributes || [];

      // Check if order has discount code or custom attributes
      const hasInfluencerCode =
        discountCodes.length > 0 ||
        customAttrs.some(a => (a.key || "").toLowerCase().includes("influencer")) ||
        (rawOrder.note || "").toLowerCase().includes("influencer");

      if (hasInfluencerCode) {
        // Convert to payload
        const payload = {
          id: rawOrder.id.replace("gid://shopify/Order/", ""),
          name: rawOrder.name,
          created_at: rawOrder.createdAt,
          subtotal_price: rawOrder.subtotalPriceSet?.shopMoney?.amount || rawOrder.totalPriceSet.shopMoney.amount,
          total_price: rawOrder.totalPriceSet.shopMoney.amount,
          currency: rawOrder.totalPriceSet.shopMoney.currencyCode,
          discount_codes: discountCodes.map(c => ({ code: c })),
          customAttributes: customAttrs,
          note: rawOrder.note || undefined,
          tags: rawOrder.tags,
        };

        const attrResult = await attributeOrderToInfluencer(payload);
        syncedResults.push({
          orderId: rawOrder.id,
          orderName: rawOrder.name,
          discountCodes,
          attribution: attrResult,
        });
      }
    }

    return NextResponse.json({
      success: true,
      message: `Checked ${orders.length} orders; attributed ${syncedResults.length} influencer orders.`,
      attributedCount: syncedResults.length,
      orders: syncedResults,
    });
  } catch (error) {
    console.error("Order sync error:", error);
    return NextResponse.json(
      {
        success: false,
        error: error instanceof Error ? error.message : "Failed to sync orders from Shopify",
      },
      { status: 500 },
    );
  }
}
