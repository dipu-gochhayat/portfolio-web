import React from 'react';
import { portfolioData } from '../data/portfolioData';
import { Trophy, Award, Target, ArrowUpRight } from 'lucide-react';

const icons = {
  trophy: Trophy,
  award: Award,
  target: Target
};

export default function Achievements() {
  const achievements = portfolioData.achievements;

  return (
    <section id="achievements" className="py-28 relative bg-[#030303] border-b border-white/[0.08]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Label */}
        <div className="section-label">
          <span>04 / Honors & Milestones</span>
          <span>Verified Competitive Excellence</span>
        </div>

        {/* Editorial Heading */}
        <div className="max-w-3xl mb-16 space-y-4">
          <h2 className="text-4xl sm:text-6xl font-medium tracking-tight text-white leading-[1.08]">
            Reach is a number.<br />
            <span className="font-serif-italic text-zinc-300 font-normal">
              Impact is personal.
            </span>
          </h2>
          <p className="text-base sm:text-lg text-zinc-400 font-normal">
            Honors earned through intensive coding sprints, cybersecurity tournaments, and institutional hackathon selections.
          </p>
        </div>

        {/* Milestones Timeline List (Sarthak brand milestones style) */}
        <div className="space-y-6">
          {achievements.map((item, idx) => {
            const Icon = icons[item.iconType] || Trophy;

            return (
              <div
                key={item.id}
                className="p-8 sm:p-10 rounded-2xl bg-[#080808] border border-white/[0.08] hover:border-white/[0.18] transition-colors flex flex-col md:flex-row md:items-center justify-between gap-6 group"
              >
                <div className="flex items-start gap-6">
                  {/* Year Tag */}
                  <div className="text-2xl sm:text-3xl font-mono font-bold text-zinc-500 group-hover:text-white transition-colors shrink-0">
                    {item.year}
                  </div>

                  <div className="space-y-2">
                    <div className="flex flex-wrap items-center gap-3">
                      <h3 className="text-xl sm:text-2xl font-bold text-white">
                        {item.title}
                      </h3>
                      <span className={`px-3 py-1 rounded-full text-xs font-mono font-medium border ${item.badgeColor}`}>
                        {item.badge}
                      </span>
                    </div>

                    <p className="text-sm sm:text-base text-zinc-400 max-w-3xl leading-relaxed">
                      {item.details}
                    </p>
                  </div>
                </div>

                <div className="shrink-0 self-end md:self-center">
                  <div className="w-10 h-10 rounded-full border border-white/[0.1] flex items-center justify-center text-zinc-400 group-hover:border-white group-hover:text-white transition-colors">
                    <ArrowUpRight className="w-4 h-4" />
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
