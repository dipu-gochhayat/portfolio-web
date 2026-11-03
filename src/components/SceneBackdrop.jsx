import React, { useState, useEffect } from 'react';

export default function SceneBackdrop() {
  const [opacity, setOpacity] = useState(1);
  const [translateY, setTranslateY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      // Fade out slowly across the first 750px of scroll
      const fadeDistance = window.innerHeight * 0.85;
      const currentOpacity = Math.max(0, 1 - scrollY / fadeDistance);
      
      setOpacity(currentOpacity);
      // Gentle parallax drift downward as you scroll
      setTranslateY(scrollY * 0.18);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll(); // Initial check
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // If completely invisible, hide from paint
  if (opacity <= 0.01) {
    return null;
  }

  return (
    <div
      className="fixed inset-0 pointer-events-none z-0 overflow-hidden select-none transition-opacity duration-150 ease-out"
      style={{ opacity }}
      aria-hidden="true"
    >
      {/* Radial lighting aura positioned behind the portrait on the right */}
      <div className="absolute top-[15%] right-[5%] sm:right-[12%] w-[450px] sm:w-[600px] h-[450px] sm:h-[600px] bg-gradient-to-tr from-indigo-600/10 via-purple-600/8 to-cyan-500/5 rounded-full blur-[120px]" />
      <div className="absolute top-[28%] right-[8%] sm:right-[16%] w-[280px] sm:w-[380px] h-[280px] sm:h-[380px] bg-white/[0.03] rounded-full blur-[90px]" />

      {/* Background Photo Container - Aligned to the right, exactly like the reference site */}
      <div
        className="absolute top-[10%] sm:top-[12%] lg:top-[13%] right-[-12%] sm:right-[-4%] md:right-[2%] lg:right-[6%] xl:right-[10%] w-[330px] sm:w-[420px] md:w-[480px] lg:w-[540px] xl:w-[580px] aspect-[4/5] will-change-transform"
        style={{
          transform: `translate3d(0, ${translateY}px, 0)`,
        }}
      >
        <div className="relative w-full h-full">
          {/* Portrait Image with radial vignette mask */}
          <img
            src="/profile.png"
            alt=""
            className="w-full h-full object-cover object-top filter brightness-[0.92] contrast-[1.04]"
            style={{
              maskImage: 'radial-gradient(ellipse 80% 78% at 50% 36%, black 40%, transparent 92%)',
              WebkitMaskImage: 'radial-gradient(ellipse 80% 78% at 50% 36%, black 40%, transparent 92%)',
            }}
          />

          {/* Left blend gradient into #030303 so text is crisp */}
          <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-[#030303] via-[#030303]/70 to-transparent" />

          {/* Bottom blend gradient into #030303 so the suit dissolves into black */}
          <div className="absolute inset-x-0 bottom-0 h-44 bg-gradient-to-t from-[#030303] via-[#030303]/85 to-transparent" />

          {/* Top subtle vignette */}
          <div className="absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-[#030303]/60 to-transparent" />
        </div>
      </div>
    </div>
  );
}
