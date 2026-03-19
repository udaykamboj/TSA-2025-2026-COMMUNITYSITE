"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Calendar, MapPin } from "lucide-react"
import { cn } from "@/lib/utils"

export interface ResourceCardData {
  id: string
  name: string
  category: string
  description: string
  image?: string
  address?: string
  hours?: string
  isFree?: boolean
}

interface ResourceCardProps {
  resource: ResourceCardData
  onClick: () => void
  /** compact = smaller for carousel; default = full size for grid */
  size?: "default" | "compact"
}

const DEFAULT_IMAGE = "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=600&h=800&fit=crop"

export default function ResourceCard({ resource, onClick, size = "default" }: ResourceCardProps) {
  const [imageError, setImageError] = useState(false)
  const imageUrl = imageError ? DEFAULT_IMAGE : (resource.image || DEFAULT_IMAGE)
  const isCompact = size === "compact"

  return (
    <motion.button
      type="button"
      onClick={onClick}
      className={`group relative w-full aspect-[3/4] rounded-2xl overflow-hidden text-left focus:outline-none focus:ring-2 focus:ring-[var(--primary)] focus:ring-offset-2 ${isCompact ? "min-h-[220px]" : "min-h-[280px]"}`}
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
    >
      {/* Background image - full bleed with fallback on load error */}
      <img
        key={imageUrl}
        src={imageUrl}
        alt=""
        className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105 bg-slate-700"
        onError={() => setImageError(true)}
        crossOrigin="anonymous"
      />

      {/* Dark overlay for text legibility - hinted, not fully covering */}
      <div
        className="absolute inset-0"
        style={{
          background: "linear-gradient(to top, rgba(0,0,0,0.85) 0%, rgba(0,0,0,0.4) 40%, rgba(0,0,0,0.15) 100%)",
        }}
      />

      {/* Content - layout from event card, visual weight from info card */}
      <div className={cn("relative z-10 flex flex-col h-full", size === "compact" ? "p-5 md:p-6" : "p-7 md:p-8")}>
        {/* Spacer pushes all content to the bottom regardless of content length */}
        <div className="flex-1 min-h-0" aria-hidden />
        {/* Header & description - always at bottom */}
        <h3 className={cn("font-extrabold text-white mb-3 drop-shadow-sm line-clamp-2 leading-tight", size === "compact" ? "text-lg md:text-xl" : "text-xl md:text-2xl")}>
          {resource.name}
        </h3>
        <p className={cn("font-medium text-white/90 line-clamp-2 leading-relaxed mb-4", size === "compact" ? "text-sm md:text-base" : "text-base md:text-lg")}>
          {resource.description}
        </p>

        {/* Divider */}
        <div
          className={`h-px bg-white/30 w-full ${resource.hours || resource.address ? "mb-4" : "mb-6"}`}
          aria-hidden
        />

        {/* Event details (hours, address) */}
        {(resource.hours || resource.address) && (
          <div className="flex flex-col gap-2.5 mb-6">
            {resource.hours && (
              <span className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wide text-white drop-shadow-sm">
                <Calendar className="h-3.5 w-3.5 shrink-0 text-emerald-400" />
                {resource.hours}
              </span>
            )}
            {resource.address && (
              <span className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wide text-white drop-shadow-sm line-clamp-1">
                <MapPin className="h-3.5 w-3.5 shrink-0 text-emerald-400" />
                {resource.address}
              </span>
            )}
          </div>
        )}

        {/* Footer - tag only */}
        {resource.isFree && (
          <div className="mt-auto pt-2">
            <span className="rounded px-2.5 py-1 text-xs font-bold uppercase bg-white/20 text-white">
              FREE
            </span>
          </div>
        )}
      </div>
    </motion.button>
  )
}
