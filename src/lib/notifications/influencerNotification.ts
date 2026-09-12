/**
 * Influencer Notification & Alert Service
 * Handles in-app notifications, dashboard popup alerts, and text/SMS/webhook dispatch
 * whenever a customer makes a purchase using an influencer's code.
 */

export interface InfluencerSaleNotificationPayload {
  influencerId?: string;
  influencerName: string;
  influencerEmail?: string;
  influencerPhone?: string;
  code: string;
  orderId: string;
  orderName: string;
  orderAmount: number;
  commissionEarned: number;
  currency?: string;
  totalSales?: number;
  totalCommission?: number;
  timestamp?: string;
}

export interface NotificationDispatchResult {
  inApp: boolean;
  textMessage: string;
  smsDispatched: boolean;
  webhookDispatched: boolean;
  error?: string;
}

/**
 * Builds standard human-readable text message for the influencer
 */
export function buildInfluencerSaleTextMessage(payload: InfluencerSaleNotificationPayload): string {
  const currency = payload.currency || "£";
  const formattedAmount = `${currency}${payload.orderAmount.toLocaleString("en-IN")}`;
  const formattedCommission = `${currency}${payload.commissionEarned.toLocaleString("en-IN")}`;
  
  return `🎉 BN49 Partner Alert! Great news ${payload.influencerName}: A customer just purchased ${formattedAmount} using your code ${payload.code}! You earned ${formattedCommission} in commission. View your updated dashboard to track your payout.`;
}

/**
 * Dispatches notification to:
 * 1. Log / Audit console
 * 2. External SMS / WhatsApp / Webhook endpoint if configured via environment variables
 * 3. Returns the structured notification object for customer metafield & dashboard popup storage
 */
export async function dispatchInfluencerNotification(
  payload: InfluencerSaleNotificationPayload
): Promise<NotificationDispatchResult> {
  const textMessage = buildInfluencerSaleTextMessage(payload);
  const timestamp = payload.timestamp || new Date().toISOString();

  console.log("=================================================");
  console.log("🔔 INFLUENCER SALE NOTIFICATION TRIGGERED");
  console.log(`Influencer: ${payload.influencerName} (${payload.influencerEmail || "No Email"})`);
  console.log(`Code: ${payload.code} | Order: ${payload.orderName}`);
  console.log(`Sale Amount: £${payload.orderAmount} | Commission: +£${payload.commissionEarned}`);
  console.log(`Text Notification: "${textMessage}"`);
  console.log("=================================================");

  let smsDispatched = false;
  let webhookDispatched = false;

  // 1. External Webhook Dispatch (e.g. Zapier, Make, Slack, Discord, Custom SMS Gateway)
  const notificationWebhookUrl =
    process.env.NOTIFICATION_WEBHOOK_URL ||
    process.env.INFLUENCER_WEBHOOK_URL ||
    process.env.SMS_WEBHOOK_URL;

  if (notificationWebhookUrl) {
    try {
      const resp = await fetch(notificationWebhookUrl, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          event: "influencer.sale_recorded",
          text: textMessage,
          data: {
            ...payload,
            timestamp,
          },
        }),
        signal: AbortSignal.timeout(5000),
      });

      if (resp.ok) {
        webhookDispatched = true;
        console.log("✅ External notification webhook dispatched successfully.");
      } else {
        console.warn(`⚠️ External notification webhook responded with status: ${resp.status}`);
      }
    } catch (whErr) {
      console.warn("⚠️ External notification webhook failed (non-fatal):", whErr);
    }
  }

  // 2. Direct SMS Gateway integration (Twilio / Fast2SMS fallback support if configured)
  if (process.env.TWILIO_ACCOUNT_SID && process.env.TWILIO_AUTH_TOKEN && payload.influencerPhone) {
    try {
      const auth = Buffer.from(
        `${process.env.TWILIO_ACCOUNT_SID}:${process.env.TWILIO_AUTH_TOKEN}`
      ).toString("base64");

      const twilioUrl = `https://api.twilio.com/2010-04-01/Accounts/${process.env.TWILIO_ACCOUNT_SID}/Messages.json`;
      const params = new URLSearchParams();
      params.append("To", payload.influencerPhone);
      params.append("From", process.env.TWILIO_PHONE_NUMBER || "");
      params.append("Body", textMessage);

      const twilioRes = await fetch(twilioUrl, {
        method: "POST",
        headers: {
          Authorization: `Basic ${auth}`,
          "Content-Type": "application/x-www-form-urlencoded",
        },
        body: params.toString(),
        signal: AbortSignal.timeout(5000),
      });

      if (twilioRes.ok) {
        smsDispatched = true;
        console.log(`📱 SMS sent to ${payload.influencerPhone} via Twilio`);
      }
    } catch (smsErr) {
      console.warn("⚠️ Twilio SMS dispatch failed (non-fatal):", smsErr);
    }
  }

  return {
    inApp: true,
    textMessage,
    smsDispatched,
    webhookDispatched,
  };
}
