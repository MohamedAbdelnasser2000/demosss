import React from 'react';
import { 
  Users, 
  UserPlus, 
  Search, 
  Filter, 
  MoreVertical,
  Mail,
  Phone,
  MapPin,
  Briefcase,
  Edit2,
  Eye,
  Trash2
} from 'lucide-react';
import { motion } from 'motion/react';

const employees = [
  { id: 'EMP-001', name: 'أحمد محمد', role: 'مطور واجهات', department: 'التقنية', status: 'نشط', email: 'ahmed@example.com', phone: '+965 12345678' },
  { id: 'EMP-002', name: 'سارة علي', role: 'مديرة تسويق', department: 'التسويق', status: 'نشط', email: 'sara@example.com', phone: '+965 87654321' },
  { id: 'EMP-003', name: 'خالد عبدالله', role: 'محاسب قانوني', department: 'المالية', status: 'إجازة', email: 'khaled@example.com', phone: '+965 55554444' },
  { id: 'EMP-004', name: 'ليلى حسن', role: 'أخصائية HR', department: 'الموارد البشرية', status: 'نشط', email: 'laila@example.com', phone: '+965 99998888' },
];

export const Employees = () => {
  return (
    <div className="p-4 md:p-10 space-y-6 md:space-y-8">
      <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="text-center sm:text-right">
          <h2 className="text-2xl md:text-3xl font-black text-slate-900">شؤون الموظفين</h2>
          <p className="text-slate-500 mt-1 text-sm md:text-base">إدارة بيانات الموظفين وعقودهم بشكل مباشر.</p>
        </div>
        <button className="w-full sm:w-auto bg-indigo-600 text-white px-6 py-3.5 rounded-[1.25rem] text-sm font-black flex items-center justify-center gap-2.5 shadow-xl shadow-indigo-200 hover:bg-indigo-700 transition-all">
          <UserPlus size={20} />
          <span>إضافة موظف جديد</span>
        </button>
      </div>

      {/* Filters & Search */}
      <div className="flex flex-col md:flex-row gap-4">
        <div className="relative flex-1">
          <Search className="absolute right-5 top-1/2 -translate-y-1/2 text-slate-400" size={20} />
          <input 
            type="text" 
            placeholder="البحث بالاسم، الرقم الوظيفي، أو القسم..." 
            className="w-full bg-white border border-slate-200 rounded-2xl py-3.5 pr-14 pl-6 text-sm font-medium focus:ring-4 focus:ring-indigo-500/10 outline-none text-right"
          />
        </div>
        <button className="bg-white border border-slate-200 px-6 py-3.5 rounded-2xl text-sm font-bold text-slate-600 flex items-center gap-2 hover:bg-slate-50 transition-all">
          <Filter size={20} />
          <span>تصفية</span>
        </button>
      </div>

      {/* Employee Table */}
      <div className="glass-card rounded-[2.5rem] overflow-hidden border border-slate-100 shadow-sm">
        <div className="overflow-x-auto">
          <table className="w-full text-right border-collapse">
            <thead>
              <tr className="bg-slate-50/50 border-bottom border-slate-100">
                <th className="px-8 py-5 text-xs font-black text-slate-400 uppercase tracking-widest">الموظف</th>
                <th className="px-6 py-5 text-xs font-black text-slate-400 uppercase tracking-widest">القسم</th>
                <th className="px-6 py-5 text-xs font-black text-slate-400 uppercase tracking-widest">التواصل</th>
                <th className="px-6 py-5 text-xs font-black text-slate-400 uppercase tracking-widest">الرقم الوظيفي</th>
                <th className="px-6 py-5 text-xs font-black text-slate-400 uppercase tracking-widest">الحالة</th>
                <th className="px-8 py-5 text-xs font-black text-slate-400 uppercase tracking-widest text-left">الإجراءات</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-50">
              {employees.map((emp, idx) => (
                <motion.tr 
                  key={emp.id}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: idx * 0.05 }}
                  className="hover:bg-slate-50/50 transition-colors group"
                >
                  <td className="px-8 py-5">
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 rounded-xl bg-indigo-100 flex items-center justify-center text-indigo-600 text-sm font-black shrink-0">
                        {emp.name.split(' ').map(n => n[0]).join('')}
                      </div>
                      <div>
                        <h4 className="text-sm font-black text-slate-900">{emp.name}</h4>
                        <p className="text-[10px] text-slate-400 font-bold uppercase tracking-wider">{emp.role}</p>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-5">
                    <div className="flex items-center gap-2 text-sm text-slate-600">
                      <Briefcase size={14} className="text-slate-300" />
                      <span className="font-bold">{emp.department}</span>
                    </div>
                  </td>
                  <td className="px-6 py-5">
                    <div className="space-y-1">
                      <div className="flex items-center gap-2 text-xs text-slate-500">
                        <Mail size={12} className="text-slate-300" />
                        <span>{emp.email}</span>
                      </div>
                      <div className="flex items-center gap-2 text-xs text-slate-500">
                        <Phone size={12} className="text-slate-300" />
                        <span>{emp.phone}</span>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-5">
                    <span className="text-xs font-black text-slate-400 font-mono tracking-wider">{emp.id}</span>
                  </td>
                  <td className="px-6 py-5">
                    <span className={`px-3 py-1 rounded-full text-[10px] font-black uppercase inline-block ${
                      emp.status === 'نشط' ? 'bg-emerald-50 text-emerald-600' : 'bg-amber-50 text-amber-600'
                    }`}>
                      {emp.status}
                    </span>
                  </td>
                  <td className="px-8 py-5">
                    <div className="flex items-center justify-end gap-2">
                      <button className="w-9 h-9 rounded-xl bg-white border border-slate-100 text-slate-400 hover:text-indigo-600 hover:border-indigo-100 hover:shadow-sm transition-all flex items-center justify-center group/btn" title="عرض التفاصيل">
                        <Eye size={16} />
                      </button>
                      <button className="w-9 h-9 rounded-xl bg-white border border-slate-100 text-slate-400 hover:text-emerald-600 hover:border-emerald-100 hover:shadow-sm transition-all flex items-center justify-center group/btn" title="تعديل">
                        <Edit2 size={16} />
                      </button>
                      <button className="w-9 h-9 rounded-xl bg-white border border-slate-100 text-slate-400 hover:text-rose-600 hover:border-rose-100 hover:shadow-sm transition-all flex items-center justify-center group/btn" title="حذف">
                        <Trash2 size={16} />
                      </button>
                    </div>
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
