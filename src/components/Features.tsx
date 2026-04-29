"use client";

import { Shield, Zap, Wallet, MapPin, Star, Headphones } from "lucide-react";

const features = [
  {
    icon: Shield,
    title: "Verified Drivers",
    desc: "Every driver passes a background check, vehicle inspection, and safety training before joining Book Ride.",
    color: "#D21F3C",
  },
  {
    icon: Zap,
    title: "Lightning Booking",
    desc: "Find and confirm a ride in under 30 seconds. No long calls, no haggling — just tap and go.",
    color: "#FDC300",
  },
  {
    icon: Wallet,
    title: "Transparent Fares",
    desc: "See your price upfront. No surge surprises. Pay with cash, card, or wallet — your choice.",
    color: "#D21F3C",
  },
  {
    icon: MapPin,
    title: "Live GPS Tracking",
    desc: "Track your driver in real time and share your trip with family for added peace of mind.",
    color: "#FDC300",
  },
  {
    icon: Star,
    title: "Rate Your Experience",
    desc: "Your feedback shapes our service. Rate your driver after every trip to keep standards high.",
    color: "#D21F3C",
  },
  {
    icon: Headphones,
    title: "24/7 Support",
    desc: "Our support team is always ready to help you — night, day, weekends, and holidays.",
    color: "#FDC300",
  },
];

export default function Features() {
  return (
    <section id="features" className="py-24 lg:py-32 relative overflow-hidden bg-[#F7F7F7]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#D21F3C]/10 border border-[#D21F3C]/20 text-[#D21F3C] text-sm font-bold mb-4">
            Why Book Ride?
          </div>
          <h2 className="text-4xl lg:text-5xl font-black text-[#1A1A1A] mb-4">
            Everything You Need{" "}
            <span className="gradient-text block">In One Ride</span>
          </h2>
          <p className="text-[#555555] text-lg leading-relaxed">
            We built Book Ride around what matters most — your comfort, safety, and time.
          </p>
        </div>

        {/* Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map(({ icon: Icon, title, desc, color }, i) => (
            <div
              key={i}
              className="group relative p-6 rounded-2xl bg-white border border-gray-100 hover:border-[#D21F3C]/30 hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
            >
              {/* Glow on hover */}
              <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                style={{ background: `radial-gradient(circle at top left, ${color}08, transparent 60%)` }}
              />

              <div
                className="relative w-12 h-12 rounded-xl flex items-center justify-center mb-5 transition-transform duration-300 group-hover:scale-110"
                style={{ background: `${color}15`, border: `1px solid ${color}30` }}
              >
                <Icon className="w-6 h-6" style={{ color }} />
              </div>

              <h3 className="text-lg font-bold text-[#1A1A1A] mb-2 relative">{title}</h3>
              <p className="text-sm text-[#888888] leading-relaxed relative">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
