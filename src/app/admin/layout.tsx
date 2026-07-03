import { cookies } from "next/headers"
import { verifySession } from "@/lib/session"
import { redirect } from "next/navigation"
import Link from "next/link"
import { LayoutDashboard, Users, FileCheck2, LogOut, Crown } from "lucide-react"

export default async function AdminLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const cookieStore = await cookies()
  const sessionCookie = cookieStore.get('auth_session')?.value
  const session = await verifySession(sessionCookie)

  // Double check admin role
  if (!session || session.role !== 'ADMIN') {
    redirect("/")
  }

  return (
    <div className="min-h-screen bg-[var(--color-brand-50)] text-[var(--color-brand-900)] flex overflow-hidden selection:bg-[var(--color-brand-500)] selection:text-white">
      {/* Abstract Background Elements matching Influencer theme */}
      <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] rounded-full bg-[var(--color-brand-500)] opacity-5 blur-3xl mix-blend-multiply pointer-events-none"></div>
      <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] rounded-full bg-[#fcd4b6] opacity-10 blur-3xl mix-blend-multiply pointer-events-none"></div>

      {/* Sidebar */}
      <aside className="w-64 border-r border-[var(--border)] bg-white/40 backdrop-blur-xl z-10 flex flex-col shadow-sm">
        <div className="h-16 flex items-center px-6 border-b border-[var(--border)]">
          <Crown className="w-6 h-6 text-[var(--color-brand-500)] mr-2" />
          <span className="font-bold text-lg tracking-tight">BN49 Admin</span>
        </div>
        
        <nav className="flex-1 py-6 px-4 space-y-1.5">
          <NavLink href="/admin" icon={<LayoutDashboard size={18} />} label="Dashboard" />
          <NavLink href="/admin/b2b" icon={<FileCheck2 size={18} />} label="B2B Approvals" />
          <NavLink href="/admin/influencers" icon={<Users size={18} />} label="Influencers" />
        </nav>

        <div className="p-4 border-t border-[var(--border)] bg-white/30">
          <div className="flex items-center gap-3 px-3 py-2">
            <div className="w-8 h-8 rounded-full bg-[var(--color-brand-500)] flex items-center justify-center text-white font-bold shadow-sm">
              {session.email?.charAt(0).toUpperCase()}
            </div>
            <div className="flex-1 overflow-hidden">
              <p className="text-sm font-semibold truncate text-[var(--color-brand-900)]">{session.email}</p>
              <p className="text-xs text-[var(--color-brand-600)]">Administrator</p>
            </div>
          </div>
          <form action="/api/auth/logout" method="POST" className="mt-2">
            <button className="w-full flex items-center gap-2 px-3 py-2 text-sm text-[var(--color-brand-600)] hover:text-red-600 hover:bg-red-50 rounded-lg transition-colors font-medium">
              <LogOut size={16} />
              Sign Out
            </button>
          </form>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 flex flex-col min-h-screen relative z-10 overflow-y-auto">
        {children}
      </main>
    </div>
  )
}

function NavLink({ href, icon, label }: { href: string, icon: React.ReactNode, label: string }) {
  return (
    <Link 
      href={href}
      className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-[var(--color-brand-700)] hover:text-[var(--color-brand-900)] hover:bg-white/60 transition-all duration-200 group font-semibold text-sm shadow-sm hover:shadow"
    >
      <span className="text-[var(--color-brand-500)] group-hover:text-[var(--color-brand-600)] transition-colors">
        {icon}
      </span>
      {label}
    </Link>
  )
}
