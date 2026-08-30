import { NextResponse } from "next/server";
import { prisma } from "@/lib/db";

export const runtime = "nodejs";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { influencerId, code, commissionRate } = body;

    if (!influencerId || !code) {
      return NextResponse.json(
        { error: "influencerId and code are required" },
        { status: 400 },
      );
    }

    const cleanCode = String(code).trim().toUpperCase();

    // Check if code is already taken
    const existing = await prisma.influencerCode.findUnique({
      where: { code: cleanCode },
    });

    if (existing) {
      return NextResponse.json(
        { error: `Code "${cleanCode}" is already assigned.` },
        { status: 409 },
      );
    }

    const newCode = await prisma.influencerCode.create({
      data: {
        influencerId,
        code: cleanCode,
        commissionRate: commissionRate ? Number(commissionRate) : 15,
        isActive: true,
      },
      include: {
        influencer: true,
      },
    });

    return NextResponse.json({ code: newCode }, { status: 201 });
  } catch (error) {
    return NextResponse.json(
      { error: "Failed to assign code to influencer" },
      { status: 500 },
    );
  }
}
