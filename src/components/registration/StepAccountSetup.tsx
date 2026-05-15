"use client";

import { Lock, Mail, Eye, EyeOff } from "lucide-react";
import { RegistrationFormData } from "@/types/global";

interface Props {
  form: RegistrationFormData;
  set: (key: keyof RegistrationFormData, val: any) => void;
  showPassword: boolean;
  setShowPassword: (val: boolean) => void;
  checkPasswordStrength: (pass: string) => number;
  getStrengthText: (score: number) => string;
  getStrengthColor: (score: number) => string;
}

export default function StepAccountSetup({ 
  form, set, showPassword, setShowPassword, 
  checkPasswordStrength, getStrengthText, getStrengthColor 
}: Props) {
  const labelClass = "block text-xs font-semibold text-[#888888] uppercase tracking-wide mb-1.5";
  const inputClass = "w-full bg-[#F7F7F7] border border-gray-200 rounded-xl px-4 py-3.5 text-sm text-[#1A1A1A] placeholder-[#A0ADCC] focus:outline-none focus:border-[#D21F3C]/50 transition-all";

  return (
    <div className="space-y-5 animate-fadeInUp">
      <h3 className="text-xl font-bold text-[#1A1A1A] flex items-center gap-2">
        <Lock className="w-5 h-5 text-[#D21F3C]" /> Account Setup
      </h3>
      <p className="text-sm text-gray-500">Create your account to continue the registration.</p>
      <div>
        <label className={labelClass}>Email Address *</label>
        <div className="relative">
          <Mail className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-[#D21F3C]" />
          <input className={`${inputClass} pl-10`} type="email" placeholder="your@email.com" value={form.email || ""} onChange={(e) => set("email", e.target.value)} />
        </div>
      </div>
      <div className="grid sm:grid-cols-2 gap-4">
        <div>
          <label className={labelClass}>Password *</label>
          <div className="relative">
            <Lock className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-[#D21F3C]" />
            <input className={`${inputClass} pl-10 pr-10`} type={showPassword ? "text" : "password"} placeholder="Create password" value={form.password || ""} onChange={(e) => set("password", e.target.value)} />
            <button type="button" onClick={() => setShowPassword(!showPassword)} className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-[#D21F3C] transition-colors">
              {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
            </button>
          </div>
          {form.password && (
            <div className="mt-2">
              <div className="flex justify-between items-center mb-1">
                <span className="text-[10px] font-bold text-gray-400 uppercase">Strength: {getStrengthText(checkPasswordStrength(form.password))}</span>
              </div>
              <div className="h-1 w-full bg-gray-100 rounded-full overflow-hidden">
                <div 
                  className={`h-full transition-all duration-500 ${getStrengthColor(checkPasswordStrength(form.password))}`} 
                  style={{ width: `${(checkPasswordStrength(form.password) / 5) * 100}%` }} 
                />
              </div>
            </div>
          )}
        </div>
        <div>
          <label className={labelClass}>Confirm Password *</label>
          <div className="relative">
            <Lock className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-[#D21F3C]" />
            <input className={`${inputClass} pl-10 pr-10`} type={showPassword ? "text" : "password"} placeholder="Confirm password" value={form.confirmPassword || ""} onChange={(e) => set("confirmPassword", e.target.value)} />
          </div>
        </div>
      </div>
    </div>
  );
}
