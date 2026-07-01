import { createHmac, timingSafeEqual } from "node:crypto";

export function verifyShopifyWebhookHmac(
  rawBody: string,
  hmacHeader: string | null,
  secret = process.env.SHOPIFY_WEBHOOK_SECRET,
): boolean {
  if (!hmacHeader || !secret) {
    return false;
  }

  const digest = createHmac("sha256", secret).update(rawBody, "utf8").digest("base64");
  const expected = Buffer.from(digest, "base64");
  const actual = Buffer.from(hmacHeader, "base64");

  if (expected.length !== actual.length) {
    return false;
  }

  return timingSafeEqual(expected, actual);
}

export function getShopifyWebhookContext(headers: Headers) {
  return {
    topic: headers.get("x-shopify-topic"),
    shop: headers.get("x-shopify-shop-domain"),
    webhookId: headers.get("x-shopify-webhook-id"),
    triggeredAt: headers.get("x-shopify-triggered-at"),
  };
}
