import { notFound } from "next/navigation"
import { getEventBySlug, getEventSlugs } from "@/lib/content/events-config"
import { readEventContent } from "@/lib/content/read-event-content"
import { extractHeadings } from "@/lib/content/extract-headings"
import EventDetailLayout from "@/components/content-page/event-detail-layout"

interface PageProps {
  params: Promise<{ slug: string }>
}

export async function generateStaticParams() {
  return getEventSlugs().map((slug) => ({ slug }))
}

export async function generateMetadata({ params }: PageProps) {
  const { slug } = await params
  const config = getEventBySlug(slug)
  if (!config) return {}
  return {
    title: `${config.title} | City Community Resource Hub`,
  }
}

export default async function EventSlugPage({ params }: PageProps) {
  const { slug } = await params

  const config = getEventBySlug(slug)
  if (!config) notFound()

  const content = await readEventContent(slug)
  if (content == null) notFound()

  const sections = extractHeadings(content)
  return (
    <EventDetailLayout config={config} content={content} sections={sections} />
  )
}
