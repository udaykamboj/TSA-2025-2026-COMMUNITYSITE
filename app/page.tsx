import Header from "@/components/layout/header"
import Footer from "@/components/layout/footer"
import HeroWithEvents from "@/components/layout/hero-with-events"
import BenefitProgramsSection from "@/components/sections/benefit-programs-section"
import CTASection from "@/components/sections/cta-section"
import ResourcesCarousel from "@/components/sections/resources-carousel"
import FeaturedServices from "@/components/sections/featured-services"
import LatestNewsSection from "@/components/sections/latest-news-section"

export const metadata = {
  title: "Maplewood Community Resource Hub - Find Local Services & Support",
  description:
    "Discover local community resources, services, and support programs. Food assistance, housing, youth programs, healthcare, and more—all in one place.",
  openGraph: {
    title: "Maplewood Community Resource Hub",
    description:
      "Your gateway to community resources and services. Find support for food, housing, employment, healthcare, and more.",
    type: "website",
  },
}

export default function Home() {
  return (
    <main className="w-full">
      <Header />
      <HeroWithEvents />
      <FeaturedServices />
      <ResourcesCarousel />
      <LatestNewsSection />
      <BenefitProgramsSection />
      <CTASection />
      <Footer />
    </main>
  )
}
