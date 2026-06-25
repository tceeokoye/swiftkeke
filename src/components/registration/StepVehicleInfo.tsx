"use client";

import { Car } from "lucide-react";
import { RegistrationFormData } from "@/types/global";
import FileUploadBox from "./FileUploadBox";
import ModalSelect from "../ModalSelect";

interface Props {
  form: RegistrationFormData;
  set: (key: keyof RegistrationFormData, val: any) => void;
}

const VEHICLE_CATEGORIES = [
  { label: "Tricycle (Keke)", value: "Tricycle" },
  { label: "Motorcycle (Okada)", value: "Motorcycle" },
  { label: "Car", value: "Car" },
];

export default function StepVehicleInfo({ form, set }: Props) {
  const labelClass = "block text-[13px] font-bold text-[#1A1A1A] mb-2";
  const inputClass =
    "w-full bg-gray-50/50 border border-gray-200 rounded-xl px-4 py-3.5 text-[15px] text-[#1A1A1A] placeholder-gray-400 focus:outline-none focus:border-[#DE2910] focus:ring-1 focus:ring-[#DE2910] focus:bg-white transition-all";

  return (
    <div className="space-y-5 animate-fadeInUp">
      <h3 className="text-xl font-bold text-[#1A1A1A] flex items-center gap-2">
        <Car className="w-5 h-5 text-[#DE2910]" /> Vehicle Information
      </h3>
      <div className="grid sm:grid-cols-2 gap-4">
        <div className="z-20">
          <ModalSelect
            label="Vehicle Category *"
            placeholder="Select Category"
            value={form.vehicleCategory || "Tricycle"}
            onChange={(val) => set("vehicleCategory", val)}
            options={VEHICLE_CATEGORIES}
          />
        </div>
        <div>
          <label className={labelClass}>Vehicle Make *</label>
          <input
            className={inputClass}
            placeholder="e.g. TVS"
            value={form.vehicleMake || ""}
            onChange={(e) => set("vehicleMake", e.target.value)}
          />
        </div>
        <div>
          <label className={labelClass}>Vehicle Model *</label>
          <input
            className={inputClass}
            placeholder="e.g. King Deluxe"
            value={form.vehicleModel || ""}
            onChange={(e) => set("vehicleModel", e.target.value)}
          />
        </div>
        <div>
          <label className={labelClass}>Year *</label>
          <input
            className={inputClass}
            placeholder="e.g. 2024"
            value={form.vehicleYear || ""}
            onChange={(e) => set("vehicleYear", e.target.value)}
          />
        </div>
       
        {/* <div>
          <label className={labelClass}>Color *</label>
          <input className={inputClass} placeholder="e.g. Yellow" value={form.vehicleColor || ""} onChange={(e) => set("vehicleColor", e.target.value)} />
        </div>
        <div>
          <label className={labelClass}>Plate Number *</label>
          <input className={inputClass} placeholder="e.g. ABC-123-XY" value={form.vehiclePlate || ""} onChange={(e) => set("vehiclePlate", e.target.value)} />
        </div> */}
      </div>
      {/* <div className="pt-4 border-t border-gray-100 mt-2">
        <h4 className="text-sm font-bold text-[#1A1A1A] mb-4">Vehicle Photos</h4>
        <div className="grid sm:grid-cols-3 gap-4">
          <FileUploadBox label="Front Photo" hint="Include headlights" file={form.frontPhoto} onFile={(f) => set("frontPhoto", f)} accept=".jpg,.jpeg,.png" icon={Car} />
          <FileUploadBox label="Back Photo" hint="Include plate number" file={form.backPhoto} onFile={(f) => set("backPhoto", f)} accept=".jpg,.jpeg,.png" icon={Car} />
          <FileUploadBox label="Side Photo" hint="Full side profile" file={form.sidePhoto} onFile={(f) => set("sidePhoto", f)} accept=".jpg,.jpeg,.png" icon={Car} />
        </div>
      </div> */}
    </div>
  );
}
