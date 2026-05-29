import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function PrivacyPage() {
  return (
    <main className="bg-white min-h-screen">
      <Navbar />
      <div className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
        <h1 className="text-4xl font-black text-[#1A1A1A] mb-4">Privacy Policy</h1>
        <p className="text-gray-500 mb-10">Last updated: May 12, 2026</p>
        
        <div className="prose prose-red max-w-none space-y-8 text-[#555555] leading-relaxed">
          <section>
            <h2 className="text-2xl font-bold text-[#1A1A1A] mb-4">1. Information We Collect</h2>
            <p>
              We collect information that you provide directly to us, such as when you create or modify your account, request on-demand services, contact customer support, or otherwise communicate with us. This info may include: name, email, phone number, postal address, profile picture, and payment method.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-[#1A1A1A] mb-4">2. Use of Information</h2>
            <p>
              We use the information we collect to provide, maintain, and improve our services, such as to facilitate payments, send receipts, provide products and services you request (and send related information), develop new features, provide customer support, and send administrative messages.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-[#1A1A1A] mb-4">3. Sharing of Information</h2>
            <p>
              We may share your information with drivers to enable them to provide the services you request. For example, we share your name and pickup/drop-off locations with drivers.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-[#1A1A1A] mb-4">4. Location Data</h2>
            <p>
              To provide ride-hailing services, we collect precise location data about the trip when the OnaAga app is running in the foreground or background.
            </p>
          </section>
        </div>
      </div>
      <Footer />
    </main>
  );
}
