import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Download, ChevronDown, ArrowDown, FolderCode, GraduationCap, MapPin } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "./SocialIcons";
import { portfolioData } from "../data/portfolioData";

// Lightweight typing animation component
function Typewriter({ words, typingSpeed = 70, deletingSpeed = 40, pauseTime = 2000 }) {
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [currentText, setCurrentText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentWord = words[currentWordIndex];

    const timer = setTimeout(
      () => {
        if (!isDeleting) {
          setCurrentText(currentWord.substring(0, currentText.length + 1));
          if (currentText === currentWord) {
            setTimeout(() => setIsDeleting(true), pauseTime);
          }
        } else {
          setCurrentText(currentWord.substring(0, currentText.length - 1));
          if (currentText === "") {
            setIsDeleting(false);
            setCurrentWordIndex((prev) => (prev + 1) % words.length);
          }
        }
      },
      isDeleting ? deletingSpeed : typingSpeed
    );

    return () => clearTimeout(timer);
  }, [currentText, isDeleting, currentWordIndex, words, typingSpeed, deletingSpeed, pauseTime]);

  return (
    <span className="inline-flex items-center text-primary font-semibold font-mono">
      <span>{currentText}</span>
      <span className="ml-1 w-2.5 h-6 bg-primary animate-pulse inline-block" />
    </span>
  );
}

export default function HeroSection() {
  const { name, roles, greeting, tagline, socials } = portfolioData.personal;

  const scrollToAbout = () => {
    const element = document.querySelector("#about");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const scrollToProjects = () => {
    const element = document.querySelector("#projects");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const scrollToResume = () => {
    const element = document.querySelector("#resume");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center pt-24 pb-16 overflow-hidden"
    >
      {/* Decorative radial glows */}
      <div className="absolute top-1/4 left-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 right-10 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="section-container relative z-10 w-full">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Text & CTAs */}
          <motion.div
            className="lg:col-span-7 space-y-6 text-center lg:text-left"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            {/* Greeting */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full glass-card text-xs sm:text-sm font-mono text-primary font-medium"
            >
              <span className="w-2 h-2 rounded-full bg-primary animate-ping" />
              <span>{greeting}</span>
            </motion.div>

            {/* Name */}
            <motion.h1
              className="text-4xl sm:text-6xl md:text-7xl lg:text-7xl xl:text-8xl font-bold tracking-tight"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.3, duration: 0.5 }}
            >
              <span className="gradient-text glow-text">{name}</span>
            </motion.h1>

            {/* Typing Animation Title */}
            <motion.div
              className="text-xl sm:text-2xl md:text-3xl text-muted-foreground min-h-[2.5rem] flex items-center justify-center lg:justify-start"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
            >
              <Typewriter words={roles} />
            </motion.div>

            {/* Short Introduction */}
            <motion.p
              className="text-base sm:text-lg text-muted-foreground max-w-xl mx-auto lg:mx-0 leading-relaxed font-normal"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
            >
              {tagline}
            </motion.p>

            {/* Social Links Row */}
            <motion.div
              className="flex items-center justify-center lg:justify-start gap-4 pt-2"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7 }}
            >
              <motion.a
                href={socials.github}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 glass-card-hover rounded-xl group text-muted-foreground hover:text-primary"
                whileHover={{ scale: 1.1, y: -4 }}
                whileTap={{ scale: 0.95 }}
                aria-label="GitHub Profile"
              >
                <GithubIcon className="w-5 h-5 transition-colors" />
              </motion.a>

              <motion.a
                href={socials.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 glass-card-hover rounded-xl group text-muted-foreground hover:text-primary"
                whileHover={{ scale: 1.1, y: -4 }}
                whileTap={{ scale: 0.95 }}
                aria-label="LinkedIn Profile"
              >
                <LinkedinIcon className="w-5 h-5 transition-colors" />
              </motion.a>

              <div className="hidden sm:flex items-center gap-2 pl-2 text-xs font-mono text-muted-foreground">
                <MapPin className="w-3.5 h-3.5 text-primary" />
                <span>Bhubaneswar, Odisha</span>
              </div>
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              className="flex flex-wrap items-center justify-center lg:justify-start gap-4 pt-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
            >
              <button
                onClick={scrollToProjects}
                className="glow-button text-primary-foreground font-semibold px-7 py-3.5 text-sm sm:text-base rounded-xl flex items-center gap-2 cursor-pointer shadow-lg"
              >
                <FolderCode className="w-4 h-4" />
                <span>View My Projects</span>
              </button>

              <button
                onClick={scrollToResume}
                className="glass-card-hover font-semibold px-7 py-3.5 text-sm sm:text-base rounded-xl flex items-center gap-2 text-foreground hover:text-primary cursor-pointer"
              >
                <Download className="w-4 h-4 text-primary" />
                <span>Download Resume</span>
              </button>
            </motion.div>

          </motion.div>

          {/* Right Column: Signature Rotating Gradient Avatar */}
          <motion.div
            className="lg:col-span-5 flex flex-col items-center justify-center relative"
            initial={{ opacity: 0, scale: 0.85 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <div className="relative group">
              {/* Outer Animated Multi-Color Rotating Gradient Border */}
              <motion.div
                className="absolute -inset-1.5 rounded-full opacity-75 blur-md bg-gradient-to-r from-purple-600 via-pink-600 to-teal-400"
                animate={{
                  rotate: [0, 360],
                  scale: [1, 1.05, 1],
                }}
                transition={{
                  rotate: { duration: 10, repeat: Infinity, ease: "linear" },
                  scale: { duration: 4, repeat: Infinity, ease: "easeInOut" },
                }}
              />

              {/* Profile Image Container */}
              <motion.div
                className="relative w-56 h-56 sm:w-64 sm:h-64 md:w-72 md:h-72 rounded-full p-[4px] bg-[#0a192f] overflow-hidden shadow-2xl"
                whileHover={{ scale: 1.04 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
              >
                {/* Inner Gradient Ring */}
                <div className="absolute inset-0 rounded-full bg-gradient-to-r from-teal-400 via-primary to-purple-500 animate-spin-slow opacity-80" />

                {/* Image Wrapper */}
                <div className="absolute inset-[4px] rounded-full overflow-hidden bg-[#0a192f]">
                  <img
                    src="/profile.png"
                    alt={name}
                    className="w-full h-full object-cover object-top filter brightness-[0.98] contrast-[1.04]"
                    loading="eager"
                  />
                </div>
              </motion.div>

              {/* Floating Decorative Glow Particles */}
              <motion.div
                className="absolute -top-4 -right-4 w-3.5 h-3.5 bg-primary rounded-full blur-[2px]"
                animate={{ y: [0, -12, 0], opacity: [0.4, 1, 0.4] }}
                transition={{ duration: 3, repeat: Infinity, delay: 0.5 }}
              />
              <motion.div
                className="absolute top-1/2 -left-6 w-3 h-3 bg-pink-500 rounded-full blur-[2px]"
                animate={{ x: [0, -10, 0], opacity: [0.3, 0.9, 0.3] }}
                transition={{ duration: 4, repeat: Infinity, delay: 1 }}
              />
              <motion.div
                className="absolute -bottom-3 right-12 w-2.5 h-2.5 bg-purple-400 rounded-full blur-[1px]"
                animate={{ y: [0, 8, 0], opacity: [0.4, 1, 0.4] }}
                transition={{ duration: 2.5, repeat: Infinity, delay: 1.5 }}
              />
            </div>

            {/* Quick Status Pill */}
            <motion.div
              className="mt-6 glass-card px-4 py-2 rounded-full text-xs font-mono text-muted-foreground flex items-center gap-2 border border-white/10 shadow-lg"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.9 }}
            >
              <GraduationCap className="w-4 h-4 text-primary" />
              <span>NIT Bhubaneswar</span>
              <span className="text-primary font-bold">· 8.15 CGPA</span>
            </motion.div>
          </motion.div>

        </div>

        {/* Scroll Indicator at bottom */}
        <motion.div
          className="flex justify-center pt-16 lg:pt-20"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
        >
          <button
            onClick={scrollToAbout}
            className="flex flex-col items-center gap-1 text-xs font-mono uppercase tracking-widest text-muted-foreground hover:text-primary transition-colors cursor-pointer group"
          >
            <span>Explore More</span>
            <motion.div
              animate={{ y: [0, 6, 0] }}
              transition={{ duration: 1.8, repeat: Infinity }}
            >
              <ChevronDown className="w-5 h-5 text-primary group-hover:scale-125 transition-transform" />
            </motion.div>
          </button>
        </motion.div>
      </div>
    </section>
  );
}
