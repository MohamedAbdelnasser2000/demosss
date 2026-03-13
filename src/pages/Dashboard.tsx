import React from 'react';
import { 
  Users, 
  Clock, 
  Wallet, 
  Briefcase, 
  CheckCircle2, 
  MoreVertical,
  ArrowRight,
  Activity,
  CalendarDays,
  Sparkles,
  UserPlus
} from 'lucide-react';
import { motion } from 'motion/react';
import { 
  AreaChart, 
  Area, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell
} from 'recharts';
import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

const chartData = [
  { name: 'يناير', value: 400 },
  { name: 'فبراير', value: 300 },
  { name: 'مارس', value: 600 },
  { name: 'أبريل', value: 800 },
  { name: 'مايو', value: 500 },
  { name: 'يونيو', value: 900 },
];

const pieData = [
  { name: 'ذكور', value: 65, color: '#4F46E5' },
  { name: 'إناث', value: 35, color: '#EC4899' },
];

const StatCard = ({ title, value, icon: Icon, color, trend, delay }: { title: string, value: string | number, icon: any, color: string, trend?: string, delay: number }) => (
  <motion.div 
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ delay }}
    whileHover={{ y: -5 }}
    className="glass-card p-6 rounded-[2.5rem] flex flex-col gap-4 group relative overflow-hidden"
  >
    <div className={cn("absolute -top-6 -right-6 w-24 h-24 rounded-full opacity-10 blur-2xl transition-all duration-500 group-hover:scale-150", color)} />
    <div className="flex justify-between items-start relative z-10">
      <div className={cn("p-4 rounded-2xl shadow-sm transition-transform duration-500 group-hover:rotate-12", color, "text-white")}>
        <Icon size={24} />
      </div>
      {trend && (
        <div className="flex flex-col items-end">
          <span className="text-[10px] font-black text-emerald-600 bg-emerald-50 px-2 py-1 rounded-lg border border-emerald-100">
            {trend}
          </span>
        </div>
      )}
    </div>
    <div className="relative z-10">
      <p className="text-slate-400 text-xs font-bold uppercase tracking-wider mb-1">{title}</p>
      <div className="flex items-baseline gap-2">
        <h3 className="text-3xl font-black text-slate-900 tracking-tight">{value}</h3>
      </div>
    </div>
    <div className="mt-2 h-1 w-full bg-slate-100 rounded-full overflow-hidden">
      <motion.div 
        initial={{ width: 0 }}
        animate={{ width: '70%' }}
        transition={{ duration: 1, delay: delay + 0.5 }}
        className={cn("h-full rounded-full", color)}
      />
    </div>
  </motion.div>
);

const ActivityItem = ({ date, title, subtitle, empId, delay }: { date: string, title: string, subtitle: string, empId: string, delay: number }) => (
  <motion.div 
    initial={{ opacity: 0, x: 20 }}
    animate={{ opacity: 1, x: 0 }}
    transition={{ delay }}
    className="flex items-center gap-4 p-4 rounded-3xl hover:bg-white hover:shadow-sm transition-all duration-300 group cursor-pointer border border-transparent hover:border-slate-100"
  >
    <div className="relative">
      <div className="w-12 h-12 rounded-2xl bg-indigo-50 flex items-center justify-center text-indigo-600 group-hover:bg-indigo-600 group-hover:text-white transition-all duration-300">
        <UserPlus size={20} />
      </div>
      <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-emerald-500 border-2 border-white rounded-full" />
    </div>
    <div className="flex-1">
      <h4 className="text-sm font-bold text-slate-900 group-hover:text-indigo-600 transition-colors">{title}</h4>
      <p className="text-xs text-slate-400 font-medium">{subtitle} • <span className="text-indigo-500 font-mono text-[10px]">{empId}</span></p>
    </div>
    <div className="flex flex-col items-end gap-1">
      <span className="text-[10px] font-black text-slate-400 bg-slate-50 px-2 py-1 rounded-lg group-hover:bg-indigo-50 group-hover:text-indigo-600 transition-colors">{date}</span>
    </div>
  </motion.div>
);

export const Dashboard = () => {
  return (
    <div className="p-10 space-y-10">
      {/* Welcome Banner */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="relative rounded-[3rem] overflow-hidden bg-gradient-to-r from-indigo-600 via-indigo-700 to-violet-800 p-10 text-white shadow-2xl shadow-indigo-200"
      >
        <div className="absolute top-0 right-0 w-full h-full opacity-10 pointer-events-none">
          <div className="absolute top-0 right-0 w-96 h-96 bg-white rounded-full blur-3xl -mr-48 -mt-48" />
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-indigo-400 rounded-full blur-3xl -ml-32 -mb-32" />
        </div>
        
        <div className="relative z-10 flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="space-y-4 text-center md:text-right">
            <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-md px-4 py-1.5 rounded-full border border-white/20">
              <Sparkles size={16} className="text-amber-300" />
              <span className="text-xs font-black uppercase tracking-widest">تحديثات النظام الجديدة متاحة</span>
            </div>
            <h2 className="text-4xl font-black tracking-tight leading-tight">أهلاً بك مجدداً، <span className="text-indigo-200">مدير النظام</span> 👋</h2>
            <p className="text-indigo-100/80 font-medium max-w-lg">لديك اليوم 3 موافقات معلقة و 5 موظفين جدد انضموا للفريق. دعنا نلقي نظرة على أداء هذا الشهر.</p>
          </div>
          <div className="hidden lg:block relative">
            <div className="w-48 h-48 bg-white/10 backdrop-blur-2xl rounded-[3rem] border border-white/20 flex items-center justify-center animate-float">
              <Activity size={80} className="text-white/40" />
            </div>
          </div>
        </div>
      </motion.div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        <StatCard title="الموظفون" value="1,248" icon={Users} color="bg-indigo-600" trend="+12% نمو" delay={0.1} />
        <StatCard title="الحضور اليومي" value="94.2%" icon={Clock} color="bg-emerald-500" trend="مستقر" delay={0.2} />
        <StatCard title="طلبات الإجازة" value="24" icon={CalendarDays} color="bg-amber-500" trend="3 جديدة" delay={0.3} />
        <StatCard title="ميزانية الرواتب" value="$245k" icon={Wallet} color="bg-rose-500" trend="-2% توفير" delay={0.4} />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.5 }}
          className="lg:col-span-2 glass-card rounded-[3rem] p-8 flex flex-col gap-8"
        >
          <div className="flex items-center justify-between">
            <h3 className="text-xl font-black text-slate-900">تحليل القوى العاملة</h3>
          </div>
          <div className="h-[300px] w-full">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={chartData}>
                <defs>
                  <linearGradient id="colorValue" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#4F46E5" stopOpacity={0.3}/>
                    <stop offset="95%" stopColor="#4F46E5" stopOpacity={0}/>
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#F1F5F9" />
                <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{ fill: '#94A3B8', fontSize: 12, fontWeight: 700 }} dy={10} />
                <YAxis axisLine={false} tickLine={false} tick={{ fill: '#94A3B8', fontSize: 12, fontWeight: 700 }} />
                <Tooltip />
                <Area type="monotone" dataKey="value" stroke="#4F46E5" strokeWidth={4} fillOpacity={1} fill="url(#colorValue)" />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.6 }}
          className="glass-card rounded-[3rem] p-8 flex flex-col gap-8"
        >
          <h3 className="text-xl font-black text-slate-900">توزيع النوع</h3>
          <div className="h-[200px] w-full relative">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie data={pieData} innerRadius={60} outerRadius={80} paddingAngle={8} dataKey="value">
                  {pieData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Pie>
                <Tooltip />
              </PieChart>
            </ResponsiveContainer>
          </div>
        </motion.div>
      </div>
    </div>
  );
};
