import Image from "next/image";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
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
  badge,
  heading,
  description,
  highlights,
  stats,
}: Props) {
  const previewImage = defaultAccountType === "driver" ? "/images/rider_sketch.png" : "/images/passenger_sketch.png";
  const previewAlt = defaultAccountType === "driver" ? "Driver onboarding illustration" : "Passenger waitlist illustration";

  return (
    <main className="min-h-screen bg-[#F7F7F7]">
      <Navbar />

      <section className="pt-24 pb-12 px-4 sm:px-6 lg:px-12 overflow-x-hidden">
        <div className="w-full max-w-7xl mx-auto grid lg:grid-cols-[0.95fr_1.05fr] gap-8 lg:items-start justify-center">
          <div className="w-full max-w-xl lg:max-w-none mx-auto bg-white rounded-3xl lg:rounded-[2.5rem] shadow-xl p-5 sm:p-6 lg:p-10">
            <div className="inline-flex items-center text-[18px] sm:text-[20px] font-black text-[#DE2910]">
              {badge}
            </div>
 
            <h1 className="mt-4 sm:mt-6 text-xl sm:text-2xl font-black text-[#1A1A1A] leading-tight">
              {heading}
            </h1>
 
            <p className="mt-3 sm:mt-4 text-xs sm:text-sm text-[#555555] leading-relaxed max-w-xl">
              {description}
            </p>
 
            <ul className="mt-5 sm:mt-6 space-y-2 sm:space-y-3">
              {highlights.map((item) => (
                <li key={item} className="flex items-start gap-2.5 sm:gap-3 rounded-xl sm:rounded-2xl bg-white px-3 py-2.5 sm:px-4 sm:py-3 text-[11px] sm:text-[12px] text-[#1A1A1A] font-normal shadow-sm border border-gray-50/50">
                  <span className="mt-1 h-2.5 w-2.5 rounded-full bg-[#DE2910] shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
 
            <div className="mt-5 sm:mt-6 rounded-2xl sm:rounded-3xl border border-gray-100 shadow-inner shadow-[#DE2910]/5 overflow-hidden">
              <div className="relative aspect-4/3 w-full rounded-2xl sm:rounded-[1.75rem] bg-white">
                <Image
                  src={previewImage}
                  alt={previewAlt}
                  fill
                  className="object-cover"
                  priority
                />
                <div className="absolute inset-0 bg-linear-to-t from-black/35 via-black/10 to-transparent" />
                <div className="absolute left-3 right-3 bottom-3 sm:left-4 sm:right-4 sm:bottom-4 rounded-xl sm:rounded-2xl bg-white/90 px-3 py-2.5 sm:px-4 sm:py-3 backdrop-blur-sm">
                  <p className="text-[9px] sm:text-[10px] font-black text-[#DE2910]">
                    {defaultAccountType === "driver" ? "Driver preview" : "Passenger preview"}
                  </p>
                  <p className="mt-0.5 sm:mt-1 text-xs sm:text-sm font-bold text-[#1A1A1A]">
                    {defaultAccountType === "driver" ? "Verified fleet-ready onboarding" : "Priority access to launch rides"}
                  </p>
                </div>
              </div>
            </div>
 
            <div className="mt-5 sm:mt-6 grid grid-cols-3 gap-2 sm:gap-3">
              {stats.map((stat) => (
                <div key={stat.label} className="rounded-xl sm:rounded-2xl bg-[#1A1A1A] p-2.5 sm:p-4 text-center text-white flex flex-col justify-center">
                  <div className="text-base sm:text-xl font-black text-white">{stat.value}</div>
                  <div className="mt-0.5 sm:mt-1 text-[8px] sm:text-[10px] font-bold uppercase tracking-wider sm:tracking-[0.2em] text-white/70">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="w-full min-w-0 overflow-hidden">
            <div className="bg-[#F7F7F7]">
              <RegistrationForm
                key={defaultAccountType}
                defaultAccountType={defaultAccountType}
                pageTitle={defaultAccountType === "driver" ? "Driver Onboarding" : "Passenger Waitlist"}
                pageSubtitle={defaultAccountType === "driver" ? "Complete your verification journey and join the OnaAga driver network." : "Secure your place on the launch waitlist and get priority updates."}
              />
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
