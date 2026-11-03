import React from 'react';
import SceneBackdrop from './components/SceneBackdrop';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Stats from './components/Stats';
import About from './components/About';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Achievements from './components/Achievements';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="relative min-h-screen bg-[#030303] text-[#e4e4e7] selection:bg-indigo-500/30 selection:text-indigo-200 overflow-x-hidden font-sans">
      {/* Background Photo Backdrop that smoothly dissolves as you scroll down */}
      <SceneBackdrop />
      <Navbar />
      <main className="relative z-10">
        <Hero />
        <Stats />
        <About />
        <Projects />
        <Skills />
        <Achievements />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
