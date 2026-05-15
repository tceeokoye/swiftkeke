"use client";

import { Check, Apple, Play, MapPin, Star } from "lucide-react";
import Image from "next/image";

const perks = [
  "Real-time GPS driver tracking",
  "In-app chat with your driver",
  "Trip history and receipts",
  "Scheduled rides and reminders",
  "Multiple payment options",
];

export default function AppDownload() {
  return (
    <section id="app" className="py-24 lg:py-32 relative overflow-hidden bg-[#F7F7F7]">
      {/* Background accent */}
      <div className="absolute left-0 top-1/4 w-80 h-80 bg-[#D21F3C]/8 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute right-0 bottom-1/4 w-60 h-60 bg-[#FDC300]/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Text */}
          <div>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#D21F3C]/10 border border-[#D21F3C]/20 text-[#D21F3C] text-sm font-bold mb-6">
              Mobile App
            </div>
            <h2 className="text-4xl lg:text-5xl font-black text-[#1A1A1A] mb-5">
              Download the{" "}
              <span className="gradient-text block">Driver App</span>
            </h2>
            <p className="text-[#555555] text-lg leading-relaxed mb-8">
              Accept ride requests, track your earnings, manage your schedule, and get 24/7 support - all from your phone. Available for iOS and Android.
            </p>

            <ul className="space-y-3 mb-10">
              {perks.map((perk) => (
                <li key={perk} className="flex items-center gap-3 text-sm text-[#555555]">
                  <div className="w-5 h-5 rounded-full bg-[#D21F3C]/15 border border-[#D21F3C]/30 flex items-center justify-center shrink-0">
                    <Check className="w-3 h-3 text-[#D21F3C]" />
                  </div>
                  {perk}
                </li>
              ))}
            </ul>

            {/* Store buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="#"
                id="appStoreBtn"
                className="flex items-center gap-4 px-6 py-4 bg-[#1A1A1A] border border-[#1A1A1A] rounded-2xl hover:bg-[#D21F3C] hover:border-[#D21F3C] transition-all duration-300 group"
              >
                <Apple className="w-7 h-7 text-white" />
                <div>
                  <div className="text-xs text-white/60">Download on the</div>
                  <div className="text-sm font-bold text-white">App Store</div>
                </div>
              </a>
              <a
                href="#"
                id="playStoreBtn"
                className="flex items-center gap-4 px-6 py-4 bg-[#1A1A1A] border border-[#1A1A1A] rounded-2xl hover:bg-[#D21F3C] hover:border-[#D21F3C] transition-all duration-300 group"
              >
                <Play className="w-7 h-7 text-white" fill="currentColor" />
                <div>
                  <div className="text-xs text-white/60">Get it on</div>
                  <div className="text-sm font-bold text-white">Google Play</div>
                </div>
              </a>
            </div>
          </div>

          {/* Visual with Image */}
          <div className="relative flex items-center justify-center min-h-[400px]">
            <div className="absolute -inset-4 bg-[#FDC300]/10 rounded-[3rem] transform rotate-3" />

            <div className="relative z-10 w-full max-w-sm aspect-[4/5] rounded-[2.5rem] overflow-hidden shadow-2xl border border-white animate-float">
              <Image 
                src="/uba-passenger.png" 
                alt="Happy Onaaga passenger relaxing in the back seat" 
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent" />
              
              {/* App Download Prompt Overlay */}
              <div className="absolute bottom-6 left-6 right-6 text-white text-center">
                <div className="text-xl font-black mb-2">Ready to Ride?</div>
                <div className="text-sm text-white/80">Get the app and book your first ride in seconds.</div>
              </div>
            </div>

            {/* Rating badge overlay */}
            <div className="absolute -bottom-4 -left-4 bg-white border border-gray-100 rounded-2xl px-5 py-4 shadow-xl z-20 animate-fadeInUp" style={{ animationDelay: '0.3s' }}>
              <div className="flex items-center gap-2 mb-1">
                {[1,2,3,4,5].map(i => <Star key={i} className="w-4 h-4 text-[#FDC300]" fill="currentColor" />)}
              </div>
              <div className="text-[#1A1A1A] text-sm font-bold">"Best ride app!"</div>
              <div className="text-[#888888] text-xs">50K+ reviews</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
