"use client";

import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";
import { TrendingUp, Users, CheckCircle2, Crown, BadgePercent, TrendingDown } from "lucide-react";

type DashboardData = {
  influencerName: string;
  totalSales: number;
  commissionEarned: number;
  couponUses: number;
  activeCode: string;
  recentConversions: Array<{
    id: string;
    shopifyOrderId: string;
    code: string;
    time: string;
    amount: number;
    comm: number;
  }>;
  salesData: Array<{
    name: string;
    sales: number;
  }>;
}

export default function InfluencerDashboardClient({ data }: { data: DashboardData }) {
  return (
    <div className="min-h-screen bg-[var(--color-brand-50)] text-[var(--color-brand-900)] p-4 md:p-8 relative overflow-hidden">
      <div className="max-w-7xl mx-auto relative z-10 animate-fade-in-up">
        <header className="mb-12">
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-[var(--color-brand-900)] mb-2 flex items-center gap-3">
            Welcome, {data.influencerName} <Crown className="w-10 h-10 text-[var(--color-brand-500)]" />
          </h1>
          <p className="text-lg text-[var(--color-brand-600)]">
            Your Influencer Analytics Portal
          </p>
        </header>

        <div className="animate-fade-in-up delay-100 space-y-8">
          {/* Tier Progression */}
          <div className="glass rounded-2xl p-6 border border-[var(--border)]">
            <div className="flex justify-between items-end mb-4">
              <div>
                <h3 className="text-lg font-bold text-[var(--color-brand-900)] flex items-center gap-2">
                  <Crown className="w-5 h-5 text-yellow-500" /> Gold Partner
                </h3>
                <p className="text-sm text-[var(--color-brand-600)]">Currently earning 15% commission</p>
              </div>
              <div className="text-right">
                <p className="text-sm font-semibold text-[var(--color-brand-900)]">₹{data.totalSales.toLocaleString()} / ₹5,00,000</p>
                <p className="text-xs text-[var(--color-brand-600)]">to Platinum (20% commission)</p>
              </div>
            </div>
            <div className="w-full h-3 bg-[var(--color-brand-100)] rounded-full overflow-hidden">
              <div className="h-full bg-gradient-to-r from-[var(--color-brand-500)] to-yellow-500 rounded-full transition-all duration-1000" style={{ width: `${Math.min((data.totalSales / 500000) * 100, 100)}%` }}></div>
            </div>
          </div>

          {/* Metrics Row */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <MetricCard icon={<TrendingUp />} title="Total Sales Generated" value={`₹${data.totalSales.toLocaleString()}`} subValue="Lifetime sales" trend="up" />
            <MetricCard icon={<BadgePercent />} title="Commission Earned" value={`₹${data.commissionEarned.toLocaleString()}`} subValue="Total payout value" trend="neutral" />
            <MetricCard icon={<Users />} title="Coupon Uses" value={data.couponUses.toString()} subValue={`Active Code: ${data.activeCode}`} trend="up" />
          </div>

          {/* Main Content Area */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* Chart Area */}
            <div className="lg:col-span-2 glass rounded-2xl p-6 border border-[var(--border)] h-[400px] flex flex-col">
              <h3 className="text-xl font-bold mb-4 text-[var(--color-brand-900)]">Sales Velocity (Last 30 Days)</h3>
              <div className="flex-1 w-full min-h-0">
                <ResponsiveContainer width="100%" height="100%">
                  <AreaChart data={data.salesData} margin={{ top: 10, right: 10, left: 0, bottom: 0 }}>
                    <defs>
                      <linearGradient id="colorSales" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="5%" stopColor="var(--color-brand-500)" stopOpacity={0.8}/>
                        <stop offset="95%" stopColor="var(--color-brand-500)" stopOpacity={0}/>
                      </linearGradient>
                    </defs>
                    <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="rgba(0,0,0,0.05)" />
                    <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{ fontSize: 12, fill: 'var(--color-brand-600)' }} />
                    <YAxis axisLine={false} tickLine={false} tick={{ fontSize: 12, fill: 'var(--color-brand-600)' }} tickFormatter={(val) => `₹${val/1000}k`} />
                    <Tooltip contentStyle={{ borderRadius: '8px', border: 'none', boxShadow: '0 4px 20px rgba(0,0,0,0.1)' }} />
                    <Area type="monotone" dataKey="sales" stroke="var(--color-brand-600)" strokeWidth={3} fillOpacity={1} fill="url(#colorSales)" />
                  </AreaChart>
                </ResponsiveContainer>
              </div>
            </div>
            
            {/* Tools & Recent */}
            <div className="flex flex-col gap-6">
              {/* Recent Conversions */}
              <div className="glass rounded-2xl p-6 border border-[var(--border)] flex-1 overflow-hidden flex flex-col min-h-[400px]">
                <h3 className="text-xl font-bold mb-4 text-[var(--color-brand-900)]">Recent Conversions</h3>
                <div className="space-y-3 overflow-y-auto pr-2 flex-1">
                  {data.recentConversions.length === 0 ? (
                    <div className="text-center text-[var(--color-brand-500)] py-8">
                      No conversions yet. Share your code to get started!
                    </div>
                  ) : data.recentConversions.map((conv) => (
                    <div key={conv.id} className="flex justify-between items-center p-3 rounded-xl hover:bg-white/50 transition-colors border border-transparent hover:border-[var(--border)]">
                      <div>
                        <p className="font-semibold text-sm text-[var(--color-brand-900)]">Order {conv.shopifyOrderId}</p>
                        <p className="text-xs font-mono text-[var(--color-brand-500)] mb-1">{conv.code}</p>
                        <p className="text-xs text-[var(--color-brand-600)]">{conv.time}</p>
                      </div>
                      <div className="text-right">
                        <p className="font-bold text-[var(--color-brand-900)]">₹{conv.amount}</p>
                        <p className="text-xs text-green-600 font-semibold">+₹{conv.comm}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function MetricCard({ title, value, subValue, trend, icon }: { title: string, value: string, subValue: string, trend: "up" | "down" | "neutral", icon: React.ReactNode }) {
  return (
    <div className="glass rounded-2xl p-6 border border-[var(--border)] relative overflow-hidden group hover:shadow-lg transition-all duration-300 bg-white/40">
      <div className="absolute inset-0 bg-gradient-to-br from-white/60 to-transparent"></div>
      <div className="relative z-10">
        <div className="flex justify-between items-start mb-2">
          <h3 className="text-sm font-bold text-[var(--color-brand-600)] tracking-wide">{title}</h3>
          <div className="text-[var(--color-brand-500)] bg-[var(--color-brand-100)] p-2 rounded-xl">
            {icon}
          </div>
        </div>
        <p className="text-3xl md:text-4xl font-black text-[var(--color-brand-900)] mb-2 tracking-tight">{value}</p>
        <div className="flex items-center gap-1.5">
          {trend === "up" && <TrendingUp className="w-4 h-4 text-green-600" />}
          {trend === "down" && <TrendingDown className="w-4 h-4 text-red-600" />}
          <p className={`text-sm font-semibold ${trend === "up" ? "text-green-700" : trend === "down" ? "text-red-700" : "text-[var(--color-brand-600)]"}`}>
            {subValue}
          </p>
        </div>
      </div>
    </div>
  );
}
