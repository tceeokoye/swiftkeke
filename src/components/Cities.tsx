"use client";

import { MapPin, Clock } from "lucide-react";

const cities = [
  { name: "Lagos", active: true },
  { name: "Abuja", active: true },
  { name: "Port Harcourt", active: true },
  { name: "Kano", active: true },
  { name: "Ibadan", active: true },
  { name: "Enugu", active: false },
  { name: "Benin City", active: false },
  { name: "Kaduna", active: false },
];

export default function Cities() {
  return (
    <section className="py-20 relative bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#D21F3C]/10 border border-[#D21F3C]/20 text-[#D21F3C] text-sm font-bold mb-4">
            Coverage
          </div>
          <h2 className="text-4xl font-black text-[#1A1A1A] mb-3">
            Now Available In{" "}
            <span className="gradient-text">Your City</span>
          </h2>
          <p className="text-[#555555]">
            OnaAga is expanding fast. We&apos;re already live in major cities and coming to more soon.
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3">
          {cities.map(({ name, active }) => (
            <div
              key={name}
              className={`flex items-center gap-3 p-4 rounded-xl border transition-all duration-200 ${
                active
                  ? "bg-[#D21F3C]/5 border-[#D21F3C]/25 hover:bg-[#D21F3C]/10"
                  : "bg-[#F7F7F7] border-gray-100 opacity-60"
              }`}
            >
              {active ? (
                <MapPin className="w-4 h-4 text-[#D21F3C] shrink-0" />
              ) : (
                <Clock className="w-4 h-4 text-[#888888] shrink-0" />
              )}
              <div>
                <span className={`text-sm font-semibold ${active ? "text-[#1A1A1A]" : "text-[#888888]"}`}>
                  {name}
                </span>
                {!active && (
                  <div className="text-[10px] text-[#888888] mt-0.5">Coming Soon</div>
                )}
              </div>
              {active && (
                <div className="ml-auto w-2 h-2 bg-green-500 rounded-full animate-pulse" />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
