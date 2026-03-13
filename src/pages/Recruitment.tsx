import React from 'react';
import { 
  UserPlus, 
  Briefcase, 
  Search, 
  Filter, 
  MoreVertical,
  ChevronRight,
  Users,
  FileText,
  Plus
} from 'lucide-react';
import { motion } from 'motion/react';

const jobs = [
  { id: 'JOB-001', title: 'مطور واجهات React', department: 'التقنية', type: 'دوام كامل', applicants: 12, status: 'نشط' },
  { id: 'JOB-002', title: 'مدير تسويق رقمي', department: 'التسويق', type: 'دوام كامل', applicants: 25, status: 'نشط' },
  { id: 'JOB-003', title: 'محاسب مالي', department: 'المالية', type: 'عقد', applicants: 8, status: 'مغلق' },
];

export const Recruitment = () => {
  return (
    <div className="p-4 md:p-10 space-y-6 md:space-y-8">
      <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="text-center sm:text-right">
          <h2 className="text-2xl md:text-3xl font-black text-slate-900">التوظيف</h2>
          <p className="text-slate-500 mt-1 text-sm md:text-base">إدارة الوظائف الشاغرة والمتقدمين.</p>
        </div>
        <button className="w-full sm:w-auto bg-indigo-600 text-white px-6 py-3.5 rounded-[1.25rem] text-sm font-black flex items-center justify-center gap-2.5 shadow-xl shadow-indigo-200 hover:bg-indigo-700 transition-all">
          <Plus size={20} />
          <span>وظيفة جديدة</span>
        </button>
      </div>

      {/* Recruitment Stats */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-8">
        <div className="glass-card p-6 md:p-8 rounded-[2rem] md:rounded-[3rem] bg-white flex flex-col gap-4">
          <div className="w-12 h-12 md:w-14 md:h-14 rounded-2xl bg-indigo-50 text-indigo-600 flex items-center justify-center">
            <Briefcase size={24} className="md:w-7 md:h-7" />
          </div>
          <div>
            <p className="text-[10px] md:text-xs font-bold text-slate-400 uppercase tracking-widest">وظائف نشطة</p>
            <h4 className="text-2xl md:text-3xl font-black text-slate-900">8</h4>
          </div>
        </div>
        <div className="glass-card p-6 md:p-8 rounded-[2rem] md:rounded-[3rem] bg-white flex flex-col gap-4">
          <div className="w-12 h-12 md:w-14 md:h-14 rounded-2xl bg-emerald-50 text-emerald-600 flex items-center justify-center">
            <Users size={24} className="md:w-7 md:h-7" />
          </div>
          <div>
            <p className="text-[10px] md:text-xs font-bold text-slate-400 uppercase tracking-widest">إجمالي المتقدمين</p>
            <h4 className="text-2xl md:text-3xl font-black text-slate-900">145</h4>
          </div>
        </div>
        <div className="glass-card p-6 md:p-8 rounded-[2rem] md:rounded-[3rem] bg-white flex flex-col gap-4">
          <div className="w-12 h-12 md:w-14 md:h-14 rounded-2xl bg-amber-50 text-amber-600 flex items-center justify-center">
            <FileText size={24} className="md:w-7 md:h-7" />
          </div>
          <div>
            <p className="text-[10px] md:text-xs font-bold text-slate-400 uppercase tracking-widest">مقابلات مجدولة</p>
            <h4 className="text-2xl md:text-3xl font-black text-slate-900">12</h4>
          </div>
        </div>
      </div>

      {/* Jobs List */}
      <div className="space-y-4 md:space-y-6">
        <h3 className="text-lg md:text-xl font-black text-slate-900">الوظائف الشاغرة</h3>
        <div className="grid grid-cols-1 gap-4">
          {jobs.map((job, idx) => (
            <motion.div 
              key={job.id}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: idx * 0.1 }}
              className="glass-card p-4 md:p-6 rounded-[1.5rem] md:rounded-[2rem] flex flex-col sm:flex-row items-center justify-between gap-4 group hover:border-indigo-200 transition-all cursor-pointer"
            >
              <div className="flex items-center gap-4 md:gap-6 w-full sm:w-auto">
                <div className="w-12 h-12 md:w-14 md:h-14 rounded-2xl bg-slate-50 flex items-center justify-center text-slate-400 group-hover:bg-indigo-50 group-hover:text-indigo-600 transition-all shrink-0">
                  <Briefcase size={20} className="md:w-6 md:h-6" />
                </div>
                <div>
                  <h4 className="text-base md:text-lg font-black text-slate-900">{job.title}</h4>
                  <div className="flex items-center gap-3 md:gap-4 mt-1">
                    <span className="text-[10px] md:text-xs font-bold text-slate-400">{job.department}</span>
                    <span className="w-1 h-1 bg-slate-200 rounded-full" />
                    <span className="text-[10px] md:text-xs font-bold text-slate-400">{job.type}</span>
                  </div>
                </div>
              </div>
              <div className="flex items-center justify-between sm:justify-end gap-6 md:gap-12 w-full sm:w-auto border-t sm:border-t-0 pt-4 sm:pt-0">
                <div className="text-center">
                  <p className="text-[8px] md:text-[10px] font-black text-slate-400 uppercase tracking-widest mb-1">المتقدمين</p>
                  <p className="text-base md:text-lg font-black text-slate-900">{job.applicants}</p>
                </div>
                <div className="flex items-center gap-4">
                  <span className={`px-3 py-1 rounded-full text-[10px] font-black uppercase ${
                    job.status === 'نشط' ? 'bg-emerald-50 text-emerald-600' : 'bg-slate-100 text-slate-400'
                  }`}>
                    {job.status}
                  </span>
                  <ChevronRight size={20} className="text-slate-300 rotate-180 group-hover:text-indigo-600 transition-colors hidden sm:block" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};
