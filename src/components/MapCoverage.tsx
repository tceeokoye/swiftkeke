"use client";

import { MapPin, Navigation } from "lucide-react";

export default function MapCoverage() {
  return (
    <section className="py-24 lg:py-32 relative overflow-hidden bg-[#F7F7F7]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          {/* Visual Map Side */}
          <div className="relative w-full aspect-square max-w-md mx-auto lg:max-w-none lg:aspect-auto lg:h-[500px] bg-white border border-gray-100 rounded-[3rem] p-8 overflow-hidden shadow-lg">
            {/* Map background grid */}
            <div className="absolute inset-0 opacity-15"
              style={{
                backgroundImage: "linear-gradient(rgba(210,31,60,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(210,31,60,0.3) 1px, transparent 1px)",
                backgroundSize: "24px 24px",
              }}
            />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-[#D21F3C]/8 rounded-full blur-3xl pointer-events-none" />
            
            {/* SVG Routes */}
            <svg className="absolute inset-0 w-full h-full pointer-events-none" viewBox="0 0 400 400">
              <path d="M 100 150 Q 200 50 300 200 T 250 350" fill="none" stroke="rgba(210,31,60,0.4)" strokeWidth="3" strokeDasharray="8 8" className="animate-pulse" />
              <path d="M 80 250 Q 150 300 250 350" fill="none" stroke="rgba(253,195,0,0.5)" strokeWidth="2" strokeDasharray="6 6" />
            </svg>

            {/* Map Pins / Cars */}
            <div className="absolute top-[35%] left-[25%] animate-float" style={{ animationDelay: "0s" }}>
              <div className="w-10 h-10 bg-[#D21F3C]/15 border border-[#D21F3C]/40 rounded-full flex items-center justify-center relative">
                <div className="absolute inset-0 bg-[#D21F3C]/15 rounded-full animate-ping" />
                <MapPin className="w-5 h-5 text-[#D21F3C]" />
              </div>
              <div className="mt-2 text-center text-xs font-bold text-[#1A1A1A] bg-white/90 px-2 py-1 rounded-lg shadow-sm border border-gray-100">Lagos</div>
            </div>

            <div className="absolute top-[20%] right-[30%] animate-float" style={{ animationDelay: "1s" }}>
              <div className="w-10 h-10 bg-[#FDC300]/20 border border-[#FDC300]/50 rounded-full flex items-center justify-center relative">
                <div className="absolute inset-0 bg-[#FDC300]/15 rounded-full animate-ping" style={{ animationDelay: "1s" }} />
                <MapPin className="w-5 h-5 text-[#FDC300]" />
              </div>
              <div className="mt-2 text-center text-xs font-bold text-[#1A1A1A] bg-white/90 px-2 py-1 rounded-lg shadow-sm border border-gray-100">Abuja</div>
            </div>

            <div className="absolute bottom-[25%] right-[20%] animate-float" style={{ animationDelay: "2s" }}>
              <div className="w-10 h-10 bg-green-500/15 border border-green-400/40 rounded-full flex items-center justify-center relative">
                <div className="absolute inset-0 bg-green-400/15 rounded-full animate-ping" style={{ animationDelay: "2s" }} />
                <MapPin className="w-5 h-5 text-green-500" />
              </div>
              <div className="mt-2 text-center text-xs font-bold text-[#1A1A1A] bg-white/90 px-2 py-1 rounded-lg shadow-sm border border-gray-100">PH</div>
            </div>

            <div className="absolute top-[50%] left-[50%] -translate-x-1/2 -translate-y-1/2 w-12 h-12 bg-[#D21F3C] rounded-xl flex items-center justify-center shadow-xl shadow-[#D21F3C]/30">
              <Navigation className="w-6 h-6 text-white" />
            </div>
          </div>

          {/* Content Side */}
          <div>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#D21F3C]/10 border border-[#D21F3C]/20 text-[#D21F3C] text-sm font-bold mb-6">
              Coverage & Navigation
            </div>
            <h2 className="text-4xl lg:text-5xl font-black text-[#1A1A1A] mb-5">
              Expanding Across <span className="gradient-text block">Nigeria Fast</span>
            </h2>
            <p className="text-[#555555] text-lg leading-relaxed mb-8">
              Our advanced mapping technology ensures you always get the best routes, avoiding traffic and maximizing your time on every trip.
            </p>
            
            <div className="space-y-6">
              {[
                { title: "Smart Routing", desc: "Built-in navigation calculates the fastest routes in real-time." },
                { title: "High-Demand Hotspots", desc: "The map highlights areas with high passenger demand to help you earn more." },
                { title: "National Expansion", desc: "We are live in 5 cities and launching in 3 more before end of year." },
              ].map(({ title, desc }, i) => (
                <div key={i} className="flex gap-4">
                  <div className="w-1.5 h-auto bg-gradient-to-b from-[#D21F3C] to-[#FDC300] rounded-full" />
                  <div>
                    <h4 className="text-lg font-bold text-[#1A1A1A] mb-1">{title}</h4>
                    <p className="text-sm text-[#888888]">{desc}</p>
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
