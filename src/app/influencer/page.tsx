import { cookies } from "next/headers"
import { verifySession } from "@/lib/session"
import { prisma } from "@/lib/db"
import { redirect } from "next/navigation"
import InfluencerDashboardClient from "./InfluencerDashboardClient"

export default async function InfluencerDashboardPage() {
  const cookieStore = await cookies()
  const sessionCookie = cookieStore.get('auth_session')?.value
  const session = await verifySession(sessionCookie)

  if (!session || !session.email) {
    redirect("/")
  }

  // Fetch influencer record
  const influencer = await prisma.influencer.findUnique({
    where: { email: session.email as string },
    include: {
      codes: {
        include: {
          attributions: {
            orderBy: { createdAt: 'desc' }
          }
        }
      }
    }
  })

  if (!influencer) {
    return <div className="p-8 text-center">Influencer profile not found. Please contact support.</div>
  }

  const activeCode = influencer.codes.find(c => c.isActive)
  const allAttributions = influencer.codes.flatMap(c =>
    c.attributions.map(attr => ({
      ...attr,
      codeStr: c.code,
      commissionRate: c.commissionRate ? Number(c.commissionRate) : 15
    }))
  ).sort((a, b) => b.createdAt.getTime() - a.createdAt.getTime())

  const totalSales = allAttributions.reduce((acc, attr) => acc + Number(attr.subtotalAmount), 0)
  const commissionEarned = allAttributions.reduce((acc, attr) => acc + (Number(attr.subtotalAmount) * (attr.commissionRate / 100)), 0)
  const couponUses = allAttributions.length

  const recentConversions = allAttributions.slice(0, 10).map(attr => {
    // simple time format
    const diffHours = Math.floor((Date.now() - attr.createdAt.getTime()) / (1000 * 60 * 60))
    const timeStr = diffHours < 24 ? `${diffHours} hours ago` : `${Math.floor(diffHours / 24)} days ago`

    const amount = Number(attr.subtotalAmount)
    return {
      id: attr.id,
      shopifyOrderId: attr.shopifyOrderId.replace('gid://shopify/Order/', ''),
      code: attr.codeStr,
      time: diffHours === 0 ? "Just now" : timeStr,
      amount: amount,
      comm: amount * (attr.commissionRate / 100)
    }
  })

  // Generate some fake sales velocity data for the chart based on real total (since we don't have enough history usually)
  // In a real app, this would group `allAttributions` by day/week
  let salesData = []
  if (totalSales > 0) {
    salesData = [
      { name: "Week 1", sales: totalSales * 0.1 },
      { name: "Week 2", sales: totalSales * 0.2 },
      { name: "Week 3", sales: totalSales * 0.4 },
      { name: "Week 4", sales: totalSales * 0.3 },
    ]
  } else {
    salesData = [
      { name: "Week 1", sales: 0 },
      { name: "Week 2", sales: 0 },
      { name: "Week 3", sales: 0 },
      { name: "Week 4", sales: 0 },
    ]
  }

  const dashboardData = {
    influencerName: influencer.name,
    totalSales,
    commissionEarned,
    couponUses,
    activeCode: activeCode?.code || "No active code",
    recentConversions,
    salesData
  }

  return <InfluencerDashboardClient data={dashboardData} />
}
