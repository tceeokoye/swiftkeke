"use client";

import { FileText, CreditCard, Camera } from "lucide-react";
import { RegistrationFormData } from "@/types/global";
import FileUploadBox from "./FileUploadBox";

interface Props {
  form: RegistrationFormData;
  set: (key: keyof RegistrationFormData, val: any) => void;
  isSelfieStep?: boolean;
}

export default function StepDocuments({ form, set, isSelfieStep }: Props) {
  const labelClass = "block text-xs font-semibold text-[#888888] uppercase tracking-wide mb-1.5";
  const inputClass = "w-full bg-[#F7F7F7] border border-gray-200 rounded-xl px-4 py-3.5 text-sm text-[#1A1A1A] placeholder-[#A0ADCC] focus:outline-none focus:border-[#DE2910]/50 transition-all";

  if (isSelfieStep) {
    return (
      <div className="space-y-5 animate-fadeInUp">
        <h3 className="text-xl font-bold text-[#1A1A1A] flex items-center gap-2">
          <Camera className="w-5 h-5 text-[#DE2910]" /> Selfie Verification
        </h3>
        <FileUploadBox label="Upload Your Selfie" hint="Clear front-facing photo" file={form.selfie} onFile={(f) => set("selfie", f)} accept=".jpg,.jpeg,.png" icon={Camera} />
      </div>
    );
  }

  return (
    <div className="space-y-5 animate-fadeInUp">
      <h3 className="text-xl font-bold text-[#1A1A1A] flex items-center gap-2">
        <FileText className="w-5 h-5 text-[#DE2910]" /> Identification
      </h3>
      <div>
        <label className={labelClass}>National Identification Number (NIN) *</label>
        <input 
          className={inputClass} 
          placeholder="e.g. 12345678901" 
          maxLength={11}
          value={form.nin || ""} 
          onChange={(e) => set("nin", e.target.value.replace(/\D/g, ""))} 
        />
      </div>
      <FileUploadBox label="Upload NIN Document" hint="Clear photo of your NIN slip" file={form.idFile} onFile={(f) => set("idFile", f)} accept=".pdf,.jpg,.jpeg,.png" icon={CreditCard} />
      <FileUploadBox label="Driver's License" hint="Valid driver's license (Front)" file={form.driversLicense} onFile={(f) => set("driversLicense", f)} accept=".pdf,.jpg,.jpeg,.png" icon={FileText} />
    </div>
  );
}
