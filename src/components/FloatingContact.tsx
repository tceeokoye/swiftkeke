"use client";

import { useState } from "react";
import { MessageCircle, Phone, Mail, X, Send } from "lucide-react";

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
          className="flex items-center gap-3 p-3 pr-4 bg-white/[0.05] backdrop-blur-xl border border-white/10 rounded-2xl hover:bg-white/10 hover:border-green-500/50 transition group"
        >
          <div className="w-10 h-10 bg-green-500/20 rounded-xl flex items-center justify-center text-green-400 group-hover:scale-110 transition">
            <MessageCircle className="w-5 h-5" />
          </div>
          <div className="flex flex-col text-left">
            <span className="text-sm font-bold text-white">WhatsApp</span>
            <span className="text-[10px] text-gray-400">Fastest response</span>
          </div>
        </a>

        <a 
          href="mailto:support@swiftkeke.com" 
          className="flex items-center gap-3 p-3 pr-4 bg-white/[0.05] backdrop-blur-xl border border-white/10 rounded-2xl hover:bg-white/10 hover:border-purple-500/50 transition group"
        >
          <div className="w-10 h-10 bg-purple-500/20 rounded-xl flex items-center justify-center text-purple-400 group-hover:scale-110 transition">
            <Mail className="w-5 h-5" />
          </div>
          <div className="flex flex-col text-left">
            <span className="text-sm font-bold text-white">Email Us</span>
            <span className="text-[10px] text-gray-400">support@swiftkeke.com</span>
          </div>
        </a>

        <a 
          href="tel:+2348000000000" 
          className="flex items-center gap-3 p-3 pr-4 bg-white/[0.05] backdrop-blur-xl border border-white/10 rounded-2xl hover:bg-white/10 hover:border-blue-500/50 transition group"
        >
          <div className="w-10 h-10 bg-blue-500/20 rounded-xl flex items-center justify-center text-blue-400 group-hover:scale-110 transition">
            <Phone className="w-5 h-5" />
          </div>
          <div className="flex flex-col text-left">
            <span className="text-sm font-bold text-white">Call Center</span>
            <span className="text-[10px] text-gray-400">24/7 Available</span>
          </div>
        </a>
      </div>

      {/* Main Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="relative w-14 h-14 bg-gradient-to-r from-purple-600 to-violet-600 rounded-full flex items-center justify-center shadow-2xl shadow-purple-900/50 hover:scale-105 transition-all duration-300 z-10 border border-purple-400/30"
      >
        <div className="absolute inset-0 bg-white/20 rounded-full blur animate-pulse-glow pointer-events-none" />
        {isOpen ? (
          <X className="w-6 h-6 text-white" />
        ) : (
          <MessageCircle className="w-6 h-6 text-white" />
        )}
      </button>
    </div>
  );
}
