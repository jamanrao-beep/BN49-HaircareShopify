import { NextResponse } from "next/server";
import { verifyInternalApiToken } from "@/lib/auth/internal-api";
import { createPercentageDiscountCode } from "@/lib/shopify/discounts";

export const runtime = "nodejs";

type CreateDiscountPayload = {
  title?: string;
  code?: string;
  percentage?: number;
  startsAt?: string;
  endsAt?: string;
};

export async function POST(request: Request) {
  if (!verifyInternalApiToken(request)) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const payload = (await request.json().catch(() => null)) as CreateDiscountPayload | null;
  const title = payload?.title?.trim();
  const code = payload?.code?.trim().toUpperCase();
  const percentage = Number(payload?.percentage);

  if (!title || !code || !Number.isFinite(percentage) || percentage <= 0) {
    return NextResponse.json(
      { error: "title, code, and positive percentage are required" },
      { status: 422 },
    );
  }

  try {
    const discount = await createPercentageDiscountCode({
      title,
      code,
      percentage,
      startsAt: payload?.startsAt,
      endsAt: payload?.endsAt,
    });

    return NextResponse.json({ discount }, { status: 201 });
  } catch (error) {
    return NextResponse.json(
      { error: error instanceof Error ? error.message : "Failed to create discount code" },
      { status: 502 },
    );
  }
}
