import React from 'react';
import { 
  Clock, 
  Calendar, 
  CheckCircle2, 
  XCircle, 
  AlertCircle,
  Search,
  Filter,
  Download
} from 'lucide-react';
import { motion } from 'motion/react';

const attendanceData = [
  { id: 'EMP-001', name: 'أحمد محمد', date: '2026/03/12', checkIn: '08:00 AM', checkOut: '04:30 PM', status: 'حاضر', hours: '8.5' },
  { id: 'EMP-002', name: 'سارة علي', date: '2026/03/12', checkIn: '08:15 AM', checkOut: '04:45 PM', status: 'متأخر', hours: '8.5' },
  { id: 'EMP-003', name: 'خالد عبدالله', date: '2026/03/12', checkIn: '-', checkOut: '-', status: 'غائب', hours: '0' },
  { id: 'EMP-004', name: 'ليلى حسن', date: '2026/03/12', checkIn: '07:55 AM', checkOut: '04:00 PM', status: 'حاضر', hours: '8.0' },
];

export const Attendance = () => {
  return (
    <div className="p-10 space-y-8">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-3xl font-black text-slate-900">الحضور والدوام</h2>
          <p className="text-slate-500 mt-1">متابعة سجلات الحضور والانصراف اليومية.</p>
        </div>
        <div className="flex gap-3">
          <button className="bg-white border border-slate-200 px-6 py-3.5 rounded-2xl text-sm font-bold text-slate-600 flex items-center gap-2 hover:bg-slate-50 transition-all">
            <Download size={20} />
            <span>تصدير التقرير</span>
          </button>
          <button className="bg-indigo-600 text-white px-6 py-3.5 rounded-[1.25rem] text-sm font-black flex items-center gap-2.5 shadow-xl shadow-indigo-200 hover:bg-indigo-700 transition-all">
            <Calendar size={20} />
            <span>سجل الإجازات</span>
          </button>
        </div>
      </div>

      {/* Stats Summary */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="glass-card p-6 rounded-[2rem] flex items-center gap-4">
          <div className="w-14 h-14 rounded-2xl bg-emerald-50 text-emerald-600 flex items-center justify-center">
            <CheckCircle2 size={28} />
          </div>
          <div>
            <p className="text-xs font-bold text-slate-400 uppercase">حاضرون اليوم</p>
            <h4 className="text-2xl font-black text-slate-900">85%</h4>
          </div>
        </div>
        <div className="glass-card p-6 rounded-[2rem] flex items-center gap-4">
          <div className="w-14 h-14 rounded-2xl bg-amber-50 text-amber-600 flex items-center justify-center">
            <AlertCircle size={28} />
          </div>
          <div>
            <p className="text-xs font-bold text-slate-400 uppercase">متأخرون</p>
            <h4 className="text-2xl font-black text-slate-900">12</h4>
          </div>
        </div>
        <div className="glass-card p-6 rounded-[2rem] flex items-center gap-4">
          <div className="w-14 h-14 rounded-2xl bg-rose-50 text-rose-600 flex items-center justify-center">
            <XCircle size={28} />
          </div>
          <div>
            <p className="text-xs font-bold text-slate-400 uppercase">غائبون</p>
            <h4 className="text-2xl font-black text-slate-900">5</h4>
          </div>
        </div>
      </div>

      {/* Table */}
      <div className="glass-card rounded-[2.5rem] overflow-hidden">
        <div className="p-6 border-b border-slate-100 flex flex-col md:flex-row gap-4 justify-between">
          <div className="relative flex-1 max-w-md">
            <Search className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
            <input 
              type="text" 
              placeholder="البحث عن موظف..." 
              className="w-full bg-slate-50 border-none rounded-xl py-2.5 pr-12 pl-4 text-sm focus:ring-2 focus:ring-indigo-500/20"
            />
          </div>
          <div className="flex gap-2">
            <button className="p-2.5 rounded-xl bg-slate-50 text-slate-500 hover:bg-slate-100">
              <Filter size={20} />
            </button>
          </div>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full text-right">
            <thead>
              <tr className="bg-slate-50/50">
                <th className="px-6 py-4 text-xs font-black text-slate-400 uppercase tracking-widest">الموظف</th>
                <th className="px-6 py-4 text-xs font-black text-slate-400 uppercase tracking-widest">التاريخ</th>
                <th className="px-6 py-4 text-xs font-black text-slate-400 uppercase tracking-widest">الحضور</th>
                <th className="px-6 py-4 text-xs font-black text-slate-400 uppercase tracking-widest">الانصراف</th>
                <th className="px-6 py-4 text-xs font-black text-slate-400 uppercase tracking-widest">الحالة</th>
                <th className="px-6 py-4 text-xs font-black text-slate-400 uppercase tracking-widest">ساعات العمل</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-50">
              {attendanceData.map((row, idx) => (
                <motion.tr 
                  key={row.id}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: idx * 0.05 }}
                  className="hover:bg-slate-50/50 transition-colors"
                >
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-lg bg-indigo-100 flex items-center justify-center text-indigo-600 text-[10px] font-black">
                        {row.name[0]}
                      </div>
                      <span className="text-sm font-bold text-slate-900">{row.name}</span>
                    </div>
                  </td>
                  <td className="px-6 py-4 text-sm text-slate-500 font-medium">{row.date}</td>
                  <td className="px-6 py-4 text-sm text-slate-900 font-bold">{row.checkIn}</td>
                  <td className="px-6 py-4 text-sm text-slate-900 font-bold">{row.checkOut}</td>
                  <td className="px-6 py-4">
                    <span className={`px-3 py-1 rounded-full text-[10px] font-black ${
                      row.status === 'حاضر' ? 'bg-emerald-50 text-emerald-600' : 
                      row.status === 'متأخر' ? 'bg-amber-50 text-amber-600' : 'bg-rose-50 text-rose-600'
                    }`}>
                      {row.status}
                    </span>
                  </td>
                  <td className="px-6 py-4 text-sm text-slate-900 font-black">{row.hours}</td>
                </motion.tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};
