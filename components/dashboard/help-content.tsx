"use client"

import { useState } from "react"
import { Button } from "@/components/dashboard/ui/button"
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/dashboard/ui/collapsible"
import {
  IconHelp,
  IconChevronDown,
  IconChevronRight,
  IconMail,
  IconExternalLink,
  IconSearch,
  IconClipboardList,
  IconBuilding,
  IconCalendar,
  IconHistory,
  IconSettings,
  IconDashboard,
} from "@tabler/icons-react"
import Link from "next/link"

const faqItems = [
  {
    question: "How do I sign up to volunteer for an event?",
    answer: "Navigate to 'Search Events' from the sidebar. Find an event you're interested in, click 'VOLUNTEER', then select your available dates and preferred roles. Submit your application and it will be reviewed by the event coordinator.",
  },
  {
    question: "How do I check the status of my application?",
    answer: "Go to 'My Applications' from the sidebar. You'll see all your applications organized by status — Pending, Assigned, or Rejected. You can also edit or withdraw pending applications from this page.",
  },
  {
    question: "What are outstanding tasks and certifications?",
    answer: "Some volunteer roles require certifications (such as Youth Protection Policy training or background checks). If your assigned role requires these, you'll see them highlighted on your Dashboard under 'Roles Missing Certifications'. Complete all outstanding tasks before the event date.",
  },
  {
    question: "How do I join an organization?",
    answer: "Go to 'Organizations' from the sidebar and click 'Join Organization'. Enter the organization code provided by your organization admin. If you don't have a code, contact your organization or school administrator.",
  },
  {
    question: "How do I create a new organization?",
    answer: "On the 'Organizations' page, click 'Create New Organization'. Fill out all required fields including organization name, service types, contact information, and address. Your submission will be reviewed by platform administrators before approval.",
  },
  {
    question: "How can I view my volunteer history and hours?",
    answer: "Go to 'Volunteer History' from the sidebar. You can see all your past participation records, filter by program or season, and view your total volunteer hours. Use the 'Print History' button to generate a printable summary.",
  },
  {
    question: "How do I edit my profile or update my information?",
    answer: "Navigate to 'My Profile' from the sidebar or the user dropdown menu. Click 'Edit Profile' to update your display name, phone number, emergency contact, shirt size, and other details.",
  },
  {
    question: "What do I do if I need to withdraw from a volunteer role?",
    answer: "You can withdraw from a role through either your Dashboard (click 'Role Options' → 'Withdraw Application') or through the 'My Applications' page. Please withdraw as early as possible so coordinators can find a replacement.",
  },
]

const quickLinks = [
  { label: "Dashboard", href: "/dashboard", icon: IconDashboard },
  { label: "Search Events", href: "/dashboard/events", icon: IconSearch },
  { label: "My Applications", href: "/dashboard/applications", icon: IconClipboardList },
  { label: "Volunteer History", href: "/dashboard/history", icon: IconHistory },
  { label: "Organizations", href: "/dashboard/organizations", icon: IconBuilding },
  { label: "Calendar", href: "/dashboard/calendar", icon: IconCalendar },
  { label: "Settings", href: "/dashboard/settings", icon: IconSettings },
]

interface HelpContentProps {
  basePath?: string
}

export function HelpContent({ basePath = "/dashboard" }: HelpContentProps) {
  const [openItems, setOpenItems] = useState<Set<number>>(new Set())

  const toggleItem = (index: number) => {
    setOpenItems((prev) => {
      const next = new Set(prev)
      if (next.has(index)) next.delete(index)
      else next.add(index)
      return next
    })
  }

  const links = basePath === "/admin"
    ? [
      { label: "Admin Dashboard", href: "/admin", icon: IconDashboard },
      { label: "User Management", href: "/admin/users", icon: IconSearch },
      { label: "Organizations", href: "/admin/organizations", icon: IconBuilding },
      { label: "Applications", href: "/admin/applications", icon: IconClipboardList },
      { label: "Settings", href: "/admin/settings", icon: IconSettings },
    ]
    : quickLinks

  return (
    <div className="min-h-screen bg-muted">
      <div className="bg-white border-b px-6 py-4">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-xl font-bold text-secondary">Help Center</h1>
            <p className="text-sm text-muted-foreground">
              Find answers to common questions and get support
            </p>
          </div>
        </div>
      </div>

      <div className="p-6 space-y-6 max-w-4xl">
        {/* FAQ */}
        <div className="bg-white rounded shadow-sm">
          <div className="px-6 py-4 border-b">
            <h2 className="text-lg font-bold text-secondary flex items-center gap-2">
              <IconHelp className="size-5" />
              Frequently Asked Questions
            </h2>
          </div>
          <div className="divide-y">
            {faqItems.map((item, index) => (
              <Collapsible key={index} open={openItems.has(index)} onOpenChange={() => toggleItem(index)}>
                <CollapsibleTrigger className="flex items-center gap-3 w-full text-left px-6 py-4 hover:bg-gray-50 transition-colors">
                  {openItems.has(index) ? (
                    <IconChevronDown className="size-4 text-primary shrink-0" />
                  ) : (
                    <IconChevronRight className="size-4 text-muted-foreground shrink-0" />
                  )}
                  <span className="text-sm font-medium text-secondary">{item.question}</span>
                </CollapsibleTrigger>
                <CollapsibleContent>
                  <div className="px-6 pb-4 pl-13">
                    <p className="text-sm text-muted-foreground ml-7">{item.answer}</p>
                  </div>
                </CollapsibleContent>
              </Collapsible>
            ))}
          </div>
        </div>

        {/* Quick Links */}
        <div className="bg-white rounded shadow-sm p-6">
          <h2 className="text-lg font-bold text-secondary mb-4">Quick Links</h2>
          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="flex items-center gap-3 p-3 border rounded hover:border-primary hover:bg-gray-50 transition-colors"
              >
                <link.icon className="size-5 text-primary" />
                <span className="text-sm font-medium text-secondary">{link.label}</span>
              </Link>
            ))}
          </div>
        </div>

        {/* Contact Support */}
        <div className="bg-white rounded shadow-sm p-6">
          <h2 className="text-lg font-bold text-secondary mb-4 flex items-center gap-2">
            <IconMail className="size-5" />Contact Support
          </h2>
          <p className="text-sm text-muted-foreground mb-4">
            {"Can't find what you're looking for? Reach out to our support team and we'll get back to you within 24 hours."}
          </p>
          <div className="flex gap-3">
            <Button
              className="bg-primary hover:bg-[#386109] text-white"
              onClick={() => window.location.href = "mailto:support@maplewood.org"}
            >
              <IconMail className="size-4 mr-2" />
              Email Support
            </Button>
            <Button variant="outline" className="border-primary text-primary" asChild>
              <a href="https://maplewood.org" target="_blank" rel="noopener noreferrer">
                <IconExternalLink className="size-4 mr-2" />
                Visit Website
              </a>
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}
