"use client";

import { ArrowRight, Shield, DollarSign, Clock } from "lucide-react";

export default function HeroSection() {
  return (
    <section id="home" className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-br from-[#0a0a0f] via-[#0f0a1e] to-[#0a0a0f]" />
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-700/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/3 w-80 h-80 bg-violet-600/15 rounded-full blur-3xl animate-pulse" style={{ animationDelay: "1s" }} />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-purple-900/8 rounded-full blur-3xl" />
        {/* Grid */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(168,85,247,0.6) 1px, transparent 1px), linear-gradient(90deg, rgba(168,85,247,0.6) 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-28 lg:pt-32 pb-20 w-full">
        <div className="max-w-3xl mx-auto text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-purple-900/30 border border-purple-700/40 text-purple-300 text-sm font-medium mb-8">
            <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
            Now Onboarding Drivers in Enugu State
          </div>

          {/* Heading */}
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-black text-white leading-[1.05] tracking-tight mb-6">
            Drive With Us,{" "}
            <span className="gradient-text block mt-2">Earn Your Way</span>
          </h1>

          <p className="text-lg lg:text-xl text-gray-400 max-w-xl mx-auto leading-relaxed mb-10">
            Join SwiftKeke as a verified driver. Set your own hours, earn competitive fares, and be part of Nigeria&apos;s fastest-growing ride network.
          </p>

          {/* CTA */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <a
              href="#register"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-gradient-to-r from-purple-600 to-violet-600 text-white font-bold rounded-2xl shadow-xl shadow-purple-700/30 hover:shadow-purple-600/50 hover:-translate-y-1 transition-all duration-300 text-base"
            >
              Start Registration
              <ArrowRight className="w-5 h-5" />
            </a>
            <a
              href="#register"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white/5 border border-white/10 text-white font-semibold rounded-2xl hover:bg-white/10 transition-all duration-300 text-base"
            >
              Book a Ride
            </a>
          </div>

          {/* Stat cards */}
          <div className="grid grid-cols-3 gap-4 max-w-lg mx-auto">
            {[
              { icon: Shield, label: "Verified Platform", value: "100% Safe" },
              { icon: DollarSign, label: "Weekly Earnings", value: "₦80K+" },
              { icon: Clock, label: "Flexible Hours", value: "24/7" },
            ].map(({ icon: Icon, label, value }) => (
              <div
                key={label}
                className="flex flex-col items-center gap-2 p-4 bg-white/[0.03] border border-white/[0.06] rounded-2xl"
              >
                <Icon className="w-5 h-5 text-purple-400" />
                <div className="text-lg font-black text-white">{value}</div>
                <div className="text-[11px] text-gray-600">{label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 text-gray-600 text-xs">
        <div className="w-5 h-8 border border-gray-700 rounded-full flex items-start justify-center pt-1">
          <div className="w-1 h-2 bg-purple-500 rounded-full" style={{ animation: "scroll-bounce 1.5s ease-in-out infinite" }} />
        </div>
      </div>
    </section>
  );
}
