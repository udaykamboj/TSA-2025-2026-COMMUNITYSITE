import React from "react"
import Link from "next/link"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { AlertCircle, Info } from "lucide-react"

export function MarkdownDropdown({
  title,
  children,
}: {
  title: string
  children: React.ReactNode
}) {
  return (
    <div className="my-8">
      <Accordion type="single" collapsible className="w-full bg-white border border-slate-200 shadow-[0_2px_8px_rgba(0,0,0,0.04)] rounded-2xl overflow-hidden">
        <AccordionItem value="item-1" className="border-b-0">
          <AccordionTrigger className="px-8 py-6 hover:bg-slate-50 transition-colors [&[data-state=open]]:border-b [&[data-state=open]]:border-slate-100">
            <span className="text-xl font-bold text-slate-900 text-left w-full tracking-tight">
              {title}
            </span>
          </AccordionTrigger>
          <AccordionContent className="px-8 py-6 bg-white prose prose-lg max-w-none">
            {children}
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  )
}

export function MarkdownCard({
  title,
  image,
  buttonText,
  buttonLink,
  secondaryText,
  secondaryLink,
  children,
}: {
  title?: string
  image?: string
  buttonText?: string
  buttonLink?: string
  secondaryText?: string
  secondaryLink?: string
  children: React.ReactNode
}) {
  return (
    <div className="my-8 bg-white border border-slate-200 rounded-2xl shadow-sm overflow-hidden flex flex-col md:flex-row gap-6 p-6 md:p-8">
      <div className="flex-1 flex flex-col">
        {title && (
          <h3 className="text-2xl font-bold text-slate-900 mb-4 tracking-tight">
            {title}
          </h3>
        )}
        <div className="text-slate-800 mb-6 prose max-w-none flex-1">
          {children}
        </div>
        
        {(buttonText || secondaryText) && (
          <div className="flex flex-col sm:flex-row gap-4 mt-auto pt-4">
            {buttonText && buttonLink && (
              <Link
                href={buttonLink}
                className="inline-flex items-center justify-center rounded-full font-bold text-white transition-colors hover:opacity-90 px-8 py-4 text-lg bg-primary whitespace-nowrap"
              >
                {buttonText}
              </Link>
            )}
            {secondaryText && secondaryLink && (
              <Link
                href={secondaryLink}
                className="inline-flex items-center justify-center rounded-full font-bold text-secondary border-2 border-slate-200 bg-white hover:bg-slate-50 transition-colors px-8 py-4 text-lg whitespace-nowrap"
              >
                {secondaryText}
              </Link>
            )}
          </div>
        )}
      </div>
      
      {image && (
        <div className="w-full md:w-1/3 aspect-[4/3] md:aspect-auto rounded-xl overflow-hidden bg-slate-100 flex-shrink-0">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={image}
            alt={title || ""}
            className="w-full h-full object-cover"
          />
        </div>
      )}
    </div>
  )
}

export function MarkdownButton({
  href: _href,
  children: _children,
}: {
  href: string
  children: React.ReactNode
}) {
  return null
}

export function MarkdownAlert({
  type = "info",
  title,
  children,
}: {
  type?: "info" | "warning" | "error" | string
  title?: string
  children: React.ReactNode
}) {
  const isWarning = type === "warning"
  const isError = type === "error"
  
  return (
    <div className={`my-6 border-l-4 p-5 rounded-r-lg ${
      isError 
        ? "bg-red-50 border-red-500 text-red-900" 
        : isWarning 
          ? "bg-amber-50 border-amber-500 text-amber-900"
          : "bg-blue-50 border-blue-500 text-blue-900"
    }`}>
      <div className="flex gap-3">
        <div className="flex-shrink-0 mt-0.5">
          {isError || isWarning ? (
            <AlertCircle className={`w-5 h-5 ${isError ? "text-red-600" : "text-amber-600"}`} />
          ) : (
            <Info className="w-5 h-5 text-blue-600" />
          )}
        </div>
        <div>
          {title && <h4 className="font-bold mb-1 mt-0">{title}</h4>}
          <div className="prose prose-lg max-w-none prose-p:my-1 prose-a:text-inherit prose-a:underline">
            {children}
          </div>
        </div>
      </div>
    </div>
  )
}
