import { NextResponse } from "next/server";
import { prisma } from "@/lib/db";

export const runtime = "nodejs";

// Curated default influencer & promo codes for instant zero-latency fallback and offline development
const DEFAULT_VERIFIED_CODES: Record<
  string,
  { influencerName: string; discountPercentage: number; commissionRate: number; description: string }
> = {
  CLIENTMEET10: {
    influencerName: "BN49 Partner",
    discountPercentage: 10,
    commissionRate: 15,
    description: "Exclusive 10% Partner Discount",
  },
  BN49INFLUENCER10: {
    influencerName: "Official Influencer Program",
    discountPercentage: 10,
    commissionRate: 15,
    description: "Official 10% Influencer Discount",
  },
  AMAN10: {
    influencerName: "Aman Rawat",
    discountPercentage: 10,
    commissionRate: 15,
    description: "Aman's 10% Exclusive Community Discount",
  },
  AMAN_IG: {
    influencerName: "Aman Rawat (Instagram)",
    discountPercentage: 10,
    commissionRate: 15,
    description: "Aman's Instagram Community 10% OFF",
  },
  AMAN_YT: {
    influencerName: "Aman Rawat (YouTube)",
    discountPercentage: 15,
    commissionRate: 18,
    description: "Aman's YouTube Subscribers 15% OFF",
  },
  PRIYA10: {
    influencerName: "Priya Sharma",
    discountPercentage: 10,
    commissionRate: 15,
    description: "Priya's 10% Fashion Discount",
  },
  PRIYA_FESTIVE: {
    influencerName: "Priya Sharma (Festive)",
    discountPercentage: 15,
    commissionRate: 20,
    description: "Priya's Festive Edit 15% OFF",
  },
  PARTH10: {
    influencerName: "Parth Designer",
    discountPercentage: 10,
    commissionRate: 15,
    description: "10% Designer Discount",
  },
  FESTIVE15: {
    influencerName: "BN49 Festive Promo",
    discountPercentage: 15,
    commissionRate: 10,
    description: "Special Festive 15% Discount",
  },
  VIP20: {
    influencerName: "BN49 VIP Ambassador",
    discountPercentage: 20,
    commissionRate: 20,
    description: "VIP Ambassador 20% Discount",
  },
};

function getCorsHeaders() {
  return {
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Methods": "GET, POST, OPTIONS",
    "Access-Control-Allow-Headers": "Content-Type, Authorization",
  };
}

export async function OPTIONS() {
  return new NextResponse(null, {
    status: 204,
    headers: getCorsHeaders(),
  });
}

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const rawCode = searchParams.get("code");
  return handleVerification(rawCode);
}

export async function POST(request: Request) {
  try {
    const body = (await request.json().catch(() => ({}))) as { code?: string };
    return handleVerification(body.code);
  } catch {
    return NextResponse.json(
      { valid: false, error: "Invalid request payload" },
      { status: 400, headers: getCorsHeaders() },
    );
  }
}

async function handleVerification(rawCode?: string | null) {
  const code = (rawCode || "").trim().toUpperCase();

  if (!code) {
    return NextResponse.json(
      { valid: false, error: "Please enter a valid influencer code" },
      { status: 400, headers: getCorsHeaders() },
    );
  }

  // 1. Try checking Postgres Database via Prisma
  try {
    const dbCode = await prisma.influencerCode.findUnique({
      where: { code },
      include: { influencer: true },
    });

    if (dbCode && dbCode.isActive) {
      const commissionRate = dbCode.commissionRate ? Number(dbCode.commissionRate) : 15;
      const discountPercentage = 10; // Standard 10% audience discount, or can be dynamic

      return NextResponse.json(
        {
          valid: true,
          code: dbCode.code,
          influencerId: dbCode.influencerId,
          influencerName: dbCode.influencer?.name || "Verified Influencer",
          discountPercentage,
          commissionRate,
          description: `${dbCode.influencer?.name || "Influencer"}'s ${discountPercentage}% Special Discount`,
          source: "database",
        },
        { status: 200, headers: getCorsHeaders() },
      );
    }
  } catch (err) {
    // If DB is offline or table is empty during local dev, seamlessly check curated fallback list
    console.warn("DB lookup error or DB connection unavailable:", err);
  }

  // 2. Check curated / verified fallback code registry
  if (DEFAULT_VERIFIED_CODES[code]) {
    const match = DEFAULT_VERIFIED_CODES[code];
    return NextResponse.json(
      {
        valid: true,
        code,
        influencerName: match.influencerName,
        discountPercentage: match.discountPercentage,
        commissionRate: match.commissionRate,
        description: match.description,
        source: "curated",
      },
      { status: 200, headers: getCorsHeaders() },
    );
  }

  return NextResponse.json(
    {
      valid: false,
      code,
      error: `Influencer code "${code}" is invalid or expired.`,
    },
    { status: 404, headers: getCorsHeaders() },
  );
}
