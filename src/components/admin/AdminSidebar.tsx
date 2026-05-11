"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { 
  LayoutDashboard, 
  Users, 
  ClipboardList, 
  Wallet, 
  BarChart3, 
  Settings, 
  LogOut,
  ChevronRight
} from "lucide-react";
import BookRideLogo from "@/components/BookRideLogo";

const menuItems = [
  { icon: LayoutDashboard, label: "Overview", href: "/admin" },
  { icon: Users, label: "Riders", href: "/admin/riders" },
  { icon: ClipboardList, label: "Waitlist", href: "/admin/waitlist" },
  { icon: Wallet, label: "Finance & Analysis", href: "/admin/finance" },
];

export default function AdminSidebar() {
  const pathname = usePathname();

  return (
    <aside className="w-72 h-screen bg-white border-r border-gray-100 flex flex-col fixed left-0 top-0 z-30">
      {/* Sidebar Header */}
      <div className="p-8">
        <Link href="/admin" className="flex items-center gap-3 group">
          <div className="w-10 h-10 bg-[#F7F7F7] rounded-xl flex items-center justify-center shadow-sm group-hover:shadow-md transition-all">
            <BookRideLogo size={28} />
          </div>
          <div>
            <h2 className="text-lg font-black text-[#1A1A1A] leading-none">Admin</h2>
            <span className="text-[10px] font-bold text-[#D21F3C] uppercase tracking-widest">Portal</span>
          </div>
        </Link>
      </div>

      {/* Navigation */}
      <nav className="flex-1 px-4 space-y-1">
        {menuItems.map((item) => {
          const isActive = pathname === item.href;
          return (
            <Link
              key={item.href}
              href={item.href}
              className={`flex items-center justify-between px-4 py-3.5 rounded-2xl transition-all duration-200 group ${
                isActive 
                  ? "bg-[#D21F3C] text-white shadow-lg shadow-[#D21F3C]/20" 
                  : "text-gray-500 hover:bg-[#F7F7F7] hover:text-[#1A1A1A]"
              }`}
            >
              <div className="flex items-center gap-3">
                <item.icon className={`w-5 h-5 ${isActive ? "text-white" : "text-gray-400 group-hover:text-[#D21F3C]"}`} />
                <span className="font-bold text-sm">{item.label}</span>
              </div>
              {isActive && <ChevronRight className="w-4 h-4" />}
            </Link>
          );
        })}
      </nav>

      {/* Sidebar Footer */}
      <div className="p-6 border-t border-gray-50">
        <Link 
          href="/admin/login"
          className="flex items-center gap-3 px-4 py-3 rounded-2xl text-gray-500 hover:bg-red-50 hover:text-red-600 transition-all font-bold text-sm"
        >
          <LogOut className="w-5 h-5" />
          <span>Sign Out</span>
        </Link>
      </div>
    </aside>
  );
}
