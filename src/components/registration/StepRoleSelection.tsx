"use client";

import Image from "next/image";
import { UserPlus, Car, User } from "lucide-react";
import { RegistrationFormData } from "@/types/global";

interface Props {
  accountType: string | null;
  set: (key: keyof RegistrationFormData, val: RegistrationFormData[keyof RegistrationFormData]) => void;
}

export default function StepRoleSelection({ accountType, set }: Props) {
  return (
    <div className="space-y-6 animate-fadeInUp">
      <h3 className="text-xl font-bold text-[#1A1A1A] flex items-center gap-2">
        <UserPlus className="w-5 h-5 text-[#DE2910]" /> Choose Your Path
      </h3>
      <div className="grid sm:grid-cols-2 gap-6">
        <button 
          onClick={() => set("accountType", "driver")}
          className={`relative overflow-hidden group p-1 rounded-3xl border-2 transition-all duration-300 cursor-pointer text-left ${accountType === "driver" ? "border-[#DE2910] ring-4 ring-[#DE2910]/10" : "border-gray-100 hover:border-[#DE2910]/30 bg-[#F7F7F7]"}`}
        >
          <div className="relative aspect-4/3 w-full rounded-2xl overflow-hidden bg-white mb-4">
            <Image src="/images/rider_sketch.png" alt="Driver Sketch" fill className={`object-cover transition-transform duration-500 group-hover:scale-105 ${accountType === "driver" ? "scale-105" : ""}`} />
            <div className="absolute inset-0 bg-linear-to-t from-black/20 to-transparent" />
            <div className={`absolute top-4 right-4 w-8 h-8 rounded-full flex items-center justify-center transition-all ${accountType === "driver" ? "bg-[#DE2910] text-white scale-110" : "bg-white/80 text-gray-400"}`}>
              <Car className="w-4 h-4" />
            </div>
          </div>
          <div className="px-5 pb-6">
            <div className="font-black text-lg text-[#1A1A1A] mb-2">Apply to Drive</div>
            <div className="text-sm text-[#555555] leading-relaxed">Earn money on your own schedule. Join our fleet of professional drivers.</div>
          </div>
        </button>
        <button 
          onClick={() => set("accountType", "passenger")}
          className={`relative overflow-hidden group p-1 rounded-3xl border-2 transition-all duration-300 cursor-pointer text-left ${accountType === "passenger" ? "border-[#DE2910] ring-4 ring-[#DE2910]/10" : "border-gray-100 hover:border-[#DE2910]/30 bg-[#F7F7F7]"}`}
        >
          <div className="relative aspect-4/3 w-full rounded-2xl overflow-hidden bg-white mb-4">
            <Image src="/images/passenger_sketch.png" alt="Passenger Sketch" fill className={`object-cover transition-transform duration-500 group-hover:scale-105 ${accountType === "passenger" ? "scale-105" : ""}`} />
            <div className="absolute inset-0 bg-linear-to-t from-black/20 to-transparent" />
            <div className={`absolute top-4 right-4 w-8 h-8 rounded-full flex items-center justify-center transition-all ${accountType === "passenger" ? "bg-[#DE2910] text-white scale-110" : "bg-white/80 text-gray-400"}`}>
              <User className="w-4 h-4" />
            </div>
          </div>
          <div className="px-5 pb-6">
            <div className="font-black text-lg text-[#1A1A1A] mb-2">Join the Waitlist</div>
            <div className="text-sm text-[#555555] leading-relaxed">Be first to ride. Get early access and exclusive discounts when we launch.</div>
          </div>
        </button>
      </div>
    </div>
  );
}
