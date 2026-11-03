import React from 'react';
import { portfolioData } from '../data/portfolioData';
import { ExternalLink, Trophy, Shield, Activity, Sparkles, CheckCircle2 } from 'lucide-react';
import { GithubIcon } from './SocialIcons';

export default function Projects() {
  const projects = portfolioData.projects;

  return (
    <section id="projects" className="py-24 relative overflow-hidden">
      {/* Background radial accent */}
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-indigo-600/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-80 h-80 bg-cyan-600/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 text-xs font-mono font-medium">
            <Sparkles className="w-3.5 h-3.5" />
            Featured Builds
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Key Projects & Applications
          </h2>
          <p className="text-base text-slate-400">
            Selected applications built for hackathons and software competitions, emphasizing real-time utility, cybersecurity, and mobile solutions.
          </p>
        </div>

        {/* 3 Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-stretch">
          {projects.map((project) => (
            <div
              key={project.id}
              className="rounded-2xl bg-[#0c1426]/80 border border-slate-800/90 hover:border-indigo-500/40 backdrop-blur-md overflow-hidden flex flex-col justify-between group transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl hover:shadow-indigo-500/10"
            >
              <div>
                {/* Project Image Banner */}
                <div className="relative h-48 sm:h-52 w-full overflow-hidden bg-slate-900">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 opacity-85 group-hover:opacity-100"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0c1426] via-transparent to-transparent opacity-90" />
                  
                  {/* Role Tag */}
                  {project.role && (
                    <div className="absolute top-3 right-3">
                      <span className="px-2.5 py-1 rounded-md text-[11px] font-mono font-medium bg-slate-950/85 text-slate-200 border border-slate-700/80 backdrop-blur-md">
                        {project.role}
                      </span>
                    </div>
                  )}
                </div>

                {/* Project Body */}
                <div className="p-6 space-y-4">
                  {/* Achievement Badge */}
                  <div className="p-2.5 rounded-xl bg-slate-900/90 border border-slate-800 text-xs text-amber-300 font-medium flex items-start gap-2 shadow-sm">
                    <Trophy className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                    <span className="leading-snug">{project.badge}</span>
                  </div>

                  <div>
                    <h3 className="text-xl font-bold text-white group-hover:text-cyan-300 transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-xs font-mono text-indigo-400 font-medium mt-0.5">
                      {project.subtitle}
                    </p>
                  </div>

                  <p className="text-sm text-slate-300 leading-relaxed">
                    {project.description}
                  </p>
                </div>
              </div>

              {/* Technologies & Actions Footer */}
              <div className="px-6 pb-6 pt-2 space-y-4">
                {/* Tech Chips */}
                <div className="flex flex-wrap gap-1.5 pt-2 border-t border-slate-800/80">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-2.5 py-1 rounded-md text-[11px] font-mono text-cyan-200 bg-slate-900 border border-slate-700/70"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* GitHub & Demo Links */}
                <div className="flex items-center gap-3 pt-2">
                  <a
                    href={portfolioData.personal.socials.github}
                    target="_blank"
                    rel="noreferrer"
                    className="flex-1 inline-flex items-center justify-center gap-2 py-2 px-3 rounded-xl bg-slate-900 hover:bg-slate-800 text-slate-200 hover:text-white border border-slate-800 text-xs font-medium transition-colors"
                  >
                    <GithubIcon className="w-3.5 h-3.5" />
                    <span>View Repository</span>
                  </a>

                  <a
                    href="#contact"
                    className="inline-flex items-center justify-center p-2 rounded-xl bg-indigo-600/20 hover:bg-indigo-600/30 text-indigo-300 hover:text-white border border-indigo-500/30 text-xs transition-colors"
                    title="Inquire about this project"
                  >
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
