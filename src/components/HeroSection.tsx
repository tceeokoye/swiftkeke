"use client";

import { MapPin, Navigation, Clock, Shield, ChevronRight } from "lucide-react";
import { useState } from "react";
import Image from "next/image";

export default function HeroSection() {
  const [pickup, setPickup] = useState("");
  const [dropoff, setDropoff] = useState("");

  return (
    <section id="home" className="relative min-h-screen flex items-center bg-[#F7F7F7] overflow-hidden pt-16">
      {/* Subtle background pattern */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute top-0 right-0 w-[55%] h-full bg-gradient-to-bl from-[#D21F3C]/8 via-transparent to-transparent" />
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-[#FDC300]/10 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full py-16 lg:py-24">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">

          {/* --- LEFT: Booking Form --- */}
          <div>
            {/* Availability Badge */}
            <div className="inline-flex items-center gap-3 px-1 py-1 pr-4 rounded-full bg-white border border-gray-200/50 shadow-sm mb-8 hover:border-[#D21F3C]/30 transition-colors group cursor-default">
              <span className="flex items-center justify-center bg-[#D21F3C] text-white text-[10px] font-black px-2.5 py-1 rounded-full uppercase tracking-wider">
                Live
              </span>
              <span className="text-xs font-bold text-[#555555] group-hover:text-[#1A1A1A] transition-colors">
                Available in Major Nigerian Cities
              </span>
            </div>

            {/* Location Badge */}
            <div className="inline-flex items-center gap-2 mb-4">
              <div className="flex items-center gap-1.5 px-3 py-1.5 bg-[#F7F7F7] border border-gray-200 rounded-lg text-sm text-[#1A1A1A] font-semibold">
                <MapPin className="w-4 h-4 text-[#D21F3C]" /> Enugu, NG
              </div>
              <button className="text-sm font-semibold text-[#D21F3C] hover:text-[#a8172d] transition">
                Change city
              </button>
            </div>

            <h1 className="text-[2.75rem] sm:text-6xl lg:text-[4rem] font-black text-[#1A1A1A] leading-[1.05] tracking-tight mb-4">
              Request a ride for <br className="hidden sm:block" />
              now or later
            </h1>

            <p className="text-lg text-[#555555] max-w-md leading-relaxed mb-8">
              Add your trip details, hop in, and go.
            </p>

            {/* Booking Card */}
            <div className="bg-white rounded-2xl shadow-2xl shadow-black/10 border border-gray-100 p-6 max-w-md">
              {/* Pickup Now Selector */}
              <button className="flex items-center justify-between w-full px-4 py-3 bg-[#F7F7F7] hover:bg-gray-200/60 rounded-xl transition mb-4">
                <div className="flex items-center gap-2">
                  <Clock className="w-4 h-4 text-[#1A1A1A]" />
                  <span className="text-sm font-bold text-[#1A1A1A]">Pickup now</span>
                </div>
                <ChevronRight className="w-4 h-4 text-[#888888] rotate-90" />
              </button>

              {/* Pickup input */}
              <div className="relative flex items-center gap-3 mb-3">
                <div className="flex flex-col items-center gap-1 shrink-0">
                  <div className="w-2.5 h-2.5 rounded-full bg-[#1A1A1A]" />
                  <div className="w-0.5 h-7 bg-gray-200" />
                </div>
                <input
                  type="text"
                  id="pickupInput"
                  value={pickup}
                  onChange={(e) => setPickup(e.target.value)}
                  placeholder="Pickup location"
                  className="flex-1 bg-[#F7F7F7] border-transparent rounded-xl px-4 py-3.5 text-sm text-[#1A1A1A] font-medium placeholder-[#888888] focus:outline-none focus:bg-white focus:border-[#1A1A1A] border transition-all"
                />
                <button className="shrink-0 w-10 h-10 flex items-center justify-center rounded-xl bg-[#F7F7F7] hover:bg-gray-200 transition">
                  <Navigation className="w-4 h-4 text-[#1A1A1A]" />
                </button>
              </div>

              {/* Dropoff input */}
              <div className="relative flex items-center gap-3 mb-5">
                <div className="flex flex-col items-center shrink-0">
                  <div className="w-2.5 h-2.5 rounded-sm bg-[#D21F3C]" />
                </div>
                <input
                  type="text"
                  id="dropoffInput"
                  value={dropoff}
                  onChange={(e) => setDropoff(e.target.value)}
                  placeholder="Dropoff location"
                  className="flex-1 bg-[#F7F7F7] border-transparent rounded-xl px-4 py-3.5 text-sm text-[#1A1A1A] font-medium placeholder-[#888888] focus:outline-none focus:bg-white focus:border-[#1A1A1A] border transition-all"
                />
              </div>

              {/* CTA Button */}
              <a
                href="#register"
                id="seePricesBtn"
                className="flex items-center justify-center w-full py-4 bg-[#1A1A1A] text-white font-bold rounded-xl text-base hover:bg-[#D21F3C] transition-colors duration-300 cursor-pointer"
              >
                Join Now
              </a>
            </div>
          </div>

          {/* --- RIGHT: Illustration Section --- */}
          <div className="relative flex items-center justify-center lg:justify-end h-full min-h-[450px]">
            {/* Ambient Background Elements */}
            <div className="absolute w-[120%] h-[120%] bg-gradient-to-tr from-[#D21F3C]/5 via-transparent to-[#FDC300]/5 rounded-full blur-[100px] pointer-events-none" />
            
            {/* Main Image Container (Restored to Original Size) */}
            <div className="relative z-10 w-full max-w-md aspect-[4/5] rounded-[3rem] p-3 bg-white/50 backdrop-blur-sm border border-white/40 shadow-[0_32px_64px_-16px_rgba(0,0,0,0.1)] animate-float">
              <div className="relative w-full h-full rounded-[2.5rem] overflow-hidden bg-gray-100 shadow-inner">
                <Image 
                  src="/uba-hero.png" 
                  alt="Onaaga professional lifestyle" 
                  fill
                  className="object-cover transition-transform duration-1000 hover:scale-110"
                  priority
                />
                
                {/* Advanced Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/0 to-white/10 pointer-events-none" />

                {/* Internal Float Card: Live Ride Status */}
                <div className="absolute bottom-6 left-6 right-6 bg-white/90 backdrop-blur-md border border-white/20 p-4 rounded-2xl shadow-xl animate-fadeInUp" style={{ animationDelay: '0.8s' }}>
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                      <span className="text-[10px] font-black text-[#1A1A1A] uppercase tracking-widest">Active Search</span>
                    </div>
                    <span className="text-[10px] font-bold text-gray-400">02:14</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-lg bg-[#F7F7F7] flex items-center justify-center">
                      <Navigation className="w-4 h-4 text-[#D21F3C]" />
                    </div>
                    <div className="flex-1">
                      <div className="h-1.5 w-full bg-gray-100 rounded-full overflow-hidden">
                        <div className="h-full bg-[#D21F3C] w-3/4 rounded-full" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating Badge: 100% Verified (Absolutely positioned to image) */}
              <div className="absolute top-6 -left-4 sm:top-12 sm:-left-12 bg-white/95 backdrop-blur-xl border border-white p-1.5 pr-5 sm:pr-6 rounded-[2rem] shadow-2xl z-20 flex items-center gap-2 sm:gap-3 animate-fadeInUp" style={{ animationDelay: '0.4s' }}>
                <div className="w-9 h-9 sm:w-11 sm:h-11 bg-[#D21F3C] rounded-full flex items-center justify-center shadow-lg shadow-[#D21F3C]/20">
                  <Shield className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
                </div>
                <div>
                  <p className="text-[9px] sm:text-[10px] font-black text-[#D21F3C] uppercase tracking-wider leading-none mb-0.5">Trusted</p>
                  <p className="text-xs sm:text-sm font-black text-[#1A1A1A]">100% Verified</p>
                </div>
              </div>

              {/* Floating Badge: Ratings (Absolutely positioned to image) */}
              <div className="absolute -bottom-4 -right-4 sm:-bottom-6 sm:-right-8 bg-white p-4 sm:p-5 rounded-[2rem] shadow-2xl z-20 animate-fadeInUp border border-gray-50" style={{ animationDelay: '0.6s' }}>
                <div className="flex items-center gap-1 text-[#FDC300] mb-1 sm:mb-1.5">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-3 sm:w-3.5 h-3 sm:h-3.5 fill-current" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <p className="text-lg sm:text-xl font-black text-[#1A1A1A] leading-none mb-0.5 sm:mb-1">4.9/5.0</p>
                <p className="text-[9px] sm:text-[10px] font-bold text-gray-400 uppercase tracking-widest">Rider Satisfaction</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
