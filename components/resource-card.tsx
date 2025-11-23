import Link from "next/link"
import { MapPin, Phone, Mail, Heart, Share2 } from "lucide-react"
import type { Resource } from "@/lib/sample-resources"

export default function ResourceCard({ resource }: { resource: Resource }) {
  return (
    <div className="bg-white border-2 border-slate-300 overflow-hidden">
      {/* Header with logo */}
      <div className="bg-slate-900 p-6 flex items-center justify-between">
        <div className="text-5xl">{resource.logo}</div>
        <div className="flex gap-2">
          <button className="p-2 hover:bg-slate-800 transition text-white">
            <Heart className="w-5 h-5" />
          </button>
          <button className="p-2 hover:bg-slate-800 transition text-white">
            <Share2 className="w-5 h-5" />
          </button>
        </div>
      </div>

      {/* Content */}
      <div className="p-6">
        <h3 className="text-xl font-bold text-slate-900 mb-2">{resource.name}</h3>
        <p className="text-sm text-slate-700 font-medium mb-3 inline-block bg-slate-100 px-3 py-1 border border-slate-300">
          {resource.category}
        </p>

        <p className="text-gray-700 text-sm mb-4">{resource.description}</p>

        {/* Tags */}
        <div className="flex flex-wrap gap-2 mb-4">
          {resource.tags.map((tag) => (
            <span key={tag} className="text-xs bg-slate-50 text-slate-700 px-2 py-1 border border-slate-300">
              {tag}
            </span>
          ))}
        </div>

        {/* Contact Info */}
        <div className="space-y-2 mb-4 pb-4 border-b-2 border-slate-300 text-sm">
          <div className="flex items-start gap-3">
            <MapPin className="w-4 h-4 text-slate-700 flex-shrink-0 mt-0.5" />
            <span className="text-gray-700">{resource.address}</span>
          </div>
          <div className="flex items-center gap-3">
            <Phone className="w-4 h-4 text-slate-700 flex-shrink-0" />
            <a href={`tel:${resource.phone}`} className="text-slate-700 hover:underline font-semibold">
              {resource.phone}
            </a>
          </div>
          <div className="flex items-center gap-3">
            <Mail className="w-4 h-4 text-slate-700 flex-shrink-0" />
            <a href={`mailto:${resource.email}`} className="text-slate-700 hover:underline">
              {resource.email}
            </a>
          </div>
        </div>

        {/* Hours & Distance */}
        <div className="text-sm text-gray-600 mb-4">
          <p className="font-medium text-gray-900">Hours: {resource.hours}</p>
          {resource.distance !== undefined && resource.distance > 0 && (
            <p className="text-slate-700 font-medium">{resource.distance} miles away</p>
          )}
        </div>

        {/* View Button */}
        <Link
          href={`/resources/${resource.id}`}
          className="w-full inline-block text-center px-4 py-2 bg-slate-900 text-white font-medium hover:bg-slate-800 transition border-2 border-slate-900"
        >
          View Full Details
        </Link>
      </div>
    </div>
  )
}
