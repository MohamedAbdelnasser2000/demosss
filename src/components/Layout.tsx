import React from 'react';
import { Outlet } from 'react-router-dom';
import { Sidebar } from './Sidebar';
import { Topbar } from './Topbar';

export const Layout = () => {
  return (
    <div className="min-h-screen flex bg-[#F8FAFC] font-sans selection:bg-indigo-100 selection:text-indigo-700" dir="rtl">
      <Sidebar />
      <main className="flex-1 flex flex-col min-w-0 overflow-hidden">
        <Topbar />
        <div className="flex-1 overflow-y-auto custom-scrollbar">
          <Outlet />
        </div>
        <footer className="h-16 flex items-center justify-center border-t border-slate-200/60 bg-white/40 backdrop-blur-md">
          <p className="text-[10px] font-black text-slate-400 uppercase tracking-[0.3em]">
            المكتب الكويتي • نظام إدارة الموارد البشرية الذكي • v1.0.0
          </p>
        </footer>
      </main>
    </div>
  );
};
