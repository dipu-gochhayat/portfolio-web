import React, { useState, useEffect } from 'react';
import { ArrowDown, ArrowUpRight, Award, Shield, Code2, MapPin } from 'lucide-react';
import { GithubIcon, LinkedinIcon, TwitterIcon } from './SocialIcons';
import { portfolioData } from '../data/portfolioData';

export default function Hero() {
  const [roleIndex, setRoleIndex] = useState(0);
  const roles = portfolioData.personal.roles;

  useEffect(() => {
    const timer = setInterval(() => {
      setRoleIndex((prev) => (prev + 1) % roles.length);
    }, 3200);
    return () => clearInterval(timer);
  }, [roles.length]);

  return (
    <section id="home" className="relative min-h-screen pt-32 pb-16 flex flex-col justify-between overflow-x-clip bg-grid-editorial z-10">
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full flex-1 flex flex-col justify-center">
        
        {/* Topline Bar */}
        <div className="flex flex-wrap items-center justify-between gap-4 py-3 border-b border-white/[0.08] text-xs font-mono tracking-widest text-zinc-400 mb-12 sm:mb-16 uppercase">
          <div className="flex items-center gap-2">
            <span className="live-dot" />
            <span className="text-zinc-300">Aspiring Software Developer</span>
            <span className="text-zinc-600 hidden sm:inline">·</span>
            <span className="text-zinc-500 hidden sm:inline">Java & Backend Architecture</span>
          </div>
          <div>
            <span>Based in Bhubaneswar · Thinking Beyond</span>
          </div>
        </div>

        {/* Main Grid: Headline on Left, Subtle Side Note on Right allowing background photo to shine */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          
          {/* Left Column: Primary Typography & Callouts */}
          <div className="lg:col-span-8 space-y-7">
            
            {/* Kicker */}
            <div className="text-xs font-mono uppercase tracking-[0.2em] text-zinc-400">
              A Human Perspective on Technology
            </div>

            {/* Headline with Signature Italic Serif */}
            <div className="space-y-3">
              <h1 className="text-5xl sm:text-7xl lg:text-8xl font-medium tracking-tight text-white leading-[1.02]">
                Dipu{' '}
                <span className="font-serif-italic text-zinc-300 font-normal">
                  Gochhayat
                </span>
              </h1>

              {/* Dynamic Subtitle Rotator */}
              <div className="flex items-center gap-2 text-base sm:text-xl font-mono text-zinc-400 pt-1">
                <span className="text-zinc-600">&gt;</span>
                <span className="text-zinc-200">{roles[roleIndex]}</span>
                <span className="animate-pulse text-indigo-400 font-mono">_</span>
              </div>
            </div>

            {/* Description */}
            <p className="text-base sm:text-lg text-zinc-300 max-w-xl leading-relaxed font-normal">
              Computer Science student at Nalanda Institute of Technology, Bhubaneswar. Turning ideas into resilient software, exploring cybersecurity, and building practical systems for real-world impact.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-5 pt-3">
              <a
                href="#projects"
                className="pill-link"
              >
                <span>Explore my work</span>
                <ArrowDown className="w-4 h-4" />
              </a>

              <a
                href="#contact"
                className="text-link text-sm"
              >
                <span>Start a conversation</span>
                <ArrowUpRight className="w-4 h-4 text-zinc-400" />
              </a>
            </div>

            {/* Social Links Row */}
            <div className="pt-6 border-t border-white/[0.08] flex items-center gap-6 text-xs font-mono uppercase tracking-wider text-zinc-400">
              <span className="text-zinc-500">Connect:</span>
              <div className="flex items-center gap-4">
                <a
                  href={portfolioData.personal.socials.github}
                  target="_blank"
                  rel="noreferrer"
                  className="hover:text-white transition-colors flex items-center gap-1.5"
                >
                  <GithubIcon className="w-3.5 h-3.5" />
                  <span>GitHub</span>
                </a>
                <a
                  href={portfolioData.personal.socials.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  className="hover:text-white transition-colors flex items-center gap-1.5"
                >
                  <LinkedinIcon className="w-3.5 h-3.5" />
                  <span>LinkedIn</span>
                </a>
                <a
                  href={portfolioData.personal.socials.twitter}
                  target="_blank"
                  rel="noreferrer"
                  className="hover:text-white transition-colors flex items-center gap-1.5"
                >
                  <TwitterIcon className="w-3.5 h-3.5" />
                  <span>Twitter</span>
                </a>
              </div>
            </div>

          </div>

          {/* Right Column: Editorial Side Note widget (Sarthak Sharma style) */}
          <div className="lg:col-span-4 flex justify-start lg:justify-end">
            <div className="hidden lg:flex flex-col justify-between h-72 p-6 rounded-2xl bg-black/40 backdrop-blur-md border border-white/[0.08] text-xs font-mono uppercase tracking-widest text-zinc-400 max-w-xs w-full shadow-2xl">
              <div className="flex items-center justify-between pb-3 border-b border-white/[0.08]">
                <span>01 / Presence</span>
                <span className="text-emerald-400 flex items-center gap-1">
                  <span className="live-dot" /> Online
                </span>
              </div>

              <div className="space-y-1.5 text-zinc-300">
                <div className="text-white font-medium">Software Engineering</div>
                <div>Java & Backend Systems</div>
                <div>Cybersecurity Auditing</div>
              </div>

              <div className="pt-3 border-t border-white/[0.08] flex items-center justify-between text-[11px] text-zinc-400">
                <span>NIT Bhubaneswar</span>
                <span className="text-zinc-300">Class of '28</span>
              </div>
            </div>
          </div>

        </div>

      </div>

      {/* Hero Bottom Bar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full pt-10 border-t border-white/[0.08] mt-12">
        <div className="flex flex-wrap items-center justify-between gap-4 text-xs font-mono uppercase tracking-widest text-zinc-400">
          <a href="#about" className="hover:text-white transition-colors flex items-center gap-2">
            <span className="w-4 h-[1px] bg-zinc-600 inline-block" />
            <span>Scroll to discover</span>
            <ArrowDown className="w-3.5 h-3.5" />
          </a>
          <span className="hidden sm:inline">Building & Solving Since 2024</span>
          <span className="text-zinc-300">CGPA: 8.15 ↗</span>
        </div>
      </div>
    </section>
  );
}
