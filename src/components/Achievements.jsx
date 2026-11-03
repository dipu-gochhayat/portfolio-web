import React from 'react';
import { portfolioData } from '../data/portfolioData';
import { Trophy, Award, Target, Sparkles, Calendar, CheckCircle2 } from 'lucide-react';

const achievementIcons = {
  trophy: Trophy,
  award: Award,
  target: Target
};

export default function Achievements() {
  const achievements = portfolioData.achievements;

  return (
    <section id="achievements" className="py-24 relative bg-grid-pattern">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-400 text-xs font-mono font-medium">
            <Trophy className="w-3.5 h-3.5" />
            Competitive Honors
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Hackathons & Achievements
          </h2>
          <p className="text-base text-slate-400">
            Milestones earned through competitive engineering, hackathons, and institutional hackathon selections.
          </p>
        </div>

        {/* Elegant Timeline */}
        <div className="relative border-l-2 border-slate-800 ml-4 sm:ml-8 pl-6 sm:pl-10 space-y-10">
          {achievements.map((item, index) => {
            const Icon = achievementIcons[item.iconType] || Trophy;

            return (
              <div key={item.id} className="relative group">
                {/* Glowing Node on Timeline */}
                <div className="absolute -left-[33px] sm:-left-[49px] top-1.5 w-6 h-6 rounded-full bg-[#090d16] border-2 border-indigo-500 flex items-center justify-center group-hover:scale-125 group-hover:border-cyan-400 transition-all duration-300 shadow-md shadow-indigo-500/20">
                  <div className="w-2.5 h-2.5 rounded-full bg-indigo-400 group-hover:bg-cyan-400" />
                </div>

                {/* Timeline Card */}
                <div className="p-6 sm:p-8 rounded-2xl bg-[#0c1426]/80 border border-slate-800/90 hover:border-slate-700 backdrop-blur-md transition-all duration-300 space-y-4 shadow-lg shadow-black/20">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                    <div className="space-y-1">
                      <div className="flex items-center gap-2.5">
                        <div className="w-8 h-8 rounded-lg bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center text-cyan-400 shrink-0">
                          <Icon className="w-4 h-4" />
                        </div>
                        <h3 className="text-xl font-bold text-white group-hover:text-indigo-200 transition-colors">
                          {item.title}
                        </h3>
                      </div>
                    </div>

                    <div className="flex items-center gap-2 self-start sm:self-auto">
                      <span className={`px-3 py-1 rounded-full text-xs font-mono font-medium border ${item.badgeColor}`}>
                        {item.badge}
                      </span>
                      <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-slate-900 border border-slate-800 text-xs font-mono text-slate-300">
                        <Calendar className="w-3 h-3 text-slate-400" />
                        {item.year}
                      </span>
                    </div>
                  </div>

                  <p className="text-sm sm:text-base text-slate-300 leading-relaxed font-normal">
                    {item.details}
                  </p>

                  <div className="pt-2 flex items-center gap-2 text-xs font-mono text-slate-400">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                    <span>{item.summary}</span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
