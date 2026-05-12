"use client";

import { useState, useRef, useEffect } from "react";
import Image from "next/image";
import {
  User, Mail, Phone, MapPin, Camera, FileText, CreditCard,
  ChevronRight, ChevronLeft, Check, Upload, AlertCircle, Loader2, Zap, Car, Lock, ShieldCheck, UserPlus
} from "lucide-react";

const RIDER_STEPS = [
  { label: "Verification", icon: ShieldCheck },
  { label: "Role", icon: UserPlus },
  { label: "Personal", icon: User },
  { label: "Contact", icon: Phone },
  { label: "Vehicle", icon: Car },
  { label: "Address", icon: MapPin },
  { label: "Documents", icon: FileText },
  { label: "Selfie", icon: Camera },
  { label: "Review", icon: Check },
];

const PASSENGER_STEPS = [
  { label: "Verification", icon: ShieldCheck },
  { label: "Role", icon: UserPlus },
  { label: "Waitlist", icon: Phone },
  { label: "Success", icon: Check },
];

type AccountType = "rider" | "passenger" | null;

type FormData = {
  accountType: AccountType;
  email: string;
  otp: string;
  firstName: string; lastName: string; middleName: string;
  phone: string; password: ""; confirmPassword: "";
  vehicleMake: string; vehicleModel: string; vehicleYear: string; vehicleColor: string; vehiclePlate: string; vehicleCategory: string;
  address: string; city: string; state: string; proofOfAddress: File | null;
  idType: string; idFile: File | null; driversLicense: File | null;
  frontPhoto: File | null; backPhoto: File | null; sidePhoto: File | null;
  selfie: File | null;
};

const initialForm: FormData = {
  accountType: null,
  email: "",
  otp: "",
  firstName: "", lastName: "", middleName: "",
  phone: "", password: "", confirmPassword: "",
  vehicleMake: "", vehicleModel: "", vehicleYear: "", vehicleColor: "", vehiclePlate: "", vehicleCategory: "Tricycle",
  address: "", city: "", state: "", proofOfAddress: null,
  idType: "nin", idFile: null, driversLicense: null,
  frontPhoto: null, backPhoto: null, sidePhoto: null,
  selfie: null,
};

function FileUploadBox({ label, hint, file, onFile, accept, icon: Icon }: {
  label: string; hint: string; file: File | null;
  onFile: (f: File) => void; accept: string; icon: React.ElementType;
}) {
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
          : "border-gray-200 bg-[#F7F7F7] hover:border-[#D21F3C]/40 hover:bg-[#D21F3C]/5"
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
          <div className="w-12 h-12 bg-[#D21F3C]/15 border border-[#D21F3C]/30 rounded-full flex items-center justify-center mb-3">
            <Icon className="w-6 h-6 text-[#D21F3C]" />
          </div>
          <span className="text-sm font-semibold text-[#1A1A1A] text-center">{label}</span>
          <span className="text-xs text-gray-600 mt-1 text-center">{hint}</span>
        </>
      )}
    </div>
  );
}

export default function RegistrationForm() {
  const [step, setStep] = useState(0);
  const [form, setForm] = useState<FormData>(initialForm);
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState<string[]>([]);
  const [otpSent, setOtpSent] = useState(false);
  const [isVerifying, setIsVerifying] = useState(false);

  const set = (key: keyof FormData, val: any) =>
    setForm((p) => ({ ...p, [key]: val }));

  const validateStep = (): string[] => {
    const e: string[] = [];
    
    // Step 0: Email Input
    if (step === 0) {
      if (!form.email.trim() || !form.email.includes("@")) e.push("Valid email is required");
    } 
    // Step 1: OTP
    else if (step === 1) {
      if (form.otp.length < 4) e.push("Enter the 6-digit code sent to your email");
    }
    // Step 2: Role Selection
    else if (step === 2) {
      if (!form.accountType) e.push("Please select an account type");
    }
    // Step 3+: Branching
    else if (form.accountType === "rider") {
      if (step === 3) {
        if (!form.firstName.trim()) e.push("First name is required");
        if (!form.lastName.trim()) e.push("Last name is required");
      } else if (step === 4) {
        if (!form.phone.trim() || form.phone.length < 10) e.push("Valid phone number is required");
        if (!form.password.trim() || form.password.length < 6) e.push("Password must be at least 6 characters");
        if (form.password !== form.confirmPassword) e.push("Passwords do not match");
      } else if (step === 5) {
        if (!form.vehicleMake.trim()) e.push("Vehicle make is required");
        if (!form.vehicleModel.trim()) e.push("Vehicle model is required");
        if (!form.vehicleYear.trim()) e.push("Vehicle year is required");
        if (!form.vehicleColor.trim()) e.push("Vehicle color is required");
        if (!form.vehiclePlate.trim()) e.push("Plate number is required");
        if (!form.frontPhoto) e.push("Front photo of vehicle is required");
        if (!form.backPhoto) e.push("Back photo of vehicle is required");
        if (!form.sidePhoto) e.push("Side photo of vehicle is required");
      } else if (step === 6) {
        if (!form.address.trim()) e.push("Address is required");
        if (!form.city.trim()) e.push("City is required");
        if (!form.state.trim()) e.push("State is required");
        if (!form.proofOfAddress) e.push("Proof of address is required");
      } else if (step === 7) {
        if (!form.idFile) e.push("Means of identification is required");
        if (!form.driversLicense) e.push("Driver's license is required");
      } else if (step === 8) {
        if (!form.selfie) e.push("Selfie photo is required");
      }
    } else if (form.accountType === "passenger") {
      if (step === 3) {
        if (!form.firstName.trim()) e.push("First name is required");
        if (!form.lastName.trim()) e.push("Last name is required");
        if (!form.phone.trim() || form.phone.length < 10) e.push("Valid phone number is required");
      }
    }
    
    return e;
  };

  const next = () => {
    const e = validateStep();
    if (e.length) { setErrors(e); return; }
    setErrors([]);

    if (step === 0 && !otpSent) {
      setIsVerifying(true);
      setTimeout(() => {
        setIsVerifying(false);
        setOtpSent(true);
        setStep(1);
      }, 1500);
      return;
    }

    if (step === 1) {
      setIsVerifying(true);
      setTimeout(() => {
        setIsVerifying(false);
        setStep(2);
      }, 1000);
      return;
    }

    const maxStep = form.accountType === "rider" ? 9 : (form.accountType === "passenger" ? 4 : 2);
    setStep((s) => Math.min(s + 1, maxStep));
  };

  const prev = () => { 
    setErrors([]); 
    if (step === 1) {
        setOtpSent(false);
        setStep(0);
    } else {
        setStep((s) => Math.max(s - 1, 0));
    }
  };

  const handleSubmit = () => {
    const e = validateStep();
    if (e.length) { setErrors(e); return; }
    
    setSubmitting(true);
    setTimeout(() => { setSubmitting(false); setSubmitted(true); }, 2500);
  };

  if (submitted) {
    return (
      <section id="register" className="py-24 lg:py-32">
        <div className="max-w-xl mx-auto px-4 text-center">
          <div className="bg-white border border-green-500/30 rounded-3xl p-12 shadow-xl">
            <div className="w-20 h-20 bg-green-500/20 rounded-full flex items-center justify-center mx-auto mb-6">
              <Check className="w-10 h-10 text-green-500" />
            </div>
            <h2 className="text-3xl font-black text-[#1A1A1A] mb-3">
              {form.accountType === "rider" ? "Application Submitted!" : "You're on the Waitlist!"}
            </h2>
            <p className="text-[#555555] leading-relaxed mb-6">
              {form.accountType === "rider" 
                ? `Thank you, ${form.firstName}! Your driver application is under review. We'll contact you at ${form.email}.`
                : `Awesome, ${form.firstName}! We've added you to our exclusive waitlist. We'll notify you as soon as Book Ride launches in your area.`}
            </p>
            <button 
              onClick={() => { setSubmitted(false); setForm(initialForm); setStep(0); setOtpSent(false); }}
              className="px-6 py-3 bg-[#D21F3C] hover:bg-[#a8172d] text-white font-bold rounded-xl transition"
            >
              Back to Home
            </button>
          </div>
        </div>
      </section>
    );
  }

  const inputClass = "w-full bg-[#F7F7F7] border border-gray-200 rounded-xl px-4 py-3.5 text-sm text-[#1A1A1A] placeholder-[#A0ADCC] focus:outline-none focus:border-[#D21F3C]/50 transition-all";
  const labelClass = "block text-xs font-semibold text-[#888888] uppercase tracking-wide mb-1.5";

  const currentSteps = form.accountType === "rider" ? RIDER_STEPS : (form.accountType === "passenger" ? PASSENGER_STEPS : [RIDER_STEPS[0], RIDER_STEPS[1]]);

  return (
    <section id="register" className="py-24 lg:py-32 relative bg-[#F7F7F7]">
      <div className="absolute left-0 top-1/4 w-80 h-80 bg-[#D21F3C]/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-2xl mx-auto px-4 sm:px-6 relative">
        {/* Header */}
        <div className="text-center mb-10">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#D21F3C]/10 border border-[#D21F3C]/20 text-[#D21F3C] text-sm font-bold mb-4">
            {form.accountType === "passenger" ? "Passenger Waitlist" : "Registration"}
          </div>
          <h2 className="text-4xl lg:text-5xl font-black text-[#1A1A1A] mb-3">
            {form.accountType === "passenger" ? "Join the " : "Join "} 
            <span className="gradient-text">{form.accountType === "passenger" ? "Waitlist" : "Book Ride"}</span>
          </h2>
          <p className="text-[#555555]">
            {form.accountType === "passenger" 
              ? "Be the first to know when we launch and get exclusive early-bird offers." 
              : "Complete the form below to start your journey with us."}
          </p>
        </div>

        {/* Stepper */}
        <div className="flex items-center justify-between mb-10 px-2">
            {currentSteps.map(({ label, icon: Icon }, i) => {
                // Simplified stepper logic
                let displayStep = step;
                if (form.accountType === "passenger") {
                    if (step === 3) displayStep = 2;
                    if (step === 4) displayStep = 3;
                }
                const isCurrent = i === displayStep;
                const isDone = i < displayStep;

                return (
                    <div key={label} className="flex items-center gap-0 flex-1 last:flex-initial">
                        <div className="flex flex-col items-center gap-1.5">
                            <div className={`w-10 h-10 rounded-xl flex items-center justify-center text-sm font-bold transition-all duration-300 ${
                                isDone ? "bg-green-500/20 border border-green-500/40 text-green-600"
                                : isCurrent ? "bg-[#D21F3C] text-white shadow-lg shadow-[#D21F3C]/30"
                                : "bg-gray-100 border border-gray-200 text-[#888888]"
                            }`}>
                                {isDone ? <Check className="w-4 h-4" /> : <Icon className="w-4 h-4" />}
                            </div>
                            <span className={`text-[10px] font-medium hidden sm:block ${
                                isCurrent || isDone ? "text-[#D21F3C]" : "text-[#888888]"
                            }`}>{label}</span>
                        </div>
                        {i < currentSteps.length - 1 && (
                            <div className={`flex-1 h-px mx-2 transition-colors duration-300 ${
                                isDone ? "bg-green-400" : "bg-gray-200"
                            }`} />
                        )}
                    </div>
                );
            })}
        </div>

        {/* Form Card */}
        <div className="bg-white border border-gray-100 rounded-3xl p-6 sm:p-8 shadow-xl">
          {/* Errors */}
          {errors.length > 0 && (
            <div className="mb-6 p-4 bg-red-500/10 border border-red-500/30 rounded-xl">
              {errors.map((e, i) => (
                <div key={i} className="flex items-center gap-2 text-sm text-red-400">
                  <AlertCircle className="w-3.5 h-3.5 shrink-0" /> {e}
                </div>
              ))}
            </div>
          )}

          {/* Step 0: Email Verification */}
          {step === 0 && (
            <div className="space-y-5 animate-fadeInUp">
              <h3 className="text-xl font-bold text-[#1A1A1A] flex items-center gap-2">
                <Mail className="w-5 h-5 text-[#D21F3C]" /> Email Verification
              </h3>
              <p className="text-sm text-gray-500">Enter your email address to begin the registration process.</p>
              <div>
                <label className={labelClass}>Email Address *</label>
                <div className="relative">
                  <Mail className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-[#D21F3C]" />
                  <input className={`${inputClass} pl-10`} type="email" placeholder="your@email.com" value={form.email} onChange={(e) => set("email", e.target.value)} />
                </div>
              </div>
            </div>
          )}

          {/* Step 1: OTP Verification */}
          {step === 1 && (
            <div className="space-y-5 animate-fadeInUp">
              <h3 className="text-xl font-bold text-[#1A1A1A] flex items-center gap-2">
                <ShieldCheck className="w-5 h-5 text-[#D21F3C]" /> Verify Code
              </h3>
              <p className="text-sm text-gray-500">We&apos;ve sent a verification code to <span className="font-bold text-[#1A1A1A]">{form.email}</span>. Enter it below.</p>
              <div>
                <label className={labelClass}>Verification Code *</label>
                <div className="relative">
                  <Lock className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-[#D21F3C]" />
                  <input 
                    className={`${inputClass} pl-10 tracking-[1em] font-mono text-lg`} 
                    maxLength={6} 
                    placeholder="000000" 
                    value={form.otp} 
                    onChange={(e) => set("otp", e.target.value.replace(/\D/g, ""))} 
                  />
                </div>
                <button className="mt-3 text-xs font-semibold text-[#D21F3C] hover:underline">Resend code</button>
              </div>
            </div>
          )}

          {/* Step 2: Role Selection */}
          {step === 2 && (
            <div className="space-y-6 animate-fadeInUp">
              <h3 className="text-xl font-bold text-[#1A1A1A] flex items-center gap-2">
                <UserPlus className="w-5 h-5 text-[#D21F3C]" /> Choose Your Path
              </h3>
              <div className="grid sm:grid-cols-2 gap-6">
                <button 
                  onClick={() => set("accountType", "rider")}
                  className={`relative overflow-hidden group p-1 rounded-3xl border-2 transition-all duration-300 cursor-pointer ${form.accountType === "rider" ? "border-[#D21F3C] ring-4 ring-[#D21F3C]/10" : "border-gray-100 hover:border-[#D21F3C]/30 bg-[#F7F7F7]"}`}
                >
                  <div className="relative aspect-[4/3] w-full rounded-2xl overflow-hidden bg-white mb-4">
                    <Image 
                      src="/images/rider_sketch.png" 
                      alt="Rider Sketch" 
                      fill 
                      className={`object-cover transition-transform duration-500 group-hover:scale-105 ${form.accountType === "rider" ? "scale-105" : ""}`}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
                    <div className={`absolute top-4 right-4 w-8 h-8 rounded-full flex items-center justify-center transition-all ${form.accountType === "rider" ? "bg-[#D21F3C] text-white scale-110" : "bg-white/80 text-gray-400"}`}>
                      <Car className="w-4 h-4" />
                    </div>
                  </div>
                  <div className="px-5 pb-6">
                    <div className="font-black text-lg text-[#1A1A1A] mb-2">Apply to Drive</div>
                    <div className="text-sm text-[#555555] leading-relaxed">Earn money on your own schedule. Join our fleet of professional riders.</div>
                  </div>
                </button>

                <button 
                  onClick={() => set("accountType", "passenger")}
                  className={`relative overflow-hidden group p-1 rounded-3xl border-2 transition-all duration-300 cursor-pointer ${form.accountType === "passenger" ? "border-[#D21F3C] ring-4 ring-[#D21F3C]/10" : "border-gray-100 hover:border-[#D21F3C]/30 bg-[#F7F7F7]"}`}
                >
                  <div className="relative aspect-[4/3] w-full rounded-2xl overflow-hidden bg-white mb-4">
                    <Image 
                      src="/images/passenger_sketch.png" 
                      alt="Passenger Sketch" 
                      fill 
                      className={`object-cover transition-transform duration-500 group-hover:scale-105 ${form.accountType === "passenger" ? "scale-105" : ""}`}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
                    <div className={`absolute top-4 right-4 w-8 h-8 rounded-full flex items-center justify-center transition-all ${form.accountType === "passenger" ? "bg-[#D21F3C] text-white scale-110" : "bg-white/80 text-gray-400"}`}>
                      <User className="w-4 h-4" />
                    </div>
                  </div>
                  <div className="px-5 pb-6">
                    <div className="font-black text-lg text-[#1A1A1A] mb-2">Join the Waitlist</div>
                    <div className="text-sm text-[#555555] leading-relaxed">Be first to ride. Get early access and exclusive discounts when we launch.</div>
                  </div>
                </button>
              </div>
            </div>
          )}

          {/* Rider Flow Steps */}
          {form.accountType === "rider" && (
            <>
              {step === 3 && (
                <div className="space-y-5 animate-fadeInUp">
                  <h3 className="text-xl font-bold text-[#1A1A1A] flex items-center gap-2">
                    <User className="w-5 h-5 text-[#D21F3C]" /> Personal Information
                  </h3>
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label className={labelClass}>First Name *</label>
                      <input className={inputClass} placeholder="e.g. Chinedu" value={form.firstName} onChange={(e) => set("firstName", e.target.value)} />
                    </div>
                    <div>
                      <label className={labelClass}>Last Name *</label>
                      <input className={inputClass} placeholder="e.g. Okafor" value={form.lastName} onChange={(e) => set("lastName", e.target.value)} />
                    </div>
                  </div>
                  <div>
                    <label className={labelClass}>Middle Name (Optional)</label>
                    <input className={inputClass} placeholder="e.g. Emeka" value={form.middleName} onChange={(e) => set("middleName", e.target.value)} />
                  </div>
                </div>
              )}

              {step === 4 && (
                <div className="space-y-5 animate-fadeInUp">
                  <h3 className="text-xl font-bold text-[#1A1A1A] flex items-center gap-2">
                    <Phone className="w-5 h-5 text-[#D21F3C]" /> Contact & Security
                  </h3>
                  <div>
                    <label className={labelClass}>Phone Number *</label>
                    <div className="relative">
                      <Phone className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-[#D21F3C]" />
                      <input className={`${inputClass} pl-10`} type="tel" placeholder="+234 800 000 0000" value={form.phone} onChange={(e) => set("phone", e.target.value)} />
                    </div>
                  </div>
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label className={labelClass}>Create Password *</label>
                      <div className="relative">
                        <Lock className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-[#D21F3C]" />
                        <input className={`${inputClass} pl-10`} type="password" placeholder="Create a password" value={form.password || ""} onChange={(e) => set("password", e.target.value)} />
                      </div>
                    </div>
                    <div>
                      <label className={labelClass}>Confirm Password *</label>
                      <div className="relative">
                        <Lock className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-[#D21F3C]" />
                        <input className={`${inputClass} pl-10`} type="password" placeholder="Confirm password" value={form.confirmPassword || ""} onChange={(e) => set("confirmPassword", e.target.value)} />
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {step === 5 && (
                <div className="space-y-5 animate-fadeInUp">
                  <h3 className="text-xl font-bold text-[#1A1A1A] flex items-center gap-2">
                    <Car className="w-5 h-5 text-[#D21F3C]" /> Vehicle Information
                  </h3>
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label className={labelClass}>Vehicle Category *</label>
                      <select className={inputClass} value={form.vehicleCategory} onChange={(e) => set("vehicleCategory", e.target.value)}>
                        <option value="Tricycle">Tricycle (Keke)</option>
                        <option value="Motorcycle">Motorcycle (Okada)</option>
                        <option value="Car">Car</option>
                      </select>
                    </div>
                    <div>
                      <label className={labelClass}>Vehicle Make *</label>
                      <input className={inputClass} placeholder="e.g. TVS" value={form.vehicleMake || ""} onChange={(e) => set("vehicleMake", e.target.value)} />
                    </div>
                    <div>
                      <label className={labelClass}>Vehicle Model *</label>
                      <input className={inputClass} placeholder="e.g. King Deluxe" value={form.vehicleModel || ""} onChange={(e) => set("vehicleModel", e.target.value)} />
                    </div>
                    <div>
                      <label className={labelClass}>Year *</label>
                      <input className={inputClass} placeholder="e.g. 2024" value={form.vehicleYear || ""} onChange={(e) => set("vehicleYear", e.target.value)} />
                    </div>
                    <div>
                      <label className={labelClass}>Color *</label>
                      <input className={inputClass} placeholder="e.g. Yellow" value={form.vehicleColor || ""} onChange={(e) => set("vehicleColor", e.target.value)} />
                    </div>
                    <div>
                      <label className={labelClass}>Plate Number *</label>
                      <input className={inputClass} placeholder="e.g. ABC-123-XY" value={form.vehiclePlate || ""} onChange={(e) => set("vehiclePlate", e.target.value)} />
                    </div>
                  </div>
                  
                  <div className="pt-4 border-t border-gray-100 mt-2">
                    <h4 className="text-sm font-bold text-[#1A1A1A] mb-4">Vehicle Photos</h4>
                    <div className="grid sm:grid-cols-3 gap-4">
                      <FileUploadBox label="Front Photo" hint="Include headlights" file={form.frontPhoto} onFile={(f) => set("frontPhoto", f)} accept=".jpg,.jpeg,.png" icon={Car} />
                      <FileUploadBox label="Back Photo" hint="Include plate number" file={form.backPhoto} onFile={(f) => set("backPhoto", f)} accept=".jpg,.jpeg,.png" icon={Car} />
                      <FileUploadBox label="Side Photo" hint="Full side profile" file={form.sidePhoto} onFile={(f) => set("sidePhoto", f)} accept=".jpg,.jpeg,.png" icon={Car} />
                    </div>
                  </div>
                </div>
              )}

              {step === 6 && (
                <div className="space-y-5 animate-fadeInUp">
                  <h3 className="text-xl font-bold text-[#1A1A1A] flex items-center gap-2">
                    <MapPin className="w-5 h-5 text-[#D21F3C]" /> Address & Proof
                  </h3>
                  <div>
                    <label className={labelClass}>Street Address *</label>
                    <input className={inputClass} placeholder="e.g. 15 Adeola Crescent, Ikeja" value={form.address} onChange={(e) => set("address", e.target.value)} />
                  </div>
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label className={labelClass}>City *</label>
                      <input className={inputClass} placeholder="e.g. Lagos" value={form.city} onChange={(e) => set("city", e.target.value)} />
                    </div>
                    <div>
                      <label className={labelClass}>State *</label>
                      <input className={inputClass} placeholder="e.g. Lagos" value={form.state} onChange={(e) => set("state", e.target.value)} />
                    </div>
                  </div>
                  <FileUploadBox label="Upload Proof of Address" hint="Utility bill or bank statement" file={form.proofOfAddress} onFile={(f) => set("proofOfAddress", f)} accept=".pdf,.jpg,.jpeg,.png" icon={Upload} />
                </div>
              )}

              {step === 7 && (
                <div className="space-y-5 animate-fadeInUp">
                  <h3 className="text-xl font-bold text-[#1A1A1A] flex items-center gap-2">
                    <FileText className="w-5 h-5 text-[#D21F3C]" /> Identification
                  </h3>
                  <div>
                    <label className={labelClass}>ID Type *</label>
                    <select className={inputClass} value={form.idType} onChange={(e) => set("idType", e.target.value)}>
                      <option value="nin">National ID (NIN)</option>
                      <option value="voters">Voter&apos;s Card</option>
                      <option value="passport">Passport</option>
                    </select>
                  </div>
                  <FileUploadBox label="Upload ID Document" hint="Clear photo of your selected ID" file={form.idFile} onFile={(f) => set("idFile", f)} accept=".pdf,.jpg,.jpeg,.png" icon={CreditCard} />
                  <FileUploadBox label="Driver's License" hint="Valid driver's license (Front)" file={form.driversLicense} onFile={(f) => set("driversLicense", f)} accept=".pdf,.jpg,.jpeg,.png" icon={FileText} />
                </div>
              )}

              {step === 8 && (
                <div className="space-y-5 animate-fadeInUp">
                  <h3 className="text-xl font-bold text-[#1A1A1A] flex items-center gap-2">
                    <Camera className="w-5 h-5 text-[#D21F3C]" /> Selfie Verification
                  </h3>
                  <FileUploadBox label="Upload Your Selfie" hint="Clear front-facing photo" file={form.selfie} onFile={(f) => set("selfie", f)} accept=".jpg,.jpeg,.png" icon={Camera} />
                </div>
              )}

              {step === 9 && (
                <div className="space-y-5 animate-fadeInUp">
                  <h3 className="text-xl font-bold text-[#1A1A1A] flex items-center gap-2">
                    <Check className="w-5 h-5 text-[#D21F3C]" /> Review Application
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
                               <div className="w-full aspect-square rounded-lg overflow-hidden bg-white border border-gray-200">
                                 <img src={URL.createObjectURL(file)} alt={label} className="w-full h-full object-cover" />
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
                  </div>
                </div>
              )}
            </>
          )}

          {/* Passenger Waitlist Step */}
          {form.accountType === "passenger" && (
            <>
              {step === 3 && (
                <div className="space-y-5 animate-fadeInUp">
                  <h3 className="text-xl font-bold text-[#1A1A1A] flex items-center gap-2">
                    <User className="w-5 h-5 text-[#D21F3C]" /> Waitlist Information
                  </h3>
                  <p className="text-sm text-gray-500">Just a few more details and you&apos;re set.</p>
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label className={labelClass}>First Name *</label>
                      <input className={inputClass} placeholder="e.g. Ada" value={form.firstName} onChange={(e) => set("firstName", e.target.value)} />
                    </div>
                    <div>
                      <label className={labelClass}>Last Name *</label>
                      <input className={inputClass} placeholder="e.g. Eze" value={form.lastName} onChange={(e) => set("lastName", e.target.value)} />
                    </div>
                  </div>
                  <div>
                    <label className={labelClass}>Phone Number *</label>
                    <div className="relative">
                      <Phone className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-[#D21F3C]" />
                      <input className={`${inputClass} pl-10`} type="tel" placeholder="+234 800 000 0000" value={form.phone} onChange={(e) => set("phone", e.target.value)} />
                    </div>
                  </div>
                </div>
              )}
              
              {step === 4 && (
                <div className="space-y-5 animate-fadeInUp">
                  <h3 className="text-xl font-bold text-[#1A1A1A] flex items-center gap-2">
                    <Check className="w-5 h-5 text-[#D21F3C]" /> Final Review
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
              )}
            </>
          )}

          {/* Navigation */}
          <div className="flex items-center justify-between mt-8 pt-6 border-t border-gray-100">
            {step > 0 ? (
              <button onClick={prev} className="flex items-center gap-2 px-5 py-3 text-sm font-semibold text-[#555555] hover:text-[#1A1A1A] bg-gray-100 border border-gray-200 rounded-xl transition-all cursor-pointer">
                <ChevronLeft className="w-4 h-4" /> Back
              </button>
            ) : <div />}

            {((form.accountType === "rider" && step < 9) || (form.accountType === "passenger" && step < 4) || step <= 2) ? (
              <button 
                onClick={next} 
                disabled={isVerifying || (step === 2 && !form.accountType)}
                className="flex items-center gap-2 px-6 py-3 text-sm font-bold text-white bg-[#D21F3C] rounded-xl shadow-lg shadow-[#D21F3C]/25 hover:bg-[#a8172d] transition-all disabled:opacity-60 disabled:cursor-not-allowed cursor-pointer"
              >
                {isVerifying ? <Loader2 className="w-4 h-4 animate-spin" /> : (step === 0 ? "Verify Email" : (step === 1 ? "Submit Code" : "Continue"))} 
                {!isVerifying && <ChevronRight className="w-4 h-4" />}
              </button>
            ) : (
              <button onClick={handleSubmit} disabled={submitting} className="flex items-center gap-2 px-8 py-3 text-sm font-bold text-white bg-green-600 rounded-xl shadow-lg shadow-green-700/30 hover:bg-green-700 transition-all disabled:opacity-60 disabled:cursor-not-allowed cursor-pointer">
                {submitting ? <><Loader2 className="w-4 h-4 animate-spin" /> Processing...</> : <><Zap className="w-4 h-4" /> {form.accountType === "passenger" ? "Join Waitlist" : "Continue"}</>}
              </button>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
