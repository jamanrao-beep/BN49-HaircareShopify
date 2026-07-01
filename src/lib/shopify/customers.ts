import { addTags, removeTags } from "@/lib/shopify/tags";

type CustomerTaxExemptMutationData = {
  customerUpdate: {
    customer: {
      id: string;
      taxExempt: boolean;
    } | null;
    userErrors: Array<{
      field: string[] | null;
      message: string;
    }>;
  };
};

const CUSTOMER_TAX_EXEMPT_MUTATION = `#graphql
  mutation UpdateCustomerTaxExempt($input: CustomerInput!) {
    customerUpdate(input: $input) {
      customer {
        id
        taxExempt
      }
      userErrors {
        field
        message
      }
    }
  }
`;

export function toCustomerGid(customerId: string): string {
  if (customerId.startsWith("gid://shopify/Customer/")) {
    return customerId;
  }

  return `gid://shopify/Customer/${customerId}`;
}

export async function addCustomerTags(customerId: string, tags: string[]) {
  return addTags(toCustomerGid(customerId), tags);
}

export async function removeCustomerTags(customerId: string, tags: string[]) {
  return removeTags(toCustomerGid(customerId), tags);
}

export async function updateCustomerTaxExempt(customerId: string, taxExempt: boolean) {
  const { shopifyAdminGraphql } = await import("@/lib/shopify/admin");
  const data = await shopifyAdminGraphql<CustomerTaxExemptMutationData>(
    CUSTOMER_TAX_EXEMPT_MUTATION,
    {
      input: {
        id: toCustomerGid(customerId),
        taxExempt,
      },
    },
  );

  if (data.customerUpdate.userErrors.length > 0) {
    throw new Error(data.customerUpdate.userErrors.map((error) => error.message).join(", "));
  }

  return data.customerUpdate.customer;
}
