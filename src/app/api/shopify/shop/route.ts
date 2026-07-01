import { NextResponse } from "next/server";
import { ShopifyAdminApiError, shopifyAdminGraphql } from "@/lib/shopify/admin";

export const runtime = "nodejs";

type ShopQueryData = {
  shop: {
    name: string;
    myshopifyDomain: string;
    primaryDomain: {
      url: string;
    };
  };
};

const SHOP_QUERY = `#graphql
  query ShopInfo {
    shop {
      name
      myshopifyDomain
      primaryDomain {
        url
      }
    }
  }
`;

export async function GET() {
  try {
    const data = await shopifyAdminGraphql<ShopQueryData>(SHOP_QUERY);

    return NextResponse.json({
      shop: data.shop,
    });
  } catch (error) {
    if (error instanceof ShopifyAdminApiError) {
      return NextResponse.json(
        { error: error.message, details: error.errors ?? [] },
        { status: error.status ?? 500 },
      );
    }

    return NextResponse.json(
      { error: error instanceof Error ? error.message : "Unexpected Shopify API error" },
      { status: 500 },
    );
  }
}
