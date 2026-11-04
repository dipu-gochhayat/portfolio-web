import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaJava, FaGithub, FaPython } from "react-icons/fa";
import {
  SiAndroid,
  SiFirebase,
  SiMysql,
  SiGit,
  SiKalilinux,
  SiHtml5,
  SiCss,
  SiC,
} from "react-icons/si";

export default function IntroAnimation({ onComplete }) {
  const [isExiting, setIsExiting] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsExiting(true);
    }, 3800);

    const exitTimer = setTimeout(() => {
      onComplete();
    }, 4500);

    return () => {
      clearTimeout(timer);
      clearTimeout(exitTimer);
    };
  }, [onComplete]);

  const handleSkip = () => {
    setIsExiting(true);
    setTimeout(() => {
      onComplete();
    }, 500);
  };

  const innerIcons = [
    { Icon: FaJava, color: "#f89820", name: "Java" },
    { Icon: SiC, color: "#00599c", name: "C" },
    { Icon: SiMysql, color: "#4479a1", name: "MySQL" },
    { Icon: FaPython, color: "#3776ab", name: "Python" },
    { Icon: SiKalilinux, color: "#557c94", name: "Kali Linux" },
  ];

  const outerIcons = [
    { Icon: SiAndroid, color: "#3ddc84", name: "Android" },
    { Icon: SiFirebase, color: "#ffca28", name: "Firebase" },
    { Icon: SiGit, color: "#f05032", name: "Git" },
    { Icon: FaGithub, color: "#ffffff", name: "GitHub" },
    { Icon: SiHtml5, color: "#e34f26", name: "HTML5" },
    { Icon: SiCss, color: "#1572b6", name: "CSS3" },
  ];

  return (
    <AnimatePresence>
      {!isExiting && (
        <motion.div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-[#050B1B] overflow-hidden select-none"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0, scale: 1.08, filter: "blur(16px)" }}
          transition={{ duration: 0.7, ease: "easeInOut" }}
        >
          {/* Skip button in top right */}
          <button
            onClick={handleSkip}
            className="absolute top-6 right-6 z-30 px-4 py-2 rounded-full border border-primary/30 text-xs font-mono text-primary/80 hover:text-primary hover:border-primary transition-all bg-black/40 backdrop-blur-md"
          >
            Skip Intro →
          </button>

          <div className="relative flex items-center justify-center">
            {/* Center Monogram Badge */}
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.9, ease: "easeOut" }}
              className="relative z-20 flex items-center justify-center w-24 h-24 md:w-28 md:h-28 bg-[#0A1124] rounded-full border border-primary/50 shadow-[0_0_45px_rgba(100,255,218,0.35)]"
            >
              <div className="absolute inset-2 rounded-full bg-gradient-to-br from-primary/25 to-purple-500/25 blur-[2px]" />
              <span className="text-3xl font-bold text-primary tracking-widest font-mono">
                DG
              </span>
            </motion.div>

            {/* Inner Orbit (Clockwise) */}
            <motion.div
              className="absolute rounded-full w-60 h-60 md:w-72 md:h-72 border border-primary/25"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1, rotate: 360 }}
              transition={{
                opacity: { duration: 0.8, ease: "easeOut" },
                rotate: { duration: 18, repeat: Infinity, ease: "linear" },
              }}
            >
              {innerIcons.map((item, index) => {
                const angle = (index / innerIcons.length) * 360;
                const transform = `translate(-50%, -50%) rotate(${angle}deg) translate(110px) rotate(-${angle}deg)`;
                return (
                  <div
                    key={`inner-${index}`}
                    className="absolute top-1/2 left-1/2 p-2 rounded-full bg-[#0A1124]/90 border border-white/10 shadow-lg"
                    style={{
                      transform,
                      boxShadow: `0 0 16px ${item.color}33`,
                    }}
                  >
                    <item.Icon className="w-5 h-5" style={{ color: item.color }} />
                  </div>
                );
              })}
              <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-2 h-2 bg-primary rounded-full shadow-[0_0_10px_#64ffda]" />
            </motion.div>

            {/* Outer Orbit (Counter-Clockwise) */}
            <motion.div
              className="absolute rounded-full w-96 h-96 md:w-[26rem] md:h-[26rem] border border-purple-500/25"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1, rotate: -360 }}
              transition={{
                opacity: { duration: 1, ease: "easeOut" },
                rotate: { duration: 24, repeat: Infinity, ease: "linear" },
              }}
            >
              {outerIcons.map((item, index) => {
                const angle = (index / outerIcons.length) * 360;
                const transform = `translate(-50%, -50%) rotate(${angle}deg) translate(160px) rotate(-${angle}deg)`;
                return (
                  <div
                    key={`outer-${index}`}
                    className="absolute top-1/2 left-1/2 p-2.5 rounded-full bg-[#0A1124]/90 border border-white/10 shadow-lg"
                    style={{
                      transform,
                      boxShadow: `0 0 18px ${item.color}33`,
                    }}
                  >
                    <item.Icon className="w-5 h-5 md:w-6 md:h-6" style={{ color: item.color }} />
                  </div>
                );
              })}
              <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 w-2.5 h-2.5 bg-purple-500 rounded-full shadow-[0_0_12px_#A855F7]" />
            </motion.div>

            {/* Ambient Radial Background Aura */}
            <motion.div
              className="absolute inset-0 rounded-full blur-3xl pointer-events-none"
              animate={{ scale: [1, 1.25, 1], opacity: [0.15, 0.3, 0.15] }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
              style={{
                background:
                  "radial-gradient(circle, rgba(100,255,218,0.2) 0%, rgba(168,85,247,0.15) 50%, transparent 70%)",
              }}
            />
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
