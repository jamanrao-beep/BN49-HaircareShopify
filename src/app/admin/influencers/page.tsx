import { prisma } from "@/lib/db";
import InfluencerTable from "./InfluencerTable";

export const dynamic = "force-dynamic";

export default async function InfluencersAdminPage() {
  let influencers: any[] = [];
  try {
    influencers = await prisma.influencer.findMany({
      include: {
        codes: {
          include: {
            attributions: true,
          },
        },
      },
      orderBy: { createdAt: "desc" },
    });
  } catch (error) {
    console.warn("Could not load influencers from DB:", error);
  }

  // If database has no entries during early demo/development, provide sample initial partners
  if (influencers.length === 0) {
    influencers = [
      {
        id: "demo-inf-1",
        name: "Aman Rawat",
        email: "aman@creator.com",
        createdAt: new Date().toISOString(),
        codes: [
          {
            id: "code-1",
            code: "AMAN_IG",
            commissionRate: 15,
            isActive: true,
            attributions: [{ id: "attr-1", subtotalAmount: 18450 }],
          },
          {
            id: "code-2",
            code: "AMAN_YT",
            commissionRate: 18,
            isActive: true,
            attributions: [{ id: "attr-2", subtotalAmount: 32000 }],
          },
          {
            id: "code-3",
            code: "AMAN10",
            commissionRate: 15,
            isActive: true,
            attributions: [{ id: "attr-3", subtotalAmount: 12500 }],
          },
        ],
      },
      {
        id: "demo-inf-2",
        name: "Priya Sharma",
        email: "priya.fashion@social.io",
        createdAt: new Date().toISOString(),
        codes: [
          {
            id: "code-4",
            code: "PRIYA10",
            commissionRate: 15,
            isActive: true,
            attributions: [{ id: "attr-4", subtotalAmount: 45000 }],
          },
          {
            id: "code-5",
            code: "PRIYA_FESTIVE",
            commissionRate: 20,
            isActive: true,
            attributions: [{ id: "attr-5", subtotalAmount: 28900 }],
          },
        ],
      },
      {
        id: "demo-inf-3",
        name: "BN49 Partner Program",
        email: "partners@bn49.com",
        createdAt: new Date().toISOString(),
        codes: [
          {
            id: "code-6",
            code: "CLIENTMEET10",
            commissionRate: 15,
            isActive: true,
            attributions: [{ id: "attr-6", subtotalAmount: 15900 }],
          },
          {
            id: "code-7",
            code: "BN49INFLUENCER10",
            commissionRate: 15,
            isActive: true,
            attributions: [{ id: "attr-7", subtotalAmount: 8500 }],
          },
        ],
      },
    ];
  }

  return (
    <div className="p-6 max-w-7xl mx-auto">
      <InfluencerTable initialInfluencers={influencers} />
    </div>
  );
}
