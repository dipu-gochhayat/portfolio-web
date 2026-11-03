import React from 'react';
import { portfolioData } from '../data/portfolioData';
import { Code, BookOpen, Database, Globe, Wrench, ArrowUpRight } from 'lucide-react';

const categoryNumberMap = ['01', '02', '03', '04', '05'];

export default function Skills() {
  const categories = portfolioData.skillCategories;

  return (
    <section id="skills" className="py-28 relative bg-[#030303] border-b border-white/[0.08]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Label */}
        <div className="section-label">
          <span>03 / How I Think & Work</span>
          <span>Depth Meets Perspective</span>
        </div>

        {/* Editorial Heading */}
        <div className="max-w-3xl mb-16 space-y-4">
          <h2 className="text-4xl sm:text-6xl font-medium tracking-tight text-white leading-[1.08]">
            How I work.<br />
            <span className="font-serif-italic text-zinc-300 font-normal">
              From logic to reliable systems.
            </span>
          </h2>
          <p className="text-base sm:text-lg text-zinc-400 font-normal">
            A solid computational foundation organized into functional disciplines: programming, core algorithms, database schemas, and developer tooling.
          </p>
        </div>

        {/* Categories Grid (Clean editorial cards, NO fake percentages) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {categories.map((cat, idx) => (
            <div
              key={cat.category}
              className={`p-8 rounded-2xl bg-[#080808] border border-white/[0.08] hover:border-white/[0.18] transition-colors flex flex-col justify-between space-y-6 ${
                idx === 4 ? 'md:col-span-2 lg:col-span-1' : ''
              }`}
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between text-xs font-mono uppercase tracking-widest text-zinc-500 pb-2 border-b border-white/[0.08]">
                  <span>{categoryNumberMap[idx]} / {cat.category}</span>
                  <span className="text-zinc-400">{cat.skills.length} skills</span>
                </div>

                <h3 className="text-xl font-medium text-white">
                  {cat.category}
                </h3>

                <p className="text-xs text-zinc-400 leading-relaxed">
                  {cat.description}
                </p>

                {/* Skills Chips */}
                <div className="flex flex-wrap gap-2 pt-2">
                  {cat.skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-3 py-1.5 rounded-lg text-xs font-mono bg-zinc-900/90 border border-zinc-800 text-zinc-200"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              <div className="pt-4 border-t border-white/[0.08] text-[11px] font-mono text-zinc-400 flex items-center justify-between">
                <span>Verified Coursework</span>
                <span className="text-zinc-400">NIT Bhubaneswar ↗</span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
