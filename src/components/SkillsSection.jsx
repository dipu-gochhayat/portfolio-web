import React, { useState, useRef } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import { FaJava, FaGithub } from "react-icons/fa";
import {
  SiMysql,
  SiFirebase,
  SiHtml5,
  SiCss,
  SiAndroidstudio,
  SiKalilinux,
  SiGit,
  SiC,
} from "react-icons/si";
import { VscVscode } from "react-icons/vsc";
import { Code2, Database, Cpu, Network, Layers, Terminal } from "lucide-react";
import { portfolioData } from "../data/portfolioData";

export default function SkillsSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [activeCategory, setActiveCategory] = useState("all");

  const categories = [
    { id: "all", name: "All Skills" },
    { id: "programming", name: "Programming" },
    { id: "core-cs", name: "Core CS" },
    { id: "databases", name: "Databases" },
    { id: "web", name: "Web Dev" },
    { id: "tools", name: "Tools & OS" },
  ];

  const allSkills = [
    // Programming
    { name: "Java", category: "programming", icon: FaJava, color: "#f89820", tag: "Primary Language" },
    { name: "C", category: "programming", icon: SiC, color: "#00599c", tag: "System Programming" },

    // Core Computer Science
    { name: "Data Structures & Algorithms", category: "core-cs", icon: Code2, color: "#64ffda", tag: "Problem Solving" },
    { name: "Object-Oriented Programming", category: "core-cs", icon: Layers, color: "#a855f7", tag: "Software Design" },
    { name: "Database Management (DBMS)", category: "core-cs", icon: Database, color: "#3b82f6", tag: "Relational Modeling" },
    { name: "Operating Systems", category: "core-cs", icon: Cpu, color: "#ec4899", tag: "Core Concepts" },
    { name: "Computer Networks", category: "core-cs", icon: Network, color: "#06b6d4", tag: "Protocols & Routing" },

    // Databases
    { name: "MySQL", category: "databases", icon: SiMysql, color: "#4479a1", tag: "SQL Database" },
    { name: "Firebase", category: "databases", icon: SiFirebase, color: "#ffca28", tag: "Real-time Cloud DB" },

    // Web Development
    { name: "HTML5", category: "web", icon: SiHtml5, color: "#e34f26", tag: "Markup Structure" },
    { name: "CSS3", category: "web", icon: SiCss, color: "#1572b6", tag: "Responsive Styling" },

    // Developer Tools
    { name: "VS Code", category: "tools", icon: VscVscode, color: "#007acc", tag: "Code Editor" },
    { name: "Android Studio", category: "tools", icon: SiAndroidstudio, color: "#3ddc84", tag: "Mobile Development" },
    { name: "Kali Linux", category: "tools", icon: SiKalilinux, color: "#557c94", tag: "Cybersecurity & OS" },
    { name: "Git", category: "tools", icon: SiGit, color: "#f05032", tag: "Version Control" },
    { name: "GitHub", category: "tools", icon: FaGithub, color: "#ffffff", tag: "Repository Hosting" },
  ];

  const displayedSkills =
    activeCategory === "all"
      ? allSkills
      : allSkills.filter((s) => s.category === activeCategory);

  return (
    <section id="skills" className="relative py-24 bg-background/50" ref={ref}>
      <div className="section-container">
        
        {/* Section Header */}
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="section-title">
            Technical <span className="text-primary">Skills</span>
          </h2>
          <p className="section-subtitle mx-auto">
            Structured foundation across programming languages, computational theory, databases, and developer tools
          </p>
        </motion.div>

        {/* Category Filter Pills */}
        <motion.div
          className="flex flex-wrap items-center justify-center gap-2 mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.2 }}
        >
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`px-4 py-2 rounded-full text-xs font-mono uppercase tracking-wider transition-all cursor-pointer ${
                activeCategory === cat.id
                  ? "glow-button text-primary-foreground font-semibold shadow-md"
                  : "glass-card text-muted-foreground hover:text-primary hover:border-primary/40"
              }`}
            >
              {cat.name}
            </button>
          ))}
        </motion.div>

        {/* Skills Grid */}
        <motion.div
          layout
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 sm:gap-6"
        >
          <AnimatePresence>
            {displayedSkills.map((skill, index) => {
              const Icon = skill.icon;

              return (
                <motion.div
                  key={skill.name}
                  layout
                  initial={{ opacity: 0, scale: 0.85, y: 20 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.85 }}
                  transition={{ duration: 0.35, delay: index * 0.03 }}
                  whileHover={{ scale: 1.06, y: -6 }}
                  className="glass-card p-6 sm:p-7 rounded-2xl flex flex-col items-center justify-center gap-3.5 group border border-white/10 hover:border-primary/50 transition-all duration-300 cursor-pointer shadow-lg hover:shadow-2xl relative overflow-hidden"
                  style={{
                    "--skill-color": skill.color,
                  }}
                >
                  {/* Subtle Colored Aura On Hover */}
                  <div className="absolute inset-0 bg-gradient-to-br from-transparent via-transparent to-transparent group-hover:via-[var(--skill-color)]/10 group-hover:to-[var(--skill-color)]/5 transition-all duration-500" />

                  {/* Icon with 360 rotation on hover */}
                  <motion.div
                    whileHover={{ scale: 1.15, rotate: 360 }}
                    transition={{ duration: 0.55 }}
                  >
                    <Icon
                      className="w-12 h-12 transition-all duration-300 relative z-10 group-hover:drop-shadow-[0_0_16px_var(--skill-color)]"
                      style={{ color: skill.color }}
                    />
                  </motion.div>

                  {/* Skill Name */}
                  <div className="text-center relative z-10 space-y-1">
                    <span className="font-semibold text-foreground group-hover:text-primary transition-colors text-xs sm:text-sm block">
                      {skill.name}
                    </span>
                    <span className="text-[10px] font-mono text-muted-foreground block">
                      {skill.tag}
                    </span>
                  </div>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </motion.div>

      </div>
    </section>
  );
}
