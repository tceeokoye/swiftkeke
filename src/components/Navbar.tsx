"use client";

import { useState, useEffect } from "react";
import { Zap, Menu, X } from "lucide-react";

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Benefits", href: "#benefits" },
  { label: "FAQ", href: "#faq" },
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
      className={`fixed top-4 left-1/2 -translate-x-1/2 z-50 transition-all duration-500 w-[95%] max-w-5xl ${
        scrolled
          ? "bg-[#0a0a0f]/90 backdrop-blur-2xl border border-purple-900/30 shadow-2xl shadow-purple-900/10 rounded-2xl"
          : "bg-white/[0.03] backdrop-blur-xl border border-white/[0.06] rounded-2xl"
      }`}
    >
      <div className="px-4 sm:px-6">
        <div className="flex items-center justify-between h-14 lg:h-16">
          {/* Logo */}
          <a href="#home" className="flex items-center gap-2 group">
            <div className="w-8 h-8 rounded-xl bg-gradient-to-br from-purple-600 to-violet-700 flex items-center justify-center shadow-lg shadow-purple-700/40 group-hover:shadow-purple-600/60 transition-all duration-300 group-hover:scale-110">
              <Zap className="w-4 h-4 text-white" fill="white" />
            </div>
            <span className="text-lg font-black tracking-tight text-white">
              Swift<span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-violet-400">Keke</span>
            </span>
          </a>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="px-4 py-2 text-sm text-gray-400 hover:text-white hover:bg-white/5 rounded-xl transition-all duration-200 font-medium"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* CTA */}
          <div className="hidden lg:flex items-center gap-3">
            <a
              href="#register"
              className="px-5 py-2 text-sm font-semibold text-purple-300 border border-purple-700/50 rounded-xl hover:bg-purple-700/10 transition-all duration-200"
            >
              Book a Ride
            </a>
            <a
              href="#register"
              className="px-5 py-2 text-sm font-bold text-white bg-gradient-to-r from-purple-600 to-violet-600 rounded-xl hover:from-purple-500 hover:to-violet-500 transition-all duration-200 shadow-lg shadow-purple-700/30 hover:shadow-purple-600/50 hover:-translate-y-0.5"
            >
              Register Now
            </a>
          </div>

          {/* Hamburger */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="lg:hidden p-2 rounded-lg text-gray-300 hover:text-white hover:bg-white/5 transition"
            aria-label="Toggle menu"
          >
            {menuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`lg:hidden transition-all duration-300 overflow-hidden ${
          menuOpen ? "max-h-[400px] opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="border-t border-purple-900/20 px-4 py-3 flex flex-col gap-1">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className="px-4 py-3 text-sm text-gray-300 hover:text-white hover:bg-white/5 rounded-lg transition font-medium"
            >
              {link.label}
            </a>
          ))}
          <div className="mt-2 flex flex-col gap-2">
            <a
              href="#register"
              onClick={() => setMenuOpen(false)}
              className="py-2.5 text-center text-sm font-semibold text-purple-300 border border-purple-700/50 rounded-xl"
            >
              Book a Ride
            </a>
            <a
              href="#register"
              onClick={() => setMenuOpen(false)}
              className="py-2.5 text-center text-sm font-bold text-white bg-gradient-to-r from-purple-600 to-violet-600 rounded-xl"
            >
              Register Now
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}
