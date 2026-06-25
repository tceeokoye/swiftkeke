import Image from "next/image";
import Link from "next/link";
import Logo from "@/assets/Logo/Artboard 19@4x.png";
import RegistrationForm from "@/components/RegistrationForm";

interface Props {
  defaultAccountType: "driver" | "passenger";
  badge: string;
  heading: string;
  description: string;
  highlights: string[];
  stats: { label: string; value: string }[];
}

export default function OnboardingPageShell({
  defaultAccountType,
}: Props) {
  return (
    <main className="min-h-screen     bg-[#ffffff] flex flex-col relative overflow-x-hidden  ">
      <Link
        href="/#home"
        className="flex items-center shrink-0 w-full py-4 fixed z-50 top-0 px-6 bg-white"
      >
        <Image 
          src={Logo} 
          alt="OnaAga Logo" 
          className="h-7 sm:h-8 w-auto object-contain" 
          priority
        />
      </Link>

      {/* Decorative background blur to match app style subtly */}
     

      <RegistrationForm
        key={defaultAccountType}
        defaultAccountType={defaultAccountType}
        pageTitle={defaultAccountType === "driver" ? "Driver Onboarding" : "Passenger Waitlist"}
        pageSubtitle={defaultAccountType === "driver" ? "Complete your verification journey and join the OnaAga driver network." : "Secure your place on the launch waitlist and get priority updates."}
      />
    </main>
  );
}
