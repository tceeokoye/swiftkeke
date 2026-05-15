"use client";

import { Check } from "lucide-react";

interface Props {
  firstName: string;
  email: string;
  accountType: string | null;
  onReset: () => void;
}

export default function RegistrationSuccess({ firstName, email, accountType, onReset }: Props) {
  return (
    <section id="register" className="py-24 lg:py-32">
      <div className="max-w-xl mx-auto px-4 text-center">
        <div className="bg-white border border-green-500/30 rounded-3xl p-12 shadow-xl">
          <div className="w-20 h-20 bg-green-500/20 rounded-full flex items-center justify-center mx-auto mb-6">
            <Check className="w-10 h-10 text-green-500" />
          </div>
          <h2 className="text-3xl font-black text-[#1A1A1A] mb-3">
            {accountType === "driver" ? "Application Submitted!" : "You're on the Waitlist!"}
          </h2>
          <p className="text-[#555555] leading-relaxed mb-6">
            {accountType === "driver" 
              ? `Thank you, ${firstName}! Your driver application is under review. We'll contact you at ${email}.`
              : `Awesome, ${firstName}! We've added you to our exclusive waitlist. We'll notify you as soon as Onaaga launches in your area.`}
          </p>
          <button 
            onClick={onReset}
            className="px-6 py-3 bg-[#D21F3C] hover:bg-[#a8172d] text-white font-bold rounded-xl transition cursor-pointer"
          >
            Back to Home
          </button>
        </div>
      </div>
    </section>
  );
}
