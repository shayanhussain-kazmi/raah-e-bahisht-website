"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { motion, useScroll, useMotionValueEvent, AnimatePresence } from "framer-motion";
import { asset } from "@/lib/paths";

const LINKS = [
  { href: asset("/#introduction"), label: "Home" },
  { href: asset("/#explore"), label: "Explore" },
  { href: asset("/#experience"), label: "Experience" },
  { href: asset("/contact/"), label: "Contact" },
];

export default function Navbar() {
  const { scrollY } = useScroll();
  const [compact, setCompact] = useState(false);
  const [open, setOpen] = useState(false);

  useMotionValueEvent(scrollY, "change", (y) => setCompact(y > 40));

  // lock body scroll when the mobile menu is open
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header className="fixed inset-x-0 top-0 z-50">
      <motion.div
        animate={{
          paddingTop: compact ? "0.6rem" : "1.25rem",
          paddingBottom: compact ? "0.6rem" : "1.25rem",
          backgroundColor: compact ? "rgba(5,6,26,0.82)" : "rgba(5,6,26,0)",
          backdropFilter: compact ? "blur(14px)" : "blur(0px)",
        }}
        transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
        className="hairline-b"
        style={{ borderBottomColor: compact ? undefined : "transparent" }}
      >
        <nav className="container-page flex items-center justify-between">
          <a href={asset("/")} className="flex items-center gap-2.5">
            <Image
              src={asset("/logo/mark-white.png")}
              alt="Raah-e-Bahisht"
              width={28}
              height={28}
              className="opacity-95"
            />
            <span className="font-serif text-[1.1rem] tracking-tight text-ivory">
              Raah-e-Bahisht
            </span>
          </a>

          <div className="hidden items-center gap-8 md:flex">
            {LINKS.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="text-[0.85rem] text-ivory/70 transition-colors hover:text-ivory"
              >
                {l.label}
              </a>
            ))}
            <a
              href={asset("/#download")}
              className="rounded-full bg-gold px-5 py-2 text-[0.8rem] font-semibold text-navy-900 transition-transform hover:scale-[1.03] active:scale-[0.98]"
            >
              Download
            </a>
          </div>

          <button
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
            className="flex h-10 w-10 items-center justify-center rounded-full text-ivory md:hidden"
          >
            <div className="relative h-4 w-5">
              <span
                className={`absolute left-0 top-0 h-[1.5px] w-full bg-ivory transition-all duration-300 ${
                  open ? "top-[7px] rotate-45" : ""
                }`}
              />
              <span
                className={`absolute left-0 top-[7px] h-[1.5px] w-full bg-ivory transition-opacity duration-200 ${
                  open ? "opacity-0" : "opacity-100"
                }`}
              />
              <span
                className={`absolute left-0 top-[14px] h-[1.5px] w-full bg-ivory transition-all duration-300 ${
                  open ? "top-[7px] -rotate-45" : ""
                }`}
              />
            </div>
          </button>
        </nav>
      </motion.div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.25 }}
            className="bg-navy-950/97 hairline-b flex flex-col gap-1 px-6 pb-8 pt-2 backdrop-blur-xl md:hidden"
          >
            {LINKS.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="py-3 text-base text-ivory/85"
              >
                {l.label}
              </a>
            ))}
            <a
              href={asset("/#download")}
              onClick={() => setOpen(false)}
              className="mt-3 rounded-full bg-gold px-5 py-3 text-center text-sm font-semibold text-navy-900"
            >
              Download the app
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
