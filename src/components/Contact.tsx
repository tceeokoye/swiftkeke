"use client";

import { useState } from "react";
import { Phone, Mail, Headphones, Send, Share2, Globe, MessageCircle } from "lucide-react";

const contactItems = [
  { icon: Phone, label: "Call Us", value: "+234 800 SWIFT KK" },
  { icon: Mail, label: "Email Us", value: "support@swiftkeke.com" },
  { icon: Headphones, label: "Live Chat", value: "Available 24/7 on the app" },
];

const socialLinks = [
  { id: "shareLink", icon: Share2, href: "#" },
  { id: "webLink", icon: Globe, href: "#" },
  { id: "chatLink", icon: MessageCircle, href: "#" },
];

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", phone: "", message: "" });
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSent(true);
    setTimeout(() => setSent(false), 4000);
    setForm({ name: "", email: "", phone: "", message: "" });
  };

  return (
    <section id="contact" className="py-24 lg:py-32 relative">
      <div className="absolute right-0 bottom-0 w-80 h-80 bg-purple-800/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="grid lg:grid-cols-2 gap-16 items-start">

          {/* Info */}
          <div>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-purple-900/30 border border-purple-700/40 text-purple-300 text-sm font-medium mb-6">
              Get in Touch
            </div>
            <h2 className="text-4xl lg:text-5xl font-black text-white mb-5">
              We&apos;d Love to{" "}
              <span className="gradient-text block">Hear From You</span>
            </h2>
            <p className="text-gray-400 text-lg leading-relaxed mb-10">
              Have questions, partnership inquiries, or driver onboarding questions? Our team is ready to help.
            </p>

            <div className="space-y-4 mb-10">
              {contactItems.map(({ icon: Icon, label, value }) => (
                <div
                  key={label}
                  className="flex items-center gap-4 p-4 bg-white/[0.03] border border-white/[0.06] rounded-2xl hover:border-purple-500/30 transition"
                >
                  <div className="w-10 h-10 bg-purple-700/20 border border-purple-600/30 rounded-xl flex items-center justify-center shrink-0">
                    <Icon className="w-5 h-5 text-purple-400" />
                  </div>
                  <div>
                    <div className="text-xs text-gray-600 font-medium">{label}</div>
                    <div className="text-sm font-semibold text-white">{value}</div>
                  </div>
                </div>
              ))}
            </div>

            <div className="flex gap-3">
              {socialLinks.map(({ id, icon: Icon, href }) => (
                <a
                  key={id}
                  id={id}
                  href={href}
                  className="w-10 h-10 bg-white/5 border border-white/10 rounded-xl flex items-center justify-center text-gray-500 hover:text-purple-400 hover:border-purple-500/30 hover:bg-purple-700/10 transition-all duration-200"
                >
                  <Icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Form */}
          <form
            onSubmit={handleSubmit}
            className="bg-white/[0.03] border border-white/[0.06] rounded-3xl p-8 space-y-5"
          >
            <div>
              <label className="block text-xs font-semibold text-gray-500 uppercase tracking-wide mb-1.5">
                Full Name
              </label>
              <input
                type="text"
                id="contactName"
                required
                placeholder="Your full name"
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3.5 text-sm text-white placeholder-gray-700 focus:outline-none focus:border-purple-500/50 transition"
              />
            </div>
            <div>
              <label className="block text-xs font-semibold text-gray-500 uppercase tracking-wide mb-1.5">
                Email Address
              </label>
              <input
                type="email"
                id="contactEmail"
                required
                placeholder="your@email.com"
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3.5 text-sm text-white placeholder-gray-700 focus:outline-none focus:border-purple-500/50 transition"
              />
            </div>
            <div>
              <label className="block text-xs font-semibold text-gray-500 uppercase tracking-wide mb-1.5">
                Phone Number
              </label>
              <input
                type="tel"
                id="contactPhone"
                placeholder="+234 000 000 0000"
                value={form.phone}
                onChange={(e) => setForm({ ...form, phone: e.target.value })}
                className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3.5 text-sm text-white placeholder-gray-700 focus:outline-none focus:border-purple-500/50 transition"
              />
            </div>
            <div>
              <label className="block text-xs font-semibold text-gray-500 uppercase tracking-wide mb-1.5">
                Message
              </label>
              <textarea
                id="contactMessage"
                required
                rows={4}
                placeholder="How can we help you?"
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3.5 text-sm text-white placeholder-gray-700 focus:outline-none focus:border-purple-500/50 transition resize-none"
              />
            </div>
            <button
              type="submit"
              className="w-full flex items-center justify-center gap-2 py-4 bg-gradient-to-r from-purple-600 to-violet-600 text-white font-bold rounded-xl shadow-lg shadow-purple-700/30 hover:shadow-purple-600/50 hover:-translate-y-0.5 transition-all duration-200"
            >
              <Send className="w-4 h-4" />
              {sent ? "Message Sent! ✓" : "Send Message"}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
