"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform, useReducedMotion } from "framer-motion";
import { EASE } from "@/lib/motion";

// Fixed positions so server and client render identically (no Math.random at render time).
const STARS = [
  [6, 12, 1.4], [14, 34, 1], [22, 8, 1.2], [31, 52, 0.9], [40, 20, 1.6],
  [48, 68, 1], [55, 15, 1.1], [63, 45, 1.4], [70, 72, 0.9], [78, 22, 1.3],
  [85, 58, 1], [92, 30, 1.5], [11, 78, 1], [26, 88, 1.2], [37, 6, 0.9],
  [58, 90, 1.1], [66, 5, 1.3], [95, 80, 1], [3, 55, 1.2], [82, 10, 0.9],
] as const;

function Crescent() {
  return (
    <svg width="76" height="76" viewBox="0 0 72 72" fill="none" aria-hidden>
      <path
        d="M46 12c-12.5 3-21 14.6-21 28s8.5 25 21 28c-4 1.7-8.4 2.6-13 2.6C14.5 70.6 1 57 1 40S14.5 9.4 33 9.4c4.6 0 9 .9 13 2.6Z"
        fill="#E3D7B3"
        opacity="0.9"
      />
    </svg>
  );
}

export default function SpiritualSection() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const reduce = useReducedMotion();

  // A very slow, restrained atmospheric shift — the glow drifts and
  // warms slightly as the section passes, never a full scene change.
  // The drift (not the gentle brightness pulse) is what stands down
  // for prefers-reduced-motion.
  const glowY = useTransform(scrollYProgress, [0, 1], reduce ? ["0%", "0%"] : ["-6%", "6%"]);
  const glowOpacity = useTransform(scrollYProgress, [0, 0.5, 1], [0.5, 1, 0.5]);
  const starsOpacity = useTransform(scrollYProgress, [0, 0.5, 1], [0.3, 1, 0.3]);

  return (
    <section
      ref={ref}
      className="relative overflow-hidden bg-navy-950 py-40 md:py-56"
    >
      <motion.div style={{ opacity: starsOpacity }} className="absolute inset-0">
        {STARS.map(([x, y, s], i) => (
          <span
            key={i}
            className="absolute rounded-full bg-ivory"
            style={{
              left: `${x}%`,
              top: `${y}%`,
              width: `${s}px`,
              height: `${s}px`,
              opacity: 0.5,
            }}
          />
        ))}
      </motion.div>
      <motion.div
        style={{ y: glowY, opacity: glowOpacity }}
        className="pointer-events-none absolute left-1/2 top-1/2 h-[420px] w-[420px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-navy-500/20 blur-[140px]"
      />

      <div className="container-page relative flex flex-col items-center text-center">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-20%" }}
          transition={{ duration: 0.9, ease: EASE }}
          className="mb-10"
        >
          <Crescent />
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 22 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-20%" }}
          transition={{ duration: 1, delay: 0.1, ease: EASE }}
          className="max-w-3xl text-balance font-serif text-display italic leading-[1.4] text-ivory"
        >
          Faith is rarely one grand moment. It is Fajr kept quietly, a dua
          repeated softly, a verse returned to again and again.
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-20%" }}
          transition={{ duration: 0.9, delay: 0.28, ease: EASE }}
          className="mt-10 text-[0.8rem] uppercase tracking-[0.28em] text-gold/70"
        >
          A journey of faith
        </motion.p>
      </div>
    </section>
  );
}
