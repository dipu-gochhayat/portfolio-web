import React, { useState } from 'react';
import { portfolioData } from '../data/portfolioData';
import { ArrowUpRight, GraduationCap, Target, Compass, Award, MapPin, CheckCircle2 } from 'lucide-react';

const perspectives = [
  {
    id: 'build',
    label: 'Build',
    title: 'Architect reliable software.',
    description: 'Developing high-performance backend systems and clean, object-oriented Java solutions that turn abstract ideas into dependable software.',
    focusArea: 'Java · Object-Oriented Design · Backend APIs · MySQL'
  },
  {
    id: 'protect',
    label: 'Protect',
    title: 'Investigate digital footprints.',
    description: 'Exploring cybersecurity defenses, OSINT analysis, and identity exposure auditing through tools like Kali Linux and proactive vulnerability awareness.',
    focusArea: 'Cybersecurity · OSINT Tools · Digital Footprints · Kali Linux'
  },
  {
    id: 'solve',
    label: 'Solve',
    title: 'Master computational foundations.',
    description: 'Approaching real-world problems through data structures, algorithmic efficiency, and core computer science fundamentals.',
    focusArea: 'DSA · OOP · DBMS · Operating Systems · Computer Networks'
  }
];

export default function About() {
  const [activeTab, setActiveTab] = useState(0);
  const currentPerspective = perspectives[activeTab];
  const { education, primaryFocus, interests, bio } = portfolioData.personal;

  return (
    <section id="about" className="py-28 relative bg-[#030303] border-b border-white/[0.08]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Label */}
        <div className="section-label">
          <span>01 / The Person Behind The Work</span>
          <span>A Connected Perspective</span>
        </div>

        {/* Editorial Heading & Perspective Switcher */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start mb-20">
          
          {/* Left Column: Editorial Statement & Bio */}
          <div className="lg:col-span-7 space-y-6">
            <h2 className="text-4xl sm:text-6xl font-medium tracking-tight text-white leading-[1.08]">
              Technology is<br />
              the starting point.<br />
              <span className="font-serif-italic text-zinc-300 font-normal">
                People are the point.
              </span>
            </h2>

            <p className="text-lg sm:text-xl text-zinc-300 font-normal leading-relaxed pt-2">
              {bio}
            </p>

            <p className="text-sm sm:text-base text-zinc-400 leading-relaxed max-w-xl">
              Studying at Nalanda Institute of Technology, Bhubaneswar with a strong dedication to software architecture, hackathon innovation, and digital defense.
            </p>

            <div className="flex items-center gap-6 pt-4 text-xs font-mono uppercase tracking-widest text-zinc-400">
              <span>Engineering Mind.</span>
              <span>•</span>
              <span>Builder's Drive.</span>
              <span>•</span>
              <span>Security Instinct.</span>
            </div>
          </div>

          {/* Right Column: Interactive Perspective Explorer (Sarthak style) */}
          <div className="lg:col-span-5 p-7 rounded-2xl bg-[#090909] border border-white/[0.08] space-y-6">
            <div className="flex items-center justify-between text-xs font-mono uppercase tracking-wider text-zinc-400 pb-3 border-b border-white/[0.08]">
              <span>Three Disciplines. One Perspective.</span>
              <span className="text-zinc-500">0{activeTab + 1} / 03</span>
            </div>

            {/* Perspective Selector Pills */}
            <div className="flex items-center gap-2">
              {perspectives.map((p, idx) => (
                <button
                  key={p.id}
                  onClick={() => setActiveTab(idx)}
                  className={`px-4 py-2 rounded-full text-xs font-mono uppercase tracking-wider transition-all cursor-pointer ${
                    activeTab === idx
                      ? 'bg-white text-black font-semibold'
                      : 'bg-zinc-900 text-zinc-400 hover:text-white hover:bg-zinc-800'
                  }`}
                >
                  {p.label} ↗
                </button>
              ))}
            </div>

            {/* Perspective Content Card */}
            <div className="space-y-3 py-2 animate-in fade-in duration-300 key={currentPerspective.id}">
              <h3 className="text-xl font-medium text-white">
                {currentPerspective.title}
              </h3>
              <p className="text-sm text-zinc-400 leading-relaxed">
                {currentPerspective.description}
              </p>
              <div className="pt-2 text-xs font-mono text-indigo-400">
                {currentPerspective.focusArea}
              </div>
            </div>

            <div className="pt-3 border-t border-white/[0.08] text-xs font-mono text-zinc-400">
              Click a discipline above to explore my focus.
            </div>
          </div>

        </div>

        {/* 3 Balanced Cards: Education, Primary Focus, Areas of Interest */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          
          {/* Card 1: Education */}
          <div className="p-7 rounded-2xl bg-[#080808] border border-white/[0.08] hover:border-white/[0.18] transition-colors flex flex-col justify-between space-y-6">
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-xs font-mono uppercase tracking-widest text-zinc-400">01 / Education</span>
                <GraduationCap className="w-5 h-5 text-indigo-400" />
              </div>
              <h3 className="text-xl font-medium text-white">
                {education.degree}
              </h3>
              <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed">
                {education.college}
              </p>
              <div className="flex items-center gap-1.5 text-xs font-mono text-zinc-400">
                <MapPin className="w-3.5 h-3.5 text-zinc-400" />
                <span>{education.location}</span>
              </div>
            </div>

            <div className="pt-4 border-t border-white/[0.08] flex items-center justify-between text-xs font-mono">
              <span className="text-emerald-400 font-semibold flex items-center gap-1">
                <Award className="w-3.5 h-3.5" />
                CGPA: {education.cgpa}
              </span>
              <span className="text-zinc-400">
                Class of {education.graduation}
              </span>
            </div>
          </div>

          {/* Card 2: Primary Focus */}
          <div className="p-7 rounded-2xl bg-[#080808] border border-white/[0.08] hover:border-white/[0.18] transition-colors flex flex-col justify-between space-y-6">
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-xs font-mono uppercase tracking-widest text-zinc-400">02 / Primary Focus</span>
                <Target className="w-5 h-5 text-cyan-400" />
              </div>
              <h3 className="text-xl font-medium text-white">
                Engineering & Architecture
              </h3>
              <div className="space-y-2.5">
                {primaryFocus.map((item) => (
                  <div key={item} className="flex items-start gap-2 text-xs sm:text-sm text-zinc-300">
                    <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400 shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="pt-4 border-t border-white/[0.08] text-xs font-mono text-zinc-400">
              Clean code & reliable execution
            </div>
          </div>

          {/* Card 3: Areas of Interest */}
          <div className="p-7 rounded-2xl bg-[#080808] border border-white/[0.08] hover:border-white/[0.18] transition-colors flex flex-col justify-between space-y-6">
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-xs font-mono uppercase tracking-widest text-zinc-400">03 / Exploration</span>
                <Compass className="w-5 h-5 text-purple-400" />
              </div>
              <h3 className="text-xl font-medium text-white">
                Areas of Interest
              </h3>
              <div className="flex flex-wrap gap-2">
                {interests.map((interest) => (
                  <span
                    key={interest}
                    className="px-3 py-1.5 rounded-lg text-xs font-mono bg-zinc-900 border border-zinc-800 text-zinc-300"
                  >
                    {interest}
                  </span>
                ))}
              </div>
            </div>

            <div className="pt-4 border-t border-white/[0.08] text-xs font-mono text-zinc-400">
              Problem solving & cybersecurity
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
