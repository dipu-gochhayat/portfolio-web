import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { ExternalLink, Shield, Search, Activity, Award, Trophy, Star } from "lucide-react";
import { GithubIcon } from "./SocialIcons";
import { portfolioData } from "../data/portfolioData";

export default function ProjectsSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const projects = portfolioData.projects;

  const projectIcons = {
    safesphere: Shield,
    "trace-x": Search,
    "e-nirikshan": Activity,
  };

  const badgeStyles = {
    gold: "text-amber-400 bg-amber-500/10 border-amber-500/30",
    purple: "text-purple-400 bg-purple-500/10 border-purple-500/30",
    cyan: "text-cyan-400 bg-cyan-500/10 border-cyan-500/30",
  };

  return (
    <section id="projects" className="relative py-24" ref={ref}>
      <div className="section-container">
        
        {/* Section Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="section-title">Personal Projects</h2>
          <p className="section-subtitle mx-auto">
            Featured applications & hackathon innovations developed for real-world impact
          </p>
        </motion.div>

        {/* 3 Personal Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {projects.map((project, index) => {
            const Icon = projectIcons[project.id] || Shield;
            const badgeClass = badgeStyles[project.badgeType] || badgeStyles.gold;

            return (
              <motion.div
                key={project.id}
                className="glass-card-hover p-6 sm:p-7 rounded-2xl flex flex-col justify-between border border-white/10 shadow-xl relative overflow-hidden group"
                initial={{ opacity: 0, y: 35 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.2 + index * 0.15 }}
                whileHover={{ y: -8 }}
              >
                {/* Top Header: Icon & Achievement Pill */}
                <div className="space-y-4">
                  <div className="flex items-start justify-between gap-3">
                    <div className="p-3 rounded-xl bg-primary/10 border border-primary/20 text-primary shadow-[0_0_15px_rgba(100,255,218,0.2)]">
                      <Icon className="w-6 h-6" />
                    </div>

                    <div className={`px-3 py-1 rounded-full text-[11px] font-mono border font-medium flex items-center gap-1.5 ${badgeClass}`}>
                      <Trophy className="w-3 h-3 shrink-0" />
                      <span className="truncate">{project.achievement}</span>
                    </div>
                  </div>

                  {/* Title & Subtitle */}
                  <div>
                    <h3 className="text-2xl font-bold text-foreground group-hover:text-primary transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-xs font-mono text-primary/90 mt-1 uppercase tracking-wider">
                      {project.subtitle}
                    </p>
                  </div>

                  {/* Description */}
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {project.description}
                  </p>
                </div>

                {/* Bottom Area: Tech Tags & Actions */}
                <div className="pt-6 mt-6 border-t border-white/10 space-y-4">
                  {/* Technology Tags */}
                  <div className="flex flex-wrap gap-1.5">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="text-xs font-mono px-2.5 py-1 rounded-md bg-white/5 border border-white/10 text-foreground/90"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Action Buttons: Only actual verified links, no invented URLs */}
                  <div className="flex items-center gap-3 pt-2">
                    {project.githubUrl && (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl glass-card hover:glow-border text-xs font-mono uppercase tracking-wider text-foreground hover:text-primary transition-all font-semibold"
                      >
                        <GithubIcon className="w-4 h-4" />
                        <span>Source Code</span>
                      </a>
                    )}

                    {project.liveUrl && (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl glow-button text-xs font-mono uppercase tracking-wider text-primary-foreground font-semibold"
                      >
                        <ExternalLink className="w-4 h-4" />
                        <span>Live Demo</span>
                      </a>
                    )}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* View All on GitHub Banner */}
        <motion.div
          className="mt-14 text-center"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 0.8 }}
        >
          <a
            href={portfolioData.personal.socials.github}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2.5 px-6 py-3 rounded-xl glass-card-hover border border-white/10 text-xs sm:text-sm font-mono uppercase tracking-wider text-muted-foreground hover:text-primary"
          >
            <GithubIcon className="w-4 h-4" />
            <span>Explore More on GitHub</span>
            <ExternalLink className="w-3.5 h-3.5" />
          </a>
        </motion.div>

      </div>
    </section>
  );
}
