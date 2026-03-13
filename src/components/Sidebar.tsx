import React from 'react';
import { 
  LayoutDashboard, 
  Users, 
  Clock, 
  Wallet, 
  TrendingUp, 
  UserPlus, 
  FileText, 
  Settings, 
  Home, 
  CheckCircle2, 
  User, 
  Calendar, 
  FileStack, 
  Send, 
  CreditCard, 
  ShieldCheck,
  LogOut,
  ChevronDown
} from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import { motion } from 'motion/react';
import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

const SidebarItem = ({ icon: Icon, label, to, badge }: { icon: any, label: string, to: string, badge?: string }) => {
  const location = useLocation();
  const active = location.pathname === to;

  return (
    <Link to={to} className={cn(
      "w-full flex items-center gap-3 px-4 py-3 rounded-2xl transition-all duration-300 group relative",
      active 
        ? "bg-indigo-600 text-white shadow-[0_10px_20px_-5px_rgba(79,70,229,0.4)]" 
        : "text-slate-500 hover:bg-white hover:text-indigo-600 hover:shadow-sm"
    )}>
      <Icon size={20} className={cn("transition-transform duration-300 group-hover:scale-110", active ? "text-white" : "text-slate-400 group-hover:text-indigo-600")} />
      <span className="font-semibold text-sm flex-1 text-right">{label}</span>
      {badge && (
        <span className={cn(
          "px-2 py-0.5 rounded-lg text-[10px] font-black",
          active ? "bg-white/20 text-white" : "bg-indigo-100 text-indigo-600"
        )}>
          {badge}
        </span>
      )}
      {active && (
        <motion.div 
          layoutId="sidebar-active"
          className="absolute -right-1 w-1 h-6 bg-indigo-600 rounded-full"
        />
      )}
    </Link>
  );
};

export const Sidebar = ({ isOpen, onClose }: { isOpen: boolean, onClose: () => void }) => (
  <aside className={cn(
    "fixed inset-y-0 right-0 w-80 bg-[#F1F5F9]/50 backdrop-blur-xl border-l border-slate-200/60 flex flex-col z-50 transition-transform duration-300 lg:translate-x-0 lg:static lg:h-screen",
    isOpen ? "translate-x-0" : "translate-x-full"
  )}>
    <div className="p-8 flex items-center justify-between">
      <div className="flex items-center gap-4">
        <div className="w-12 h-12 bg-gradient-to-br from-indigo-600 to-violet-700 rounded-2xl flex items-center justify-center shadow-xl shadow-indigo-200">
          <ShieldCheck className="text-white" size={28} />
        </div>
        <div>
          <h1 className="text-xl font-black text-slate-900 tracking-tight">المكتب الكويتي</h1>
          <div className="flex items-center gap-1.5">
            <span className="w-1.5 h-1.5 bg-emerald-500 rounded-full animate-pulse" />
            <p className="text-[10px] text-slate-400 uppercase font-black tracking-widest">HR Intelligence</p>
          </div>
        </div>
      </div>
      <button 
        onClick={onClose}
        className="lg:hidden p-2 text-slate-400 hover:text-indigo-600 transition-colors"
      >
        <LogOut size={20} className="rotate-180" />
      </button>
    </div>

    <div className="flex-1 overflow-y-auto px-6 py-4 space-y-8 custom-scrollbar">
      <div>
        <p className="px-4 text-[10px] font-black text-slate-400 uppercase tracking-[0.2em] mb-4">الرئيسية</p>
        <div className="space-y-1">
          <SidebarItem icon={LayoutDashboard} label="لوحة التحكم" to="/" />
          <SidebarItem icon={Users} label="شؤون الموظفين" to="/employees" badge="12" />
          <SidebarItem icon={Clock} label="الحضور والدوام" to="/attendance" />
          <SidebarItem icon={Wallet} label="المالية والرواتب" to="/payroll" />
          <SidebarItem icon={TrendingUp} label="الأداء والتطوير" to="/performance" />
        </div>
      </div>

      <div>
        <p className="px-4 text-[10px] font-black text-slate-400 uppercase tracking-[0.2em] mb-4">الخدمات</p>
        <div className="space-y-1">
          <SidebarItem icon={UserPlus} label="التوظيف" to="/recruitment" />
          <SidebarItem icon={FileText} label="التقارير" to="/reports" />
          <SidebarItem icon={Settings} label="أدوات إدارية" to="/settings" />
        </div>
      </div>

      <div>
        <p className="px-4 text-[10px] font-black text-slate-400 uppercase tracking-[0.2em] mb-4">الخدمات الذاتية</p>
        <div className="space-y-1">
          <SidebarItem icon={CheckCircle2} label="الموافقات" to="/approvals" badge="3" />
          <SidebarItem icon={FileStack} label="إجازاتي" to="/my-leaves" />
          <SidebarItem icon={CreditCard} label="راتبي" to="/my-salary" />
          <SidebarItem icon={ShieldCheck} label="سياساتي" to="/policies" />
        </div>
      </div>
    </div>

    <div className="p-6">
      <div className="bg-white/60 backdrop-blur-md rounded-[2rem] p-4 border border-white/40 shadow-sm flex items-center gap-3 group cursor-pointer hover:bg-white transition-all duration-300">
        <div className="relative">
          <div className="w-11 h-11 rounded-2xl bg-gradient-to-tr from-indigo-500 to-indigo-600 flex items-center justify-center text-white font-black text-sm shadow-md">
            HU
          </div>
          <div className="absolute -top-1 -right-1 w-3.5 h-3.5 bg-emerald-500 border-2 border-white rounded-full" />
        </div>
        <div className="flex-1 min-w-0">
          <p className="text-sm font-black text-slate-900 truncate">HR User</p>
          <p className="text-[10px] text-slate-400 font-bold uppercase">System Admin</p>
        </div>
        <LogOut size={16} className="text-slate-300 group-hover:text-rose-500 transition-colors" />
      </div>
    </div>
  </aside>
);
