import React from "react"
import ReactMarkdown from "react-markdown"
import remarkGfm from "remark-gfm"
import rehypeSlug from "rehype-slug"
import rehypeUnwrapImages from "rehype-unwrap-images"
import rehypeAutolinkHeadings from "rehype-autolink-headings"
import rehypeHighlight from "rehype-highlight"
import remarkDirective from "remark-directive"
import { remarkDirectiveRehype } from "@/lib/content/remark-directive-rehype"
import {
  MarkdownDropdown,
  MarkdownCard,
  MarkdownButton,
  MarkdownAlert,
} from "./markdown-components"
import "highlight.js/styles/github.min.css"

interface MarkdownContentProps {
  content: string
}

const proseClasses =
  "text-slate-800 leading-relaxed [&>h2]:text-xl [&>h2]:font-bold [&>h2]:text-slate-900 [&>h2]:mt-8 [&>h2]:mb-3 [&>h2]:pb-1 [&>h3]:text-lg [&>h3]:font-bold [&>h3]:text-slate-900 [&>h3]:mt-6 [&>h3]:mb-2 [&>h4]:font-bold [&>h4]:text-slate-900 [&>h4]:mt-4 [&>h4]:mb-2 [&>p]:mb-4 [&>ul]:mb-4 [&>ul]:list-disc [&>ul]:pl-6 [&>li]:mb-1 [&>a]:text-blue-600 [&>a]:underline [&>a:hover]:text-blue-700 [&>strong]:font-semibold [&>blockquote]:border-l-4 [&>blockquote]:border-slate-300 [&>blockquote]:pl-4 [&>blockquote]:italic [&>blockquote]:text-slate-700 [&>blockquote]:my-4 [&_pre]:my-4 [&_pre]:rounded-lg [&_pre]:overflow-x-auto [&_pre]:bg-slate-900 [&_pre]:p-4 [&_pre_code]:text-sm [&_pre_code]:text-slate-100 [&_pre_code]:bg-transparent [&_pre_code]:p-0 [&_table]:w-full [&_table]:mb-6 [&_table]:border-collapse [&_th]:text-left [&_th]:bg-[#2c2c2c] [&_th]:text-white [&_th]:p-3 [&_th]:border [&_th]:border-[#2c2c2c] [&_td]:p-3 [&_td]:border [&_td]:border-slate-200"

function getHeadingText(children: React.ReactNode): string {
  if (typeof children === "string") return children
  if (Array.isArray(children))
    return children.map(getHeadingText).join("")
  if (React.isValidElement(children) && children.props?.children != null)
    return getHeadingText(children.props.children)
  return ""
}

function parseHeadingWithId(text: string): { display: string; id?: string } {
  const match = text.match(/^(.+?)\s\{#([^}]+)\}\s*$/)
  if (match) return { display: match[1].trim(), id: match[2] }
  return { display: text }
}

function HeadingWithAnchor({
  level,
  children,
  node: _node,
  id: propsId,
  ...rest
}: {
  level: 2 | 3 | 4
  children?: React.ReactNode
  node?: unknown
  id?: string
} & React.ComponentPropsWithoutRef<"h2">) {
  const raw = getHeadingText(children)
  const { display, id } = parseHeadingWithId(raw)
  const resolvedId = id ?? propsId
  const Tag = `h${level}` as "h2" | "h3" | "h4"
  const match = display.match(/^(\d+)\.\s*(.*)/)
  const isStep = !!match && level === 2
  const num = match ? match[1] : ""
  const titleWithoutNum = match ? match[2] : display

  if (isStep) {
    return (
      <Tag {...rest} className="scroll-mt-24 group flex items-start sm:items-center gap-4 mt-12 mb-6" id={resolvedId}>
        <span className="flex-shrink-0 w-12 h-12 bg-slate-900 text-white rounded-full flex items-center justify-center text-2xl font-bold font-sans">
          {num}
        </span>
        <span className="text-3xl font-bold text-slate-900 flex-1">{titleWithoutNum}</span>
      </Tag>
    )
  }

  return (
    <Tag {...rest} className="scroll-mt-24 group" id={resolvedId}>
      {display}
    </Tag>
  )
}

export default function MarkdownContent({ content }: MarkdownContentProps) {
  return (
    <div className={`min-w-0 ${proseClasses}`}>
      <ReactMarkdown
        remarkPlugins={[remarkGfm, remarkDirective, remarkDirectiveRehype]}
        rehypePlugins={[
          rehypeSlug,
          rehypeAutolinkHeadings,
          rehypeUnwrapImages,
          rehypeHighlight,
        ]}
        components={{
          h2: (props) => <HeadingWithAnchor level={2} {...props} />,
          h3: (props) => <HeadingWithAnchor level={3} {...props} />,
          h4: (props) => <HeadingWithAnchor level={4} {...props} />,
          "custom-dropdown": MarkdownDropdown as any,
          "custom-card": MarkdownCard as any,
          "custom-button": MarkdownButton as any,
          "custom-alert": MarkdownAlert as any,
          img: ({ src, alt, title, ...props }) => (
            <figure className="my-6 max-w-full overflow-hidden rounded-lg border border-slate-200 bg-slate-50 p-4">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={src}
                alt={alt ?? ""}
                title={title ?? undefined}
                className="max-w-full h-auto w-full rounded-lg border border-slate-200 shadow-sm"
                {...props}
              />
              {(alt || title) && (
                <figcaption className="mt-3 text-sm text-slate-600">
                  {alt && (
                    <span className="font-semibold text-slate-800 block">
                      {alt}
                    </span>
                  )}
                  {title && (
                    <span className={alt ? "italic block mt-0.5" : ""}>
                      {title}
                    </span>
                  )}
                </figcaption>
              )}
            </figure>
          ),
        }}
      >
        {content}
      </ReactMarkdown>
    </div>
  )
}
