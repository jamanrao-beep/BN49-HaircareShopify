"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { Crown } from "lucide-react";

export default function SignupPage() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    try {
      const res = await fetch("/api/auth/signup", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, password }),
      });

      if (!res.ok) {
        const data = await res.json();
        throw new Error(data.error || "Signup failed");
      }

      // Successful signup, redirect to dashboard
      router.push("/influencer");
    } catch (err: any) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-[var(--color-brand-50)] text-[var(--color-brand-900)] flex items-center justify-center p-4 relative overflow-hidden">
      {/* Abstract Background Elements */}
      <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] rounded-full bg-[var(--color-brand-500)] opacity-10 blur-3xl mix-blend-multiply"></div>
      <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] rounded-full bg-[#fcd4b6] opacity-10 blur-3xl mix-blend-multiply"></div>

      <div className="max-w-md w-full glass p-8 rounded-2xl shadow-xl relative z-10 animate-fade-in-up">
        <div className="text-center mb-8">
          <div className="flex justify-center mb-4">
            <Crown className="w-12 h-12 text-[var(--color-brand-500)]" />
          </div>
          <h1 className="text-3xl font-bold text-[var(--color-brand-900)]">Become a Partner</h1>
          <p className="text-[var(--color-brand-600)] mt-2">Sign up to get your exclusive coupon code</p>
        </div>
        
        {error && (
          <div className="bg-red-100 text-red-700 p-3 rounded-lg mb-6 text-sm font-medium border border-red-200">
            {error}
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-5">
          <div>
            <label className="block text-sm font-semibold text-[var(--color-brand-700)] mb-1.5">Full Name</label>
            <input 
              type="text" 
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full px-4 py-2.5 rounded-lg border border-[var(--border)] focus:outline-none focus:ring-2 focus:ring-[var(--color-brand-500)] bg-white/50 focus:bg-white transition-all"
              placeholder="Your Name"
              required 
            />
          </div>
          <div>
            <label className="block text-sm font-semibold text-[var(--color-brand-700)] mb-1.5">Email Address</label>
            <input 
              type="email" 
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-4 py-2.5 rounded-lg border border-[var(--border)] focus:outline-none focus:ring-2 focus:ring-[var(--color-brand-500)] bg-white/50 focus:bg-white transition-all"
              placeholder="name@example.com"
              required 
            />
          </div>
          <div>
            <label className="block text-sm font-semibold text-[var(--color-brand-700)] mb-1.5">Password</label>
            <input 
              type="password" 
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-4 py-2.5 rounded-lg border border-[var(--border)] focus:outline-none focus:ring-2 focus:ring-[var(--color-brand-500)] bg-white/50 focus:bg-white transition-all"
              placeholder="••••••••"
              required 
              minLength={6}
            />
          </div>
          <button 
            type="submit"
            disabled={loading}
            className="w-full bg-[var(--color-brand-600)] hover:bg-[var(--color-brand-900)] text-white font-bold py-3 px-4 rounded-lg transition-all duration-300 shadow-md hover:shadow-lg flex justify-center items-center gap-2"
          >
            {loading ? (
              <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
            ) : "Join Now"}
          </button>
        </form>

        <div className="mt-6 text-center">
          <p className="text-sm text-[var(--color-brand-700)]">
            Already have an account?{" "}
            <Link href="/" className="font-semibold text-[var(--color-brand-900)] hover:underline">
              Sign In
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
