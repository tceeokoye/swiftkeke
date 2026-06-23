"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Lock, Mail, X, ArrowRight } from "lucide-react";
import Logo from "@/assets/Logo/Artboard 15@4x.png";

export default function ComingSoonPage() {
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);

  return (
    <div className="min-h-screen bg-[#1A1A1A] text-white flex flex-col relative overflow-hidden">
      {/* Background ambient glow */}
      <div
        className="absolute top-1/4 left-1/4 w-125 h-125 bg-[#DE2910] rounded-full mix-blend-screen filter blur-[150px] opacity-20 animate-pulse"
        style={{ animationDuration: "4s" }}
      ></div>
      <div className="absolute bottom-0 right-0 w-150 h-150 bg-[#a8172d] rounded-full mix-blend-screen filter blur-[150px] opacity-15"></div>

      {/* Header */}
      <header className="w-full p-6 md:px-12 absolute top-0 z-20 flex justify-between items-center">
        <Link href="/#home" className="flex items-center gap-2 mb-4">
          <Image src={Logo} alt="OnaAga Logo" width={100} height={100} />
        </Link>
        <div className="flex items-center gap-6">
          <Link
            href="/"
            className="text-sm font-medium text-gray-300 hover:text-white transition-colors"
          >
            Back to Home
          </Link>
        </div>
      </header>

      <div className="flex-1  lg:max-w-7xl mx-auto px-6 w-full flex flex-col lg:flex-row  items-center justify-between z-10 py-10 lg:py-0 mt-20 ">
        <div className="lg:w-1/2 w-full space-y-4 text-center lg:text-left mb-6  lg:mb-0">
          <div className="inline-flex items-center gap-3 px-5 py-2.5 rounded-md bg-white/5 border border-white/10 backdrop-blur-md shadow-lg shadow-black/20">
            <span className="relative flex h-3 w-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#DE2910] opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-[#DE2910]"></span>
            </span>
            <span className="md:text-2xl text-[17px] font-semibold text-[#ffffff] tracking-wide ">
              OnaAga App Coming Soon
            </span>
          </div>

          <h1 className="text-xl md:text-3xl lg:text-3xl  justify-center lg:justify-start font-extrabold flex gap-2 leading-tight tracking-tight">
            The Future of
            <span className="text-transparent bg-clip-text bg-linear-to-r from-[#DE2910] to-[#a8172d] pb-2 inline-block">
              Ride Hailing
            </span>
          </h1>

          <p className="text-base text-gray-400 max-w-lg mx-auto lg:mx-0 leading-relaxed font-light">
            We're building an incredibly smooth, fast, and secure experience
            that will change the way you move. Get ready for the ultimate ride.
          </p>

          <form 
            onSubmit={(e) => {
              e.preventDefault();
              const formData = new FormData(e.currentTarget);
              const email = formData.get("email") as string;
              if (email) {
                window.location.href = `/login?email=${encodeURIComponent(email)}&type=passenger`;
              }
            }}
            className="pt-6 flex flex-col sm:flex-row items-center gap-4 justify-center lg:justify-start"
          >
            <div className="relative w-full sm:w-auto">
              <input
                type="email"
                name="email"
                required
                placeholder="Enter your email"
                className="w-full sm:w-75 px-6 py-4 rounded-full bg-white/5 border border-white/10 focus:outline-none focus:border-[#DE2910] focus:bg-white/10 text-white transition-all pl-6 pr-32 backdrop-blur-sm"
              />
              <button 
                type="submit"
                className="absolute right-1.5 top-1.5 bottom-1.5 px-6 bg-[#DE2910] hover:bg-[#a8172d] rounded-full text-white font-semibold transition-colors text-sm"
              >
                Continue
              </button>
            </div>
          </form>

          <div className="pt-10 hidden md:flex flex-col items-center lg:items-start gap-4">
            <p className="text-sm text-gray-400 font-medium tracking-wide uppercase">
              Will be available on
            </p>
            <div className="flex flex-col sm:flex-row items-center gap-4">
              {/* App Store Badge */}
              <div className="flex items-center gap-3 bg-white/5 hover:bg-white/10 border border-white/10 transition-all cursor-default px-5 py-2.5 rounded-xl backdrop-blur-sm">
                <svg viewBox="0 0 384 512" className="w-7 h-7 fill-white">
                  <path d="M318.7 268.7c-.2-36.7 16.4-64.4 50-84.8-18.8-26.9-47.2-41.7-84.7-44.6-35.5-2.8-74.3 20.7-88.5 20.7-15 0-49.4-19.7-76.4-19.7C63.3 141.2 4 184.8 4 273.5q0 39.3 14.4 81.2c12.8 36.7 59 126.7 107.2 125.2 25.2-.6 43-17.9 75.8-17.9 31.8 0 48.3 17.9 76.4 17.9 48.6-.7 90.4-82.5 102.6-119.3-65.2-30.7-61.7-90-61.7-91.9zm-56.6-164.2c27.3-32.4 24.8-61.9 24-72.5-24.1 1.4-52 16.4-67.9 34.9-17.5 19.8-27.8 44.3-25.6 71.9 26.1 2 49.9-11.4 69.5-34.3z" />
                </svg>
                <div className="flex flex-col text-left">
                  <span className="text-[10px] leading-tight text-gray-300">
                    Download on the
                  </span>
                  <span className="text-base font-semibold leading-tight text-white">
                    App Store
                  </span>
                </div>
              </div>

              {/* Google Play Badge */}
              <div className="flex items-center gap-3 bg-white/5 hover:bg-white/10 border border-white/10 transition-all cursor-default px-5 py-2.5 rounded-xl backdrop-blur-sm">
                <svg viewBox="0 0 512 512" className="w-7 h-7 fill-white">
                  <path d="M325.3 234.3L104.6 13l280.8 161.2-60.1 60.1zM47 0C34 6.8 25.3 19.2 25.3 35.3v441.3c0 16.1 8.7 28.5 21.7 35.3l256.6-256L47 0zm425.2 225.6l-58.9-34.1-65.7 64.5 65.7 64.5 60.1-34.1c18-14.3 18-46.5-1.2-60.8zM104.6 499l280.8-161.2-60.1-60.1L104.6 499z" />
                </svg>
                <div className="flex flex-col text-left">
                  <span className="text-[10px] leading-tight text-gray-300">
                    GET IT ON
                  </span>
                  <span className="text-base font-semibold leading-tight text-white">
                    Google Play
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className=" flex justify-center relative items-center h-full w-[calc(100%+3rem)]  lg:w-full lg:mx-0">
          {/* Floating Device Container */}
          <div
            className="relative w-full lg:w-105 aspect-6/8 lg:aspect-4/5 animate-float z-10"
            style={{ animationDuration: "6s" }}
          >
            <div className="absolute inset-0 rounded-none lg:rounded-[2.5rem] bg-linear-to-b from-white/20 to-white/5 p-0 lg:p-1 backdrop-blur-sm shadow-2xl shadow-[#DE2910]/20">
              <div className="relative w-full h-full rounded-none lg:rounded-[2.3rem] overflow-hidden bg-black">
                <Image
                  src="/person_holding_phone.png"
                  alt="OnaAga App Preview"
                  fill
                  className="object-cover scale-[1.02] hover:scale-105 transition-transform duration-700 ease-out"
                  priority
                />
                {/* Screen Glare effect */}
                <div className="absolute inset-0 bg-linear-to-tr from-transparent via-white/10 to-transparent opacity-50 transform -skew-x-12 translate-x-full group-hover:-translate-x-full transition-transform duration-1000"></div>
              </div>
            </div>

            {/* Decorative elements behind phone */}
            <div className="absolute -z-10 top-1/2 right-[-20%] w-32 h-32 bg-[#a8172d] rounded-full mix-blend-screen filter blur-[60px] opacity-30"></div>
          </div>
        </div>
      </div>
      <div className=" lg:hidden flex flex-col items-center lg:items-start gap-4">
        <p className="text-sm text-gray-400 font-medium tracking-wide uppercase">
          Will be available on
        </p>
        <div className="flex flex-col sm:flex-row items-center gap-6 pb-6">
          {/* App Store Badge */}
          <div className="flex items-center gap-3 bg-white/5 hover:bg-white/10 border border-white/10 transition-all cursor-default px-5 py-2.5 rounded-xl backdrop-blur-sm">
            <svg viewBox="0 0 384 512" className="w-7 h-7 fill-white">
              <path d="M318.7 268.7c-.2-36.7 16.4-64.4 50-84.8-18.8-26.9-47.2-41.7-84.7-44.6-35.5-2.8-74.3 20.7-88.5 20.7-15 0-49.4-19.7-76.4-19.7C63.3 141.2 4 184.8 4 273.5q0 39.3 14.4 81.2c12.8 36.7 59 126.7 107.2 125.2 25.2-.6 43-17.9 75.8-17.9 31.8 0 48.3 17.9 76.4 17.9 48.6-.7 90.4-82.5 102.6-119.3-65.2-30.7-61.7-90-61.7-91.9zm-56.6-164.2c27.3-32.4 24.8-61.9 24-72.5-24.1 1.4-52 16.4-67.9 34.9-17.5 19.8-27.8 44.3-25.6 71.9 26.1 2 49.9-11.4 69.5-34.3z" />
            </svg>
            <div className="flex flex-col text-left">
              {/* <span className="text-[10px] leading-tight text-gray-300">
                Download on the
              </span> */}
              <span className="text-base font-semibold leading-tight text-white">
                App Store
              </span>
            </div>
          </div>

          {/* Google Play Badge */}
          <div className="flex items-center gap-3 bg-white/5 hover:bg-white/10 border border-white/10 transition-all cursor-default px-5 py-2.5 rounded-xl backdrop-blur-sm">
            <svg viewBox="0 0 512 512" className="w-7 h-7 fill-white">
              <path d="M325.3 234.3L104.6 13l280.8 161.2-60.1 60.1zM47 0C34 6.8 25.3 19.2 25.3 35.3v441.3c0 16.1 8.7 28.5 21.7 35.3l256.6-256L47 0zm425.2 225.6l-58.9-34.1-65.7 64.5 65.7 64.5 60.1-34.1c18-14.3 18-46.5-1.2-60.8zM104.6 499l280.8-161.2-60.1-60.1L104.6 499z" />
            </svg>
            <div className="flex flex-col text-left">
              {/* <span className="text-[10px] leading-tight text-gray-300">
                GET IT ON
              </span> */}
              <span className="text-base font-semibold leading-tight text-white">
                Google Play
              </span>
            </div>
          </div>
        </div>
      </div>
      {/* Login Modal */}
    </div>
  );
}
