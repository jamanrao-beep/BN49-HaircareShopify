import { requireEnv } from "@/lib/env";

type GraphqlVariables = Record<string, unknown>;

type ShopifyGraphqlResponse<TData> = {
  data?: TData;
  errors?: Array<{
    message: string;
    extensions?: Record<string, unknown>;
  }>;
};

export class ShopifyAdminApiError extends Error {
  constructor(
    message: string,
    readonly status?: number,
    readonly errors?: ShopifyGraphqlResponse<unknown>["errors"],
  ) {
    super(message);
    this.name = "ShopifyAdminApiError";
  }
}

export async function shopifyAdminGraphql<TData>(
  query: string,
  variables?: GraphqlVariables,
): Promise<TData> {
  const shopDomain = requireEnv("SHOPIFY_SHOP_DOMAIN");
  const accessToken = requireEnv("SHOPIFY_ADMIN_ACCESS_TOKEN");
  const apiVersion = process.env.SHOPIFY_API_VERSION ?? "2026-01";

  const response = await fetch(
    `https://${shopDomain}/admin/api/${apiVersion}/graphql.json`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "X-Shopify-Access-Token": accessToken,
      },
      body: JSON.stringify({ query, variables }),
      cache: "no-store",
    },
  );

  const payload = (await response.json()) as ShopifyGraphqlResponse<TData>;

  if (!response.ok || payload.errors?.length) {
    throw new ShopifyAdminApiError(
      "Shopify Admin GraphQL request failed",
      response.status,
      payload.errors,
    );
  }

  if (!payload.data) {
    throw new ShopifyAdminApiError("Shopify Admin GraphQL response did not include data");
  }

  return payload.data;
}
