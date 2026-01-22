"use client"

import { useState } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"
import SectionTitle from '@/components/section-title'

// Sample data with real images
const latestNews = [
  {
    id: 1,
    title: "City Council Approves New Infrastructure Plan",
    excerpt: "The city council has unanimously approved a comprehensive infrastructure improvement plan that will modernize key public facilities and improve transportation networks.",
    date: "January 15, 2026",
    image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&h=600&fit=crop",
    tags: ["Infrastructure", "Development"],
    link: "#"
  },
  {
    id: 2,
    title: "New Public Transit Routes Announced for Spring",
    excerpt: "Enhanced public transportation services will connect underserved neighborhoods starting next month, with three new bus routes and extended service hours.",
    date: "January 12, 2026",
    image: "https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?w=800&h=600&fit=crop",
    tags: ["Transit", "Community"],
    link: "#"
  },
  {
    id: 3,
    title: "Community Health Initiative Launches Citywide",
    excerpt: "A new health and wellness program aims to improve access to healthcare services for all residents through mobile clinics and telemedicine options.",
    date: "January 10, 2026",
    image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=800&h=600&fit=crop",
    tags: ["Health", "Services"],
    link: "#"
  }
]


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

        <div className="flex flex-col md:flex-row gap-8 items-stretch">
          <div className="w-full md:w-1/2 flex-shrink-0 h-auto md:h-auto">
            <div 
              className="bg-white rounded-md shadow-sm border border-slate-100 transition-all duration-300 h-full overflow-hidden"
                  style={{
                    backgroundColor: 'hsla(0, 0%, 100%, 0.749)',
                    borderColor: '#ddd',
                    borderRadius: '8px',
                    padding: '0px',
                    borderWidth: '2.5px',
                    boxShadow: '4px 4px 12px 0px rgba(0, 0, 0, 0.2)',
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.backgroundColor = '#fff';
                    e.currentTarget.style.borderColor = '#555';
                    e.currentTarget.style.borderRadius = '16px';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.backgroundColor = 'hsla(0, 0%, 100%, 0.749)';
                    e.currentTarget.style.borderColor = '#ddd';
                    e.currentTarget.style.borderRadius = '8px';
                  }}
            >
              <div className="w-full h-full overflow-hidden min-h-[150px] max-h-[350px]">
                <img
                  src={currentArticle.image}
                  alt={currentArticle.title}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>

          {/* Content on right */}
          <div className="w-full md:w-1/2">
            <div className="p-0 md:px-6 md:py-0 h-full">
              <p className="text-gray-600 mb-4" style={{ fontSize: '16px', fontWeight: '400' }}>
                {currentArticle.date}
              </p>
              
              <h3 
                className="clash-grotesk font-semibold mb-6"
                style={{ 
                  fontSize: 'clamp(1.5rem, 1.3rem + 1vw, 2rem)',
                  letterSpacing: '-0.02em',
                  lineHeight: '1.2',
                  wordBreak: 'break-word',
                  hyphens: 'auto',
                  color: '#1a1a1a'
                }}
              >
                {currentArticle.title}
              </h3>

              {currentArticle.tags && currentArticle.tags.length > 0 && (
                <div className="inline-flex gap-2 mb-6">
                  {currentArticle.tags.map((tag) => (
                    <span 
                      key={tag} 
                      className="bg-[#ddd] rounded-[4px] text-black inline-block font-bold px-[9px] py-[4px]"
                      style={{ fontSize: '15px' }}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              )}

              <div className="flex items-center gap-3 mb-6">
                  <a
                    href={currentArticle.link}
                    className="inline-flex items-center justify-center gap-2 rounded-md px-6 py-3 bg-blue-600 text-white font-semibold hover:bg-blue-700 transition"
                  >
                    Read press release
                  </a>
              </div>

              <div className="flex items-center gap-3">
                <button
                  onClick={handlePrev}
                  className="rounded-full border border-slate-200 flex items-center justify-center w-12 h-12 text-slate-600 hover:bg-slate-50 transition"
                  aria-label="Previous article"
                >
                  <ChevronLeft size={20} strokeWidth={2.5} />
                </button>

                <div className="text-gray-900 font-medium" style={{ fontSize: '16px' }}>
                  {currentIndex + 1} of {totalArticles}
                </div>

                <button
                  onClick={handleNext}
                  className="rounded-full bg-blue-600 flex items-center justify-center w-12 h-12 text-white hover:bg-blue-700 transition"
                  aria-label="Next article"
                >
                  <ChevronRight size={20} strokeWidth={2.5} />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx global>{`
        .clash-grotesk {
          font-family: "Clash Grotesk", sans-serif;
        }
      `}</style>
    </section>
  )
}
