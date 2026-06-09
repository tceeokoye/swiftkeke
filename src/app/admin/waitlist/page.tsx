"use client";

import { useState } from "react";
import { Search, Filter, Download, MoreHorizontal, Mail, Phone, Calendar } from "lucide-react";
import ConfirmModal from "@/components/admin/ConfirmModal";
import { ToastContainer } from "@/components/admin/Toast";

const waitlist = [
  { id: "1", name: "Sarah Johnson", email: "sarah.j@example.com", phone: "+234 801 234 5678", date: "2026-05-10", city: "Enugu" },
  { id: "2", name: "David Okoro", email: "david.o@example.com", phone: "+234 802 345 6789", date: "2026-05-09", city: "Lagos" },
  { id: "3", name: "Blessing Abraham", email: "bless.a@example.com", phone: "+234 803 456 7890", date: "2026-05-09", city: "Abuja" },
  { id: "4", name: "Ifeanyi Nnamdi", email: "ife.n@example.com", phone: "+234 804 567 8901", date: "2026-05-08", city: "Port Harcourt" },
  { id: "5", name: "Chinonso Eze", email: "nonso.e@example.com", phone: "+234 805 678 9012", date: "2026-05-07", city: "Enugu" },
  { id: "6", name: "Zainab Usman", email: "zainab.u@example.com", phone: "+234 806 789 0123", date: "2026-05-06", city: "Kano" },
];

export default function WaitlistPage() {
  const [searchTerm, setSearchTerm] = useState("");
  const [filterCity, setFilterCity] = useState("All");
  const [waitlistData, setWaitlistData] = useState(waitlist);
  const [confirmModal, setConfirmModal] = useState<{
    isOpen: boolean;
    title: string;
    message: string;
    action: () => void;
    variant: "danger" | "warning" | "success";
  } | null>(null);
  const [toasts, setToasts] = useState<Array<{ id: string; message: string; type: "success" | "error" | "warning" }>>([]);

  const addToast = (message: string, type: "success" | "error" | "warning") => {
    const toastId = Date.now().toString();
    setToasts((prev: any[]) => [...prev, { id: toastId, message, type }]);
  };

  const removeToast = (id: string) => {
    setToasts((prev: any[]) => prev.filter(toast => toast.id !== id));
  };

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-3xl font-black text-[#1A1A1A]">Passenger Waitlist</h1>
          <p className="text-gray-500 font-medium">Manage and export users waiting for launch.</p>
        </div>
        <button 
          onClick={() => {
            const csvContent = "data:text/csv;charset=utf-8," + 
              "Name,Email,Phone,City,Date Joined\n" +
              waitlistData
                .filter(user => 
                  searchTerm === "" || 
                  user.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
                  user.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
                  user.city.toLowerCase().includes(searchTerm.toLowerCase())
                )
                .filter(user => filterCity === "All" || user.city === filterCity)
                .map(user => `${user.name},${user.email},${user.phone},${user.city},${user.date}`)
                .join("\n");
            
            const encodedUri = encodeURI(csvContent);
            const link = document.createElement("a");
            link.setAttribute("href", encodedUri);
            link.setAttribute("download", "waitlist.csv");
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);
          }}
          className="flex items-center justify-center gap-2 px-6 py-3 bg-[#1A1A1A] text-white font-bold rounded-2xl hover:bg-[#DE2910] transition-all shadow-lg shadow-black/10"
        >
          <Download className="w-4 h-4" /> Export CSV
        </button>
      </div>

      {/* Filters & Search */}
      <div className="bg-white p-4 rounded-[2rem] shadow-sm border border-gray-50 flex flex-col md:flex-row items-center gap-4">
        <div className="relative flex-1 w-full">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
          <input 
            type="text" 
            placeholder="Search by name, email or city..." 
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full bg-[#F7F7F7] border-none rounded-xl py-3 pl-12 pr-4 text-sm font-medium focus:ring-2 focus:ring-[#DE2910]/10 outline-none transition-all"
          />
        </div>
        <button className="flex items-center gap-2 px-5 py-3 bg-[#F7F7F7] text-gray-500 font-bold text-sm rounded-xl hover:bg-gray-100 transition-all relative">
          <Filter className="w-4 h-4" /> Filter: {filterCity}
          <select 
            value={filterCity}
            onChange={(e) => setFilterCity(e.target.value)}
            className="absolute inset-0 opacity-0 cursor-pointer"
          >
            <option value="All">All Cities</option>
            <option value="Enugu">Enugu</option>
            <option value="Lagos">Lagos</option>
            <option value="Abuja">Abuja</option>
            <option value="Port Harcourt">Port Harcourt</option>
            <option value="Kano">Kano</option>
          </select>
        </button>
      </div>

      {/* Table */}
      <div className="bg-white rounded-[2.5rem] shadow-sm border border-gray-50 overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-left">
            <thead>
              <tr className="border-b border-gray-50 bg-[#F7F7F7]/50">
                <th className="px-8 py-5 text-xs font-bold text-gray-400 uppercase tracking-widest">Name & Email</th>
                <th className="px-8 py-5 text-xs font-bold text-gray-400 uppercase tracking-widest">Phone</th>
                <th className="px-8 py-5 text-xs font-bold text-gray-400 uppercase tracking-widest">City</th>
                <th className="px-8 py-5 text-xs font-bold text-gray-400 uppercase tracking-widest">Date Joined</th>
                <th className="px-8 py-5 text-xs font-bold text-gray-400 uppercase tracking-widest text-center">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-50">
              {waitlistData
                .filter(user => 
                  searchTerm === "" || 
                  user.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
                  user.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
                  user.city.toLowerCase().includes(searchTerm.toLowerCase())
                )
                .filter(user => filterCity === "All" || user.city === filterCity)
                .map((user) => (
                <tr key={user.id} className="hover:bg-[#F7F7F7]/30 transition-colors group">
                  <td className="px-8 py-5">
                    <div className="flex items-center gap-4">
                      <div className="w-10 h-10 bg-[#DE2910]/5 rounded-xl flex items-center justify-center font-bold text-[#DE2910]">
                        {user.name.charAt(0)}
                      </div>
                      <div>
                        <p className="text-sm font-bold text-[#1A1A1A]">{user.name}</p>
                        <p className="text-xs text-gray-400 font-medium flex items-center gap-1">
                          <Mail className="w-3 h-3" /> {user.email}
                        </p>
                      </div>
                    </div>
                  </td>
                  <td className="px-8 py-5">
                    <p className="text-sm font-semibold text-gray-600 flex items-center gap-2">
                      <Phone className="w-3.5 h-3.5 text-[#DE2910]" /> {user.phone}
                    </p>
                  </td>
                  <td className="px-8 py-5">
                    <span className="px-3 py-1 bg-gray-100 text-gray-600 text-[10px] font-bold rounded-lg border border-gray-200 uppercase tracking-wider">
                      {user.city}
                    </span>
                  </td>
                  <td className="px-8 py-5">
                    <p className="text-sm font-semibold text-gray-600 flex items-center gap-2">
                      <Calendar className="w-3.5 h-3.5 text-gray-400" /> {user.date}
                    </p>
                  </td>
                  <td className="px-8 py-5 text-center">
                    <button 
                      onClick={() => {
                        setConfirmModal({
                          isOpen: true,
                          title: "Suspend User",
                          message: `Are you sure you want to suspend ${user.name}? They will be removed from the waitlist.`,
                          action: () => {
                            setWaitlistData((prev: any[]) => prev.filter(u => u.id !== user.id));
                            addToast("User suspended from waitlist", "warning");
                            setConfirmModal(null);
                          },
                          variant: "warning"
                        });
                      }}
                      className="px-4 py-1.5 bg-red-50 text-red-600 hover:bg-red-100 rounded-lg text-[10px] font-bold uppercase tracking-wider transition-colors border border-red-100"
                    >
                      Suspend
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Pagination */}
        <div className="px-8 py-6 bg-[#F7F7F7]/50 border-t border-gray-50 flex items-center justify-between">
          <p className="text-xs font-bold text-gray-400 uppercase tracking-widest">Showing 6 of 8,492 users</p>
          <div className="flex gap-2">
            <button className="px-4 py-2 bg-white border border-gray-200 rounded-lg text-xs font-bold text-gray-400 hover:border-[#DE2910] hover:text-[#DE2910] transition-all disabled:opacity-50" disabled>Previous</button>
            <button className="px-4 py-2 bg-white border border-gray-200 rounded-lg text-xs font-bold text-[#DE2910] hover:bg-[#DE2910] hover:text-white transition-all">Next</button>
          </div>
        </div>
      </div>

      {/* Confirm Modal */}
      {confirmModal && (
        <ConfirmModal
          isOpen={confirmModal.isOpen}
          title={confirmModal.title}
          message={confirmModal.message}
          onConfirm={confirmModal.action}
          onCancel={() => setConfirmModal(null)}
          variant={confirmModal.variant}
        />
      )}

      {/* Toast Notifications */}
      <ToastContainer toasts={toasts} onRemove={removeToast} />
    </div>
  );
}
