"use client";

const items = [
  "⚡ Quick Registration",
  "🛡️ Verified Drivers",
  "💰 Great Earnings",
  "📍 Flexible Routes",
  "🎧 Driver Support 24/7",
  "⭐ Join 1,200+ Drivers",
  "📱 Easy App",
  "🚀 Start Earning Today",
];

export default function Marquee() {
  const doubled = [...items, ...items];

  return (
    <div className="relative overflow-hidden bg-gradient-to-r from-purple-900/30 via-purple-800/20 to-purple-900/30 border-y border-purple-800/20 py-4">
      <div
        className="flex gap-8 whitespace-nowrap"
        style={{ animation: "marquee 30s linear infinite" }}
      >
        {doubled.map((item, i) => (
          <span
            key={i}
            className="inline-flex items-center gap-2 text-sm font-semibold text-purple-300 shrink-0"
          >
            {item}
            <span className="text-purple-700">•</span>
          </span>
        ))}
      </div>
    </div>
  );
}
