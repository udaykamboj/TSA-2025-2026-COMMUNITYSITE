"use client"

import { motion } from "framer-motion"

export default function Loading() {
  return (
    <div className="flex items-center justify-center min-h-[200px] w-full">
      <motion.div
        className="w-12 h-12 border-2 border-[var(--primary)] border-t-transparent rounded-full"
        animate={{ rotate: 360 }}
        transition={{ duration: 0.8, repeat: Infinity, ease: "linear" }}
      />
    </div>
  )
}
