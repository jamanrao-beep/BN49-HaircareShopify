import { NextResponse } from "next/server";
import { verifyInternalApiToken } from "@/lib/auth/internal-api";
import { addCustomerTags, removeCustomerTags, updateCustomerTaxExempt } from "@/lib/shopify/customers";

export const runtime = "nodejs";

type RouteContext = {
  params: Promise<{
    customerId: string;
  }>;
};

export async function POST(request: Request, context: RouteContext) {
  if (!verifyInternalApiToken(request)) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const { customerId } = await context.params;
  const payload = (await request.json().catch(() => null)) as { taxExempt?: boolean } | null;

  if (!customerId) {
    return NextResponse.json({ error: "Missing customer ID" }, { status: 400 });
  }

  try {
    await removeCustomerTags(customerId, ["B2B_Pending", "B2B_Rejected"]);
    await addCustomerTags(customerId, ["wholesale"]);

    if (payload?.taxExempt === true) {
      await updateCustomerTaxExempt(customerId, true);
    }

    return NextResponse.json({
      customerId,
      status: "APPROVED",
      appliedTags: ["wholesale"],
      removedTags: ["B2B_Pending", "B2B_Rejected"],
      taxExemptApplied: payload?.taxExempt === true,
    });
  } catch (error) {
    return NextResponse.json(
      { error: error instanceof Error ? error.message : "Failed to approve B2B customer" },
      { status: 502 },
    );
  }
}
