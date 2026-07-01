import { NextResponse } from "next/server";
import { getOrders } from "@/lib/shopify/orders";

export const runtime = "nodejs";

export async function GET(request: Request) {
  const url = new URL(request.url);
  const code = url.searchParams.get("code")?.trim();
  const first = Number(url.searchParams.get("first") ?? "50");

  if (!code) {
    return NextResponse.json({ error: "Missing influencer code" }, { status: 400 });
  }

  try {
    const orders = await getOrders({
      first: Number.isFinite(first) ? Math.min(Math.max(first, 1), 100) : 50,
      query: `discount_code:${code}`,
    });
    const normalizedCode = code.toLowerCase();
    const matchedOrders = orders.filter((order) =>
      order.discountCodes.some((discountCode) => discountCode.toLowerCase() === normalizedCode),
    );
    const revenue = matchedOrders.reduce(
      (sum, order) => sum + Number(order.totalPriceSet.shopMoney.amount),
      0,
    );

    return NextResponse.json({
      code,
      orders: matchedOrders,
      metrics: {
        totalOrders: matchedOrders.length,
        revenue,
        averageOrderValue: matchedOrders.length > 0 ? revenue / matchedOrders.length : 0,
        currencyCode: matchedOrders[0]?.totalPriceSet.shopMoney.currencyCode ?? null,
      },
    });
  } catch (error) {
    return NextResponse.json(
      { error: error instanceof Error ? error.message : "Failed to load influencer orders" },
      { status: 502 },
    );
  }
}
