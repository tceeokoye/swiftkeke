"use client";

import { X } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";

export type AccountStatus = "pending" | "suspended";

interface AccountStatusModalProps {
  isOpen: boolean;
  onClose: () => void;
  status: AccountStatus;
}

const AnimatedClockIcon = () => (
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
    className="text-[#EAB308]"
  >
    <motion.circle
      cx="12"
      cy="12"
      r="10"
      initial={{ pathLength: 0, opacity: 0 }}
      animate={{ pathLength: 1, opacity: 1 }}
      transition={{ duration: 0.8, ease: "easeInOut" }}
    />
    <motion.polyline
      points="12 6 12 12 16 14"
      initial={{ pathLength: 0, opacity: 0 }}
      animate={{ pathLength: 1, opacity: 1 }}
      transition={{ duration: 0.5, ease: "easeInOut", delay: 0.8 }}
    />
  </motion.svg>
);

const AnimatedAlertIcon = () => (
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
    className="text-[#DE2910]"
  >
    <motion.path
      d="m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3Z"
      initial={{ pathLength: 0, opacity: 0 }}
      animate={{ pathLength: 1, opacity: 1 }}
      transition={{ duration: 0.8, ease: "easeInOut" }}
    />
    <motion.line
      x1="12"
      y1="9"
      x2="12"
      y2="13"
      initial={{ pathLength: 0, opacity: 0 }}
      animate={{ pathLength: 1, opacity: 1 }}
      transition={{ duration: 0.3, ease: "easeInOut", delay: 0.8 }}
    />
    <motion.line
      x1="12"
      y1="17"
      x2="12.01"
      y2="17"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.2, ease: "easeInOut", delay: 1.1 }}
    />
  </motion.svg>
);

export default function AccountStatusModal({
  isOpen,
  onClose,
  status,
}: AccountStatusModalProps) {
  const content = {
    pending: {
      icon: <AnimatedClockIcon />,
      title: "Account Pending Review",
      description:
        "Your account is currently under review by our team. We'll notify you via email as soon as the review process is complete and your account is activated.",
      buttonText: "Got it",
      iconBg: "bg-yellow-50",
    },
    suspended: {
      icon: <AnimatedAlertIcon />,
      title: "Account Suspended",
      description:
        "Your account has been suspended. Please contact our support team for more information regarding your account status.",
      buttonText: "Contact Support",
      iconBg: "bg-red-50",
    },
  };

  const currentContent = content[status];

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.button
          type="button"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 z-50 bg-black/40 backdrop-blur-sm"
          />

          {/* Modal */}
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 pointer-events-none">
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              className="w-full max-w-md bg-white rounded-3xl shadow-2xl pointer-events-auto overflow-hidden"
            >
              <div className="relative p-6 sm:p-8">
                <button
                type="button"
                  onClick={onClose}
                  className="absolute top-4 right-4 p-2 text-gray-400 hover:text-gray-600 hover:bg-gray-100 rounded-full transition-colors"
                >
                  <X className="w-5 h-5" />
                </button>

                <div className="flex flex-col items-center text-center mt-4">
                  <div
                    className={`w-24 h-24 rounded-full ${currentContent.iconBg} flex items-center justify-center mb-6`}
                  >
                    {currentContent.icon}
                  </div>

                  <h3 className="text-2xl font-bold text-gray-900 mb-3">
                    {currentContent.title}
                  </h3>

                  <p className="text-gray-500 mb-8 leading-relaxed">
                    {currentContent.description}
                  </p>

                  <button
                  type="button"
                    onClick={onClose}
                    className={`w-full py-3.5 px-4 rounded-xl font-semibold text-white transition-all active:scale-[0.98] ${
                      status === "suspended"
                        ? "bg-[#DE2910] hover:bg-[#c4240e] shadow-[0_4px_14px_0_rgba(222,41,16,0.39)]"
                        : "bg-black hover:bg-gray-800 shadow-[0_4px_14px_0_rgba(0,0,0,0.39)]"
                    }`}
                  >
                    {currentContent.buttonText}
                  </button>
                </div>
              </div>
            </motion.div>
          </div>
        </>
      )}
    </AnimatePresence>
  );
}
