import { readFile } from "fs/promises"
import path from "path"

const EVENTS_CONTENT_DIR = "lib/content/events"

/**
 * Read Markdown content for an event by slug.
 * Must be called from the server (e.g. in app/main/events/[slug]/page.tsx).
 */
export async function readEventContent(slug: string): Promise<string | null> {
  try {
    const filePath = path.join(process.cwd(), EVENTS_CONTENT_DIR, `${slug}.md`)
    const content = await readFile(filePath, "utf-8")
    return content
  } catch {
    return null
  }
}
