import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import SectionTitle from '@/components/section-title';

export default function FeaturedInitiatives() {
    return (
        <section className="bg-secondary">
            <div className="container-page pb-16">
                <SectionTitle title="City Initiatives" linkText="All Initiatives" linkHref="/main/news" pbClass="pb-6" />

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-0 box-card !p-0 overflow-hidden border-none shadow-xl">
                    <div className="relative min-h-[300px] lg:min-h-[450px]">
                        {/* eslint-disable-next-line @next/next/no-img-element */}
                        <img
                            src="https://images.unsplash.com/photo-1480714378408-67cf0d13bc1b?auto=format&fit=crop&q=80&w=1000"
                            alt="City skyline representing new initiatives"
                            className="absolute inset-0 w-full h-full object-cover"
                        />
                    </div>
                    <div className="p-8 md:p-14 flex flex-col justify-center bg-[var(--primary)] text-white">
                        <span className="text-sm font-bold uppercase tracking-widest text-blue-200 mb-4">Mayoral Initiative</span>
                        <h3 className="text-3xl md:text-5xl font-bold mb-6 text-white leading-tight">
                            Building a Greener, More Sustainable City for Tomorrow
                        </h3>
                        <p className="text-blue-50 text-lg mb-10 leading-relaxed font-medium">
                            Our new comprehensive climate action plan commits to reducing carbon emissions by 40% over the next decade. Learn about the new zero-waste programs, expanded green spaces, and renewable energy grants available to residents.
                        </p>
                        <div>
                            <Link href="/main/news" className="box-button !bg-white !text-[var(--primary)] !border-transparent hover:!bg-gray-100 inline-flex items-center gap-3">
                                Learn about the Climate Plan
                                <ArrowRight className="w-5 h-5" strokeWidth={2.5} />
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
