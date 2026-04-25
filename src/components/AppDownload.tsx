"use client";

import { Check, Apple, Play } from "lucide-react";

const perks = [
  "Real-time GPS driver tracking",
  "In-app chat with your driver",
  "Trip history and receipts",
  "Scheduled rides and reminders",
  "Multiple payment options",
];

export default function AppDownload() {
  return (
    <section id="app" className="py-24 lg:py-32 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-950/30 via-transparent to-violet-950/20 pointer-events-none" />
      <div className="absolute left-0 top-1/4 w-80 h-80 bg-purple-700/15 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Text */}
          <div>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-purple-900/30 border border-purple-700/40 text-purple-300 text-sm font-medium mb-6">
              Mobile App
            </div>
            <h2 className="text-4xl lg:text-5xl font-black text-white mb-5">
              Download the{" "}
              <span className="gradient-text block">SwiftKeke App</span>
            </h2>
            <p className="text-gray-400 text-lg leading-relaxed mb-8">
              Book rides, track your driver, manage payments, and access exclusive deals — all from your phone. Available for iOS and Android.
            </p>

            <ul className="space-y-3 mb-10">
              {perks.map((perk) => (
                <li key={perk} className="flex items-center gap-3 text-sm text-gray-300">
                  <div className="w-5 h-5 rounded-full bg-purple-700/30 border border-purple-600/40 flex items-center justify-center shrink-0">
                    <Check className="w-3 h-3 text-purple-400" />
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
                className="flex items-center gap-4 px-6 py-4 bg-white/5 border border-white/10 rounded-2xl hover:bg-white/10 hover:border-purple-500/30 transition-all duration-200 group"
              >
                <Apple className="w-7 h-7 text-white group-hover:text-purple-300 transition" />
                <div>
                  <div className="text-xs text-gray-500">Download on the</div>
                  <div className="text-sm font-bold text-white">App Store</div>
                </div>
              </a>
              <a
                href="#"
                id="playStoreBtn"
                className="flex items-center gap-4 px-6 py-4 bg-white/5 border border-white/10 rounded-2xl hover:bg-white/10 hover:border-purple-500/30 transition-all duration-200 group"
              >
                <Play className="w-7 h-7 text-white group-hover:text-purple-300 transition" fill="currentColor" />
                <div>
                  <div className="text-xs text-gray-500">Get it on</div>
                  <div className="text-sm font-bold text-white">Google Play</div>
                </div>
              </a>
            </div>
          </div>

          {/* Visual */}
          <div className="relative flex items-center justify-center min-h-[400px]">
            <div className="absolute w-72 h-72 bg-purple-600/20 rounded-full blur-3xl" />

            {/* Main phone card */}
            <div className="relative z-10 w-64 bg-[#13131f] border border-purple-800/40 rounded-[2.5rem] p-5 shadow-2xl shadow-purple-900/40 animate-float">
              {/* Status bar */}
              <div className="flex justify-between items-center mb-4 px-1">
                <span className="text-xs text-gray-600">9:41</span>
                <div className="flex gap-1">
                  <div className="w-4 h-2 rounded-sm bg-green-400" />
                </div>
              </div>

              {/* App header */}
              <div className="flex items-center gap-2 mb-4">
                <div className="w-8 h-8 rounded-xl bg-gradient-to-br from-purple-600 to-violet-700 flex items-center justify-center">
                  <span className="text-white text-xs font-black">SK</span>
                </div>
                <div>
                  <div className="text-xs font-bold text-white">SwiftKeke</div>
                  <div className="text-[10px] text-green-400">● Active</div>
                </div>
              </div>

              {/* Mini map */}
              <div className="w-full h-28 rounded-xl bg-[#1a1a2e] mb-4 relative overflow-hidden">
                <div className="absolute inset-0 opacity-20"
                  style={{
                    backgroundImage: "linear-gradient(rgba(168,85,247,0.4) 1px, transparent 1px), linear-gradient(90deg, rgba(168,85,247,0.4) 1px, transparent 1px)",
                    backgroundSize: "16px 16px",
                  }}
                />
                <svg className="absolute inset-0 w-full h-full" viewBox="0 0 256 112">
                  <path d="M20 90 Q80 40 130 55 Q180 70 236 20" stroke="#a855f7" strokeWidth="2.5" fill="none" strokeDasharray="5 3" />
                  <circle cx="20" cy="90" r="5" fill="#10b981" />
                  <circle cx="236" cy="20" r="5" fill="#a855f7" />
                </svg>
              </div>

              {/* Driver info */}
              <div className="p-3 bg-white/5 rounded-xl mb-3">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-full bg-gradient-to-br from-purple-600 to-violet-700 flex items-center justify-center text-[10px] text-white font-bold">KD</div>
                  <div>
                    <div className="text-xs font-bold text-white">Kunle Dada</div>
                    <div className="text-[10px] text-yellow-400">★ 4.9 · Keke Rider</div>
                  </div>
                  <div className="ml-auto text-[10px] text-purple-400 font-bold">2 min</div>
                </div>
              </div>

              <button className="w-full py-2.5 bg-gradient-to-r from-purple-600 to-violet-600 text-white text-xs font-bold rounded-xl">
                Track Driver
              </button>
            </div>

            {/* Rating badge */}
            <div className="absolute bottom-8 -left-4 bg-[#1a1a2e] border border-yellow-500/20 rounded-2xl px-4 py-3 shadow-xl z-20">
              <div className="text-yellow-400 text-sm font-black">★★★★★</div>
              <div className="text-white text-xs font-bold">4.9 / 5</div>
              <div className="text-gray-600 text-[10px]">50K+ reviews</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
