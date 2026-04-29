"use client";

const items = [
  "🚗 Quick Booking",
  "🛡️ Verified Drivers",
  "💳 Transparent Fares",
  "📍 Live GPS Tracking",
  "🎧 Support 24/7",
  "⭐ 4.9 Star Rating",
  "📱 Easy App",
  "🚀 Book in 30 Seconds",
];

export default function Marquee() {
  const doubled = [...items, ...items];

  return (
    <div className="relative overflow-hidden bg-[#D21F3C] py-3.5">
      <div
        className="flex gap-8 whitespace-nowrap"
        style={{ animation: "marquee 30s linear infinite" }}
      >
        {doubled.map((item, i) => (
          <span
            key={i}
            className="inline-flex items-center gap-2 text-sm font-bold text-white shrink-0"
          >
            {item}
            <span className="text-white/40">•</span>
          </span>
        ))}
      </div>
    </div>
  );
}
