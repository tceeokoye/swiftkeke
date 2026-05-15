"use client";

import { Zap, Car, Gem, Users } from "lucide-react";

const rides = [
  {
    id: "keke",
    label: "Book Keke",
    icon: Zap,
    desc: "Perfect for short inner-city trips. Affordable, quick, and beats traffic easily.",
    passengers: "1-2 passengers",
    price: "From ₦200",
    featured: false,
    cta: "Book Keke",
    ctaStyle: "outline",
  },
  {
    id: "cab",
    label: "Book Cab",
    icon: Car,
    desc: "Comfortable saloon car for everyday commutes and longer journeys across town.",
    passengers: "1-4 passengers",
    price: "From ₦500",
    featured: true,
    cta: "Book Cab",
    ctaStyle: "filled",
  },
  {
    id: "premium",
    label: "Book Premium",
    icon: Gem,
    desc: "Luxury executive vehicle for business trips, airport runs, and special occasions.",
    passengers: "1-4 passengers",
    price: "From ₦2,000",
    featured: false,
    cta: "Book Premium",
    ctaStyle: "outline",
  },
];

export default function RideTypes() {
  return (
    <section className="py-24 lg:py-32 relative bg-[#F7F7F7]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#D21F3C]/10 border border-[#D21F3C]/20 text-[#D21F3C] text-sm font-bold mb-4">
            Our Fleet
          </div>
          <h2 className="text-4xl lg:text-5xl font-black text-[#1A1A1A] mb-4">
            Choose Your{" "}
            <span className="gradient-text">Perfect Ride</span>
          </h2>
          <p className="text-[#555555] text-lg leading-relaxed">
            From budget-friendly kekes to premium executive cars - we have the right vehicle for every journey.
          </p>
        </div>

        {/* Ride cards */}
        <div className="grid md:grid-cols-3 gap-6 items-center">
          {rides.map(({ id, label, icon: Icon, desc, passengers, price, featured, cta, ctaStyle }) => (
            <div
              key={id}
              className={`relative rounded-3xl border p-7 transition-all duration-300 hover:-translate-y-2 group bg-white ${
                featured
                  ? "border-[#D21F3C]/40 shadow-2xl shadow-[#D21F3C]/10 scale-105"
                  : "border-gray-100 shadow-sm hover:border-[#D21F3C]/30 hover:shadow-md"
              }`}
            >
              {featured && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1.5 bg-[#D21F3C] text-white text-xs font-black rounded-full shadow-lg shadow-[#D21F3C]/30">
                  ⭐ Most Popular
                </div>
              )}

              {/* Icon */}
              <div
                className={`w-16 h-16 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 ${
                  featured ? "bg-[#D21F3C]/10 border border-[#D21F3C]/30" : "bg-gray-100 border border-gray-200"
                }`}
              >
                <Icon className="w-8 h-8" style={{ color: featured ? "#D21F3C" : "#555555" }} />
              </div>

              <h3 className="text-xl font-black text-[#1A1A1A] mb-2">{label}</h3>
              <p className="text-sm text-[#888888] leading-relaxed mb-5">{desc}</p>

              <div className="flex items-center gap-4 mb-6">
                <span className="flex items-center gap-1.5 text-xs text-[#888888]">
                  <Users className="w-3.5 h-3.5 text-[#D21F3C]" />
                  {passengers}
                </span>
                <span className="text-xs font-bold text-[#D21F3C]">{price}</span>
              </div>

              <a
                href="#register"
                className={`block text-center py-3 rounded-xl text-sm font-bold transition-all duration-200 ${
                  ctaStyle === "filled"
                    ? "bg-[#D21F3C] text-white hover:bg-[#a8172d] shadow-md hover:shadow-lg"
                    : "border-2 border-[#D21F3C]/50 text-[#D21F3C] hover:bg-[#D21F3C]/5"
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
