"use client";

import { X, CheckCircle, XCircle, AlertTriangle } from "lucide-react";
import { useEffect, useState } from "react";

type ToastType = "success" | "error" | "warning";

type ToastProps = {
  message: string;
  type: ToastType;
  onClose: () => void;
};

function Toast({ message, type, onClose }: ToastProps) {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Trigger animation
    setIsVisible(true);
    // Auto-dismiss after 3 seconds
    const timer = setTimeout(() => {
      setIsVisible(false);
      setTimeout(onClose, 300); // Wait for animation
    }, 3000);

    return () => clearTimeout(timer);
  }, [onClose]);

  const colors = {
    success: {
      bg: "bg-green-50",
      border: "border-green-200",
      text: "text-green-800",
      icon: CheckCircle,
      iconColor: "text-green-600",
    },
    error: {
      bg: "bg-red-50",
      border: "border-red-200",
      text: "text-red-800",
      icon: XCircle,
      iconColor: "text-red-600",
    },
    warning: {
      bg: "bg-orange-50",
      border: "border-orange-200",
      text: "text-orange-800",
      icon: AlertTriangle,
      iconColor: "text-orange-600",
    },
  }[type];

  const Icon = colors.icon;

  return (
    <div
      className={`fixed top-4 right-4 z-50 max-w-sm w-full transform transition-all duration-300 ${
        isVisible ? "translate-x-0 opacity-100" : "translate-x-full opacity-0"
      }`}
    >
      <div className={`p-4 rounded-xl shadow-lg border ${colors.bg} ${colors.border}`}>
        <div className="flex items-start gap-3">
          <Icon className={`w-5 h-5 ${colors.iconColor} flex-shrink-0 mt-0.5`} />
          <p className={`text-sm font-medium ${colors.text} flex-1`}>{message}</p>
          <button
            onClick={() => {
              setIsVisible(false);
              setTimeout(onClose, 300);
            }}
            className={`p-1 rounded-lg hover:bg-black/5 transition-colors ${colors.text}`}
          >
            <X className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
}

type ToastContainerProps = {
  toasts: Array<{ id: string; message: string; type: ToastType }>;
  onRemove: (id: string) => void;
};

export function ToastContainer({ toasts, onRemove }: ToastContainerProps) {
  return (
    <>
      {toasts.map((toast) => (
        <Toast
          key={toast.id}
          message={toast.message}
          type={toast.type}
          onClose={() => onRemove(toast.id)}
        />
      ))}
    </>
  );
}

export default Toast;
