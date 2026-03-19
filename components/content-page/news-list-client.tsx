"use client"

import Link from "next/link"
import { motion } from "framer-motion"
import { ArrowRight } from "lucide-react"
import { newsConfig } from "@/lib/content/news-config"
import { staggerContainer, staggerItem } from "@/lib/animations"

export function NewsListClient() {
  return (
    <motion.div
      className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
      variants={staggerContainer}
      initial="hidden"
      animate="visible"
    >
      {newsConfig.map((article) => (
        <motion.article key={article.slug} variants={staggerItem} whileHover={{ y: -4 }}>
          <Link
            href={`/main/news/${article.slug}`}
            className="group block h-full no-underline text-inherit focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--primary)] focus-visible:ring-offset-2"
          >
            <div className="box-card !p-0 overflow-hidden flex flex-col h-full hover:border-[var(--primary)] transition-colors">
              {article.heroImage && (
                <div className="relative w-full aspect-video overflow-hidden">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={article.heroImage}
                    alt=""
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </div>
              )}
              <div className="flex flex-col flex-1 p-6 md:p-8">
                <time
                  dateTime={article.date}
                  className="font-poppins text-primary font-semibold tracking-widest uppercase text-sm mb-4"
                >
                  {article.date}
                </time>
                <h2 className="font-playfair font-bold text-2xl text-secondary leading-tight mb-4 group-hover:text-primary transition-colors line-clamp-2">
                  {article.title}
                </h2>
                <p className="font-poppins text-gray-600 font-light mb-6 flex-1 line-clamp-3 leading-relaxed">
                  {article.excerpt}
                </p>
                {article.tags.length > 0 && (
                  <div className="flex flex-wrap gap-2 mb-6">
                    {article.tags.map((tag) => (
                      <span
                        key={tag}
                        className="bg-muted text-secondary border border-slate-200 px-3 py-1 rounded-none text-xs uppercase tracking-widest font-semibold font-poppins"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                )}
                <span className="text-[var(--primary)] font-bold text-lg flex items-center gap-2 hover:underline">
                  Read press release
                  <ArrowRight className="w-5 h-5 shrink-0 transition-transform group-hover:translate-x-1" strokeWidth={2.5} />
                </span>
              </div>
            </div>
          </Link>
        </motion.article>
      ))}
    </motion.div>
  )
}
