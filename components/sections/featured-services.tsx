"use client"

import React from 'react';
import Link from 'next/link';
import SectionTitle from "@/components/section-title"
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
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle title="Popular services" linkText="View all services" linkHref="/main/services" />

        {/* Services Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <Link
                key={index}
                href={service.href}
                className="group block"
                style={{ textDecoration: 'none' }}
              >
                <div 
                  className="h-full flex flex-col backdrop-blur-[12.5px] border-2 transition-all duration-300"
                  style={{
                    backgroundColor: 'hsla(0, 0%, 100%, 0.749)',
                    borderColor: '#ddd',
                    borderRadius: '8px',
                    padding: '16px',
                    boxShadow: '4px 4px 12px 0px rgba(0, 0, 0, 0.2)',
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.backgroundColor = '#fff';
                    e.currentTarget.style.borderColor = '#555';
                    e.currentTarget.style.borderRadius = '16px';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.backgroundColor = 'hsla(0, 0%, 100%, 0.749)';
                    e.currentTarget.style.borderColor = '#ddd';
                    e.currentTarget.style.borderRadius = '8px';
                  }}
                >
                  <div className="mb-4 flex justify-center">
                    <div className="rounded-full p-3" style={{ backgroundColor: '#f0f0f0' }}>
                      <IconComponent 
                        style={{ 
                          width: '40px', 
                          height: '40px', 
                          strokeWidth: 1.5,
                          color: '#051adb'
                        }} 
                      />
                    </div>
                  </div>
                  <div className="flex items-center justify-between gap-3 flex-1">
                    <div className="min-w-0 flex-1">
                      <h3 
                        className="clash-grotesk font-medium leading-[1.25]" 
                        style={{ 
                          fontSize: '22px',
                          letterSpacing: '0.01em',
                          wordBreak: 'break-word',
                          hyphens: 'auto'
                        }}
                      >
                        {service.title}
                      </h3>
                      {service.description && (
                        <p 
                          className="mt-2 text-slate-600 leading-snug line-clamp-2" 
                          style={{ fontSize: '14px' }}
                        >
                          {service.description}
                        </p>
                      )}
                    </div>
                    <ChevronRight 
                      className="flex-shrink-0" 
                      style={{ width: '24px', height: '24px', strokeWidth: 2 }}
                    />
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}
