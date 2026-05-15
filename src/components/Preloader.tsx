"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";

export default function Preloader() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate loading time or wait for window load
    const timer = setTimeout(() => {
      setLoading(false);
    }, 4000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {loading && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ 
            opacity: 0,
            transition: { duration: 0.8, ease: "easeInOut" }
          }}
          className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-white"
        >
          <div className="flex items-center gap-4">
            {/* Logo Icon Animation */}
            <motion.div
              initial={{ scale: 0.5, opacity: 0, rotate: -20 }}
              animate={{ 
                scale: 1, 
                opacity: 1, 
                rotate: 0,
                transition: { 
                  duration: 0.8, 
                  ease: "easeOut" 
                }
              }}
              className="w-16 h-16 sm:w-20 sm:h-20"
            >
              <svg id="Layer_1" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 315.13 311.59" className="w-full h-full">
                <defs>
                  <style>{`.cls-1{fill:#e53846;}.cls-2{fill:#d7283a;}.cls-3{fill:#e63947;}.cls-4{fill:#1d1d1b;}`}</style>
                </defs>
                <path className="cls-1" d="M337.18,168.94A155.85,155.85,0,0,1,90.79,306.51a22.13,22.13,0,0,1,.11-36.06h0a22.23,22.23,0,0,1,25.86.33,111.42,111.42,0,0,0,77.91,20.16c51.83-5.82,93.29-48.12,98.2-100.05A111.63,111.63,0,0,0,175.72,68.54C120.06,71.48,74.23,116.45,70.38,172.05c-.75,10.95,2.43,26.86,5.32,38.52a22.72,22.72,0,0,1-9.38,24.34h0a22.82,22.82,0,0,1-34.69-13A156,156,0,0,1,192.88,24.6C269.67,29.94,331.88,92.14,337.18,168.94Z" transform="translate(-22.43 -24.21)"/>
                <polygon className="cls-2" points="213.04 98.91 153.47 134.47 117.61 129.59 121.99 88.3 213.04 98.91"/>
                <path className="cls-3" d="M249.62,135.23,239,230.85l-42.34-4.49,4.43-36-70.72,49.88a21.18,21.18,0,0,1-29.49-5.09h0a21.17,21.17,0,0,1,5.48-29.78l69.53-46.73,59.57-35.57,5,.59A10.46,10.46,0,0,1,249.62,135.23Z" transform="translate(-22.43 -24.21)"/>
                <circle className="cls-4" cx="23.58" cy="248.57" r="23.58"/>
              </svg>
            </motion.div>

            {/* Text Animation */}
            <div className="flex overflow-hidden">
              {["n", "a", "a", "g", "a"].map((letter, index) => (
                <motion.span
                  key={index}
                  initial={{ y: 100, opacity: 0 }}
                  animate={{ 
                    y: 0, 
                    opacity: 1,
                    color: ["#1a1a1a", "#e53846", "#1a1a1a"],
                    transition: { 
                      y: { delay: 0.5 + index * 0.1, duration: 0.5, ease: "easeOut" },
                      opacity: { delay: 0.5 + index * 0.1, duration: 0.5 },
                      color: { 
                        delay: 1.5 + index * 0.1, 
                        duration: 3, 
                        repeat: Infinity,
                        repeatType: "mirror"
                      }
                    }
                  }}
                  className="text-4xl sm:text-7xl font-black tracking-tighter"
                  style={{ fontFamily: "'Satoshi', sans-serif" }}
                >
                  {letter}
                </motion.span>
              ))}
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
