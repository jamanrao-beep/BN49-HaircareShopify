import { NextResponse } from "next/server";
import { prisma } from "@/lib/db";
import crypto from "crypto";
import { getOptionalEnv } from "@/lib/env";

export const runtime = "nodejs";

export async function POST(request: Request) {
  try {
    const rawBody = await request.text();
    const hmacHeader = request.headers.get("x-shopify-hmac-sha256");
    const shopifySecret = getOptionalEnv("SHOPIFY_WEBHOOK_SECRET");

    if (shopifySecret && hmacHeader) {
      const generatedHash = crypto
        .createHmac("sha256", shopifySecret)
        .update(rawBody, "utf8")
        .digest("base64");
        
      if (generatedHash !== hmacHeader) {
        return NextResponse.json({ error: "Unauthorized: Invalid HMAC" }, { status: 401 });
      }
    }

    const order = JSON.parse(rawBody);
    
    // Process discount codes to find influencer codes
    if (order.discount_codes && Array.isArray(order.discount_codes)) {
      for (const discount of order.discount_codes) {
        const code = discount.code?.toUpperCase();
        
        if (code) {
          const influencerCode = await prisma.influencerCode.findUnique({
            where: { code },
          });

          if (influencerCode) {
            await prisma.orderAttribution.upsert({
              where: {
                shopifyOrderId_influencerCodeId: {
                  shopifyOrderId: order.id.toString(),
                  influencerCodeId: influencerCode.id,
                }
              },
              create: {
                shopifyOrderId: order.id.toString(),
                influencerCodeId: influencerCode.id,
                subtotalAmount: Number(order.subtotal_price || 0),
                currencyCode: order.currency || "USD",
              },
              update: {
                subtotalAmount: Number(order.subtotal_price || 0),
              }
            });
          }
        }
      }
    }

    return NextResponse.json({ success: true }, { status: 200 });
  } catch (error) {
    console.error("Webhook processing error:", error);
    return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
  }
}
