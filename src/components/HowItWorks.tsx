"use client";

import { MapPin, Car, CheckCircle, Clock } from "lucide-react";

const steps = [
  {
    num: "01",
    title: "Enter Your Location",
    desc: "Type your pickup and destination. Our smart input finds your address instantly.",
    icon: MapPin,
  },
  {
    num: "02",
    title: "Choose Your Ride",
    desc: "Pick from Keke, Cab, or Premium. See the fare estimate before you confirm.",
    icon: Car,
  },
  {
    num: "03",
    title: "Get Picked Up",
    desc: "Your driver arrives. Track them live. Enjoy the ride and pay on arrival.",
    icon: CheckCircle,
  },
];

export default function HowItWorks() {
  return (
    <section id="how" className="py-24 lg:py-32 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-purple-800/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Text */}
          <div>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-purple-900/30 border border-purple-700/40 text-purple-300 text-sm font-medium mb-6">
              Simple Process
            </div>
            <h2 className="text-4xl lg:text-5xl font-black text-white mb-4">
              Ride in{" "}
              <span className="gradient-text">3 Easy Steps</span>
            </h2>
            <p className="text-gray-400 text-lg mb-10 leading-relaxed">
              We made booking a ride as simple as possible so you can focus on what matters.
            </p>

            <div className="space-y-6">
              {steps.map(({ num, title, desc, icon: Icon }, i) => (
                <div key={i} className="flex gap-5 group">
                  <div className="relative">
                    <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-purple-700/30 to-violet-800/20 border border-purple-600/30 flex items-center justify-center shrink-0 group-hover:border-purple-500/60 transition-all duration-300">
                      <Icon className="w-6 h-6 text-purple-400" />
                    </div>
                    {i < steps.length - 1 && (
                      <div className="absolute left-1/2 -translate-x-1/2 top-14 w-px h-6 bg-gradient-to-b from-purple-600/40 to-transparent" />
                    )}
                  </div>
                  <div className="pt-2">
                    <div className="flex items-center gap-2 mb-1">
                      <span className="text-xs font-bold text-purple-500">{num}</span>
                      <h4 className="text-base font-bold text-white">{title}</h4>
                    </div>
                    <p className="text-sm text-gray-500 leading-relaxed">{desc}</p>
                  </div>
                </div>
              ))}
            </div>

            <a
              href="#book"
              className="inline-flex items-center gap-2 mt-10 px-7 py-4 bg-gradient-to-r from-purple-600 to-violet-600 text-white font-bold rounded-2xl shadow-xl shadow-purple-700/30 hover:shadow-purple-600/50 hover:-translate-y-1 transition-all duration-300"
            >
              Start Booking
            </a>
          </div>

          {/* Visual */}
          <div className="relative flex items-center justify-center min-h-[420px]">
            {/* Background glow */}
            <div className="absolute w-72 h-72 bg-purple-700/20 rounded-full blur-3xl" />

            {/* Central phone-like card */}
            <div className="relative z-10 w-72 bg-[#13131f] border border-purple-800/40 rounded-3xl p-6 shadow-2xl shadow-purple-900/40 animate-float">
              {/* Map placeholder */}
              <div className="w-full h-36 rounded-xl mb-4 overflow-hidden relative bg-[#1a1a2e]"
                style={{
                  backgroundImage: "radial-gradient(circle at 50% 50%, rgba(124,58,237,0.15) 0%, transparent 70%)",
                }}>
                <div className="absolute inset-0 opacity-20"
                  style={{
                    backgroundImage: "linear-gradient(rgba(168,85,247,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(168,85,247,0.3) 1px, transparent 1px)",
                    backgroundSize: "20px 20px",
                  }}
                />
                {/* Route line */}
                <svg className="absolute inset-0 w-full h-full" viewBox="0 0 288 144">
                  <path d="M40 110 Q100 60 150 70 Q200 80 248 30" stroke="#a855f7" strokeWidth="2.5" fill="none" strokeDasharray="6 4" opacity="0.8" />
                  <circle cx="40" cy="110" r="5" fill="#10b981" />
                  <circle cx="248" cy="30" r="5" fill="#a855f7" />
                </svg>
              </div>

              <div className="space-y-2.5">
                <div className="flex items-center gap-3 p-3 bg-white/5 rounded-xl">
                  <div className="w-2 h-2 bg-green-400 rounded-full" />
                  <span className="text-xs text-gray-400">Pickup: 15 Adeola Crescent</span>
                </div>
                <div className="flex items-center gap-3 p-3 bg-white/5 rounded-xl">
                  <div className="w-2 h-2 bg-purple-400 rounded-full" />
                  <span className="text-xs text-gray-400">Drop: Victoria Island Mall</span>
                </div>
                <button className="w-full py-3 bg-gradient-to-r from-purple-600 to-violet-600 text-white text-sm font-bold rounded-xl">
                  Confirm Ride — ₦850
                </button>
              </div>
            </div>

            {/* Float cards */}
            <div className="absolute top-6 -left-4 bg-[#1a1a2e] border border-green-500/30 rounded-2xl px-4 py-3 flex items-center gap-2 shadow-xl z-20">
              <CheckCircle className="w-4 h-4 text-green-400" />
              <span className="text-xs font-semibold text-white">Driver Confirmed!</span>
            </div>
            <div className="absolute bottom-10 -right-4 bg-[#1a1a2e] border border-purple-500/30 rounded-2xl px-4 py-3 flex items-center gap-2 shadow-xl z-20">
              <Clock className="w-4 h-4 text-purple-400" />
              <span className="text-xs font-semibold text-white">ETA: 3 mins</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
