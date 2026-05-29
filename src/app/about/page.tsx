import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function AboutPage() {
  return (
    <main className="bg-white min-h-screen">
      <Navbar />
      <div className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#D21F3C]/10 border border-[#D21F3C]/20 text-[#D21F3C] text-sm font-bold mb-6">
            Our Story
          </div>
          <h1 className="text-5xl font-black text-[#1A1A1A] mb-8 leading-tight">
            Redefining Mobility for <br />
            <span className="text-[#D21F3C]">Every Nigerian</span>
          </h1>
          <div className="space-y-6 text-lg text-[#555555] leading-relaxed">
            <p>
              Founded in 2026, OnaAga was born out of a simple necessity: to provide safe, reliable, and affordable transportation for millions of Nigerians.
            </p>
            <p>
              We believe that mobility is a fundamental right. Whether you're commuting to work in a busy city center, heading home after a late night, or moving goods across town, you deserve a service that is both transparent and trustworthy.
            </p>
            <h2 className="text-2xl font-bold text-[#1A1A1A] pt-4">Our Mission</h2>
            <p>
              To build a seamless ecosystem that connects riders with verified drivers, fostering economic growth and providing sustainable income opportunities for thousands of Nigerians while ensuring every journey is a safe one.
            </p>
            <div className="grid grid-cols-2 gap-8 py-10">
              <div>
                <p className="text-4xl font-black text-[#D21F3C]">50k+</p>
                <p className="text-sm font-bold text-gray-500 uppercase tracking-wider">Active Riders</p>
              </div>
              <div>
                <p className="text-4xl font-black text-[#D21F3C]">10k+</p>
                <p className="text-sm font-bold text-gray-500 uppercase tracking-wider">Verified Drivers</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </main>
  );
}
