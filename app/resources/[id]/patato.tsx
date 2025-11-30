"use client"

import { useState } from "react"
import Header from "@/components/header"
import Footer from "@/components/footer"
import { MapPin, Phone, Mail, Globe, Clock, Users, Heart, Share2, ArrowLeft, ExternalLink } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { useParams } from "next/navigation"

// Sample resources data - in production this would come from a database
const resourcesData = {
  "1": {
    id: "1",
    name: "Downtown Community Center",
    category: "Youth Programs",
    description: "Offering comprehensive after-school programs, sports, arts, and mentoring for youth ages 6-18.",
    fullDescription:
      "The Downtown Community Center is dedicated to serving youth in our community by providing safe, supportive spaces for learning, recreation, and personal growth. Our programs include after-school activities, sports leagues, arts and music classes, and one-on-one mentoring. We focus on youth in underserved neighborhoods and offer all programs free of charge.",
    address: "123 Main Street, Downtown",
    phone: "(206) 555-0100",
    email: "info@dtcc.org",
    website: "www.dtcc.org",
    tags: ["Youth", "Sports", "Arts", "Free"],
    hours: "Mon-Fri 3pm-8pm, Sat 10am-6pm",
    distance: 0.5,
    isFree: true,
    ageGroups: ["Teens", "Families"],
    featured: true,
    image: "/placeholder.svg?key=resource1",
    impactStats: [
      { label: "Youth Served", value: "500+", icon: "👥" },
      { label: "Programs Offered", value: "25+", icon: "🎯" },
      { label: "Staff Members", value: "45", icon: "👨‍💼" },
      { label: "Years Operating", value: "15", icon: "📅" },
    ],
    services: [
      "After-school programs (K-12)",
      "Sports leagues and training",
      "Art and music classes",
      "STEM workshops",
      "One-on-one mentoring",
      "College prep courses",
      "Summer camps",
    ],
    eligibility: "Open to all youth ages 6-18 in the community. No income requirements.",
    funding: "Non-profit organization supported by community donations and grants.",
    relatedResources: ["2", "5"],
  },
  "2": {
    id: "2",
    name: "City Food Bank",
    category: "Food",
    description:
      "Emergency food assistance and nutrition programs providing fresh groceries and meal support for residents in need.",
    fullDescription:
      "City Food Bank is the region's largest hunger relief organization, providing emergency food assistance to over 2,000 families monthly. We distribute fresh produce, proteins, and pantry staples through our network of partner agencies. Our mission is to end hunger and provide nutritional support to vulnerable populations.",
    address: "456 Oak Avenue",
    phone: "(206) 555-0101",
    email: "help@cityfoodbank.org",
    website: "www.cityfoodbank.org",
    tags: ["Food", "Free", "Emergency"],
    hours: "Mon-Sat 9am-5pm",
    distance: 1.2,
    isFree: true,
    ageGroups: ["Families", "Seniors"],
    featured: true,
    image: "/placeholder.svg?key=resource2",
    impactStats: [
      { label: "Meals Distributed", value: "2M+", icon: "🍽️" },
      { label: "Families Served", value: "2K+", icon: "👨‍👩‍👧‍👦" },
      { label: "Partner Agencies", value: "50+", icon: "🤝" },
      { label: "Community Centers", value: "12", icon: "🏢" },
    ],
    services: [
      "Emergency food boxes",
      "Fresh produce distribution",
      "Nutrition education",
      "Food pantry access",
      "Senior meal programs",
      "Holiday meal assistance",
      "Mobile food pantry",
    ],
    eligibility:
      "Low-income families, seniors, and individuals experiencing food insecurity. No residency requirements.",
    funding: "Supported by government grants, corporate sponsors, and individual donors.",
    relatedResources: ["1", "6"],
  },
  "3": {
    id: "3",
    name: "Community Mental Health Services",
    category: "Mental Health",
    description:
      "Professional counseling, therapy, and crisis support services available for all ages with sliding scale fees.",
    fullDescription:
      "Community Mental Health Services provides accessible mental health support to individuals and families. Our licensed therapists and counselors offer individual counseling, group therapy, crisis intervention, and psychiatric services. We use a sliding scale fee system to ensure affordability for all.",
    address: "789 Pine Street",
    phone: "(206) 555-0102",
    email: "support@cmhs.org",
    website: "www.cmhs.org",
    tags: ["Mental Health", "Counseling", "Support"],
    hours: "Mon-Fri 8am-6pm, Sat 10am-4pm",
    distance: 0.8,
    isFree: false,
    ageGroups: ["Teens", "Families", "Seniors"],
    featured: true,
    image: "/placeholder.svg?key=resource3",
    impactStats: [
      { label: "Clients Served", value: "1.5K+", icon: "💭" },
      { label: "Therapists", value: "20", icon: "👨‍⚕️" },
      { label: "Crisis Calls", value: "100+/mo", icon: "📞" },
      { label: "Satisfaction Rate", value: "95%", icon: "⭐" },
    ],
    services: [
      "Individual therapy",
      "Group counseling",
      "Crisis intervention",
      "Psychiatric care",
      "Child and adolescent services",
      "Family therapy",
      "24/7 crisis hotline",
    ],
    eligibility: "Open to all ages. Sliding scale fees based on income. Crisis services available to anyone.",
    funding: "Insurance accepted. Sliding scale available. Community grants support low-income services.",
    relatedResources: ["1", "4"],
  },
  "4": {
    id: "4",
    name: "Senior Housing Initiative",
    category: "Housing",
    description: "Affordable housing options and support services specifically designed for seniors.",
    fullDescription:
      "Senior Housing Initiative provides affordable housing solutions and comprehensive support services for seniors 65 and older. We offer independent living apartments, assisted living options, and case management services to help seniors age in place with dignity.",
    address: "321 Elm Street",
    phone: "(206) 555-0103",
    email: "info@seniorhousing.org",
    website: "www.seniorhousing.org",
    tags: ["Housing", "Seniors", "Affordable"],
    hours: "Mon-Fri 9am-5pm",
    distance: 2.1,
    isFree: false,
    ageGroups: ["Seniors"],
    featured: false,
    image: "/placeholder.svg?key=resource4",
    impactStats: [
      { label: "Seniors Housed", value: "500+", icon: "🏠" },
      { label: "Apartments", value: "150", icon: "🏢" },
      { label: "Support Staff", value: "35", icon: "👩‍💼" },
      { label: "Years Operating", value: "20", icon: "📅" },
    ],
    services: [
      "Affordable apartments",
      "Assisted living",
      "Case management",
      "Medical coordination",
      "Meal programs",
      "Transportation services",
      "Social activities",
    ],
    eligibility: "Age 65 and older. Income limits apply. Must qualify for affordable housing.",
    funding: "Government subsidies, grants, and resident fees based on income.",
    relatedResources: ["2", "7"],
  },
  "5": {
    id: "5",
    name: "Youth Scholarship Fund",
    category: "Education",
    description: "Educational scholarships and mentoring programs for youth from underserved communities.",
    fullDescription:
      "Youth Scholarship Fund empowers students from low-income families by providing educational scholarships, mentoring, and academic support. We help students navigate the college application process and provide financial assistance to reduce barriers to higher education.",
    address: "555 Birch Road",
    phone: "(206) 555-0104",
    email: "scholarships@ysf.org",
    website: "www.ysf.org",
    tags: ["Education", "Youth", "Scholarships", "Free"],
    hours: "Mon-Fri 10am-6pm",
    distance: 1.5,
    isFree: true,
    ageGroups: ["Teens"],
    featured: false,
    image: "/placeholder.svg?key=resource5",
    impactStats: [
      { label: "Scholarships Awarded", value: "$5M+", icon: "💰" },
      { label: "Students Supported", value: "2K+", icon: "📚" },
      { label: "College Enrollment", value: "95%", icon: "🎓" },
      { label: "Mentors", value: "300+", icon: "👨‍🏫" },
    ],
    services: [
      "College scholarships",
      "One-on-one mentoring",
      "College prep courses",
      "Essay writing workshops",
      "FAFSA assistance",
      "Test prep classes",
      "Career counseling",
    ],
    eligibility: "High school juniors and seniors from low-income families. GPA 2.5 or higher.",
    funding: "Donations from individuals and corporations dedicated to education equity.",
    relatedResources: ["1", "7"],
  },
  "6": {
    id: "6",
    name: "Emergency Assistance Hotline",
    category: "Financial Aid",
    description: "Financial assistance, rent support, and utility bill help for qualified residents.",
    fullDescription:
      "Emergency Assistance Hotline provides immediate financial relief to residents facing housing instability, utility disconnection, or other critical needs. Our compassionate team helps people navigate available resources and connect with appropriate assistance programs.",
    address: "Online & Phone",
    phone: "(206) 555-0105",
    email: "aid@emergencyassist.org",
    website: "www.emergencyassist.org",
    tags: ["Financial Aid", "Emergency", "Utilities", "Free"],
    hours: "24/7",
    distance: 0,
    isFree: true,
    ageGroups: ["Families", "Seniors"],
    featured: false,
    image: "/placeholder.svg?key=resource6",
    impactStats: [
      { label: "Calls Answered", value: "10K+/mo", icon: "📞" },
      { label: "Financial Assistance", value: "$2M+/year", icon: "💵" },
      { label: "Families Helped", value: "5K+", icon: "👨‍👩‍👧" },
      { label: "Response Time", value: "24hrs", icon: "⚡" },
    ],
    services: [
      "Emergency rent assistance",
      "Utility bill payment help",
      "Eviction prevention",
      "Resource referrals",
      "Emergency hotel vouchers",
      "Food assistance",
      "Crisis counseling",
    ],
    eligibility: "Low-income residents facing immediate crisis. Income limits vary by program.",
    funding: "Government grants, foundation funding, and community donations.",
    relatedResources: ["2", "4"],
  },
}

export default function ResourceDetailPage() {
  const params = useParams()
  const id = params.id as string
  const resource = resourcesData[id as keyof typeof resourcesData]
  const [isSaved, setIsSaved] = useState(false)

  if (!resource) {
    return (
      <div className="min-h-screen flex flex-col bg-gray-50">
        <Header />
        <div className="flex-1 flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-3xl font-bold text-foreground mb-2">Resource Not Found</h1>
            <p className="text-gray-600 mb-6">We couldn't find the resource you're looking for.</p>
            <Link href="/resources">
              <Button className="bg-teal-600 hover:bg-teal-700">Back to Directory</Button>
            </Link>
          </div>
        </div>
        <Footer />
      </div>
    )
  }

  const relatedResources = resource.relatedResources
    .map((id) => resourcesData[id as keyof typeof resourcesData])
    .filter(Boolean)

  const getMapLink = (address: string) => {
    return `https://www.google.com/maps/search/${encodeURIComponent(address)}`
  }

  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Header />

      <div className="flex-1">
        {/* Hero Section */}
        <div className="bg-gradient-to-r from-navy-900 to-teal-700 text-white py-12 px-4">
          <div className="max-w-6xl mx-auto">
            <Link href="/resources" className="flex items-center gap-2 text-white hover:text-gray-100 mb-6 w-fit">
              <ArrowLeft className="w-4 h-4" />
              Back to Directory
            </Link>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">{resource.name}</h1>
            <p className="text-xl text-blue-100 mb-4">{resource.description}</p>
            <div className="flex flex-wrap gap-2">
              {resource.tags.map((tag) => (
                <span key={tag} className="bg-white bg-opacity-20 px-3 py-1 rounded-full text-sm">
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="max-w-6xl mx-auto px-4 py-12">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Main Content Column */}
            <div className="lg:col-span-2">
              {/* Hero Image */}
              <div className="mb-8 rounded-lg overflow-hidden shadow-md h-96 bg-gray-200">
                <img
                  src={resource.image || "/placeholder.svg"}
                  alt={resource.name}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Overview */}
              <div className="bg-white rounded-lg shadow-md p-8 mb-8">
                <h2 className="text-2xl font-bold text-foreground mb-4">About This Organization</h2>
                <p className="text-gray-700 text-lg leading-relaxed mb-6">{resource.fullDescription}</p>

                {/* Impact Stats */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  {resource.impactStats.map((stat, idx) => (
                    <div key={idx} className="bg-teal-50 rounded-lg p-4 text-center border border-teal-200">
                      <div className="text-3xl mb-2">{stat.icon}</div>
                      <div className="text-2xl font-bold text-teal-700">{stat.value}</div>
                      <div className="text-sm text-gray-600">{stat.label}</div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Services */}
              <div className="bg-white rounded-lg shadow-md p-8 mb-8">
                <h2 className="text-2xl font-bold text-foreground mb-6">Services Offered</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {resource.services.map((service, idx) => (
                    <div key={idx} className="flex items-start gap-3">
                      <div className="w-6 h-6 rounded-full bg-teal-100 flex items-center justify-center flex-shrink-0 mt-1">
                        <div className="w-2 h-2 bg-teal-600 rounded-full" />
                      </div>
                      <span className="text-gray-700">{service}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Eligibility & Funding */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                <div className="bg-white rounded-lg shadow-md p-8">
                  <h3 className="text-xl font-bold text-foreground mb-4">Eligibility Requirements</h3>
                  <p className="text-gray-700">{resource.eligibility}</p>
                </div>
                <div className="bg-white rounded-lg shadow-md p-8">
                  <h3 className="text-xl font-bold text-foreground mb-4">Funding & Support</h3>
                  <p className="text-gray-700">{resource.funding}</p>
                </div>
              </div>

              {/* Related Resources */}
              {relatedResources.length > 0 && (
                <div className="bg-white rounded-lg shadow-md p-8">
                  <h3 className="text-2xl font-bold text-foreground mb-6">You Might Also Be Interested In</h3>
                  <div className="space-y-4">
                    {relatedResources.map((related) => (
                      <Link key={related.id} href={`/resources/${related.id}`}>
                        <div className="p-4 border border-gray-200 rounded-lg hover:shadow-md hover:border-teal-300 transition cursor-pointer">
                          <h4 className="font-bold text-foreground mb-1">{related.name}</h4>
                          <p className="text-sm text-gray-600 mb-2">{related.description}</p>
                          <div className="flex items-center text-teal-600 text-sm font-medium">
                            View Details <ExternalLink className="w-3 h-3 ml-1" />
                          </div>
                        </div>
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Sidebar */}
            <aside className="lg:col-span-1">
              {/* Contact Card */}
              <div className="bg-white rounded-lg shadow-md p-8 sticky top-4 space-y-6 mb-8">
                <h2 className="text-xl font-bold text-foreground">Get In Touch</h2>

                {/* Address */}
                <div>
                  <div className="flex items-start gap-3 mb-3">
                    <MapPin className="w-5 h-5 text-teal-600 flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="text-sm font-semibold text-foreground">Address</p>
                      <a
                        href={getMapLink(resource.address)}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-sm text-teal-600 hover:underline flex items-center gap-1 mt-1"
                      >
                        {resource.address}
                        <ExternalLink className="w-3 h-3" />
                      </a>
                      {resource.distance > 0 && (
                        <p className="text-xs text-gray-500 mt-1">{resource.distance} miles away</p>
                      )}
                    </div>
                  </div>
                </div>

                {/* Phone */}
                <div className="flex items-start gap-3">
                  <Phone className="w-5 h-5 text-teal-600 flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="text-sm font-semibold text-foreground">Phone</p>
                    <a href={`tel:${resource.phone}`} className="text-sm text-teal-600 hover:underline">
                      {resource.phone}
                    </a>
                  </div>
                </div>

                {/* Email */}
                <div className="flex items-start gap-3">
                  <Mail className="w-5 h-5 text-teal-600 flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="text-sm font-semibold text-foreground">Email</p>
                    <a href={`mailto:${resource.email}`} className="text-sm text-teal-600 hover:underline break-all">
                      {resource.email}
                    </a>
                  </div>
                </div>

                {/* Website */}
                <div className="flex items-start gap-3">
                  <Globe className="w-5 h-5 text-teal-600 flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="text-sm font-semibold text-foreground">Website</p>
                    <a
                      href={`https://${resource.website}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm text-teal-600 hover:underline flex items-center gap-1"
                    >
                      Visit
                      <ExternalLink className="w-3 h-3" />
                    </a>
                  </div>
                </div>

                {/* Hours */}
                <div className="flex items-start gap-3 pb-6 border-b border-gray-200">
                  <Clock className="w-5 h-5 text-teal-600 flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="text-sm font-semibold text-foreground">Hours</p>
                    <p className="text-sm text-gray-700 mt-1">{resource.hours}</p>
                  </div>
                </div>

                {/* Demographics */}
                <div className="flex items-start gap-3">
                  <Users className="w-5 h-5 text-teal-600 flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="text-sm font-semibold text-foreground">Serves</p>
                    <div className="flex flex-wrap gap-1 mt-2">
                      {resource.ageGroups.map((group) => (
                        <span key={group} className="text-xs bg-teal-50 text-teal-700 px-2 py-1 rounded">
                          {group}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Cost Badge */}
                <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
                  <p className="text-sm font-bold text-yellow-900">
                    {resource.isFree ? "✓ Free Services" : "Sliding Scale / Low Cost"}
                  </p>
                </div>

                {/* Action Buttons */}
                <div className="space-y-3 pt-6 border-t border-gray-200">
                  <Button
                    onClick={() => setIsSaved(!isSaved)}
                    className={`w-full flex items-center justify-center gap-2 ${
                      isSaved ? "bg-red-50 text-red-600 border border-red-200" : "bg-white border border-gray-300"
                    }`}
                    variant="outline"
                  >
                    <Heart className="w-4 h-4" fill={isSaved ? "currentColor" : "none"} />
                    {isSaved ? "Saved" : "Save Resource"}
                  </Button>
                  <Button
                    onClick={() => {
                      const text = `Check out ${resource.name}: ${resource.description}. Phone: ${resource.phone}`
                      navigator.share?.({
                        title: resource.name,
                        text,
                        url: window.location.href,
                      }) || navigator.clipboard.writeText(text)
                    }}
                    className="w-full flex items-center justify-center gap-2 bg-teal-600 hover:bg-teal-700"
                  >
                    <Share2 className="w-4 h-4" />
                    Share Resource
                  </Button>
                </div>
              </div>
            </aside>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  )
}
