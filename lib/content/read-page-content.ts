import { readFile } from "fs/promises"
import path from "path"

const CONTENT_DIR = "lib/content"

/**
 * Read Markdown content for a page by slug.
 * Must be called from the server (e.g. in app/main/[slug]/page.tsx).
 */
export async function readPageContent(slug: string): Promise<string | null> {
  try {
    const filePath = path.join(process.cwd(), CONTENT_DIR, `${slug}.md`)
    const content = await readFile(filePath, "utf-8")
    return content
  } catch {
    return null
  }
}
