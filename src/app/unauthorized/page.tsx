import Link from 'next/link'

export default function UnauthorizedPage() {
  return (
    <div className="min-h-screen bg-[var(--color-brand-50)] flex flex-col items-center justify-center text-[var(--color-brand-900)]">
      <h1 className="text-4xl font-bold mb-4">Unauthorized</h1>
      <p className="mb-6 text-[var(--color-brand-600)]">You do not have permission to view this page.</p>
      <Link href="/" className="bg-[var(--color-brand-600)] text-white px-6 py-2 rounded-lg font-semibold hover:bg-[var(--color-brand-900)] transition-colors">
        Go Back to Login
      </Link>
    </div>
  )
}
