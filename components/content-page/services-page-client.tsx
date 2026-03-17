"use client"

import { useMemo, useState } from "react"
import Link from "next/link"
import * as Accordion from "@radix-ui/react-accordion"
import {
  Car,
  Home,
  FileText,
  Heart,
  Users,
  Search,
  ChevronDown,
  ArrowRight,
  Zap,
} from "lucide-react"
import { cn } from "@/lib/utils"

export type ServiceItem = {
  slug: string
  title: string
  callToAction?: { label: string; href: string }
}

export type ServiceCategory = {
  title: string
  slugs: string[]
}

const CATEGORY_ICONS: Record<string, React.ComponentType<{ className?: string }>> = {
  "Parking & streets": Car,
  "Housing & property": Home,
  "Licenses & records": FileText,
  "Benefits & assistance": Heart,
  "Community & civic": Users,
}

type Props = {
  categories: ServiceCategory[]
  services: ServiceItem[]
}

export default function ServicesPageClient({ categories, services }: Props) {
  const [search, setSearch] = useState("")
  const [activeCategory, setActiveCategory] = useState<string | "all">("all")

  const slugToService = useMemo(() => {
    const m = new Map<string, ServiceItem>()
    services.forEach((s) => m.set(s.slug, s))
    return m
  }, [services])

  const quickActions = useMemo(
    () => services.filter((s) => s.callToAction),
    [services]
  )

  const filteredCategories = useMemo(() => {
    const q = search.trim().toLowerCase()
    const byCategory =
      activeCategory === "all"
        ? categories
        : categories.filter((c) => c.title === activeCategory)
    const withSearch = q
      ? byCategory.map((cat) => ({
          ...cat,
          slugs: cat.slugs.filter((slug) => {
            const s = slugToService.get(slug)
            return s?.title.toLowerCase().includes(q)
          }),
        }))
      : byCategory
    return withSearch.filter((cat) => cat.slugs.length > 0)
  }, [categories, search, activeCategory, slugToService])

  const hasSearch = search.trim().length > 0

  return (
    <div className="space-y-10">
      {/* Quick actions */}
      {quickActions.length > 0 && (
        <section className="rounded-xl border border-slate-200 bg-gradient-to-br from-slate-50 to-blue-50/30 p-5 md:p-6">
          <div className="flex items-center gap-2 mb-4">
            <Zap className="h-5 w-5 text-amber-500" aria-hidden />
            <h2 className="text-sm font-semibold uppercase tracking-wider text-slate-600">
              Quick actions
            </h2>
          </div>
          <div className="flex flex-wrap gap-3">
            {quickActions.map((service) => (
              <Link
                key={service.slug}
                href={`/main/${service.slug}`}
                className={cn(
                  "inline-flex items-center gap-2 rounded-lg px-4 py-2.5 text-sm font-medium transition-all",
                  "bg-[#0d28ff] text-white shadow-sm hover:bg-[#0a20cc] hover:shadow-md",
                  "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                )}
              >
                {service.callToAction!.label}
                <ArrowRight className="h-4 w-4 shrink-0" />
              </Link>
            ))}
          </div>
        </section>
      )}

      {/* Search */}
      <div className="relative">
        <Search
          className="absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-slate-400"
          aria-hidden
        />
        <input
          type="search"
          placeholder="Search services..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className={cn(
            "w-full rounded-xl border border-slate-200 bg-white py-3.5 pl-12 pr-4 text-slate-900 placeholder:text-slate-400",
            "focus:outline-none focus:ring-2 focus:ring-blue-500/30 focus:border-blue-400",
            "transition-shadow"
          )}
          aria-label="Search services"
        />
        {hasSearch && (
          <span className="absolute right-4 top-1/2 -translate-y-1/2 text-xs text-slate-500">
            {services.filter((s) => s.title.toLowerCase().includes(search.trim().toLowerCase())).length} results
          </span>
        )}
      </div>

      {/* Category pills */}
      <div className="flex flex-wrap gap-2">
        <button
          type="button"
          onClick={() => setActiveCategory("all")}
          className={cn(
            "rounded-full px-4 py-2 text-sm font-medium transition-colors",
            activeCategory === "all"
              ? "bg-slate-900 text-white"
              : "bg-slate-100 text-slate-700 hover:bg-slate-200"
          )}
        >
          All
        </button>
        {categories.map((cat) => {
          const CategoryIcon = CATEGORY_ICONS[cat.title]
          return (
            <button
              key={cat.title}
              type="button"
              onClick={() => setActiveCategory(activeCategory === cat.title ? "all" : cat.title)}
              className={cn(
                "rounded-full px-4 py-2 text-sm font-medium transition-colors flex items-center gap-2",
                activeCategory === cat.title
                  ? "bg-slate-900 text-white"
                  : "bg-slate-100 text-slate-700 hover:bg-slate-200"
              )}
            >
              {CategoryIcon ? <CategoryIcon className="h-4 w-4 shrink-0" /> : null}
              {cat.title}
            </button>
          )
        })}
      </div>

      {/* Accordion of categories */}
      {filteredCategories.length === 0 ? (
        <p className="rounded-lg bg-slate-50 border border-slate-200 py-8 text-center text-slate-600">
          No services match your search. Try different keywords.
        </p>
      ) : (
        <Accordion.Root
          type="multiple"
          defaultValue={filteredCategories.map((c) => c.title)}
          className="space-y-2"
        >
          {filteredCategories.map((cat) => {
            const Icon = CATEGORY_ICONS[cat.title]
            return (
              <Accordion.Item
                key={cat.title}
                value={cat.title}
                className="rounded-xl border border-slate-200 bg-white overflow-hidden"
              >
                <Accordion.Header>
                  <Accordion.Trigger className="flex w-full items-center justify-between gap-4 py-4 px-5 text-left font-semibold text-slate-900 hover:bg-slate-50/80 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-inset">
                    <span className="flex items-center gap-3">
                      {Icon && (
                        <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-slate-100 text-slate-600">
                          <Icon className="h-5 w-5" />
                        </span>
                      )}
                      {cat.title}
                      <span className="text-sm font-normal text-slate-500">
                        ({cat.slugs.length})
                      </span>
                    </span>
                    <ChevronDown className="h-5 w-5 shrink-0 text-slate-400 transition-transform duration-200 [[data-state=open]_&]:rotate-180" />
                  </Accordion.Trigger>
                </Accordion.Header>
                <Accordion.Content
                  className="overflow-hidden data-[state=closed]:animate-[accordion-up_0.2s_ease-out] data-[state=open]:animate-[accordion-down_0.2s_ease-out]"
                >
                  <ul className="border-t border-slate-100 bg-slate-50/50">
                    {cat.slugs.map((slug) => {
                      const service = slugToService.get(slug)
                      if (!service) return null
                      return (
                        <li
                          key={slug}
                          className="border-b border-slate-100 last:border-b-0"
                        >
                          <Link
                            href={`/main/${slug}`}
                            className="group flex items-center justify-between gap-4 py-3.5 px-5 text-slate-800 hover:bg-white hover:text-blue-600 transition-colors"
                            style={{ textDecoration: "none" }}
                          >
                            <span className="font-medium">{service.title}</span>
                            <span className="flex items-center gap-1 text-sm font-medium text-blue-600 opacity-0 group-hover:opacity-100 transition-opacity">
                              Learn more
                              <ArrowRight className="h-4 w-4" />
                            </span>
                          </Link>
                        </li>
                      )
                    })}
                  </ul>
                </Accordion.Content>
              </Accordion.Item>
            )
          })}
        </Accordion.Root>
      )}
    </div>
  )
}
