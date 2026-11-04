import React, { useState } from "react";
import ParticleBackground from "./components/ParticleBackground";
import CursorGradient from "./components/CursorGradient";
import IntroAnimation from "./components/IntroAnimation";
import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import AboutSection from "./components/AboutSection";
import ProjectsSection from "./components/ProjectsSection";
import SkillsSection from "./components/SkillsSection";
import EducationSection from "./components/EducationSection";
import AchievementsSection from "./components/AchievementsSection";
import ResumeSection from "./components/ResumeSection";
import ContactSection from "./components/ContactSection";
import Footer from "./components/Footer";

export default function App() {
  const [showIntro, setShowIntro] = useState(true);

  return (
    <>
      {/* Intro Animation Overlay */}
      {showIntro && <IntroAnimation onComplete={() => setShowIntro(false)} />}

      <div className="relative min-h-screen bg-background text-foreground overflow-x-hidden selection:bg-primary/25 selection:text-primary">
        {/* Interactive Particle Network */}
        <ParticleBackground />

        {/* Section-Aware Ambient Cursor Glow */}
        <CursorGradient />

        {/* Fixed Navigation */}
        <Navbar />

        {/* Main Content Sections */}
        <main className="relative z-10">
          <HeroSection />
          <AboutSection />
          <ProjectsSection />
          <SkillsSection />
          <EducationSection />
          <AchievementsSection />
          <ResumeSection />
          <ContactSection />
        </main>

        {/* Footer */}
        <Footer />
      </div>
    </>
  );
}
