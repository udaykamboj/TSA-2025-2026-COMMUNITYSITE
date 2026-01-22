"use client"

import Header from '@/components/header'
import Footer from '@/components/footer'
import SectionTitle from '@/components/section-title'
import Link from 'next/link'

const PUBLIC_IMAGES = [
  'city-government-meeting.jpg',
  'diverse-community-helping-each-other.jpg',
  'education-funding.jpg',
  'healthcare-services.jpg',
  'holiday-food-distribution.jpg',
  'job-fair-event.jpg',
  'mental-health-workshop.jpg',
  'new-community-center.jpg',
  'placeholder-logo.png',
  'placeholder-logo.svg',
  'placeholder-user.jpg',
  'placeholder.jpg',
  'placeholder.svg',
  'public-transit.jpg',
  'winter-coat-giveaway.jpg',
  'winter-weather-preparation.jpg',
  'youth-employment.jpg',
]

export default function ReferencePage() {
  const sources = [
    { title: 'Project sample data (local)', href: '/lib/sample-data.ts', desc: 'Local sample data and resource listings used to populate the site during development.' },
    { title: 'Sample resources (local)', href: '/lib/sample-resources.ts', desc: 'Example resource entries used across the Resources pages.' },
    { title: 'Unsplash (images)', href: 'https://unsplash.com', desc: 'Images used in examples. Unsplash images are used under the Unsplash license.' },
    { title: 'Google Fonts', href: 'https://fonts.google.com', desc: 'Fonts used in the site.' },
    { title: 'Tailwind CSS', href: 'https://tailwindcss.com', desc: 'Utility-first CSS framework used for site styling.' },
    { title: 'Next.js', href: 'https://nextjs.org', desc: 'Framework used to build and serve the site.' },
  ]

  const libraries = [
    { name: 'next', href: 'https://nextjs.org/' },
    { name: 'react', href: 'https://react.dev/' },
    { name: 'react-dom', href: 'https://react.dev/' },
    { name: 'tailwindcss', href: 'https://tailwindcss.com/' },
    { name: 'lucide-react', href: 'https://lucide.dev/' },
    { name: '@react-three/fiber', href: 'https://docs.pmnd.rs/react-three-fiber/getting-started/introduction' },
    { name: 'three', href: 'https://threejs.org/' },
    { name: 'embla-carousel-react', href: 'https://www.embla-carousel.com/' },
    { name: 'react-big-calendar', href: 'https://github.com/jquense/react-big-calendar' },
    { name: 'react-day-picker', href: 'https://react-day-picker.js.org/' },
    { name: 'react-hook-form', href: 'https://react-hook-form.com/' },
    { name: 'zod', href: 'https://github.com/colinhacks/zod' },
    { name: 'recharts', href: 'https://recharts.org/' },
    { name: 'clsx', href: 'https://github.com/lukeed/clsx' },
    { name: 'class-variance-authority', href: 'https://cva.style/' },
    { name: '@vercel/analytics', href: 'https://vercel.com/docs/analytics' },
    { name: 'next-themes', href: 'https://github.com/pacocoursey/next-themes' },
    { name: 'sonner', href: 'https://github.com/sonner-ui/sonner' },
  ]

  const externalExampleImages = [
    'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&h=600&fit=crop',
    'https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?w=800&h=600&fit=crop',
    'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=800&h=600&fit=crop',
  ]

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Header />

    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle title="Reference Page" />

          <div className="space-y-6">
            <div className="text-slate-700">This page lists sources, permissions, and required forms used to create the website. </div>

            {/* Single big card: Sources */}
            <div className="bg-white rounded-md shadow-sm border border-slate-100 p-6">
              <h3 className="text-xl font-semibold mb-3">Sources</h3>
              <ul className="list-disc pl-5 space-y-2">
                {sources.map((s) => (
                  <li key={s.title} className="text-sm">
                    <a href={s.href} target="_blank" rel="noopener noreferrer" className="font-medium text-slate-900 hover:underline">{s.title}</a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Single big card: Libraries (synced to package.json) */}
            <div className="bg-white rounded-md shadow-sm border border-slate-100 p-6">
              <h3 className="text-xl font-semibold mb-3">Libraries & Packages (project dependencies)</h3>
              <ul className="list-disc pl-5 space-y-2">
                {libraries.map((lib) => (
                  <li key={lib.name}>
                    <a href={lib.href} target="_blank" rel="noopener noreferrer" className="font-medium text-slate-900 hover:underline">{lib.name}</a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Images section: links to public images and external examples */}
            <div className="bg-white rounded-md shadow-sm border border-slate-100 p-6">
              <h3 className="text-xl font-semibold mb-3">Images</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">


                <div>
                  <ul className="list-disc pl-5 space-y-1 text-sm">
                    {externalExampleImages.map((url, i) => (
<li key={i} className="text-slate-800 break-all">
  {url}
</li>
                ))}
                  </ul>
                </div>
              </div>
            </div>

            {/* Permissions & Required forms remain as a single card */}
            <div className="bg-white rounded-md shadow-sm border border-slate-100 p-6">
              <h3 className="font-semibold mb-2">Permissions & Copyright</h3>
              <div className="space-y-2 text-sm text-slate-600 mb-4">
                <p>Images used in this project are Sourced from Unsplash under the <a href="https://unsplash.com/license" target="_blank" rel="noopener noreferrer" className="text-blue-600">Unsplash License</a>. Any third-party copyrighted text, audio, or other media used are documented here along with written permission where required.</p>
                <p>Icons are provided by Lucide and other icon sets included in <code className="bg-slate-50 px-1 rounded">package.json</code>. </p>
              </div>


            </div>

            <div className="bg-white rounded-md shadow-sm border border-slate-100 p-6">

              <h3 className="font-semibold mb-2">Required Forms</h3>
              <ul className="space-y-2">
                <li className="flex items-center justify-between">
                  <div>
                    <div className="font-medium">Student Copyright Checklist (PDF)</div>
                  </div>
                  <Link href="/docs/student-copyright-checklist.pdf" target="_blank" rel="noopener noreferrer" className="px-3 py-2 bg-blue-600 text-white rounded-md">
                    Open
                  </Link>
                </li>

                <li className="flex items-center justify-between">
                  <div>
                    <div className="font-medium">Work Log (PDF)</div>
                  </div>
                  <Link href="/docs/work-log.pdf" target="_blank" rel="noopener noreferrer" className="px-3 py-2 bg-blue-600 text-white rounded-md">
                    Open
                  </Link>
                </li>
              </ul>
                        </div>

          </div>
          </div>
        </section>


      <Footer />
    </div>
  )
}
