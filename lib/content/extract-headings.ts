import GithubSlugger from "github-slugger"

export interface HeadingEntry {
  id: string
  title: string
  depth: number
}

/**
 * Match markdown ATX headings: ## Title or ## Title {#custom-id}
 * Capture: level (2-4), rest of line (title, optional {#id})
 */
const HEADING_REGEX = /^(#{2,4})\s+(.+)$/

/**
 * Strip optional {#custom-id} from the end of heading text.
 * Returns display title and optional id (must match markdown-content.tsx behavior).
 */
function parseHeadingLine(line: string): { display: string; id?: string } {
  const match = line.match(/^(.+?)\s\{#([^}]+)\}\s*$/)
  if (match) return { display: match[1].trim(), id: match[2] }
  return { display: line.trim() }
}

/**
 * Extract heading entries from raw markdown for use as table-of-contents.
 * IDs match rehype-slug (GitHub-style) and optional {#custom-id} syntax.
 */
export function extractHeadings(markdown: string): HeadingEntry[] {
  const slugger = new GithubSlugger()
  const entries: HeadingEntry[] = []

  for (const line of markdown.split("\n")) {
    const m = line.match(HEADING_REGEX)
    if (!m) continue

    const level = m[1].length
    const rest = m[2]
    const { display, id } = parseHeadingLine(rest)

    const slug = id ?? slugger.slug(display)
    entries.push({ id: slug, title: display, depth: level })
  }

  return entries
}
