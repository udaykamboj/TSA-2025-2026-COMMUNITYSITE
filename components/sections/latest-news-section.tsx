"use client"

import { useState } from "react"
import Link from "next/link"
import { motion, AnimatePresence } from "framer-motion"
import { ChevronLeft, ChevronRight } from "lucide-react"
import SectionTitle from "@/components/section-title"
import { newsConfig } from "@/lib/content/news-config"

const latestNews = newsConfig.map((article, index) => ({
  id: index + 1,
  slug: article.slug,
  title: article.title,
  excerpt: article.excerpt,
  date: article.date,
  image: article.heroImage ?? "",
  tags: article.tags,
}))


export default function LatestNewsSection() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const currentArticle = latestNews[currentIndex]
  const totalArticles = latestNews.length

  const handleNext = () => setCurrentIndex((prev) => (prev + 1) % totalArticles)
  const handlePrev = () => setCurrentIndex((prev) => (prev - 1 + totalArticles) % totalArticles)

  return (
    <section className="py-14 bg-white border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle title="Latest News" linkText="See all news" linkHref="/main/news" />

        <div className="flex flex-col md:flex-row gap-12 items-stretch mt-12">
          <div className="w-full md:w-1/2 flex-shrink-0 p-4 md:p-0">
            <div className="w-full h-full overflow-hidden rounded-lg shadow-sm relative group">
              <div className="absolute inset-0 bg-primary/20 group-hover:bg-primary/0 transition-colors duration-500 z-10" />
              <AnimatePresence mode="wait">
                <motion.img
                  key={currentIndex}
                  src={currentArticle.image}
                  alt={currentArticle.title}
                  className="w-full h-full object-cover min-h-[300px] md:min-h-[350px] transform group-hover:scale-105 transition-transform duration-700 ease-out"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.3 }}
                />
              </AnimatePresence>
            </div>
          </div>

          {/* Content on right */}
          <div className="w-full md:w-1/2 flex flex-col justify-center py-6 px-6 lg:px-8">
            <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, x: 12 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -12 }}
              transition={{ duration: 0.3 }}
            >
              <p className="font-poppins text-primary font-semibold tracking-widest uppercase text-sm mb-4">
                {currentArticle.date}
              </p>

              <h3 className="font-playfair font-bold text-3xl md:text-4xl text-secondary leading-tight mb-6">
                {currentArticle.title}
              </h3>

              {currentArticle.tags && currentArticle.tags.length > 0 && (
                <div className="inline-flex gap-3 mb-8">
                  {currentArticle.tags.map((tag) => (
                    <span
                      key={tag}
                      className="bg-muted border border-slate-200 text-secondary text-xs uppercase tracking-widest font-semibold px-3 py-1 font-poppins"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              )}

              <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6 mb-12">
                <Link
                  href={`/main/news/${currentArticle.slug}`}
                  className="box-button-primary"
                >
                  Read press release
                </Link>
              </div>

              <div className="flex items-center gap-6 mt-auto pt-8 border-t border-slate-200">
                <motion.button
                  onClick={handlePrev}
                  className="w-12 h-12 flex items-center justify-center border border-secondary text-secondary hover:bg-secondary hover:text-white transition-colors duration-300"
                  aria-label="Previous article"
                  whileTap={{ scale: 0.95 }}
                >
                  <ChevronLeft size={24} strokeWidth={1.5} />
                </motion.button>

                <div className="font-poppins text-secondary font-semibold tracking-widest uppercase text-sm">
                  {currentIndex + 1} / {totalArticles}
                </div>

                <motion.button
                  onClick={handleNext}
                  className="w-12 h-12 flex items-center justify-center bg-primary text-white hover:bg-[#325607] transition-colors duration-300"
                  aria-label="Next article"
                  whileTap={{ scale: 0.95 }}
                >
                  <ChevronRight size={24} strokeWidth={1.5} />
                </motion.button>
              </div>
            </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  )
}
