"use client"

import { latestNews } from "@/lib/sample-data"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { useState } from "react"
import SectionTitle from '@/components/section-title'

export default function LatestNewsSection() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const currentArticle = latestNews[currentIndex]
  const totalArticles = latestNews.length

  const handleNext = () => setCurrentIndex((prev) => (prev + 1) % totalArticles)
  const handlePrev = () => setCurrentIndex((prev) => (prev - 1 + totalArticles) % totalArticles)

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle title="Latest News" linkText="See all News" linkHref="/main/services" />

        <div className="flex flex-col md:flex-row gap-8 items-start">
          <div className="w-full md:w-1/2 flex-shrink-0">
            <div
              className="cmp-card-image"
              style={{
                backdropFilter: 'blur(12.5px)',
                backgroundColor: 'hsla(0, 0%, 100%, 0.749)',
                border: '2px solid #ddd',
                borderRadius: '8px',
                boxSizing: 'border-box',
                padding: 0,
                boxShadow: '4px 4px 12px 0px rgba(0, 0, 0, 0.2)',
                overflow: 'hidden'
              }}
              onMouseEnter={(e) => {
                const t = e.currentTarget as HTMLDivElement
                t.style.backgroundColor = '#fff'
                t.style.border = '2px solid #555'
              }}
              onMouseLeave={(e) => {
                const t = e.currentTarget as HTMLDivElement
                t.style.backgroundColor = 'hsla(0, 0%, 100%, 0.749)'
                t.style.border = '2px solid #ddd'
              }}
            >
              <div className="w-full h-[220px] md:h-[300px] overflow-hidden">
                <img
                  src={currentArticle.image || '/placeholder.svg'}
                  alt={currentArticle.title}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>

          {/* Content on right */}
          <div className="w-full md:w-1/2">
            <div className="p-0 md:px-6 md:py-0">
              <p className="text-sm text-gray-500 mb-3">Posted {currentArticle.date}</p>
              <h3 className="font-medium text-[1.75rem] justify-between]" style={{ fontFamily: '"Clash Grotesk", sans-serif' }}>{currentArticle.title}</h3>
              <p className="text-gray-600 text-sm mb-4">{currentArticle.excerpt}</p>

              {Array.isArray((currentArticle as any).tags) && (currentArticle as any).tags.length > 0 && (
                <div className="tags inline-flex gap-2 mb-4">
                  {((currentArticle as any).tags as string[]).map((t) => (
                    <span key={t} className="tag bg-[#ddd] rounded-[4px] text-black inline-block text-[14px] font-bold px-[8px] py-[4px]">{t}</span>
                  ))}
                </div>
              )}

              <div className="flex items-center gap-4">
                <Link href={currentArticle.link}>
                  <Button className="rounded-full bg-blue-600 hover:bg-blue-700 text-white px-6 py-3">Read press release</Button>
                </Link>

                <div className="ml-auto flex items-center gap-4">
                  <button
                    onClick={handlePrev}
                    className="w-10 h-10 rounded-full border-2 border-gray-300 flex items-center justify-center text-gray-700 bg-white"
                    aria-label="Previous article"
                  >
                    <ChevronLeft size={18} />
                  </button>

                  <div className="text-sm text-gray-600">{currentIndex + 1} of {totalArticles}</div>

                  <button
                    onClick={handleNext}
                    className="w-10 h-10 rounded-full bg-blue-600 text-white flex items-center justify-center"
                    aria-label="Next article"
                  >
                    <ChevronRight size={18} />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
