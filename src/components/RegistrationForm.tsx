"use client";

import { useState } from "react";
import {
  ChevronRight,
  ChevronLeft,
  Check,
  AlertCircle,
  Loader2,
  Zap,
  UserPlus,
  Lock,
  ShieldCheck,
  User,
  Phone,
  Car,
  MapPin,
  FileText,
  Camera,
} from "lucide-react";
import { toast } from "sonner";
import { useHttp } from "@/hooks/use-http";
import { RegistrationFormData } from "@/types/global";
import { useDispatch, useSelector } from "react-redux";
import { tokenActions } from "@/store/token/token-slice";
import { RootState } from "@/store";

// Helpers
import {
  initialForm,
  validateRegistrationStep,
  checkPasswordStrength,
  getStrengthColor,
  getStrengthText,
} from "@/lib/registration-helpers";

// Sub-components
import StepRoleSelection from "./registration/StepRoleSelection";
import StepAccountSetup from "./registration/StepAccountSetup";
import StepVerifyOtp from "./registration/StepVerifyOtp";
import StepPersonalInfo from "./registration/StepPersonalInfo";
import StepContactInfo from "./registration/StepContactInfo";
import StepVehicleInfo from "./registration/StepVehicleInfo";
import StepAddressInfo from "./registration/StepAddressInfo";
import StepDocuments from "./registration/StepDocuments";
import StepReview from "./registration/StepReview";
import RegistrationSuccess from "./registration/RegistrationSuccess";

const DRIVER_STEPS = [
  { label: "Role", icon: UserPlus },
  { label: "Account", icon: Lock },
  { label: "Verify", icon: ShieldCheck },
  { label: "Personal", icon: User },
  { label: "Contact", icon: Phone },
  { label: "Vehicle", icon: Car },
  { label: "Address", icon: MapPin },
  { label: "Documents", icon: FileText },
  { label: "Selfie", icon: Camera },
  { label: "Review", icon: Check },
];

const PASSENGER_STEPS = [
  { label: "Role", icon: UserPlus },
  { label: "Account", icon: Lock },
  { label: "Verify", icon: ShieldCheck },
  { label: "Waitlist", icon: Phone },
  { label: "Review", icon: Check },
];

interface RegistrationFormProps {
  defaultAccountType?: "driver" | "passenger";
  pageTitle?: string;
  pageSubtitle?: string;
}

export default function RegistrationForm({
  defaultAccountType,
  pageTitle,
  pageSubtitle,
}: RegistrationFormProps) {
  const { loading, sendHttpRequest } = useHttp();
  const dispatch = useDispatch();
  const authToken = useSelector((state: RootState) => state.token.token);

  const [step, setStep] = useState(() => (defaultAccountType ? 1 : 0));
  const [form, setForm] = useState<RegistrationFormData>(() => ({
    ...initialForm,
    accountType: defaultAccountType ?? null,
    termsAccepted: false,
  }));
  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState<string[]>([]);
  const [showPassword, setShowPassword] = useState(false);

  const set = (
    key: keyof RegistrationFormData,
    val: RegistrationFormData[keyof RegistrationFormData],
  ) => setForm((p) => ({ ...p, [key]: val }));

  const resendCode = (e?: React.MouseEvent) => {
    e?.preventDefault();
    sendHttpRequest({
      successRes: (res:any) => {
        toast.success("Verification code resent");
        console.log("Resend OTP Response:", res);
        
      },
      requestConfig: {
        url: "/auth/resend-otp",
        method: "POST",
        body: {
          email: form.email,
          userType: form.accountType,
        },
        userType: form.accountType as "driver" | "passenger",
        successMessage: "Verification code resent",
      },
    });
  };

  const next = () => {
    const e = validateRegistrationStep(step, form);
    if (e.length) {
      setErrors(e);
      return;
    }
    setErrors([]);

    if (step === 1) {
      sendHttpRequest({
        successRes: (res) => {
          console.log("Onboard Response:", res);
          const data = res.data;

          // If already verified but needs completion
          if (
            data?.message === "complete_registration" ||
            data?.data?.user?.status === "verified"
          ) {
            const token = data?.data?.token || data?.token;
            if (token) {
              dispatch(tokenActions.setToken(token));
            }
            toast.success("Account found. Please complete your profile.");
            setStep(3);
            return;
          }

          setStep(2);
        },
        errorRes: (err) => {
          const data = err.response?.data;
          if (
            data?.description === "Email already exists!" &&
            data?.data === null
          ) {
            setErrors(["Email already exists. Use a different email or sign in."]);
            return;
          }
        },
        requestConfig: {
          url: "/auth/onboard/user",
          method: "POST",
          body: {
            email: form.email,
            password: form.password,
            confirmPassword: form.confirmPassword,
            userType: form.accountType,
          },
          userType: form.accountType as "driver" | "passenger",
        },
      });
      return;
    }

    if (step === 2) {
      sendHttpRequest({
        successRes: (res) => {
          console.log("Verify Response:", res);
          // Save token if returned (assuming res.data.data.token or similar based on backend pattern)
          const token = res.data?.data?.token || res.data?.token;
          if (token) {
            dispatch(tokenActions.setToken(token));
          }
          setStep(3);
        },
        requestConfig: {
          url: "/auth/verify/email",
          method: "POST",
          body: {
            email: form.email,
            otp: form.otp,
            userType: form.accountType,
          },
          userType: form.accountType as "driver" | "passenger",
        },
      });
      return;
    }

    const maxStep =
      form.accountType === "driver"
        ? 9
        : form.accountType === "passenger"
          ? 4
          : 1;
    setStep((s) => Math.min(s + 1, maxStep));
  };

  const handleSubmit = () => {
    const e = validateRegistrationStep(step, form);
    if (e.length) {
      setErrors(e);
      return;
    }

    if (form.accountType === "driver" && !form.termsAccepted) {
      setErrors([
        "You must accept the Terms of Service before submitting your driver application",
      ]);
      return;
    }

    // Final phone sanitization
    let cleanPhone = form.phone.replace(/\D/g, "");
    if (cleanPhone.startsWith("234")) cleanPhone = cleanPhone.substring(3);
    if (cleanPhone.startsWith("0")) cleanPhone = cleanPhone.substring(1);
    const finalPhone = `234${cleanPhone}`;

    if (form.accountType === "driver") {
      const formData = new FormData();
      formData.append("firstName", form.firstName);
      formData.append("lastName", form.lastName);
      formData.append("phoneNumber", finalPhone);
      formData.append("streetAddress", form.address);
      formData.append("city", form.city);
      formData.append("state", form.state);
      formData.append("nin", form.nin);
      formData.append("category", form.vehicleCategory.toLowerCase());
      formData.append("make", form.vehicleMake);
      formData.append("vehicleModel", form.vehicleModel);
      formData.append("color", form.vehicleColor);
      formData.append("plateNumber", form.vehiclePlate);
      formData.append("year", form.vehicleYear);

      if (form.idFile) formData.append("ninFile", form.idFile);
      if (form.driversLicense)
        formData.append("driverLicenseFile", form.driversLicense);
      if (form.frontPhoto) formData.append("vehicleFrontFile", form.frontPhoto);
      if (form.backPhoto) formData.append("vehicleBackFile", form.backPhoto);
      if (form.sidePhoto) formData.append("vehicleSideFile", form.sidePhoto);
      // Selfie isn't in the user's specific list but I'll add it if standard
      if (form.selfie) formData.append("selfieFile", form.selfie);

      sendHttpRequest({
        successRes: (res) => {
          console.log("Final Registration Response:", res);
          setSubmitted(true);
        },
        errorRes: (err) => {
          const data = err.response?.data;
          if (
            err.response?.status === 401 ||
            data?.description === "Not authenticated"
          ) {
            toast.error("Session expired or invalid. Please re-verify.");
            setStep(2);
            resendCode();
          }
        },
        requestConfig: {
          url: "/auth/complete-registration/driver",
          method: "PATCH",
          body: formData,
          token: authToken || undefined,
          userType: "driver",
        },
      });
      return;
    }

    if (form.accountType === "passenger") {
      sendHttpRequest({
        successRes: (res) => {
          console.log("Passenger Final Response:", res);
          setSubmitted(true);
        },
        errorRes: (err) => {
          const data = err.response?.data;
          if (
            err.response?.status === 401 ||
            data?.description === "Not authenticated"
          ) {
            toast.error("Session expired or invalid. Please re-verify.");
            setStep(2);
            resendCode();
          }
        },
        requestConfig: {
          url: "/auth/complete-registration/passenger",
          method: "PATCH",
          body: {
            firstName: form.firstName,
            lastName: form.lastName,
            phoneNumber: finalPhone,
          },
          token: authToken || undefined,
          userType: "passenger",
        },
      });
      return;
    }

    setSubmitted(true);
  };

  if (submitted) {
    return (
      <RegistrationSuccess
        firstName={form.firstName}
        email={form.email}
        accountType={form.accountType}
        onReset={() => {
          setSubmitted(false);
          setForm({
            ...initialForm,
            accountType: defaultAccountType ?? null,
            termsAccepted: false,
          });
          setStep(defaultAccountType ? 1 : 0);
          setErrors([]);
        }}
      />
    );
  }

  const currentSteps =
    form.accountType === "driver"
      ? DRIVER_STEPS
      : form.accountType === "passenger"
        ? PASSENGER_STEPS
        : [
            { label: "Role", icon: UserPlus },
            { label: "Verification", icon: ShieldCheck },
          ];
  const resolvedPageTitle =
    pageTitle ??
    (form.accountType === "passenger" ? "Passenger Waitlist" : "Join OnaAga");
  const resolvedPageSubtitle =
    pageSubtitle ??
    (form.accountType === "passenger"
      ? "Reserve your place and get early launch updates."
      : "Create your driver profile and start earning.");

  return (
    <section id="register" className=" relative ">
      <div className="absolute left-0 top-1/4 w-80 h-80 bg-[#D21F3C]/5 rounded-full blur-3xl pointer-events-none" />
      <div className="max-w-2xl mx-auto px-4 sm:px-6 relative">
        <div className="text-center mb-10">
          {/* <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#D21F3C]/10 border border-[#D21F3C]/20 text-[#D21F3C] text-sm font-bold mb-4">
            {form.accountType === "passenger" ? "Passenger Waitlist" : "Driver Onboarding"}
          </div> */}
          <h2 className="text-4xl lg:text-5xl font-black text-[#1A1A1A] mb-3">
            <span className="gradient-text">{resolvedPageTitle}</span>
          </h2>
          <p className="text-[#555555] text-base max-w-2xl mx-auto leading-relaxed">
            {resolvedPageSubtitle}
          </p>
        </div>

        <div className="flex items-center justify-between mb-10 px-2">
          {currentSteps.map(({ label, icon: Icon }, i) => (
            <div
              key={label}
              className="flex items-center gap-0 flex-1 last:flex-initial"
            >
              <div className="flex flex-col items-center gap-1.5">
                <div
                  className={`w-10 h-10 rounded-xl flex items-center justify-center text-sm font-bold transition-all duration-300 ${i < step ? "bg-green-500/20 border border-green-500/40 text-green-600" : i === step ? "bg-[#D21F3C] text-white shadow-lg shadow-[#D21F3C]/30" : "bg-gray-100 border border-gray-200 text-[#888888]"}`}
                >
                  {i < step ? (
                    <Check className="w-4 h-4" />
                  ) : (
                    <Icon className="w-4 h-4" />
                  )}
                </div>
                <span
                  className={`text-[10px] font-medium hidden sm:block ${i <= step ? "text-[#D21F3C]" : "text-[#888888]"}`}
                >
                  {label}
                </span>
              </div>
              {i < currentSteps.length - 1 && (
                <div
                  className={`flex-1 h-px mx-2 transition-colors duration-300 ${i < step ? "bg-green-400" : "bg-gray-200"}`}
                />
              )}
            </div>
          ))}
        </div>

        <div className="bg-white border border-gray-100 rounded-3xl p-6 sm:p-8 shadow-xl">
          {errors.length > 0 && (
            <div className="mb-6 p-4 bg-red-500/10 border border-red-500/30 rounded-xl">
              {errors.map((e, i) => (
                <div
                  key={i}
                  className="flex items-center gap-2 text-sm text-red-400"
                >
                  <AlertCircle className="w-3.5 h-3.5 shrink-0" /> {e}
                </div>
              ))}
            </div>
          )}

          {step === 0 && (
            <StepRoleSelection accountType={form.accountType} set={set} />
          )}
          {step === 1 && (
            <StepAccountSetup
              form={form}
              set={set}
              showPassword={showPassword}
              setShowPassword={setShowPassword}
              checkPasswordStrength={checkPasswordStrength}
              getStrengthText={getStrengthText}
              getStrengthColor={getStrengthColor}
            />
          )}
          {step === 2 && (
            <StepVerifyOtp
              form={form}
              set={set}
              loading={loading}
              resendCode={resendCode}
            />
          )}
          {form.accountType === "driver" && (
            <>
              {step === 3 && <StepPersonalInfo form={form} set={set} />}
              {step === 4 && <StepContactInfo form={form} set={set} />}
              {step === 5 && <StepVehicleInfo form={form} set={set} />}
              {step === 6 && <StepAddressInfo form={form} set={set} />}
              {step === 7 && <StepDocuments form={form} set={set} />}
              {step === 8 && (
                <StepDocuments form={form} set={set} isSelfieStep />
              )}
              {step === 9 && <StepReview form={form} set={set} />}
            </>
          )}
          {form.accountType === "passenger" && (
            <>
              {step === 3 && (
                <StepPersonalInfo form={form} set={set} isPassenger />
              )}
              {step === 4 && <StepReview form={form} isPassenger />}
            </>
          )}

          <div className="flex items-center justify-between mt-8 pt-6 border-t border-gray-100">
            {step > 0 && (
              <button
                onClick={() => setStep((s) => s - 1)}
                className="flex items-center gap-2 px-5 py-3 text-sm font-semibold text-[#555555] bg-gray-100 border border-gray-200 rounded-xl transition-all cursor-pointer"
              >
                <ChevronLeft className="w-4 h-4" /> Back
              </button>
            )}
            <div className={step === 0 ? "flex-1" : ""} />
            {(form.accountType === "driver" && step < 9) ||
            (form.accountType === "passenger" && step < 4) ||
            step <= 2 ? (
              <button
                onClick={next}
                disabled={loading || (step === 0 && !form.accountType)}
                className="flex items-center gap-2 px-6 py-3 text-sm font-bold text-white bg-[#D21F3C] rounded-xl shadow-lg shadow-[#D21F3C]/25 hover:bg-[#a8172d] transition-all disabled:opacity-60 cursor-pointer"
              >
                {loading ? (
                  <Loader2 className="w-4 h-4 animate-spin" />
                ) : step === 1 ? (
                  "Create Account"
                ) : step === 2 ? (
                  "Verify OTP"
                ) : (
                  "Continue"
                )}
                {!loading && <ChevronRight className="w-4 h-4" />}
              </button>
            ) : (
              <button
                onClick={handleSubmit}
                disabled={loading}
                className="flex items-center gap-2 px-8 py-3 text-sm font-bold text-white bg-green-600 rounded-xl shadow-lg shadow-green-700/30 hover:bg-green-700 transition-all disabled:opacity-60 cursor-pointer"
              >
                {loading ? (
                  <>
                    <Loader2 className="w-4 h-4 animate-spin" /> Processing...
                  </>
                ) : (
                  <>
                    <Zap className="w-4 h-4" />{" "}
                    {form.accountType === "passenger"
                      ? "Join Waitlist"
                      : "Continue"}
                  </>
                )}
              </button>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
