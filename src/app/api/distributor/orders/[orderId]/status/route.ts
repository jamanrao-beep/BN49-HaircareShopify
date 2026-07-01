import { NextResponse } from "next/server";
import { verifyInternalApiToken } from "@/lib/auth/internal-api";
import { addOrderTags } from "@/lib/shopify/orders";
import { prisma } from "@/lib/db";

export const runtime = "nodejs";

const allowedStatuses = new Set(["accepted", "out_for_delivery", "rejected", "delivered"]);

type RouteContext = {
  params: Promise<{
    orderId: string;
  }>;
};

export async function POST(request: Request, context: RouteContext) {
  if (!verifyInternalApiToken(request)) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const { orderId } = await context.params;
  const payload = (await request.json().catch(() => null)) as { status?: string } | null;
  const status = payload?.status?.trim();

  if (!orderId) {
    return NextResponse.json({ error: "Missing order ID" }, { status: 400 });
  }

  if (!status || !allowedStatuses.has(status)) {
    return NextResponse.json(
      { error: "Invalid distributor status", allowedStatuses: Array.from(allowedStatuses) },
      { status: 422 },
    );
  }

  try {
    await addOrderTags(orderId, [`distributor_status:${status}`]);

    const state = status.toUpperCase() as "ACCEPTED" | "OUT_FOR_DELIVERY" | "REJECTED" | "DELIVERED";

    await prisma.distributorOrderStatus.upsert({
      where: { shopifyOrderId: orderId },
      create: {
        shopifyOrderId: orderId,
        state,
        region: "global",
      },
      update: {
        state,
      },
    });

    return NextResponse.json({
      orderId,
      status,
      appliedTag: `distributor_status:${status}`,
    });
  } catch (error) {
    return NextResponse.json(
      { error: error instanceof Error ? error.message : "Failed to update distributor status" },
      { status: 502 },
    );
  }
}
