import { NextResponse } from "next/server";
import crypto from "crypto";
import { getOptionalEnv } from "@/lib/env";
import { attributeOrderToInfluencer } from "@/lib/shopify/influencerAttribution";
import { prisma } from "@/lib/db";

export const runtime = "nodejs";

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const isTest = searchParams.get("test");

  // If ?test=true, trigger a test attribution order
  if (isTest) {
    const code = searchParams.get("code") || "RAGHAV22";
    const amount = Number(searchParams.get("amount") || "2500");
    const testOrder = {
      id: `test_${Date.now()}`,
      name: `#TEST-${Math.floor(1000 + Math.random() * 9000)}`,
      total_price: String(amount),
      subtotal_price: String(amount),
      currency: "INR",
      test: true,
      discount_codes: [{ code, amount: String(Math.round(amount * 0.1)) }],
    };

    const attribution = await attributeOrderToInfluencer(testOrder);
    return NextResponse.json({
      status: "ok",
      mode: "test_attribution",
      order: testOrder,
      attribution,
    });
  }

  return NextResponse.json({
    status: "ok",
    message: "BN49 Shopify orders/create webhook endpoint is active and listening for live order events.",
    endpoints: {
      postWebhook: "/api/webhooks/orders-create",
      testWebhook: "/api/webhooks/orders-create?test=true&code=RAGHAV22&amount=2500",
      syncOrders: "/api/influencers/sync-orders",
    },
    timestamp: new Date().toISOString(),
  });
}

export async function POST(request: Request) {
  try {
    const rawBody = await request.text();
    const hmacHeader = request.headers.get("x-shopify-hmac-sha256");
    const shopifySecret = getOptionalEnv("SHOPIFY_WEBHOOK_SECRET");

    // Verify HMAC if header provided by Shopify
    if (shopifySecret && hmacHeader) {
      const generatedHash = crypto
        .createHmac("sha256", shopifySecret)
        .update(rawBody, "utf8")
        .digest("base64");

      if (generatedHash !== hmacHeader) {
        // In local development or manual test, log warning but don't strictly reject if secret might differ
        if (process.env.NODE_ENV === "production") {
          console.warn("Unauthorized webhook request: Invalid HMAC signature");
          return NextResponse.json({ error: "Unauthorized: Invalid HMAC" }, { status: 401 });
        } else {
          console.warn("HMAC signature mismatch in dev mode (allowing request for local testing)");
        }
      }
    }

    if (!rawBody || rawBody.trim().length === 0) {
      return NextResponse.json({ error: "Empty request body" }, { status: 400 });
    }

    const order = JSON.parse(rawBody);

    // Save raw webhook event for audit trail
    try {
      await prisma.webhookEvent.create({
        data: {
          webhookId: request.headers.get("x-shopify-webhook-id") || `wh_${Date.now()}`,
          topic: request.headers.get("x-shopify-topic") || "orders/create",
          shop: request.headers.get("x-shopify-shop-domain") || "shopify",
          payload: order,
          processedAt: new Date(),
        },
      });
    } catch (whErr) {
      console.warn("WebhookEvent save skipped (non-fatal):", whErr);
    }

    // Run influencer attribution & metafield sync
    const attributionResult = await attributeOrderToInfluencer(order);

    return NextResponse.json(
      {
        success: true,
        message: "Order processed successfully",
        orderId: order.id,
        orderName: order.name,
        attribution: attributionResult,
      },
      { status: 200 },
    );
  } catch (error) {
    console.error("Webhook processing error:", error);
    return NextResponse.json(
      {
        error: "Internal Server Error",
        details: error instanceof Error ? error.message : String(error),
      },
      { status: 500 },
    );
  }
}
