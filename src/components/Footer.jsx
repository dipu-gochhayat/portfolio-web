import React from "react";
import { motion } from "framer-motion";
import { Heart, ArrowUp } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "./SocialIcons";
import { portfolioData } from "../data/portfolioData";

export default function Footer() {
  const { name, socials } = portfolioData.personal;

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const scrollToSection = (href) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const navLinks = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Projects", href: "#projects" },
    { name: "Skills", href: "#skills" },
    { name: "Education", href: "#education" },
    { name: "Achievements", href: "#achievements" },
    { name: "Resume", href: "#resume" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <footer className="relative border-t border-white/10 bg-[#071022]/90">
      {/* Top Gradient Highlight */}
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent" />

      <div className="section-container py-12">
        <div className="grid md:grid-cols-3 gap-8 items-center">
          
          {/* Column 1: Monogram & Subtitle */}
          <div className="text-center md:text-left space-y-2">
            <a href="#home" className="text-2xl font-bold font-mono gradient-text inline-block">
              {"<DG />"}
            </a>
            <p className="text-xs sm:text-sm text-muted-foreground font-mono">
              Aspiring Software Developer crafting dependable systems
            </p>
          </div>

          {/* Column 2: Quick Links */}
          <div className="flex flex-wrap justify-center gap-x-5 gap-y-2">
            {navLinks.map((link) => (
              <button
                key={link.name}
                onClick={() => scrollToSection(link.href)}
                className="text-xs font-mono uppercase tracking-wider text-muted-foreground hover:text-primary transition-colors cursor-pointer"
              >
                {link.name}
              </button>
            ))}
          </div>

          {/* Column 3: Social Links */}
          <div className="flex justify-center md:justify-end gap-3">
            <motion.a
              href={socials.github}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 glass-card rounded-xl text-muted-foreground hover:text-primary transition-colors"
              whileHover={{ scale: 1.1, y: -2 }}
              whileTap={{ scale: 0.95 }}
              aria-label="GitHub"
            >
              <GithubIcon className="w-4 h-4" />
            </motion.a>

            <motion.a
              href={socials.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 glass-card rounded-xl text-muted-foreground hover:text-primary transition-colors"
              whileHover={{ scale: 1.1, y: -2 }}
              whileTap={{ scale: 0.95 }}
              aria-label="LinkedIn"
            >
              <LinkedinIcon className="w-4 h-4" />
            </motion.a>
          </div>

        </div>

        {/* Divider */}
        <div className="my-8 h-px bg-white/10" />

        {/* Bottom Row */}
        <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-xs sm:text-sm text-muted-foreground flex items-center gap-1.5 font-mono">
            <span>© {new Date().getFullYear()} {name}. Built with</span>
            <Heart className="w-3.5 h-3.5 text-red-500 fill-red-500 animate-pulse" />
            <span>in Bhubaneswar, India</span>
          </p>

          {/* Back to top button */}
          <motion.button
            onClick={scrollToTop}
            className="p-2.5 glass-card-hover rounded-xl text-muted-foreground hover:text-primary group cursor-pointer"
            whileHover={{ y: -4 }}
            whileTap={{ scale: 0.95 }}
            aria-label="Scroll to top"
          >
            <ArrowUp className="w-4 h-4 group-hover:-translate-y-0.5 transition-transform" />
          </motion.button>
        </div>
      </div>
    </footer>
  );
}
