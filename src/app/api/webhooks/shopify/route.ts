import { NextResponse } from "next/server";
import { getShopifyWebhookContext, verifyShopifyWebhookHmac } from "@/lib/shopify/webhooks";

export const runtime = "nodejs";

export async function POST(request: Request) {
  const rawBody = await request.text();
  const hmac = request.headers.get("x-shopify-hmac-sha256");

  if (!verifyShopifyWebhookHmac(rawBody, hmac)) {
    return NextResponse.json({ error: "Invalid Shopify webhook signature" }, { status: 401 });
  }

  const context = getShopifyWebhookContext(request.headers);
  let payload: unknown;

  try {
    payload = JSON.parse(rawBody) as unknown;
  } catch {
    return NextResponse.json({ error: "Invalid webhook JSON payload" }, { status: 400 });
  }

  const orderSummary =
    context.topic === "orders/create" && typeof payload === "object" && payload !== null
      ? getOrderWebhookSummary(payload as Record<string, unknown>)
      : null;

  return NextResponse.json({
    received: true,
    topic: context.topic,
    shop: context.shop,
    webhookId: context.webhookId,
    orderSummary,
  });
}

function getOrderWebhookSummary(payload: Record<string, unknown>) {
  const discountCodes = Array.isArray(payload.discount_codes)
    ? payload.discount_codes
        .map((discount) =>
          typeof discount === "object" && discount !== null && "code" in discount
            ? String(discount.code)
            : "",
        )
        .filter(Boolean)
    : [];
  const shippingAddress =
    typeof payload.shipping_address === "object" && payload.shipping_address !== null
      ? (payload.shipping_address as Record<string, unknown>)
      : null;

  return {
    orderId: payload.id ? String(payload.id) : null,
    orderName: payload.name ? String(payload.name) : null,
    discountCodes,
    influencerAttributionCandidate: discountCodes.length > 0,
    distributorRegionCandidate: {
      city: shippingAddress?.city ? String(shippingAddress.city) : null,
      province: shippingAddress?.province ? String(shippingAddress.province) : null,
      country: shippingAddress?.country ? String(shippingAddress.country) : null,
      zip: shippingAddress?.zip ? String(shippingAddress.zip) : null,
    },
  };
}
