import React from 'react';
import { portfolioData } from '../data/portfolioData';
import { GraduationCap, Trophy, Code2, Building2 } from 'lucide-react';

const icons = [GraduationCap, Trophy, Code2, Building2];

export default function Stats() {
  return (
    <section className="relative z-20 -mt-6 sm:-mt-8 max-w-6xl mx-auto px-4 sm:px-6">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 p-4 sm:p-6 rounded-2xl bg-[#0d1527]/90 border border-slate-800 backdrop-blur-xl shadow-xl shadow-black/40">
        {portfolioData.stats.map((stat, idx) => {
          const Icon = icons[idx % icons.length];
          return (
            <div
              key={stat.label}
              className="flex items-center gap-3 sm:gap-4 p-3 rounded-xl hover:bg-slate-800/40 transition-colors"
            >
              <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-xl bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center shrink-0">
                <Icon className="w-5 h-5 text-cyan-400" />
              </div>
              <div>
                <div className="text-lg sm:text-xl font-bold font-mono text-white tracking-tight">
                  {stat.value}
                </div>
                <div className="text-xs text-slate-400 font-medium leading-tight">
                  {stat.label}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
