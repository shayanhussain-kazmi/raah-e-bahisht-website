"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import StoreBadges from "./StoreBadges";
import { EASE, VIEWPORT } from "@/lib/motion";
import { asset } from "@/lib/paths";

export default function DownloadCTA() {
  return (
    <section id="download" className="relative overflow-hidden bg-navy-900 py-32 md:py-44">
      <div className="pointer-events-none absolute left-1/2 top-0 h-[400px] w-[780px] -translate-x-1/2 rounded-full bg-gold/10 blur-[130px]" />
      <div className="geo-motif pointer-events-none absolute inset-0 opacity-[0.04]" />

      <div className="container-page relative flex flex-col items-center text-center">
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={VIEWPORT}
          transition={{ duration: 0.7, ease: EASE }}
        >
          <Image
            src={asset("/logo/mark-white.png")}
            alt=""
            width={48}
            height={48}
            className="mx-auto mb-9 opacity-90"
          />
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 22 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={VIEWPORT}
          transition={{ duration: 0.9, delay: 0.05, ease: EASE }}
          className="text-balance font-serif text-display text-ivory"
        >
          Continue your journey
          <br />
          with Raah-e-Bahisht.
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={VIEWPORT}
          transition={{ duration: 0.8, delay: 0.18, ease: EASE }}
          className="mt-5 max-w-sm text-lede text-ivory/60"
        >
          Raah-e-Bahisht is nearing completion. Be among the first to carry
          it with you.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={VIEWPORT}
          transition={{ duration: 0.8, delay: 0.3, ease: EASE }}
          className="mt-11"
        >
          <StoreBadges />
        </motion.div>
      </div>
    </section>
  );
}
