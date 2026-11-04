import React from 'react';

export default function SceneBackdrop() {
  return (
    <div
      className="fixed inset-0 pointer-events-none z-0 overflow-hidden select-none"
      aria-hidden="true"
    >
      {/* Subtle ambient lighting aura in center top */}
      <div className="absolute top-[8%] left-1/2 -translate-x-1/2 w-[600px] sm:w-[800px] h-[500px] bg-gradient-to-b from-indigo-900/10 via-purple-900/5 to-transparent rounded-full blur-[140px]" />
      
      {/* Faint ambient glow near bottom */}
      <div className="absolute bottom-[-10%] right-[-5%] w-[500px] h-[500px] bg-indigo-950/10 rounded-full blur-[160px]" />
    </div>
  );
}
