"use client";

import { Star, StarHalf } from "lucide-react";

const reviews = [
  {
    name: "Adaeze Okonkwo",
    location: "Lagos, Nigeria",
    initials: "AO",
    rating: 5,
    text: "SwiftKeke changed my daily commute completely. I get to work faster, cheaper, and without the stress of finding transport.",
    gradientFrom: "#7c3aed",
    gradientTo: "#a855f7",
  },
  {
    name: "Emmanuel Musa",
    location: "Abuja, Nigeria",
    initials: "EM",
    rating: 5,
    text: "The drivers are professional and the app is so smooth! I booked a premium ride for my airport drop-off and the driver was early. 10/10!",
    gradientFrom: "#9333ea",
    gradientTo: "#c026d3",
    featured: true,
  },
  {
    name: "Fatima Kwari",
    location: "Kano, Nigeria",
    initials: "FK",
    rating: 4.5,
    text: "I love how I can see the price before booking. No more arguing about fare! SwiftKeke is just different from the rest.",
    gradientFrom: "#a855f7",
    gradientTo: "#7c3aed",
  },
];

function Stars({ count }: { count: number }) {
  return (
    <div className="flex gap-0.5">
      {[1, 2, 3, 4].map((i) => (
        <Star key={i} className="w-4 h-4 text-yellow-400 fill-yellow-400" />
      ))}
      {count === 5 ? (
        <Star className="w-4 h-4 text-yellow-400 fill-yellow-400" />
      ) : (
        <StarHalf className="w-4 h-4 text-yellow-400 fill-yellow-400" />
      )}
    </div>
  );
}

export default function Testimonials() {
  return (
    <section className="py-24 lg:py-32 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-purple-950/10 to-transparent pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="text-center max-w-xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-purple-900/30 border border-purple-700/40 text-purple-300 text-sm font-medium mb-4">
            Reviews
          </div>
          <h2 className="text-4xl lg:text-5xl font-black text-white">
            What Our Riders <span className="gradient-text">Say</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-6 items-center">
          {reviews.map(({ name, location, initials, rating, text, gradientFrom, gradientTo, featured }) => (
            <div
              key={name}
              className={`relative p-7 rounded-3xl border transition-all duration-300 hover:-translate-y-1 ${
                featured
                  ? "bg-gradient-to-br from-purple-800/25 to-violet-900/15 border-purple-500/40 shadow-2xl shadow-purple-900/30 scale-105"
                  : "bg-white/[0.03] border-white/[0.06] hover:border-purple-500/20"
              }`}
            >
              {featured && (
                <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-purple-600/5 to-transparent pointer-events-none" />
              )}

              <div className="relative">
                <Stars count={rating} />
                <p className="mt-4 text-sm text-gray-400 leading-relaxed">
                  &ldquo;{text}&rdquo;
                </p>

                <div className="flex items-center gap-3 mt-6">
                  <div
                    className="w-10 h-10 rounded-full flex items-center justify-center text-white text-sm font-bold"
                    style={{ background: `linear-gradient(135deg, ${gradientFrom}, ${gradientTo})` }}
                  >
                    {initials}
                  </div>
                  <div>
                    <div className="text-sm font-bold text-white">{name}</div>
                    <div className="text-xs text-gray-600">{location}</div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Overall rating badge */}
        <div className="mt-14 flex justify-center">
          <div className="inline-flex items-center gap-6 px-8 py-5 bg-white/[0.03] border border-white/[0.07] rounded-2xl">
            <div className="text-center">
              <div className="text-4xl font-black text-white">4.9</div>
              <div className="flex justify-center mt-1">
                {[...Array(5)].map((_, i) => <Star key={i} className="w-3 h-3 text-yellow-400 fill-yellow-400" />)}
              </div>
            </div>
            <div className="w-px h-12 bg-white/10" />
            <div>
              <div className="text-lg font-bold text-white">50,000+ Reviews</div>
              <div className="text-sm text-gray-500 mt-0.5">Across all platforms</div>
            </div>
            <div className="w-px h-12 bg-white/10" />
            <div>
              <div className="text-lg font-bold text-white">98%</div>
              <div className="text-sm text-gray-500 mt-0.5">Would recommend</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
