"use client";

import { motion } from "framer-motion";
import { Star, Shield, ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const metrics = [
  { value: "24/7", label: "Live support" },
  { value: "4.9/5", label: "Rider rating" },
  { value: "12+", label: "Cities covered" },
];

export default function HeroSection() {
  return (
    <section id="home" className="relative min-h-screen flex items-center bg-[#F7F7F7] pt-28 pb-20 overflow-hidden">
      {/* Very subtle background pattern */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-[url('/noise.png')] opacity-[0.02] mix-blend-overlay" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid lg:grid-cols-[1.1fr_0.9fr] gap-16 lg:gap-10 items-center">
          
          {/* Left Content */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="max-w-xl"
          >
            <motion.div 
              initial={{ opacity: 0, width: 0 }}
              animate={{ opacity: 1, width: "auto" }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="flex items-center gap-4 mb-8"
            >
              <div className="w-10 h-[2px] bg-[#D21F3C]" />
              <span className="text-xs font-bold uppercase tracking-[0.25em] text-[#D21F3C]">Nigeria's Premier Ride</span>
            </motion.div>

            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-[3.5rem] sm:text-6xl lg:text-[4.5rem] font-black text-[#1A1A1A] leading-[1.05] tracking-tight"
            >
              Ride now. <br />
              <span className="text-[#D21F3C]">Earn sooner.</span>
            </motion.h1>

            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="mt-6 text-lg sm:text-xl text-[#555555] leading-relaxed font-medium"
            >
              OnaAga blends safe, verified rides with an effortless driver onboarding flow so every trip feels premium from the first tap.
            </motion.p>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="mt-10 flex flex-col sm:flex-row gap-4"
            >
              <Link
                href="/driver-onboarding"
                className="group inline-flex h-14 items-center justify-center gap-2 rounded-xl bg-[#1A1A1A] px-8 text-sm font-bold text-white transition-all hover:bg-[#D21F3C] active:scale-95"
              >
                Apply to Drive
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>

              <Link
                href="/passenger-waitlist"
                className="inline-flex h-14 items-center justify-center rounded-xl bg-white border-2 border-gray-200 px-8 text-sm font-bold text-[#1A1A1A] transition-all hover:border-[#1A1A1A] hover:bg-gray-50 active:scale-95"
              >
                Join Waitlist
              </Link>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="mt-16 grid grid-cols-3 gap-8 border-t border-gray-200 pt-10"
            >
              {metrics.map((metric) => (
                <div key={metric.label}>
                  <div className="text-3xl font-black text-[#1A1A1A]">{metric.value}</div>
                  <div className="mt-2 text-[10px] font-bold uppercase tracking-[0.2em] text-[#888888]">{metric.label}</div>
                </div>
              ))}
            </motion.div>
          </motion.div>

          {/* Right Content - The Image */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
            className="relative lg:ml-auto w-full max-w-md mx-auto lg:max-w-[440px] xl:max-w-[480px]"
          >
            {/* Soft backdrop glow to separate from background without looking tacky */}
            <div className="absolute inset-4 rounded-[2.5rem] bg-[#D21F3C]/10 blur-3xl" />

            <div className="relative aspect-[3/4] sm:aspect-[4/5] w-full overflow-hidden rounded-[2.5rem] bg-[#111111] shadow-[0_20px_50px_-12px_rgba(0,0,0,0.15)]">
              <Image
                src="/uba-hero.png"
                alt="Professional driver lifestyle with OnaAga"
                fill
                className="object-cover"
                priority
              />
              {/* Gradient overlay for text readability */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-black/30" />

              {/* Top Badges */}
              <div className="absolute top-6 left-6 right-6 flex justify-between items-start">
                <div className="rounded-full bg-white/10 backdrop-blur-md px-4 py-2 border border-white/20">
                  <span className="text-[10px] font-bold text-white tracking-widest uppercase">Live Fleet</span>
                </div>
                <div className="flex items-center gap-2 rounded-full bg-emerald-500/90 px-4 py-2 shadow-lg shadow-emerald-500/20">
                  <span className="w-1.5 h-1.5 rounded-full bg-white animate-pulse" />
                  <span className="text-[10px] font-bold text-white tracking-widest uppercase">Active</span>
                </div>
              </div>

              {/* Driver Highlight Card - Clean & Glassmorphic */}
              <div className="absolute bottom-4 left-4 right-4 sm:bottom-6 sm:left-6 sm:right-6">
                <div className="rounded-2xl bg-white/10 backdrop-blur-xl border border-white/20 p-4 sm:p-6 shadow-2xl">
                  <div className="flex items-start justify-between border-b border-white/10 pb-3 mb-3 sm:pb-5 sm:mb-5">
                    <div>
                      <div className="flex items-center gap-2">
                        <Shield className="w-3.5 h-3.5 text-[#FDC300]" />
                        <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#FDC300]">Verified Driver</p>
                      </div>
                      <p className="mt-1 sm:mt-1.5 text-lg sm:text-2xl font-black text-white">Chukwuma A.</p>
                    </div>
                    <div className="flex items-center gap-1.5 bg-black/40 rounded-full px-2.5 py-1 sm:px-3 sm:py-1.5 border border-white/10">
                      <Star className="w-3.5 h-3.5 fill-[#FDC300] text-[#FDC300]" />
                      <span className="text-xs sm:text-sm font-bold text-white">4.9</span>
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-2 gap-3 sm:gap-4">
                    <div>
                      <div className="text-[9px] sm:text-[10px] font-bold uppercase tracking-[0.1em] text-white/50">Acceptance Rate</div>
                      <div className="mt-0.5 sm:mt-1 text-base sm:text-xl font-bold text-white">98%</div>
                    </div>
                    <div>
                      <div className="text-[9px] sm:text-[10px] font-bold uppercase tracking-[0.1em] text-white/50">Total Trips</div>
                      <div className="mt-0.5 sm:mt-1 text-base sm:text-xl font-bold text-white">3.2k+</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
