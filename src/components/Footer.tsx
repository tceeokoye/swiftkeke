"use client";

import { Heart } from "lucide-react";
import BookRideLogo from "./BookRideLogo";

const footerLinks = {
  Riders: ["Book a Ride", "Ride Types", "Pricing", "Rider Support"],
  Drivers: ["Register", "Requirements", "Earnings", "Driver Support"],
  Company: ["About Us", "Careers", "Blog", "Press"],
  Legal: ["Terms of Service", "Privacy Policy", "Cookie Policy"],
};

export default function Footer() {
  return (
    <footer className="bg-[#1A1A1A] border-t border-white/[0.06] pt-14 pb-6">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid sm:grid-cols-2 lg:grid-cols-6 gap-10 mb-12">
          <div className="lg:col-span-2">
            <a href="#home" className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 rounded-xl flex items-center justify-center shadow-lg">
                <BookRideLogo size={40} />
              </div>
              <span className="text-xl font-black tracking-tight text-white">
                Book<span className="text-[#D21F3C]">Ride</span>
              </span>
            </a>
            <p className="text-sm text-gray-500 leading-relaxed max-w-xs mb-6">
              Building Nigeria&apos;s most trusted ride-hailing platform. Book safe, affordable rides anytime, anywhere.
            </p>
            {/* UBA Gold accent bar */}
            <div className="flex gap-2 items-center">
              <div className="w-8 h-1 bg-[#D21F3C] rounded-full" />
              <div className="w-4 h-1 bg-[#FDC300] rounded-full" />
              <div className="w-2 h-1 bg-white/20 rounded-full" />
            </div>
          </div>

          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h5 className="text-sm font-black text-white mb-4">{category}</h5>
              <ul className="space-y-2.5">
                {links.map((link) => (
                  <li key={link}>
                    <a href="#" className="text-sm text-gray-500 hover:text-[#D21F3C] transition-colors">{link}</a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="border-t border-white/[0.06] pt-6 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-xs text-gray-600">© 2025 Book Ride Technologies Ltd. All rights reserved.</p>
          <p className="text-xs text-gray-600 flex items-center gap-1">
            Made with <Heart className="w-3 h-3 text-[#D21F3C]" fill="currentColor" /> in Nigeria
          </p>
        </div>
      </div>
    </footer>
  );
}
