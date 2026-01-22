import Header from "@/components/header"
import Hero from "@/components/hero"
import FeaturedServices from "@/components/featured-services"
import EventsCarousel from "@/components/events-carousel"
import LatestNewsSection from "@/components/latest-news-section"
import BenefitProgramsSection from "@/components/benefit-programs-section"
import CTASection from "@/components/cta-section"
import Footer from "@/components/footer"

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
