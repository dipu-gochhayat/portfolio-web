import React, { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { FileText, Download, Eye, Send, CheckCircle2, GraduationCap, Award, Code2 } from "lucide-react";
import { portfolioData } from "../data/portfolioData";

export default function ResumeSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const { name, education, email, socials } = portfolioData.personal;
  const [downloadNotice, setDownloadNotice] = useState(false);

  const handleDownload = () => {
    // If a PDF is added in public/resume.pdf, it will trigger download, otherwise prompts email
    setDownloadNotice(true);
    setTimeout(() => {
      window.location.href = `mailto:${email}?subject=Resume%20Request%20-%20${encodeURIComponent(name)}`;
    }, 1200);
  };

  return (
    <section id="resume" className="relative py-24" ref={ref}>
      <div className="section-container">
        
        {/* Section Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="section-title">Resume & Profile</h2>
          <p className="section-subtitle mx-auto">
            Summary of qualifications, technical foundations, and engineering milestones
          </p>
        </motion.div>

        {/* Central Resume Feature Card */}
        <motion.div
          className="max-w-4xl mx-auto glass-card-hover p-8 sm:p-12 rounded-3xl border border-white/10 shadow-2xl relative overflow-hidden"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={isInView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.7, delay: 0.2 }}
        >
          {/* Subtle Ambient Background */}
          <div className="absolute top-0 right-0 w-80 h-80 bg-primary/10 rounded-full blur-3xl pointer-events-none" />

          <div className="space-y-8 relative z-10">
            {/* Header with Icon */}
            <div className="flex flex-col sm:flex-row items-center sm:items-start gap-6 text-center sm:text-left">
              <div className="p-4 rounded-2xl bg-primary/10 border border-primary/20 text-primary shadow-[0_0_20px_rgba(100,255,218,0.2)]">
                <FileText className="w-10 h-10" />
              </div>

              <div className="space-y-2">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono text-primary bg-primary/10 border border-primary/20">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                  <span>Curriculum Vitae</span>
                </div>
                <h3 className="text-2xl sm:text-3xl font-bold text-foreground">
                  {name} — Engineering Resume
                </h3>
                <p className="text-sm text-muted-foreground max-w-xl leading-relaxed">
                  B.Tech Computer Science Engineering undergraduate specializing in Java software development, backend APIs, data structures, and cybersecurity exploration.
                </p>
              </div>
            </div>

            {/* Quick Summary Highlights Grid */}
            <div className="grid sm:grid-cols-3 gap-4 pt-4">
              <div className="p-4 rounded-xl bg-white/5 border border-white/10 space-y-1">
                <div className="flex items-center gap-2 text-xs font-mono text-primary font-semibold">
                  <GraduationCap className="w-4 h-4" />
                  <span>Education</span>
                </div>
                <div className="text-sm font-bold text-foreground">B.Tech in CSE</div>
                <div className="text-xs text-muted-foreground">{education.college}</div>
                <div className="text-xs font-mono text-primary font-medium mt-1">CGPA: {education.cgpa}</div>
              </div>

              <div className="p-4 rounded-xl bg-white/5 border border-white/10 space-y-1">
                <div className="flex items-center gap-2 text-xs font-mono text-primary font-semibold">
                  <Code2 className="w-4 h-4" />
                  <span>Core Focus</span>
                </div>
                <div className="text-sm font-bold text-foreground">Java & Backend</div>
                <div className="text-xs text-muted-foreground">OOP, DSA, MySQL, APIs</div>
                <div className="text-xs font-mono text-primary font-medium mt-1">Kali Linux & Security</div>
              </div>

              <div className="p-4 rounded-xl bg-white/5 border border-white/10 space-y-1">
                <div className="flex items-center gap-2 text-xs font-mono text-primary font-semibold">
                  <Award className="w-4 h-4" />
                  <span>Recognition</span>
                </div>
                <div className="text-sm font-bold text-foreground">Hackathon Winner</div>
                <div className="text-xs text-muted-foreground">Medhamanthan 1.0 (2025)</div>
                <div className="text-xs font-mono text-primary font-medium mt-1">SIH Team & Chakravyuh</div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="pt-6 border-t border-white/10 flex flex-wrap items-center justify-center sm:justify-start gap-4">
              <button
                onClick={handleDownload}
                className="glow-button text-primary-foreground font-semibold px-8 py-3.5 text-sm sm:text-base rounded-xl flex items-center gap-2 cursor-pointer shadow-lg"
              >
                <Download className="w-4 h-4" />
                <span>Download Resume</span>
              </button>

              <a
                href="#contact"
                className="glass-card-hover font-semibold px-8 py-3.5 text-sm sm:text-base rounded-xl flex items-center gap-2 text-foreground hover:text-primary"
              >
                <Send className="w-4 h-4 text-primary" />
                <span>Request via Email</span>
              </a>
            </div>

            {/* Feedback notification */}
            {downloadNotice && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="p-3 rounded-xl bg-primary/10 border border-primary/30 text-xs font-mono text-primary flex items-center gap-2"
              >
                <CheckCircle2 className="w-4 h-4 text-primary shrink-0" />
                <span>Redirecting to email client to request Dipu's latest full resume PDF...</span>
              </motion.div>
            )}
          </div>
        </motion.div>

      </div>
    </section>
  );
}
