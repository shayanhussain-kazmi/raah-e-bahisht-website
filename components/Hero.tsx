"use client";

import Image from "next/image";
import { motion, useScroll, useTransform, useReducedMotion } from "framer-motion";
import { useRef } from "react";
import PhoneMockup from "./PhoneMockup";
import StoreBadges from "./StoreBadges";
import { EASE } from "@/lib/motion";
import { asset } from "@/lib/paths";

export default function Hero() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const reduce = useReducedMotion();

  // Exit choreography: as the hero scrolls away, the phone drifts,
  // scales and softens, and the text sinks and fades slightly faster —
  // so the next section arrives through the same visual environment
  // instead of the hero simply ending. Movement (not opacity) is the
  // part that flattens out for prefers-reduced-motion.
  const phoneY = useTransform(scrollYProgress, [0, 1], reduce ? [0, 0] : [0, 140]);
  const phoneScale = useTransform(scrollYProgress, [0, 1], reduce ? [1, 1] : [1, 0.88]);
  const phoneBlur = useTransform(scrollYProgress, [0, 1], reduce ? [0, 0] : [0, 6]);
  const phoneOpacity = useTransform(scrollYProgress, [0, 0.85], [1, 0]);
  const phoneFilter = useTransform(phoneBlur, (v) => `blur(${v}px)`);
  const textY = useTransform(scrollYProgress, [0, 1], reduce ? [0, 0] : [0, 70]);
  const textOpacity = useTransform(scrollYProgress, [0, 0.6], [1, 0]);
  const bgOpacity = useTransform(scrollYProgress, [0, 1], [1, 0.4]);

  return (
    <section
      id="top"
      ref={ref}
      className="relative flex min-h-[100svh] items-center overflow-hidden bg-grad-night pt-28"
    >
      {/* atmosphere: a couple of soft light sources, never busy */}
      <motion.div style={{ opacity: bgOpacity }} className="pointer-events-none absolute inset-0">
        <div className="absolute -left-32 top-4 h-[460px] w-[460px] rounded-full bg-gold/10 blur-[120px]" />
        <div className="absolute -right-40 bottom-0 h-[420px] w-[420px] rounded-full bg-navy-500/40 blur-[130px]" />
        <div className="geo-motif absolute inset-0 opacity-[0.05]" />
      </motion.div>

      <div className="container-page relative grid items-center gap-16 py-16 md:grid-cols-[1.15fr_1fr] md:gap-8">
        <motion.div style={{ y: textY, opacity: textOpacity }} className="order-2 md:order-1">
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: EASE }}
            className="mb-8 flex items-center gap-3"
          >
            <Image src={asset("/logo/mark-white.png")} alt="" width={30} height={30} />
            <span className="text-[0.72rem] uppercase tracking-[0.24em] text-gold/80">
              Raah-e-Bahisht
            </span>
          </motion.div>

          <h1 className="text-balance font-serif text-hero text-ivory">
            <motion.span
              initial={{ opacity: 0, y: 34, filter: "blur(8px)" }}
              animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              transition={{ duration: 1, delay: 0.15, ease: EASE }}
              className="block"
            >
              A journey
            </motion.span>
            <motion.span
              initial={{ opacity: 0, y: 34, filter: "blur(8px)" }}
              animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              transition={{ duration: 1, delay: 0.32, ease: EASE }}
              className="block italic text-gold"
            >
              of faith.
            </motion.span>
          </h1>

          <motion.p
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.55, ease: EASE }}
            className="mt-8 max-w-md text-lede text-ivory/65"
          >
            Quran, Duas, Ziyarat and Salaat — held together in one quiet
            companion for the daily practice of Shia faith.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.7, ease: EASE }}
            className="mt-10"
          >
            <StoreBadges />
          </motion.div>
        </motion.div>

        <motion.div
          style={{ y: phoneY, scale: phoneScale, opacity: phoneOpacity, filter: phoneFilter }}
          initial={{ opacity: 0, y: 60, rotate: 3, scale: 0.94 }}
          animate={{ opacity: 1, y: 0, rotate: 0, scale: 1 }}
          transition={{ duration: 1.2, delay: 0.4, ease: EASE }}
          className="order-1 flex justify-center md:order-2 md:justify-end"
        >
          <PhoneMockup
            src="/screenshots/screen-home-top.jpg"
            alt="Raah-e-Bahisht home screen showing the day's categories and live prayer times"
            tilt={!reduce}
            priority
          />
        </motion.div>
      </div>

      {/* scroll cue */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.5 }}
        transition={{ duration: 1, delay: 1.3 }}
        style={{ opacity: textOpacity }}
        className="pointer-events-none absolute bottom-9 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-2 sm:flex"
      >
        <span className="text-[0.62rem] uppercase tracking-[0.3em] text-ivory/50">Scroll</span>
        <span className="h-9 w-[1px] bg-gradient-to-b from-ivory/50 to-transparent" />
      </motion.div>
    </section>
  );
}
