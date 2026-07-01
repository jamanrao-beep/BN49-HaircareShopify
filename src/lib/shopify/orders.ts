import { shopifyAdminGraphql } from "@/lib/shopify/admin";
import { addTags } from "@/lib/shopify/tags";

type OrdersQueryData = {
  orders: {
    edges: Array<{
      node: {
        id: string;
        name: string;
        createdAt: string;
        displayFinancialStatus: string | null;
        displayFulfillmentStatus: string | null;
        totalPriceSet: {
          shopMoney: {
            amount: string;
            currencyCode: string;
          };
        };
        shippingAddress: {
          name: string | null;
          city: string | null;
          province: string | null;
          country: string | null;
          zip: string | null;
        } | null;
        discountCodes: string[];
      };
    }>;
  };
};

const ORDERS_QUERY = `#graphql
  query Orders($first: Int!, $query: String) {
    orders(first: $first, sortKey: CREATED_AT, reverse: true, query: $query) {
      edges {
        node {
          id
          name
          createdAt
          displayFinancialStatus
          displayFulfillmentStatus
          totalPriceSet {
            shopMoney {
              amount
              currencyCode
            }
          }
          shippingAddress {
            name
            city
            province
            country
            zip
          }
          discountCodes
        }
      }
    }
  }
`;

export async function getOrders(options: { first?: number; query?: string }) {
  const data = await shopifyAdminGraphql<OrdersQueryData>(ORDERS_QUERY, {
    first: options.first ?? 50,
    query: options.query,
  });

  return data.orders.edges.map((edge) => edge.node);
}

export function toOrderGid(orderId: string): string {
  if (orderId.startsWith("gid://shopify/Order/")) {
    return orderId;
  }

  return `gid://shopify/Order/${orderId}`;
}

export async function addOrderTags(orderId: string, tags: string[]) {
  return addTags(toOrderGid(orderId), tags);
}
