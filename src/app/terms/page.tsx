import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function TermsPage() {
  return (
    <main className="bg-white min-h-screen">
      <Navbar />
      <div className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
        <h1 className="text-4xl font-black text-[#1A1A1A] mb-4">Terms of Service</h1>
        <p className="text-gray-500 mb-10">Last updated: May 12, 2026</p>
        
        <div className="prose prose-red max-w-none space-y-8 text-[#555555] leading-relaxed">
          <section>
            <h2 className="text-2xl font-bold text-[#1A1A1A] mb-4">1. Acceptance of Terms</h2>
            <p>
              By accessing or using the OnaAga platform, you agree to be bound by these Terms of Service and all applicable laws and regulations. If you do not agree with any of these terms, you are prohibited from using or accessing this site.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-[#1A1A1A] mb-4">2. Use License</h2>
            <p>
              Permission is granted to temporarily download one copy of the materials (information or software) on OnaAga's website for personal, non-commercial transitory viewing only.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-[#1A1A1A] mb-4">3. User Conduct</h2>
            <p>
              Users are expected to behave respectfully towards drivers and other riders. Any form of harassment, discrimination, or illegal activity will result in immediate termination of account access.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-[#1A1A1A] mb-4">4. Payments & Refunds</h2>
            <p>
              Fares are calculated based on distance, time, and demand. All payments are processed securely. Refund requests must be submitted within 24 hours of the ride completion.
            </p>
          </section>
        </div>
      </div>
      <Footer />
    </main>
  );
}
