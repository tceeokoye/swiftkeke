"use client";

import { useState } from "react";
import { Menu, X } from "lucide-react";
import { usePathname } from "next/navigation";

import AdminSidebar from "@/components/admin/AdminSidebar";
import { Search, Bell, User } from "lucide-react";

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const isLoginPage = pathname === "/admin/login";

  if (isLoginPage) return <>{children}</>;

  return (
    <div className="min-h-screen bg-[#F7F7F7]">
      <AdminSidebar isOpen={sidebarOpen} onClose={() => setSidebarOpen(false)} />
      
      <div className="flex-1 md:pl-72 transition-all duration-300">
        {/* Top Header */}
        <header className="h-20 bg-white border-b border-gray-100 flex items-center justify-between px-6 md:px-10 sticky top-0 z-20">
          <div className="flex items-center gap-4">
            <button 
              onClick={() => setSidebarOpen(true)}
              className="md:hidden w-10 h-10 flex items-center justify-center rounded-xl bg-[#F7F7F7] text-gray-500 hover:text-[#D21F3C] transition-colors"
            >
              <Menu className="w-5 h-5" />
            </button>
            <div className="relative w-96 max-w-full hidden md:block">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
              <input 
                type="text" 
                placeholder="Search anything..." 
                className="w-full bg-[#F7F7F7] border-none rounded-xl py-2.5 pl-12 pr-4 text-sm focus:ring-2 focus:ring-[#D21F3C]/10 outline-none transition-all"
              />
            </div>
          </div>

          <div className="flex items-center gap-6">
            <button className="relative w-10 h-10 flex items-center justify-center rounded-xl bg-[#F7F7F7] text-gray-500 hover:text-[#D21F3C] transition-colors">
              <Bell className="w-5 h-5" />
              <span className="absolute top-2.5 right-2.5 w-2 h-2 bg-[#D21F3C] rounded-full border-2 border-white" />
            </button>
            <div className="flex items-center gap-3 pl-6 border-l border-gray-100">
              <div className="text-right hidden sm:block">
                <p className="text-sm font-black text-[#1A1A1A]">Admin User</p>
                <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">Super Admin</p>
              </div>
              <div className="w-10 h-10 rounded-xl bg-[#1A1A1A] flex items-center justify-center text-white">
                <User className="w-5 h-5" />
              </div>
            </div>
          </div>
        </header>

        {/* Main Content Area */}
        <main className="p-4 md:p-10">
          {children}
        </main>
      </div>
    </div>
  );
}
