"use client";

import { useState } from "react";
import { MessageCircle, Phone, Mail, X } from "lucide-react";

export default function FloatingContact() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="fixed bottom-6 right-6 z-[100] flex flex-col items-end gap-4">
      {/* Menu Options */}
      <div 
        className={`flex flex-col gap-3 transition-all duration-300 origin-bottom-right ${
          isOpen ? "opacity-100 scale-100 translate-y-0" : "opacity-0 scale-50 translate-y-10 pointer-events-none"
        }`}
      >
        <a 
          href="https://wa.me/2348000000000" 
          target="_blank" 
          rel="noreferrer"
          className="flex items-center gap-3 p-3 pr-4 bg-white border border-gray-100 rounded-2xl shadow-lg hover:border-green-400/50 hover:shadow-xl transition group"
        >
          <div className="w-10 h-10 bg-green-500/10 rounded-xl flex items-center justify-center text-green-500 group-hover:scale-110 transition">
            <MessageCircle className="w-5 h-5" />
          </div>
          <div className="flex flex-col text-left">
            <span className="text-sm font-bold text-[#1A1A1A]">WhatsApp</span>
            <span className="text-[10px] text-[#888888]">Fastest response</span>
          </div>
        </a>

        <a 
          href="mailto:support@bookride.ng" 
          className="flex items-center gap-3 p-3 pr-4 bg-white border border-gray-100 rounded-2xl shadow-lg hover:border-[#D21F3C]/30 hover:shadow-xl transition group"
        >
          <div className="w-10 h-10 bg-[#D21F3C]/10 rounded-xl flex items-center justify-center text-[#D21F3C] group-hover:scale-110 transition">
            <Mail className="w-5 h-5" />
          </div>
          <div className="flex flex-col text-left">
            <span className="text-sm font-bold text-[#1A1A1A]">Email Us</span>
            <span className="text-[10px] text-[#888888]">support@bookride.ng</span>
          </div>
        </a>

        <a 
          href="tel:+2348000000000" 
          className="flex items-center gap-3 p-3 pr-4 bg-white border border-gray-100 rounded-2xl shadow-lg hover:border-[#FDC300]/50 hover:shadow-xl transition group"
        >
          <div className="w-10 h-10 bg-[#FDC300]/15 rounded-xl flex items-center justify-center text-[#FDC300] group-hover:scale-110 transition">
            <Phone className="w-5 h-5" />
          </div>
          <div className="flex flex-col text-left">
            <span className="text-sm font-bold text-[#1A1A1A]">Call Center</span>
            <span className="text-[10px] text-[#888888]">24/7 Available</span>
          </div>
        </a>
      </div>

      {/* Main Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="relative w-14 h-14 bg-[#D21F3C] rounded-full flex items-center justify-center shadow-2xl shadow-[#D21F3C]/30 hover:bg-[#a8172d] hover:scale-105 transition-all duration-300 z-10"
      >
        {isOpen ? (
          <X className="w-6 h-6 text-white" />
        ) : (
          <MessageCircle className="w-6 h-6 text-white" />
        )}
      </button>
    </div>
  );
}
