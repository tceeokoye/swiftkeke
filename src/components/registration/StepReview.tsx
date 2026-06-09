"use client";

import Image from "next/image";
import Link from "next/link";
import { Check, FileText } from "lucide-react";
import { RegistrationFormData } from "@/types/global";

interface Props {
  form: RegistrationFormData;
  set?: (key: keyof RegistrationFormData, val: RegistrationFormData[keyof RegistrationFormData]) => void;
  isPassenger?: boolean;
}

export default function StepReview({ form, set, isPassenger }: Props) {
  if (isPassenger) {
    return (
      <div className="space-y-5 animate-fadeInUp">
        <h3 className="text-xl font-bold text-[#1A1A1A] flex items-center gap-2">
          <Check className="w-5 h-5 text-[#DE2910]" /> Final Review
        </h3>
        <p className="text-sm text-gray-500 mb-4">Please confirm your details before joining the waitlist.</p>
        <div className="bg-[#F7F7F7] p-5 rounded-2xl space-y-3">
          <div className="flex justify-between items-center border-b border-gray-100 pb-2">
            <span className="text-xs text-gray-500">Name</span>
            <span className="text-sm font-bold text-[#1A1A1A]">{form.firstName || form.lastName ? `${form.firstName} ${form.lastName}` : <span className="text-red-400 italic font-normal text-xs">Missing Data</span>}</span>
          </div>
          <div className="flex justify-between items-center border-b border-gray-100 pb-2">
            <span className="text-xs text-gray-500">Email</span>
            <span className="text-sm font-bold text-[#1A1A1A]">{form.email || <span className="text-red-400 italic font-normal text-xs">Missing Data</span>}</span>
          </div>
          <div className="flex justify-between items-center">
            <span className="text-xs text-gray-500">Phone</span>
            <span className="text-sm font-bold text-[#1A1A1A]">{form.phone || <span className="text-red-400 italic font-normal text-xs">Missing Data</span>}</span>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="space-y-5 animate-fadeInUp">
      <h3 className="text-xl font-bold text-[#1A1A1A] flex items-center gap-2">
        <Check className="w-5 h-5 text-[#DE2910]" /> Review Application
      </h3>
      <div className="space-y-6">
        <div className="bg-white rounded-2xl border border-gray-100 p-5 shadow-sm space-y-2">
          <h4 className="text-sm font-bold text-[#1A1A1A] border-b border-gray-100 pb-2 mb-3">Personal & Contact</h4>
          {[
            { l: "Full Name", v: `${form.firstName} ${form.lastName}` },
            { l: "Email", v: form.email },
            { l: "Phone", v: form.phone },
            { l: "Address", v: `${form.address}, ${form.city}, ${form.state}` },
          ].map(({ l, v }) => (
            <div key={l} className="flex justify-between py-1 items-center border-b border-gray-50 last:border-0">
              <span className="text-xs text-gray-500">{l}</span>
              <span className="text-sm font-bold text-[#1A1A1A] text-right">{v.trim() === ',' || v.trim() === '' || v.trim() === '-' ? <span className="text-red-400 italic font-normal text-xs">Missing Data</span> : v}</span>
            </div>
          ))}
        </div>

        <div className="bg-white rounded-2xl border border-gray-100 p-5 shadow-sm space-y-2">
          <h4 className="text-sm font-bold text-[#1A1A1A] border-b border-gray-100 pb-2 mb-3">Vehicle Details</h4>
          {[
            { l: "Category", v: form.vehicleCategory },
            { l: "Make & Model", v: `${form.vehicleMake} ${form.vehicleModel}` },
            { l: "Year & Color", v: `${form.vehicleYear} - ${form.vehicleColor}` },
            { l: "Plate Number", v: form.vehiclePlate },
          ].map(({ l, v }) => (
            <div key={l} className="flex justify-between py-1 items-center border-b border-gray-50 last:border-0">
              <span className="text-xs text-gray-500">{l}</span>
              <span className="text-sm font-bold text-[#1A1A1A] text-right">{v.trim() === '-' || v.trim() === '' ? <span className="text-red-400 italic font-normal text-xs">Missing Data</span> : v}</span>
            </div>
          ))}
        </div>

        <div className="bg-white rounded-2xl border border-gray-100 p-5 shadow-sm">
          <h4 className="text-sm font-bold text-[#1A1A1A] border-b border-gray-100 pb-2 mb-4">Documents & Photos</h4>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
            {[
              { label: "ID Document", file: form.idFile },
              { label: "License", file: form.driversLicense },
              { label: "Proof of Address", file: form.proofOfAddress },
              { label: "Vehicle Front", file: form.frontPhoto },
              { label: "Vehicle Back", file: form.backPhoto },
              { label: "Vehicle Side", file: form.sidePhoto },
              { label: "Selfie", file: form.selfie },
            ].map(({ label, file }) => (
              <div key={label} className="flex flex-col gap-1 items-center bg-[#F7F7F7] p-2 rounded-xl">
                {file?.type.startsWith("image/") ? (
                   <div className="w-full aspect-square rounded-lg overflow-hidden bg-white border border-gray-200 relative">
                     <Image src={URL.createObjectURL(file)} alt={label} width={300} height={300} unoptimized className="w-full h-full object-cover" />
                   </div>
                ) : file ? (
                   <div className="w-full aspect-square rounded-lg bg-gray-100 border border-gray-200 flex items-center justify-center">
                     <FileText className="w-8 h-8 text-gray-400" />
                   </div>
                ) : null}
                <span className="text-[10px] font-bold text-gray-600 text-center mt-1">{label}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="rounded-2xl border border-[#DE2910]/20 bg-[#FFF7F4] p-4">
          <div className="flex items-start gap-3">
            <input
              type="checkbox"
              checked={Boolean(form.termsAccepted)}
              onChange={(e) => set?.("termsAccepted", e.target.checked)}
              className="mt-1 h-4 w-4 rounded border-gray-300 text-[#DE2910] focus:ring-[#DE2910]"
            />
            <div>
              <p className="text-sm font-bold text-[#1A1A1A]">I agree to the OnaAga Terms of Service and driver compliance policy</p>
              <p className="mt-1 text-xs text-[#555555] leading-relaxed">
                Your application will only be reviewed after you accept the platform terms, safety expectations, and operating policies. You can review them at <Link href="/terms" className="font-bold text-[#DE2910] underline">Terms & Conditions</Link>.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
