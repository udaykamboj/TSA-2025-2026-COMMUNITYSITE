import Link from "next/link"
import Header from "@/components/layout/header"
import Footer from "@/components/layout/footer"
import { newsConfig } from "@/lib/content/news-config"

export const metadata = {
  title: "Latest News | City Community Resource Hub",
}

export default function NewsIndexPage() {
  return (
    <main className="min-h-screen flex flex-col">
      <Header />
      <div className="flex-1 bg-white py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl md:text-4xl font-bold text-slate-900 mb-2">
            Latest News
          </h1>
          <p className="text-slate-700 mb-10">
            Press releases and updates from the city.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {newsConfig.map((article) => (
              <Link
                key={article.slug}
                href={`/main/news/${article.slug}`}
                className="group block"
                style={{ textDecoration: "none" }}
              >
                <div
                  className="h-full flex flex-col border-2 transition-all duration-300 overflow-hidden"
                  style={{
                    backgroundColor: "hsla(0, 0%, 100%, 0.749)",
                    borderColor: "#ddd",
                    borderRadius: "8px",
                    boxShadow: "4px 4px 12px 0px rgba(0, 0, 0, 0.2)",
                  }}
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
                    <p className="text-slate-600 text-sm mb-2">
                      {article.date}
                    </p>
                    <h2 className="text-xl font-semibold text-slate-900 group-hover:text-blue-600 transition-colors mb-2">
                      {article.title}
                    </h2>
                    <p className="text-slate-700 text-sm flex-1 line-clamp-3">
                      {article.excerpt}
                    </p>
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
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </main>
  )
}
