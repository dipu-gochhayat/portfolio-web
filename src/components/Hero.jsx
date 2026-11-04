import React, { useState, useEffect } from 'react';
import { ArrowDown, ArrowUpRight } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export default function Hero() {
  const [photoOpacity, setPhotoOpacity] = useState(1);
  const [translateY, setTranslateY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      // Fades out completely within 65% of viewport scroll
      const fadeDistance = window.innerHeight * 0.65;
      const currentOpacity = Math.max(0, 1 - scrollY / fadeDistance);
      setPhotoOpacity(currentOpacity);
      setTranslateY(scrollY * 0.16); // subtle downward parallax
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section
      id="home"
      className="relative min-h-screen pt-28 sm:pt-32 pb-8 flex flex-col justify-between overflow-hidden bg-[#030303] select-none"
    >
      {/* 4-Column Editorial Vertical Grid Lines (Exact Sarthak style) */}
      <div
        className="absolute inset-0 pointer-events-none z-0"
        style={{
          backgroundImage:
            'linear-gradient(to right, rgba(255, 255, 255, 0.032) 1px, transparent 1px)',
          backgroundSize: '25% 100%',
          maskImage:
            'linear-gradient(to bottom, black 0%, black 85%, transparent 100%)',
          WebkitMaskImage:
            'linear-gradient(to bottom, black 0%, black 85%, transparent 100%)',
        }}
        aria-hidden="true"
      />

      {/* Topline Bar */}
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-20">
        <div className="flex items-center justify-between py-3 border-b border-white/[0.08] text-[9px] sm:text-[10px] font-mono tracking-[0.2em] uppercase text-zinc-400">
          <div className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-[#ff8c59] shadow-[0_0_8px_#ff8c59] inline-block animate-pulse" />
            <span className="text-zinc-200">Aspiring Software Developer</span>
            <span className="text-zinc-600 hidden sm:inline">·</span>
            <span className="text-zinc-500 hidden sm:inline">Java & Backend Architecture</span>
          </div>
          <div>
            <span className="text-zinc-400">Based in Bhubaneswar · Thinking Beyond</span>
          </div>
        </div>
      </div>

      {/* Left Margin Presence Note (Far left margin - never covers the portrait) */}
      <div
        className="hidden lg:flex flex-col gap-4 absolute left-6 xl:left-12 top-[48%] -translate-y-1/2 z-20 font-mono text-left pointer-events-none"
        aria-hidden="true"
      >
        <div className="text-[10px] tracking-[0.22em] uppercase text-[#ff8c59] font-medium">
          01 / PRESENCE
        </div>
        <div className="text-[#ff8c59] text-base leading-none font-light select-none">+</div>
        <div className="flex flex-col gap-1.5 text-[9px] xl:text-[10px] tracking-[0.18em] uppercase text-zinc-400">
          <span>ENGINEERING</span>
          <span>BACKEND SYSTEMS</span>
          <span>PROBLEM SOLVING</span>
        </div>
      </div>

      {/* Centered Backdrop Portrait (Exact Sarthak style - centered horizontally, behind headline) */}
      <div
        className="absolute left-1/2 -translate-x-1/2 top-10 sm:top-14 md:top-16 w-[340px] sm:w-[440px] md:w-[490px] lg:w-[530px] aspect-[4/5] pointer-events-none select-none z-0 will-change-transform transition-opacity duration-75 ease-out"
        style={{
          opacity: photoOpacity,
          transform: `translate3d(-50%, ${translateY}px, 0)`,
        }}
        aria-hidden="true"
      >
        <div className="relative w-full h-full">
          <img
            src="/profile-transparent.png"
            alt="Dipu Gochhayat"
            className="w-full h-full object-cover object-top filter brightness-[0.93] contrast-[1.05]"
          />
          {/* Bottom feathering gradient into #030303 so the suit dissolves into black */}
          <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-[#030303] via-[#030303]/85 to-transparent" />
        </div>
      </div>

      {/* Centered Hero Content (Overlaid on bottom half of the portrait) */}
      <div className="relative z-10 w-full max-w-5xl mx-auto px-4 flex flex-col items-center text-center mt-auto pb-10 sm:pb-14">
        
        {/* Kicker */}
        <div className="text-[10px] sm:text-xs font-mono uppercase tracking-[0.25em] text-zinc-400 mb-3 sm:mb-4 select-none">
          A HUMAN PERSPECTIVE ON TECHNOLOGY
        </div>

        {/* Giant Centered Headline with Italic Serif Accent */}
        <h1 className="text-6xl sm:text-8xl md:text-9xl lg:text-[7.5rem] xl:text-[8.5rem] font-medium tracking-tight text-white leading-[0.94] select-none">
          Dipu{' '}
          <span className="font-serif-italic bg-gradient-to-r from-white via-zinc-100 to-zinc-400 bg-clip-text text-transparent font-normal">
            Gochhayat
          </span>
        </h1>

        {/* Centered Description */}
        <p className="mt-5 sm:mt-6 text-sm sm:text-base md:text-lg text-zinc-300 max-w-xl mx-auto leading-relaxed text-center font-normal px-2">
          {portfolioData.personal.bio}
        </p>

        {/* Centered Action Buttons */}
        <div className="mt-7 sm:mt-9 flex flex-wrap items-center justify-center gap-4 sm:gap-6">
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
      </div>

      {/* Hero Bottom Bar */}
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-20 pt-8 border-t border-white/[0.08]">
        <div className="flex flex-wrap items-center justify-between gap-4 text-[10px] sm:text-xs font-mono uppercase tracking-widest text-zinc-400">
          <a href="#about" className="hover:text-white transition-colors flex items-center gap-2">
            <span className="w-4 h-[1px] bg-zinc-600 inline-block" />
            <span>Scroll to discover</span>
            <ArrowDown className="w-3.5 h-3.5" />
          </a>
          
          <span className="hidden sm:inline text-zinc-500">
            Nalanda Institute of Technology · Class of '28
          </span>
          
          <div className="flex items-center gap-4">
            <span className="text-zinc-300">CGPA: 8.15 ↗</span>
            <div className="hidden sm:flex items-center gap-1.5 px-2.5 py-1 rounded border border-white/10 bg-white/[0.02] text-[10px] tracking-wider text-zinc-400">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 inline-block" />
              <span>MOTION ON</span>
            </div>
          </div>
        </div>
      </div>

    </section>
  );
}
