"use client";

import { useState, useRef, useEffect } from "react";
import { Check } from "lucide-react";

interface FileUploadBoxProps {
  label: string;
  hint: string;
  file: File | null;
  onFile: (f: File) => void;
  accept: string;
  icon: React.ElementType;
}

export default function FileUploadBox({ label, hint, file, onFile, accept, icon: Icon }: FileUploadBoxProps) {
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
    <div
      onClick={() => ref.current?.click()}
      className={`relative flex flex-col items-center justify-center p-6 rounded-2xl border-2 border-dashed cursor-pointer transition-all duration-200 overflow-hidden ${
        file
          ? "border-green-500/50 bg-green-500/5"
          : "border-gray-200 bg-[#F7F7F7] hover:border-[#DE2910]/40 hover:bg-[#DE2910]/5"
      }`}
    >
      <input ref={ref} type="file" accept={accept} className="hidden" onChange={(e) => e.target.files?.[0] && onFile(e.target.files[0])} />
      {preview ? (
        <>
          <div className="absolute inset-0 w-full h-full opacity-10 bg-cover bg-center" style={{ backgroundImage: `url(${preview})` }} />
          <div className="relative z-10 w-16 h-16 rounded-xl border-2 border-green-500 overflow-hidden shadow-md mb-3 bg-white flex items-center justify-center">
             <img src={preview} alt="preview" className="w-full h-full object-cover" />
          </div>
          <span className="relative z-10 text-sm font-semibold text-green-700 bg-white/60 px-2 py-0.5 rounded">{file?.name}</span>
          <span className="relative z-10 text-xs text-gray-700 font-medium mt-1">Click to change</span>
        </>
      ) : file ? (
        <>
          <div className="w-12 h-12 bg-green-500/20 rounded-full flex items-center justify-center mb-3 relative z-10">
            <Check className="w-6 h-6 text-green-500" />
          </div>
          <span className="text-sm font-semibold text-green-600 relative z-10">{file?.name}</span>
          <span className="text-xs text-gray-600 mt-1 relative z-10">Click to change</span>
        </>
      ) : (
        <>
          <div className="w-12 h-12 bg-[#DE2910]/15 border border-[#DE2910]/30 rounded-full flex items-center justify-center mb-3">
            <Icon className="w-6 h-6 text-[#DE2910]" />
          </div>
          <span className="text-sm font-semibold text-[#1A1A1A] text-center">{label}</span>
          <span className="text-xs text-gray-600 mt-1 text-center">{hint}</span>
        </>
      )}
    </div>
  );
}
