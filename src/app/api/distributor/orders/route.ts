import { NextResponse } from "next/server";
import { verifyInternalApiToken } from "@/lib/auth/internal-api";
import { getOrders } from "@/lib/shopify/orders";

export const runtime = "nodejs";

function includesRegion(value: string | null | undefined, region: string) {
  return value?.toLowerCase().includes(region.toLowerCase()) ?? false;
}

export async function GET(request: Request) {
  if (!verifyInternalApiToken(request)) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const url = new URL(request.url);
  const region = url.searchParams.get("region")?.trim();
  const first = Number(url.searchParams.get("first") ?? "50");

  if (!region) {
    return NextResponse.json({ error: "Missing distributor region" }, { status: 400 });
  }

  try {
    const orders = await getOrders({
      first: Number.isFinite(first) ? Math.min(Math.max(first, 1), 100) : 50,
    });
    const regionalOrders = orders.filter((order) => {
      const address = order.shippingAddress;

      return (
        includesRegion(address?.city, region) ||
        includesRegion(address?.province, region) ||
        includesRegion(address?.country, region) ||
        includesRegion(address?.zip, region)
      );
    });

    return NextResponse.json({
      region,
      orders: regionalOrders,
    });
  } catch (error) {
    return NextResponse.json(
      { error: error instanceof Error ? error.message : "Failed to load distributor orders" },
      { status: 502 },
    );
  }
}
