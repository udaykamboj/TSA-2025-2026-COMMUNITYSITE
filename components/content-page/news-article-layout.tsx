import Link from "next/link"
import Header from "@/components/layout/header"
import Footer from "@/components/layout/footer"
import MarkdownContent from "./markdown-content"
import JumpToSection from "./jump-to-section"
import type { NewsConfig } from "@/lib/content/types"
import type { HeadingEntry } from "@/lib/content/extract-headings"

interface NewsArticleLayoutProps {
  config: NewsConfig
  content: string
  /** Table-of-contents entries derived from content headings. Falls back to config.sections when empty. */
  sections?: HeadingEntry[]
}

export default function NewsArticleLayout({
  config,
  content,
  sections: sectionsProp,
}: NewsArticleLayoutProps) {
  const { title, date, heroImage, tags, sections: configSections } = config
  const sections = (sectionsProp && sectionsProp.length > 0)
    ? sectionsProp
    : (configSections ?? []).map((s) => ({ id: s.id, title: s.title, depth: 2 }))

  return (
    <main className="min-h-screen flex flex-col">
      <Header />

      <div className="flex-1 bg-white overflow-x-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 md:py-8">
          {/* Breadcrumb */}
          <Link
            href="/main/news"
            className="inline-block text-blue-600 hover:text-blue-700 text-sm font-medium mb-4"
          >
            ← Latest News
          </Link>

          {/* Hero image */}
          {heroImage && (
            <div className="w-full aspect-[21/9] max-h-[400px] rounded-lg overflow-hidden border border-slate-200 bg-slate-100 mb-6">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={heroImage}
                alt=""
                className="w-full h-full object-cover"
              />
            </div>
          )}

          {/* Title, date, tags */}
          <div className="mb-8">
            <p className="text-slate-600 text-sm mb-2">{date}</p>
            <h1 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              {title}
            </h1>
            {tags.length > 0 && (
              <div className="flex flex-wrap gap-2">
                {tags.map((tag) => (
                  <span
                    key={tag}
                    className="bg-slate-100 text-slate-700 text-sm font-medium px-3 py-1 rounded"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            )}
          </div>

          {/* Two-column: Jump to section (left) + content (right) */}
          <div className="flex flex-col md:flex-row gap-8 lg:gap-12">
            {sections && sections.length > 0 && (
              <JumpToSection sections={sections} />
            )}

            <div className="flex-1 min-w-0 order-2">
              <MarkdownContent content={content} />
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </main>
  )
}
