"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Lock, Mail, ArrowRight, ShieldCheck, Zap } from "lucide-react";
import OnaagaLogo from "@/components/OnaagaLogo";

export default function AdminLogin() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    // Simulate login
    setTimeout(() => {
      router.push("/admin");
    }, 1500);
  };

  const handleFreeAccess = () => {
    setLoading(true);
    setTimeout(() => {
      router.push("/admin");
    }, 800);
  };

  return (
    <main className="min-h-screen bg-[#F7F7F7] flex items-center justify-center p-4 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute top-0 right-0 w-[50%] h-full bg-[#D21F3C]/5 -skew-x-12 translate-x-1/4 pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-[#FDC300]/10 rounded-full blur-3xl pointer-events-none" />

      <div className="w-full max-w-md relative z-10">
        {/* Logo */}
        <div className="flex flex-col items-center mb-8">
          <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center shadow-xl mb-4">
            <OnaagaLogo size={48} />
          </div>
          <h1 className="text-2xl font-black text-[#1A1A1A]">
            Admin<span className="text-[#D21F3C]">Portal</span>
          </h1>
          <p className="text-gray-500 text-sm mt-1">Authorized Access Only</p>
        </div>

        {/* Login Card */}
        <div className="bg-white rounded-[2.5rem] shadow-2xl shadow-black/5 border border-gray-100 p-8 sm:p-10">
          <form onSubmit={handleLogin} className="space-y-5">
            <div>
              <label className="block text-xs font-bold text-gray-400 uppercase tracking-widest mb-2 ml-1">
                Admin Email
              </label>
              <div className="relative">
                <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                <input
                  type="email"
                  required
                  placeholder="admin@onaaga.ng"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full bg-[#F7F7F7] border-2 border-transparent focus:border-[#D21F3C]/20 focus:bg-white rounded-2xl px-12 py-4 text-sm font-medium transition-all outline-none"
                />
              </div>
            </div>

            <div>
              <label className="block text-xs font-bold text-gray-400 uppercase tracking-widest mb-2 ml-1">
                Security Key
              </label>
              <div className="relative">
                <Lock className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                <input
                  type="password"
                  required
                  placeholder="â€¢â€¢â€¢â€¢â€¢â€¢â€¢â€¢"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full bg-[#F7F7F7] border-2 border-transparent focus:border-[#D21F3C]/20 focus:bg-white rounded-2xl px-12 py-4 text-sm font-medium transition-all outline-none"
                />
              </div>
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full bg-[#1A1A1A] text-white font-bold py-4 rounded-2xl flex items-center justify-center gap-2 hover:bg-[#D21F3C] transition-all duration-300 shadow-lg shadow-black/10 disabled:opacity-50"
            >
              {loading ? (
                <Zap className="w-5 h-5 animate-pulse" />
              ) : (
                <>
                  Enter Dashboard <ArrowRight className="w-5 h-5" />
                </>
              )}
            </button>
          </form>

          <div className="relative my-8">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-gray-100"></div>
            </div>
            <div className="relative flex justify-center text-xs uppercase">
              <span className="bg-white px-4 text-gray-400 font-bold tracking-widest">Developer Mode</span>
            </div>
          </div>

          {/* Free Access Button */}
          <button
            onClick={handleFreeAccess}
            disabled={loading}
            className="w-full bg-[#D21F3C]/10 text-[#D21F3C] font-bold py-4 rounded-2xl border-2 border-dashed border-[#D21F3C]/30 flex items-center justify-center gap-2 hover:bg-[#D21F3C]/20 transition-all duration-300 group"
          >
            <ShieldCheck className="w-5 h-5 group-hover:scale-110 transition-transform" />
            Bypass Login (Free Access)
          </button>
        </div>

        <p className="text-center mt-8 text-gray-400 text-xs font-medium">
          &copy; 2026 Onaaga Technologies. All rights reserved.
        </p>
      </div>
    </main>
  );
}
