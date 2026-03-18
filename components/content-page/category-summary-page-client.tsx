"use client"

import React, { useRef, useEffect, useState } from "react"
import Link from "next/link"
import { motion } from "framer-motion"
import {
  Car,
  Volume2,
  Trash2,
  AlertCircle,
  Home,
  FileText,
  DollarSign,
  ShoppingBag,
  Vote,
  Construction,
  MapPin,
  Calendar,
  Briefcase,
  Heart,
  Coffee,
  Newspaper,
  FolderOpen,
  ChevronRight,
  ArrowRight,
  Zap,
} from "lucide-react"
import type { LucideIcon } from "lucide-react"
import type { CategorySummary } from "@/lib/content/category-summaries"

const slugToIcon: Record<string, LucideIcon> = {
  "street-cleaning-schedule": MapPin,
  "parking-or-camera-tickets": Car,
  "illegal-parking-complaint": AlertCircle,
  "report-pothole-or-street-issue": Construction,
  "get-rid-of-waste": Trash2,
  "noise-complaint": Volume2,
  "birth-certificates": FileText,
  "marriage-licenses": Heart,
  "business-licenses": Briefcase,
  "building-permits": Construction,
  "child-care-assistance": Heart,
  "snap-benefits": Coffee,
  "apartment-complaint": Home,
  "rent-increase-help": DollarSign,
  "voter-registration": Vote,
  "public-records-request": FolderOpen,
}

interface ServiceItem {
  slug: string
  title: string
  description?: string
  callToAction?: { label: string; href: string }
}

interface Props {
  summary: CategorySummary
  services: ServiceItem[]
}

export default function CategorySummaryPageClient({ summary, services }: Props) {
  const sliderRef = useRef<HTMLOListElement | null>(null)
  const imageCardsRef = useRef<HTMLDivElement | null>(null)
  const [mounted, setMounted] = useState(false)
  const [cardsVisible, setCardsVisible] = useState(true)

  useEffect(() => setMounted(true), [])

  useEffect(() => {
    const el = imageCardsRef.current
    if (!el) return
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setCardsVisible(true)
      },
      { threshold: 0.05, rootMargin: "50px 0px" }
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [mounted])

  const scrollBySlide = (direction: "next" | "prev") => {
    const el = sliderRef.current
    if (!el) return
    const slideWidth = 300 + 24
    const scrollAmount = direction === "next" ? slideWidth : -slideWidth
    el.scrollBy({ left: scrollAmount, behavior: "smooth" })
  }

  const quickActions = services.filter((s) => s.callToAction)
  const sectionOrder = summary.sectionOrder ?? [
    "image",
    "featured",
    "spotlight",
    "quick",
    "slider",
    "grid",
  ]
  const variant = summary.imageLayoutVariant ?? "asymmetric"
  const cards = summary.imageCards ?? []

  const ImageSection = () => {
    if (cards.length === 0) return null
    return (
      <section ref={imageCardsRef} className="overflow-hidden">
        <h2 className="text-2xl font-bold text-slate-900 mb-10">
          Explore {summary.title}
        </h2>
        {variant === "asymmetric" && (
          <div className="grid grid-cols-1 md:grid-cols-5 gap-6 md:gap-8" style={{ minHeight: "420px" }}>
            <Link
              href={cards[0]?.href ?? "#"}
              className="group md:col-span-3 flex flex-col h-full rounded-2xl overflow-hidden border border-slate-200 bg-white hover:shadow-2xl hover:border-[var(--primary)]/50 transition-all duration-500"
              style={{
                opacity: cardsVisible ? 1 : 0,
                transform: cardsVisible ? "translateY(0)" : "translateY(40px)",
                transition: `opacity 0.65s ease-out, transform 0.65s cubic-bezier(0.22, 1, 0.36, 1), box-shadow 0.3s`,
              }}
            >
              <div className="aspect-[4/3] overflow-hidden relative flex-1 min-h-0">
                <img
                  src={cards[0].image}
                  alt={cards[0].title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-5 md:p-6 text-white">
                  <h3 className="font-bold text-xl md:text-2xl drop-shadow-sm">{cards[0].title}</h3>
                </div>
              </div>
              <div className="p-5 md:p-6 mt-auto">
                <p className="text-slate-600 line-clamp-2">{cards[0].description}</p>
              </div>
            </Link>
            <div className="md:col-span-2 flex flex-col gap-6 md:gap-8">
              {cards.slice(1, 3).map((card, i) => (
                <Link
                  key={card.href}
                  href={card.href}
                  className="group flex-1 flex flex-col rounded-2xl overflow-hidden border border-slate-200 bg-white hover:shadow-2xl hover:border-[var(--primary)]/50 transition-all duration-500 min-h-0"
                  style={{
                    opacity: cardsVisible ? 1 : 0,
                    transform: cardsVisible ? "translateY(0)" : "translateY(40px)",
                    transition: `opacity 0.65s ease-out ${(i + 1) * 150}ms, transform 0.65s cubic-bezier(0.22, 1, 0.36, 1) ${(i + 1) * 150}ms, box-shadow 0.3s`,
                  }}
                >
                  <div className="aspect-[16/10] overflow-hidden flex-1 min-h-0">
                    <img
                      src={card.image}
                      alt={card.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                  </div>
                  <div className="p-4 md:p-5 mt-auto">
                    <h3 className="font-bold text-slate-900 group-hover:text-primary mb-1">{card.title}</h3>
                    <p className="text-sm text-slate-600 line-clamp-2">{card.description}</p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        )}
        {variant === "visitor-resources" && (
          <div className="flex flex-col md:flex-row gap-6 md:gap-8" style={{ minHeight: "480px" }}>
            <Link
              href={cards[0]?.href ?? "#"}
              className="group md:w-[40%] flex flex-col h-full rounded-2xl overflow-hidden border border-slate-200 bg-white hover:shadow-2xl hover:border-[var(--primary)]/50 transition-all duration-500"
              style={{
                opacity: cardsVisible ? 1 : 0,
                transform: cardsVisible ? "translateY(0)" : "translateY(40px)",
                transition: `opacity 0.65s ease-out, transform 0.65s cubic-bezier(0.22, 1, 0.36, 1)`,
              }}
            >
              <div className="aspect-[3/4] overflow-hidden flex-1 min-h-0">
                <img
                  src={cards[0].image}
                  alt={cards[0].title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
              <div className="p-5 mt-auto">
                <h3 className="font-bold text-slate-900 group-hover:text-primary mb-2">{cards[0].title}</h3>
                <p className="text-sm text-slate-600 line-clamp-2">{cards[0].description}</p>
              </div>
            </Link>
            <div className="md:flex-1 flex flex-col gap-6">
              {cards.slice(1, 3).map((card, i) => (
                <Link
                  key={card.href}
                  href={card.href}
                  className="group flex-1 flex flex-col rounded-2xl overflow-hidden border border-slate-200 bg-white hover:shadow-2xl hover:border-[var(--primary)]/50 transition-all duration-500"
                  style={{
                    opacity: cardsVisible ? 1 : 0,
                    transform: cardsVisible ? "translateY(0)" : "translateY(40px)",
                    transition: `opacity 0.65s ease-out ${(i + 1) * 150}ms, transform 0.65s cubic-bezier(0.22, 1, 0.36, 1) ${(i + 1) * 150}ms`,
                  }}
                >
                  <div className="aspect-[21/9] overflow-hidden flex-1 min-h-0">
                    <img
                      src={card.image}
                      alt={card.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                  </div>
                  <div className="p-5 mt-auto">
                    <h3 className="font-bold text-slate-900 group-hover:text-primary mb-1">{card.title}</h3>
                    <p className="text-sm text-slate-600 line-clamp-2">{card.description}</p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        )}
        {variant === "featured-pair" && (
          <div
            className="flex flex-col md:flex-row gap-6 md:gap-10 items-stretch"
            style={{ minHeight: "420px" }}
          >
            <Link
              href={cards[0]?.href ?? "#"}
              className="group md:w-[58%] flex flex-col h-full rounded-2xl overflow-hidden border border-slate-200 bg-white hover:shadow-2xl hover:border-[var(--primary)]/50 transition-all duration-500"
              style={{
                opacity: cardsVisible ? 1 : 0,
                transform: cardsVisible ? "translateY(0)" : "translateY(40px)",
                transition: `opacity 0.65s ease-out, transform 0.65s cubic-bezier(0.22, 1, 0.36, 1)`,
              }}
            >
              <div className="aspect-[16/10] overflow-hidden flex-1 min-h-0">
                <img
                  src={cards[0].image}
                  alt={cards[0].title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
              <div className="p-6 md:p-8 mt-auto">
                <h3 className="font-bold text-xl text-slate-900 group-hover:text-primary mb-2">{cards[0].title}</h3>
                <p className="text-slate-600 leading-relaxed">{cards[0].description}</p>
              </div>
            </Link>
            {cards[1] && (
              <Link
                href={cards[1].href}
                className="group md:w-[42%] flex flex-col h-full rounded-2xl overflow-hidden border border-slate-200 bg-white hover:shadow-2xl hover:border-[var(--primary)]/50 transition-all duration-500"
                style={{
                  opacity: cardsVisible ? 1 : 0,
                  transform: cardsVisible ? "translateY(0)" : "translateY(40px)",
                  transition: `opacity 0.65s ease-out 150ms, transform 0.65s cubic-bezier(0.22, 1, 0.36, 1) 150ms`,
                }}
              >
                <div className="aspect-[4/5] overflow-hidden flex-1 min-h-0">
                  <img
                    src={cards[1].image}
                    alt={cards[1].title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </div>
                <div className="p-5 md:p-6 mt-auto">
                  <h3 className="font-bold text-slate-900 group-hover:text-primary mb-2">{cards[1].title}</h3>
                  <p className="text-sm text-slate-600 line-clamp-2">{cards[1].description}</p>
                </div>
              </Link>
            )}
          </div>
        )}
      </section>
    )
  }

  const FeaturedSection = () =>
    summary.featuredCallout ? (
      <section className="rounded-2xl overflow-hidden border border-slate-200 bg-white shadow-sm">
        <div
          className={`flex flex-col ${summary.featuredCallout.imagePosition === "right" ? "md:flex-row-reverse" : "md:flex-row"} md:min-h-[320px]`}
        >
          <div className="md:w-1/2 aspect-[4/3] md:aspect-auto md:min-h-[320px] overflow-hidden">
            <img
              src={summary.featuredCallout.image}
              alt=""
              className="w-full h-full object-cover"
            />
          </div>
          <div className="md:w-1/2 flex flex-col justify-center p-8 md:p-10">
            <h3 className="text-2xl font-bold text-slate-900 mb-3">{summary.featuredCallout.title}</h3>
            <p className="text-slate-600 mb-6 leading-relaxed">{summary.featuredCallout.description}</p>
            <Link
              href={summary.featuredCallout.href}
              className="inline-flex items-center gap-2 text-primary font-semibold hover:underline"
            >
              Read more <ChevronRight className="h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>
    ) : null

  const SpotlightSection = () =>
    summary.spotlightBlocks && summary.spotlightBlocks.length > 0 ? (
      <>
        {summary.spotlightBlocks.map((block, i) => (
          <section
            key={i}
            className={`flex flex-col ${block.imagePosition === "right" ? "md:flex-row-reverse" : "md:flex-row"} gap-8 md:gap-12 items-center rounded-2xl overflow-hidden bg-slate-50 border border-slate-100 p-6 md:p-0`}
          >
            <div className="w-full md:w-[45%] aspect-[16/10] md:aspect-auto md:min-h-[280px] overflow-hidden rounded-xl">
              <img src={block.image} alt="" className="w-full h-full object-cover" />
            </div>
            <div className="w-full md:w-[55%] flex flex-col justify-center py-4 md:py-10 md:px-10">
              <h3 className="text-xl font-bold text-slate-900 mb-2">{block.title}</h3>
              <p className="text-slate-600 leading-relaxed">{block.description}</p>
            </div>
          </section>
        ))}
      </>
    ) : null

  const QuickSection = () =>
    quickActions.length > 0 ? (
      <section className="rounded-xl border border-slate-200 bg-gradient-to-br from-slate-50 to-emerald-50/30 p-6 md:p-8">
        <h2 className="text-sm font-semibold uppercase tracking-wider text-slate-600 mb-4 flex items-center gap-2">
          <Zap className="h-5 w-5 text-amber-500" aria-hidden />
          Quick actions
        </h2>
        <div className="flex flex-wrap gap-4">
          {quickActions.map((service) => (
            <Link
              key={service.slug}
              href={
                service.callToAction!.href && service.callToAction!.href !== "#"
                  ? service.callToAction!.href
                  : `/main/${service.slug}`
              }
              className="inline-flex items-center gap-2 rounded-xl bg-[var(--primary)] px-6 py-4 text-base font-semibold text-white shadow-md hover:shadow-xl hover:-translate-y-0.5 active:translate-y-0 transition-all duration-200"
            >
              {service.callToAction!.label}
              <ArrowRight className="h-5 w-5 shrink-0" />
            </Link>
          ))}
        </div>
      </section>
    ) : null

  const SliderSection = () => (
    <section>
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-2xl font-bold text-slate-900">Featured services</h2>
        <div className="flex items-center gap-2">
          <button
            type="button"
            aria-label="Previous"
            onClick={() => scrollBySlide("prev")}
            className="w-11 h-11 rounded-full border-2 border-slate-300 flex items-center justify-center text-slate-600 hover:bg-slate-50 transition-colors"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M15 18l-6-6 6-6" />
            </svg>
          </button>
          <button
            type="button"
            aria-label="Next"
            onClick={() => scrollBySlide("next")}
            className="w-11 h-11 rounded-full bg-[var(--primary)] flex items-center justify-center text-white hover:opacity-90 transition-opacity"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M9 18l6-6-6-6" />
            </svg>
          </button>
        </div>
      </div>
      <ol
        ref={sliderRef}
        className="flex gap-6 overflow-x-auto scroll-smooth snap-x snap-mandatory list-none m-0 p-0 pb-2 -mx-1 scrollbar-hide"
        style={{ WebkitOverflowScrolling: "touch" }}
      >
        {services.map((svc) => {
          const IconComponent = slugToIcon[svc.slug] ?? FileText
          return (
            <motion.li key={svc.slug} className="flex-none w-[280px] md:w-[300px] snap-start shrink-0" whileHover={{ y: -4 }}>
              <Link
                href={`/main/${svc.slug}`}
                className="group block h-full rounded-xl border-2 border-slate-200 bg-white p-6 hover:border-[var(--primary)] hover:shadow-lg transition-all duration-300"
              >
                <div className="flex flex-col h-full">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-slate-100 text-primary group-hover:bg-[var(--primary)] group-hover:text-white transition-colors mb-4">
                    <IconComponent className="h-6 w-6" strokeWidth={1.5} />
                  </div>
                  <h3 className="font-semibold text-lg text-slate-900 group-hover:text-primary transition-colors mb-2">
                    {svc.title}
                  </h3>
                  {svc.description && (
                    <p className="text-slate-600 text-sm line-clamp-2 mb-4 flex-1">{svc.description}</p>
                  )}
                </div>
              </Link>
            </motion.li>
          )
        })}
      </ol>
    </section>
  )

  const GridSection = () => (
    <section>
      <h2 className="text-2xl font-bold text-slate-900 mb-6">All services in this category</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-px bg-slate-200 border border-slate-200 rounded-xl overflow-hidden">
        {services.map((svc) => {
          const IconComponent = slugToIcon[svc.slug] ?? FileText
          return (
            <Link
              key={svc.slug}
              href={`/main/${svc.slug}`}
              className="group flex items-center gap-4 bg-white p-6 hover:bg-[var(--primary)] transition-colors duration-300"
            >
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-slate-100 text-primary group-hover:bg-white/20 group-hover:text-white transition-colors">
                <IconComponent className="h-6 w-6" strokeWidth={1.5} />
              </div>
              <div className="min-w-0 flex-1">
                <h3 className="font-semibold text-slate-900 group-hover:text-white transition-colors">
                  {svc.title}
                </h3>
                {svc.description && (
                  <p className="text-sm text-slate-600 group-hover:text-white/90 transition-colors line-clamp-1 mt-0.5">
                    {svc.description}
                  </p>
                )}
              </div>
              <ChevronRight className="h-5 w-5 shrink-0 text-slate-400 group-hover:text-white transition-colors" />
            </Link>
          )
        })}
      </div>
    </section>
  )

  const sectionMap: Record<
    string,
    React.ReactNode
  > = {
    image: <ImageSection key="image" />,
    featured: <FeaturedSection key="featured" />,
    spotlight: <SpotlightSection key="spotlight" />,
    quick: <QuickSection key="quick" />,
    slider: <SliderSection key="slider" />,
    grid: <GridSection key="grid" />,
  }

  return (
    <div className="space-y-16">
      {/* Hero / intro — engaging gradient block */}
      <motion.section
        className="relative rounded-2xl overflow-hidden p-8 md:p-10"
        style={{
          background: "linear-gradient(135deg, #0a3c00 0%, #1a5c10 50%, #0d4a05 100%)",
        }}
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      >
        <div className="relative z-10 text-white">
          <div
            className="mb-4 inline-flex items-center gap-2 rounded-full bg-white/20 px-4 py-2 text-sm font-semibold backdrop-blur-sm"
            style={{ animationDelay: "0.1s" }}
          >
            <Zap className="h-4 w-4" aria-hidden />
            {summary.serviceSlugs.length} services to explore
          </div>
          <h1 className="text-3xl font-bold md:text-4xl mb-3 drop-shadow-sm" style={{ textShadow: "0 1px 2px rgba(0,0,0,0.2)" }}>
            {summary.title}
          </h1>
          <p className="text-lg text-white/90 max-w-2xl mb-6">
            {summary.description}
          </p>
          {/* "What you'll find" pills */}
          <div className="flex flex-wrap gap-2">
            {services.slice(0, 6).map((svc, i) => (
              <Link
                key={svc.slug}
                href={`/main/${svc.slug}`}
                className="inline-flex items-center gap-1 rounded-full bg-white/15 px-3 py-1.5 text-sm font-medium hover:bg-white/30 transition-colors backdrop-blur-sm"
              >
                {svc.title}
                <ChevronRight className="h-3.5 w-3.5 opacity-70" />
              </Link>
            ))}
            {services.length > 6 && (
              <span className="inline-flex items-center rounded-full bg-white/10 px-3 py-1.5 text-sm text-white/80">
                +{services.length - 6} more
              </span>
            )}
          </div>
        </div>
        {/* Decorative corner gradient */}
        <div
          className="absolute -right-20 -top-20 h-48 w-48 rounded-full bg-emerald-400/20"
          aria-hidden
        />
      </motion.section>

      {/* Sections rendered in configurable order — varies per category */}
      {sectionOrder.map((key) => sectionMap[key]).filter(Boolean)}
    </div>
  )
}
