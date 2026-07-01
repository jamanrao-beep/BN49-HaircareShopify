import { NextResponse } from "next/server";
import { getOptionalEnv } from "@/lib/env";
import { addCustomerTags } from "@/lib/shopify/customers";

export const runtime = "nodejs";

type B2BApplicationPayload = {
  customerId?: string;
  email?: string;
  contactName?: string;
  businessName?: string;
  taxId?: string;
  message?: string;
};

function readString(value: unknown) {
  return typeof value === "string" ? value.trim() : "";
}

export async function POST(request: Request) {
  let payload: B2BApplicationPayload;

  try {
    payload = (await request.json()) as B2BApplicationPayload;
  } catch {
    return NextResponse.json({ error: "Invalid JSON payload" }, { status: 400 });
  }

  const application = {
    customerId: readString(payload.customerId),
    email: readString(payload.email),
    contactName: readString(payload.contactName),
    businessName: readString(payload.businessName),
    taxId: readString(payload.taxId),
    message: readString(payload.message),
  };

  const missingFields = [
    ["email", application.email],
    ["contactName", application.contactName],
    ["businessName", application.businessName],
    ["taxId", application.taxId],
  ]
    .filter(([, value]) => !value)
    .map(([field]) => field);

  if (missingFields.length > 0) {
    return NextResponse.json(
      { error: "Missing required fields", fields: missingFields },
      { status: 422 },
    );
  }

  let pendingTagApplied = false;
  let pendingTagWarning: string | undefined;

  if (application.customerId) {
    if (getOptionalEnv("SHOPIFY_SHOP_DOMAIN") && getOptionalEnv("SHOPIFY_ADMIN_ACCESS_TOKEN")) {
      try {
        await addCustomerTags(application.customerId, ["B2B_Pending"]);
        pendingTagApplied = true;
      } catch (error) {
        return NextResponse.json(
          {
            error: error instanceof Error ? error.message : "Failed to apply pending customer tag",
          },
          { status: 502 },
        );
      }
    } else {
      pendingTagWarning = "Shopify Admin credentials are not configured; pending tag was not applied.";
    }
  }

  return NextResponse.json(
    {
      application: {
        ...application,
        status: "PENDING",
      },
      pendingTagApplied,
      warning: pendingTagWarning,
    },
    { status: 202 },
  );
}
