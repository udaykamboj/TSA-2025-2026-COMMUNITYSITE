"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Users, FileText, Building2 } from "lucide-react"

export default function CTASection() {
  return (
    <section className="py-16 px-4 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="bg-white border-4 border-slate-900">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-0">
            {/* For Residents */}
            <div className="p-8 text-slate-900 border-b-4 md:border-b-0 md:border-r-4 border-slate-900">
              <Users className="w-12 h-12 mb-4 text-slate-900" />
              <h3 className="text-2xl font-bold mb-3">For Residents</h3>
              <p className="text-slate-700 mb-6">Browse our directory to find services that match your needs.</p>
              <Link href="/resources">
                <Button className="bg-slate-900 hover:bg-slate-800 text-white font-bold border-2 border-slate-900">
                  Browse Resources
                </Button>
              </Link>
            </div>

            {/* For Organizations */}
            <div className="p-8 text-slate-900 border-b-4 md:border-b-0 md:border-r-4 border-slate-900">
              <Building2 className="w-12 h-12 mb-4 text-slate-900" />
              <h3 className="text-2xl font-bold mb-3">For Organizations</h3>
              <p className="text-slate-700 mb-6">Submit your organization to help more people find your services.</p>
              <Link href="/submit">
                <Button className="bg-slate-900 hover:bg-slate-800 text-white font-bold border-2 border-slate-900">
                  Submit Resource
                </Button>
              </Link>
            </div>

            {/* Learn More */}
            <div className="p-8 text-slate-900">
              <FileText className="w-12 h-12 mb-4 text-slate-900" />
              <h3 className="text-2xl font-bold mb-3">About This Hub</h3>
              <p className="text-slate-700 mb-6">
                Learn more about how we connect residents with vital community resources.
              </p>
              <Button
                variant="outline"
                className="border-2 border-slate-900 text-slate-900 hover:bg-slate-900 hover:text-white bg-white"
              >
                Learn More
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
