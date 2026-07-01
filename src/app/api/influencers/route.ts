import { NextResponse } from "next/server";
import { prisma } from "@/lib/db";

export const runtime = "nodejs";

export async function GET() {
  try {
    const influencers = await prisma.influencer.findMany({
      include: {
        codes: {
          include: {
            attributions: true,
          }
        }
      },
      orderBy: { createdAt: "desc" },
    });
    return NextResponse.json({ influencers });
  } catch (error) {
    return NextResponse.json({ error: "Failed to fetch influencers" }, { status: 500 });
  }
}

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, code, commissionRate } = body;

    if (!name || !code) {
      return NextResponse.json({ error: "Name and code are required" }, { status: 400 });
    }

    const influencer = await prisma.influencer.create({
      data: {
        name,
        email,
        codes: {
          create: {
            code: code.toUpperCase(),
            commissionRate: commissionRate ? Number(commissionRate) : null,
          }
        }
      },
      include: { codes: true }
    });

    return NextResponse.json({ influencer }, { status: 201 });
  } catch (error) {
    return NextResponse.json({ error: "Failed to create influencer" }, { status: 500 });
  }
}
