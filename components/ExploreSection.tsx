"use client";

import { useRef, useState } from "react";
import { motion, AnimatePresence, useScroll, useMotionValueEvent, useReducedMotion } from "framer-motion";
import PhoneMockup from "./PhoneMockup";
import { EASE } from "@/lib/motion";

const CATEGORIES = [
  {
    key: "quran",
    name: "Quran",
    arabic: "القرآن",
    copy: "The full mus'haf with clear translation, verse by verse, with bookmarks that pick up exactly where you left off.",
    screenshot: "/screenshots/screen-quran.jpg",
    alt: "Quran surah list, showing Al-Faatiha through Al-Anfaal with Arabic titles",
  },
  {
    key: "duas",
    name: "Duas & Ziyarat",
    arabic: "دعاء",
    copy: "Dua Kumayl, Dua Arafah, Ziyarat Ashura — the supplications passed down for every occasion, Arabic beside translation.",
    screenshot: "/screenshots/screen-dua.jpg",
    alt: "Dua list including Dua Arafah, Dua Sabah and Dua Kumayl with Arabic titles and reading times",
  },
  {
    key: "salaat",
    name: "Salaat & Taqibaat",
    arabic: "صلاة",
    copy: "The five daily prayers and the night devotions, each with its method laid out clearly, and the taqibaat recited after.",
    screenshot: "/screenshots/screen-salat.jpg",
    alt: "Salat screen listing the five daily prayers and night and devotional prayers",
  },
  {
    key: "amaal",
    name: "Amaal & Books",
    arabic: "أعمال",
    copy: "The recommended acts for each day and month, alongside a growing library of classical and contemporary Shia texts.",
    screenshot: "/screenshots/screen-books.jpg",
    alt: "Islamic Books library screen showing Al-Kafi, Uyun Akhbar al-Rida and Al-Amali",
  },
  {
    key: "nauha",
    name: "Noha & Manqabat",
    arabic: "نوحہ",
    copy: "Recitations for Muharram and beyond, ready to open and read whenever they're needed.",
    screenshot: "/screenshots/screen-nohay.jpg",
    alt: "Nohay list with titles and reciters",
  },
  {
    key: "raahib",
    name: "Ask Raahib",
    arabic: "راهب",
    copy: "A focused hadith lookup — describe what you're looking for, in your own words, and find the narration that speaks to it.",
    screenshot: "/screenshots/screen-raahib.jpg",
    alt: "Ask Raahib hadith lookup screen with an empty conversation and search field",
  },
];

const SEGMENT_VH = 85;

export default function ExploreSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(0);
  const reduce = useReducedMotion();

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  useMotionValueEvent(scrollYProgress, "change", (v) => {
    const idx = Math.min(CATEGORIES.length - 1, Math.max(0, Math.floor(v * CATEGORIES.length)));
    setActive((prev) => (prev !== idx ? idx : prev));
  });

  const current = CATEGORIES[active];

  // Lets the progress dots double as a jump-to-category control instead
  // of being purely decorative — click or focus + Enter/Space both work.
  function jumpTo(index: number) {
    const el = containerRef.current;
    if (!el) return;
    const segment = el.offsetHeight / CATEGORIES.length;
    const targetY = el.offsetTop + segment * index + segment / 2;
    window.scrollTo({ top: targetY, behavior: reduce ? "auto" : "smooth" });
  }

  return (
    <section
      id="explore"
      ref={containerRef}
      className="relative bg-navy-900"
      style={{ height: `${CATEGORIES.length * SEGMENT_VH}vh` }}
    >
      <div className="geo-motif pointer-events-none absolute inset-0 opacity-[0.04]" />

      <div className="sticky top-0 flex h-[100svh] flex-col justify-center overflow-hidden">
        <div className="container-page">
          <div className="mb-10 flex items-end justify-between md:mb-14">
            <span className="text-[0.7rem] uppercase tracking-[0.24em] text-gold/60">
              Explore
            </span>
            <div className="flex items-center gap-2">
              {CATEGORIES.map((cat, i) => (
                <button
                  key={cat.key}
                  type="button"
                  onClick={() => jumpTo(i)}
                  aria-label={`Jump to ${cat.name}`}
                  aria-current={i === active}
                  className="p-1.5 -m-1.5"
                >
                  <span
                    className={`block h-1.5 rounded-full transition-all duration-500 ${
                      i === active ? "w-6 bg-gold" : "w-1.5 bg-gold/25 hover:bg-gold/50"
                    }`}
                  />
                </button>
              ))}
            </div>
          </div>

          <div className="grid items-center gap-12 md:grid-cols-[1.1fr_0.9fr] md:gap-8">
            <div className="order-2 overflow-hidden md:order-1">
              <AnimatePresence mode="wait">
                <motion.div
                  key={current.key}
                  initial={{ opacity: 0, y: 22 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -18 }}
                  transition={{ duration: 0.55, ease: EASE }}
                >
                  <span className="mb-4 block font-serif text-2xl text-gold/50">
                    {current.arabic}
                  </span>
                  <h2 className="text-balance font-serif text-display text-ivory">
                    {current.name}
                  </h2>
                  <p className="mt-5 max-w-md text-lede text-ivory/60">{current.copy}</p>
                </motion.div>
              </AnimatePresence>
            </div>

            <div className="order-1 flex justify-center md:order-2 md:justify-end">
              <div className="relative">
                <div className="pointer-events-none absolute left-1/2 top-1/2 h-[340px] w-[340px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-gold/10 blur-[100px]" />
                <AnimatePresence mode="wait">
                  <motion.div
                    key={current.key}
                    initial={{ opacity: 0, scale: 0.94, filter: "blur(14px)" }}
                    animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
                    exit={{ opacity: 0, scale: 1.03, filter: "blur(10px)" }}
                    transition={{ duration: 0.6, ease: EASE }}
                    className="relative"
                  >
                    <PhoneMockup src={current.screenshot} alt={current.alt} />
                  </motion.div>
                </AnimatePresence>
              </div>
            </div>
          </div>
        </div>

        <div className="pointer-events-none absolute bottom-8 left-1/2 -translate-x-1/2 text-[0.62rem] uppercase tracking-[0.3em] text-ivory/30 md:hidden">
          Keep scrolling
        </div>
      </div>
    </section>
  );
}
