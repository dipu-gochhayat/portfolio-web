import React from 'react';
import { portfolioData } from '../data/portfolioData';
import { Code, BookOpen, Database, Globe, Wrench, Sparkles, CheckCircle } from 'lucide-react';

const categoryIcons = {
  "Programming": Code,
  "Core Computer Science": BookOpen,
  "Databases": Database,
  "Web Technologies": Globe,
  "Tools & Environments": Wrench
};

export default function Skills() {
  const categories = portfolioData.skillCategories;

  return (
    <section id="skills" className="py-24 relative bg-grid-pattern">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-xs font-mono font-medium">
            <Sparkles className="w-3.5 h-3.5" />
            Technical Foundation
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Skills & Knowledge Base
          </h2>
          <p className="text-base text-slate-400">
            A structured breakdown of programming languages, foundational computer science subjects, and developer tools.
          </p>
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {categories.map((cat, idx) => {
            const Icon = categoryIcons[cat.category] || Code;
            const isFullWidthOnLarge = idx === 4; // Tools & Environments can span or fit nicely

            return (
              <div
                key={cat.category}
                className={`p-6 sm:p-7 rounded-2xl bg-[#0c1426]/75 border border-slate-800/90 hover:border-slate-700 backdrop-blur-md transition-all duration-300 flex flex-col justify-between group ${
                  isFullWidthOnLarge ? 'md:col-span-2 lg:col-span-1' : ''
                }`}
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="w-10 h-10 rounded-xl bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center text-cyan-400 group-hover:scale-105 transition-transform">
                      <Icon className="w-5 h-5" />
                    </div>
                    <span className="text-xs font-mono text-slate-400 bg-slate-900 px-2.5 py-1 rounded-full border border-slate-800">
                      {cat.skills.length} competencies
                    </span>
                  </div>

                  <div>
                    <h3 className="text-lg font-bold text-white group-hover:text-indigo-200 transition-colors">
                      {cat.category}
                    </h3>
                    <p className="text-xs text-slate-400 mt-1 leading-normal">
                      {cat.description}
                    </p>
                  </div>

                  {/* Skills badges (NO fake percentages) */}
                  <div className="flex flex-wrap gap-2 pt-2">
                    {cat.skills.map((skill) => (
                      <div
                        key={skill}
                        className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-slate-900/90 border border-slate-700/70 text-xs font-medium text-slate-200 hover:border-cyan-500/40 hover:text-white transition-colors"
                      >
                        <CheckCircle className="w-3.5 h-3.5 text-cyan-400 shrink-0" />
                        <span>{skill}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-4 mt-4 border-t border-slate-800/60 text-[11px] font-mono text-slate-400">
                  Verified coursework & project practice
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
