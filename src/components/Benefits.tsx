"use client";

import { TrendingUp, Shield, Clock, Users, Wallet, HeartHandshake } from "lucide-react";

const benefits = [
  {
    img: "https://img.icons8.com/3d-fluency/94/money-bag.png", // Money Bag
    title: "Competitive Earnings",
    desc: "Keep up to 85% of every fare. Earn bonuses during peak hours and complete weekly targets for extra rewards.",
    color: "#D21F3C",
  },
  {
    img: "https://img.icons8.com/3d-fluency/94/alarm-clock--v1.png", // Alarm Clock
    title: "Flexible Schedule",
    desc: "Drive when you want, rest when you need. Full control of your hours — morning, evening, or weekends.",
    color: "#FDC300",
  },
  {
    img: "https://img.icons8.com/3d-fluency/94/shield.png", // Shield
    title: "Insurance Coverage",
    desc: "Every registered driver gets accident and liability coverage at no extra cost while on active trips.",
    color: "#D21F3C",
  },
  {
    img: "https://img.icons8.com/3d-fluency/94/bank-cards.png", // Weekly Payouts / Bank
    title: "Weekly Payouts",
    desc: "Get paid directly to your bank account every week. No delays, no hidden deductions.",
    color: "#FDC300",
  },
  {
    img: "https://img.icons8.com/3d-fluency/94/group--v1.png", // People
    title: "Growing Rider Base",
    desc: "Access thousands of riders requesting trips daily. More riders mean more earning opportunities for you.",
    color: "#D21F3C",
  },
  {
    img: "https://img.icons8.com/3d-fluency/94/handshake.png", // Handshake
    title: "Driver Support",
    desc: "Dedicated driver success team available 24/7 to help with issues, disputes, and account management.",
    color: "#FDC300",
  },
];

export default function Benefits() {
  return (
    <section id="benefits" className="py-24 lg:py-32 relative overflow-hidden bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#D21F3C]/10 border border-[#D21F3C]/20 text-[#D21F3C] text-sm font-bold mb-4">
            Why Drive With Us?
          </div>
          <h2 className="text-4xl lg:text-5xl font-black text-[#1A1A1A] mb-4">
            Benefits That{" "}
            <span className="gradient-text block">Set Us Apart</span>
          </h2>
          <p className="text-[#555555] text-lg leading-relaxed">
            We treat our drivers like partners. Here&apos;s what you get when you join Book Ride.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {benefits.map(({ img, title, desc, color }, i) => (
            <div
              key={i}
              className="group relative p-6 rounded-2xl bg-white border border-gray-100 hover:border-[#D21F3C]/30 hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
            >
              <div
                className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                style={{ background: `radial-gradient(circle at top left, ${color}08, transparent 60%)` }}
              />
              <div
                className="relative w-16 h-16 rounded-2xl flex items-center justify-center mb-5 transition-transform duration-300 group-hover:scale-110 shadow-sm"
                style={{ background: `${color}10`, border: `1px solid ${color}20` }}
              >
                <img src={img} alt={title} className="w-10 h-10 object-contain drop-shadow-md" />
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
