"use client";

import { motion } from "framer-motion";
import { EASE, VIEWPORT } from "@/lib/motion";

export default function Introduction() {
  return (
    <section id="introduction" className="relative bg-navy-950 py-32 md:py-44">
      <div className="container-page">
        <motion.p
          initial={{ opacity: 0, y: 26 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={VIEWPORT}
          transition={{ duration: 0.9, ease: EASE }}
          className="mx-auto max-w-3xl text-balance text-center font-serif text-display text-ivory/95"
        >
          One place for your daily journey of faith — the Quran you recite,
          the duas you keep close, the ziyarat you long for.
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={VIEWPORT}
          transition={{ duration: 0.8, delay: 0.15, ease: EASE }}
          className="mx-auto mt-10 max-w-md text-center text-lede text-ivory/55"
        >
          Built for the quiet moments — before Fajr, after Maghrib, on a
          train, between meetings — so that faith fits into a life, not the
          other way around.
        </motion.p>
      </div>
    </section>
  );
}
