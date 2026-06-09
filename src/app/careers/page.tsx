import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Briefcase } from "lucide-react";

export default function CareersPage() {
  return (
    <main className="bg-white min-h-screen">
      <Navbar />
      <div className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#DE2910]/10 border border-[#DE2910]/20 text-[#DE2910] text-sm font-bold mb-4">
            Join the Team
          </div>
          <h1 className="text-5xl font-black text-[#1A1A1A] mb-4">Build the future of <br /><span className="text-[#DE2910]">mobility</span> in Nigeria</h1>
          <p className="text-gray-500 text-lg max-w-2xl mx-auto">
            We&apos;re looking for passionate individuals to help us solve complex transportation challenges and create economic opportunities.
          </p>
        </div>

        <div className="bg-gray-50 rounded-[2.5rem] p-12 text-center border border-dashed border-gray-200">
          <div className="w-20 h-20 bg-white rounded-3xl flex items-center justify-center mx-auto mb-6 shadow-xl shadow-black/5">
            <Briefcase className="w-10 h-10 text-[#DE2910]" />
          </div>
          <h2 className="text-2xl font-black text-[#1A1A1A] mb-2">No open positions right now</h2>
          <p className="text-gray-500 mb-8">We&apos;re always growing! Check back soon or send your CV to careers@onaaga.ng</p>
          <button className="px-8 py-4 bg-[#1A1A1A] text-white font-bold rounded-xl hover:bg-[#DE2910] transition-all">
            Join Talent Pool
          </button>
        </div>
      </div>
      <Footer />
    </main>
  );
}
