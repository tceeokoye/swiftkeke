import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function PressPage() {
  return (
    <main className="bg-white min-h-screen">
      <Navbar />
      <div className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#DE2910]/10 border border-[#DE2910]/20 text-[#DE2910] text-sm font-bold mb-6">
            Press Room
          </div>
          <h1 className="text-5xl font-black text-[#1A1A1A] mb-8 leading-tight">
            Media Resources & <br />
            <span className="text-[#DE2910]">Brand Assets</span>
          </h1>
          <div className="space-y-12">
            <section>
              <h2 className="text-2xl font-bold text-[#1A1A1A] mb-4">Media Contact</h2>
              <p className="text-lg text-[#555555]">
                For media inquiries, please reach out to our communications team at <span className="font-bold text-[#1A1A1A]">press@onaaga.ng</span>
              </p>
            </section>
            
            <section className="bg-gray-50 p-10 rounded-[2.5rem] border border-gray-100">
               <h2 className="text-2xl font-bold text-[#1A1A1A] mb-4">Brand Guidelines</h2>
               <p className="text-[#555555] mb-8">Download our official logos, color palettes, and brand guidelines for media use.</p>
               <button className="px-8 py-4 bg-[#1A1A1A] text-white font-bold rounded-xl hover:bg-[#DE2910] transition-all">
                 Download Press Kit
               </button>
            </section>
          </div>
        </div>
      </div>
      <Footer />
    </main>
  );
}
