import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowUpRight } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30);

      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      if (totalHeight > 0) {
        setScrollProgress((window.scrollY / totalHeight) * 100);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Work', href: '#projects' },
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Achievements', href: '#achievements' },
  ];

  return (
    <>
      {/* Scroll Progress Bar */}
      <div
        className="scroll-progress"
        style={{ width: `${scrollProgress}%` }}
      />

      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? 'bg-[#030303]/85 backdrop-blur-xl border-b border-white/[0.07] py-3.5 shadow-2xl'
            : 'bg-transparent py-5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            
            {/* Wordmark */}
            <a
              href="#home"
              className="flex items-center gap-3 group text-white font-medium text-base sm:text-lg tracking-tight"
            >
              <span className="font-semibold text-white tracking-normal group-hover:text-slate-300 transition-colors">
                Dipu Gochhayat
              </span>
              <span className="hidden sm:inline-block text-[11px] font-mono text-zinc-400 border-l border-zinc-700/80 pl-3 uppercase tracking-wider">
                Aspiring Developer
              </span>
            </a>

            {/* Desktop Navigation Links */}
            <nav className="hidden md:flex items-center gap-1 bg-[#0c0c0c]/80 px-3 py-1.5 rounded-full border border-white/[0.08] backdrop-blur-md">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="px-4 py-1.5 text-xs font-mono uppercase tracking-wider text-zinc-400 hover:text-white transition-colors"
                >
                  {link.name}
                </a>
              ))}
            </nav>

            {/* Right Action: Status dot + Let's Talk Pill */}
            <div className="hidden md:flex items-center gap-4">
              <div className="flex items-center gap-2 text-xs font-mono text-zinc-400">
                <span className="live-dot" />
                <span className="hidden lg:inline text-zinc-400">Available</span>
              </div>

              <a
                href="#contact"
                className="inline-flex items-center gap-1.5 px-4 py-2 text-xs font-mono uppercase tracking-wider font-semibold text-black bg-white rounded-full hover:bg-zinc-200 transition-all transform hover:-translate-y-0.5"
              >
                <span>Let's talk</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </a>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 rounded-lg bg-zinc-900 border border-zinc-800 text-zinc-300 hover:text-white focus:outline-none"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-[#030303]/95 backdrop-blur-2xl border-b border-zinc-800 px-6 pt-4 pb-6 space-y-3 animate-in fade-in slide-in-from-top duration-200">
            <div className="flex items-center gap-2 pb-3 mb-2 border-b border-zinc-800 text-xs font-mono text-emerald-400">
              <span className="live-dot" />
              <span>Available for Opportunities</span>
            </div>

            <div className="flex flex-col space-y-2">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="px-3 py-2 rounded-lg text-zinc-300 hover:text-white hover:bg-zinc-900 text-sm font-mono uppercase tracking-wider transition-colors"
                >
                  {link.name}
                </a>
              ))}
            </div>

            <div className="pt-2">
              <a
                href="#contact"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full flex items-center justify-center gap-1.5 py-3 text-xs font-mono uppercase tracking-wider font-semibold text-black bg-white rounded-full"
              >
                <span>Let's talk</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>
        )}
      </header>
    </>
  );
}
