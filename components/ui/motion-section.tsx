"use client"

import { motion } from "framer-motion"
import type { HTMLMotionProps } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import { animateFadeUp } from "@/lib/animations"
import { cn } from "@/lib/utils"

interface MotionSectionProps extends Omit<HTMLMotionProps<"section">, "initial" | "animate" | "variants"> {
  /** When false, animates immediately on mount instead of on scroll */
  triggerOnScroll?: boolean
  /** Custom className for the section */
  className?: string
}

/**
 * Scroll-triggered section wrapper. Animates in when the section enters the viewport.
 */
export function MotionSection({
  children,
  triggerOnScroll = true,
  className,
  ...props
}: MotionSectionProps) {
  const ref = useRef<HTMLElement>(null)
  const isInView = useInView(ref, { once: true, margin: "-50px" })

  return (
    <motion.section
      ref={ref}
      initial={triggerOnScroll ? "hidden" : false}
      animate={triggerOnScroll ? (isInView ? "visible" : "hidden") : "visible"}
      variants={animateFadeUp}
      className={cn(className)}
      {...props}
    >
      {children}
    </motion.section>
  )
}
