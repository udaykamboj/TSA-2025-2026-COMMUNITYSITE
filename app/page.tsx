import Header from "@/components/layout/header"
import Footer from "@/components/layout/footer"
import Hero from "@/components/layout/hero"
import BenefitProgramsSection from "@/components/sections/benefit-programs-section"
import CTASection from "@/components/sections/cta-section"
import EventsCarousel from "@/components/sections/events-carousel"
import FeaturedServices from "@/components/sections/featured-services"
import LatestNewsSection from "@/components/sections/latest-news-section"

export const metadata = {
  title: "City Community Resource Hub - Find Local Services & Support",
  description:
    "Discover local community resources, services, and support programs. Food assistance, housing, youth programs, healthcare, and more—all in one place.",
  openGraph: {
    title: "City Community Resource Hub",
    description:
      "Your gateway to community resources and services. Find support for food, housing, employment, healthcare, and more.",
    type: "website",
  },
}

export default function Home() {
  return (
    <main className="overflow-x-hidden w-full">
      <Header />
      <Hero />
      <FeaturedServices />
      <EventsCarousel />
      <LatestNewsSection />
      <BenefitProgramsSection />
      <CTASection />
      <Footer />
    </main>
  )
}
