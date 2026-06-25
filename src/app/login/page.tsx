"use client";

import { useState, useEffect, Suspense } from "react";
import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { ArrowRight, Lock, Mail, Loader2, PhoneCall, Eye, EyeOff } from "lucide-react";
import axios from "axios";
import AccountStatusModal, {
  AccountStatus,
} from "@/components/AccountStatusModal";
import { toast } from "sonner";
import { useHttp } from "@/hooks/use-http";
import Image from "next/image";
import Logo from "@/assets/Logo/Artboard 19@4x.png";
import { tokenActions } from "@/store/token/token-slice";
import { useDispatch } from "react-redux";

function LoginForm() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [accountStatus, setAccountStatus] = useState<AccountStatus>("pending");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [phone, setPhone] = useState("");
  const [userType, setUserType] = useState("passenger");
  const [isLoading, setIsLoading] = useState(false);
  const { loading, sendHttpRequest, error } = useHttp();
  const dispatch = useDispatch();

  useEffect(() => {
    const emailParam = searchParams.get("email");
    const typeParam = searchParams.get("accountType");

    if (emailParam) setEmail(emailParam);
    if (typeParam) setUserType(typeParam);
  }, [searchParams]);

  const userEndpoint =
    userType === "driver" ? "/auth/login/driver" : "/auth/login/passenger";
  const handleLogin = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("handleLogin called");
    if (userType === "passenger" && (!email || !password)) {
      toast.error("Please enter both email and password");
      return;
    }
    if (userType === "driver" && (!phone || !password)) {
      toast.error("Please enter both phone number and password");
      return;
    }
    const phoneNumber = `234${phone}`;

    sendHttpRequest({
      successRes: (res: any) => {
        console.log("login details:", res.data?.data?.user?.status);
        setEmail("");
        setPassword("");
        setPhone("");

        if (res.data?.data?.user?.status === "pending_review") {
          // router.push("/coming-soon");
          setIsModalOpen(true);
          setAccountStatus("pending");
        }
        if (res.data?.data?.user?.status === "active") {
          router.push("/comming-soon");
        }
      },
      requestConfig: {
        url: userEndpoint,
        method: "POST",
        body: {
          ...(userType === "driver"
            ? { phoneNumber, password }
            : { email, password }),
        },
      },
      errorRes: (err: any) => {
        const data = err.response?.data || err.data || err;

        if (
          data?.message === "suspended" ||
          data?.data?.user?.status === "suspended"
        ) {
          setIsModalOpen(true);
          setAccountStatus("suspended");
          setEmail("");
          setPassword("");
          setPhone("");
          return;
        }

        if (
          data?.message === "pending_review" ||
          data?.data?.user?.status === "pending_review"
        ) {
          setIsModalOpen(true);
          setAccountStatus("pending");
          setEmail("");
          setPassword("");
          setPhone("");
          return;
        }

        if (
          data?.message === "complete_registration" ||
          data?.data?.user?.status === "verified"
        ) {
          const token = data?.data?.token || data?.token;
          setEmail("");
          setPassword("");
          setPhone("");
          if (token) {
            dispatch(tokenActions.setToken(token));
          }
          toast.success("Account found. Please complete your profile.");
          router.push(
            userType === "driver"
              ? "/driver-onboarding?step=3"
              : "/passenger-waitlist?step=3",
          );
          return;
        }

        const message =
          data?.description ||
          data?.message ||
          "Login failed. Please check your credentials.";
        toast.error(message);
      },
    });
    // setIsLoading(true);
    // try {
    //   const response = await axios.post(
    //     `${process.env.NEXT_PUBLIC_BACKEND_URL}`,
    //     {
    //       email,

    //       userType
    //     }
    //   );

    //   toast.success("Login successful!");
    //   // Redirect to dashboard or home based on your app flow

    // } catch (error: any) {
    //   const message = error.response?.data?.message || "Login failed. Please check your credentials.";
    //   toast.error(message);
    // } finally {
    //   setIsLoading(false);
    // }
  };

  return (
    <form className="space-y-5" onSubmit={handleLogin}>
      {userType === "driver" ? (
        <div>
          <label className="block text-[13px] font-bold text-[#1A1A1A] mb-2">
            Phone number
          </label>
          <div className="relative">
            {/* Phone Icon */}
            <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-gray-400">
              <PhoneCall className="w-5 h-5" />
            </div>

            {/* Country Code */}
            <div className="absolute inset-y-0 left-11 flex items-center text-gray-600 font-medium">
              +234
            </div>

            <input
              type="tel"
              required
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              className="w-full pl-24 pr-4 py-3.5 bg-gray-50/50 border border-gray-200 rounded-xl text-[15px] text-[#1A1A1A] placeholder-gray-400 focus:outline-none focus:border-[#DE2910] focus:ring-1 focus:ring-[#DE2910] focus:bg-white transition-all"
              placeholder="8012345678"
            />
          </div>
        </div>
      ) : (
        <div>
          <label className="block text-[13px] font-bold text-[#1A1A1A] mb-2">
            Email Address
          </label>
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-gray-400">
              <Mail className="w-5 h-5" />
            </div>
            <input
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full pl-11 pr-4 py-3.5 bg-gray-50/50 border border-gray-200 rounded-xl text-[15px] text-[#1A1A1A] placeholder-gray-400 focus:outline-none focus:border-[#DE2910] focus:ring-1 focus:ring-[#DE2910] focus:bg-white transition-all"
              placeholder="Enter your email"
            />
          </div>
        </div>
      )}

      <div>
        <label className="block text-[13px] font-bold text-[#1A1A1A] mb-2">
          Password
        </label>
        <div className="relative">
          <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-gray-400">
            <Lock className="w-5 h-5" />
          </div>
          <input
            type={showPassword ? "text" : "password"}
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full pl-11 pr-12 py-3.5 bg-gray-50/50 border border-gray-200 rounded-xl text-[15px] text-[#1A1A1A] placeholder-gray-400 focus:outline-none focus:border-[#DE2910] focus:ring-1 focus:ring-[#DE2910] focus:bg-white transition-all"
            placeholder="Enter your password"
          />
          <button
            type="button"
            onClick={() => setShowPassword(!showPassword)}
            className="absolute inset-y-0 right-0 pr-4 flex items-center text-gray-400 hover:text-[#DE2910] transition-colors"
          >
            {showPassword ? (
              <EyeOff className="w-5 h-5" />
            ) : (
              <Eye className="w-5 h-5" />
            )}
          </button>
        </div>
      </div>

      <div className="flex items-center justify-between mt-2">
        <label className="flex items-center gap-2.5 cursor-pointer group">
          <div className="relative flex items-center justify-center">
            <input
              type="checkbox"
              className="peer appearance-none w-5 h-5 rounded-md border-2 border-gray-200 bg-white checked:bg-[#DE2910] checked:border-[#DE2910] transition-colors cursor-pointer"
            />
            <svg
              className="absolute w-3 h-3 text-white opacity-0 peer-checked:opacity-100 pointer-events-none"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="3"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M5 13l4 4L19 7"
              ></path>
            </svg>
          </div>
          <span className="text-[13px] font-semibold text-[#555555] group-hover:text-[#1A1A1A] transition-colors">
            Remember me
          </span>
        </label>

        <Link
          href="#"
          className="text-[13px] font-bold text-[#DE2910] hover:text-[#a8172d] transition-colors"
        >
          Forgot password?
        </Link>
      </div>

      <div className="pt-2">
        <button
          type="submit"
          disabled={isLoading}
          className="group flex items-center justify-center gap-2 w-full py-4 text-sm font-bold text-white bg-[#DE2910] rounded-xl shadow-lg shadow-[#DE2910]/20 hover:bg-[#a8172d] hover:shadow-[#DE2910]/30 transition-all active:scale-[0.98] disabled:opacity-70 disabled:cursor-not-allowed"
        >
          {loading ? (
            <>
              <Loader2 className="w-4 h-4 animate-spin" />
              Signing In...
            </>
          ) : (
            <>
              Sign In
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </>
          )}
        </button>
        <AccountStatusModal
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
          status={accountStatus}
        />
      </div>
    </form>
  );
}

export default function LoginPage() {
  return (
    <main className="min-h-screen bg-[#F7F7F7] flex flex-col relative overflow-x-hidden pt-8 ">
      <Link
        href="/#home"
        className="flex items-center gap-2.5 group overflow-hidden px-6"
      >
        <Image src={Logo} alt="OnaAga Logo" width={100} height={100} />
      </Link>

      {/* Decorative background blur to match app style subtly */}
      <div className="absolute left-0 top-1/4 w-80 h-80 bg-[#DE2910]/5 rounded-full blur-3xl pointer-events-none" />

      <section className="flex-1 flex items-center justify-center  md:px-4 sm:px-6 z-10 h-screen overflow-hidden">
        <div className="w-full max-w-md  p-6 sm:p-10 shadow-xl relative overflow-hidden">
          {/* Subtle accent line at top */}
          <div className="absolute top-0 left-0 right-0 h-1 " />

          <div className="text-center mb-8">
            <h1 className="text-2xl sm:text-3xl font-black text-[#1A1A1A] mb-2 tracking-tight">
              Welcome back
            </h1>
            <p className="text-[#555555] text-sm leading-relaxed">
              Sign in to your OnaAga account to continue
            </p>
          </div>

          <Suspense
            fallback={
              <div className="flex justify-center p-8">
                <Loader2 className="w-6 h-6 text-[#DE2910] animate-spin" />
              </div>
            }
          >
            <LoginForm />
          </Suspense>

          <div className="mt-8 pt-6 border-t border-gray-100 text-center">
            <p className="text-sm font-medium text-[#555555]">
              Don't have an account?{" "}
              <Link
                href="/driver-onboarding"
                className="font-bold text-[#DE2910] hover:text-[#a8172d] transition-colors"
              >
                Sign up
              </Link>
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
