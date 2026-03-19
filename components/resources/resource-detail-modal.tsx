"use client"

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"
import { MapPin, Phone, Mail, ExternalLink } from "lucide-react"

export interface ResourceDetailData {
  id: string
  name: string
  category: string
  description: string
  address: string
  phone: string
  email: string
  website: string
  tags: string[]
  hours: string
}

interface ResourceDetailModalProps {
  resource: ResourceDetailData | null
  open: boolean
  onOpenChange: (open: boolean) => void
}

function getMapLink(address: string) {
  return `https://www.google.com/maps/search/${encodeURIComponent(address)}`
}

export default function ResourceDetailModal({
  resource,
  open,
  onOpenChange,
}: ResourceDetailModalProps) {
  if (!resource) return null

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-lg max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-xl font-bold text-slate-900 pr-8">
            {resource.name}
          </DialogTitle>
          <p className="text-sm text-slate-500 mt-1">{resource.category}</p>
        </DialogHeader>

        <div className="space-y-6">
          <p className="text-slate-700 leading-relaxed">{resource.description}</p>

          {resource.tags.length > 0 && (
            <div>
              <p className="text-xs font-semibold uppercase tracking-wider text-slate-500 mb-2">Tags</p>
              <div className="flex flex-wrap gap-2">
                {resource.tags.map((tag) => (
                  <span
                    key={tag}
                    className="inline-flex items-center rounded-full bg-slate-100 px-3 py-1 text-sm font-medium text-slate-700"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          )}

          <div className="space-y-3 pt-4 border-t border-slate-100">
            <div className="flex items-start gap-3">
              <MapPin className="w-5 h-5 text-slate-500 flex-shrink-0 mt-0.5" />
              <div>
                <p className="text-xs font-semibold text-slate-500 uppercase tracking-wider">Address</p>
                <a
                  href={getMapLink(resource.address)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-slate-700 hover:text-[var(--primary)] hover:underline flex items-center gap-1"
                >
                  {resource.address}
                  <ExternalLink className="w-3 h-3" />
                </a>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <Phone className="w-5 h-5 text-slate-500 flex-shrink-0 mt-0.5" />
              <div>
                <p className="text-xs font-semibold text-slate-500 uppercase tracking-wider">Phone</p>
                <a href={`tel:${resource.phone}`} className="text-slate-700 hover:text-[var(--primary)] hover:underline">
                  {resource.phone}
                </a>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <Mail className="w-5 h-5 text-slate-500 flex-shrink-0 mt-0.5" />
              <div>
                <p className="text-xs font-semibold text-slate-500 uppercase tracking-wider">Email</p>
                <a
                  href={`mailto:${resource.email}`}
                  className="text-slate-700 hover:text-[var(--primary)] hover:underline break-all"
                >
                  {resource.email}
                </a>
              </div>
            </div>

            <div>
              <p className="text-xs font-semibold text-slate-500 uppercase tracking-wider mb-1">Operating Hours</p>
              <p className="text-slate-700">{resource.hours}</p>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  )
}
