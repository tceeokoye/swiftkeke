"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

const faqs = [
  { q: "What documents do I need to register?", a: "You'll need a valid driver's license, a government-issued ID (NIN, Voter's Card, or Passport), proof of address (utility bill or bank statement), and a clear selfie photo." },
  { q: "How long does verification take?", a: "Most applications are reviewed within 24-48 hours. You'll receive a confirmation email and SMS once your account is activated." },
  { q: "Is there a registration fee?", a: "No, registration is completely free. There are no hidden fees or upfront costs to join Onaaga as a driver." },
  { q: "What types of vehicles are accepted?", a: "We accept keke (tricycles), standard sedans, and premium vehicles. All vehicles must pass our safety inspection." },
  { q: "How do I get paid?", a: "Earnings are paid weekly to your registered bank account. You can also track your daily and weekly earnings in the driver app." },
  { q: "Can I drive part-time?", a: "Absolutely! You set your own schedule. Drive full-time, part-time, or just weekends â€” it's completely up to you." },
];

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <section id="faq" className="py-24 lg:py-32 relative bg-[#F7F7F7]">
      <div className="max-w-3xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#D21F3C]/10 border border-[#D21F3C]/20 text-[#D21F3C] text-sm font-bold mb-4">
            FAQ
          </div>
          <h2 className="text-4xl font-black text-[#1A1A1A] mb-3">
            Common <span className="gradient-text">Questions</span>
          </h2>
          <p className="text-[#555555]">Everything you need to know before signing up.</p>
        </div>

        <div className="space-y-3">
          {faqs.map(({ q, a }, i) => (
            <div
              key={i}
              className={`border rounded-2xl overflow-hidden transition-all duration-300 ${
                open === i ? "bg-white border-[#D21F3C]/30 shadow-sm" : "bg-white border-gray-100 hover:border-[#D21F3C]/20"
              }`}
            >
              <button
                onClick={() => setOpen(open === i ? null : i)}
                className="w-full flex items-center justify-between p-5 text-left"
              >
                <span className="text-sm font-semibold text-[#1A1A1A] pr-4">{q}</span>
                <ChevronDown className={`w-4 h-4 text-[#D21F3C] shrink-0 transition-transform duration-300 ${open === i ? "rotate-180" : ""}`} />
              </button>
              <div className={`overflow-hidden transition-all duration-300 ${open === i ? "max-h-40 opacity-100" : "max-h-0 opacity-0"}`}>
                <p className="px-5 pb-5 text-sm text-[#555555] leading-relaxed">{a}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
