"use client"

import React from 'react';
import Link from 'next/link';
import { motion } from "framer-motion"
import SectionTitle from "@/components/section-title"
import { staggerContainer, staggerItem } from "@/lib/animations"
import { ChevronRight, Car, Volume2, Trash2, AlertCircle, Home, FileText, DollarSign, ShoppingBag, Vote, Construction } from 'lucide-react';
import { pagesConfig } from '@/lib/content/pages-config';
import type { LucideIcon } from 'lucide-react';

const slugToIcon: Record<string, LucideIcon> = {
  'parking-or-camera-tickets': Car,
  'noise-complaint': Volume2,
  'get-rid-of-waste': Trash2,
  'illegal-parking-complaint': AlertCircle,
  'apartment-complaint': Home,
  'birth-certificates': FileText,
  'rent-increase-help': DollarSign,
  'snap-benefits': ShoppingBag,
  'voter-registration': Vote,
  'report-pothole-or-street-issue': Construction,
};

/** Slugs to show on the home page (8 = two full rows, max 4 per row); rest via "View all services". */
const FEATURED_SERVICE_SLUGS = [
  'parking-or-camera-tickets',
  'snap-benefits',
  'birth-certificates',
  'voter-registration',
  'get-rid-of-waste',
  'apartment-complaint',
  'rent-increase-help',
  'report-pothole-or-street-issue',
];

const allServices = pagesConfig.map((page) => ({
  title: page.title,
  description: page.description,
  href: `/main/${page.slug}`,
  icon: slugToIcon[page.slug] ?? FileText,
}));

const services = allServices.filter((s) => {
  const slug = s.href.replace('/main/', '')
  return FEATURED_SERVICE_SLUGS.includes(slug)
});

export default function PopularServices() {
  return (
    <section className="py-24 bg-card">
      <div className="w-full max-w-7xl mx-auto px-4 md:px-8">
        <SectionTitle title="Popular services" linkText="View all services" linkHref="/main/services" pbClass="" />

        {/* Services Grid */}
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-px bg-slate-200 border border-slate-200 shadow-sm mt-12"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
        >
          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <motion.div key={index} variants={staggerItem} whileHover={{ y: -4, scale: 1.02 }} whileTap={{ scale: 0.98 }}>
              <Link
                href={service.href}
                className="group block bg-white hover:bg-primary transition-colors duration-300 ease-in-out relative flex flex-col items-center text-center justify-end p-10 h-full"
              >
                <div className="mb-6 flex justify-center text-primary group-hover:text-white transition-colors duration-300">
                  <IconComponent
                    style={{
                      width: '48px',
                      height: '48px',
                      strokeWidth: 1.5,
                    }}
                  />
                </div>
                <h3 className="font-poppins font-semibold text-xl text-secondary group-hover:text-white transition-colors duration-300 leading-tight">
                  {service.title}
                </h3>

                {/*
                <div className="mt-auto pt-6 text-primary group-hover:text-white transition-colors duration-300">
                  <span className="inline-flex items-center uppercase tracking-widest text-xs font-bold font-poppins">
                    Explore <ChevronRight className="ml-1 w-4 h-4" />
                  </span>
                </div>*/}
              </Link>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
