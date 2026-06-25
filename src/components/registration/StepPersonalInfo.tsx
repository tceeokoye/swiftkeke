"use client";

import { User, Phone } from "lucide-react";
import { RegistrationFormData } from "@/types/global";

interface Props {
  form: RegistrationFormData;
  set: (key: keyof RegistrationFormData, val: any) => void;
  isPassenger?: boolean;
}

export default function StepPersonalInfo({ form, set, isPassenger }: Props) {
  const labelClass = "block text-[13px] font-bold text-[#1A1A1A] mb-2";
  const inputClass = "w-full bg-gray-50/50 border border-gray-200 rounded-xl px-4 py-3.5 text-[15px] text-[#1A1A1A] placeholder-gray-400 focus:outline-none focus:border-[#DE2910] focus:ring-1 focus:ring-[#DE2910] focus:bg-white transition-all";

  return (
    <div className="space-y-5 animate-fadeInUp">
      <h3 className="text-xl font-bold text-[#1A1A1A] flex items-center gap-2">
        <User className="w-5 h-5 text-[#DE2910]" /> {isPassenger ? "Waitlist Information" : "Personal Information"}
      </h3>
      {isPassenger && <p className="text-sm text-gray-500">Just a few more details and you&apos;re set.</p>}
      
      <div className="grid sm:grid-cols-2 gap-4">
        <div>
          <label className={labelClass}>First Name *</label>
          <input className={inputClass} placeholder="e.g. Chinedu" value={form.firstName || ""} onChange={(e) => set("firstName", e.target.value)} />
        </div>
        <div>
          <label className={labelClass}>Last Name *</label>
          <input className={inputClass} placeholder="e.g. Okafor" value={form.lastName || ""} onChange={(e) => set("lastName", e.target.value)} />
        </div>
      </div>

      {!isPassenger && (
        <div>
          <label className={labelClass}>Middle Name (Optional)</label>
          <input className={inputClass} placeholder="e.g. Emeka" value={form.middleName || ""} onChange={(e) => set("middleName", e.target.value)} />
        </div>
      )}

      {isPassenger && (
        <div>
          <label className={labelClass}>Phone Number *</label>
          <div className="relative">
            <div className="absolute left-3.5 top-1/2 -translate-y-1/2 flex items-center gap-1.5 pointer-events-none border-r border-gray-200 pr-2 h-5">
              <Phone className="w-3.5 h-3.5 text-[#DE2910]" />
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
      )}
    </div>
  );
}
