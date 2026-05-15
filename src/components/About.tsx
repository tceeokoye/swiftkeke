"use client";

import { CheckCircle, Users, MapPin, TrendingUp, Star } from "lucide-react";
import Image from "next/image";

export default function About() {
  return (
    <section id="about" className="py-24 lg:py-32 relative bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Text */}
          <div>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#D21F3C]/10 border border-[#D21F3C]/20 text-[#D21F3C] text-sm font-bold mb-6">
              About Onaaga
            </div>
            <h2 className="text-4xl lg:text-5xl font-black text-[#1A1A1A] mb-5">
              We Believe Transport{" "}
              <span className="gradient-text block">Should Be Simple</span>
            </h2>
            <p className="text-[#555555] text-lg leading-relaxed mb-8">
              Onaaga is building Nigeria&apos;s most trusted ride-hailing platform, connecting verified drivers with riders who need safe, affordable transportation every day.
            </p>
            <div className="space-y-4">
              {[
                "Rigorous driver verification process",
                "Transparent fare structure - no hidden charges",
                "Real-time GPS tracking on every trip",
                "Dedicated 24/7 driver support line",
              ].map((item) => (
                <div key={item} className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-[#D21F3C] shrink-0 mt-0.5" />
                  <span className="text-sm text-[#555555]">{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Visual with Image */}
          <div className="relative flex items-center justify-center lg:justify-end">
            <div className="absolute -inset-4 bg-[#D21F3C]/5 rounded-[3rem] transform -rotate-3" />
            
            <div className="relative z-10 w-full max-w-lg aspect-square lg:aspect-[4/3] rounded-[2.5rem] overflow-hidden shadow-2xl border border-white">
              <Image 
                src="/uba-driver.png" 
                alt="Smiling Onaaga driver in a modern car" 
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
            </div>

            {/* Overlay Stat Card */}
            <div className="absolute -bottom-6 -left-6 bg-white p-5 rounded-2xl shadow-xl border border-gray-100 z-20 flex items-center gap-4 animate-fadeInUp">
              <div className="w-12 h-12 bg-[#D21F3C]/10 rounded-xl flex items-center justify-center">
                <Users className="w-6 h-6 text-[#D21F3C]" />
              </div>
              <div>
                <div className="text-2xl font-black text-[#1A1A1A]">1,200+</div>
                <div className="text-xs text-[#888888] font-medium uppercase tracking-wide">Active Drivers</div>
              </div>
            </div>

            {/* Overlay Rating Card */}
            <div className="absolute -top-6 -right-6 bg-white p-4 rounded-2xl shadow-xl border border-gray-100 z-20 flex items-center gap-3 animate-float" style={{ animationDelay: "1s" }}>
              <div className="w-10 h-10 bg-[#FDC300]/15 rounded-xl flex items-center justify-center">
                <Star className="w-5 h-5 text-[#FDC300]" fill="currentColor" />
              </div>
              <div>
                <div className="text-xl font-black text-[#1A1A1A]">4.9</div>
                <div className="text-[10px] text-[#888888] font-medium uppercase tracking-wide">Avg Rating</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
