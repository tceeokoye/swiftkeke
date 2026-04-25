"use client";

import { CheckCircle, Users, MapPin, TrendingUp } from "lucide-react";

export default function About() {
  return (
    <section id="about" className="py-24 lg:py-32 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Text */}
          <div>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-purple-900/30 border border-purple-700/40 text-purple-300 text-sm font-medium mb-6">
              About SwiftKeke
            </div>
            <h2 className="text-4xl lg:text-5xl font-black text-white mb-5">
              We Believe Transport{" "}
              <span className="gradient-text block">Should Be Simple</span>
            </h2>
            <p className="text-gray-400 text-lg leading-relaxed mb-8">
              SwiftKeke is building Nigeria&apos;s most trusted ride-hailing platform, connecting verified drivers with riders who need safe, affordable transportation every day.
            </p>
            <div className="space-y-4">
              {[
                "Rigorous driver verification process",
                "Transparent fare structure — no hidden charges",
                "Real-time GPS tracking on every trip",
                "Dedicated 24/7 driver support line",
              ].map((item) => (
                <div key={item} className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-purple-400 shrink-0 mt-0.5" />
                  <span className="text-sm text-gray-300">{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Stats Visual */}
          <div className="grid grid-cols-2 gap-4">
            {[
              { icon: Users, value: "1,200+", label: "Active Drivers", color: "from-purple-600/20 to-violet-600/10" },
              { icon: MapPin, value: "Enugu", label: "Exclusive Launch", color: "from-violet-600/20 to-purple-600/10" },
              { icon: TrendingUp, value: "50K+", label: "Trips Monthly", color: "from-purple-600/20 to-violet-600/10" },
              { icon: CheckCircle, value: "4.9★", label: "Driver Rating", color: "from-violet-600/20 to-purple-600/10" },
            ].map(({ icon: Icon, value, label, color }) => (
              <div key={label} className={`bg-gradient-to-br ${color} border border-purple-700/20 rounded-2xl p-6 text-center hover:-translate-y-1 transition-all duration-300`}>
                <Icon className="w-6 h-6 text-purple-400 mx-auto mb-3" />
                <div className="text-2xl font-black text-white">{value}</div>
                <div className="text-xs text-gray-500 mt-1">{label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
