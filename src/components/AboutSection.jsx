import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Server, Code2, Shield, Rocket, GraduationCap, MapPin, Target, CheckCircle2 } from "lucide-react";
import { portfolioData } from "../data/portfolioData";

export default function AboutSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const { bio, education, primaryInterests } = portfolioData.personal;
  const strengths = portfolioData.strengths;

  const strengthIcons = {
    Server: Server,
    Code2: Code2,
    Shield: Shield,
    Rocket: Rocket,
  };

  return (
    <section id="about" className="relative py-24 bg-background/50" ref={ref}>
      <div className="section-container">
        
        {/* Section Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="section-title">About Me</h2>
          <p className="section-subtitle mx-auto">
            Passionate developer crafting digital experiences & dependable systems
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column: Personal Introduction & Academic Info */}
          <motion.div
            className="lg:col-span-6 space-y-6"
            initial={{ opacity: 0, x: -40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="glass-card p-8 rounded-2xl space-y-6 border border-white/10 shadow-xl">
              <div className="space-y-3">
                <div className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-primary">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                  <span>The Person Behind The Code</span>
                </div>
                
                <h3 className="text-2xl sm:text-3xl font-bold text-foreground">
                  Turning Ideas into Real-World Software
                </h3>
              </div>

              {/* Exact user requested description */}
              <p className="text-muted-foreground leading-relaxed text-base">
                {bio}
              </p>

              {/* Academic Status Card */}
              <div className="p-4 rounded-xl bg-primary/5 border border-primary/20 space-y-2">
                <div className="flex items-center justify-between text-xs font-mono text-primary font-medium">
                  <span className="flex items-center gap-1.5">
                    <GraduationCap className="w-4 h-4" />
                    <span>Academic Journey</span>
                  </span>
                  <span className="px-2 py-0.5 rounded-full bg-primary/10 border border-primary/30">
                    CGPA: {education.cgpa} / 10
                  </span>
                </div>
                <div className="font-semibold text-foreground text-sm sm:text-base">
                  {education.degree}
                </div>
                <div className="text-xs text-muted-foreground">
                  {education.college} · Class of {education.graduation}
                </div>
              </div>

              {/* Career Interests Pills */}
              <div className="space-y-2.5 pt-2 border-t border-white/10">
                <div className="text-xs font-mono uppercase tracking-wider text-muted-foreground flex items-center gap-1.5">
                  <Target className="w-3.5 h-3.5 text-primary" />
                  <span>Primary Career Interests:</span>
                </div>
                <div className="flex flex-wrap gap-2">
                  {primaryInterests.map((interest) => (
                    <span
                      key={interest}
                      className="px-3 py-1 rounded-lg text-xs font-mono bg-white/5 border border-white/10 text-foreground hover:border-primary/40 transition-colors"
                    >
                      {interest}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Column: 4 Strengths / Core Pillars in 2x2 Grid */}
          <motion.div
            className="lg:col-span-6 grid sm:grid-cols-2 gap-4"
            initial={{ opacity: 0, x: 40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            {strengths.map((strength, index) => {
              const IconComponent = strengthIcons[strength.icon] || Code2;
              return (
                <motion.div
                  key={strength.title}
                  className="glass-card-hover p-6 rounded-2xl flex flex-col justify-between space-y-4 border border-white/10 shadow-lg"
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.4 + index * 0.1 }}
                  whileHover={{ y: -6, scale: 1.02 }}
                >
                  <div className="w-12 h-12 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center text-primary shadow-[0_0_15px_rgba(100,255,218,0.15)]">
                    <IconComponent className="w-6 h-6" />
                  </div>

                  <div className="space-y-2">
                    <h4 className="text-lg font-bold text-foreground">
                      {strength.title}
                    </h4>
                    <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
                      {strength.description}
                    </p>
                  </div>

                  <div className="pt-2 border-t border-white/5 flex items-center gap-1.5 text-[11px] font-mono text-primary/80">
                    <CheckCircle2 className="w-3 h-3 text-primary" />
                    <span>Core Competency</span>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>

        </div>
      </div>
    </section>
  );
}
