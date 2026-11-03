import React, { useState, useEffect } from 'react';
import { ArrowRight, Send, Download, Mail, Terminal, Sparkles, Shield, Code, Cpu, Award } from 'lucide-react';
import { GithubIcon, LinkedinIcon, TwitterIcon } from './SocialIcons';
import { portfolioData } from '../data/portfolioData';

export default function Hero() {
  const [roleIndex, setRoleIndex] = useState(0);
  const [imgError, setImgError] = useState(false);
  const roles = portfolioData.personal.roles;

  useEffect(() => {
    const timer = setInterval(() => {
      setRoleIndex((prev) => (prev + 1) % roles.length);
    }, 3200);
    return () => clearInterval(timer);
  }, [roles.length]);

  return (
    <section id="home" className="relative min-h-[92vh] pt-32 pb-20 flex items-center justify-center overflow-x-clip bg-grid-pattern">
      {/* Refined ambient glow effects */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[520px] h-[520px] bg-gradient-to-tr from-indigo-600/20 via-purple-600/15 to-cyan-500/15 rounded-full blur-[110px] pointer-events-none animate-ambient-glow" />
      <div className="absolute top-1/3 -left-20 w-72 h-72 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 -right-20 w-80 h-80 bg-indigo-600/15 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-10 items-center">
          
          {/* Left Column: Name & Details */}
          <div className="lg:col-span-7 text-left space-y-6">
            
            {/* Status chip */}
            <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-slate-900/90 border border-slate-700/70 shadow-lg shadow-black/20 backdrop-blur-md">
              <span className="flex h-2.5 w-2.5 relative">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
              </span>
              <span className="text-xs font-mono font-medium text-emerald-400">
                {portfolioData.personal.status}
              </span>
              <span className="text-slate-600">•</span>
              <span className="text-xs text-slate-400 font-medium hidden sm:inline">
                {portfolioData.personal.location}
              </span>
            </div>

            {/* Main Greeting & Headline with Name as Primary Highlight */}
            <div className="space-y-3">
              <p className="text-sm sm:text-base font-mono text-cyan-400 font-medium tracking-wide">
                Hi, my name is
              </p>
              
              <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-white leading-[1.1]">
                {portfolioData.personal.name}
              </h1>

              {/* Dynamic Role Rotator */}
              <div className="h-10 sm:h-12 flex items-center">
                <div className="inline-flex items-center gap-2 text-xl sm:text-2xl lg:text-3xl font-semibold text-gradient-primary">
                  <span className="text-slate-500 font-mono font-normal">&gt;</span>
                  <span className="transition-all duration-300">
                    {roles[roleIndex]}
                  </span>
                  <span className="animate-pulse text-indigo-400 font-mono">_</span>
                </div>
              </div>
            </div>

            {/* Subtitle / Value proposition */}
            <p className="text-base sm:text-lg text-slate-300 max-w-2xl leading-relaxed">
              {portfolioData.personal.tagline}
            </p>

            {/* Quick Education Callout */}
            <div className="p-3.5 rounded-xl bg-slate-900/60 border border-slate-800/80 max-w-xl flex items-center gap-3 text-xs sm:text-sm text-slate-300">
              <div className="w-8 h-8 rounded-lg bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center text-indigo-400 shrink-0">
                <Terminal className="w-4 h-4" />
              </div>
              <p>
                <strong className="text-white">B.Tech CSE</strong> @ Nalanda Institute of Technology, Bhubaneswar <span className="text-cyan-400 font-mono">(Graduating 2028 • CGPA: 8.15)</span>
              </p>
            </div>

            {/* Call to Action Buttons */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <a
                href="#projects"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl font-semibold text-white bg-gradient-to-r from-indigo-500 via-indigo-600 to-cyan-500 hover:opacity-95 shadow-lg shadow-indigo-500/25 transition-all transform hover:-translate-y-0.5 active:translate-y-0 text-sm sm:text-base"
              >
                <span>Explore My Work</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <a
                href="#contact"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl font-semibold text-slate-200 bg-slate-900/90 hover:bg-slate-800 border border-slate-700/80 hover:border-slate-600 transition-all transform hover:-translate-y-0.5 text-sm sm:text-base"
              >
                <span>Let's Connect</span>
                <Send className="w-4 h-4 text-cyan-400" />
              </a>
            </div>

            {/* Social Links & Trust row */}
            <div className="pt-6 border-t border-slate-800/80 flex flex-wrap items-center gap-5">
              <span className="text-xs font-mono uppercase tracking-wider text-slate-400">
                Find me on:
              </span>
              <div className="flex items-center gap-3">
                <a
                  href={portfolioData.personal.socials.github}
                  target="_blank"
                  rel="noreferrer"
                  className="p-2.5 rounded-xl bg-slate-900/90 border border-slate-800 text-slate-400 hover:text-white hover:border-indigo-500/50 hover:bg-slate-800 transition-all"
                  aria-label="GitHub Profile"
                >
                  <GithubIcon className="w-4 h-4" />
                </a>
                <a
                  href={portfolioData.personal.socials.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  className="p-2.5 rounded-xl bg-slate-900/90 border border-slate-800 text-slate-400 hover:text-white hover:border-indigo-500/50 hover:bg-slate-800 transition-all"
                  aria-label="LinkedIn Profile"
                >
                  <LinkedinIcon className="w-4 h-4" />
                </a>
                <a
                  href={portfolioData.personal.socials.twitter}
                  target="_blank"
                  rel="noreferrer"
                  className="p-2.5 rounded-xl bg-slate-900/90 border border-slate-800 text-slate-400 hover:text-white hover:border-indigo-500/50 hover:bg-slate-800 transition-all"
                  aria-label="Twitter Profile"
                >
                  <TwitterIcon className="w-4 h-4" />
                </a>
                <a
                  href={portfolioData.personal.socials.email}
                  className="p-2.5 rounded-xl bg-slate-900/90 border border-slate-800 text-slate-400 hover:text-white hover:border-indigo-500/50 hover:bg-slate-800 transition-all"
                  aria-label="Email Me"
                >
                  <Mail className="w-4 h-4" />
                </a>
              </div>
            </div>

          </div>

          {/* Right Column: Professional Photo with Floating Effect */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end">
            <div className="relative animate-photo-float">
              
              {/* Backlight Ambient Glow */}
              <div className="absolute -inset-3 rounded-3xl bg-gradient-to-tr from-indigo-500/30 via-purple-500/20 to-cyan-400/30 blur-2xl opacity-70 group-hover:opacity-100 transition-opacity" />

              {/* Photo Frame Container */}
              <div className="relative w-72 sm:w-80 md:w-96 rounded-3xl p-1 bg-gradient-to-b from-indigo-500/40 via-slate-800/80 to-cyan-500/40 shadow-2xl shadow-black/80">
                <div className="relative w-full h-[360px] sm:h-[420px] rounded-[22px] overflow-hidden bg-[#0c1426] flex flex-col items-center justify-center">
                  
                  {!imgError ? (
                    <img
                      src={portfolioData.personal.photoUrl}
                      alt={portfolioData.personal.name}
                      onError={() => setImgError(true)}
                      className="w-full h-full object-cover object-top hover:scale-105 transition-transform duration-500"
                    />
                  ) : (
                    /* Stylized Developer Avatar Fallback if photo not yet uploaded */
                    <div className="w-full h-full flex flex-col items-center justify-center p-6 text-center space-y-4 bg-gradient-to-b from-[#0e172e] to-[#070c18]">
                      {/* Initials Badge */}
                      <div className="w-28 h-28 rounded-full bg-gradient-to-tr from-indigo-600 via-purple-600 to-cyan-400 p-[2px] shadow-xl shadow-indigo-500/30">
                        <div className="w-full h-full rounded-full bg-[#090d16] flex items-center justify-center">
                          <span className="text-3xl font-bold font-mono text-gradient-primary">
                            DG
                          </span>
                        </div>
                      </div>

                      <div className="space-y-1">
                        <h3 className="text-xl font-bold text-white">
                          Dipu Gochhayat
                        </h3>
                        <p className="text-xs text-cyan-400 font-mono">
                          Aspiring Software Developer
                        </p>
                      </div>

                      <p className="text-xs text-slate-400 max-w-xs leading-relaxed">
                        Computer Science Engineering student at Nalanda Institute of Technology, Bhubaneswar.
                      </p>

                      <div className="pt-2 flex items-center gap-2 text-[11px] font-mono text-indigo-300 bg-indigo-950/40 border border-indigo-800/40 px-3 py-1.5 rounded-full">
                        <Code className="w-3.5 h-3.5" />
                        Java • Backend • CyberSec
                      </div>
                    </div>
                  )}

                  {/* Subtle gradient overlay at bottom of photo */}
                  <div className="absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-[#090d16] via-[#090d16]/60 to-transparent pointer-events-none" />

                  {/* Corner Label */}
                  <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-xs font-mono text-slate-300 bg-[#090d16]/80 backdrop-blur-md px-3.5 py-2 rounded-xl border border-slate-800/80">
                    <span className="flex items-center gap-1.5 text-white font-medium">
                      <Award className="w-3.5 h-3.5 text-amber-400" />
                      NIT Bhubaneswar
                    </span>
                    <span className="text-cyan-400 font-semibold">
                      Class of 2028
                    </span>
                  </div>

                </div>
              </div>

              {/* Floating Tech Badges */}
              <div className="absolute -top-4 -left-6 px-3 py-1.5 rounded-xl bg-slate-900/95 border border-indigo-500/40 shadow-xl shadow-indigo-500/10 flex items-center gap-2 backdrop-blur-md hidden sm:flex">
                <Code className="w-4 h-4 text-indigo-400" />
                <span className="text-xs font-mono font-medium text-white">Java Dev</span>
              </div>

              <div className="absolute -bottom-4 -right-4 px-3.5 py-1.5 rounded-xl bg-slate-900/95 border border-cyan-500/40 shadow-xl shadow-cyan-500/10 flex items-center gap-2 backdrop-blur-md hidden sm:flex">
                <Shield className="w-4 h-4 text-cyan-400" />
                <span className="text-xs font-mono font-medium text-white">Cybersecurity</span>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
