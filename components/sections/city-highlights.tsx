import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import SectionTitle from '@/components/section-title';

const highlights = [
    {
        title: "Summer Youth Employment Program",
        description: "Applications are now open for the summer youth employment program. Residents ages 14-24 can apply for six weeks of paid work.",
        image: "https://images.unsplash.com/photo-1529390079861-591de354faf5?auto=format&fit=crop&q=80&w=800",
        linkText: "Apply Now",
        href: "/main/services"
    },
    {
        title: "New Affordable Housing Portals",
        description: "The city has launched a streamlined application process for affordable housing lotteries. Check your eligibility and apply online.",
        image: "https://images.unsplash.com/photo-1460472178825-e5240623afd5?auto=format&fit=crop&q=80&w=800",
        linkText: "Check Eligibility",
        href: "/main/services"
    },
    {
        title: "Public Transit Expansion",
        description: "Service increases and new rapid bus routes are taking effect this month. View the updated schedules to plan your commute.",
        image: "https://images.unsplash.com/photo-1570183350293-19ce16a8d6e3?auto=format&fit=crop&q=80&w=800",
        linkText: "View Schedules",
        href: "/main/services"
    }
];

export default function CityHighlights() {
    return (
        <section className="bg-white">
            <div className="container-page pb-16">
                <SectionTitle title="City Highlights" linkText="View all updates" linkHref="/main/news" />

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {highlights.map((item, idx) => (
                        <div key={idx} className="box-card !p-0 overflow-hidden flex flex-col group hover:border-[var(--primary)] transition-colors">
                            <div className="relative h-60 overflow-hidden">
                                {/* eslint-disable-next-line @next/next/no-img-element */}
                                <img
                                    src={item.image}
                                    alt={item.title}
                                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                                />
                            </div>
                            <div className="p-8 flex flex-col flex-1">
                                <h3 className="text-2xl font-bold mb-4 text-foreground group-hover:text-[var(--primary)] transition-colors leading-tight">
                                    {item.title}
                                </h3>
                                <p className="text-gray-600 dark:text-gray-400 mb-8 flex-1 font-medium leading-relaxed">
                                    {item.description}
                                </p>
                                <Link href={item.href} className="text-[var(--primary)] font-bold text-lg flex items-center gap-2 hover:underline">
                                    {item.linkText}
                                    <ArrowRight strokeWidth={2.5} className="w-5 h-5 transition-transform group-hover:translate-x-1" />
                                </Link>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}
