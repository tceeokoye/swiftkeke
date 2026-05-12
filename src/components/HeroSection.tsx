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

          {/* ── LEFT: Booking Form ── */}
          <div>
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#D21F3C]/10 border border-[#D21F3C]/20 text-[#D21F3C] text-xs font-bold mb-6 uppercase tracking-wider">
              <span className="w-2 h-2 bg-[#D21F3C] rounded-full animate-pulse" />
              Available in Major Nigerian Cities
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
                className="flex items-center justify-center w-full py-4 bg-[#1A1A1A] text-white font-bold rounded-xl text-base hover:bg-[#D21F3C] transition-colors duration-300"
              >
                Join Now
              </a>
            </div>
          </div>

          {/* ── RIGHT: Illustration Card ── */}
          <div className="relative flex items-center justify-center lg:justify-end h-full min-h-[400px]">
            {/* Background glow */}
            <div className="absolute w-80 h-80 bg-[#D21F3C]/12 rounded-full blur-3xl animate-pulse" />
            <div className="absolute top-8 right-8 w-40 h-40 bg-[#FDC300]/15 rounded-full blur-2xl" />

            {/* Main Lifestyle Image */}
            <div className="relative z-10 w-full max-w-md aspect-[4/5] rounded-[2.5rem] shadow-2xl border border-gray-100 p-2 bg-white overflow-hidden animate-float">
              <div className="relative w-full h-full rounded-[2rem] overflow-hidden bg-[#F7F7F7]">
                <Image 
                  src="/uba-hero.png" 
                  alt="Modern professional smiling and looking at phone with a Book Ride car in background" 
                  fill
                  className="object-cover transition-transform duration-700 hover:scale-105"
                  priority
                />
                
                {/* Gradient overlay for contrast */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent pointer-events-none" />
              </div>
            </div>

            {/* Float badge — safety */}
            <div className="absolute top-12 -left-6 bg-white border border-gray-100 rounded-2xl px-5 py-3 shadow-xl z-20 flex items-center gap-2 animate-fadeInUp" style={{ animationDelay: '0.2s' }}>
              <Shield className="w-5 h-5 text-[#D21F3C]" />
              <span className="text-sm font-bold text-[#1A1A1A]">100% Verified</span>
            </div>

            {/* Float badge — rating */}
            <div className="absolute bottom-16 -right-6 bg-white border border-gray-100 rounded-2xl px-5 py-4 shadow-xl z-20 animate-fadeInUp" style={{ animationDelay: '0.4s' }}>
              <div className="text-[#FDC300] text-lg font-black tracking-widest mb-0.5">★★★★★</div>
              <div className="text-[#1A1A1A] text-sm font-bold">4.9 / 5.0 Rating</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
