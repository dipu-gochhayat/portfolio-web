import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Stats from './components/Stats';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Achievements from './components/Achievements';
import FAQ from './components/FAQ';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-[#090d16] text-slate-100 selection:bg-indigo-500/30 selection:text-indigo-200 overflow-x-hidden font-sans">
      <Navbar />
      <main className="space-y-4">
        <Hero />
        <Stats />
        <About />
        <Skills />
        <Projects />
        <Achievements />
        <FAQ />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
