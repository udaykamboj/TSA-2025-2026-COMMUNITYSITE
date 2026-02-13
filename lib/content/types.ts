export interface BreadcrumbItem {
  label: string
  href: string
}

export interface CallToAction {
  label: string
  href: string
}

export interface PageSection {
  id: string
  title: string
}

export interface InfoBox {
  title: string
  body?: string
}

export interface PageConfig {
  slug: string
  title: string
  /** Short description for cards and listings (e.g. home page Popular services). */
  description?: string
  breadcrumb: BreadcrumbItem
  callToAction?: CallToAction
  heroImage?: string
  sections: PageSection[]
  infoBox?: InfoBox
}

export interface NewsConfig {
  slug: string
  title: string
  date: string
  excerpt: string
  heroImage?: string
  tags: string[]
  sections?: PageSection[]
}

export interface EventConfig {
  slug: string
  title: string
  date: string
  time: string
  location: string
  image: string
  description: string
  tags: string[]
  month: string
  year: number
  sections?: PageSection[]
  heroImage?: string
}
