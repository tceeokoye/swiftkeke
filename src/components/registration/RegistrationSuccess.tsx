"use client";

import { X } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
import { useRouter } from "next/navigation";

interface Props {
  firstName: string;
  email: string;
  accountType: string | null;
  onReset: () => void;
}

const AnimatedCheckIcon = () => (
  <motion.svg
    xmlns="http://www.w3.org/2000/svg"
    width="48"
    height="48"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="text-[#22c55e]"
  >
    <motion.circle
      cx="12"
      cy="12"
      r="10"
      initial={{ pathLength: 0, opacity: 0 }}
      animate={{ pathLength: 1, opacity: 1 }}
      transition={{ duration: 0.8, ease: "easeInOut" }}
    />
    <motion.path
      d="M8 12l3 3 5-6"
      initial={{ pathLength: 0, opacity: 0 }}
      animate={{ pathLength: 1, opacity: 1 }}
      transition={{ duration: 0.5, ease: "easeInOut", delay: 0.8 }}
    />
  </motion.svg>
);

export default function RegistrationSuccess({ firstName, email, accountType, onReset }: Props) {
  const router = useRouter();
  
  const title = accountType === "driver" ? "Application Submitted!" : "You're on the Waitlist!";
  const description = accountType === "driver" 
    ? `Thank you, ${firstName}! Your driver application is under review. We'll contact you at ${email}.`
    : `Awesome, ${firstName}! We've added you to our exclusive waitlist. We'll notify you as soon as OnaAga launches in your area.`;

  const handleClose = () => {
    onReset();
    router.push("/");
  };

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={handleClose}
          className="fixed inset-0 bg-black/40 backdrop-blur-sm"
        />

        {/* Modal */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          className="w-full max-w-md bg-white rounded-3xl shadow-2xl z-10 relative overflow-hidden"
        >
          <div className="relative p-6 sm:p-8">
            <button
              type="button"
              onClick={handleClose}
              className="absolute top-4 right-4 p-2 text-gray-400 hover:text-gray-600 hover:bg-gray-100 rounded-full transition-colors"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="flex flex-col items-center text-center mt-4">
              <div className="w-24 h-24 rounded-full bg-green-50 flex items-center justify-center mb-6">
                <AnimatedCheckIcon />
              </div>

              <h3 className="text-2xl font-bold text-gray-900 mb-3">
                {title}
              </h3>

              <p className="text-gray-500 mb-8 leading-relaxed">
                {description}
              </p>

              <button
                type="button"
                onClick={handleClose}
                className="w-full py-3.5 px-4 rounded-xl font-semibold text-white bg-black hover:bg-gray-800 shadow-[0_4px_14px_0_rgba(0,0,0,0.39)] transition-all active:scale-[0.98]"
              >
                Back to Home
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
