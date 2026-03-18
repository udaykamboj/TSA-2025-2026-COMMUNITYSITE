import { notFound, redirect } from "next/navigation"
import Header from "@/components/layout/header"
import Footer from "@/components/layout/footer"
import {
  getPageBySlug,
  pagesConfig,
  getContentPageSlugs,
} from "@/lib/content/pages-config"
import {
  getCategorySummaryBySlug,
  SUMMARY_SLUGS,
} from "@/lib/content/category-summaries"
import { readPageContent } from "@/lib/content/read-page-content"
import { extractHeadings } from "@/lib/content/extract-headings"
import ContentPageLayout from "@/components/content-page/content-page-layout"
import ServicesPageClient from "@/components/content-page/services-page-client"
import CategorySummaryPageClient from "@/components/content-page/category-summary-page-client"
import ServicesHero from "@/components/content-page/services-hero"

interface PageProps {
  params: Promise<{ slug: string }>
}

export async function generateStaticParams() {
  const contentSlugs = getContentPageSlugs()
  return [
    { slug: "services" },
    ...SUMMARY_SLUGS.map((slug) => ({ slug })),
    ...contentSlugs.map((slug) => ({ slug })),
  ]
}

export async function generateMetadata({ params }: PageProps) {
  const { slug } = await params
  if (slug === "services") {
    return { title: "Services | Maplewood Community Resource Hub" }
  }
  const categorySummary = getCategorySummaryBySlug(slug)
  if (categorySummary) {
    return {
      title: `${categorySummary.title} | Maplewood Community Resource Hub`,
    }
  }
  const config = getPageBySlug(slug)
  if (!config) return {}
  return {
    title: `${config.title} | Maplewood Community Resource Hub`,
  }
}

export default async function MainSlugPage({ params }: PageProps) {
  const { slug } = await params

  // Redirect support-resources to unified resources page
  if (slug === "support-resources") {
    redirect("/resources")
  }

  // Category summary pages (city-services, licenses-permits)
  const categorySummary = getCategorySummaryBySlug(slug)
  if (categorySummary) {
    const services = categorySummary.serviceSlugs
      .map((s) => getPageBySlug(s))
      .filter(Boolean)
      .map((p) => ({
        slug: p!.slug,
        title: p!.title,
        description: p!.description,
        callToAction: p!.callToAction,
      }))
    return (
      <main className="min-h-screen flex flex-col">
        <Header />
        <div className="flex-1 bg-white py-12 md:py-16">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <nav className="mb-8 text-sm text-slate-600">
              <a href="/main/services" className="hover:text-[var(--primary)]">
                Services
              </a>
              <span className="mx-2">/</span>
              <span className="text-slate-900 font-medium">
                {categorySummary.title}
              </span>
            </nav>
            <CategorySummaryPageClient
              summary={categorySummary}
              services={services}
            />
          </div>
        </div>
        <Footer />
      </main>
    )
  }

  if (slug === "services") {
    const categories: { title: string; slugs: string[] }[] = [
      {
        title: "Parking & streets",
        slugs: [
          "parking-or-camera-tickets",
          "illegal-parking-complaint",
          "report-pothole-or-street-issue",
          "street-cleaning-schedule",
        ],
      },
      {
        title: "Housing & property",
        slugs: ["apartment-complaint", "rent-increase-help"],
      },
      {
        title: "Licenses & records",
        slugs: [
          "birth-certificates",
          "marriage-licenses",
          "building-permits",
          "business-licenses",
        ],
      },
      {
        title: "Benefits & assistance",
        slugs: ["snap-benefits", "child-care-assistance"],
      },
      {
        title: "Community & civic",
        slugs: [
          "voter-registration",
          "noise-complaint",
          "get-rid-of-waste",
          "public-records-request",
        ],
      },
    ]
    const services = pagesConfig.map((p) => ({
      slug: p.slug,
      title: p.title,
      callToAction: p.callToAction,
    }))
    return (
      <main className="min-h-screen flex flex-col">
        <Header />
        <div className="flex-1 bg-white py-12 md:py-16">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <ServicesHero count={services.length} />
            <ServicesPageClient categories={categories} services={services} />
          </div>
        </div>
        <Footer />
      </main>
    )
  }


  const config = getPageBySlug(slug)
  if (!config) notFound()

  const content = await readPageContent(slug)
  if (content == null) notFound()

  const sections = extractHeadings(content)
  return (
    <ContentPageLayout config={config} content={content} sections={sections} />
  )
}
