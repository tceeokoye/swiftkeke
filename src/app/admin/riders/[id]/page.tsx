"use client";

import { use, useState, useEffect } from "react";
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
import ConfirmModal from "@/components/admin/ConfirmModal";
import { ToastContainer } from "@/components/admin/Toast";

// Mock data generator for details - synced with riders list
type Rider = {
  id: string;
  name: string;
  status: string;
  email: string;
  phone: string;
  address: string;
  joinDate: string;
  vehicle: {
    category: string;
    make: string;
    model: string;
    plate: string;
    color: string;
    year: string;
  };
  ranking: {
    rating: number;
    acceptanceRate: number;
    cancellationRate: number;
    totalRides: number;
  };
  wallet: {
    balance: string;
    pending: string;
    totalEarned: string;
  };
  documents: Array<{ name: string; status: string; date: string; url?: string }>;
  transactions: Array<{ id: string; type: string; amount: string; date: string; status: string }>;
};

const getRiderDetails = (id: string): Rider => {
  const ridersData: Record<string, any> = {
    "101": {
      id: "101",
      name: "Chinedu Okafor",
      status: "Pending",
      email: "chinedu@example.com",
      phone: "+234 801 111 2222",
      address: "15 Adeola Crescent, Ikeja, Lagos",
      joinDate: "May 11, 2026",
      vehicle: {
        category: "Tricycle",
        make: "TVS",
        model: "King Deluxe",
        plate: "ABC-123-XY",
        color: "Yellow",
        year: "2024"
      },
      ranking: {
        rating: 0,
        acceptanceRate: 0,
        cancellationRate: 0,
        totalRides: 0
      },
      wallet: {
        balance: "₦0.00",
        pending: "₦0.00",
        totalEarned: "₦0.00"
      },
      documents: [
        { name: "Driver's License", status: "Verified", date: "2026-05-10", url: "https://images.unsplash.com/photo-1621574539437-4b7b9128ee53?q=80&w=800&auto=format&fit=crop" },
        { name: "NIN Identification", status: "Verified", date: "2026-05-10", url: "https://images.unsplash.com/photo-1621574539437-4b7b9128ee53?q=80&w=800&auto=format&fit=crop" },
        { name: "Proof of Address", status: "Pending", date: "2026-05-11", url: "https://images.unsplash.com/photo-1621574539437-4b7b9128ee53?q=80&w=800&auto=format&fit=crop" },
        { name: "Vehicle Front", status: "Verified", date: "2026-05-10", url: "https://images.unsplash.com/photo-1598402447935-081015694a55?q=80&w=800&auto=format&fit=crop" },
        { name: "Vehicle Back", status: "Verified", date: "2026-05-10", url: "https://images.unsplash.com/photo-1598402447935-081015694a55?q=80&w=800&auto=format&fit=crop" },
        { name: "Vehicle Side", status: "Verified", date: "2026-05-10", url: "https://images.unsplash.com/photo-1598402447935-081015694a55?q=80&w=800&auto=format&fit=crop" },
        { name: "Selfie", status: "Verified", date: "2026-05-10", url: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=800&auto=format&fit=crop" },
      ],
      transactions: []
    },
    "102": {
      id: "102",
      name: "Amaka Eze",
      status: "Approved",
      email: "amaka.e@example.com",
      phone: "+234 802 222 3333",
      address: "25 Victoria Island, Lagos",
      joinDate: "April 15, 2026",
      vehicle: {
        category: "Motorcycle",
        make: "Honda",
        model: "Activa",
        plate: "DEF-456-ZW",
        color: "Blue",
        year: "2023"
      },
      ranking: {
        rating: 4.9,
        acceptanceRate: 98,
        cancellationRate: 2,
        totalRides: 142
      },
      wallet: {
        balance: "₦42,500.00",
        pending: "₦8,200.00",
        totalEarned: "₦840,000.00"
      },
      documents: [
        { name: "Driver's License", status: "Verified", date: "2026-04-14", url: "https://images.unsplash.com/photo-1621574539437-4b7b9128ee53?q=80&w=800&auto=format&fit=crop" },
        { name: "NIN Identification", status: "Verified", date: "2026-04-14", url: "https://images.unsplash.com/photo-1621574539437-4b7b9128ee53?q=80&w=800&auto=format&fit=crop" },
        { name: "Proof of Address", status: "Verified", date: "2026-04-14", url: "https://images.unsplash.com/photo-1621574539437-4b7b9128ee53?q=80&w=800&auto=format&fit=crop" },
        { name: "Vehicle Front", status: "Verified", date: "2026-04-14", url: "https://images.unsplash.com/photo-1598402447935-081015694a55?q=80&w=800&auto=format&fit=crop" },
      ],
      transactions: [
        { id: "TX-1", type: "Ride Earnings", amount: "+₦1,200.00", date: "Today, 10:45 AM", status: "Completed" },
        { id: "TX-2", type: "Ride Earnings", amount: "+₦850.00", date: "Today, 09:12 AM", status: "Completed" },
        { id: "TX-3", type: "Withdrawal", amount: "-₦20,000.00", date: "Yesterday", status: "Completed" },
        { id: "TX-4", type: "Ride Earnings", amount: "+₦2,100.00", date: "Yesterday", status: "Completed" },
      ]
    },
    "103": {
      id: "103",
      name: "Tunde Balogun",
      status: "Reviewing",
      email: "tunde.b@example.com",
      phone: "+234 803 333 4444",
      address: "10 Dugbe, Ibadan",
      joinDate: "May 10, 2026",
      vehicle: {
        category: "Motorcycle",
        make: "Yamaha",
        model: "Fascino",
        plate: "GHI-789-UV",
        color: "Red",
        year: "2024"
      },
      ranking: {
        rating: 0,
        acceptanceRate: 0,
        cancellationRate: 0,
        totalRides: 0
      },
      wallet: {
        balance: "₦0.00",
        pending: "₦0.00",
        totalEarned: "₦0.00"
      },
      documents: [
        { name: "Driver's License", status: "Verified", date: "2026-05-09", url: "https://images.unsplash.com/photo-1621574539437-4b7b9128ee53?q=80&w=800&auto=format&fit=crop" },
        { name: "NIN Identification", status: "Pending", date: "2026-05-10", url: "https://images.unsplash.com/photo-1621574539437-4b7b9128ee53?q=80&w=800&auto=format&fit=crop" },
        { name: "Proof of Address", status: "Verified", date: "2026-05-09", url: "https://images.unsplash.com/photo-1621574539437-4b7b9128ee53?q=80&w=800&auto=format&fit=crop" },
      ],
      transactions: []
    },
    "104": {
      id: "104",
      name: "Ibrahim Musa",
      status: "Approved",
      email: "ibrahim@example.com",
      phone: "+234 804 444 5555",
      address: "5 Wuse II, Abuja",
      joinDate: "April 20, 2026",
      vehicle: {
        category: "Motorcycle",
        make: "Suzuki",
        model: "Access",
        plate: "JKL-012-ST",
        color: "Black",
        year: "2023"
      },
      ranking: {
        rating: 4.7,
        acceptanceRate: 95,
        cancellationRate: 5,
        totalRides: 89
      },
      wallet: {
        balance: "₦28,300.00",
        pending: "₦5,400.00",
        totalEarned: "₦520,000.00"
      },
      documents: [
        { name: "Driver's License", status: "Verified", date: "2026-04-19", url: "https://images.unsplash.com/photo-1621574539437-4b7b9128ee53?q=80&w=800&auto=format&fit=crop" },
        { name: "NIN Identification", status: "Verified", date: "2026-04-19", url: "https://images.unsplash.com/photo-1621574539437-4b7b9128ee53?q=80&w=800&auto=format&fit=crop" },
        { name: "Proof of Address", status: "Verified", date: "2026-04-19", url: "https://images.unsplash.com/photo-1621574539437-4b7b9128ee53?q=80&w=800&auto=format&fit=crop" },
      ],
      transactions: [
        { id: "TX-5", type: "Ride Earnings", amount: "+₦950.00", date: "Today, 11:30 AM", status: "Completed" },
        { id: "TX-6", type: "Ride Earnings", amount: "+₦1,100.00", date: "Today, 08:45 AM", status: "Completed" },
      ]
    },
    "105": {
      id: "105",
      name: "Rita Peters",
      status: "Rejected",
      email: "rita.p@example.com",
      phone: "+234 805 555 6666",
      address: "8 Lekki Phase 1, Lagos",
      joinDate: "May 1, 2026",
      vehicle: {
        category: "Motorcycle",
        make: "Hero",
        model: "Splendor",
        plate: "MNO-345-PQ",
        color: "Green",
        year: "2022"
      },
      ranking: {
        rating: 0,
        acceptanceRate: 0,
        cancellationRate: 0,
        totalRides: 0
      },
      wallet: {
        balance: "₦0.00",
        pending: "₦0.00",
        totalEarned: "₦0.00"
      },
      documents: [
        { name: "Driver's License", status: "Expired", date: "2026-04-30", url: "https://images.unsplash.com/photo-1621574539437-4b7b9128ee53?q=80&w=800&auto=format&fit=crop" },
        { name: "NIN Identification", status: "Verified", date: "2026-04-30", url: "https://images.unsplash.com/photo-1621574539437-4b7b9128ee53?q=80&w=800&auto=format&fit=crop" },
        { name: "Proof of Address", status: "Verified", date: "2026-04-30", url: "https://images.unsplash.com/photo-1621574539437-4b7b9128ee53?q=80&w=800&auto=format&fit=crop" },
      ],
      transactions: []
    }
  };

  // Load from localStorage if available
  const stored = typeof window !== 'undefined' ? localStorage.getItem(`rider_${id}`) : null;
  if (stored) {
    return { ...ridersData[id], ...JSON.parse(stored) };
  }

  return ridersData[id] || ridersData["102"]; // fallback to Amaka
};

export default function RiderDetailPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = use(params);
  const [rider, setRider] = useState<Rider>(getRiderDetails(id));
  const [activeTab, setActiveTab] = useState("overview");
  const [previewDocument, setPreviewDocument] = useState<{name: string, url: string} | null>(null);
  const [confirmModal, setConfirmModal] = useState<{
    isOpen: boolean;
    title: string;
    message: string;
    action: () => void;
    variant: "danger" | "warning" | "success";
  } | null>(null);
  const [toasts, setToasts] = useState<Array<{ id: string; message: string; type: "success" | "error" | "warning" }>>([]);

  // Save to localStorage whenever rider changes
  useEffect(() => {
    localStorage.setItem(`rider_${id}`, JSON.stringify({
      status: rider.status,
      ranking: rider.ranking,
      wallet: rider.wallet,
      transactions: rider.transactions
    }));
  }, [rider, id]);

  const addToast = (message: string, type: "success" | "error" | "warning") => {
    const toastId = Date.now().toString();
    setToasts(prev => [...prev, { id: toastId, message, type }]);
  };

  const removeToast = (id: string) => {
    setToasts(prev => prev.filter(toast => toast.id !== id));
  };

  const handleApprove = () => {
    setConfirmModal({
      isOpen: true,
      title: "Approve Rider",
      message: `Are you sure you want to approve ${rider.name}? This will grant them access to the platform.`,
      action: () => {
        setRider((prev: Rider) => ({ ...prev, status: "Approved" }));
        addToast("Rider approved successfully", "success");
        setConfirmModal(null);
      },
      variant: "success"
    });
  };

  const handleReject = () => {
    setConfirmModal({
      isOpen: true,
      title: "Reject Rider",
      message: `Are you sure you want to reject ${rider.name}? This action cannot be undone.`,
      action: () => {
        setRider((prev: Rider) => ({ ...prev, status: "Rejected" }));
        addToast("Rider rejected", "error");
        setConfirmModal(null);
      },
      variant: "danger"
    });
  };

  const handleSuspend = () => {
    setConfirmModal({
      isOpen: true,
      title: "Suspend Rider",
      message: `Are you sure you want to suspend ${rider.name}? They will lose access temporarily.`,
      action: () => {
        setRider((prev: Rider) => ({ ...prev, status: "Suspended" }));
        addToast("Rider suspended", "warning");
        setConfirmModal(null);
      },
      variant: "warning"
    });
  };

  const getStatusStyle = (status: string) => {
    switch (status.toLowerCase()) {
      case "approved": return "bg-green-50 text-green-600 border-green-100";
      case "pending": return "bg-yellow-50 text-yellow-600 border-yellow-100";
      case "reviewing": return "bg-blue-50 text-blue-600 border-blue-100";
      case "rejected": return "bg-red-50 text-red-600 border-red-100";
      case "suspended": return "bg-orange-50 text-orange-600 border-orange-100";
      default: return "bg-gray-50 text-gray-600 border-gray-100";
    }
  };

  const getStatusIcon = (status: string) => {
    switch (status.toLowerCase()) {
      case "approved": return <CheckCircle className="w-3 h-3" />;
      case "pending": return <Clock className="w-3 h-3" />;
      case "reviewing": return <Clock className="w-3 h-3" />;
      case "rejected": return <XCircle className="w-3 h-3" />;
      case "suspended": return <Clock className="w-3 h-3" />;
      default: return null;
    }
  };

  return (
    <div className="space-y-8 pb-20">
      {/* Breadcrumb & Navigation */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-6">
        <Link href="/admin/riders" className="flex items-center gap-2 text-sm font-bold text-gray-400 hover:text-[#D21F3C] transition-colors group">
          <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" /> Back to Riders
        </Link>
        <div className="flex flex-wrap gap-3">
          {rider.status.toLowerCase() !== "approved" && (
            <button 
              onClick={handleReject}
              className="flex-1 sm:flex-none px-5 py-2.5 bg-red-50 text-red-600 font-bold text-xs rounded-xl hover:bg-red-100 transition-all border border-red-100"
            >
              Reject
            </button>
          )}
          <button 
            onClick={handleSuspend}
            className="flex-1 sm:flex-none px-5 py-2.5 bg-orange-50 text-orange-600 font-bold text-xs rounded-xl hover:bg-orange-100 transition-all border border-orange-100"
          >
            Suspend
          </button>
          {rider.status.toLowerCase() !== "approved" && (
            <button 
              onClick={handleApprove}
              className="flex-1 sm:flex-none px-6 py-2.5 bg-[#D21F3C] text-white font-bold text-xs rounded-xl hover:bg-[#a8172d] transition-all shadow-lg shadow-[#D21F3C]/20"
            >
              Approve
            </button>
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
                <span className={`px-3 py-1 ${getStatusStyle(rider.status)} text-[10px] font-black rounded-lg border uppercase tracking-widest flex items-center gap-1.5`}>
                  {getStatusIcon(rider.status)}
                  {rider.status}
                </span>
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
      <div className="flex bg-white p-1.5 rounded-[2rem] shadow-sm border border-gray-50 w-full lg:w-max overflow-x-auto no-scrollbar">
        {["Overview", "Finance & Wallet", "Documents", "Ride History"].map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab.toLowerCase())}
            className={`px-8 py-3 rounded-[1.5rem] text-xs font-black transition-all whitespace-nowrap ${activeTab === tab.toLowerCase() ? "bg-[#1A1A1A] text-white shadow-lg" : "text-gray-400 hover:text-[#1A1A1A]"}`}
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
                { label: "Category", value: rider.vehicle.category },
                { label: "Make", value: rider.vehicle.make },
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
                    <button 
                      onClick={() => setActiveTab("finance & wallet")}
                      className="px-6 py-2.5 bg-white/10 text-white font-bold text-xs rounded-xl hover:bg-white/20 transition-all"
                    >
                      View History
                    </button>
                  </div>
                </div>

                {/* Documents Grid */}
                <div className="bg-white p-8 rounded-[2.5rem] shadow-sm border border-gray-50">
                   <h3 className="text-lg font-black text-[#1A1A1A] mb-6">Verification Documents</h3>
                   <div className="grid sm:grid-cols-2 gap-4">
                      {rider.documents.map((doc) => (
                        <div key={doc.name} onClick={() => doc.url && setPreviewDocument({name: doc.name, url: doc.url})} className="p-4 bg-[#F7F7F7] rounded-2xl flex items-center justify-between group cursor-pointer hover:bg-gray-100 transition-all">
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
            activeTab === "documents" ? (
              <div className="space-y-8">
                <div className="bg-white p-8 rounded-[2.5rem] shadow-sm border border-gray-50">
                  <h3 className="text-lg font-black text-[#1A1A1A] mb-6">Biodata Overview</h3>
                  <div className="grid sm:grid-cols-2 gap-4">
                    {[
                      { l: "Full Name", v: rider.name },
                      { l: "Email Address", v: rider.email },
                      { l: "Phone Number", v: rider.phone },
                      { l: "Residential Address", v: rider.address },
                      { l: "Join Date", v: rider.joinDate },
                    ].map(({ l, v }) => (
                      <div key={l} className="bg-[#F7F7F7] p-4 rounded-2xl">
                        <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-1">{l}</p>
                        <span className="text-sm font-bold text-[#1A1A1A]">{v}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="bg-white p-8 rounded-[2.5rem] shadow-sm border border-gray-50">
                  <h3 className="text-lg font-black text-[#1A1A1A] mb-6">Verification Documents & Photos</h3>
                  <div className="grid sm:grid-cols-2 gap-4">
                    {rider.documents.map((doc) => (
                      <div key={doc.name} className="p-4 bg-[#F7F7F7] rounded-2xl flex items-center justify-between group cursor-pointer hover:bg-gray-100 transition-all" onClick={() => doc.url && setPreviewDocument({name: doc.name, url: doc.url})}>
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
            ) : (
              <div className="bg-white p-20 rounded-[2.5rem] shadow-sm border border-gray-50 flex flex-col items-center text-center">
                <div className="w-20 h-20 bg-[#F7F7F7] rounded-3xl flex items-center justify-center mb-6 text-gray-300">
                  <History className="w-10 h-10" />
                </div>
                <h3 className="text-xl font-black text-[#1A1A1A] mb-2">Ride History</h3>
                <p className="text-gray-400 max-w-xs text-sm font-medium">Mock ride history will be displayed here with date, pickup, dropoff, fare, and rating.</p>
              </div>
            )
          )}
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

      {/* Document Preview Modal */}
      {previewDocument && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6">
          <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" onClick={() => setPreviewDocument(null)} />
          <div className="bg-white rounded-3xl overflow-hidden shadow-2xl relative w-full max-w-4xl max-h-[90vh] flex flex-col animate-scaleIn">
            <div className="px-6 py-4 border-b border-gray-100 flex items-center justify-between bg-white z-10">
              <h3 className="text-lg font-bold text-[#1A1A1A] flex items-center gap-2">
                <FileText className="w-5 h-5 text-[#D21F3C]" />
                {previewDocument.name}
              </h3>
              <button 
                onClick={() => setPreviewDocument(null)}
                className="p-2 hover:bg-gray-100 rounded-xl transition-colors text-gray-400 hover:text-[#1A1A1A]"
              >
                <XCircle className="w-6 h-6" />
              </button>
            </div>
            <div className="p-6 overflow-auto flex-1 bg-[#F7F7F7] flex items-center justify-center">
              <img src={previewDocument.url} alt={previewDocument.name} className="max-w-full rounded-xl shadow-md border border-gray-200" />
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
