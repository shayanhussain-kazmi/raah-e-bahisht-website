"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform, useReducedMotion } from "framer-motion";
import PhoneMockup from "./PhoneMockup";
import { EASE, VIEWPORT } from "@/lib/motion";

export default function ExperienceSection() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const reduce = useReducedMotion();

  // Four layers drifting at different speeds/depths as the section
  // scrolls. Depth is purely decorative, so it collapses to a flat,
  // still composition under prefers-reduced-motion.
  const yFar = useTransform(scrollYProgress, [0, 1], reduce ? [0, 0] : [40, -70]);
  const yBack = useTransform(scrollYProgress, [0, 1], reduce ? [0, 0] : [70, -110]);
  const yFront = useTransform(scrollYProgress, [0, 1], reduce ? [0, 0] : [100, -40]);
  const yMid = useTransform(scrollYProgress, [0, 1], reduce ? [0, 0] : [30, -140]);
  const rotateMid = useTransform(scrollYProgress, [0, 1], reduce ? [0, 0] : [-1.5, 1.5]);

  return (
    <section
      id="experience"
      ref={ref}
      className="relative overflow-hidden bg-navy-950 py-36 md:py-48"
    >
      <div className="pointer-events-none absolute left-1/2 top-1/3 h-[560px] w-[560px] -translate-x-1/2 rounded-full bg-navy-500/25 blur-[140px]" />

      <div className="container-page relative">
        <div className="mx-auto mb-24 max-w-xl text-center md:mb-28">
          <motion.h2
            initial={{ opacity: 0, y: 22 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={VIEWPORT}
            transition={{ duration: 0.9, ease: EASE }}
            className="text-balance font-serif text-display text-ivory"
          >
            Considered, screen by screen
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={VIEWPORT}
            transition={{ duration: 0.8, delay: 0.12, ease: EASE }}
            className="mt-5 text-lede text-ivory/55"
          >
            No clutter, no ads between you and your recitation.
          </motion.p>
        </div>

        <div className="relative mx-auto flex h-[640px] max-w-4xl items-center justify-center sm:h-[720px] md:h-[780px]">
          {/* far background layer */}
          <motion.div
            style={{ y: yFar }}
            className="absolute left-[2%] top-[2%] hidden opacity-40 blur-[1px] lg:block"
          >
            <PhoneMockup
              src="/screenshots/screen-books.jpg"
              alt="Islamic Books library screen"
              className="w-[190px] rotate-[-11deg]"
              float
            />
          </motion.div>

          <motion.div
            style={{ y: yBack }}
            className="absolute left-[8%] top-[10%] hidden opacity-70 sm:block"
          >
            <PhoneMockup
              src="/screenshots/screen-quran.jpg"
              alt="Quran surah list screen"
              className="w-[210px] rotate-[-8deg]"
            />
          </motion.div>

          <motion.div
            style={{ y: yFront }}
            className="absolute right-[4%] top-[16%] hidden opacity-80 sm:block"
          >
            <PhoneMockup
              src="/screenshots/screen-dua.jpg"
              alt="Dua reading list screen"
              className="w-[210px] rotate-[7deg]"
            />
          </motion.div>

          <motion.div
            style={{ y: yFront }}
            className="absolute right-[0%] top-[4%] hidden opacity-45 blur-[1px] lg:block"
          >
            <PhoneMockup
              src="/screenshots/screen-tasbeeh.jpg"
              alt="Tasbeeh counter screen"
              className="w-[180px] rotate-[13deg]"
              float
            />
          </motion.div>

          <motion.div
            style={{ y: yMid, rotate: rotateMid }}
            initial={{ opacity: 0, scale: 0.94 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-10%" }}
            transition={{ duration: 0.9, ease: EASE }}
            className="relative z-10"
          >
            <PhoneMockup
              src="/screenshots/screen-home-top.jpg"
              alt="Raah-e-Bahisht home screen with categories and prayer times"
              className="shadow-[0_30px_90px_-20px_rgba(0,0,0,0.7)]"
              tilt={!reduce}
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
