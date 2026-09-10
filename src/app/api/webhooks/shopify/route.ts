import { NextResponse } from "next/server";
import { getShopifyWebhookContext, verifyShopifyWebhookHmac } from "@/lib/shopify/webhooks";
import { attributeOrderToInfluencer } from "@/lib/shopify/influencerAttribution";
import { prisma } from "@/lib/db";

export const runtime = "nodejs";

export async function POST(request: Request) {
  const rawBody = await request.text();
  const hmac = request.headers.get("x-shopify-hmac-sha256");

  if (process.env.NODE_ENV === "production" && !verifyShopifyWebhookHmac(rawBody, hmac)) {
    return NextResponse.json({ error: "Invalid Shopify webhook signature" }, { status: 401 });
  }

  const context = getShopifyWebhookContext(request.headers);
  let payload: unknown;

  try {
    payload = JSON.parse(rawBody) as unknown;
  } catch {
    return NextResponse.json({ error: "Invalid webhook JSON payload" }, { status: 400 });
  }

  // Audit log
  try {
    await prisma.webhookEvent.create({
      data: {
        webhookId: context.webhookId || `wh_${Date.now()}`,
        topic: context.topic || "shopify/webhook",
        shop: context.shop || "shopify",
        payload: payload as object,
        processedAt: new Date(),
      },
    });
  } catch (err) {
    console.warn("WebhookEvent save skipped:", err);
  }

  let attributionResult = null;
  const isOrderTopic = context.topic === "orders/create" || context.topic === "orders/paid";

  if (isOrderTopic && typeof payload === "object" && payload !== null) {
    try {
      attributionResult = await attributeOrderToInfluencer(payload as any);
    } catch (attrErr) {
      console.error("Order attribution error:", attrErr);
    }
  }

  return NextResponse.json({
    received: true,
    topic: context.topic,
    shop: context.shop,
    webhookId: context.webhookId,
    attribution: attributionResult,
  });
}
