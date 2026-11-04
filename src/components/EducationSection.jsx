import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { GraduationCap, Award, Calendar, MapPin, BookOpen, CheckCircle2 } from "lucide-react";
import { portfolioData } from "../data/portfolioData";

export default function EducationSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const { education } = portfolioData.personal;

  const educationMilestones = [
    {
      degree: education.degree,
      institution: education.college,
      period: education.period,
      status: "Currently Enrolled (2nd Year)",
      score: `CGPA: ${education.cgpa} / 10`,
      location: education.location,
      description:
        "Building a deep theoretical and practical foundation in core computer science, software engineering principles, algorithm optimization, and backend technologies.",
      coursework: education.coursework,
      featured: true,
    },
    {
      degree: "Higher Secondary Certificate (+2 Science)",
      institution: "Odisha State Board",
      period: "2022 – 2024",
      status: "Completed",
      score: "First Division",
      location: "Odisha, India",
      description:
        "Rigorous foundation in Physics, Chemistry, and Advanced Mathematics, developing strong analytical thinking and quantitative problem-solving capabilities.",
      coursework: ["Mathematics", "Physics", "Chemistry", "Computer Science"],
      featured: false,
    },
  ];

  return (
    <section id="education" className="relative py-24" ref={ref}>
      <div className="section-container">
        
        {/* Section Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="section-title">Education</h2>
          <p className="section-subtitle mx-auto">
            Academic background, engineering curriculum, and technical foundation
          </p>
        </motion.div>

        {/* Timeline Container */}
        <div className="relative max-w-4xl mx-auto">
          {/* Central Vertical Timeline Line */}
          <motion.div
            className="hidden md:block absolute left-8 top-4 bottom-4 w-0.5 bg-gradient-to-b from-primary via-primary/40 to-transparent"
            initial={{ height: 0 }}
            animate={isInView ? { height: "100%" } : {}}
            transition={{ duration: 1 }}
          />

          {/* Timeline Cards */}
          <div className="space-y-8 md:space-y-12">
            {educationMilestones.map((item, index) => (
              <motion.div
                key={item.degree}
                className="relative flex flex-col md:flex-row gap-6 md:gap-10 items-start"
                initial={{ opacity: 0, x: -30 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.2 + index * 0.2 }}
              >
                {/* Timeline Icon Node */}
                <div className="hidden md:flex items-center justify-center w-16 h-16 rounded-2xl bg-[#0a192f] border-2 border-primary/50 text-primary shadow-[0_0_20px_rgba(100,255,218,0.25)] shrink-0 z-10">
                  <GraduationCap className="w-8 h-8" />
                </div>

                {/* Card Content */}
                <motion.div
                  className={`flex-1 w-full glass-card-hover p-6 sm:p-8 rounded-2xl border shadow-xl ${
                    item.featured ? "border-primary/40" : "border-white/10"
                  }`}
                  whileHover={{ y: -4 }}
                >
                  <div className="flex flex-wrap items-center justify-between gap-3 mb-3">
                    <div className="flex items-center gap-2 text-xs font-mono text-primary font-medium">
                      <Calendar className="w-3.5 h-3.5" />
                      <span>{item.period}</span>
                    </div>

                    <div className="flex items-center gap-2">
                      <span className="px-3 py-1 rounded-full text-xs font-mono font-semibold bg-primary/10 border border-primary/30 text-primary flex items-center gap-1">
                        <Award className="w-3.5 h-3.5" />
                        <span>{item.score}</span>
                      </span>
                    </div>
                  </div>

                  <h3 className="text-xl sm:text-2xl font-bold text-foreground">
                    {item.degree}
                  </h3>

                  <div className="flex flex-wrap items-center gap-2 text-sm text-primary/90 mt-1 font-medium">
                    <span>{item.institution}</span>
                    <span>·</span>
                    <span className="text-xs font-mono text-muted-foreground flex items-center gap-1">
                      <MapPin className="w-3 h-3 text-primary" />
                      {item.location}
                    </span>
                  </div>

                  <p className="mt-4 text-sm text-muted-foreground leading-relaxed">
                    {item.description}
                  </p>

                  {/* Coursework Tags */}
                  <div className="mt-6 pt-5 border-t border-white/10 space-y-2">
                    <div className="text-xs font-mono text-muted-foreground uppercase tracking-wider flex items-center gap-1.5">
                      <BookOpen className="w-3.5 h-3.5 text-primary" />
                      <span>Key Curriculum & Focus:</span>
                    </div>
                    <div className="flex flex-wrap gap-1.5">
                      {item.coursework.map((course) => (
                        <span
                          key={course}
                          className="text-xs font-mono px-2.5 py-1 rounded-md bg-white/5 border border-white/10 text-foreground/90"
                        >
                          {course}
                        </span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
