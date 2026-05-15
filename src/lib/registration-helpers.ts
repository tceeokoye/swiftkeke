import { RegistrationFormData } from "@/types/global";

export const initialForm: RegistrationFormData = {
  accountType: null,
  email: "",
  otp: "",
  nin: "",
  firstName: "", lastName: "", middleName: "",
  phone: "+234", password: "", confirmPassword: "",
  vehicleMake: "", vehicleModel: "", vehicleYear: "", vehicleColor: "", vehiclePlate: "", vehicleCategory: "Tricycle",
  address: "", city: "", state: "", proofOfAddress: null,
  idType: "nin", idFile: null, driversLicense: null,
  frontPhoto: null, backPhoto: null, sidePhoto: null,
  selfie: null,
};

export const checkPasswordStrength = (pass: string) => {
  let score = 0;
  if (!pass) return 0;
  if (pass.length >= 8) score++;
  if (/[A-Z]/.test(pass)) score++;
  if (/[a-z]/.test(pass)) score++;
  if (/[0-9]/.test(pass)) score++;
  if (/[^A-Za-z0-9]/.test(pass)) score++;
  return score;
};

export const getStrengthColor = (score: number) => {
  if (score <= 2) return "bg-red-500";
  if (score <= 3) return "bg-yellow-500";
  if (score <= 4) return "bg-blue-500";
  return "bg-green-500";
};

export const getStrengthText = (score: number) => {
  if (score === 0) return "";
  if (score <= 2) return "Weak";
  if (score <= 3) return "Fair";
  if (score <= 4) return "Good";
  return "Strong";
};

export const validateRegistrationStep = (step: number, form: RegistrationFormData): string[] => {
  const e: string[] = [];
  if (step === 0 && !form.accountType) e.push("Please select an account type");
  else if (step === 1) {
    if (!form.email.trim() || !form.email.includes("@")) e.push("Valid email is required");
    if (!form.password.trim() || form.password.length < 8) e.push("Password must be at least 8 characters");
    if (checkPasswordStrength(form.password) < 3) e.push("Password is too weak. Use a mix of letters, numbers, and symbols.");
    if (form.password !== form.confirmPassword) e.push("Passwords do not match");
  }
  else if (step === 2) {
    if (form.otp.length < 6) e.push("Enter the 6-digit code sent to your email");
  }
  else if (form.accountType === "driver") {
    if (step === 3) {
      if (!form.firstName.trim()) e.push("First name is required");
      if (!form.lastName.trim()) e.push("Last name is required");
    } else if (step === 4) {
      if (!form.phone.trim() || form.phone.length < 10) e.push("Valid phone number is required");
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
      if (!form.nin.trim() || form.nin.length < 11) e.push("Valid 11-digit NIN is required");
      if (!form.idFile) e.push("NIN document is required");
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
