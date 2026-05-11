"use client";

import { useState } from "react";
import Link from "next/link";
import { 
  Search, 
  Filter, 
  CheckCircle2, 
  XCircle, 
  Clock, 
  ChevronRight,
  Star,
  MapPin,
  Car
} from "lucide-react";

const riders = [
  { id: "101", name: "Chinedu Okafor", email: "chinedu@example.com", phone: "+234 801 111 2222", status: "Pending", city: "Enugu", rating: 0, rides: 0, joinDate: "2026-05-11" },
  { id: "102", name: "Amaka Eze", email: "amaka.e@example.com", phone: "+234 802 222 3333", status: "Approved", city: "Lagos", rating: 4.9, rides: 142, joinDate: "2026-04-15" },
  { id: "103", name: "Tunde Balogun", email: "tunde.b@example.com", phone: "+234 803 333 4444", status: "Reviewing", city: "Ibadan", rating: 0, rides: 0, joinDate: "2026-05-10" },
  { id: "104", name: "Ibrahim Musa", email: "ibrahim@example.com", phone: "+234 804 444 5555", status: "Approved", city: "Abuja", rating: 4.7, rides: 89, joinDate: "2026-04-20" },
  { id: "105", name: "Rita Peters", email: "rita.p@example.com", phone: "+234 805 555 6666", status: "Rejected", city: "Lagos", rating: 0, rides: 0, joinDate: "2026-05-01" },
];

export default function RidersPage() {
  const [filter, setFilter] = useState("All");

  const getStatusStyle = (status: string) => {
    switch (status) {
      case "Approved": return "bg-green-50 text-green-600 border-green-100";
      case "Pending": return "bg-yellow-50 text-yellow-600 border-yellow-100";
      case "Reviewing": return "bg-blue-50 text-blue-600 border-blue-100";
      case "Rejected": return "bg-red-50 text-red-600 border-red-100";
      default: return "bg-gray-50 text-gray-600 border-gray-100";
    }
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case "Approved": return <CheckCircle2 className="w-3 h-3" />;
      case "Pending": return <Clock className="w-3 h-3" />;
      case "Reviewing": return <Clock className="w-3 h-3" />;
      case "Rejected": return <XCircle className="w-3 h-3" />;
      default: return null;
    }
  };

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-3xl font-black text-[#1A1A1A]">Rider Management</h1>
          <p className="text-gray-500 font-medium">Approve applications and manage active riders.</p>
        </div>
      </div>

      {/* Stats Cards for Riders */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
        <div className="bg-white p-6 rounded-[2rem] border border-gray-50 shadow-sm">
          <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-1">Total Active</p>
          <h3 className="text-2xl font-black text-[#1A1A1A]">842</h3>
        </div>
        <div className="bg-white p-6 rounded-[2rem] border border-gray-50 shadow-sm">
          <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-1">Pending Review</p>
          <h3 className="text-2xl font-black text-[#D21F3C]">24</h3>
        </div>
        <div className="bg-white p-6 rounded-[2rem] border border-gray-50 shadow-sm">
          <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-1">Avg. Acceptance</p>
          <h3 className="text-2xl font-black text-[#1A1A1A]">94%</h3>
        </div>
      </div>

      {/* Filters & Tabs */}
      <div className="bg-white p-4 rounded-[2rem] shadow-sm border border-gray-50 flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="flex bg-[#F7F7F7] p-1.5 rounded-2xl w-full md:w-auto">
          {["All", "Pending", "Approved", "Rejected"].map((tab) => (
            <button
              key={tab}
              onClick={() => setFilter(tab)}
              className={`flex-1 md:flex-none px-6 py-2 rounded-xl text-xs font-bold transition-all ${filter === tab ? "bg-white text-[#D21F3C] shadow-sm" : "text-gray-400 hover:text-[#1A1A1A]"}`}
            >
              {tab}
            </button>
          ))}
        </div>
        <div className="relative flex-1 w-full max-w-md">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
          <input 
            type="text" 
            placeholder="Search riders..." 
            className="w-full bg-[#F7F7F7] border-none rounded-xl py-3 pl-12 pr-4 text-sm font-medium focus:ring-2 focus:ring-[#D21F3C]/10 outline-none transition-all"
          />
        </div>
      </div>

      {/* Riders Table */}
      <div className="bg-white rounded-[2.5rem] shadow-sm border border-gray-50 overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-left">
            <thead>
              <tr className="border-b border-gray-50 bg-[#F7F7F7]/50">
                <th className="px-8 py-5 text-xs font-bold text-gray-400 uppercase tracking-widest">Rider Information</th>
                <th className="px-8 py-5 text-xs font-bold text-gray-400 uppercase tracking-widest">Performance</th>
                <th className="px-8 py-5 text-xs font-bold text-gray-400 uppercase tracking-widest">Location</th>
                <th className="px-8 py-5 text-xs font-bold text-gray-400 uppercase tracking-widest">Status</th>
                <th className="px-8 py-5 text-xs font-bold text-gray-400 uppercase tracking-widest text-center">Action</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-50">
              {riders.filter(r => filter === "All" || r.status === filter).map((rider) => (
                <tr key={rider.id} className="hover:bg-[#F7F7F7]/30 transition-colors group">
                  <td className="px-8 py-5">
                    <div className="flex items-center gap-4">
                      <div className="w-10 h-10 bg-[#D21F3C]/5 rounded-xl flex items-center justify-center font-bold text-[#D21F3C]">
                        {rider.name.charAt(0)}
                      </div>
                      <div>
                        <p className="text-sm font-bold text-[#1A1A1A]">{rider.name}</p>
                        <p className="text-[10px] text-gray-400 font-medium tracking-tight">Joined {rider.joinDate}</p>
                      </div>
                    </div>
                  </td>
                  <td className="px-8 py-5">
                    {rider.status === "Approved" ? (
                      <div className="space-y-1">
                        <div className="flex items-center gap-1 text-[#FDC300]">
                          <Star className="w-3 h-3 fill-current" />
                          <span className="text-xs font-black text-[#1A1A1A]">{rider.rating}</span>
                        </div>
                        <p className="text-[10px] text-gray-400 font-bold">{rider.rides} Rides completed</p>
                      </div>
                    ) : (
                      <span className="text-[10px] font-bold text-gray-300 uppercase tracking-widest italic">New Applicant</span>
                    )}
                  </td>
                  <td className="px-8 py-5">
                    <div className="flex items-center gap-2 text-xs font-semibold text-gray-600">
                      <MapPin className="w-3.5 h-3.5 text-[#D21F3C]" /> {rider.city}
                    </div>
                  </td>
                  <td className="px-8 py-5">
                    <div className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg border text-[10px] font-black uppercase tracking-wider ${getStatusStyle(rider.status)}`}>
                      {getStatusIcon(rider.status)}
                      {rider.status}
                    </div>
                  </td>
                  <td className="px-8 py-5 text-center">
                    <Link 
                      href={`/admin/riders/${rider.id}`}
                      className="inline-flex items-center justify-center w-8 h-8 rounded-lg bg-[#F7F7F7] text-gray-400 hover:bg-[#D21F3C] hover:text-white transition-all shadow-sm"
                    >
                      <ChevronRight className="w-4 h-4" />
                    </Link>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
