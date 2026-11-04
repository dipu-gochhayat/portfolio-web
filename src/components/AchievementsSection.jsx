import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Trophy, Award, Target, Flame, CheckCircle, Star } from "lucide-react";
import { portfolioData } from "../data/portfolioData";

export default function AchievementsSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const achievements = portfolioData.achievements;

  const achievementIcons = {
    medhamanthan: Trophy,
    chakravyuh: Award,
    sih: Target,
  };

  const statCounters = [
    { label: "Hackathon Winner", value: "1st Place", subtext: "Medhamanthan 1.0" },
    { label: "National Finalist", value: "Top 30", subtext: "Out of 160 Teams" },
    { label: "Smart India Hackathon", value: "Selected", subtext: "Internal College Team" },
    { label: "Academic Score", value: "8.15", subtext: "B.Tech CSE (2024-28)" },
  ];

  return (
    <section id="achievements" className="relative py-24 bg-background/50" ref={ref}>
      <div className="section-container">
        
        {/* Section Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="section-title">Achievements & Hackathons</h2>
          <p className="section-subtitle mx-auto">
            Competitive milestones, hackathon victories, and institutional recognitions
          </p>
        </motion.div>

        {/* Quick Stats Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mb-16">
          {statCounters.map((stat, idx) => (
            <motion.div
              key={stat.label}
              className="glass-card-hover p-6 rounded-2xl text-center border border-white/10 shadow-lg relative overflow-hidden"
              initial={{ opacity: 0, y: 25 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.1 + idx * 0.1 }}
              whileHover={{ y: -5 }}
            >
              <div className="text-3xl sm:text-4xl font-extrabold gradient-text glow-text mb-1 font-mono">
                {stat.value}
              </div>
              <div className="text-sm font-semibold text-foreground">
                {stat.label}
              </div>
              <div className="text-xs text-muted-foreground mt-0.5 font-mono">
                {stat.subtext}
              </div>
            </motion.div>
          ))}
        </div>

        {/* 3 Milestone Achievement Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          {achievements.map((item, index) => {
            const Icon = achievementIcons[item.id] || Trophy;

            return (
              <motion.div
                key={item.id}
                className="glass-card-hover p-7 rounded-2xl flex flex-col justify-between border border-white/10 shadow-xl group relative overflow-hidden"
                initial={{ opacity: 0, y: 35 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.2 + index * 0.15 }}
                whileHover={{ y: -8 }}
              >
                <div className="space-y-4">
                  {/* Top Row: Icon & Year */}
                  <div className="flex items-center justify-between">
                    <div className="p-3.5 rounded-2xl bg-primary/10 border border-primary/25 text-primary shadow-[0_0_15px_rgba(100,255,218,0.2)]">
                      <Icon className="w-6 h-6" />
                    </div>

                    <span className="text-xs font-mono px-3 py-1 rounded-full bg-white/5 border border-white/10 text-muted-foreground">
                      {item.year}
                    </span>
                  </div>

                  {/* Title & Badge */}
                  <div>
                    <h3 className="text-xl sm:text-2xl font-bold text-foreground group-hover:text-primary transition-colors">
                      {item.title}
                    </h3>
                    <div className={`mt-2 inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono border font-medium ${item.badgeColor}`}>
                      <Flame className="w-3.5 h-3.5 shrink-0" />
                      <span>{item.badge}</span>
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {item.description}
                  </p>
                </div>

                {/* Bottom Highlight */}
                <div className="mt-6 pt-4 border-t border-white/10 flex items-center justify-between text-xs font-mono">
                  <span className="text-primary flex items-center gap-1 font-semibold">
                    <Star className="w-3.5 h-3.5 fill-primary text-primary" />
                    <span>{item.highlight}</span>
                  </span>
                  <span className="text-muted-foreground">Verified Milestone</span>
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
