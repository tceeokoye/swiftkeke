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
  ChevronRight,
  X
} from "lucide-react";
import OnaagaLogo from "@/components/OnaagaLogo";

const menuItems = [
  { icon: LayoutDashboard, label: "Overview", href: "/admin" },
  { icon: Users, label: "Riders", href: "/admin/riders" },
  { icon: ClipboardList, label: "Waitlist", href: "/admin/waitlist" },
  { icon: Wallet, label: "Finance & Analysis", href: "/admin/finance" },
];

interface AdminSidebarProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function AdminSidebar({ isOpen, onClose }: AdminSidebarProps) {
  const pathname = usePathname();

  return (
    <>
      {/* Backdrop */}
      {isOpen && (
        <div 
          className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40 md:hidden"
          onClick={onClose}
        />
      )}

      {/* Sidebar Drawer */}
      <aside className={`fixed left-0 top-0 h-screen bg-white border-r border-gray-100 flex flex-col z-50 transition-transform duration-300 ease-in-out ${
        isOpen ? 'translate-x-0' : '-translate-x-full md:translate-x-0'
      } w-72 shadow-2xl md:shadow-none`}>
        {/* Sidebar Header */}
        <div className="p-8 flex items-center justify-between">
          <Link href="/admin" className="flex items-center gap-3 group" onClick={onClose}>
            <div className="w-10 h-10 bg-[#F7F7F7] rounded-xl flex items-center justify-center shadow-sm group-hover:shadow-md transition-all">
              <OnaagaLogo size={28} />
            </div>
            <div>
              <h2 className="text-lg font-black text-[#1A1A1A] leading-none">Admin</h2>
              <span className="text-[10px] font-bold text-[#D21F3C] uppercase tracking-widest">Portal</span>
            </div>
          </Link>
          <button 
            onClick={onClose}
            className="w-8 h-8 flex items-center justify-center rounded-lg text-gray-400 hover:text-gray-600 hover:bg-gray-100 transition-colors md:hidden"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Navigation */}
        <nav className="flex-1 px-4 space-y-1">
          {menuItems.map((item) => {
            const isActive = pathname === item.href;
            return (
              <Link
                key={item.href}
                href={item.href}
                onClick={onClose}
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
            onClick={onClose}
            className="flex items-center gap-3 px-4 py-3 rounded-2xl text-gray-500 hover:bg-red-50 hover:text-red-600 transition-all font-bold text-sm"
          >
            <LogOut className="w-5 h-5" />
            <span>Sign Out</span>
          </Link>
        </div>
      </aside>
    </>
  );
}
