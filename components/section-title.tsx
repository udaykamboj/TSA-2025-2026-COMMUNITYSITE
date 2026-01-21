import React from "react"

type SectionTitleProps = {
  title?: string
  linkText?: string
  linkHref?: string
  /** Custom node to render on the right side instead of the link */
  rightNode?: React.ReactNode
  /** Tailwind padding-bottom class for the container (default: pb-8) */
  pbClass?: string
}

const SectionTitle: React.FC<SectionTitleProps> = ({
  title = "Latest News",
  linkText = "See all news",
  linkHref = "#",
  rightNode,
  pbClass = 'pb-8',
}) => {
  return (
    <div className={pbClass}>
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <h2 className="text-4xl font-bold text-gray-900">{title}</h2>
        {rightNode ? (
          rightNode
        ) : linkText ? (
          <a href={linkHref} className="text-blue-600 hover:text-blue-700 font-medium text-lg underline">
            {linkText}
          </a>
        ) : null}
      </div>
    </div>
  )
}

export default SectionTitle
