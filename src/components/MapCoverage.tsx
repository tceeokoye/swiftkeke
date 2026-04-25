"use client";

import { MapPin, Navigation } from "lucide-react";

export default function MapCoverage() {
  return (
    <section className="py-24 lg:py-32 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-purple-950/10 to-transparent pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          {/* Visual Map Side */}
          <div className="relative w-full aspect-square max-w-md mx-auto lg:max-w-none lg:aspect-auto lg:h-[500px] bg-white/[0.02] border border-white/[0.05] rounded-[3rem] p-8 overflow-hidden">
            {/* Map background grid */}
            <div className="absolute inset-0 opacity-20"
              style={{
                backgroundImage: "linear-gradient(rgba(168,85,247,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(168,85,247,0.3) 1px, transparent 1px)",
                backgroundSize: "24px 24px",
              }}
            />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-purple-600/20 rounded-full blur-3xl pointer-events-none" />
            
            {/* SVG Routes */}
            <svg className="absolute inset-0 w-full h-full pointer-events-none" viewBox="0 0 400 400">
              <path d="M 100 150 Q 200 50 300 200 T 250 350" fill="none" stroke="rgba(168,85,247,0.5)" strokeWidth="3" strokeDasharray="8 8" className="animate-pulse" />
              <path d="M 80 250 Q 150 300 250 350" fill="none" stroke="rgba(16,185,129,0.5)" strokeWidth="2" strokeDasharray="6 6" />
            </svg>

            {/* Map Pins / Cars */}
            <div className="absolute top-[35%] left-[25%] animate-float" style={{ animationDelay: "0s" }}>
              <div className="w-10 h-10 bg-purple-600/20 border border-purple-500/50 rounded-full flex items-center justify-center relative">
                <div className="absolute inset-0 bg-purple-500/20 rounded-full animate-ping" />
                <MapPin className="w-5 h-5 text-purple-400" />
              </div>
              <div className="mt-2 text-center text-xs font-bold text-white bg-black/50 px-2 py-1 rounded-lg backdrop-blur-sm">Enugu City</div>
            </div>

            <div className="absolute top-[20%] right-[30%] animate-float" style={{ animationDelay: "1s" }}>
              <div className="w-10 h-10 bg-violet-600/20 border border-violet-500/50 rounded-full flex items-center justify-center relative">
                <div className="absolute inset-0 bg-violet-500/20 rounded-full animate-ping" style={{ animationDelay: "1s" }} />
                <MapPin className="w-5 h-5 text-violet-400" />
              </div>
              <div className="mt-2 text-center text-xs font-bold text-white bg-black/50 px-2 py-1 rounded-lg backdrop-blur-sm">Nsukka</div>
            </div>

            <div className="absolute bottom-[25%] right-[20%] animate-float" style={{ animationDelay: "2s" }}>
              <div className="w-10 h-10 bg-green-600/20 border border-green-500/50 rounded-full flex items-center justify-center relative">
                <div className="absolute inset-0 bg-green-500/20 rounded-full animate-ping" style={{ animationDelay: "2s" }} />
                <MapPin className="w-5 h-5 text-green-400" />
              </div>
              <div className="mt-2 text-center text-xs font-bold text-white bg-black/50 px-2 py-1 rounded-lg backdrop-blur-sm">Agbani</div>
            </div>

            <div className="absolute top-[50%] left-[50%] -translate-x-1/2 -translate-y-1/2 w-12 h-12 bg-white/10 backdrop-blur-xl border border-white/20 rounded-xl flex items-center justify-center shadow-2xl">
              <Navigation className="w-6 h-6 text-white" />
            </div>
          </div>

          {/* Content Side */}
          <div>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-purple-900/30 border border-purple-700/40 text-purple-300 text-sm font-medium mb-6">
              Coverage & Navigation
            </div>
            <h2 className="text-4xl lg:text-5xl font-black text-white mb-5">
              Starting Exclusively <span className="gradient-text block">in Enugu State</span>
            </h2>
            <p className="text-gray-400 text-lg leading-relaxed mb-8">
              Our advanced mapping technology ensures you always get the best routes, avoiding traffic and maximizing your earnings per trip in the Coal City.
            </p>
            
            <div className="space-y-6">
              {[
                { title: "Smart Routing", desc: "Built-in navigation calculates the fastest routes in real-time." },
                { title: "High-Demand Hotspots", desc: "The map highlights areas with high passenger demand to help you earn more." },
                { title: "Exclusive Launch", desc: "We are officially launching in Enugu, connecting riders and drivers across the state." },
              ].map(({ title, desc }, i) => (
                <div key={i} className="flex gap-4">
                  <div className="w-1.5 h-auto bg-gradient-to-b from-purple-500 to-violet-600 rounded-full" />
                  <div>
                    <h4 className="text-lg font-bold text-white mb-1">{title}</h4>
                    <p className="text-sm text-gray-500">{desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
