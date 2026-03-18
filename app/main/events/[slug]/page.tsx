import { notFound } from "next/navigation"

interface PageProps {
  params: Promise<{ slug: string }>
}

// No event detail pages are generated — events are informational only.
export async function generateStaticParams() {
  return []
}

export default async function EventSlugPage({ params: _params }: PageProps) {
  notFound()
}
