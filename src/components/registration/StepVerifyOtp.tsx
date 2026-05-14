"use client";

import { useState, useEffect } from "react";
import { ShieldCheck, Lock, Timer } from "lucide-react";
import { RegistrationFormData } from "@/types/global";

interface Props {
  form: RegistrationFormData;
  set: (key: keyof RegistrationFormData, val: any) => void;
  loading: boolean;
  resendCode: (e?: React.MouseEvent) => void;
}

export default function StepVerifyOtp({ form, set, loading, resendCode }: Props) {
  const [timeLeft, setTimeLeft] = useState(0);
  const labelClass = "block text-xs font-semibold text-[#888888] uppercase tracking-wide mb-1.5";
  const inputClass = "w-full bg-[#F7F7F7] border border-gray-200 rounded-xl px-4 py-3.5 text-sm text-[#1A1A1A] placeholder-[#A0ADCC] focus:outline-none focus:border-[#D21F3C]/50 transition-all";

  useEffect(() => {
    if (timeLeft <= 0) return;
    const interval = setInterval(() => {
      setTimeLeft((prev) => prev - 1);
    }, 1000);
    return () => clearInterval(interval);
  }, [timeLeft]);

  const handleResend = (e?: React.MouseEvent) => {
    if (timeLeft > 0) return;
    resendCode(e);
    setTimeLeft(120); // 2 minutes
  };

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs.toString().padStart(2, '0')}`;
  };

  return (
    <div className="space-y-5 animate-fadeInUp">
      <h3 className="text-xl font-bold text-[#1A1A1A] flex items-center gap-2">
        <ShieldCheck className="w-5 h-5 text-[#D21F3C]" /> Verify Email
      </h3>
      <p className="text-sm text-gray-500">We&apos;ve sent a verification code to <span className="font-bold text-[#1A1A1A]">{form.email}</span>. Enter it below to continue.</p>
      <div>
        <label className={labelClass}>Verification Code *</label>
        <div className="relative">
          <Lock className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-[#D21F3C]" />
          <input 
            className={`${inputClass} pl-10 tracking-[1em] font-mono text-lg`} 
            maxLength={6} 
            placeholder="000000" 
            value={form.otp || ""} 
            onChange={(e) => set("otp", e.target.value.replace(/\D/g, ""))} 
          />
        </div>
        <div className="flex items-center justify-between mt-3">
          <button 
            onClick={handleResend}
            disabled={loading || timeLeft > 0}
            className="text-xs font-semibold text-[#D21F3C] hover:underline disabled:text-gray-400 disabled:no-underline flex items-center gap-1.5 transition-all cursor-pointer"
          >
            {loading ? "Resending..." : timeLeft > 0 ? `Resend in ${formatTime(timeLeft)}` : "Resend code"}
          </button>
          {timeLeft > 0 && (
            <div className="flex items-center gap-1.5 text-[10px] font-bold text-gray-400 uppercase tracking-widest">
              <Timer className="w-3 h-3" /> Waiting Period
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
