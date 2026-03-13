import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Layout } from './components/Layout';
import { Dashboard } from './pages/Dashboard';
import { Employees } from './pages/Employees';
import { Attendance } from './pages/Attendance';
import { Payroll } from './pages/Payroll';
import { Recruitment } from './pages/Recruitment';

// Placeholder components for remaining pages
const Performance = () => <div className="p-10 text-2xl font-black text-slate-900">صفحة الأداء والتطوير قيد التطوير...</div>;
const Reports = () => <div className="p-10 text-2xl font-black text-slate-900">صفحة التقارير قيد التطوير...</div>;
const Settings = () => <div className="p-10 text-2xl font-black text-slate-900">صفحة الإعدادات قيد التطوير...</div>;
const Approvals = () => <div className="p-10 text-2xl font-black text-slate-900">صفحة الموافقات قيد التطوير...</div>;
const MyLeaves = () => <div className="p-10 text-2xl font-black text-slate-900">صفحة إجازاتي قيد التطوير...</div>;
const MySalary = () => <div className="p-10 text-2xl font-black text-slate-900">صفحة راتبي قيد التطوير...</div>;
const Policies = () => <div className="p-10 text-2xl font-black text-slate-900">صفحة سياساتي قيد التطوير...</div>;

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Dashboard />} />
          <Route path="employees" element={<Employees />} />
          <Route path="attendance" element={<Attendance />} />
          <Route path="payroll" element={<Payroll />} />
          <Route path="performance" element={<Performance />} />
          <Route path="recruitment" element={<Recruitment />} />
          <Route path="reports" element={<Reports />} />
          <Route path="settings" element={<Settings />} />
          <Route path="approvals" element={<Approvals />} />
          <Route path="my-leaves" element={<MyLeaves />} />
          <Route path="my-salary" element={<MySalary />} />
          <Route path="policies" element={<Policies />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
