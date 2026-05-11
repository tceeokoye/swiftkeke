"use client";

import Link from "next/link";
import { 
  Users, 
  Car, 
  TrendingUp, 
  DollarSign, 
  ArrowUpRight, 
  ArrowDownRight,
  Clock,
  MapPin
} from "lucide-react";

const stats = [
  { label: "Total Riders", value: "1,284", change: "+12.5%", positive: true, icon: Car },
  { label: "Waitlist Users", value: "8,492", change: "+24.2%", positive: true, icon: Users },
  { label: "Total Revenue", value: "₦2.4M", change: "+8.1%", positive: true, icon: DollarSign },
  { label: "Avg. Ride Rating", value: "4.8", change: "-0.2%", positive: false, icon: TrendingUp },
];

const recentApplications = [
  { id: "1", name: "Chinedu Okafor", email: "chinedu@example.com", city: "Enugu", status: "Pending", time: "2h ago" },
  { id: "2", name: "Amaka Eze", email: "amaka@example.com", city: "Lagos", status: "Pending", time: "5h ago" },
  { id: "3", name: "Tunde Balogun", email: "tunde@example.com", city: "Ibadan", status: "Reviewing", time: "8h ago" },
];

export default function AdminDashboard() {
  return (
    <div className="space-y-10">
      {/* Title */}
      <div>
        <h1 className="text-3xl font-black text-[#1A1A1A]">Dashboard Overview</h1>
        <p className="text-gray-500 font-medium">Welcome back, Admin. Here&apos;s what&apos;s happening today.</p>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat) => (
          <div key={stat.label} className="bg-white p-6 rounded-[2rem] shadow-sm border border-gray-50 hover:shadow-md transition-shadow">
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

      {/* Main Grid */}
      <div className="grid lg:grid-cols-3 gap-8">
        {/* Chart Simulation */}
        <div className="lg:col-span-2 bg-white p-8 rounded-[2.5rem] shadow-sm border border-gray-50">
          <div className="flex items-center justify-between mb-8">
            <h3 className="text-lg font-black text-[#1A1A1A]">Growth Analysis</h3>
            <select className="bg-[#F7F7F7] border-none text-xs font-bold px-4 py-2 rounded-xl outline-none">
              <option>Last 7 Days</option>
              <option>Last 30 Days</option>
            </select>
          </div>
          <div className="h-64 flex items-end gap-2 px-2">
            {[40, 65, 45, 90, 75, 55, 85, 40, 60, 95, 70, 80].map((h, i) => (
              <div key={i} className="flex-1 bg-gray-50 rounded-t-xl relative group">
                <div 
                  className="absolute bottom-0 left-0 right-0 bg-[#D21F3C] rounded-t-xl transition-all duration-1000 group-hover:bg-[#1A1A1A]" 
                  style={{ height: `${h}%` }}
                />
                <div className="absolute -top-8 left-1/2 -translate-x-1/2 bg-[#1A1A1A] text-white text-[10px] font-bold px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity">
                  {h}%
                </div>
              </div>
            ))}
          </div>
          <div className="flex justify-between mt-4 px-2 text-[10px] font-bold text-gray-400 uppercase tracking-widest">
            <span>Jan</span>
            <span>Mar</span>
            <span>May</span>
            <span>Jul</span>
            <span>Sep</span>
            <span>Nov</span>
          </div>
        </div>

        {/* Recent Applications */}
        <div className="bg-white p-8 rounded-[2.5rem] shadow-sm border border-gray-50">
          <h3 className="text-lg font-black text-[#1A1A1A] mb-6">Pending Riders</h3>
          <div className="space-y-6">
            {recentApplications.map((app) => (
              <Link key={app.id} href={`/admin/riders/${app.id}`} className="block">
                <div className="flex items-center justify-between group cursor-pointer">
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 bg-[#D21F3C]/5 rounded-xl flex items-center justify-center font-bold text-[#D21F3C]">
                      {app.name.charAt(0)}
                    </div>
                    <div>
                      <p className="text-sm font-bold text-[#1A1A1A] group-hover:text-[#D21F3C] transition-colors">{app.name}</p>
                      <p className="text-[10px] text-gray-400 flex items-center gap-1 font-medium">
                        <MapPin className="w-3 h-3" /> {app.city} • {app.time}
                      </p>
                    </div>
                  </div>
                  <div className="px-3 py-1 bg-yellow-50 text-yellow-600 text-[10px] font-bold rounded-lg border border-yellow-100">
                    {app.status}
                  </div>
                </div>
              </Link>
            ))}
          </div>
          <button className="w-full mt-8 py-3 rounded-xl bg-[#F7F7F7] text-gray-500 text-sm font-bold hover:bg-[#D21F3C]/5 hover:text-[#D21F3C] transition-all">
            <Link href="/admin/riders?filter=Pending" className="block w-full h-full flex items-center justify-center">
              View All Applications
            </Link>
          </button>
        </div>
      </div>
    </div>
  );
}
