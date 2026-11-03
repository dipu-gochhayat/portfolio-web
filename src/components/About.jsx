import React from 'react';
import { portfolioData } from '../data/portfolioData';
import { GraduationCap, Target, Compass, Sparkles, MapPin, Award, CheckCircle2, ShieldCheck, Code2, Server } from 'lucide-react';

export default function About() {
  const { education, primaryFocus, interests, bio } = portfolioData.personal;

  return (
    <section id="about" className="py-24 relative overflow-hidden">
      {/* Background radial accent */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-indigo-600/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-cyan-600/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Title */}
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 text-xs font-mono font-medium">
            <Sparkles className="w-3.5 h-3.5" />
            About Me
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Curious Learner & Problem Solver
          </h2>
          <p className="text-base text-slate-400">
            A snapshot of my academic journey, technical direction, and software engineering interests.
          </p>
        </div>

        {/* Bio Spotlight Banner */}
        <div className="max-w-4xl mx-auto mb-12">
          <div className="p-6 sm:p-8 rounded-2xl bg-gradient-to-r from-[#0c1426] via-[#101935] to-[#0c1426] border border-slate-800/80 shadow-xl relative overflow-hidden">
            <div className="absolute top-0 right-0 w-48 h-48 bg-indigo-500/10 rounded-full blur-2xl pointer-events-none" />
            <div className="relative z-10 flex flex-col sm:flex-row items-start sm:items-center gap-5">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-tr from-indigo-600 to-cyan-500 p-[1px] shrink-0">
                <div className="w-full h-full bg-[#090d16] rounded-xl flex items-center justify-center">
                  <Code2 className="w-6 h-6 text-cyan-400" />
                </div>
              </div>
              <p className="text-base sm:text-lg text-slate-200 leading-relaxed font-normal">
                "{bio}"
              </p>
            </div>
          </div>
        </div>

        {/* 3 Visually Balanced Cards: Education, Primary Focus, Areas of Interest */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          
          {/* Card 1: Education */}
          <div className="p-6 sm:p-7 rounded-2xl bg-[#0c1426]/75 border border-slate-800 hover:border-indigo-500/40 backdrop-blur-md transition-all duration-300 flex flex-col justify-between group">
            <div className="space-y-4">
              <div className="w-12 h-12 rounded-xl bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center text-indigo-400 group-hover:scale-105 transition-transform">
                <GraduationCap className="w-6 h-6" />
              </div>

              <div>
                <span className="text-xs font-mono uppercase tracking-wider text-cyan-400 font-medium">Academics</span>
                <h3 className="text-xl font-bold text-white mt-0.5">Education</h3>
              </div>

              <div className="space-y-2 text-sm text-slate-300">
                <p className="font-semibold text-white">
                  {education.degree}
                </p>
                <p className="text-slate-400 text-xs sm:text-sm">
                  {education.college}
                </p>
                <div className="flex items-center gap-1.5 text-xs text-slate-400 pt-1">
                  <MapPin className="w-3.5 h-3.5 text-slate-400" />
                  <span>{education.location}</span>
                </div>
              </div>
            </div>

            <div className="pt-5 mt-5 border-t border-slate-800/80 flex items-center justify-between">
              <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-mono font-medium">
                <Award className="w-3.5 h-3.5" />
                CGPA: {education.cgpa}
              </span>
              <span className="text-xs font-mono text-slate-400">
                Graduating: {education.graduation}
              </span>
            </div>
          </div>

          {/* Card 2: Primary Focus */}
          <div className="p-6 sm:p-7 rounded-2xl bg-[#0c1426]/75 border border-slate-800 hover:border-indigo-500/40 backdrop-blur-md transition-all duration-300 flex flex-col justify-between group">
            <div className="space-y-4">
              <div className="w-12 h-12 rounded-xl bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center text-cyan-400 group-hover:scale-105 transition-transform">
                <Target className="w-6 h-6" />
              </div>

              <div>
                <span className="text-xs font-mono uppercase tracking-wider text-cyan-400 font-medium">Engineering</span>
                <h3 className="text-xl font-bold text-white mt-0.5">Primary Focus</h3>
              </div>

              <div className="space-y-2.5">
                {primaryFocus.map((focus) => (
                  <div key={focus} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-300">
                    <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                    <span>{focus}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="pt-5 mt-5 border-t border-slate-800/80 text-xs text-slate-400 font-mono flex items-center gap-1.5">
              <Server className="w-3.5 h-3.5 text-indigo-400" />
              Robust, maintainable software design
            </div>
          </div>

          {/* Card 3: Areas of Interest */}
          <div className="p-6 sm:p-7 rounded-2xl bg-[#0c1426]/75 border border-slate-800 hover:border-indigo-500/40 backdrop-blur-md transition-all duration-300 flex flex-col justify-between group">
            <div className="space-y-4">
              <div className="w-12 h-12 rounded-xl bg-purple-500/10 border border-purple-500/20 flex items-center justify-center text-purple-400 group-hover:scale-105 transition-transform">
                <Compass className="w-6 h-6" />
              </div>

              <div>
                <span className="text-xs font-mono uppercase tracking-wider text-purple-400 font-medium">Exploration</span>
                <h3 className="text-xl font-bold text-white mt-0.5">Areas of Interest</h3>
              </div>

              <div className="flex flex-wrap gap-2">
                {interests.map((interest) => (
                  <span
                    key={interest}
                    className="px-3 py-1.5 rounded-xl text-xs font-medium bg-slate-900 border border-slate-700/80 text-slate-200 hover:border-indigo-500/50 hover:text-white transition-colors"
                  >
                    {interest}
                  </span>
                ))}
              </div>
            </div>

            <div className="pt-5 mt-5 border-t border-slate-800/80 text-xs text-slate-400 font-mono flex items-center gap-1.5">
              <ShieldCheck className="w-3.5 h-3.5 text-purple-400" />
              Security awareness & digital systems
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
