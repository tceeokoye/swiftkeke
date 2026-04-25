"use client";

import { Zap, Heart } from "lucide-react";

const footerLinks = {
  Drivers: ["Register", "Requirements", "Earnings", "Driver Support"],
  Company: ["About Us", "Careers", "Blog", "Press"],
  Legal: ["Terms of Service", "Privacy Policy", "Cookie Policy"],
};

export default function Footer() {
  return (
    <footer className="bg-[#0a0a0f] border-t border-white/[0.06] pt-14 pb-6">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-10 mb-12">
          <div className="lg:col-span-2">
            <a href="#home" className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 rounded-xl bg-gradient-to-br from-purple-600 to-violet-700 flex items-center justify-center shadow-lg shadow-purple-700/30">
                <Zap className="w-4 h-4 text-white" fill="white" />
              </div>
              <span className="text-lg font-black tracking-tight text-white">
                Swift<span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-violet-400">Keke</span>
              </span>
            </a>
            <p className="text-sm text-gray-600 leading-relaxed max-w-xs">
              Building Nigeria&apos;s most trusted ride-hailing platform. Join us as a driver and start earning today.
            </p>
          </div>

          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h5 className="text-sm font-bold text-white mb-4">{category}</h5>
              <ul className="space-y-2.5">
                {links.map((link) => (
                  <li key={link}>
                    <a href="#" className="text-sm text-gray-600 hover:text-purple-400 transition-colors">{link}</a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="border-t border-white/[0.06] pt-6 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-xs text-gray-700">© 2025 SwiftKeke Technologies Ltd. All rights reserved.</p>
          <p className="text-xs text-gray-700 flex items-center gap-1">
            Made with <Heart className="w-3 h-3 text-purple-500" fill="currentColor" /> in Nigeria
          </p>
        </div>
      </div>
    </footer>
  );
}
