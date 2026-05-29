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

      <section className="pt-24 pb-12   px-6 lg:px-12">
        <div className="w-full mx-auto grid lg:grid-cols-[0.95fr_1.05fr] gap-8 items-start ">
          <div className="bg-white rounded-4xl  shadow-xl p-6 lg:p-10">
            <div className="inline-flex items-center   text-[20px] font-black  text-[#D21F3C]">
              {badge}
            </div>

            <h1 className="mt-6 text-2xl lg:text-2xl font-black text-[#1A1A1A] leading-tight">
              {heading}
            </h1>

            <p className="mt-4 text-sm text-[#555555] leading-relaxed max-w-xl">
              {description}
            </p>

            <ul className="mt-6 space-y-3">
              {highlights.map((item) => (
                <li key={item} className="flex items-start gap-3 rounded-2xl bg-white px-4 py-3 text-[12px] text-[#1A1A1A] font-normal shadow-sm">
                  <span className="mt-1 h-2.5 w-2.5 rounded-full bg-[#D21F3C]" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>

            <div className="mt-6 rounded-4xl  border border-gray-100  shadow-inner shadow-[#D21F3C]/5">
              <div className="relative aspect-4/3  rounded-[1.75rem] bg-white">
                <Image
                  src={previewImage}
                  alt={previewAlt}
                  fill
                  className="object-cover"
                  priority
                />
                <div className="absolute inset-0 bg-linear-to-t from-black/35 via-black/10 to-transparent" />
                <div className="absolute left-4 right-4 bottom-4 rounded-2xl bg-white/90 px-4 py-3 backdrop-blur-sm">
                  <p className="text-[10px] font-black  text-[#D21F3C]">
                    {defaultAccountType === "driver" ? "Driver preview" : "Passenger preview"}
                  </p>
                  <p className="mt-1 text-sm font-bold text-[#1A1A1A]">
                    {defaultAccountType === "driver" ? "Verified fleet-ready onboarding" : "Priority access to launch rides"}
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-6 grid sm:grid-cols-3 gap-3">
              {stats.map((stat) => (
                <div key={stat.label} className="rounded-2xl bg-[#1A1A1A] p-4 text-center text-white">
                  <div className="text-xl font-black text-white">{stat.value}</div>
                  <div className="mt-1 text-[10px] font-bold uppercase tracking-[0.2em] text-white/70">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="  ">
            <div className="  bg-[#F7F7F7] ">
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
