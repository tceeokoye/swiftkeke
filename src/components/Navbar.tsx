"use client";

import { useState, useEffect } from "react";
import { MapPin, Menu, X } from "lucide-react";
import BookRideLogo from "./BookRideLogo";

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
          <a href="/#home" className="flex items-center gap-2.5 group">
            <div className="w-9 h-9 rounded-xl flex items-center justify-center shadow-md group-hover:shadow-lg transition-all duration-300 group-hover:scale-105">
              <BookRideLogo size={36} />
            </div>
            <span className="text-xl font-black tracking-tight text-[#1A1A1A]">
              Book<span className="text-[#D21F3C]">Ride</span>
            </span>
          </a>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="px-4 py-2 text-sm text-[#555555] hover:text-[#D21F3C] hover:bg-[#D21F3C]/8 rounded-lg transition-all duration-200 font-semibold"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* CTA */}
          <div className="hidden lg:flex items-center gap-3">
            <a
              href="/#register"
              className="px-5 py-2 text-sm font-bold text-white bg-[#D21F3C] rounded-xl hover:bg-[#a8172d] transition-all duration-200 shadow-md hover:shadow-lg hover:-translate-y-0.5"
            >
              Join Now
            </a>
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
          menuOpen ? "max-h-[400px] opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="border-t border-gray-100 px-4 py-3 flex flex-col gap-1">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className="px-4 py-3 text-sm text-[#555555] hover:text-[#D21F3C] hover:bg-[#D21F3C]/8 rounded-lg transition font-semibold"
            >
              {link.label}
            </a>
          ))}
          <div className="mt-2 flex flex-col gap-2">
            <a
              href="/#register"
              onClick={() => setMenuOpen(false)}
              className="py-2.5 text-center text-sm font-bold text-white bg-[#D21F3C] rounded-xl"
            >
              Join Now
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}
