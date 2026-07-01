import { NextResponse } from "next/server";
import { verifyInternalApiToken } from "@/lib/auth/internal-api";
import { addCustomerTags, removeCustomerTags } from "@/lib/shopify/customers";

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

  if (!customerId) {
    return NextResponse.json({ error: "Missing customer ID" }, { status: 400 });
  }

  try {
    await removeCustomerTags(customerId, ["B2B_Pending", "wholesale"]);
    await addCustomerTags(customerId, ["B2B_Rejected"]);

    return NextResponse.json({
      customerId,
      status: "REJECTED",
      appliedTags: ["B2B_Rejected"],
      removedTags: ["B2B_Pending", "wholesale"],
    });
  } catch (error) {
    return NextResponse.json(
      { error: error instanceof Error ? error.message : "Failed to reject B2B customer" },
      { status: 502 },
    );
  }
}
