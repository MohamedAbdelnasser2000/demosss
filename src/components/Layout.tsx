import React, { useState } from 'react';
import { Outlet } from 'react-router-dom';
import { Sidebar } from './Sidebar';
import { Topbar } from './Topbar';

export const Layout = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <div className="min-h-screen flex bg-[#F8FAFC] font-sans selection:bg-indigo-100 selection:text-indigo-700" dir="rtl">
      <Sidebar isOpen={isSidebarOpen} onClose={() => setIsSidebarOpen(false)} />
      
      {/* Overlay for mobile sidebar */}
      {isSidebarOpen && (
        <div 
          className="fixed inset-0 bg-slate-900/20 backdrop-blur-sm z-40 lg:hidden"
          onClick={() => setIsSidebarOpen(false)}
        />
      )}

      <main className="flex-1 flex flex-col min-w-0 overflow-hidden">
        <Topbar onMenuClick={() => setIsSidebarOpen(true)} />
        <div className="flex-1 overflow-y-auto custom-scrollbar">
          <Outlet />
        </div>
        <footer className="h-16 flex items-center justify-center border-t border-slate-200/60 bg-white/40 backdrop-blur-md px-6">
          <p className="text-[8px] md:text-[10px] font-black text-slate-400 uppercase tracking-[0.2em] md:tracking-[0.3em] text-center">
            المكتب الكويتي • نظام إدارة الموارد البشرية الذكي • v1.0.0
          </p>
        </footer>
      </main>
    </div>
  );
};
