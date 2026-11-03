import React from 'react';
import { ArrowUp } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';
import { GithubIcon, LinkedinIcon, TwitterIcon } from './SocialIcons';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#030303] py-16 text-xs font-mono uppercase tracking-widest text-zinc-400">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 pb-12 border-b border-white/[0.08]">
          <div className="space-y-1">
            <div className="text-white font-medium text-sm tracking-normal">
              Dipu Gochhayat
            </div>
            <div className="text-zinc-400 text-[11px]">
              Computer Science & Engineering · NIT Bhubaneswar (2028)
            </div>
          </div>

          <div className="flex flex-wrap items-center gap-6 text-zinc-400">
            <a href="#projects" className="hover:text-white transition-colors">Work</a>
            <a href="#about" className="hover:text-white transition-colors">About</a>
            <a href="#skills" className="hover:text-white transition-colors">Skills</a>
            <a href="#achievements" className="hover:text-white transition-colors">Achievements</a>
            <a href="#contact" className="hover:text-white transition-colors">Contact</a>

            <button
              onClick={scrollToTop}
              className="p-2.5 rounded-full border border-white/[0.1] hover:border-white text-zinc-400 hover:text-white transition-all cursor-pointer"
              title="Back to top"
              aria-label="Back to top"
            >
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-zinc-400 text-[11px]">
          <div>
            © {new Date().getFullYear()} Dipu Gochhayat. All rights reserved.
          </div>
          <div className="flex items-center gap-5">
            <a
              href={portfolioData.personal.socials.github}
              target="_blank"
              rel="noreferrer"
              className="hover:text-white transition-colors flex items-center gap-1.5"
            >
              <GithubIcon className="w-3.5 h-3.5" />
              <span>GitHub</span>
            </a>
            <a
              href={portfolioData.personal.socials.linkedin}
              target="_blank"
              rel="noreferrer"
              className="hover:text-white transition-colors flex items-center gap-1.5"
            >
              <LinkedinIcon className="w-3.5 h-3.5" />
              <span>LinkedIn</span>
            </a>
            <a
              href={portfolioData.personal.socials.twitter}
              target="_blank"
              rel="noreferrer"
              className="hover:text-white transition-colors flex items-center gap-1.5"
            >
              <TwitterIcon className="w-3.5 h-3.5" />
              <span>Twitter</span>
            </a>
          </div>
        </div>

      </div>
    </footer>
  );
}
