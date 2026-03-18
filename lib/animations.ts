/**
 * Shared Framer Motion animation variants and transition configs.
 * Use across the site for consistent motion patterns.
 */

import type { Variants, Transition } from "framer-motion"

/** Fade up entrance - opacity 0→1, y 24→0 */
export const animateFadeUp: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] },
  },
}

/** Simple fade in */
export const animateFadeIn: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { duration: 0.4, ease: "easeOut" },
  },
}

/** Stagger container - use with staggerChildren on parent */
export const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.1,
    },
  },
}

/** Stagger item - use with staggerContainer */
export const staggerItem: Variants = {
  hidden: { opacity: 0, y: 16 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.35, ease: [0.22, 1, 0.36, 1] },
  },
}

/** Stagger item fade only (for grids) */
export const staggerItemFade: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { duration: 0.3 },
  },
}

/** Card hover - subtle scale */
export const hoverScale = {
  scale: 1.02,
  transition: { duration: 0.2, ease: "easeOut" },
}

/** Card hover - lift effect */
export const hoverLift = {
  y: -4,
  transition: { duration: 0.2, ease: "easeOut" },
}

/** Card hover - combined lift + scale */
export const hoverLiftScale = {
  y: -4,
  scale: 1.02,
  transition: { duration: 0.2, ease: "easeOut" },
}

/** Tap feedback */
export const tapScale = {
  scale: 0.98,
  transition: { duration: 0.1 },
}

/** Dropdown variants for AnimatePresence */
export const dropdownVariants: Variants = {
  hidden: {
    opacity: 0,
    y: -8,
    transition: { duration: 0.15 },
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.2, ease: [0.22, 1, 0.36, 1] },
  },
  exit: {
    opacity: 0,
    y: -8,
    transition: { duration: 0.15 },
  },
}

/** Slide down dropdown (for mega menus, mobile menu) */
export const slideDownVariants: Variants = {
  hidden: {
    opacity: 0,
    y: -6,
    transition: { duration: 0.15 },
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.2, ease: [0.22, 1, 0.36, 1] },
  },
  exit: {
    opacity: 0,
    y: -6,
    transition: { duration: 0.15 },
  },
}

/** Default spring transition */
export const springTransition: Transition = {
  type: "spring",
  stiffness: 300,
  damping: 25,
}

/** Gentle transition for content */
export const contentTransition: Transition = {
  duration: 0.5,
  ease: [0.22, 1, 0.36, 1],
}
