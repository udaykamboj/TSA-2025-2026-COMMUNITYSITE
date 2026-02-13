import Link from "next/link"
import Header from "@/components/layout/header"
import Footer from "@/components/layout/footer"
import MarkdownContent from "./markdown-content"
import JumpToSection from "./jump-to-section"
import type { EventConfig } from "@/lib/content/types"
import type { HeadingEntry } from "@/lib/content/extract-headings"

interface EventDetailLayoutProps {
  config: EventConfig
  content: string
  /** Table-of-contents entries derived from content headings. Falls back to config.sections when empty. */
  sections?: HeadingEntry[]
}

function formatEventDate(dateStr: string): string {
  const d = new Date(dateStr + "T12:00:00")
  return d.toLocaleDateString("en-US", { month: "long", day: "numeric", year: "numeric" })
}

export default function EventDetailLayout({
  config,
  content,
  sections: sectionsProp,
}: EventDetailLayoutProps) {
  const { title, date, time, location, image, heroImage, tags, sections: configSections } = config
  const sections = (sectionsProp && sectionsProp.length > 0)
    ? sectionsProp
    : (configSections ?? []).map((s) => ({ id: s.id, title: s.title, depth: 2 }))
  const heroImg = heroImage ?? image

  return (
    <main className="min-h-screen flex flex-col">
      <Header />

      <div className="flex-1 bg-white overflow-x-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 md:py-8">
          {/* Breadcrumb */}
          <Link
            href="/"
            className="inline-block text-blue-600 hover:text-blue-700 text-sm font-medium mb-4"
          >
            ← Upcoming Events
          </Link>

          {/* Hero image */}
          {heroImg && (
            <div className="w-full aspect-[21/9] max-h-[400px] rounded-lg overflow-hidden border border-slate-200 bg-slate-100 mb-6">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={heroImg}
                alt=""
                className="w-full h-full object-cover"
              />
            </div>
          )}

          {/* Date, time, location, title, tags */}
          <div className="mb-8">
            <p className="text-slate-600 text-sm mb-1">{formatEventDate(date)}</p>
            <p className="text-slate-600 text-sm mb-1">{time}</p>
            <p className="text-slate-600 text-sm mb-4">{location}</p>
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
