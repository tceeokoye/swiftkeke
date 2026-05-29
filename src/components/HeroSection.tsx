"use client";

import { Shield, Sparkles, Navigation, Clock3, Users, Star, ArrowRight } from "lucide-react";
import Image from "next/image";

const metrics = [
  { value: "24/7", label: "Live support" },
  { value: "4.9/5", label: "Rider rating" },
  { value: "12+", label: "Cities covered" },
];

const featurePills = [
  "Instant matching",
  "Verified drivers",
  "Safety-first rides",
];

export default function HeroSection() {
  return (
    <section id="home" className="relative min-h-screen flex items-center overflow-hidden bg-[#F7F7F7] pt-20">
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(210,31,60,0.16),transparent_32%),radial-gradient(circle_at_bottom_right,rgba(253,195,0,0.14),transparent_28%)]" />
        <div className="absolute top-24 right-8 h-72 w-72 rounded-full bg-[#D21F3C]/10 blur-3xl" />
        <div className="absolute bottom-16 left-10 h-64 w-64 rounded-full bg-[#FDC300]/15 blur-3xl" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 lg:py-20 w-full">
        <div className="grid lg:grid-cols-[1.1fr_0.9fr] gap-10 lg:gap-14 items-center">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full bg-white/90 px-3 py-1.5 text-[10px] font-black uppercase tracking-[0.24em] text-[#D21F3C] border border-[#D21F3C]/10 shadow-sm">
              <Sparkles className="w-3.5 h-3.5" />
              Smart mobility for Nigerian cities
            </div>

            <h1 className="mt-6 text-5xl sm:text-6xl lg:text-7xl font-black text-[#1A1A1A] leading-[0.95] tracking-[-0.04em]">
              Ride now.
              <span className="block text-[#D21F3C]">Earn sooner.</span>
            </h1>

            <p className="mt-5 max-w-xl text-lg text-[#555555] leading-relaxed">
              OnaAga blends safe, verified rides with an effortless driver onboarding flow so every trip feels premium from the first tap.
            </p>

            <div className="mt-6 flex flex-wrap gap-2">
              {featurePills.map((pill) => (
                <span key={pill} className="rounded-full border border-gray-200 bg-white px-3 py-2 text-xs font-bold text-[#1A1A1A] shadow-sm">
                  {pill}
                </span>
              ))}
            </div>

            <div className="mt-8 flex flex-col sm:flex-row gap-3">
              <a
                href="/driver-onboarding"
                className="inline-flex items-center justify-center gap-2 rounded-2xl bg-[#D21F3C] px-5 py-3 text-sm font-bold text-white shadow-lg shadow-[#D21F3C]/25 hover:bg-[#a8172d] transition-all"
              >
                Apply to drive
                <ArrowRight className="w-4 h-4" />
              </a>

              <a
                href="/passenger-waitlist"
                className="inline-flex items-center justify-center gap-2 rounded-2xl border border-gray-200 bg-white px-5 py-3 text-sm font-bold text-[#1A1A1A] hover:border-[#D21F3C]/40 hover:text-[#D21F3C] transition-all"
              >
                Join passenger waitlist
              </a>
            </div>

            <div className="mt-8 grid sm:grid-cols-3 gap-3 max-w-2xl">
              {metrics.map((metric) => (
                <div key={metric.label} className="rounded-2xl border border-gray-200/80 bg-white/85 p-4 backdrop-blur-sm shadow-[0_12px_30px_-18px_rgba(0,0,0,0.4)]">
                  <div className="text-2xl font-black text-[#1A1A1A]">{metric.value}</div>
                  <div className="mt-1 text-[10px] font-bold uppercase tracking-[0.2em] text-[#888888]">{metric.label}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="relative">
            <div className="absolute inset-6 rounded-[2.5rem] bg-linear-to-br from-[#D21F3C]/20 via-transparent to-[#FDC300]/20 blur-2xl" />

            <div className="relative overflow-hidden rounded-[2.5rem] border border-white/40 bg-white/70 p-3 shadow-[0_34px_90px_-26px_rgba(0,0,0,0.35)] backdrop-blur-md">
              <div className="relative aspect-4/5 overflow-hidden rounded-4xl bg-[#111111]">
                <Image
                  src="/uba-hero.png"
                  alt="Professional driver lifestyle with OnaAga"
                  fill
                  className="object-cover"
                  priority
                />
                <div className="absolute inset-0 bg-linear-to-t from-black/70 via-black/20 to-transparent" />

                <div className="absolute left-4 right-4 top-4 flex items-center justify-between">
                  <div className="rounded-full bg-white/90 px-3 py-1.5 text-[10px] font-black uppercase tracking-[0.2em] text-[#1A1A1A]">
                    Live fleet
                  </div>
                  <div className="rounded-full bg-emerald-500/90 px-3 py-1.5 text-[10px] font-black uppercase tracking-[0.2em] text-white">
                    Active
                  </div>
                </div>

                <div className="absolute inset-x-4 bottom-4 space-y-3">
                  <div className="rounded-2xl bg-white/90 p-4 backdrop-blur-md">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-[10px] font-black uppercase tracking-[0.24em] text-[#D21F3C]">Driver spotlight</p>
                        <p className="mt-1 text-lg font-black text-[#1A1A1A]">Chukwuma A.</p>
                      </div>
                      <div className="rounded-full bg-[#D21F3C] px-3 py-1 text-[10px] font-black uppercase tracking-[0.2em] text-white">
                        Verified
                      </div>
                    </div>

                    <div className="mt-3 grid grid-cols-3 gap-2">
                      <div className="rounded-xl bg-[#F7F7F7] px-2 py-2 text-center">
                        <div className="text-sm font-black text-[#1A1A1A]">98%</div>
                        <div className="mt-0.5 text-[8px] font-bold uppercase tracking-[0.2em] text-gray-500">Acceptance</div>
                      </div>
                      <div className="rounded-xl bg-[#F7F7F7] px-2 py-2 text-center">
                        <div className="text-sm font-black text-[#1A1A1A]">3.2k</div>
                        <div className="mt-0.5 text-[8px] font-bold uppercase tracking-[0.2em] text-gray-500">Trips</div>
                      </div>
                      <div className="rounded-xl bg-[#F7F7F7] px-2 py-2 text-center">
                        <div className="text-sm font-black text-[#1A1A1A]">4.9</div>
                        <div className="mt-0.5 text-[8px] font-bold uppercase tracking-[0.2em] text-gray-500">Rating</div>
                      </div>
                    </div>
                  </div>

                  <div className="rounded-2xl bg-[#1A1A1A]/90 p-4 text-white backdrop-blur-md">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <div className="rounded-full bg-emerald-500/20 p-1.5">
                          <Shield className="w-3.5 h-3.5 text-emerald-300" />
                        </div>
                        <div>
                          <p className="text-xs font-bold uppercase tracking-[0.24em] text-white/70">Safety</p>
                          <p className="mt-0.5 text-sm font-bold">Background checks & live tracking</p>
                        </div>
                      </div>
                      <div className="flex items-center gap-1 text-[#FDC300]">
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} className="w-3.5 h-3.5 fill-current" />
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="absolute -left-4 top-24 rounded-2xl bg-white px-4 py-3 shadow-2xl border border-gray-100">
                <div className="flex items-center gap-2">
                  <div className="rounded-full bg-[#D21F3C] p-2 text-white">
                    <Navigation className="w-3.5 h-3.5" />
                  </div>
                  <div>
                    <p className="text-[9px] font-black uppercase tracking-[0.2em] text-[#D21F3C]">Pickup ETA</p>
                    <p className="text-sm font-black text-[#1A1A1A]">7 mins</p>
                  </div>
                </div>
              </div>

              <div className="absolute -right-4 bottom-24 rounded-2xl bg-white px-4 py-3 shadow-2xl border border-gray-100">
                <div className="flex items-center gap-2">
                  <div className="rounded-full bg-[#FDC300] p-2 text-[#1A1A1A]">
                    <Clock3 className="w-3.5 h-3.5" />
                  </div>
                  <div>
                    <p className="text-[9px] font-black uppercase tracking-[0.2em] text-[#D21F3C]">Avg response</p>
                    <p className="text-sm font-black text-[#1A1A1A]">2.4 mins</p>
                  </div>
                </div>
              </div>

              <div className="absolute -bottom-5 left-6 rounded-2xl bg-[#1A1A1A] px-4 py-2 text-white shadow-xl">
                <div className="flex items-center gap-2">
                  <Users className="w-4 h-4 text-[#FDC300]" />
                  <span className="text-[10px] font-bold uppercase tracking-[0.24em] text-white/80">500+ drivers active</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
