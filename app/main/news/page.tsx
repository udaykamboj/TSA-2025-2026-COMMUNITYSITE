import Header from "@/components/layout/header"
import Footer from "@/components/layout/footer"
import { NewsListClient } from "@/components/content-page/news-list-client"

export const metadata = {
  title: "Latest News | Maplewood Community Resource Hub",
  description: "Stay updated with the latest news, announcements, and events in Maplewood.",
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
          <NewsListClient />
        </div>
      </div>
      <Footer />
    </main>
  )
}
