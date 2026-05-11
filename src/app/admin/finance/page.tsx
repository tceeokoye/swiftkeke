"use client";

import { 
  DollarSign, 
  TrendingUp, 
  ArrowUpRight, 
  ArrowDownRight, 
  Wallet, 
  CreditCard, 
  Activity,
  Calendar,
  Download,
  Clock
} from "lucide-react";

const financeStats = [
  { label: "Total Revenue", value: "₦12.8M", change: "+15.2%", positive: true, icon: DollarSign },
  { label: "Net Profit", value: "₦4.2M", change: "+10.5%", positive: true, icon: Activity },
  { label: "Pending Payouts", value: "₦1.8M", change: "+5.1%", positive: false, icon: Clock },
  { label: "Active Wallets", value: "842", change: "+8.4%", positive: true, icon: Wallet },
];

const recentPayouts = [
  { id: "P-1", rider: "Chinedu Okafor", amount: "₦25,000", status: "Processed", date: "May 10, 2026" },
  { id: "P-2", rider: "Amaka Eze", amount: "₦18,200", status: "Pending", date: "May 11, 2026" },
  { id: "P-3", rider: "Tunde Balogun", amount: "₦32,500", status: "Processing", date: "May 11, 2026" },
];

export default function FinancePage() {
  return (
    <div className="space-y-10">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-3xl font-black text-[#1A1A1A]">Finance & Analysis</h1>
          <p className="text-gray-500 font-medium">Track revenue, manage payouts and monitor platform growth.</p>
        </div>
        <div className="flex gap-3">
           <button className="flex items-center gap-2 px-6 py-3 bg-white border border-gray-100 text-[#1A1A1A] font-bold rounded-2xl hover:bg-[#F7F7F7] transition-all shadow-sm">
             <Calendar className="w-4 h-4" /> Custom Range
           </button>
           <button className="flex items-center gap-2 px-6 py-3 bg-[#D21F3C] text-white font-bold rounded-2xl hover:bg-[#a8172d] transition-all shadow-lg shadow-[#D21F3C]/20">
             <Download className="w-4 h-4" /> Download Report
           </button>
        </div>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {financeStats.map((stat) => (
          <div key={stat.label} className="bg-white p-6 rounded-[2rem] shadow-sm border border-gray-50">
            <div className="flex items-center justify-between mb-4">
              <div className="w-12 h-12 bg-[#F7F7F7] rounded-2xl flex items-center justify-center">
                <stat.icon className="w-6 h-6 text-[#D21F3C]" />
              </div>
              <div className={`flex items-center gap-1 text-xs font-bold px-2 py-1 rounded-lg ${stat.positive ? "bg-green-50 text-green-600" : "bg-red-50 text-red-600"}`}>
                {stat.positive ? <ArrowUpRight className="w-3 h-3" /> : <ArrowDownRight className="w-3 h-3" />}
                {stat.change}
              </div>
            </div>
            <p className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-1">{stat.label}</p>
            <h3 className="text-2xl font-black text-[#1A1A1A]">{stat.value}</h3>
          </div>
        ))}
      </div>

      {/* Analysis Grid */}
      <div className="grid lg:grid-cols-3 gap-8">
         {/* Revenue Chart Simulation */}
         <div className="lg:col-span-2 bg-white p-8 rounded-[2.5rem] shadow-sm border border-gray-50">
            <h3 className="text-lg font-black text-[#1A1A1A] mb-8">Revenue Stream</h3>
            <div className="h-64 flex items-end gap-3 px-2">
               {[30, 45, 25, 60, 40, 75, 55, 90, 65, 80, 50, 95].map((h, i) => (
                 <div key={i} className="flex-1 space-y-2">
                    <div className="flex flex-col-reverse h-full bg-[#F7F7F7] rounded-full overflow-hidden">
                       <div className="bg-[#D21F3C]" style={{ height: `${h}%` }} />
                       <div className="bg-[#1A1A1A]/10" style={{ height: `${h/2}%` }} />
                    </div>
                 </div>
               ))}
            </div>
            <div className="flex justify-between mt-6 px-2 text-[10px] font-bold text-gray-400 uppercase tracking-widest">
               <span>Mon</span>
               <span>Tue</span>
               <span>Wed</span>
               <span>Thu</span>
               <span>Fri</span>
               <span>Sat</span>
               <span>Sun</span>
            </div>
         </div>

         {/* Payouts Control */}
         <div className="bg-[#1A1A1A] p-8 rounded-[2.5rem] shadow-xl text-white">
            <h3 className="text-lg font-black mb-6">Upcoming Payouts</h3>
            <div className="space-y-6 mb-8">
               {recentPayouts.map((p) => (
                 <div key={p.id} className="flex items-center justify-between">
                    <div>
                       <p className="text-sm font-bold">{p.rider}</p>
                       <p className="text-[10px] text-white/40 font-medium">{p.date}</p>
                    </div>
                    <div className="text-right">
                       <p className="text-sm font-black text-[#D21F3C]">{p.amount}</p>
                       <p className={`text-[10px] font-bold uppercase tracking-widest ${p.status === "Processed" ? "text-green-400" : "text-yellow-400"}`}>{p.status}</p>
                    </div>
                 </div>
               ))}
            </div>
            <button className="w-full py-4 bg-[#D21F3C] text-white font-bold rounded-2xl shadow-lg shadow-[#D21F3C]/20 hover:bg-[#a8172d] transition-all flex items-center justify-center gap-2">
               <CreditCard className="w-5 h-5" /> Process All Payouts
            </button>
         </div>
      </div>
    </div>
  );
}

