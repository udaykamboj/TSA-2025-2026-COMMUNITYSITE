"use client"

import { motion } from "framer-motion"
import Header from "@/components/layout/header"
import Footer from "@/components/layout/footer"

import Link from 'next/link'

const codeStackText = `This website utilizes Next.js, a modern framework built on top of React optimized for efficiency and fast render times. On top of this, this website utilizes Tailwind CSS, a framework allowing for shorthand CSS to be written directly in components, as well as Radix UI, a library of unstyled, accessible components for building high‑quality design systems and web apps. Non-standard components and the theming of the site are done by our team to match our specific community resource hub needs. We use Supabase to deal with authentication and database storage.`

const libraries = [
  { name: 'lucide-react', desc: 'A library of icons for use in React applications.' },
  { name: 'framer-motion', desc: 'A library for creating animations in React applications.' },
  { name: 'three.js (via react-three-fiber)', desc: 'A library for creating 3D graphics in React applications.' },
  { name: 'embla-carousel-react', desc: 'A library for creating carousels in React applications.' },
  { name: 'radix-ui', desc: 'An open-source UI component library for building high-quality, accessible design systems and web apps.' },
  { name: 'supabase-js', desc: 'Used for authentication and database storage.' },
  { name: 'react-hook-form', desc: 'Performant, flexible and extensible forms with easy-to-use validation.' },
  { name: 'zod', desc: 'TypeScript-first schema declaration and validation library.' },
  { name: 'recharts', desc: 'A composable charting library built on React components.' },
  { name: 'zustand', desc: 'A small, fast and scalable bearbones state-management solution.' },
  { name: '@dnd-kit/core', desc: 'A lightweight, performant, accessible and extensible drag & drop toolkit for React.' },
  { name: 'vercel', desc: 'Used for hosting and deploying the website with seamless integration for Next.js applications.' },
]

const imageLinks = [
  'https://unsplash.com/photos/landscape-photo-of-new-york-empire-state-building-5omwAMDxmkU',
  'https://unsplash.com/photos/cloud-gate-in-city-during-daytime-cfmSStcrDn4',
  'https://unsplash.com/photos/green-palm-tree-and-city-view-UZVlSjrIJ3o',
  'https://unsplash.com/photos/high-rise-buildings-during-daytime-UmEYn_GYqFo',
  'https://unsplash.com/photos/a-pile-of-different-types-of-vegetables-on-a-white-surface-5aJVJvJ9rG8',
  'https://en.wikipedia.org/wiki/The_Washington_Post#/media/File:The_Logo_of_The_Washington_Post_Newspaper.svg',
  'https://en.wikipedia.org/wiki/Forbes#/media/File:Forbes_logo.svg',
  'https://en.wikipedia.org/wiki/File:The_Guardian_2018.svg',
  'https://en.wikipedia.org/wiki/Today_(American_TV_program)#/media/File:Today_2023.svg',
  'https://en.wikipedia.org/wiki/Los_Angeles_Times#/media/File:Los_Angeles_Times_logo.svg',
  'https://en.wikipedia.org/wiki/File:NewYorkTimes.svg',
  'https://www.pexels.com/photo/an-aerial-shot-of-a-busy-road-7358771/',
  'https://unsplash.com/photos/1486406146926-c627a92ad1ab',
  'https://unsplash.com/photos/1544620347-c4fd4a3d5957',
  'https://unsplash.com/photos/1576091160399-112ba8d25d1d',
  'https://unsplash.com/photos/white-rice-with-sliced-strawberries-and-brown-nuts-on-white-ceramic-plate-5pk7ZB1xyjU',
  'https://unsplash.com/photos/green-and-brown-vegetable-on-white-ceramic-plate-7GO11y7bznw',
  'https://unsplash.com/photos/cooked-foods-WmKXu-bzygo',
  'https://unsplash.com/photos/a-blue-bowl-filled-with-vegetables-and-a-wooden-spoon-yhc4pSbl01A',
  'https://unsplash.com/photos/bowl-of-vegetable-salads-IGfIGP5ONV0',
  'https://unsplash.com/photos/noddles-on-black-bowl-V82GYnR98lY',
  'https://unsplash.com/photos/fried-rice-with-green-vegetable-on-brown-ceramic-plate-708OpfCW4H8',
  'https://unsplash.com/photos/empty-table-and-chairs-inside-building-ZgREXhl8ER0',
  'https://unsplash.com/photos/a-hand-holding-a-wrap-filled-with-lettuce-and-sauce-wqo9gl7UiOc',
  'https://unsplash.com/photos/sliced-lemon-and-green-leaves-on-brown-wooden-chopping-board-xpd-3kwh6ww',
  'https://unsplash.com/photos/sliced-tomato-and-green-vegetable-salad-OgbVYramPh8',
  'https://unsplash.com/photos/a-bowl-of-cereal-with-berries-bananas-and-other-fruits-AqlcqCzF3aQ',
  'https://unsplash.com/photos/a-couple-of-people-sitting-at-a-table-in-a-restaurant-YduJNHSnJUU',
  'https://unsplash.com/photos/long-stem-wine-glass-on-brown-wooden-table-with-chairs-rOqhhJUf7Ew',
  'https://unsplash.com/photos/a-room-filled-with-lots-of-wooden-tables-and-chairs-7CV0-H5qHRk',
  'https://www.freepik.com/free-photo/arrangement-different-foods-ingredients_12690806.htm',
  'https://unsplash.com/photos/photo-of-white-building-j5K6ambkGNk',
  'https://unsplash.com/photos/group-of-person-on-store-UDNsmriCntM',
  'https://unsplash.com/photos/woman-taking-picture-of-neon-signage-rIfanjzQfeU',
  'https://unsplash.com/photos/worms-view-of-glass-building-6Mhb55ddt9I',
  'https://unsplash.com/photos/a-statue-of-a-lion-qya3dQM0HP0',
  'https://unsplash.com/photos/city-skyline-during-night-time-6MxW0gR6VMo',
  'https://unsplash.com/photos/two-boats-are-docked-in-a-river-in-a-city-2J6a-2ZO_HA',
  'https://unsplash.com/photos/aerial-view-of-city-buildings-during-daytime-FD-gzGKS5sY',
  'https://unsplash.com/photos/a-group-of-people-in-a-park-h9lmvT1D7lc',
  'https://unsplash.com/photos/people-on-street-near-building-EGzyJk2juPo',
  'https://unsplash.com/photos/a-city-square-with-a-fountain-surrounded-by-tall-buildings-Y8RNCrzIeoI',
  'https://unsplash.com/photos/public-market-center-signage-xsqF178XAhk',
  'https://unsplash.com/photos/space-needle-tower-at-night-QfhbK2pY0Ao',
  'https://unsplash.com/photos/a-large-wooden-sculpture-hanging-from-the-ceiling-of-a-building-3zyo0eJF1-A',
  'https://unsplash.com/photos/a-ferris-wheel-sitting-on-top-of-a-pier-next-to-a-body-of-water-Zxzjayu7ON8',
  'https://unsplash.com/photos/cooked-food-in-black-cooking-pot-eEWlcfydzQ4',
  'https://unsplash.com/photos/pesto-pasta-garnished-with-basil-and-cheese-1aidrXyeuLs',
  'https://unsplash.com/photos/red-liquid-in-clear-drinking-glass-rJJuQjPsSLk',
  'https://unsplash.com/photos/green-liquid-in-clear-drinking-glass-Rd_cmQWnCaM',
  'https://unsplash.com/photos/strawberry-juice-in-clear-drinking-glass-05PIGVqLvY4',
  'https://unsplash.com/photos/man-in-red-shirt-holding-white-textile-hcET0JIGXoI',
  'https://unsplash.com/photos/man-in-black-nike-jacket-wearing-white-cap-SiQgni-cqFg',
  'https://unsplash.com/photos/a-man-cooking-food-in-a-kitchen-wNQoaYCFcsI',
  'https://canva.com',
  'https://unsplash.com/photos/a-white-trailer-parked-next-to-a-table-and-chairs-RE7R7Aj1aew',
  'https://unsplash.com/photos/grayscale-photo-of-desk-globe-TH7TW20de9s',
  'https://unsplash.com/photos/green-plant-x8ZStukS2PM',
  'https://unsplash.com/photos/grass-field-IQVFVH0ajag',
  'https://unsplash.com/photos/barn-on-green-field-YvvHEQNgMcU',
  'https://unsplash.com/photos/house-and-trees-J82dSkOxvY8',
  'https://unsplash.com/photos/farm-with-cornfield-near-road-during-daytime-HGJqVcbQLgk',
]

const researchLinks = [
  'https://www.mdanderson.org/publications/focused-on-health/5-benefits-of-a-plant-based-diet.h20-1592991.html',
  'https://www.hitchcockfarms.com/blog/farm-to-table-movement',
  'https://www.sare.org/resources/farm-to-table-building-local-and-regional-food-systems/',
  'https://www.myplate.gov/eat-healthy/what-is-myplate',
  'https://www.w3.org/WAI/WCAG22/quickref/',
  'https://www.nytimes.com/2023/03/14/dining/zero-waste-cooking.html',
  'https://sdgs.un.org/topics/sustainable-transport',
  'https://www.bothellwa.gov/',
  'https://millcreekwa.gov/home',
]

export default function ReferencePage() {

  return (
    <div className="min-h-screen flex flex-col bg-background text-foreground">
      <Header />

      <div className="w-full max-w-4xl mx-auto px-4 pt-12 pb-4">
        <motion.section
          className="relative rounded-2xl overflow-hidden px-6 py-10 md:px-10 md:py-12 mb-8"
          style={{
            background: "linear-gradient(135deg, #2E7D52 0%, #4cc388 100%)",
          }}
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="relative z-10 text-white">
            <h1 className="text-3xl font-bold md:text-4xl mb-3 drop-shadow-sm" style={{ textShadow: "0 1px 2px rgba(0,0,0,0.2)" }}>
              References
            </h1>
            <p className="text-base md:text-lg text-white/90 max-w-2xl">
              Libraries, assets, and research used in building this platform.
            </p>
          </div>
        </motion.section>
      </div>

      <section className="py-8 bg-background pt-0">
        <div className="container-narrow">

          <motion.div
            className="space-y-12 mt-12"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
          >
            {/* Required Forms Section */}
            <div className="space-y-4">
              <h2 className="text-3xl font-bold text-secondary border-b border-border pb-4 font-playfair uppercase tracking-wide">
                Required Forms
              </h2>
              <ul className="space-y-4">
                <li className="flex flex-col sm:flex-row sm:items-center justify-between bg-muted/50 p-6 rounded-lg border border-border">
                  <span className="font-bold text-lg mb-4 sm:mb-0">Student Copyright Checklist (PDF)</span>
                  <Link href="/docs/student-copyright-checklist.pdf" target="_blank" rel="noopener noreferrer" className="box-button-primary inline-flex justify-center text-center">
                    Open Document
                  </Link>
                </li>
                <li className="flex flex-col sm:flex-row sm:items-center justify-between bg-muted/50 p-6 rounded-lg border border-border">
                  <span className="font-bold text-lg mb-4 sm:mb-0">Work Log (PDF)</span>
                  <Link href="/docs/work-log.pdf" target="_blank" rel="noopener noreferrer" className="box-button-primary inline-flex justify-center text-center">
                    Open Document
                  </Link>
                </li>
              </ul>
            </div>

            {/* Code Stack Section */}
            <div className="space-y-4">
              <h2 className="text-3xl font-bold text-secondary border-b border-border pb-4 font-playfair uppercase tracking-wide">
                Code Stack
              </h2>
              <p className="text-lg leading-relaxed text-secondary/90">
                {codeStackText}
              </p>
            </div>

            {/* Additional Libraries Utilized Section */}
            <div className="space-y-4 text-secondary/90">
              <h2 className="text-3xl font-bold text-secondary border-b border-border pb-4 font-playfair uppercase tracking-wide">
                Additional Libraries Utilized
              </h2>
              <ul className="list-disc pl-5 mt-4 space-y-2">
                {libraries.map((lib, i) => (
                  <li key={i} className="text-lg">
                    <span className="font-semibold text-primary">{lib.name}:</span> {lib.desc}
                  </li>
                ))}
              </ul>

              <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mt-8">
                {libraries.map((lib, i) => (
                  <div key={i} className="bg-muted text-secondary font-mono text-sm px-4 py-3 rounded-md border border-border">
                    {lib.name}
                  </div>
                ))}
              </div>
            </div>

            {/* Image Links Section */}
            <div className="space-y-4">
              <h2 className="text-3xl font-bold text-secondary border-b border-border pb-4 font-playfair uppercase tracking-wide">
                Image Links
              </h2>
              <p className="text-lg text-secondary/90 mb-4">
                All images rely on either the Unsplash, Canva License, or Creative Commons Sharealike (+ Attribution) license, or are otherwise public domain.
              </p>
              <ul className="space-y-2 pl-0 list-none break-all">
                {imageLinks.map((url, i) => (
                  <li key={i}>
                    <a href={url} target="_blank" rel="noopener noreferrer" className="text-primary hover:text-accent hover:underline transition-colors text-base font-medium">
                      {url}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Research Links Section */}
            <div className="space-y-4">
              <h2 className="text-3xl font-bold text-secondary border-b border-border pb-4 font-playfair uppercase tracking-wide">
                Research Links
              </h2>
              <ul className="space-y-2 pl-0 list-none break-all">
                {researchLinks.map((url, i) => (
                  <li key={i}>
                    <a href={url} target="_blank" rel="noopener noreferrer" className="text-primary hover:text-accent hover:underline transition-colors text-base font-medium">
                      {url}
                    </a>
                  </li>
                ))}
              </ul>
            </div>



          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  )
}

