"use client";

import { useState, useRef } from "react";
import {
  User, Mail, Phone, MapPin, Camera, FileText, CreditCard,
  ChevronRight, ChevronLeft, Check, Upload, AlertCircle, Loader2, Zap, Car, Lock
} from "lucide-react";

const RIDER_STEPS = [
  { label: "Personal Info", icon: User },
  { label: "Contact", icon: Phone },
  { label: "Address", icon: MapPin },
  { label: "Documents", icon: FileText },
  { label: "Selfie", icon: Camera },
  { label: "Review", icon: Check },
];

type AccountType = "rider" | "passenger" | null;

type FormData = {
  accountType: AccountType;
  firstName: string; lastName: string; middleName: string;
  email: string; phone: string; password: "";
  address: string; city: string; state: string; proofOfAddress: File | null;
  idType: string; idFile: File | null; driversLicense: File | null;
  selfie: File | null;
};

const initialForm: FormData = {
  accountType: null,
  firstName: "", lastName: "", middleName: "",
  email: "", phone: "", password: "",
  address: "", city: "", state: "", proofOfAddress: null,
  idType: "nin", idFile: null, driversLicense: null,
  selfie: null,
};

function FileUploadBox({ label, hint, file, onFile, accept, icon: Icon }: {
  label: string; hint: string; file: File | null;
  onFile: (f: File) => void; accept: string; icon: React.ElementType;
}) {
  const ref = useRef<HTMLInputElement>(null);
  return (
    <div
      onClick={() => ref.current?.click()}
      className={`relative flex flex-col items-center justify-center p-6 rounded-2xl border-2 border-dashed cursor-pointer transition-all duration-200 ${
        file
          ? "border-green-500/50 bg-green-500/5"
          : "border-white/10 bg-white/[0.02] hover:border-purple-500/40 hover:bg-purple-700/5"
      }`}
    >
      <input ref={ref} type="file" accept={accept} className="hidden" onChange={(e) => e.target.files?.[0] && onFile(e.target.files[0])} />
      {file ? (
        <>
          <div className="w-12 h-12 bg-green-500/20 rounded-full flex items-center justify-center mb-3">
            <Check className="w-6 h-6 text-green-400" />
          </div>
          <span className="text-sm font-semibold text-green-400">{file.name}</span>
          <span className="text-xs text-gray-600 mt-1">Click to change</span>
        </>
      ) : (
        <>
          <div className="w-12 h-12 bg-purple-700/20 border border-purple-600/30 rounded-full flex items-center justify-center mb-3">
            <Icon className="w-6 h-6 text-purple-400" />
          </div>
          <span className="text-sm font-semibold text-white">{label}</span>
          <span className="text-xs text-gray-600 mt-1">{hint}</span>
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

  const set = (key: keyof FormData, val: string | File | null) =>
    setForm((p) => ({ ...p, [key]: val }));

  const validateRider = (): string[] => {
    const e: string[] = [];
    if (step === 0) {
      if (!form.firstName.trim()) e.push("First name is required");
      if (!form.lastName.trim()) e.push("Last name is required");
    } else if (step === 1) {
      if (!form.email.trim() || !form.email.includes("@")) e.push("Valid email is required");
      if (!form.phone.trim() || form.phone.length < 10) e.push("Valid phone number is required");
      if (!form.password.trim() || form.password.length < 6) e.push("Password must be at least 6 characters");
    } else if (step === 2) {
      if (!form.address.trim()) e.push("Address is required");
      if (!form.city.trim()) e.push("City is required");
      if (!form.state.trim()) e.push("State is required");
      if (!form.proofOfAddress) e.push("Proof of address is required");
    } else if (step === 3) {
      if (!form.idFile) e.push("Means of identification is required");
      if (!form.driversLicense) e.push("Driver's license is required");
    } else if (step === 4) {
      if (!form.selfie) e.push("Selfie photo is required");
    }
    return e;
  };

  const validatePassenger = (): string[] => {
    const e: string[] = [];
    if (!form.firstName.trim()) e.push("First name is required");
    if (!form.lastName.trim()) e.push("Last name is required");
    if (!form.email.trim() || !form.email.includes("@")) e.push("Valid email is required");
    if (!form.phone.trim() || form.phone.length < 10) e.push("Valid phone number is required");
    if (!form.password.trim() || form.password.length < 6) e.push("Password must be at least 6 characters");
    return e;
  };

  const next = () => {
    if (form.accountType === "rider") {
      const e = validateRider();
      if (e.length) { setErrors(e); return; }
      setErrors([]);
      setStep((s) => Math.min(s + 1, 5));
    }
  };

  const prev = () => { setErrors([]); setStep((s) => Math.max(s - 1, 0)); };

  const handleSubmit = () => {
    if (form.accountType === "passenger") {
      const e = validatePassenger();
      if (e.length) { setErrors(e); return; }
    }
    
    setSubmitting(true);
    setTimeout(() => { setSubmitting(false); setSubmitted(true); }, 2500);
  };

  if (submitted) {
    return (
      <section id="register" className="py-24 lg:py-32">
        <div className="max-w-xl mx-auto px-4 text-center">
          <div className="bg-white/[0.03] border border-green-500/30 rounded-3xl p-12">
            <div className="w-20 h-20 bg-green-500/20 rounded-full flex items-center justify-center mx-auto mb-6">
              <Check className="w-10 h-10 text-green-400" />
            </div>
            <h2 className="text-3xl font-black text-white mb-3">Registration Successful!</h2>
            <p className="text-gray-400 leading-relaxed mb-6">
              Welcome aboard, {form.firstName}! Your {form.accountType === "rider" ? "driver application is under review" : "passenger account has been created"}. We&apos;ll contact you at <span className="text-purple-400">{form.email}</span>.
            </p>
            <button 
              onClick={() => { setSubmitted(false); setForm(initialForm); setStep(0); }}
              className="px-6 py-3 bg-purple-600 hover:bg-purple-500 text-white font-bold rounded-xl transition"
            >
              Back to Home
            </button>
          </div>
        </div>
      </section>
    );
  }

  const inputClass = "w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3.5 text-sm text-white placeholder-gray-600 focus:outline-none focus:border-purple-500/50 focus:bg-white/[0.07] transition-all";
  const labelClass = "block text-xs font-semibold text-gray-400 uppercase tracking-wide mb-1.5";

  return (
    <section id="register" className="py-24 lg:py-32 relative">
      <div className="absolute left-0 top-1/4 w-80 h-80 bg-purple-700/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-2xl mx-auto px-4 sm:px-6 relative">
        {/* Header */}
        <div className="text-center mb-10">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-purple-900/30 border border-purple-700/40 text-purple-300 text-sm font-medium mb-4">
            Registration
          </div>
          <h2 className="text-4xl lg:text-5xl font-black text-white mb-3">
            Join <span className="gradient-text">SwiftKeke</span>
          </h2>
          <p className="text-gray-400">Complete the form below to start your journey with us.</p>
        </div>

        {/* Account Type Selection */}
        {!form.accountType && (
          <div className="grid sm:grid-cols-2 gap-6 animate-fadeInUp">
            <button
              onClick={() => { set("accountType", "rider"); setErrors([]); }}
              className="flex flex-col items-center justify-center p-8 bg-white/[0.03] border border-white/[0.06] rounded-3xl hover:border-purple-500/50 hover:bg-purple-700/10 transition-all duration-300 group"
            >
              <div className="w-16 h-16 bg-purple-700/20 border border-purple-600/30 rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <Car className="w-8 h-8 text-purple-400" />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Register as Driver</h3>
              <p className="text-sm text-gray-500 text-center">Drive with SwiftKeke and start earning on your own schedule.</p>
            </button>

            <button
              onClick={() => { set("accountType", "passenger"); setErrors([]); }}
              className="flex flex-col items-center justify-center p-8 bg-white/[0.03] border border-white/[0.06] rounded-3xl hover:border-violet-500/50 hover:bg-violet-700/10 transition-all duration-300 group"
            >
              <div className="w-16 h-16 bg-violet-700/20 border border-violet-600/30 rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <User className="w-8 h-8 text-violet-400" />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Register as Passenger</h3>
              <p className="text-sm text-gray-500 text-center">Book rides instantly, travel safely, and pay conveniently.</p>
            </button>
          </div>
        )}

        {form.accountType && (
          <>
            <button 
              onClick={() => { set("accountType", null); setStep(0); setErrors([]); }}
              className="mb-6 flex items-center gap-2 text-sm text-gray-400 hover:text-purple-400 transition"
            >
              <ChevronLeft className="w-4 h-4" /> Change account type
            </button>

            {/* Progress for Rider */}
            {form.accountType === "rider" && (
              <div className="flex items-center justify-between mb-10 px-2">
                {RIDER_STEPS.map(({ label, icon: Icon }, i) => (
                  <div key={label} className="flex items-center gap-0 flex-1 last:flex-initial">
                    <div className="flex flex-col items-center gap-1.5">
                      <div className={`w-10 h-10 rounded-xl flex items-center justify-center text-sm font-bold transition-all duration-300 ${
                        i < step ? "bg-green-500/20 border border-green-500/40 text-green-400"
                        : i === step ? "bg-gradient-to-br from-purple-600 to-violet-600 text-white shadow-lg shadow-purple-700/30"
                        : "bg-white/5 border border-white/10 text-gray-600"
                      }`}>
                        {i < step ? <Check className="w-4 h-4" /> : <Icon className="w-4 h-4" />}
                      </div>
                      <span className={`text-[10px] font-medium hidden sm:block ${
                        i <= step ? "text-purple-300" : "text-gray-700"
                      }`}>{label}</span>
                    </div>
                    {i < RIDER_STEPS.length - 1 && (
                      <div className={`flex-1 h-px mx-2 transition-colors duration-300 ${
                        i < step ? "bg-green-500/40" : "bg-white/10"
                      }`} />
                    )}
                  </div>
                ))}
              </div>
            )}

            {/* Form Card */}
            <div className="bg-white/[0.03] border border-white/[0.06] rounded-3xl p-6 sm:p-8 shadow-2xl">
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

              {/* RIDER FLOW */}
              {form.accountType === "rider" && (
                <>
                  {/* Step 0: Personal Info */}
                  {step === 0 && (
                    <div className="space-y-5 animate-fadeInUp">
                      <h3 className="text-xl font-bold text-white flex items-center gap-2">
                        <User className="w-5 h-5 text-purple-400" /> Personal Information
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

                  {/* Step 1: Contact */}
                  {step === 1 && (
                    <div className="space-y-5 animate-fadeInUp">
                      <h3 className="text-xl font-bold text-white flex items-center gap-2">
                        <Mail className="w-5 h-5 text-purple-400" /> Contact & Security
                      </h3>
                      <div>
                        <label className={labelClass}>Email Address *</label>
                        <div className="relative">
                          <Mail className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-purple-400" />
                          <input className={`${inputClass} pl-10`} type="email" placeholder="your@email.com" value={form.email} onChange={(e) => set("email", e.target.value)} />
                        </div>
                      </div>
                      <div>
                        <label className={labelClass}>Phone Number *</label>
                        <div className="relative">
                          <Phone className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-purple-400" />
                          <input className={`${inputClass} pl-10`} type="tel" placeholder="+234 800 000 0000" value={form.phone} onChange={(e) => set("phone", e.target.value)} />
                        </div>
                      </div>
                      <div>
                        <label className={labelClass}>Password *</label>
                        <div className="relative">
                          <Lock className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-purple-400" />
                          <input className={`${inputClass} pl-10`} type="password" placeholder="Create a password" value={form.password} onChange={(e) => set("password", e.target.value)} />
                        </div>
                      </div>
                    </div>
                  )}

                  {/* Step 2: Address */}
                  {step === 2 && (
                    <div className="space-y-5 animate-fadeInUp">
                      <h3 className="text-xl font-bold text-white flex items-center gap-2">
                        <MapPin className="w-5 h-5 text-purple-400" /> Address & Proof
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
                      <div>
                        <label className={labelClass}>Proof of Address *</label>
                        <FileUploadBox
                          label="Upload Proof of Address"
                          hint="Utility bill or bank statement (PDF, JPG, PNG)"
                          file={form.proofOfAddress}
                          onFile={(f) => set("proofOfAddress", f)}
                          accept=".pdf,.jpg,.jpeg,.png"
                          icon={Upload}
                        />
                      </div>
                    </div>
                  )}

                  {/* Step 3: Documents */}
                  {step === 3 && (
                    <div className="space-y-5 animate-fadeInUp">
                      <h3 className="text-xl font-bold text-white flex items-center gap-2">
                        <FileText className="w-5 h-5 text-purple-400" /> Identification Documents
                      </h3>
                      <div>
                        <label className={labelClass}>Means of Identification *</label>
                        <select
                          className={inputClass}
                          value={form.idType}
                          onChange={(e) => set("idType", e.target.value)}
                        >
                          <option value="nin" className="bg-[#1a1a2e]">National ID (NIN)</option>
                          <option value="voters" className="bg-[#1a1a2e]">Voter&apos;s Card</option>
                          <option value="passport" className="bg-[#1a1a2e]">International Passport</option>
                        </select>
                      </div>
                      <FileUploadBox
                        label="Upload ID Document"
                        hint="Clear photo of your selected ID (JPG, PNG, PDF)"
                        file={form.idFile}
                        onFile={(f) => set("idFile", f)}
                        accept=".pdf,.jpg,.jpeg,.png"
                        icon={CreditCard}
                      />
                      <div>
                        <label className={`${labelClass} mt-4`}>Driver&apos;s License *</label>
                        <FileUploadBox
                          label="Upload Driver's License"
                          hint="Front side of your valid driver's license"
                          file={form.driversLicense}
                          onFile={(f) => set("driversLicense", f)}
                          accept=".pdf,.jpg,.jpeg,.png"
                          icon={FileText}
                        />
                      </div>
                    </div>
                  )}

                  {/* Step 4: Selfie */}
                  {step === 4 && (
                    <div className="space-y-5 animate-fadeInUp">
                      <h3 className="text-xl font-bold text-white flex items-center gap-2">
                        <Camera className="w-5 h-5 text-purple-400" /> Selfie Verification
                      </h3>
                      <p className="text-sm text-gray-500">
                        Take a clear selfie of your face. Ensure good lighting, no sunglasses, and your face is fully visible.
                      </p>
                      <FileUploadBox
                        label="Upload Your Selfie"
                        hint="Clear front-facing photo (JPG, PNG)"
                        file={form.selfie}
                        onFile={(f) => set("selfie", f)}
                        accept=".jpg,.jpeg,.png"
                        icon={Camera}
                      />
                      <div className="grid grid-cols-3 gap-3 mt-4">
                        {["Good lighting", "No sunglasses", "Face clearly visible"].map((tip) => (
                          <div key={tip} className="flex items-center gap-2 p-3 bg-purple-700/10 border border-purple-600/20 rounded-xl">
                            <Check className="w-3 h-3 text-purple-400 shrink-0" />
                            <span className="text-xs text-purple-300">{tip}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Step 5: Review */}
                  {step === 5 && (
                    <div className="space-y-5 animate-fadeInUp">
                      <h3 className="text-xl font-bold text-white flex items-center gap-2">
                        <Check className="w-5 h-5 text-purple-400" /> Review Your Application
                      </h3>
                      <p className="text-sm text-gray-500 mb-4">Please verify all information before submitting.</p>

                      {[
                        { label: "Full Name", value: `${form.firstName} ${form.middleName} ${form.lastName}`.trim() },
                        { label: "Email", value: form.email },
                        { label: "Phone", value: form.phone },
                        { label: "Address", value: `${form.address}, ${form.city}, ${form.state}` },
                        { label: "ID Type", value: form.idType.toUpperCase() },
                        { label: "ID Document", value: form.idFile?.name || "—" },
                        { label: "Driver's License", value: form.driversLicense?.name || "—" },
                        { label: "Proof of Address", value: form.proofOfAddress?.name || "Not uploaded" },
                        { label: "Selfie", value: form.selfie?.name || "—" },
                      ].map(({ label, value }) => (
                        <div key={label} className="flex justify-between items-center py-3 border-b border-white/5">
                          <span className="text-xs text-gray-500 uppercase tracking-wide">{label}</span>
                          <span className="text-sm text-white font-medium text-right max-w-[60%] truncate">{value}</span>
                        </div>
                      ))}

                      <div className="p-4 bg-purple-700/10 border border-purple-600/20 rounded-xl mt-4">
                        <p className="text-xs text-purple-300">
                          By submitting, you agree to SwiftKeke&apos;s <a href="#" className="underline">Terms of Service</a> and <a href="#" className="underline">Privacy Policy</a>.
                          Your data will be securely processed for verification purposes only.
                        </p>
                      </div>
                    </div>
                  )}

                  {/* Navigation Buttons for Rider */}
                  <div className="flex items-center justify-between mt-8 pt-6 border-t border-white/5">
                    {step > 0 ? (
                      <button onClick={prev} className="flex items-center gap-2 px-5 py-3 text-sm font-semibold text-gray-400 hover:text-white bg-white/5 border border-white/10 rounded-xl hover:bg-white/10 transition-all">
                        <ChevronLeft className="w-4 h-4" /> Back
                      </button>
                    ) : <div />}

                    {step < 5 ? (
                      <button onClick={next} className="flex items-center gap-2 px-6 py-3 text-sm font-bold text-white bg-gradient-to-r from-purple-600 to-violet-600 rounded-xl shadow-lg shadow-purple-700/30 hover:shadow-purple-600/50 hover:-translate-y-0.5 transition-all">
                        Continue <ChevronRight className="w-4 h-4" />
                      </button>
                    ) : (
                      <button onClick={handleSubmit} disabled={submitting} className="flex items-center gap-2 px-8 py-3 text-sm font-bold text-white bg-gradient-to-r from-green-600 to-emerald-600 rounded-xl shadow-lg shadow-green-700/30 hover:shadow-green-600/50 hover:-translate-y-0.5 transition-all disabled:opacity-60">
                        {submitting ? <><Loader2 className="w-4 h-4 animate-spin" /> Submitting...</> : <><Zap className="w-4 h-4" /> Submit Application</>}
                      </button>
                    )}
                  </div>
                </>
              )}

              {/* PASSENGER FLOW */}
              {form.accountType === "passenger" && (
                <div className="space-y-5 animate-fadeInUp">
                  <h3 className="text-xl font-bold text-white flex items-center gap-2 mb-6">
                    <User className="w-5 h-5 text-violet-400" /> Create Passenger Account
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
                    <label className={labelClass}>Email Address *</label>
                    <div className="relative">
                      <Mail className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-violet-400" />
                      <input className={`${inputClass} pl-10`} type="email" placeholder="your@email.com" value={form.email} onChange={(e) => set("email", e.target.value)} />
                    </div>
                  </div>
                  
                  <div>
                    <label className={labelClass}>Phone Number *</label>
                    <div className="relative">
                      <Phone className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-violet-400" />
                      <input className={`${inputClass} pl-10`} type="tel" placeholder="+234 800 000 0000" value={form.phone} onChange={(e) => set("phone", e.target.value)} />
                    </div>
                  </div>
                  
                  <div>
                    <label className={labelClass}>Password *</label>
                    <div className="relative">
                      <Lock className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-violet-400" />
                      <input className={`${inputClass} pl-10`} type="password" placeholder="Create a password" value={form.password} onChange={(e) => set("password", e.target.value)} />
                    </div>
                  </div>

                  <div className="pt-6 mt-6 border-t border-white/5">
                    <button onClick={handleSubmit} disabled={submitting} className="w-full flex justify-center items-center gap-2 px-8 py-4 text-sm font-bold text-white bg-gradient-to-r from-violet-600 to-purple-600 rounded-xl shadow-lg shadow-violet-700/30 hover:shadow-violet-600/50 hover:-translate-y-0.5 transition-all disabled:opacity-60">
                      {submitting ? <><Loader2 className="w-4 h-4 animate-spin" /> Registering...</> : <><Zap className="w-4 h-4" /> Create Account</>}
                    </button>
                  </div>
                </div>
              )}
            </div>
          </>
        )}
      </div>
    </section>
  );
}
