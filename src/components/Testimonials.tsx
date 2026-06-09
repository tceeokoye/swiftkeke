"use client";

import { Star, StarHalf } from "lucide-react";

const reviews = [
  {
    name: "Adaeze Okonkwo",
    location: "Lagos, Nigeria",
    initials: "AO",
    rating: 5,
    text: "OnaAga changed my daily commute completely. I get to work faster, cheaper, and without the stress of finding transport.",
    gradientFrom: "#DE2910",
    gradientTo: "#FDC300",
  },
  {
    name: "Emmanuel Musa",
    location: "Abuja, Nigeria",
    initials: "EM",
    rating: 5,
    text: "The drivers are professional and the app is so smooth! I booked a premium ride for my airport drop-off and the driver was early. 10/10!",
    gradientFrom: "#FDC300",
    gradientTo: "#DE2910",
    featured: true,
  },
  {
    name: "Fatima Kwari",
    location: "Kano, Nigeria",
    initials: "FK",
    rating: 4.5,
    text: "I love how I can see the price before booking. No more arguing about fare! OnaAga is just different from the rest.",
    gradientFrom: "#DE2910",
    gradientTo: "#FDC300",
  },
];

function Stars({ count }: { count: number }) {
  return (
    <div className="flex gap-0.5">
      {[1, 2, 3, 4].map((i) => (
        <Star key={i} className="w-4 h-4 text-[#FDC300] fill-[#FDC300]" />
      ))}
      {count === 5 ? (
        <Star className="w-4 h-4 text-[#FDC300] fill-[#FDC300]" />
      ) : (
        <StarHalf className="w-4 h-4 text-[#FDC300] fill-[#FDC300]" />
      )}
    </div>
  );
}

export default function Testimonials() {
  return (
    <section className="py-24 lg:py-32 relative overflow-hidden bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="text-center max-w-xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#DE2910]/10 border border-[#DE2910]/20 text-[#DE2910] text-sm font-bold mb-4">
            Reviews
          </div>
          <h2 className="text-4xl lg:text-5xl font-black text-[#1A1A1A]">
            What Our Riders <span className="gradient-text">Say</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-6 items-center">
          {reviews.map(({ name, location, initials, rating, text, gradientFrom, gradientTo, featured }) => (
            <div
              key={name}
              className={`relative p-7 rounded-3xl border transition-all duration-300 hover:-translate-y-1 ${
                featured
                  ? "bg-[#DE2910] border-[#DE2910] shadow-2xl shadow-[#DE2910]/20 scale-105"
                  : "bg-white border-gray-100 shadow-sm hover:border-[#DE2910]/25 hover:shadow-md"
              }`}
            >
              <div className="relative">
                <Stars count={rating} />
                <p className={`mt-4 text-sm leading-relaxed ${featured ? "text-white/90" : "text-[#555555]"}`}>
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
                    <div className={`text-sm font-bold ${featured ? "text-white" : "text-[#1A1A1A]"}`}>{name}</div>
                    <div className={`text-xs ${featured ? "text-white/60" : "text-[#888888]"}`}>{location}</div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Overall rating badge */}
        <div className="mt-14 flex justify-center">
          <div className="inline-flex items-center gap-6 px-8 py-5 bg-[#F7F7F7] border border-gray-100 rounded-2xl shadow-sm">
            <div className="text-center">
              <div className="text-4xl font-black text-[#1A1A1A]">4.9</div>
              <div className="flex justify-center mt-1">
                {[...Array(5)].map((_, i) => <Star key={i} className="w-3 h-3 text-[#FDC300] fill-[#FDC300]" />)}
              </div>
            </div>
            <div className="w-px h-12 bg-gray-200" />
            <div>
              <div className="text-lg font-bold text-[#1A1A1A]">50,000+ Reviews</div>
              <div className="text-sm text-[#888888] mt-0.5">Across all platforms</div>
            </div>
            <div className="w-px h-12 bg-gray-200" />
            <div>
              <div className="text-lg font-bold text-[#1A1A1A]">98%</div>
              <div className="text-sm text-[#888888] mt-0.5">Would recommend</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
