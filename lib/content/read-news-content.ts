import { readFile } from "fs/promises"
import path from "path"

const NEWS_CONTENT_DIR = "lib/content/news"

/**
 * Read Markdown content for a news article by slug.
 * Must be called from the server (e.g. in app/main/news/[slug]/page.tsx).
 */
export async function readNewsContent(slug: string): Promise<string | null> {
  try {
    const filePath = path.join(process.cwd(), NEWS_CONTENT_DIR, `${slug}.md`)
    const content = await readFile(filePath, "utf-8")
    return content
  } catch {
    return null
  }
}
