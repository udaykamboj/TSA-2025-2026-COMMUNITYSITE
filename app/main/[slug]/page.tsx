import { notFound } from "next/navigation"
import Header from "@/components/layout/header"
import Footer from "@/components/layout/footer"
import {
  getPageBySlug,
  pagesConfig,
  getContentPageSlugs,
} from "@/lib/content/pages-config"
import { readPageContent } from "@/lib/content/read-page-content"
import { extractHeadings } from "@/lib/content/extract-headings"
import ContentPageLayout from "@/components/content-page/content-page-layout"
import ServicesPageClient from "@/components/content-page/services-page-client"

interface PageProps {
  params: Promise<{ slug: string }>
}

export async function generateStaticParams() {
  const contentSlugs = getContentPageSlugs()
  return [
    { slug: "services" },
    ...contentSlugs.map((slug) => ({ slug })),
  ]
}

export async function generateMetadata({ params }: PageProps) {
  const { slug } = await params
  if (slug === "services") {
    return { title: "Services | City Community Resource Hub" }
  }
  const config = getPageBySlug(slug)
  if (!config) return {}
  return {
    title: `${config.title} | City Community Resource Hub`,
  }
}

export default async function MainSlugPage({ params }: PageProps) {
  const { slug } = await params

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
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
            <h1 className="text-3xl md:text-4xl font-bold text-slate-900 mb-2">
              Services
            </h1>
            <p className="text-slate-700 mb-10">
              Find information and actions for common city services.
            </p>
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
