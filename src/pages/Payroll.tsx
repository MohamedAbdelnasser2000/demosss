import React from 'react';
import { 
  Wallet, 
  CreditCard, 
  TrendingUp, 
  TrendingDown,
  Download,
  Search,
  ArrowUpRight,
  ArrowDownRight
} from 'lucide-react';
import { motion } from 'motion/react';

const payrollData = [
  { id: 'EMP-001', name: 'أحمد محمد', salary: '1,200 KWD', bonus: '150 KWD', deductions: '20 KWD', net: '1,330 KWD', status: 'مدفوع' },
  { id: 'EMP-002', name: 'سارة علي', salary: '1,500 KWD', bonus: '200 KWD', deductions: '0 KWD', net: '1,700 KWD', status: 'مدفوع' },
  { id: 'EMP-003', name: 'خالد عبدالله', salary: '1,100 KWD', bonus: '0 KWD', deductions: '50 KWD', net: '1,050 KWD', status: 'معلق' },
  { id: 'EMP-004', name: 'ليلى حسن', salary: '1,300 KWD', bonus: '100 KWD', deductions: '10 KWD', net: '1,390 KWD', status: 'مدفوع' },
];

export const Payroll = () => {
  return (
    <div className="p-10 space-y-8">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-3xl font-black text-slate-900">المالية والرواتب</h2>
          <p className="text-slate-500 mt-1">إدارة الرواتب، المكافآت، والاستقطاعات.</p>
        </div>
        <button className="bg-indigo-600 text-white px-6 py-3.5 rounded-[1.25rem] text-sm font-black flex items-center gap-2.5 shadow-xl shadow-indigo-200 hover:bg-indigo-700 transition-all">
          <CreditCard size={20} />
          <span>معالجة الرواتب</span>
        </button>
      </div>

      {/* Financial Overview */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 glass-card p-8 rounded-[3rem] bg-gradient-to-br from-indigo-600 to-indigo-800 text-white relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl -mr-32 -mt-32" />
          <div className="relative z-10 flex flex-col h-full justify-between">
            <div className="flex justify-between items-start">
              <div>
                <p className="text-indigo-100 text-xs font-black uppercase tracking-widest mb-2">إجمالي الرواتب لهذا الشهر</p>
                <h3 className="text-4xl font-black tracking-tight">12,450 KWD</h3>
              </div>
              <div className="p-4 bg-white/20 backdrop-blur-md rounded-2xl border border-white/20">
                <Wallet size={32} />
              </div>
            </div>
            <div className="flex gap-8 mt-12">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-emerald-500/20 flex items-center justify-center">
                  <ArrowUpRight size={20} className="text-emerald-400" />
                </div>
                <div>
                  <p className="text-[10px] font-bold text-indigo-200 uppercase">المكافآت</p>
                  <p className="font-black">1,200 KWD</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-rose-500/20 flex items-center justify-center">
                  <ArrowDownRight size={20} className="text-rose-400" />
                </div>
                <div>
                  <p className="text-[10px] font-bold text-indigo-200 uppercase">الاستقطاعات</p>
                  <p className="font-black">450 KWD</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="glass-card p-8 rounded-[3rem] flex flex-col justify-between">
          <h4 className="text-lg font-black text-slate-900">حالة الدفع</h4>
          <div className="space-y-6">
            <div className="flex items-center justify-between">
              <span className="text-sm font-bold text-slate-500">تم الدفع</span>
              <span className="text-sm font-black text-emerald-600">92%</span>
            </div>
            <div className="h-2 w-full bg-slate-100 rounded-full overflow-hidden">
              <div className="h-full bg-emerald-500 rounded-full" style={{ width: '92%' }} />
            </div>
            <div className="flex items-center justify-between">
              <span className="text-sm font-bold text-slate-500">قيد الانتظار</span>
              <span className="text-sm font-black text-amber-600">8%</span>
            </div>
            <div className="h-2 w-full bg-slate-100 rounded-full overflow-hidden">
              <div className="h-full bg-amber-500 rounded-full" style={{ width: '8%' }} />
            </div>
          </div>
          <button className="w-full py-3 rounded-2xl bg-slate-50 text-slate-600 text-xs font-black hover:bg-slate-100 transition-all">
            عرض التفاصيل المالية
          </button>
        </div>
      </div>

      {/* Table */}
      <div className="glass-card rounded-[2.5rem] overflow-hidden">
        <div className="p-6 border-b border-slate-100 flex justify-between items-center">
          <h3 className="text-lg font-black text-slate-900">كشف الرواتب التفصيلي</h3>
          <button className="p-2.5 rounded-xl bg-slate-50 text-slate-500 hover:bg-slate-100">
            <Download size={20} />
          </button>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full text-right">
            <thead>
              <tr className="bg-slate-50/50">
                <th className="px-6 py-4 text-xs font-black text-slate-400 uppercase tracking-widest">الموظف</th>
                <th className="px-6 py-4 text-xs font-black text-slate-400 uppercase tracking-widest">الراتب الأساسي</th>
                <th className="px-6 py-4 text-xs font-black text-slate-400 uppercase tracking-widest">المكافآت</th>
                <th className="px-6 py-4 text-xs font-black text-slate-400 uppercase tracking-widest">الاستقطاعات</th>
                <th className="px-6 py-4 text-xs font-black text-slate-400 uppercase tracking-widest">صافي الراتب</th>
                <th className="px-6 py-4 text-xs font-black text-slate-400 uppercase tracking-widest">الحالة</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-50">
              {payrollData.map((row, idx) => (
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
                  <td className="px-6 py-4 text-sm text-slate-600 font-bold">{row.salary}</td>
                  <td className="px-6 py-4 text-sm text-emerald-600 font-bold">+{row.bonus}</td>
                  <td className="px-6 py-4 text-sm text-rose-600 font-bold">-{row.deductions}</td>
                  <td className="px-6 py-4 text-sm text-slate-900 font-black">{row.net}</td>
                  <td className="px-6 py-4">
                    <span className={`px-3 py-1 rounded-full text-[10px] font-black ${
                      row.status === 'مدفوع' ? 'bg-emerald-50 text-emerald-600' : 'bg-amber-50 text-amber-600'
                    }`}>
                      {row.status}
                    </span>
                  </td>
                </motion.tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};
