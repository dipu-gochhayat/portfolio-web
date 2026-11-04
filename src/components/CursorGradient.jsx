import React, { useEffect, useState } from "react";

// Section color mapping matching reference site
const sectionColors = {
  home: { h: 166, s: 100, l: 70 }, // Teal
  about: { h: 330, s: 80, l: 65 }, // Pink
  skills: { h: 280, s: 85, l: 65 }, // Purple
  projects: { h: 166, s: 100, l: 70 }, // Teal
  education: { h: 220, s: 95, l: 60 }, // Electric Blue
  achievements: { h: 42, s: 95, l: 60 }, // Gold / Amber
  resume: { h: 185, s: 90, l: 65 }, // Cyan
  contact: { h: 270, s: 80, l: 65 }, // Purple / Violet
  default: { h: 166, s: 100, l: 70 },
};

export default function CursorGradient() {
  const [mousePosition, setMousePosition] = useState({ x: -1000, y: -1000 });
  const [currentColor, setCurrentColor] = useState(sectionColors.default);

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });

      const element = document.elementFromPoint(e.clientX, e.clientY);
      if (element) {
        let sectionElement = element.closest("section");
        if (sectionElement && sectionElement.id && sectionColors[sectionElement.id]) {
          setCurrentColor(sectionColors[sectionElement.id]);
          return;
        }
      }

      // Fallback check by scroll position
      const sections = ["home", "about", "skills", "projects", "education", "achievements", "resume", "contact"];
      const scrollY = window.scrollY + e.clientY;

      for (const sectionId of sections) {
        const section = document.getElementById(sectionId);
        if (section) {
          const rect = section.getBoundingClientRect();
          const sectionTop = rect.top + window.scrollY;
          const sectionBottom = sectionTop + rect.height;

          if (scrollY >= sectionTop && scrollY <= sectionBottom) {
            setCurrentColor(sectionColors[sectionId] || sectionColors.default);
            return;
          }
        }
      }

      setCurrentColor(sectionColors.default);
    };

    window.addEventListener("mousemove", handleMouseMove, { passive: true });
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  const colorString = `${currentColor.h} ${currentColor.s}% ${currentColor.l}%`;
  const colorStringLight = `${currentColor.h} ${currentColor.s}% ${currentColor.l + 5}%`;

  return (
    <>
      {/* Primary ambient radial glow that follows cursor */}
      <div
        className="fixed inset-0 pointer-events-none z-0 cursor-gradient"
        style={{
          background: `radial-gradient(600px circle at ${mousePosition.x}px ${mousePosition.y}px, 
            hsl(${colorString} / 0.08), 
            transparent 60%)`,
        }}
        aria-hidden="true"
      />
      {/* Secondary focused highlight */}
      <div
        className="fixed inset-0 pointer-events-none z-0 cursor-gradient"
        style={{
          background: `radial-gradient(280px circle at ${mousePosition.x}px ${mousePosition.y}px, 
            hsl(${colorStringLight} / 0.12), 
            transparent 65%)`,
        }}
        aria-hidden="true"
      />
    </>
  );
}
