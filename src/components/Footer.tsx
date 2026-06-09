"use client";

import Link from "next/link";
import { Heart } from "lucide-react";
import Logo from "@/assets/Logo/Artboard 15@4x.png"
import Image from "next/image";

const footerLinks = {
  Riders: [
    { label: "Ride with onaaga", href: "/passenger-waitlist" },
    { label: "Ride Types", href: "/#benefits" },
    { label: "Pricing", href: "/#faq" },
    { label: "Rider Support", href: "/support" }
  ],
  Drivers: [
    { label: "Register", href: "/driver-onboarding" },
    { label: "Requirements", href: "/#how-it-works" },
    { label: "Earnings", href: "/#benefits" },
    { label: "Driver Support", href: "/support" }
  ],
  Company: [
    { label: "About Us", href: "/about" },
    { label: "Careers", href: "/careers" },
    { label: "Blog", href: "/blog" },
    { label: "Press", href: "/press" }
  ],
  Legal: [
    { label: "Terms of Service", href: "/terms" },
    { label: "Privacy Policy", href: "/privacy" },
    { label: "Cookie Policy", href: "/cookies" }
  ],
};

export default function Footer() {
  return (
    <footer className="bg-[#1A1A1A] border-t border-white/6 pt-14 pb-6">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid sm:grid-cols-2 lg:grid-cols-6 gap-10 mb-12">
          <div className="lg:col-span-2">
            <Link href="/#home" className="flex items-center gap-2 mb-4">
             <Image src={Logo} alt="OnaAga Logo" width={100} height={100} />
            </Link>
            <p className="text-sm text-gray-500 leading-relaxed max-w-xs mb-6">
              Building Nigeria&apos;s most trusted ride-hailing platform. Book safe, affordable rides anytime, anywhere.
            </p>
            {/* UBA Gold accent bar */}
            <div className="flex gap-2 items-center">
              <div className="w-8 h-1 bg-[#DE2910] rounded-full" />
              <div className="w-4 h-1 bg-[#FDC300] rounded-full" />
              <div className="w-2 h-1 bg-white/20 rounded-full" />
            </div>
          </div>

          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h5 className="text-sm font-black text-white mb-4">{category}</h5>
              <ul className="space-y-2.5">
                {links.map((link) => (
                  <li key={link.label}>
                    <Link href={link.href} className="text-sm text-gray-500 hover:text-[#DE2910] transition-colors">{link.label}</Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="border-t border-white/6 pt-6 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-xs text-gray-600">© 2026 onaaga Technologies Ltd. All rights reserved.</p>
          <p className="text-xs text-gray-600 flex items-center gap-1">
            Made with <Heart className="w-3 h-3 text-[#DE2910]" fill="currentColor" /> in Nigeria
          </p>
        </div>
      </div>
    </footer>
  );
}
