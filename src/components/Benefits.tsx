"use client";

import { TrendingUp, Shield, Clock, Users, Wallet, HeartHandshake } from "lucide-react";

const benefits = [
  {
    icon: Wallet,
    title: "Competitive Earnings",
    desc: "Keep up to 85% of every fare. Earn bonuses during peak hours and complete weekly targets for extra rewards.",
    color: "#7c3aed",
  },
  {
    icon: Clock,
    title: "Flexible Schedule",
    desc: "Drive when you want, rest when you need. Full control of your hours — morning, evening, or weekends.",
    color: "#9333ea",
  },
  {
    icon: Shield,
    title: "Insurance Coverage",
    desc: "Every registered driver gets accident and liability coverage at no extra cost while on active trips.",
    color: "#a855f7",
  },
  {
    icon: TrendingUp,
    title: "Weekly Payouts",
    desc: "Get paid directly to your bank account every week. No delays, no hidden deductions.",
    color: "#c026d3",
  },
  {
    icon: Users,
    title: "Growing Rider Base",
    desc: "Access thousands of riders requesting trips daily. More riders mean more earning opportunities for you.",
    color: "#7c3aed",
  },
  {
    icon: HeartHandshake,
    title: "Driver Support",
    desc: "Dedicated driver success team available 24/7 to help with issues, disputes, and account management.",
    color: "#9333ea",
  },
];

export default function Benefits() {
  return (
    <section id="benefits" className="py-24 lg:py-32 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-purple-950/10 to-transparent pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-purple-900/30 border border-purple-700/40 text-purple-300 text-sm font-medium mb-4">
            Why Drive With Us?
          </div>
          <h2 className="text-4xl lg:text-5xl font-black text-white mb-4">
            Benefits That{" "}
            <span className="gradient-text block">Set Us Apart</span>
          </h2>
          <p className="text-gray-400 text-lg leading-relaxed">
            We treat our drivers like partners. Here&apos;s what you get when you join SwiftKeke.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {benefits.map(({ icon: Icon, title, desc, color }, i) => (
            <div
              key={i}
              className="group relative p-6 rounded-2xl bg-white/[0.03] border border-white/[0.06] hover:border-purple-500/40 hover:bg-white/[0.06] transition-all duration-300 hover:-translate-y-1"
            >
              <div
                className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                style={{ background: `radial-gradient(circle at top left, ${color}10, transparent 60%)` }}
              />
              <div
                className="relative w-12 h-12 rounded-xl flex items-center justify-center mb-5 transition-transform duration-300 group-hover:scale-110"
                style={{ background: `${color}20`, border: `1px solid ${color}40` }}
              >
                <Icon className="w-6 h-6" style={{ color }} />
              </div>
              <h3 className="text-lg font-bold text-white mb-2 relative">{title}</h3>
              <p className="text-sm text-gray-500 leading-relaxed relative">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
