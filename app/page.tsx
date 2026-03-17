import Header from "@/components/layout/header"
import Footer from "@/components/layout/footer"
import { HeroSection, AlertBar, PopularServices, FeaturedSpotlight, PlanYourResources } from "@/components/home-sections-1"
import { EventsCarousel } from "@/components/home-sections-2"
import { NeighborhoodCarousel, CommunityNews, BenefitPrograms, PromoBlock, NewsletterAndSocial } from "@/components/home-sections-3"
import "./home.css"

export const metadata = {
  title: "Seattle Community Hub - Find Local Services & Support",
  description:
    "Discover local community resources, services, and support programs. Food assistance, housing, youth programs, healthcare, and more—all in one place.",
  openGraph: {
    title: "Seattle Community Hub",
    description:
      "Your gateway to community resources and services. Find support for food, housing, employment, healthcare, and more.",
    type: "website",
  },
}

export default function Home() {
  return (
    <main className="w-full flex flex-col min-h-screen">
      <Header />
      <div className="city-hub-home w-full flex-grow">
        <HeroSection />
        <AlertBar />
        <PopularServices />
        <FeaturedSpotlight />
        <PlanYourResources />
        <EventsCarousel />
        <NeighborhoodCarousel />
        <CommunityNews />
        <BenefitPrograms />
        <PromoBlock />
        {/* Intentionally omitted Support Split section as per instructions */}
        <NewsletterAndSocial />
      </div>
      <Footer />
    </main>
  )
}
