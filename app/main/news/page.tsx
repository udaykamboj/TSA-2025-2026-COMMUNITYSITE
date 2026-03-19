import Header from "@/components/layout/header"
import Footer from "@/components/layout/footer"
import { NewsListClient } from "@/components/content-page/news-list-client"

export const metadata = {
  title: "Latest News | Mill Creek Community Resource Hub",
  description: "Stay updated with the latest news, announcements, and events in Mill Creek.",
}

export default function NewsIndexPage() {
  return (
    <main className="min-h-screen flex flex-col">
      <Header />
      <div className="flex-1 bg-white">
        <div className="container-page py-12 md:py-16 lg:py-20">
          <header className="mb-12 md:mb-16">
            <h1 className="font-playfair font-bold text-3xl sm:text-4xl lg:text-5xl text-[var(--secondary)] tracking-tight mb-3">
              Latest News
            </h1>
            <p className="font-poppins text-[var(--muted-foreground)] text-base sm:text-lg max-w-2xl leading-relaxed">
              Press releases and updates from the city.
            </p>
          </header>
          <NewsListClient />
        </div>
      </div>
      <Footer />
    </main>
  )
}
