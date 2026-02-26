"use client"

import { useState, useMemo, useEffect } from "react"
import Link from "next/link"
import {
  Calendar,
  CalendarDays,
  ChevronLeft,
  ChevronRight,
  MapPin,
  Clock,
  Search,
  Bookmark,
  BookmarkCheck,
  ClipboardList,
  AlertTriangle,
  CreditCard,
  Briefcase,
  Heart,
  Home,
  DollarSign,
  BookOpen,
  Users,
  FileText,
  Bell,
  ArrowRight,
  CheckCircle2,
  XCircle,
  Loader2,
  Settings,
  LogOut,
  User,
  Plus,
  Filter,
  Eye,
  Trash2,
  ExternalLink,
  BarChart3,
  MessageSquare,
  Send,
  CircleAlert,
  ChevronDown,
  ChevronUp,
} from "lucide-react"
import { eventsConfig } from "@/lib/content/events-config"

/* ------------------------------------------------------------------ */
/*  Simulated user data                                                */
/* ------------------------------------------------------------------ */

const userData = {
  name: "Maria Garcia",
  email: "maria.garcia@email.com",
  joined: "November 2025",
  avatar: "MG",
  interests: ["Food Assistance", "Youth Programs", "Healthcare"],
  zipCode: "98101",
}

// Events the user has registered for
const myRegisteredEvents = [
  {
    slug: "tax-help-march",
    title: "Free Tax Preparation (VITA)",
    date: "2026-03-02",
    time: "9:00 AM - 4:00 PM",
    location: "Community Center",
    status: "confirmed" as const,
    confirmationCode: "VITA-2026-0482",
    spotsTotal: 40,
    spotsTaken: 33,
    registeredOn: "2026-02-10",
  },
  {
    slug: "women-history-resources",
    title: "Women's History Month Resource Fair",
    date: "2026-03-09",
    time: "11:00 AM - 3:00 PM",
    location: "Central Library",
    status: "confirmed" as const,
    confirmationCode: "WHM-2026-0291",
    spotsTotal: 100,
    spotsTaken: 67,
    registeredOn: "2026-02-18",
  },
  {
    slug: "nutrition-workshop-march",
    title: "Healthy Eating on a Budget",
    date: "2026-03-16",
    time: "6:00 PM - 7:30 PM",
    location: "North Community Center Kitchen",
    status: "waitlisted" as const,
    confirmationCode: "NUT-2026-WL12",
    spotsTotal: 20,
    spotsTaken: 20,
    registeredOn: "2026-02-22",
    waitlistPosition: 3,
  },
]

// User's benefit applications
const myApplications = [
  {
    id: "APP-2026-1182",
    program: "SNAP Benefits",
    submittedDate: "2026-01-28",
    status: "approved" as const,
    statusDate: "2026-02-12",
    nextStep: "Benefits active — check your EBT card balance",
    category: "Food Assistance",
  },
  {
    id: "APP-2026-1340",
    program: "Rental Assistance Program",
    submittedDate: "2026-02-05",
    status: "under-review" as const,
    statusDate: "2026-02-20",
    nextStep: "Documents received — estimated review: 5-7 business days",
    category: "Housing",
  },
  {
    id: "APP-2026-1455",
    program: "Child Care Assistance",
    submittedDate: "2026-02-15",
    status: "pending" as const,
    statusDate: "2026-02-15",
    nextStep: "Upload proof of income and work schedule",
    category: "Family Services",
  },
]

// User's service requests / reports
const myReports = [
  {
    id: "RPT-2026-0394",
    type: "Pothole Report",
    location: "4th Ave & Main St",
    submittedDate: "2026-02-10",
    status: "in-progress" as const,
    lastUpdate: "Crew scheduled for week of March 3",
  },
  {
    id: "RPT-2026-0421",
    type: "Noise Complaint",
    location: "200 Block Elm St",
    submittedDate: "2026-02-18",
    status: "resolved" as const,
    lastUpdate: "Investigation completed — warning issued",
  },
]

// User's saved resources
const mySavedResources = [
  { id: 1, name: "City Food Bank", category: "Food Assistance", address: "456 Oak Avenue", phone: "(206) 555-0101", hours: "Mon-Sat 9am-5pm" },
  { id: 2, name: "Community Mental Health Services", category: "Mental Health", address: "789 Pine Street", phone: "(206) 555-0102", hours: "Mon-Fri 8am-6pm" },
  { id: 3, name: "Youth Scholarship Fund", category: "Education", address: "555 Birch Road", phone: "(206) 555-0104", hours: "Mon-Fri 10am-6pm" },
]

// Personalized recommendations based on interests
const recommendedEvents = eventsConfig
  .sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime())
  .slice(0, 6)
  .map((e, index) => ({
    ...e,
    // Use stable deterministic "random" values based on index to avoid hydration mismatch
    spotsTotal: 50 + (index * 10),
    spotsTaken: 10 + (index * 15),
  }))

// Notifications
const notifications = [
  { id: 1, type: "event" as const, message: "Reminder: Free Tax Preparation (VITA) is in 5 days", time: "Today", read: false },
  { id: 2, type: "application" as const, message: "Your SNAP Benefits application has been approved!", time: "3 days ago", read: false },
  { id: 3, type: "report" as const, message: "Update on your pothole report: crew scheduled", time: "5 days ago", read: true },
  { id: 4, type: "event" as const, message: "New spots opened for Healthy Eating workshop — you moved up the waitlist", time: "1 week ago", read: true },
]

/* ------------------------------------------------------------------ */
/*  Calendar helpers                                                   */
/* ------------------------------------------------------------------ */

function getDaysInMonth(year: number, month: number) {
  return new Date(year, month + 1, 0).getDate()
}
function getFirstDayOfMonth(year: number, month: number) {
  return new Date(year, month, 1).getDay()
}
const MONTH_NAMES = [
  "January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December",
]

/* ------------------------------------------------------------------ */
/*  Status helpers                                                     */
/* ------------------------------------------------------------------ */

function StatusBadge({ status }: { status: string }) {
  const config: Record<string, { bg: string; text: string; label: string; icon: React.ReactNode }> = {
    confirmed: { bg: "bg-green-50 border-green-200", text: "text-green-800", label: "Confirmed", icon: <CheckCircle2 className="w-3.5 h-3.5" /> },
    waitlisted: { bg: "bg-amber-50 border-amber-200", text: "text-amber-800", label: "Waitlisted", icon: <Clock className="w-3.5 h-3.5" /> },
    cancelled: { bg: "bg-red-50 border-red-200", text: "text-red-800", label: "Cancelled", icon: <XCircle className="w-3.5 h-3.5" /> },
    approved: { bg: "bg-green-50 border-green-200", text: "text-green-800", label: "Approved", icon: <CheckCircle2 className="w-3.5 h-3.5" /> },
    "under-review": { bg: "bg-blue-50 border-blue-200", text: "text-blue-800", label: "Under Review", icon: <Loader2 className="w-3.5 h-3.5" /> },
    pending: { bg: "bg-slate-50 border-slate-200", text: "text-slate-700", label: "Action Needed", icon: <CircleAlert className="w-3.5 h-3.5" /> },
    "in-progress": { bg: "bg-blue-50 border-blue-200", text: "text-blue-800", label: "In Progress", icon: <Loader2 className="w-3.5 h-3.5" /> },
    resolved: { bg: "bg-green-50 border-green-200", text: "text-green-800", label: "Resolved", icon: <CheckCircle2 className="w-3.5 h-3.5" /> },
  }
  const c = config[status] || config.pending
  return (
    <span className={`inline-flex items-center gap-1 px-2.5 py-1 rounded-md text-xs font-semibold border ${c.bg} ${c.text}`}>
      {c.icon} {c.label}
    </span>
  )
}

function SpotsBar({ taken, total }: { taken: number; total: number }) {
  const pct = Math.min(100, Math.round((taken / total) * 100))
  const isFull = taken >= total
  return (
    <div className="mt-2">
      <div className="flex items-center justify-between text-xs mb-1">
        <span className={isFull ? "text-red-600 font-semibold" : "text-slate-600"}>
          {taken}/{total} spots filled
        </span>
        <span className={isFull ? "text-red-600 font-semibold" : "text-slate-500"}>
          {isFull ? "Full" : `${total - taken} left`}
        </span>
      </div>
      <div className="w-full h-2 bg-slate-100 rounded-full overflow-hidden">
        <div
          className={`h-full rounded-full transition-all ${isFull ? "bg-red-500" : pct > 75 ? "bg-amber-500" : "bg-blue-600"}`}
          style={{ width: `${pct}%` }}
        />
      </div>
    </div>
  )
}

/* ------------------------------------------------------------------ */
/*  Component                                                          */
/* ------------------------------------------------------------------ */

type DashTab = "overview" | "events" | "applications" | "reports" | "saved"

export function PortalDashboard() {
  const [mounted, setMounted] = useState(false)
  const today = useMemo(() => new Date(), [])

  const [activeTab, setActiveTab] = useState<DashTab>("overview")
  const [calMonth, setCalMonth] = useState(today.getMonth())
  const [calYear, setCalYear] = useState(today.getFullYear())
  const [showAllNotifs, setShowAllNotifs] = useState(false)
  const [eventFilter, setEventFilter] = useState<"upcoming" | "past" | "waitlisted">("upcoming")

  useEffect(() => {
    setMounted(true)
  }, [])

  // Calendar data
  const myEventDates = useMemo(() => {
    const s = new Set<string>()
    myRegisteredEvents.forEach((e) => s.add(e.date))
    return s
  }, [])

  const monthEvents = useMemo(() => {
    return eventsConfig
      .filter((e) => {
        const d = new Date(e.date)
        return d.getMonth() === calMonth && d.getFullYear() === calYear
      })
      .sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime())
  }, [calMonth, calYear])

  const eventDatesSet = useMemo(() => {
    const s = new Set<number>()
    monthEvents.forEach((e) => s.add(new Date(e.date).getDate()))
    return s
  }, [monthEvents])

  const daysInMonth = getDaysInMonth(calYear, calMonth)
  const firstDay = getFirstDayOfMonth(calYear, calMonth)

  const prevMonth = () => {
    if (calMonth === 0) { setCalMonth(11); setCalYear((y) => y - 1) }
    else setCalMonth((m) => m - 1)
  }
  const nextMonth = () => {
    if (calMonth === 11) { setCalMonth(0); setCalYear((y) => y + 1) }
    else setCalMonth((m) => m + 1)
  }

  const formatDate = (dateStr: string) => {
    const d = new Date(dateStr)
    return d.toLocaleDateString("en-US", { weekday: "short", month: "short", day: "numeric" })
  }
  const formatShort = (dateStr: string) => {
    const d = new Date(dateStr)
    return d.toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" })
  }

  const unreadCount = notifications.filter((n) => !n.read).length

  const tabs: { key: DashTab; label: string; icon: React.ReactNode; count?: number }[] = [
    { key: "overview", label: "Overview", icon: <BarChart3 className="w-4 h-4" /> },
    { key: "events", label: "My Events", icon: <CalendarDays className="w-4 h-4" />, count: myRegisteredEvents.length },
    { key: "applications", label: "Applications", icon: <ClipboardList className="w-4 h-4" />, count: myApplications.filter((a) => a.status !== "approved").length },
    { key: "reports", label: "My Reports", icon: <FileText className="w-4 h-4" />, count: myReports.filter((r) => r.status !== "resolved").length },
    { key: "saved", label: "Saved", icon: <Bookmark className="w-4 h-4" />, count: mySavedResources.length },
  ]

  return (
    <div className="min-h-screen bg-slate-50">
      {/* ─── User profile header ─── */}
      <section className="bg-slate-900 text-white py-6 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            <div className="flex items-center gap-4">
              <div className="w-14 h-14 rounded-full bg-blue-700 flex items-center justify-center text-xl font-bold shrink-0">
                {userData.avatar}
              </div>
              <div>
                <h1 className="text-2xl md:text-3xl font-bold">Welcome, {userData.name.split(" ")[0]}</h1>
                <p className="text-slate-400 text-sm h-5">
                  {mounted ? (
                    <>
                      {today.toLocaleDateString("en-US", { weekday: "long", month: "long", day: "numeric", year: "numeric" })}
                      {" · "}Member since {userData.joined}
                    </>
                  ) : (
                    "Loading dashboard..."
                  )}
                </p>
              </div>
            </div>

            <div className="flex items-center gap-3">
              {/* Notification bell */}
              <button
                onClick={() => setShowAllNotifs(!showAllNotifs)}
                className="relative p-2.5 rounded-md bg-slate-800 hover:bg-slate-700 transition"
                aria-label="Notifications"
              >
                <Bell className="w-5 h-5" />
                {unreadCount > 0 && (
                  <span className="absolute -top-1 -right-1 w-5 h-5 bg-red-500 rounded-full text-xs flex items-center justify-center font-bold">
                    {unreadCount}
                  </span>
                )}
              </button>
              <button className="p-2.5 rounded-md bg-slate-800 hover:bg-slate-700 transition" aria-label="Settings">
                <Settings className="w-5 h-5" />
              </button>
              <button className="p-2.5 rounded-md bg-slate-800 hover:bg-slate-700 transition" aria-label="Sign out">
                <LogOut className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Notification dropdown */}
          {showAllNotifs && (
            <div className="mt-4 bg-slate-800 rounded-md border border-slate-700 overflow-hidden">
              <div className="px-4 py-3 border-b border-slate-700 flex items-center justify-between">
                <h3 className="font-semibold text-sm">Notifications</h3>
                <button className="text-xs text-slate-400 hover:text-white transition">Mark all read</button>
              </div>
              {notifications.map((n) => (
                <div key={n.id} className={`px-4 py-3 border-b border-slate-700 last:border-0 flex items-start gap-3 ${n.read ? "opacity-60" : ""}`}>
                  <div className={`w-2 h-2 rounded-full mt-1.5 shrink-0 ${n.read ? "bg-slate-600" : "bg-blue-400"}`} />
                  <div>
                    <p className="text-sm">{n.message}</p>
                    <p className="text-xs text-slate-500 mt-0.5">{n.time}</p>
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* Quick stats */}
          <div className="flex flex-wrap gap-3 mt-5">
            <div className="flex items-center gap-2 bg-slate-800 px-4 py-2 rounded-md text-sm">
              <CalendarDays className="w-4 h-4 text-blue-400" />
              <span><strong>{myRegisteredEvents.length}</strong> upcoming events</span>
            </div>
            <div className="flex items-center gap-2 bg-slate-800 px-4 py-2 rounded-md text-sm">
              <ClipboardList className="w-4 h-4 text-green-400" />
              <span><strong>{myApplications.filter((a) => a.status === "approved").length}</strong> approved applications</span>
            </div>
            <div className="flex items-center gap-2 bg-slate-800 px-4 py-2 rounded-md text-sm">
              <CircleAlert className="w-4 h-4 text-amber-400" />
              <span><strong>{myApplications.filter((a) => a.status === "pending").length}</strong> needing action</span>
            </div>
          </div>
        </div>
      </section>

      {/* ─── Tab navigation ─── */}
      <div className="bg-white border-b border-slate-200 sticky top-0 z-20">
        <div className="max-w-7xl mx-auto px-4">
          <nav className="flex gap-1 overflow-x-auto scrollbar-hide -mb-px">
            {tabs.map((tab) => (
              <button
                key={tab.key}
                onClick={() => setActiveTab(tab.key)}
                className={`flex items-center gap-2 px-4 py-3.5 text-sm font-semibold border-b-2 transition whitespace-nowrap ${activeTab === tab.key
                  ? "border-slate-900 text-slate-900"
                  : "border-transparent text-slate-500 hover:text-slate-700 hover:border-slate-300"
                  }`}
              >
                {tab.icon}
                {tab.label}
                {tab.count !== undefined && tab.count > 0 && (
                  <span className={`ml-1 px-1.5 py-0.5 rounded-full text-xs ${activeTab === tab.key ? "bg-slate-900 text-white" : "bg-slate-200 text-slate-600"
                    }`}>
                    {tab.count}
                  </span>
                )}
              </button>
            ))}
          </nav>
        </div>
      </div>

      {/* ─── Main content ─── */}
      <div className="max-w-7xl mx-auto px-4 py-8">

        {/* ============================================================ */}
        {/* OVERVIEW TAB                                                  */}
        {/* ============================================================ */}
        {activeTab === "overview" && (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Left column — 2/3 width */}
            <div className="lg:col-span-2 space-y-8">

              {/* My Upcoming Registrations */}
              <section>
                <div className="flex items-center justify-between mb-4">
                  <h2 className="text-xl font-bold text-slate-900">My Upcoming Registrations</h2>
                  <button onClick={() => setActiveTab("events")} className="text-blue-700 text-sm font-semibold hover:underline flex items-center gap-1">
                    View all <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
                <div className="space-y-3">
                  {myRegisteredEvents.map((evt) => (
                    <div key={evt.slug} className="bg-white rounded-md border border-slate-200 shadow-sm p-5">
                      <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3">
                        <div className="flex-1">
                          <div className="flex items-center gap-2 flex-wrap">
                            <Link href={`/main/events/${evt.slug}`} className="font-bold text-slate-900 hover:text-blue-700 transition">
                              {evt.title}
                            </Link>
                            <StatusBadge status={evt.status} />
                          </div>
                          <div className="flex flex-wrap items-center gap-4 mt-2 text-sm text-slate-600">
                            <span className="flex items-center gap-1">
                              <CalendarDays className="w-4 h-4 text-slate-400" />
                              {formatDate(evt.date)}
                            </span>
                            <span className="flex items-center gap-1">
                              <Clock className="w-4 h-4 text-slate-400" />
                              {evt.time}
                            </span>
                            <span className="flex items-center gap-1">
                              <MapPin className="w-4 h-4 text-slate-400" />
                              {evt.location}
                            </span>
                          </div>
                          <SpotsBar taken={evt.spotsTaken} total={evt.spotsTotal} />
                          {evt.status === "waitlisted" && evt.waitlistPosition && (
                            <p className="text-xs text-amber-700 mt-1 font-medium">
                              Waitlist position: #{evt.waitlistPosition}
                            </p>
                          )}
                        </div>
                        <div className="text-right shrink-0">
                          <p className="text-xs text-slate-400">Confirmation</p>
                          <p className="text-sm font-mono font-semibold text-slate-700">{evt.confirmationCode}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </section>

              {/* Application Tracker */}
              <section>
                <div className="flex items-center justify-between mb-4">
                  <h2 className="text-xl font-bold text-slate-900">Application Tracker</h2>
                  <button onClick={() => setActiveTab("applications")} className="text-blue-700 text-sm font-semibold hover:underline flex items-center gap-1">
                    View all <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
                <div className="space-y-3">
                  {myApplications.map((app) => (
                    <div key={app.id} className="bg-white rounded-md border border-slate-200 shadow-sm p-5">
                      <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2">
                        <div>
                          <div className="flex items-center gap-2 flex-wrap">
                            <h3 className="font-bold text-slate-900">{app.program}</h3>
                            <StatusBadge status={app.status} />
                          </div>
                          <p className="text-sm text-slate-500 mt-1">
                            <span className="inline-block bg-slate-100 text-slate-600 text-xs px-2 py-0.5 rounded mr-2">{app.category}</span>
                            Submitted {formatShort(app.submittedDate)}
                          </p>
                          <p className="text-sm text-slate-700 mt-2 flex items-start gap-1.5">
                            <ArrowRight className="w-4 h-4 text-slate-400 mt-0.5 shrink-0" />
                            {app.nextStep}
                          </p>
                        </div>
                        <p className="text-xs font-mono text-slate-400 shrink-0">{app.id}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </section>

              {/* Browse & Register for Events */}
              <section>
                <h2 className="text-xl font-bold text-slate-900 mb-4">Recommended Events Near You</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {recommendedEvents.slice(0, 4).map((evt) => (
                    <div key={evt.slug} className="bg-white rounded-md border border-slate-200 shadow-sm p-5 flex flex-col">
                      <Link href={`/main/events/${evt.slug}`} className="font-bold text-slate-900 hover:text-blue-700 transition">
                        {evt.title}
                      </Link>
                      <p className="text-sm text-slate-600 mt-1 line-clamp-2 flex-1">{evt.description}</p>
                      <div className="flex flex-wrap items-center gap-3 mt-3 text-xs text-slate-500">
                        <span className="flex items-center gap-1"><CalendarDays className="w-3.5 h-3.5" />{formatDate(evt.date)}</span>
                        <span className="flex items-center gap-1"><Clock className="w-3.5 h-3.5" />{evt.time}</span>
                      </div>
                      <div className="flex items-center gap-1 mt-1 text-xs text-slate-500">
                        <MapPin className="w-3.5 h-3.5" />{evt.location}
                      </div>
                      <SpotsBar taken={evt.spotsTaken} total={evt.spotsTotal} />
                      <div className="flex items-center gap-2 mt-3">
                        {evt.spotsTaken < evt.spotsTotal ? (
                          <button className="box-button-primary text-sm py-2 px-4 flex items-center gap-1.5">
                            <Plus className="w-4 h-4" /> Register
                          </button>
                        ) : (
                          <button className="box-button text-sm py-2 px-4 flex items-center gap-1.5">
                            <Clock className="w-4 h-4" /> Join Waitlist
                          </button>
                        )}
                        <Link href={`/main/events/${evt.slug}`} className="box-button text-sm py-2 px-4">
                          Details
                        </Link>
                      </div>
                    </div>
                  ))}
                </div>
              </section>
            </div>

            {/* Right column — 1/3 width */}
            <div className="space-y-6">

              {/* Mini calendar */}
              <div className="bg-white rounded-md border border-slate-200 shadow-sm p-5">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-2 bg-slate-900 text-white px-3 py-1.5 rounded-md text-sm font-semibold">
                    <CalendarDays className="w-4 h-4" />
                    {MONTH_NAMES[calMonth]} {calYear}
                  </div>
                  <div className="flex gap-1">
                    <button onClick={prevMonth} className="p-1.5 rounded hover:bg-slate-100 transition"><ChevronLeft className="w-4 h-4" /></button>
                    <button onClick={nextMonth} className="p-1.5 rounded hover:bg-slate-100 transition"><ChevronRight className="w-4 h-4" /></button>
                  </div>
                </div>
                <div className="grid grid-cols-7 text-center text-xs font-semibold text-slate-400 mb-1">
                  {["S", "M", "T", "W", "T", "F", "S"].map((d, i) => <span key={i} className="py-1">{d}</span>)}
                </div>
                <div className="grid grid-cols-7 text-center text-xs">
                  {Array.from({ length: firstDay }).map((_, i) => <span key={`b-${i}`} />)}
                  {Array.from({ length: daysInMonth }, (_, i) => i + 1).map((day) => {
                    const dateStr = `${calYear}-${String(calMonth + 1).padStart(2, "0")}-${String(day).padStart(2, "0")}`
                    const isToday = day === today.getDate() && calMonth === today.getMonth() && calYear === today.getFullYear()
                    const hasEvent = eventDatesSet.has(day)
                    const isMyEvent = myEventDates.has(dateStr)
                    return (
                      <span
                        key={day}
                        className={`py-1.5 rounded mx-px my-px font-medium cursor-default transition
                          ${isToday ? "bg-blue-700 text-white" : ""}
                          ${isMyEvent && !isToday ? "bg-slate-900 text-white" : ""}
                          ${hasEvent && !isToday && !isMyEvent ? "bg-blue-100 text-blue-800" : ""}
                          ${!isToday && !hasEvent && !isMyEvent ? "text-slate-700" : ""}
                        `}
                        title={isMyEvent ? "You're registered" : hasEvent ? "Community event" : ""}
                      >
                        {day}
                      </span>
                    )
                  })}
                </div>
                <div className="flex flex-wrap items-center gap-3 mt-3 text-xs text-slate-500">
                  <span className="flex items-center gap-1"><span className="w-2.5 h-2.5 rounded bg-slate-900 inline-block" /> My Events</span>
                  <span className="flex items-center gap-1"><span className="w-2.5 h-2.5 rounded bg-blue-100 inline-block" /> Community</span>
                  <span className="flex items-center gap-1"><span className="w-2.5 h-2.5 rounded bg-blue-700 inline-block" /> Today</span>
                </div>
              </div>

              {/* My Reports */}
              <div className="bg-white rounded-md border border-slate-200 shadow-sm p-5">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="font-bold text-slate-900">My Reports</h3>
                  <button onClick={() => setActiveTab("reports")} className="text-blue-700 text-xs font-semibold hover:underline">View all</button>
                </div>
                <div className="space-y-3">
                  {myReports.map((r) => (
                    <div key={r.id} className="border border-slate-100 rounded-md p-3">
                      <div className="flex items-center justify-between gap-2">
                        <h4 className="font-semibold text-sm text-slate-900">{r.type}</h4>
                        <StatusBadge status={r.status} />
                      </div>
                      <p className="text-xs text-slate-500 flex items-center gap-1 mt-1">
                        <MapPin className="w-3 h-3" /> {r.location}
                      </p>
                      <p className="text-xs text-slate-600 mt-1.5">{r.lastUpdate}</p>
                    </div>
                  ))}
                  <button className="w-full box-button text-sm py-2 flex items-center justify-center gap-1.5">
                    <Plus className="w-4 h-4" /> Submit New Report
                  </button>
                </div>
              </div>

              {/* Saved Resources */}
              <div className="bg-white rounded-md border border-slate-200 shadow-sm p-5">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="font-bold text-slate-900 flex items-center gap-1.5">
                    <BookmarkCheck className="w-4 h-4" /> Saved Resources
                  </h3>
                  <button onClick={() => setActiveTab("saved")} className="text-blue-700 text-xs font-semibold hover:underline">View all</button>
                </div>
                <div className="space-y-3">
                  {mySavedResources.map((r) => (
                    <div key={r.id} className="border border-slate-100 rounded-md p-3">
                      <h4 className="font-semibold text-sm text-slate-900">{r.name}</h4>
                      <span className="inline-block bg-slate-100 text-slate-600 text-xs px-2 py-0.5 rounded mt-1">{r.category}</span>
                      <p className="text-xs text-slate-500 flex items-center gap-1 mt-1.5"><MapPin className="w-3 h-3" /> {r.address}</p>
                      <p className="text-xs text-slate-500 mt-0.5">{r.phone} · {r.hours}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Quick Actions */}
              <div className="bg-white rounded-md border border-slate-200 shadow-sm p-5">
                <h3 className="font-bold text-slate-900 mb-3">Quick Actions</h3>
                <div className="space-y-2">
                  <Link href="/main/events/calendar" className="flex items-center gap-3 p-3 rounded-md hover:bg-slate-50 transition text-sm font-medium text-slate-900">
                    <CalendarDays className="w-5 h-5 text-blue-700" /> Browse Events Calendar
                  </Link>
                  <Link href="/resources" className="flex items-center gap-3 p-3 rounded-md hover:bg-slate-50 transition text-sm font-medium text-slate-900">
                    <Search className="w-5 h-5 text-blue-700" /> Find Resources
                  </Link>
                  <Link href="/submit" className="flex items-center gap-3 p-3 rounded-md hover:bg-slate-50 transition text-sm font-medium text-slate-900">
                    <Send className="w-5 h-5 text-blue-700" /> Submit a Resource
                  </Link>
                  <Link href="/main/report-pothole-or-street-issue" className="flex items-center gap-3 p-3 rounded-md hover:bg-slate-50 transition text-sm font-medium text-slate-900">
                    <AlertTriangle className="w-5 h-5 text-blue-700" /> Report an Issue
                  </Link>
                  <Link href="/main/snap-benefits" className="flex items-center gap-3 p-3 rounded-md hover:bg-slate-50 transition text-sm font-medium text-slate-900">
                    <ClipboardList className="w-5 h-5 text-blue-700" /> Apply for Benefits
                  </Link>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* ============================================================ */}
        {/* MY EVENTS TAB                                                 */}
        {/* ============================================================ */}
        {activeTab === "events" && (
          <div className="space-y-6">
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
              <h2 className="text-2xl font-bold text-slate-900">My Events</h2>
              <div className="flex gap-2">
                {(["upcoming", "waitlisted", "past"] as const).map((f) => (
                  <button
                    key={f}
                    onClick={() => setEventFilter(f)}
                    className={`px-4 py-2 rounded-md text-sm font-semibold transition border ${eventFilter === f ? "bg-slate-900 text-white border-slate-900" : "bg-white text-slate-600 border-slate-200 hover:bg-slate-50"
                      }`}
                  >
                    {f.charAt(0).toUpperCase() + f.slice(1)}
                  </button>
                ))}
              </div>
            </div>

            {/* Registered events list */}
            <div className="space-y-4">
              {myRegisteredEvents
                .filter((e) => {
                  if (eventFilter === "waitlisted") return e.status === "waitlisted"
                  if (eventFilter === "past") return new Date(e.date) < today
                  return e.status !== "waitlisted" && new Date(e.date) >= today
                })
                .map((evt) => (
                  <div key={evt.slug} className="bg-white rounded-md border border-slate-200 shadow-sm p-6">
                    <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
                      <div className="flex-1">
                        <div className="flex items-center gap-2 flex-wrap">
                          <Link href={`/main/events/${evt.slug}`} className="text-lg font-bold text-slate-900 hover:text-blue-700 transition">
                            {evt.title}
                          </Link>
                          <StatusBadge status={evt.status} />
                        </div>
                        <div className="flex flex-wrap items-center gap-4 mt-3 text-sm text-slate-600">
                          <span className="flex items-center gap-1.5"><CalendarDays className="w-4 h-4 text-slate-400" />{formatDate(evt.date)}</span>
                          <span className="flex items-center gap-1.5"><Clock className="w-4 h-4 text-slate-400" />{evt.time}</span>
                          <span className="flex items-center gap-1.5"><MapPin className="w-4 h-4 text-slate-400" />{evt.location}</span>
                        </div>
                        <SpotsBar taken={evt.spotsTaken} total={evt.spotsTotal} />
                        {evt.status === "waitlisted" && evt.waitlistPosition && (
                          <p className="text-sm text-amber-700 mt-2 font-medium">
                            You are #{evt.waitlistPosition} on the waitlist. We&apos;ll notify you if a spot opens.
                          </p>
                        )}
                      </div>
                      <div className="bg-slate-50 border border-slate-200 rounded-md p-4 text-center shrink-0 min-w-[180px]">
                        <p className="text-xs text-slate-500 mb-1">Confirmation Code</p>
                        <p className="text-lg font-mono font-bold text-slate-900">{evt.confirmationCode}</p>
                        <p className="text-xs text-slate-400 mt-2">Registered {formatShort(evt.registeredOn)}</p>
                        <div className="flex gap-2 mt-3">
                          <button className="flex-1 box-button text-xs py-1.5">Cancel</button>
                          <Link href={`/main/events/${evt.slug}`} className="flex-1 box-button-primary text-xs py-1.5 text-center">View</Link>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
            </div>

            {/* Browse more */}
            <div className="bg-white rounded-md border border-slate-200 shadow-sm p-6">
              <h3 className="text-lg font-bold text-slate-900 mb-4">Find More Events to Register</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {recommendedEvents.slice(0, 3).map((evt) => (
                  <div key={evt.slug} className="border border-slate-200 rounded-md p-4 flex flex-col">
                    <Link href={`/main/events/${evt.slug}`} className="font-bold text-sm text-slate-900 hover:text-blue-700 transition">
                      {evt.title}
                    </Link>
                    <p className="text-xs text-slate-500 mt-1">{formatDate(evt.date)} · {evt.time}</p>
                    <p className="text-xs text-slate-500 flex items-center gap-1 mt-0.5"><MapPin className="w-3 h-3" />{evt.location}</p>
                    <SpotsBar taken={evt.spotsTaken} total={evt.spotsTotal} />
                    <button className="mt-3 box-button-primary text-xs py-2 flex items-center justify-center gap-1.5">
                      <Plus className="w-3.5 h-3.5" /> Register
                    </button>
                  </div>
                ))}
              </div>
              <Link href="/main/events/calendar" className="mt-4 inline-flex items-center gap-1 text-blue-700 text-sm font-semibold hover:underline">
                View full events calendar <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        )}

        {/* ============================================================ */}
        {/* APPLICATIONS TAB                                              */}
        {/* ============================================================ */}
        {activeTab === "applications" && (
          <div className="space-y-6">
            <div className="flex items-center justify-between">
              <h2 className="text-2xl font-bold text-slate-900">My Applications</h2>
              <Link href="/main/services" className="box-button-primary text-sm py-2 px-4 flex items-center gap-1.5">
                <Plus className="w-4 h-4" /> New Application
              </Link>
            </div>

            {myApplications.map((app) => (
              <div key={app.id} className="bg-white rounded-md border border-slate-200 shadow-sm p-6">
                <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
                  <div className="flex-1">
                    <div className="flex items-center gap-2 flex-wrap">
                      <h3 className="text-lg font-bold text-slate-900">{app.program}</h3>
                      <StatusBadge status={app.status} />
                    </div>
                    <div className="flex items-center gap-3 mt-2 text-sm text-slate-500">
                      <span className="inline-block bg-slate-100 text-slate-600 text-xs px-2 py-0.5 rounded">{app.category}</span>
                      <span>Submitted {formatShort(app.submittedDate)}</span>
                      <span>Updated {formatShort(app.statusDate)}</span>
                    </div>

                    {/* Progress steps */}
                    <div className="flex items-center gap-1 mt-4">
                      {["Submitted", "Under Review", "Decision"].map((step, i) => {
                        const stepStatuses = ["pending", "under-review", "approved"]
                        const currentIndex = stepStatuses.indexOf(app.status)
                        const isComplete = i <= currentIndex
                        const isCurrent = i === currentIndex
                        return (
                          <div key={step} className="flex items-center gap-1 flex-1">
                            <div className={`w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold shrink-0 ${isComplete ? "bg-slate-900 text-white" : "bg-slate-200 text-slate-500"
                              }`}>
                              {isComplete ? <CheckCircle2 className="w-4 h-4" /> : i + 1}
                            </div>
                            <span className={`text-xs font-medium ${isCurrent ? "text-slate-900" : "text-slate-400"}`}>{step}</span>
                            {i < 2 && <div className={`flex-1 h-0.5 mx-1 ${isComplete && i < currentIndex ? "bg-slate-900" : "bg-slate-200"}`} />}
                          </div>
                        )
                      })}
                    </div>

                    <div className="mt-4 bg-slate-50 border border-slate-100 rounded-md p-3">
                      <p className="text-sm text-slate-700 flex items-start gap-1.5">
                        <ArrowRight className="w-4 h-4 text-slate-400 mt-0.5 shrink-0" />
                        <strong className="font-semibold">Next step:</strong> {app.nextStep}
                      </p>
                    </div>
                  </div>
                  <div className="text-right shrink-0">
                    <p className="text-xs text-slate-400">Application ID</p>
                    <p className="text-sm font-mono font-bold text-slate-700">{app.id}</p>
                    <button className="mt-3 box-button text-xs py-1.5 px-3">
                      <MessageSquare className="w-3.5 h-3.5 inline mr-1" /> Contact
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* ============================================================ */}
        {/* MY REPORTS TAB                                                */}
        {/* ============================================================ */}
        {activeTab === "reports" && (
          <div className="space-y-6">
            <div className="flex items-center justify-between">
              <h2 className="text-2xl font-bold text-slate-900">My Reports & Requests</h2>
              <button className="box-button-primary text-sm py-2 px-4 flex items-center gap-1.5">
                <Plus className="w-4 h-4" /> New Report
              </button>
            </div>

            {myReports.map((r) => (
              <div key={r.id} className="bg-white rounded-md border border-slate-200 shadow-sm p-6">
                <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3">
                  <div>
                    <div className="flex items-center gap-2 flex-wrap">
                      <h3 className="font-bold text-lg text-slate-900">{r.type}</h3>
                      <StatusBadge status={r.status} />
                    </div>
                    <p className="text-sm text-slate-500 flex items-center gap-1.5 mt-2">
                      <MapPin className="w-4 h-4 text-slate-400" /> {r.location}
                    </p>
                    <p className="text-sm text-slate-500 mt-1">Submitted {formatShort(r.submittedDate)}</p>
                    <div className="mt-3 bg-slate-50 border border-slate-100 rounded-md p-3">
                      <p className="text-sm text-slate-700"><strong>Latest update:</strong> {r.lastUpdate}</p>
                    </div>
                  </div>
                  <p className="text-xs font-mono text-slate-400 shrink-0">{r.id}</p>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* ============================================================ */}
        {/* SAVED RESOURCES TAB                                           */}
        {/* ============================================================ */}
        {activeTab === "saved" && (
          <div className="space-y-6">
            <div className="flex items-center justify-between">
              <h2 className="text-2xl font-bold text-slate-900">Saved Resources</h2>
              <Link href="/resources" className="box-button-primary text-sm py-2 px-4 flex items-center gap-1.5">
                <Search className="w-4 h-4" /> Find More
              </Link>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {mySavedResources.map((r) => (
                <div key={r.id} className="bg-white rounded-md border border-slate-200 shadow-sm p-5">
                  <div className="flex items-start justify-between gap-2">
                    <h3 className="font-bold text-slate-900">{r.name}</h3>
                    <button className="text-blue-700 hover:text-red-500 transition" title="Remove from saved">
                      <BookmarkCheck className="w-5 h-5" />
                    </button>
                  </div>
                  <span className="inline-block bg-slate-100 text-slate-600 text-xs px-2 py-0.5 rounded mt-2">{r.category}</span>
                  <div className="mt-3 space-y-1 text-sm text-slate-600">
                    <p className="flex items-center gap-1.5"><MapPin className="w-4 h-4 text-slate-400" /> {r.address}</p>
                    <p className="flex items-center gap-1.5"><Clock className="w-4 h-4 text-slate-400" /> {r.hours}</p>
                    <p className="font-medium">{r.phone}</p>
                  </div>
                  <div className="flex gap-2 mt-4">
                    <a href={`tel:${r.phone}`} className="flex-1 box-button-primary text-xs py-2 text-center">Call</a>
                    <button className="flex-1 box-button text-xs py-2">Directions</button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

      </div>
    </div>
  )
}
