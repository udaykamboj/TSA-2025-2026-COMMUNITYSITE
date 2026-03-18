"use client"

import { cn } from "@/lib/utils"
import ResourceCard from "./resource-card"
import type { ResourceCardData } from "./resource-card"

/** Shared wrapper for consistent resource card dimensions on homepage and resources page. */
const CARD_CLASSES = "w-[300px] md:w-[340px] flex-shrink-0"

export const resourceCardGridClasses =
  "grid gap-6 grid-cols-1 md:grid-cols-3 justify-center"

interface ResourceCardWrapperProps {
  resource: ResourceCardData
  onClick: () => void
  /** Use for grid layout (resources page). Omit for carousel (homepage). */
  variant?: "carousel" | "grid"
}

export function ResourceCardWrapper({
  resource,
  onClick,
  variant = "carousel",
}: ResourceCardWrapperProps) {
  return (
    <div className={cn(variant === "carousel" && CARD_CLASSES)}>
      <ResourceCard resource={resource} onClick={onClick} />
    </div>
  )
}
