// Shared motion language for the site — one easing curve, one viewport
// threshold, used everywhere so the whole page feels like a single
// choreographed piece rather than per-section defaults.

// A soft, decelerating curve — expensive/cinematic rather than bouncy.
export const EASE: [number, number, number, number] = [0.16, 1, 0.3, 1];

// Slightly snappier variant for small UI (buttons, nav) rather than
// large reveals.
export const EASE_UI: [number, number, number, number] = [0.22, 1, 0.36, 1];

export const VIEWPORT = { once: true, margin: "-14% 0px -14% 0px" } as const;

export const fadeUp = (delay = 0, distance = 28) => ({
  initial: { opacity: 0, y: distance },
  whileInView: { opacity: 1, y: 0 },
  viewport: VIEWPORT,
  transition: { duration: 0.9, delay, ease: EASE },
});

export const fadeUpIn = (delay = 0, distance = 28) => ({
  initial: { opacity: 0, y: distance },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.9, delay, ease: EASE },
});
