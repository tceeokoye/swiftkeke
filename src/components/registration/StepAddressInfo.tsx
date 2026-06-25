"use client";

import { MapPin, Upload } from "lucide-react";
import { RegistrationFormData } from "@/types/global";
import FileUploadBox from "./FileUploadBox";
import ModalSelect from "../ModalSelect";

interface Props {
  form: RegistrationFormData;
  set: (key: keyof RegistrationFormData, val: any) => void;
}

const NIGERIAN_STATES = [
  "Abia",
  "Adamawa",
  "Akwa Ibom",
  "Anambra",
  "Bauchi",
  "Bayelsa",
  "Benue",
  "Borno",
  "Cross River",
  "Delta",
  "Ebonyi",
  "Edo",
  "Ekiti",
  "Enugu",
  "FCT - Abuja",
  "Gombe",
  "Imo",
  "Jigawa",
  "Kaduna",
  "Kano",
  "Katsina",
  "Kebbi",
  "Kogi",
  "Kwara",
  "Lagos",
  "Nasarawa",
  "Niger",
  "Ogun",
  "Ondo",
  "Osun",
  "Oyo",
  "Plateau",
  "Rivers",
  "Sokoto",
  "Taraba",
  "Yobe",
  "Zamfara",
];

export default function StepAddressInfo({ form, set }: Props) {
  const labelClass = "block text-[13px] font-bold text-[#1A1A1A] mb-2";
  const inputClass =
    "w-full bg-gray-50/50 border border-gray-200 rounded-xl px-4 py-3.5 text-[15px] text-[#1A1A1A] placeholder-gray-400 focus:outline-none focus:border-[#DE2910] focus:ring-1 focus:ring-[#DE2910] focus:bg-white transition-all";

  return (
    <div className="space-y-5 animate-fadeInUp">
      <h3 className="text-xl font-bold text-[#1A1A1A] flex items-center gap-2">
        <MapPin className="w-5 h-5 text-[#DE2910]" /> Address & Proof
      </h3>
      <div className="grid sm:grid-cols-2 items-center gap-4">
        <div className="z-20">
          <ModalSelect
            label="State *"
            placeholder="Select State"
            value={form.state || ""}
            onChange={(val) => set("state", val)}
            options={NIGERIAN_STATES}
          />
        </div>

        <div>
          <label className={labelClass}>City *</label>
          <input
            className={inputClass}
            placeholder="e.g. Ikeja"
            value={form.city || ""}
            onChange={(e) => set("city", e.target.value)}
          />
        </div>
      </div>

      <div className="grid sm:grid-cols-2 items-center gap-4">
        <div>
          <label className={labelClass}>Street Address *</label>
          <input
            className={inputClass}
            placeholder="e.g. 15 Adeola Crescent, Ikeja"
            value={form.address || ""}
            onChange={(e) => set("address", e.target.value)}
          />
        </div>
        <FileUploadBox
          label="Upload Proof of Address"
          hint="Utility bill or bank statement"
          file={form.proofOfAddress}
          onFile={(f) => set("proofOfAddress", f)}
          accept=".pdf,.jpg,.jpeg,.png"
          icon={Upload}
        />
      </div>
    </div>
  );
}
