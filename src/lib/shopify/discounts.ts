import { shopifyAdminGraphql } from "@/lib/shopify/admin";

type CreateDiscountCodeData = {
  discountCodeBasicCreate: {
    codeDiscountNode: {
      id: string;
      codeDiscount: {
        title: string;
        codes: {
          nodes: Array<{
            code: string;
          }>;
        };
      };
    } | null;
    userErrors: Array<{
      field: string[] | null;
      message: string;
    }>;
  };
};

const CREATE_DISCOUNT_CODE_MUTATION = `#graphql
  mutation CreateInfluencerDiscount($basicCodeDiscount: DiscountCodeBasicInput!) {
    discountCodeBasicCreate(basicCodeDiscount: $basicCodeDiscount) {
      codeDiscountNode {
        id
        codeDiscount {
          ... on DiscountCodeBasic {
            title
            codes(first: 1) {
              nodes {
                code
              }
            }
          }
        }
      }
      userErrors {
        field
        message
      }
    }
  }
`;

export async function createPercentageDiscountCode(options: {
  title: string;
  code: string;
  percentage: number;
  startsAt?: string;
  endsAt?: string;
}) {
  const percentage = Math.min(Math.max(options.percentage, 0), 100) / 100;
  const data = await shopifyAdminGraphql<CreateDiscountCodeData>(
    CREATE_DISCOUNT_CODE_MUTATION,
    {
      basicCodeDiscount: {
        title: options.title,
        code: options.code,
        startsAt: options.startsAt ?? new Date().toISOString(),
        endsAt: options.endsAt,
        customerSelection: {
          all: true,
        },
        customerGets: {
          value: {
            percentage,
          },
          items: {
            all: true,
          },
        },
        appliesOncePerCustomer: false,
      },
    },
  );

  if (data.discountCodeBasicCreate.userErrors.length > 0) {
    throw new Error(
      data.discountCodeBasicCreate.userErrors.map((error) => error.message).join(", "),
    );
  }

  return data.discountCodeBasicCreate.codeDiscountNode;
}
