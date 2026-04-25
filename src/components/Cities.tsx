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
    <section className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-purple-900/30 border border-purple-700/40 text-purple-300 text-sm font-medium mb-4">
            Coverage
          </div>
          <h2 className="text-4xl font-black text-white mb-3">
            Now Available In{" "}
            <span className="gradient-text">Your City</span>
          </h2>
          <p className="text-gray-400">
            SwiftKeke is expanding fast. We&apos;re already live in major cities and coming to more soon.
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3">
          {cities.map(({ name, active }) => (
            <div
              key={name}
              className={`flex items-center gap-3 p-4 rounded-xl border transition-all duration-200 ${
                active
                  ? "bg-purple-700/10 border-purple-600/30 hover:bg-purple-700/20"
                  : "bg-white/[0.02] border-white/[0.05] opacity-60"
              }`}
            >
              {active ? (
                <MapPin className="w-4 h-4 text-purple-400 shrink-0" />
              ) : (
                <Clock className="w-4 h-4 text-gray-600 shrink-0" />
              )}
              <div>
                <span className={`text-sm font-semibold ${active ? "text-white" : "text-gray-500"}`}>
                  {name}
                </span>
                {!active && (
                  <div className="text-[10px] text-gray-700 mt-0.5">Coming Soon</div>
                )}
              </div>
              {active && (
                <div className="ml-auto w-2 h-2 bg-green-400 rounded-full animate-pulse" />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
