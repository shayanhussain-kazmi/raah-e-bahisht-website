"use client";

import Image from "next/image";
import { useRef } from "react";
import { motion, useMotionValue, useSpring, useTransform, useReducedMotion } from "framer-motion";
import { asset } from "@/lib/paths";

export default function PhoneMockup({
  src,
  alt,
  className = "",
  priority = false,
  tilt = false,
  float = false,
}: {
  src: string;
  alt: string;
  className?: string;
  priority?: boolean;
  /** Subtle perspective tilt that follows the pointer — desktop only. */
  tilt?: boolean;
  /** Slow ambient bobbing, for phones used as decorative/background layers. */
  float?: boolean;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const reduce = useReducedMotion();
  const tiltEnabled = tilt && !reduce;
  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const rotateX = useSpring(useTransform(my, [-0.5, 0.5], tiltEnabled ? [7, -7] : [0, 0]), {
    stiffness: 150,
    damping: 20,
  });
  const rotateY = useSpring(useTransform(mx, [-0.5, 0.5], tiltEnabled ? [-8, 8] : [0, 0]), {
    stiffness: 150,
    damping: 20,
  });

  function handleMove(e: React.MouseEvent<HTMLDivElement>) {
    if (!tiltEnabled || !ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    mx.set((e.clientX - rect.left) / rect.width - 0.5);
    my.set((e.clientY - rect.top) / rect.height - 0.5);
  }

  function handleLeave() {
    mx.set(0);
    my.set(0);
  }

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMove}
      onMouseLeave={handleLeave}
      style={tiltEnabled ? { rotateX, rotateY, transformPerspective: 900 } : undefined}
      className={float ? "animate-float-slow" : undefined}
    >
      <div
        className={`relative w-[260px] sm:w-[280px] aspect-[9/19.5] rounded-[2.4rem] bg-navy-900 p-[10px] shadow-card ring-1 ring-gold/20 ${className}`}
      >
        {/* ambient rim light — top-left highlight, echoes the app's own gold accent */}
        <div className="pointer-events-none absolute -inset-px rounded-[2.4rem] bg-gradient-to-br from-gold/25 via-transparent to-transparent opacity-60" />
        <div className="relative h-full w-full overflow-hidden rounded-[1.9rem] bg-navy-800">
          <Image
            src={asset(src)}
            alt={alt}
            fill
            sizes="(min-width: 640px) 280px, 260px"
            className="object-cover object-top"
            priority={priority}
          />
          {/* subtle inner vignette so screenshots feel seated in glass, not pasted on */}
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/25 via-transparent to-black/10" />
        </div>
        {/* speaker notch */}
        <div className="absolute left-1/2 top-[10px] h-[6px] w-[70px] -translate-x-1/2 rounded-full bg-navy-950/80" />
      </div>
    </motion.div>
  );
}
