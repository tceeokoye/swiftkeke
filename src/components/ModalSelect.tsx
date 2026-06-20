"use client";

import { useState } from "react";
import { ChevronDown, X, Check, Search } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";

export interface ModalSelectOption {
  label: string;
  value: string;
}

interface ModalSelectProps {
  value: string;
  onChange: (value: string) => void;
  options: string[] | ModalSelectOption[];
  placeholder?: string;
  label?: string;
}

export default function ModalSelect({
  value,
  onChange,
  options,
  placeholder = "Select an option",
  label,
}: ModalSelectProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [search, setSearch] = useState("");

  const normalizedOptions: ModalSelectOption[] = options.map((opt) =>
    typeof opt === "string" ? { label: opt, value: opt } : opt
  );

  const filteredOptions = normalizedOptions.filter((option) =>
    option.label.toLowerCase().includes(search.toLowerCase())
  );

  const displayValue =
    normalizedOptions.find((opt) => opt.value === value)?.label || value;

  return (
    <div className="relative w-full">
      <div>
        {label && (
          <label className="block text-xs font-semibold text-[#888888] uppercase tracking-wide mb-1.5">
            {label}
          </label>
        )}
        <button
          type="button"
          onClick={() => setIsOpen(true)}
          className="w-full bg-[#F7F7F7] border border-gray-200 rounded-xl px-4 py-3.5 text-sm text-left flex items-center justify-between transition-all hover:border-[#DE2910]/50 focus:outline-none focus:border-[#DE2910]/50"
        >
          <span className={displayValue ? "text-[#1A1A1A]" : "text-[#A0ADCC]"}>
            {displayValue || placeholder}
          </span>
          <ChevronDown className="w-4 h-4 text-[#888888]" />
        </button>
      </div>

      <AnimatePresence>
        {isOpen && (
          <>
            <div
              className="fixed inset-0 z-40"
              onClick={() => setIsOpen(false)}
            />
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              className="absolute left-0 right-0 top-full mt-2 z-50 bg-white rounded-2xl max-h-80 flex flex-col overflow-hidden shadow-[0_10px_40px_-10px_rgba(0,0,0,0.1)] border border-gray-100"
            >
              <div className="p-3 border-b border-gray-100 shrink-0 flex items-center justify-between">
                <div className="relative w-full">
                  <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                  <input
                    type="text"
                    placeholder="Search..."
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                    className="w-full bg-gray-50 border border-gray-200 rounded-xl pl-10 pr-4 py-2.5 text-sm focus:outline-none focus:border-[#DE2910]/50 transition-colors"
                  />
                </div>
              </div>

              <div className="overflow-y-auto flex-1 p-2">
                {filteredOptions.length === 0 ? (
                  <div className="p-4 text-center text-gray-500 text-sm">
                    No options found
                  </div>
                ) : (
                  filteredOptions.map((option) => (
                    <button
                      key={option.value}
                      type="button"
                      onClick={() => {
                        onChange(option.value);
                        setIsOpen(false);
                      }}
                      className="w-full flex items-center justify-between p-3 rounded-xl hover:bg-gray-50 transition-colors text-left"
                    >
                      <span
                        className={`text-sm ${
                          value === option.value
                            ? "font-semibold text-[#DE2910]"
                            : "text-[#1A1A1A]"
                        }`}
                      >
                        {option.label}
                      </span>
                      {value === option.value && (
                        <Check className="w-4 h-4 text-[#DE2910]" />
                      )}
                    </button>
                  ))
                )}
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </div>
  );
}
