"use client";

import { use, useState } from "react";
import Link from "next/link";
import { 
  ArrowLeft, 
  Star, 
  MapPin, 
  Phone, 
  Mail, 
  ShieldCheck, 
  Wallet, 
  TrendingUp, 
  FileText, 
  ExternalLink,
  CheckCircle,
  XCircle,
  Clock,
  History
} from "lucide-react";

// Mock data generator for details
const getRiderDetails = (id: string) => ({
  id,
  name: id === "101" ? "Chinedu Okafor" : "Amaka Eze",
  status: id === "101" ? "Pending" : "Approved",
  email: id === "101" ? "chinedu@example.com" : "amaka.e@example.com",
  phone: id === "101" ? "+234 801 111 2222" : "+234 802 222 3333",
  address: "15 Adeola Crescent, Ikeja, Lagos",
  joinDate: "May 11, 2026",
  vehicle: {
    model: "TVS King Deluxe",
    plate: "ABC-123-XY",
    color: "Yellow",
    year: "2024"
  },
  ranking: {
    rating: 4.85,
    acceptanceRate: 98,
    cancellationRate: 2,
    totalRides: 452
  },
  wallet: {
    balance: "₦42,500.00",
    pending: "₦8,200.00",
    totalEarned: "₦840,000.00"
  },
  documents: [
    { name: "Driver's License", status: "Verified", date: "2026-05-10" },
    { name: "NIN Identification", status: "Verified", date: "2026-05-10" },
    { name: "Proof of Address", status: "Pending", date: "2026-05-11" },
    { name: "Vehicle Registration", status: "Verified", date: "2026-05-10" },
  ],
  transactions: [
    { id: "TX-1", type: "Ride Earnings", amount: "+₦1,200.00", date: "Today, 10:45 AM", status: "Completed" },
    { id: "TX-2", type: "Ride Earnings", amount: "+₦850.00", date: "Today, 09:12 AM", status: "Completed" },
    { id: "TX-3", type: "Withdrawal", amount: "-₦20,000.00", date: "Yesterday", status: "Completed" },
    { id: "TX-4", type: "Ride Earnings", amount: "+₦2,100.00", date: "Yesterday", status: "Completed" },
  ]
});

export default function RiderDetailPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = use(params);
  const rider = getRiderDetails(id);
  const [activeTab, setActiveTab] = useState("overview");

  return (
    <div className="space-y-8 pb-20">
      {/* Breadcrumb & Navigation */}
      <div className="flex items-center justify-between">
        <Link href="/admin/riders" className="flex items-center gap-2 text-sm font-bold text-gray-400 hover:text-[#D21F3C] transition-colors group">
          <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" /> Back to Riders
        </Link>
        <div className="flex gap-3">
          {rider.status.toLowerCase() !== "approved" && (
            <button className="px-5 py-2.5 bg-red-50 text-red-600 font-bold text-xs rounded-xl hover:bg-red-100 transition-all border border-red-100">Reject</button>
          )}
          <button className="px-5 py-2.5 bg-orange-50 text-orange-600 font-bold text-xs rounded-xl hover:bg-orange-100 transition-all border border-orange-100">Suspend</button>
          {rider.status.toLowerCase() !== "approved" && (
            <button className="px-6 py-2.5 bg-[#D21F3C] text-white font-bold text-xs rounded-xl hover:bg-[#a8172d] transition-all shadow-lg shadow-[#D21F3C]/20">Approve</button>
          )}
        </div>
      </div>

      {/* Header Profile Card */}
      <div className="bg-white rounded-[2.5rem] shadow-sm border border-gray-50 overflow-hidden">
        <div className="h-32 bg-gradient-to-r from-[#1A1A1A] to-[#D21F3C]" />
        <div className="px-10 pb-10 -mt-12 flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="flex flex-col md:flex-row items-end gap-6">
            <div className="w-32 h-32 rounded-[2rem] bg-white p-2 shadow-xl relative">
              <div className="w-full h-full rounded-[1.5rem] bg-[#F7F7F7] flex items-center justify-center font-black text-4xl text-[#D21F3C]">
                {rider.name.charAt(0)}
              </div>
              <div className="absolute -bottom-2 -right-2 w-10 h-10 bg-green-500 rounded-2xl border-4 border-white flex items-center justify-center">
                <ShieldCheck className="w-5 h-5 text-white" />
              </div>
            </div>
            <div className="pb-2">
              <div className="flex items-center gap-3 mb-1">
                <h1 className="text-3xl font-black text-[#1A1A1A]">{rider.name}</h1>
                <span className="px-3 py-1 bg-green-50 text-green-600 text-[10px] font-black rounded-lg border border-green-100 uppercase tracking-widest">{rider.status}</span>
              </div>
              <div className="flex flex-wrap gap-4 text-xs font-bold text-gray-400 uppercase tracking-widest">
                <span className="flex items-center gap-1.5"><Mail className="w-3.5 h-3.5 text-[#D21F3C]" /> {rider.email}</span>
                <span className="flex items-center gap-1.5"><Phone className="w-3.5 h-3.5 text-[#D21F3C]" /> {rider.phone}</span>
                <span className="flex items-center gap-1.5"><MapPin className="w-3.5 h-3.5 text-[#D21F3C]" /> Lagos, NG</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Tabs */}
      <div className="flex bg-white p-1.5 rounded-[2rem] shadow-sm border border-gray-50 w-full sm:w-max">
        {["Overview", "Finance & Wallet", "Documents", "Ride History"].map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab.toLowerCase())}
            className={`px-8 py-3 rounded-[1.5rem] text-xs font-black transition-all ${activeTab === tab.toLowerCase() ? "bg-[#1A1A1A] text-white shadow-lg" : "text-gray-400 hover:text-[#1A1A1A]"}`}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* Dynamic Content */}
      <div className="grid lg:grid-cols-3 gap-8">
        
        {/* Left Column: Stats & Vehicle */}
        <div className="space-y-8 lg:col-span-1">
          {/* Ranking Stats */}
          <div className="bg-white p-8 rounded-[2.5rem] shadow-sm border border-gray-50">
            <h3 className="text-lg font-black text-[#1A1A1A] mb-6 flex items-center gap-2">
              <Star className="w-5 h-5 text-[#FDC300] fill-current" /> Ranking & Performance
            </h3>
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-[#F7F7F7] p-4 rounded-2xl">
                <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-1">Avg Rating</p>
                <div className="flex items-end gap-1">
                  <span className="text-xl font-black text-[#1A1A1A]">{rider.ranking.rating}</span>
                  <span className="text-[10px] font-bold text-gray-400 mb-0.5">/ 5.0</span>
                </div>
              </div>
              <div className="bg-[#F7F7F7] p-4 rounded-2xl">
                <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-1">Acceptance</p>
                <span className="text-xl font-black text-[#1A1A1A]">{rider.ranking.acceptanceRate}%</span>
              </div>
              <div className="bg-[#F7F7F7] p-4 rounded-2xl">
                <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-1">Cancellations</p>
                <span className="text-xl font-black text-red-500">{rider.ranking.cancellationRate}%</span>
              </div>
              <div className="bg-[#F7F7F7] p-4 rounded-2xl">
                <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-1">Total Rides</p>
                <span className="text-xl font-black text-[#1A1A1A]">{rider.ranking.totalRides}</span>
              </div>
            </div>
          </div>

          {/* Vehicle Info */}
          <div className="bg-white p-8 rounded-[2.5rem] shadow-sm border border-gray-50">
            <h3 className="text-lg font-black text-[#1A1A1A] mb-6 flex items-center gap-2">
              <ShieldCheck className="w-5 h-5 text-[#D21F3C]" /> Vehicle Details
            </h3>
            <div className="space-y-4">
              {[
                { label: "Model", value: rider.vehicle.model },
                { label: "Plate Number", value: rider.vehicle.plate },
                { label: "Color", value: rider.vehicle.color },
                { label: "Year", value: rider.vehicle.year },
              ].map(({ label, value }) => (
                <div key={label} className="flex justify-between items-center py-1">
                  <span className="text-xs font-bold text-gray-400 uppercase tracking-widest">{label}</span>
                  <span className="text-sm font-bold text-[#1A1A1A]">{value}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Right Column: Tab Specific Content */}
        <div className="lg:col-span-2">
          {activeTab === "overview" && (
             <div className="space-y-8">
                {/* Quick Wallet Summary */}
                <div className="bg-[#1A1A1A] p-8 rounded-[2.5rem] shadow-xl text-white relative overflow-hidden">
                  <Wallet className="absolute top-1/2 right-8 -translate-y-1/2 w-48 h-48 text-white/5 pointer-events-none" />
                  <p className="text-xs font-bold text-white/50 uppercase tracking-widest mb-2">Available Wallet Balance</p>
                  <h2 className="text-4xl font-black mb-6">{rider.wallet.balance}</h2>
                  <div className="flex gap-4">
                    <button className="px-6 py-2.5 bg-white/10 text-white font-bold text-xs rounded-xl hover:bg-white/20 transition-all">View History</button>
                  </div>
                </div>

                {/* Documents Grid */}
                <div className="bg-white p-8 rounded-[2.5rem] shadow-sm border border-gray-50">
                   <h3 className="text-lg font-black text-[#1A1A1A] mb-6">Verification Documents</h3>
                   <div className="grid sm:grid-cols-2 gap-4">
                      {rider.documents.map((doc) => (
                        <div key={doc.name} className="p-4 bg-[#F7F7F7] rounded-2xl flex items-center justify-between group cursor-pointer hover:bg-gray-100 transition-all">
                          <div className="flex items-center gap-3">
                            <div className="w-10 h-10 bg-white rounded-xl flex items-center justify-center">
                              <FileText className="w-5 h-5 text-gray-400 group-hover:text-[#D21F3C]" />
                            </div>
                            <div>
                              <p className="text-sm font-bold text-[#1A1A1A]">{doc.name}</p>
                              <p className={`text-[10px] font-black uppercase tracking-wider ${doc.status === "Verified" ? "text-green-500" : "text-yellow-500"}`}>{doc.status}</p>
                            </div>
                          </div>
                          <ExternalLink className="w-4 h-4 text-gray-300 group-hover:text-[#1A1A1A] transition-colors" />
                        </div>
                      ))}
                   </div>
                </div>
             </div>
          )}

          {activeTab === "finance & wallet" && (
             <div className="bg-white rounded-[2.5rem] shadow-sm border border-gray-50 overflow-hidden">
                <div className="p-8 border-b border-gray-50">
                  <h3 className="text-lg font-black text-[#1A1A1A]">Transaction History</h3>
                </div>
                <div className="divide-y divide-gray-50">
                  {rider.transactions.map((tx) => (
                    <div key={tx.id} className="p-6 flex items-center justify-between hover:bg-[#F7F7F7]/30 transition-all">
                       <div className="flex items-center gap-4">
                          <div className={`w-10 h-10 rounded-xl flex items-center justify-center ${tx.amount.startsWith("+") ? "bg-green-50 text-green-500" : "bg-red-50 text-red-500"}`}>
                             {tx.amount.startsWith("+") ? <TrendingUp className="w-5 h-5" /> : <History className="w-5 h-5" />}
                          </div>
                          <div>
                            <p className="text-sm font-bold text-[#1A1A1A]">{tx.type}</p>
                            <p className="text-xs text-gray-400 font-medium">{tx.date}</p>
                          </div>
                       </div>
                       <div className="text-right">
                          <p className={`text-sm font-black ${tx.amount.startsWith("+") ? "text-green-600" : "text-red-600"}`}>{tx.amount}</p>
                          <p className="text-[10px] font-bold text-gray-300 uppercase tracking-widest">{tx.status}</p>
                       </div>
                    </div>
                  ))}
                </div>
             </div>
          )}

          {(activeTab === "documents" || activeTab === "ride history") && (
            <div className="bg-white p-20 rounded-[2.5rem] shadow-sm border border-gray-50 flex flex-col items-center text-center">
               <div className="w-20 h-20 bg-[#F7F7F7] rounded-3xl flex items-center justify-center mb-6 text-gray-300">
                  <History className="w-10 h-10" />
               </div>
               <h3 className="text-xl font-black text-[#1A1A1A] mb-2">Detailed {activeTab}</h3>
               <p className="text-gray-400 max-w-xs text-sm font-medium">This section will contain detailed chronological logs and high-resolution document previews.</p>
            </div>
          )}
        </div>

      </div>
    </div>
  );
}
