import React from 'react';
import { Search, Bell, Globe, Plus } from 'lucide-react';

export const Topbar = () => (
  <header className="h-24 bg-white/40 backdrop-blur-md border-b border-slate-200/60 px-10 flex items-center justify-between sticky top-0 z-40">
    <div className="flex items-center gap-6 flex-1 max-w-2xl">
      <div className="relative w-full group">
        <Search className="absolute right-5 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-indigo-600 transition-colors" size={20} />
        <input 
          type="text" 
          placeholder="ابحث عن أي شيء..." 
          className="w-full bg-white border border-slate-200 rounded-[1.5rem] py-3.5 pr-14 pl-6 text-sm font-medium focus:ring-4 focus:ring-indigo-500/10 focus:border-indigo-500/50 transition-all outline-none shadow-sm"
        />
      </div>
    </div>

    <div className="flex items-center gap-4">
      <div className="flex items-center bg-white rounded-2xl p-1 border border-slate-200 shadow-sm">
        <button className="p-2.5 rounded-xl hover:bg-slate-50 text-slate-500 relative transition-colors">
          <Bell size={20} />
          <span className="absolute top-2.5 left-2.5 w-2 h-2 bg-rose-500 rounded-full border-2 border-white"></span>
        </button>
        <div className="w-[1px] h-6 bg-slate-200 mx-1"></div>
        <button className="p-2.5 rounded-xl hover:bg-slate-50 text-slate-500 flex items-center gap-2 transition-colors">
          <Globe size={20} />
          <span className="text-xs font-black uppercase tracking-wider">AR</span>
        </button>
      </div>
      
      <button className="bg-indigo-600 text-white px-6 py-3.5 rounded-[1.25rem] text-sm font-black flex items-center gap-2.5 shadow-xl shadow-indigo-200 hover:bg-indigo-700 hover:-translate-y-0.5 transition-all active:scale-95">
        <Plus size={20} />
        <span>إضافة طلب</span>
      </button>
    </div>
  </header>
);
