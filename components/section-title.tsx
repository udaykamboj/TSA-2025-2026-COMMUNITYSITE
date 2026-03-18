"use client"

import React from "react"
import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import { animateFadeUp } from "@/lib/animations"

type SectionTitleProps = {
    title?: string
    linkText?: string
    linkHref?: string
    /** Custom node to render on the right side instead of the link */
    rightNode?: React.ReactNode
    /** Tailwind padding-bottom class for the container (default: pb-8) */
    pbClass?: string
}

const SectionTitle: React.FC<SectionTitleProps> = ({
    title = "Latest News",
    linkText = "See all news",
    linkHref = "#",
    rightNode,
    pbClass = 'pb-8',
}) => {
    const ref = useRef<HTMLDivElement>(null)
    const isInView = useInView(ref, { once: true, margin: "-30px" })
    return (
        <motion.div
            ref={ref}
            className={pbClass}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            variants={animateFadeUp}
        >
            <div className="max-w-7xl mx-auto flex items-center justify-between">
                <h2 className="text-4xl font-bold text-gray-900">{title}</h2>
                {rightNode ? (
                    rightNode
                ) : linkText ? (
                    <a href={linkHref} className="text-[var(--primary)] hover:opacity-90 font-medium text-lg underline">
                        {linkText}
                    </a>
                ) : null}
            </div>
        </motion.div>
    )
}

export default SectionTitle