import { ReactNode } from "react";

export interface TokenSliceParams {
  token: string | null;
}

export type HttpRequestConfigType = {
  url: string;
  method: string;
  successMessage?: string;
  token?: string;
  params?: any;
  body?: any;
  isAuth?: boolean;
  userType?: "driver" | "passenger" | "admin";
};

export interface HttpRequestConfigProps {
  requestConfig: HttpRequestConfigType;
  successRes: (data: any) => void;
  errorRes?: (err: any) => void;
}

export type AccountType = "driver" | "passenger" | null;

export interface RegistrationFormData {
  accountType: AccountType;
  email: string;
  otp: string;
  nin: string;
  firstName: string;
  lastName: string;
  middleName: string;
  phone: string;
  password: string;
  confirmPassword: string;
  vehicleMake: string;
  vehicleModel: string;
  vehicleYear: string;
  vehicleColor: string;
  vehiclePlate: string;
  vehicleCategory: string;
  address: string;
  city: string;
  state: string;
  proofOfAddress: File | null;
  idType: string;
  idFile: File | null;
  driversLicense: File | null;
  frontPhoto: File | null;
  backPhoto: File | null;
  sidePhoto: File | null;
  selfie: File | null;
}
