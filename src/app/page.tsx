"use client";

import { useState } from "react";
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";
import { TrendingUp, Users, CheckCircle2, AlertTriangle, Package, Navigation, TrendingDown, Crown, BadgePercent } from "lucide-react";

export default function Dashboard() {
  const [activeTab, setActiveTab] = useState<"influencer" | "distributor">("influencer");

  return (
    <div className="min-h-screen bg-[var(--color-brand-50)] text-[var(--color-brand-900)] p-4 md:p-8 relative overflow-hidden">
      {/* Abstract Background Elements */}
      <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] rounded-full bg-[var(--color-brand-500)] opacity-10 blur-3xl mix-blend-multiply"></div>
      <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] rounded-full bg-[#fcd4b6] opacity-10 blur-3xl mix-blend-multiply"></div>

      <div className="max-w-7xl mx-auto relative z-10 animate-fade-in-up">
        <header className="flex flex-col md:flex-row justify-between items-center mb-12 gap-6">
          <div>
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-[var(--color-brand-900)] mb-2 flex items-center gap-3">
              Partner Portal <Crown className="w-10 h-10 text-[var(--color-brand-500)]" />
            </h1>
            <p className="text-lg text-[var(--color-brand-600)]">
              BN49 Professional Hair Care
            </p>
          </div>
          
          <div className="glass p-1 rounded-xl flex gap-1 shadow-sm">
            <button
              onClick={() => setActiveTab("influencer")}
              className={`px-6 py-2.5 rounded-lg text-sm font-semibold transition-all duration-300 ${
                activeTab === "influencer"
                  ? "bg-[var(--color-brand-900)] text-white shadow-md"
                  : "text-[var(--color-brand-600)] hover:bg-[var(--color-brand-100)]"
              }`}
            >
              Influencer Analytics
            </button>
            <button
              onClick={() => setActiveTab("distributor")}
              className={`px-6 py-2.5 rounded-lg text-sm font-semibold transition-all duration-300 ${
                activeTab === "distributor"
                  ? "bg-[var(--color-brand-900)] text-white shadow-md"
                  : "text-[var(--color-brand-600)] hover:bg-[var(--color-brand-100)]"
              }`}
            >
              Distributor Panel
            </button>
          </div>
        </header>

        <main className="w-full">
          {activeTab === "influencer" && <InfluencerDashboard />}
          {activeTab === "distributor" && <DistributorDashboard />}
        </main>
      </div>
    </div>
  );
}

function InfluencerDashboard() {
  const salesData = [
    { name: "Week 1", sales: 40000 },
    { name: "Week 2", sales: 30000 },
    { name: "Week 3", sales: 55000 },
    { name: "Week 4", sales: 45000 },
    { name: "Week 5", sales: 75000 },
  ];

  const recentConversions = [
    { id: 1, product: "Root Revival Hair oil", code: "BN49HO", time: "2 hours ago", amount: 1550, comm: 232 },
    { id: 2, product: "Root Revival Shampoo", code: "BN49RRS", time: "4 hours ago", amount: 1200, comm: 180 },
    { id: 3, product: "After Wash Hair serum", code: "BN49AFHS", time: "6 hours ago", amount: 2250, comm: 337 },
    { id: 4, product: "Root Revival Conditioner", code: "BN49RRC", time: "12 hours ago", amount: 1200, comm: 180 },
    { id: 5, product: "Root Revival Hair serum", code: "BN49HS", time: "1 day ago", amount: 2600, comm: 390 },
  ];

  return (
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
            <p className="text-sm font-semibold text-[var(--color-brand-900)]">₹2,45,000 / ₹5,00,000</p>
            <p className="text-xs text-[var(--color-brand-600)]">to Platinum (20% commission)</p>
          </div>
        </div>
        <div className="w-full h-3 bg-[var(--color-brand-100)] rounded-full overflow-hidden">
          <div className="h-full bg-gradient-to-r from-[var(--color-brand-500)] to-yellow-500 rounded-full w-[49%] transition-all duration-1000"></div>
        </div>
      </div>

      {/* Metrics Row */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <MetricCard icon={<TrendingUp />} title="Total Sales Generated" value="₹2,45,000" subValue="+12% from last month" trend="up" />
        <MetricCard icon={<BadgePercent />} title="Commission Earned" value="₹36,750" subValue="Pending Payout: ₹12,000" trend="neutral" />
        <MetricCard icon={<Users />} title="Coupon Uses" value="142" subValue="Active Code: GLOWUP20" trend="up" />
      </div>

      {/* Main Content Area */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Chart Area */}
        <div className="lg:col-span-2 glass rounded-2xl p-6 border border-[var(--border)] h-[400px] flex flex-col">
          <h3 className="text-xl font-bold mb-4 text-[var(--color-brand-900)]">Sales Velocity (30 Days)</h3>
          <div className="flex-1 w-full min-h-0">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={salesData} margin={{ top: 10, right: 10, left: 0, bottom: 0 }}>
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
              {recentConversions.map((conv) => (
                <div key={conv.id} className="flex justify-between items-center p-3 rounded-xl hover:bg-white/50 transition-colors border border-transparent hover:border-[var(--border)]">
                  <div>
                    <p className="font-semibold text-sm text-[var(--color-brand-900)]">{conv.product}</p>
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
  );
}

function DistributorDashboard() {
  const [filter, setFilter] = useState<"all" | "pending" | "delivery" | "delivered">("all");

  const orders = [
    { id: 5101, customer: "Glamour Salon", location: "Connaught Place, DL", status: "pending", items: 45 },
    { id: 5102, customer: "Elite Cuts", location: "South Ex, DL", status: "pending", items: 12 },
    { id: 5103, customer: "BN49 Flagship", location: "Saket, DL", status: "delivery", items: 120 },
    { id: 5104, customer: "Urban Oasis", location: "Vasant Kunj, DL", status: "delivery", items: 8 },
    { id: 5105, customer: "Studio 11", location: "Gurugram, HR", status: "delivered", items: 34 },
    { id: 5106, customer: "Luxe Hair", location: "Noida, UP", status: "delivered", items: 60 },
  ];

  const filteredOrders = filter === "all" ? orders : orders.filter(o => o.status === filter);

  return (
    <div className="animate-fade-in-up delay-100 space-y-8">
      {/* Alert Banner */}
      <div className="glass rounded-xl p-4 border border-amber-200 bg-amber-50/50 flex items-start gap-3">
        <AlertTriangle className="w-5 h-5 text-amber-600 mt-0.5" />
        <div>
          <h4 className="font-semibold text-amber-900">Low Inventory Alert</h4>
          <p className="text-sm text-amber-800">Root Revival Hair serum is running low (42 units remaining) at the North India Hub. Please request restock.</p>
        </div>
      </div>

      {/* Metrics Row */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <MetricCard icon={<Package />} title="Pending Fulfillments" value="24" subValue="Requires immediate action" trend="neutral" />
        <MetricCard icon={<Navigation />} title="Out for Delivery" value="12" subValue="Expected today" trend="neutral" />
        <MetricCard icon={<CheckCircle2 />} title="Delivered (This Week)" value="156" subValue="+8% vs last week" trend="up" />
        <MetricCard icon={<Users />} title="Region" value="New Delhi" subValue="North India Hub" trend="neutral" />
      </div>

      {/* Orders Table Area */}
      <div className="glass rounded-2xl p-6 border border-[var(--border)] relative overflow-hidden">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6 gap-4">
          <h3 className="text-xl font-bold text-[var(--color-brand-900)]">Regional Order Queue</h3>
          
          {/* Status Filters */}
          <div className="flex bg-[var(--color-brand-100)]/50 p-1 rounded-lg">
            <button onClick={() => setFilter("all")} className={`px-4 py-1.5 rounded-md text-sm font-semibold transition-all ${filter === "all" ? "bg-white shadow-sm text-[var(--color-brand-900)]" : "text-[var(--color-brand-600)]"}`}>All</button>
            <button onClick={() => setFilter("pending")} className={`px-4 py-1.5 rounded-md text-sm font-semibold transition-all ${filter === "pending" ? "bg-white shadow-sm text-amber-700" : "text-[var(--color-brand-600)]"}`}>Pending</button>
            <button onClick={() => setFilter("delivery")} className={`px-4 py-1.5 rounded-md text-sm font-semibold transition-all ${filter === "delivery" ? "bg-white shadow-sm text-blue-700" : "text-[var(--color-brand-600)]"}`}>Out for Delivery</button>
            <button onClick={() => setFilter("delivered")} className={`px-4 py-1.5 rounded-md text-sm font-semibold transition-all ${filter === "delivered" ? "bg-white shadow-sm text-green-700" : "text-[var(--color-brand-600)]"}`}>Delivered</button>
          </div>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="border-b border-[var(--color-brand-100)]">
                <th className="pb-3 font-semibold text-[var(--color-brand-600)] pl-2">Order ID</th>
                <th className="pb-3 font-semibold text-[var(--color-brand-600)]">Customer</th>
                <th className="pb-3 font-semibold text-[var(--color-brand-600)]">Location</th>
                <th className="pb-3 font-semibold text-[var(--color-brand-600)] text-center">Items</th>
                <th className="pb-3 font-semibold text-[var(--color-brand-600)]">Status</th>
                <th className="pb-3 font-semibold text-[var(--color-brand-600)] text-right pr-2">Action</th>
              </tr>
            </thead>
            <tbody className="text-sm">
              {filteredOrders.length === 0 ? (
                <tr>
                  <td colSpan={6} className="text-center py-12 text-[var(--color-brand-500)]">No orders found for this status.</td>
                </tr>
              ) : (
                filteredOrders.map((order) => (
                  <tr key={order.id} className="border-b border-[var(--color-brand-100)]/50 hover:bg-white/40 transition-colors">
                    <td className="py-4 font-bold pl-2">#BN{order.id}</td>
                    <td className="py-4 font-medium">{order.customer}</td>
                    <td className="py-4 text-[var(--color-brand-600)]">{order.location}</td>
                    <td className="py-4 text-center">{order.items}</td>
                    <td className="py-4">
                      <span className={`px-2.5 py-1 rounded-full text-xs font-bold inline-flex items-center gap-1.5 ${
                        order.status === 'pending' ? 'bg-amber-100 text-amber-700' : 
                        order.status === 'delivery' ? 'bg-blue-100 text-blue-700' : 
                        'bg-green-100 text-green-700'
                      }`}>
                        {order.status === 'pending' && <Package className="w-3 h-3" />}
                        {order.status === 'delivery' && <Navigation className="w-3 h-3" />}
                        {order.status === 'delivered' && <CheckCircle2 className="w-3 h-3" />}
                        {order.status === 'pending' ? 'Pending' : order.status === 'delivery' ? 'Out for Delivery' : 'Delivered'}
                      </span>
                    </td>
                    <td className="py-4 text-right pr-2">
                      <button 
                        className={`text-sm font-semibold px-4 py-1.5 rounded-lg transition-colors ${
                          order.status === 'delivered' 
                          ? 'bg-[var(--color-brand-100)] text-[var(--color-brand-500)] cursor-not-allowed'
                          : 'text-white bg-[var(--color-brand-600)] hover:bg-[var(--color-brand-900)] shadow-sm hover:shadow'
                        }`}
                        disabled={order.status === 'delivered'}
                      >
                        {order.status === 'pending' ? 'Mark Out' : order.status === 'delivery' ? 'Mark Delivered' : 'Done'}
                      </button>
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
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
