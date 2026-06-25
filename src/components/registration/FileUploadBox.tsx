"use client";

import { useState, useRef, useEffect } from "react";
import { Check, Paperclip } from "lucide-react";

interface FileUploadBoxProps {
  label: string;
  hint: string;
  file: File | null;
  onFile: (f: File) => void;
  accept: string;
  icon?: React.ElementType; // Keep it optional just in case, though we won't strictly need it for the new design
}

export default function FileUploadBox({
  label,
  hint,
  file,
  onFile,
  accept,
}: FileUploadBoxProps) {
  const ref = useRef<HTMLInputElement>(null);
  const [preview, setPreview] = useState<string | null>(null);

  useEffect(() => {
    if (!file) {
      setPreview(null);
      return;
    }
    if (file.type.startsWith("image/")) {
      const objectUrl = URL.createObjectURL(file);
      setPreview(objectUrl);
      return () => URL.revokeObjectURL(objectUrl);
    } else {
      setPreview(null);
    }
  }, [file]);

  return (
    <div className="w-full min-w-0">
      {label && (
        <label className="block text-[13px] text-[#555555] mb-2">
          {label}
        </label>
      )}
      <div
        onClick={() => ref.current?.click()}
        className={`relative flex items-center justify-between w-full min-w-0 bg-white border rounded-xl px-4 py-3.5 cursor-pointer transition-all ${
          file
            ? "border-green-500 bg-green-50/30"
            : "border-gray-200 hover:border-[#DE2910]/40"
        }`}
      >
        <input
          ref={ref}
          type="file"
          accept={accept}
          className="hidden"
          onChange={(e) => e.target.files?.[0] && onFile(e.target.files[0])}
        />
        
        <span className={`flex-1 min-w-0 text-[15px] truncate mr-4 ${file ? "text-[#1A1A1A] font-medium" : "text-gray-400"}`}>
          {file ? file.name : (hint ? hint : "upload as jpeg, jpg, png, pdf")}
        </span>
        
        {file ? (
          <Check className="w-5 h-5 text-green-500 shrink-0" />
        ) : (
          <Paperclip className="w-5 h-5 text-gray-600 shrink-0" />
        )}
      </div>
    </div>
  );
}
