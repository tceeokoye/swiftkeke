"use client";

import { Phone } from "lucide-react";
import { RegistrationFormData } from "@/types/global";

interface Props {
  form: RegistrationFormData;
  set: (key: keyof RegistrationFormData, val: any) => void;
}

export default function StepContactInfo({ form, set }: Props) {
  const labelClass = "block text-xs font-semibold text-[#888888] uppercase tracking-wide mb-1.5";
  const inputClass = "w-full bg-[#F7F7F7] border border-gray-200 rounded-xl px-4 py-3.5 text-sm text-[#1A1A1A] placeholder-[#A0ADCC] focus:outline-none focus:border-[#D21F3C]/50 transition-all";

  return (
    <div className="space-y-5 animate-fadeInUp">
      <h3 className="text-xl font-bold text-[#1A1A1A] flex items-center gap-2">
        <Phone className="w-5 h-5 text-[#D21F3C]" /> Contact Information
      </h3>
      <div>
        <label className={labelClass}>Phone Number *</label>
        <div className="relative">
          <div className="absolute left-3.5 top-1/2 -translate-y-1/2 flex items-center gap-1.5 pointer-events-none border-r border-gray-200 pr-2 h-5">
            <Phone className="w-3.5 h-3.5 text-[#D21F3C]" />
            <span className="text-sm font-bold text-[#1A1A1A]">+234</span>
          </div>
          <input 
            className={`${inputClass} pl-20`} 
            type="tel" 
            placeholder="801 234 5678" 
            value={form.phone?.replace("+234", "") || ""} 
            onChange={(e) => {
              let val = e.target.value.replace(/\D/g, "");
              if (val.startsWith("0")) val = val.substring(1);
              set("phone", `+234${val}`);
            }} 
          />
        </div>
      </div>
    </div>
  );
}
