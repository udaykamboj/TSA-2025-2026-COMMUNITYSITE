import { notFound } from "next/navigation"
import { getNewsBySlug, getNewsSlugs } from "@/lib/content/news-config"
import { readNewsContent } from "@/lib/content/read-news-content"
import { extractHeadings } from "@/lib/content/extract-headings"
import NewsArticleLayout from "@/components/content-page/news-article-layout"

interface PageProps {
  params: Promise<{ slug: string }>
}

export async function generateStaticParams() {
  return getNewsSlugs().map((slug) => ({ slug }))
}

export async function generateMetadata({ params }: PageProps) {
  const { slug } = await params
  const config = getNewsBySlug(slug)
  if (!config) return {}
  return {
    title: `${config.title} | City Community Resource Hub`,
  }
}

export default async function NewsSlugPage({ params }: PageProps) {
  const { slug } = await params

  const config = getNewsBySlug(slug)
  if (!config) notFound()

  const content = await readNewsContent(slug)
  if (content == null) notFound()

  const sections = extractHeadings(content)
  return (
    <NewsArticleLayout config={config} content={content} sections={sections} />
  )
}
