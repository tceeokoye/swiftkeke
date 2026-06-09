"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";

import Logo from "@/assets/Logo/Artboard 19@4x.png"
import Image from "next/image";

const navLinks = [
  { label: "Requirements", href: "/#about" },
  { label: "Benefits", href: "/#benefits" },
  { label: "How it Works", href: "/#how-it-works" },
  { label: "FAQ", href: "/#faq" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white shadow-md border-b border-gray-100"
          : "bg-white border-b border-gray-100"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
         
          {/* Logo */}
          <Link href="/#home" className="flex items-center gap-2.5 group overflow-hidden">
            <Image src={Logo} alt="OnaAga Logo" width={100} height={100} />
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="px-4 py-2 text-sm text-[#555555] hover:text-[#DE2910] hover:bg-[#DE2910]/8 rounded-lg transition-all duration-200 font-semibold"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* CTA */}
          <div className="hidden lg:flex items-center gap-3">
            <Link
              href="/driver-onboarding"
              className="px-5 py-2 text-sm font-bold text-white bg-[#DE2910] rounded-xl hover:bg-[#a8172d] transition-all duration-200 shadow-md hover:shadow-lg hover:-translate-y-0.5 cursor-pointer"
            >
              Apply to Drive
            </Link>
            <Link
              href="/passenger-waitlist"
              className="px-5 py-2 text-sm font-bold text-[#1A1A1A] bg-white border border-[#DE2910]/20 rounded-xl hover:border-[#DE2910] transition-all duration-200"
            >
              Join Waitlist
            </Link>
          </div>

          {/* Hamburger */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="lg:hidden p-2 rounded-lg text-[#1A1A1A] hover:bg-gray-100 transition"
            aria-label="Toggle menu"
          >
            {menuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`lg:hidden transition-all duration-300 overflow-hidden bg-white ${
          menuOpen ? "max-h-100 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="border-t border-gray-100 px-4 py-3 flex flex-col gap-1">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className="px-4 py-3 text-sm text-[#555555] hover:text-[#DE2910] hover:bg-[#DE2910]/8 rounded-lg transition font-semibold"
            >
              {link.label}
            </Link>
          ))}
          <div className="mt-2 flex flex-col gap-2">
            <Link
              href="/driver-onboarding"
              onClick={() => setMenuOpen(false)}
              className="py-2.5 text-center text-sm font-bold text-white bg-[#DE2910] rounded-xl cursor-pointer"
            >
              Apply to Drive
            </Link>
            <Link
              href="/passenger-waitlist"
              onClick={() => setMenuOpen(false)}
              className="py-2.5 text-center text-sm font-bold text-[#1A1A1A] bg-white border border-[#DE2910]/20 rounded-xl cursor-pointer"
            >
              Join Waitlist
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}
