import React from 'react';
import { Users, Star, Download } from 'lucide-react';
import { StatItem } from '../types';

const Stats: React.FC = () => {
  const stats: StatItem[] = [
    {
      label: "Ebooks Access",
      value: "Instant",
      icon: <Download className="h-8 w-8" />,
      colorClass: "text-amber-500 bg-amber-950/30 border border-amber-900/50"
    },
    {
      label: "Community Members",
      value: "23k+",
      icon: <Users className="h-8 w-8" />,
      colorClass: "text-orange-500 bg-orange-950/30 border border-orange-900/50"
    },
    {
      label: "Wisdom Shared",
      value: "Daily",
      icon: <Star className="h-8 w-8" />,
      colorClass: "text-yellow-500 bg-yellow-950/30 border border-yellow-900/50"
    }
  ];

  return (
    <section className="py-12 bg-slate-900 relative z-20 border-b border-slate-800">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto -mt-20">
          {stats.map((stat, index) => (
            <div 
              key={index} 
              className="bg-slate-800 rounded-2xl p-8 shadow-xl flex flex-col items-center text-center hover:-translate-y-2 transition-transform duration-300 border border-slate-700 backdrop-blur-sm"
            >
              <div className={`w-16 h-16 rounded-full flex items-center justify-center mb-4 ${stat.colorClass}`}>
                {stat.icon}
              </div>
              <h3 className="text-3xl font-bold text-white mb-1 font-serif">{stat.value}</h3>
              <p className="text-slate-400 font-medium">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;