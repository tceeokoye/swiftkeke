"use client";

import { XCircle, CheckCircle } from "lucide-react";
import React, { useEffect } from "react";

type ConfirmModalProps = {
  isOpen: boolean;
  title: string;
  message: string;
  confirmText?: string;
  cancelText?: string;
  onConfirm: () => void;
  onCancel: () => void;
  /** Color theme: 'danger' (red), 'warning' (orange), 'success' (green) */
  variant?: "danger" | "warning" | "success";
};

export default function ConfirmModal({
  isOpen,
  title,
  message,
  confirmText = "Confirm",
  cancelText = "Cancel",
  onConfirm,
  onCancel,
  variant = "danger",
}: ConfirmModalProps) {
  // Close on Escape key
  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === "Escape") onCancel();
    };
    if (isOpen) window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [isOpen, onCancel]);

  if (!isOpen) return null;

  const colors = {
    danger: {
      bg: "bg-red-50",
      border: "border-red-100",
      text: "text-red-600",
      Icon: XCircle,
    },
    warning: {
      bg: "bg-orange-50",
      border: "border-orange-100",
      text: "text-orange-600",
      Icon: XCircle,
    },
    success: {
      bg: "bg-green-50",
      border: "border-green-100",
      text: "text-green-600",
      Icon: CheckCircle,
    },
  }[variant];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/30 backdrop-blur-sm">
      <div className={`w-full max-w-md mx-4 p-6 rounded-2xl shadow-xl border ${colors.border} ${colors.bg}`}> 
        <div className="flex items-start gap-4">
          <div className={`flex-shrink-0 p-2 rounded-full ${colors.border}`}>
            <colors.Icon className={`w-6 h-6 ${colors.text}`} />
          </div>
          <div className="flex-1">
            <h3 className="text-lg font-bold text-gray-800 mb-2">{title}</h3>
            <p className="text-sm text-gray-600 mb-4">{message}</p>
            <div className="flex justify-end gap-3">
              <button
                onClick={onCancel}
                className="px-4 py-2 text-sm font-medium text-gray-600 bg-gray-100 rounded-xl hover:bg-gray-200 transition"
              >
                {cancelText}
              </button>
              <button
                onClick={onConfirm}
                className={`px-4 py-2 text-sm font-bold rounded-xl ${colors.text} bg-white border ${colors.border} hover:${colors.text.replace("text-", "bg-")} transition`}
              >
                {confirmText}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
