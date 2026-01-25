import type { Variants } from "framer-motion";

export const springSoft = {
  type: "spring",
  stiffness: 180,
  damping: 22,
  mass: 0.9,
} as const;

export const easeOutExpo = [0.16, 1, 0.3, 1] as const;

export function fadeUp(delay = 0): Variants {
  return {
    hidden: { opacity: 0, y: 18, filter: "blur(6px)" },
    visible: {
      opacity: 1,
      y: 0,
      filter: "blur(0px)",
      transition: { duration: 0.7, ease: easeOutExpo, delay },
    },
  };
}

export function fadeIn(delay = 0): Variants {
  return {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 0.6, ease: easeOutExpo, delay } },
  };
}

export function scaleIn(delay = 0): Variants {
  return {
    hidden: { opacity: 0, scale: 0.96, filter: "blur(8px)" },
    visible: {
      opacity: 1,
      scale: 1,
      filter: "blur(0px)",
      transition: { duration: 0.7, ease: easeOutExpo, delay },
    },
  };
}

export const stagger: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.05,
    },
  },
};

export const hoverLift: Variants = {
  rest: { y: 0 },
  hover: { y: -6, transition: { duration: 0.2, ease: easeOutExpo } },
};

export const tapPress: Variants = {
  rest: { scale: 1 },
  tap: { scale: 0.98, transition: { duration: 0.12, ease: easeOutExpo } },
};




