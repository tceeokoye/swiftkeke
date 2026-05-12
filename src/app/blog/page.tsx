import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Newspaper } from "lucide-react";

export default function BlogPage() {
  return (
    <main className="bg-white min-h-screen">
      <Navbar />
      <div className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#D21F3C]/10 border border-[#D21F3C]/20 text-[#D21F3C] text-sm font-bold mb-4">
            Our Blog
          </div>
          <h1 className="text-5xl font-black text-[#1A1A1A] mb-4">Latest from Book Ride</h1>
          <p className="text-gray-500 text-lg max-w-2xl mx-auto">
            Insights, updates, and stories from the road.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
           {[1, 2].map((i) => (
             <div key={i} className="group cursor-pointer">
               <div className="aspect-video bg-gray-100 rounded-[2rem] mb-6 overflow-hidden relative">
                 <div className="absolute inset-0 flex items-center justify-center text-gray-400">
                    <Newspaper className="w-12 h-12" />
                 </div>
               </div>
               <div className="space-y-3">
                 <div className="flex items-center gap-3 text-xs font-bold text-[#D21F3C] uppercase tracking-widest">
                   <span>Updates</span>
                   <span className="w-1 h-1 bg-gray-300 rounded-full" />
                   <span className="text-gray-500">May 12, 2026</span>
                 </div>
                 <h3 className="text-2xl font-black text-[#1A1A1A] group-hover:text-[#D21F3C] transition-colors leading-tight">
                   How we're improving safety for every ride in Nigeria
                 </h3>
                 <p className="text-gray-500 line-clamp-2">
                   Safety has always been our top priority. In this post, we detail the new verification steps we've introduced for our drivers.
                 </p>
               </div>
             </div>
           ))}
        </div>
      </div>
      <Footer />
    </main>
  );
}
