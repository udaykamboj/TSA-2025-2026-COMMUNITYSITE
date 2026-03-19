import { notFound } from "next/navigation"

// No event detail pages are generated — events are informational only.
export async function generateStaticParams() {
  return []
}

export default async function EventSlugPage({
  params,
  searchParams,
}: PageProps<"/main/events/[slug]">) {
  await Promise.all([params, searchParams])
  notFound()
}
