import React from 'react';
import { portfolioData } from '../data/portfolioData';
import { ArrowUpRight, Trophy, Shield, Activity, Sparkles } from 'lucide-react';
import { GithubIcon } from './SocialIcons';

const projectDomains = {
  safesphere: 'safesphere.mobile ↗',
  'trace-x': 'tracex.security ↗',
  'e-nirikshan': 'e-nirikshan.sih ↗'
};

const projectCategoryLabels = {
  safesphere: '01 / Mobile App & Safety System',
  'trace-x': '02 / Cybersecurity & OSINT Tool',
  'e-nirikshan': '03 / Real-Time Inspection & SIH'
};

export default function Projects() {
  const projects = portfolioData.projects;

  return (
    <section id="projects" className="py-28 relative bg-[#030303] border-b border-white/[0.08]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Label */}
        <div className="section-label">
          <span>02 / Selected Work</span>
          <span>Built. Tested. Put Into The World.</span>
        </div>

        {/* Editorial Heading */}
        <div className="max-w-3xl mb-16 space-y-4">
          <h2 className="text-4xl sm:text-6xl font-medium tracking-tight text-white leading-[1.08]">
            Ideas are a start.<br />
            <span className="font-serif-italic text-zinc-300 font-normal">
              This is the work.
            </span>
          </h2>
          <p className="text-base sm:text-lg text-zinc-400 font-normal">
            A curated showcase of applications built for competitive hackathons and engineering challenges, emphasizing real-time alert systems, digital footprint auditing, and mobile field inspection.
          </p>
        </div>

        {/* 3 Editorial Browser Mockup Cards */}
        <div className="space-y-12">
          {projects.map((project, index) => (
            <article
              key={project.id}
              className="rounded-3xl bg-[#080808] border border-white/[0.08] hover:border-white/[0.18] transition-all duration-500 overflow-hidden group shadow-2xl"
            >
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-0">
                
                {/* Visual / Screenshot with Browser Bar */}
                <div className="lg:col-span-7 bg-[#0b0b0b] border-b lg:border-b-0 lg:border-r border-white/[0.08] flex flex-col">
                  {/* Browser Window Bar */}
                  <div className="browser-bar">
                    <div className="flex items-center gap-1.5">
                      <span className="w-2.5 h-2.5 rounded-full bg-rose-500/80 inline-block" />
                      <span className="w-2.5 h-2.5 rounded-full bg-amber-500/80 inline-block" />
                      <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/80 inline-block" />
                    </div>
                    <span className="text-zinc-500">
                      {projectDomains[project.id] || 'project.live ↗'}
                    </span>
                    <span className="text-zinc-600 text-[10px]">PREVIEW</span>
                  </div>

                  {/* Image Container with subtle zoom */}
                  <div className="relative h-64 sm:h-80 md:h-96 w-full overflow-hidden">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 opacity-90 group-hover:opacity-100 filter brightness-[0.95]"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#080808] via-transparent to-transparent opacity-80" />
                  </div>
                </div>

                {/* Content & Metadata */}
                <div className="lg:col-span-5 p-8 sm:p-10 flex flex-col justify-between space-y-6">
                  <div className="space-y-4">
                    
                    {/* Eyebrow & Number */}
                    <div className="flex items-center justify-between text-xs font-mono uppercase tracking-widest text-zinc-500 pb-2 border-b border-white/[0.08]">
                      <span>{projectCategoryLabels[project.id]}</span>
                      <span className="text-zinc-400 font-semibold">0{index + 1}</span>
                    </div>

                    {/* Achievement Callout */}
                    <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/20 text-xs font-mono text-amber-300">
                      <Trophy className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                      <span>{project.badge}</span>
                    </div>

                    {/* Title & Subtitle */}
                    <div>
                      <h3 className="text-2xl sm:text-3xl font-bold text-white group-hover:text-zinc-200 transition-colors">
                        {project.title}
                      </h3>
                      <p className="text-xs font-mono text-cyan-400 mt-1 uppercase tracking-wider">
                        {project.subtitle}
                      </p>
                    </div>

                    {/* Description */}
                    <p className="text-sm text-zinc-400 leading-relaxed font-normal">
                      {project.description}
                    </p>

                    {/* Role Pill */}
                    {project.role && (
                      <div className="text-xs font-mono text-zinc-300">
                        <span className="text-zinc-500">Key Role: </span>
                        <span className="text-white font-medium">{project.role}</span>
                      </div>
                    )}
                  </div>

                  {/* Tech stack & Action Link */}
                  <div className="space-y-5 pt-4 border-t border-white/[0.08]">
                    <div className="flex flex-wrap gap-1.5">
                      {project.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="px-2.5 py-1 rounded-md text-[11px] font-mono bg-zinc-900 border border-zinc-800 text-zinc-300"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    <div className="flex items-center justify-between pt-1">
                      <a
                        href={portfolioData.personal.socials.github}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-zinc-400 hover:text-white transition-colors"
                      >
                        <GithubIcon className="w-4 h-4" />
                        <span>Source Code</span>
                      </a>

                      <a
                        href="#contact"
                        className="inline-flex items-center gap-1.5 text-xs font-mono uppercase tracking-wider font-semibold text-white group-hover:text-cyan-300 transition-colors"
                      >
                        <span>Project Story</span>
                        <ArrowUpRight className="w-3.5 h-3.5" />
                      </a>
                    </div>
                  </div>

                </div>

              </div>
            </article>
          ))}
        </div>

      </div>
    </section>
  );
}
