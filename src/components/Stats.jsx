import React from 'react';
import { ArrowUpRight } from 'lucide-react';

export default function Stats() {
  return (
    <section className="relative z-20 border-y border-white/[0.08] bg-[#070707] py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center">
          
          {/* Stat 1 */}
          <div className="space-y-1">
            <div className="text-3xl sm:text-4xl font-extrabold text-white font-mono tracking-tight">
              8.15<span className="text-indigo-400 text-2xl font-light">/10</span>
            </div>
            <p className="text-xs font-mono uppercase tracking-wider text-zinc-400">
              CGPA · B.Tech CSE (2028)
            </p>
          </div>

          {/* Stat 2 */}
          <div className="space-y-1">
            <div className="text-3xl sm:text-4xl font-extrabold text-white font-mono tracking-tight">
              3<span className="text-cyan-400 text-2xl">+</span>
            </div>
            <p className="text-xs font-mono uppercase tracking-wider text-zinc-400">
              Hackathons & Honors
            </p>
          </div>

          {/* Stat 3 */}
          <div className="space-y-1">
            <div className="text-3xl sm:text-4xl font-extrabold text-white font-mono tracking-tight">
              Top 30
            </div>
            <p className="text-xs font-mono uppercase tracking-wider text-zinc-400">
              Finalist / 160 Teams (Chakravyuh)
            </p>
          </div>

          {/* Impact Callout Link */}
          <div className="flex md:justify-end">
            <a
              href="#projects"
              className="group inline-flex items-center gap-3 text-xs font-mono uppercase tracking-widest text-zinc-300 hover:text-white transition-colors"
            >
              <span>
                The Work.<br />
                <span className="text-white group-hover:text-cyan-300 transition-colors">The Real-World Impact.</span>
              </span>
              <div className="w-8 h-8 rounded-full border border-white/[0.15] flex items-center justify-center group-hover:border-white transition-colors shrink-0">
                <ArrowUpRight className="w-4 h-4 text-zinc-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </div>
            </a>
          </div>

        </div>
      </div>
    </section>
  );
}
