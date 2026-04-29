import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import Marquee from "@/components/Marquee";
import About from "@/components/About";
import Benefits from "@/components/Benefits";
import HowItWorks from "@/components/HowItWorks";
import MapCoverage from "@/components/MapCoverage";
import RegistrationForm from "@/components/RegistrationForm";
import FAQ from "@/components/FAQ";
import Footer from "@/components/Footer";
import FloatingContact from "@/components/FloatingContact";

export default function Home() {
  return (
    <main className="bg-[#0a0a0f] text-white min-h-screen overflow-x-hidden">
      <Navbar />
      <HeroSection />
      <Marquee />
      <About />
      <Benefits />
      <HowItWorks />
      <MapCoverage />
      <RegistrationForm />
      <FAQ />
      <Footer />
      <FloatingContact />
    </main>
  );
}
