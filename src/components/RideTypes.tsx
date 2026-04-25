"use client";

import { Zap, Car, Gem, Users } from "lucide-react";

const rides = [
  {
    id: "keke",
    label: "SwiftKeke",
    icon: Zap,
    desc: "Perfect for short inner-city trips. Affordable, quick, and beats traffic easily.",
    passengers: "1–2 passengers",
    price: "From ₦200",
    featured: false,
    gradient: "from-purple-700/20 to-violet-800/10",
    cta: "Book Keke",
    ctaStyle: "outline",
  },
  {
    id: "cab",
    label: "SwiftCab",
    icon: Car,
    desc: "Comfortable saloon car for everyday commutes and longer journeys across town.",
    passengers: "1–4 passengers",
    price: "From ₦500",
    featured: true,
    gradient: "from-purple-600/30 to-violet-700/20",
    cta: "Book Cab",
    ctaStyle: "filled",
  },
  {
    id: "premium",
    label: "SwiftPremium",
    icon: Gem,
    desc: "Luxury executive vehicle for business trips, airport runs, and special occasions.",
    passengers: "1–4 passengers",
    price: "From ₦2,000",
    featured: false,
    gradient: "from-purple-700/20 to-violet-800/10",
    cta: "Book Premium",
    ctaStyle: "outline",
  },
];

export default function RideTypes() {
  return (
    <section className="py-24 lg:py-32 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-purple-900/30 border border-purple-700/40 text-purple-300 text-sm font-medium mb-4">
            Our Fleet
          </div>
          <h2 className="text-4xl lg:text-5xl font-black text-white mb-4">
            Choose Your{" "}
            <span className="gradient-text">Perfect Ride</span>
          </h2>
          <p className="text-gray-400 text-lg leading-relaxed">
            From budget-friendly kekes to premium executive cars — we have the right vehicle for every journey.
          </p>
        </div>

        {/* Ride cards */}
        <div className="grid md:grid-cols-3 gap-6 items-center">
          {rides.map(({ id, label, icon: Icon, desc, passengers, price, featured, gradient, cta, ctaStyle }) => (
            <div
              key={id}
              className={`relative rounded-3xl border p-7 transition-all duration-300 hover:-translate-y-2 group ${
                featured
                  ? "bg-gradient-to-br from-purple-800/30 to-violet-900/20 border-purple-500/50 shadow-2xl shadow-purple-900/30 scale-105"
                  : "bg-white/[0.03] border-white/[0.06] hover:border-purple-500/30"
              }`}
            >
              {featured && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1.5 bg-gradient-to-r from-purple-600 to-violet-600 text-white text-xs font-bold rounded-full shadow-lg shadow-purple-700/30">
                  ⭐ Most Popular
                </div>
              )}

              {/* Icon */}
              <div
                className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${gradient} border border-purple-600/30 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}
              >
                <Icon className="w-8 h-8 text-purple-400" />
              </div>

              <h3 className="text-xl font-black text-white mb-2">{label}</h3>
              <p className="text-sm text-gray-500 leading-relaxed mb-5">{desc}</p>

              <div className="flex items-center gap-4 mb-6">
                <span className="flex items-center gap-1.5 text-xs text-gray-500">
                  <Users className="w-3.5 h-3.5 text-purple-500" />
                  {passengers}
                </span>
                <span className="text-xs font-bold text-purple-400">{price}</span>
              </div>

              <a
                href="#book"
                className={`block text-center py-3 rounded-xl text-sm font-bold transition-all duration-200 ${
                  ctaStyle === "filled"
                    ? "bg-gradient-to-r from-purple-600 to-violet-600 text-white hover:shadow-lg hover:shadow-purple-700/30"
                    : "border border-purple-600/40 text-purple-300 hover:bg-purple-700/10"
                }`}
              >
                {cta}
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
