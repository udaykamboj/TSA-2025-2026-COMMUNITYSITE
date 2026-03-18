"use client"

import Link from "next/link"
import { motion } from "framer-motion"
import { newsConfig } from "@/lib/content/news-config"
import { staggerContainer, staggerItem } from "@/lib/animations"

export function NewsListClient() {
  return (
    <motion.div
      className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
      variants={staggerContainer}
      initial="hidden"
      animate="visible"
    >
      {newsConfig.map((article) => (
        <motion.div key={article.slug} variants={staggerItem}>
          <Link
            href={`/main/news/${article.slug}`}
            className="group block"
            style={{ textDecoration: "none" }}
          >
            <motion.div
              className="h-full flex flex-col border-2 transition-all duration-300 overflow-hidden"
              style={{
                backgroundColor: "hsla(0, 0%, 100%, 0.749)",
                borderColor: "#ddd",
                borderRadius: "8px",
                boxShadow: "4px 4px 12px 0px rgba(0, 0, 0, 0.2)",
              }}
              whileHover={{ y: -4 }}
            >
              {article.heroImage && (
                <div className="w-full aspect-video overflow-hidden bg-slate-100">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={article.heroImage}
                    alt=""
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
              )}
              <div className="p-4 flex flex-col flex-1">
                <p className="text-slate-600 text-sm mb-2">{article.date}</p>
                <h2 className="text-xl font-semibold text-slate-900 group-hover:text-blue-600 transition-colors mb-2">
                  {article.title}
                </h2>
                <p className="text-slate-700 text-sm flex-1 line-clamp-3">{article.excerpt}</p>
                {article.tags.length > 0 && (
                  <div className="flex flex-wrap gap-2 mt-3">
                    {article.tags.map((tag) => (
                      <span
                        key={tag}
                        className="bg-slate-100 text-slate-700 text-xs font-medium px-2 py-0.5 rounded"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                )}
                <span className="text-blue-600 text-sm font-medium mt-3 inline-block">
                  Read press release →
                </span>
              </div>
            </motion.div>
          </Link>
        </motion.div>
      ))}
    </motion.div>
  )
}
