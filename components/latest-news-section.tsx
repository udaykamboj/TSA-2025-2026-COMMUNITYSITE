"use client"

import { latestNews } from "@/lib/sample-data"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { useState } from "react"

export default function LatestNewsSection() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const currentArticle = latestNews[currentIndex]
  const totalArticles = latestNews.length

  const handleNext = () => setCurrentIndex((prev) => (prev + 1) % totalArticles)
  const handlePrev = () => setCurrentIndex((prev) => (prev - 1 + totalArticles) % totalArticles)

  return (
    <section className="bg-gray-50 py-12 px-4 md:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-center">
          <div className="mb-12">
          <h2 className="text-3xl font-bold text-slate-900 mb-2">Latest News</h2>
          <p className="text-slate-700">News Publishes Fair and Balanced Reporting</p>
        </div>
          <Link href="/news">
            <Button variant="link" className="text-slate-900 p-0 font-semibold hover:underline">
              See all News
            </Button>
          </Link>
        </div>

        <div className="flex gap-8 items-center">
          <div className="w-full md:w-1/2 flex-shrink-0">
            <div className="aspect-square bg-gray-200 border-2 border-slate-300 overflow-hidden">
              <img
                src={currentArticle.image || "/placeholder.svg"}
                alt={currentArticle.title}
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Content on right */}
          <div className="w-full md:w-1/2">
            <p className="text-sm text-gray-500 mb-3">Posted {currentArticle.date}</p>
            <h3 className="text-xl font-bold text-foreground mb-4 leading-tight">{currentArticle.title}</h3>
            <p className="text-gray-600 text-sm mb-6">{currentArticle.excerpt}</p>
            <Link href={currentArticle.link}>
              <Button className="bg-slate-900 hover:bg-slate-800 text-white border-2 border-slate-900">
                Read press release
              </Button>
            </Link>

            <div className="flex items-center justify-between mt-8 pt-6 border-t-2 border-slate-300">
              <div className="text-sm text-gray-600">
                {currentIndex + 1} of {totalArticles}
              </div>
              <div className="flex gap-2">
                <button
                  onClick={handlePrev}
                  className="w-10 h-10 bg-slate-900 hover:bg-slate-800 text-white flex items-center justify-center border-2 border-slate-900"
                  aria-label="Previous article"
                >
                  <ChevronLeft size={20} />
                </button>
                <button
                  onClick={handleNext}
                  className="w-10 h-10 bg-slate-900 hover:bg-slate-800 text-white flex items-center justify-center border-2 border-slate-900"
                  aria-label="Next article"
                >
                  <ChevronRight size={20} />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
