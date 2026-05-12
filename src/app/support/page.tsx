import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Mail, Phone, MessageSquare, Clock } from "lucide-react";

export default function SupportPage() {
  return (
    <main className="bg-white min-h-screen">
      <Navbar />
      <div className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#D21F3C]/10 border border-[#D21F3C]/20 text-[#D21F3C] text-sm font-bold mb-4">
            Help Center
          </div>
          <h1 className="text-5xl font-black text-[#1A1A1A] mb-4">We're here to help</h1>
          <p className="text-gray-500 text-lg max-w-2xl mx-auto">
            Have questions or need assistance? Our support team is available 24/7 to ensure your experience with Book Ride is seamless.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {[
            {
              icon: Phone,
              title: "Call Us",
              desc: "Available 24/7 for urgent assistance.",
              contact: "+234 800 000 0000",
              color: "bg-blue-50 text-blue-600"
            },
            {
              icon: Mail,
              title: "Email Support",
              desc: "For general inquiries and feedback.",
              contact: "support@bookride.ng",
              color: "bg-red-50 text-[#D21F3C]"
            },
            {
              icon: MessageSquare,
              title: "Live Chat",
              desc: "Chat with us directly via WhatsApp.",
              contact: "Start Chat",
              color: "bg-green-50 text-green-600"
            }
          ].map((item, i) => (
            <div key={i} className="bg-white p-8 rounded-[2rem] border border-gray-100 shadow-xl shadow-black/5 hover:-translate-y-1 transition-all text-center">
              <div className={`w-14 h-14 ${item.color} rounded-2xl flex items-center justify-center mx-auto mb-6`}>
                <item.icon className="w-7 h-7" />
              </div>
              <h3 className="text-xl font-bold text-[#1A1A1A] mb-2">{item.title}</h3>
              <p className="text-sm text-gray-500 mb-6">{item.desc}</p>
              <p className="font-black text-[#1A1A1A]">{item.contact}</p>
            </div>
          ))}
        </div>

        <div className="mt-20 max-w-3xl mx-auto bg-[#1A1A1A] rounded-[2.5rem] p-10 text-white relative overflow-hidden">
           <div className="relative z-10">
             <div className="flex items-center gap-2 text-[#FDC300] text-sm font-bold mb-4">
               <Clock className="w-4 h-4" /> Response time: Under 5 minutes
             </div>
             <h2 className="text-3xl font-black mb-4">Safety First. Always.</h2>
             <p className="text-gray-400 mb-8">
               If you are in an emergency situation or feel unsafe during a ride, please use the SOS button in the app or contact our emergency hotline immediately.
             </p>
             <button className="px-8 py-4 bg-[#D21F3C] text-white font-bold rounded-xl hover:bg-[#a8172d] transition-all">
               Emergency Contact
             </button>
           </div>
           <div className="absolute top-0 right-0 w-64 h-64 bg-[#D21F3C]/20 rounded-full blur-3xl -mr-32 -mt-32" />
        </div>
      </div>
      <Footer />
    </main>
  );
}
