"use client";
import { Badge } from "@/components/ui/badge";
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import {
    TrendingUp,
    Target,
    Globe,
    Users,
    BarChart3,
    CheckCircle,
    ChevronLeft,
    ChevronRight,
} from "lucide-react";
import Link from "next/link";
import { useState, useRef, useCallback } from "react";

const services = [
    {
        icon: <TrendingUp className="h-8 w-8 text-white" />,
        title: "Fundraising & Investor Strategy",
        link: "#gaming",
        description: "End-to-end fundraising support from deck refinement to investor introductions, backed by deep venture and PE experience.",
        bullets: [
            "Deck refinement & narrative framing",
            "Investor targeting & warm introductions",
            "Portfolio advisory for VCs & angels",
        ],
    },
    {
        icon: <Target className="h-8 w-8 text-white" />,
        title: "Go-to-Market & Ecosystem Launch",
        link: "#gtm",
        description: "Strategic market entry that delivers real traction through brand positioning, growth loops, and ecosystem activation.",
        bullets: [
            "Brand positioning & content strategy",
            "KOL activations & community building",
            "Partnership & conference strategy",
        ],
    },
    {
        icon: <Globe className="h-8 w-8 text-white" />,
        title: "Public Relations & Narrative Strategy",
        link: null,
        description: "KPI-backed media strategies that secure coverage in top-tier publications and build trust with key stakeholders.",
        bullets: [
            "Tier-1 media placements & coverage",
            "Podcast bookings & speaking slots",
            "Twitter/X Spaces & thought leadership",
        ],
    },
    {
        icon: <Users className="h-8 w-8 text-white" />,
        title: "Corporate & Investor Services",
        link: null,
        description: "Institutional-grade advisory for M&A strategy, investor communications, and portfolio-level strategic planning.",
        bullets: [
            "M&A strategy & deal planning",
            "Token treasury management",
            "Strategic outreach & partnerships",
        ],
    },
    {
        icon: <BarChart3 className="h-8 w-8 text-white" />,
        title: "Financial Modeling & Valuation",
        link: "#ma",
        description: "Investor-grade financial models and valuations that translate complex tokenomics into actionable business insight.",
        bullets: [
            "Tokenomics & revenue modeling",
            "Strategic business cases",
            "Board-level financial analysis",
        ],
    },
];

export function ServicesSection() {
    const scrollRef = useRef<HTMLDivElement>(null);

    const scrollToCard = useCallback((direction: 'next' | 'prev') => {
        if (!scrollRef.current) return;
        
        const container = scrollRef.current;
        const cardWidth = container.offsetWidth * 0.85; // 85% of container width
        const scrollAmount = direction === 'next' ? cardWidth : -cardWidth;
        
        // Check if we need to loop
        if (direction === 'next' && container.scrollLeft >= container.scrollWidth - container.offsetWidth - 10) {
            // At the end, scroll to beginning
            container.scrollTo({ left: 0, behavior: 'auto' });
        } else if (direction === 'prev' && container.scrollLeft <= 10) {
            // At the beginning, scroll to end
            container.scrollTo({ left: container.scrollWidth, behavior: 'auto' });
        } else {
            // Normal scroll
            container.scrollBy({ left: scrollAmount, behavior: 'smooth' });
        }
    }, []);

    return (
        <section id="services" className="py-24 bg-white/60 backdrop-blur-sm">
            <div className="container mx-auto px-4 lg:px-6">
                <div className="text-center space-y-6 mb-20">
                    <Badge className="bg-gradient-to-r from-neutral-100 to-stone-100 text-neutral-800 border-0 px-6 py-3 text-sm font-semibold rounded-full">
                        Our Services
                    </Badge>
                    <h2 className="text-4xl lg:text-6xl font-bold text-neutral-900 tracking-tight">
                        Strategic Advisory That Drives Growth
                    </h2>
                    <p className="text-xl text-neutral-600 max-w-4xl mx-auto font-light leading-relaxed">
                        From fundraising to go-to-market, we design strategies
                        around what actually drives growth — in revenue, users,
                        markets, and reputation.
                    </p>
                </div>

                {/* Mobile Swipe Carousel */}
                <div className="block md:hidden mt-24 sm:mt-32 relative">
                    {/* Left Arrow */}
                    <button
                        className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-black text-white p-3 rounded-full opacity-80 hover:opacity-100 transition-opacity"
                        onClick={() => scrollToCard('prev')}
                        aria-label="Previous Service"
                    >
                        <ChevronLeft size={20} />
                    </button>
                    {/* Right Arrow */}
                    <button
                        className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-black text-white p-3 rounded-full opacity-80 hover:opacity-100 transition-opacity"
                        onClick={() => scrollToCard('next')}
                        aria-label="Next Service"
                    >
                        <ChevronRight size={20} />
                    </button>
                    <div 
                        ref={scrollRef}
                        className="flex overflow-x-auto snap-x snap-mandatory scroll-smooth gap-4 px-4"
                        style={{ WebkitOverflowScrolling: "touch" }}
                    >
                        {services.map((service) => (
                            <div key={service.title} className="min-w-[85%] snap-center flex-shrink-0">
                                <Card className="bg-white/90 backdrop-blur-sm border-0 shadow-xl rounded-3xl group transition-all duration-500 cursor-pointer h-full">
                                    <CardHeader className="pb-6">
                                        <div className="w-16 h-16 bg-gradient-to-br from-neutral-700 to-neutral-800 rounded-3xl flex items-center justify-center mb-6 shadow-lg group-hover:scale-110 transition-transform duration-300">
                                            {service.icon}
                                        </div>
                                        <CardTitle className="text-neutral-900 text-xl font-bold">
                                            {service.title}
                                        </CardTitle>
                                        <CardDescription className="text-neutral-600 text-base font-light leading-relaxed">
                                            {service.description}
                                        </CardDescription>
                                    </CardHeader>
                                    <CardContent>
                                        <ul className="space-y-4 text-neutral-600">
                                            {service.bullets.map((b) => (
                                                <li key={b} className="flex items-center text-base">
                                                    <CheckCircle className="h-5 w-5 text-emerald-500 mr-4 flex-shrink-0" />
                                                    {b}
                                                </li>
                                            ))}
                                        </ul>
                                    </CardContent>
                                </Card>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Desktop Grid */}
                <div className="hidden md:grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {services.map((service) => (
                        <div key={service.title}>
                            <Card className="bg-white/90 backdrop-blur-sm border-0 shadow-xl rounded-3xl group transition-all duration-500 hover:scale-105 cursor-pointer">
                                <CardHeader className="pb-6">
                                    <div className="w-16 h-16 bg-gradient-to-br from-neutral-700 to-neutral-800 rounded-3xl flex items-center justify-center mb-6 shadow-lg group-hover:scale-110 transition-transform duration-300">
                                        {service.icon}
                                    </div>
                                    <CardTitle className="text-neutral-900 text-xl font-bold">
                                        {service.title}
                                    </CardTitle>
                                    <CardDescription className="text-neutral-600 text-base font-light leading-relaxed">
                                        {service.description}
                                    </CardDescription>
                                </CardHeader>
                                <CardContent>
                                    <ul className="space-y-4 text-neutral-600">
                                        {service.bullets.map((b) => (
                                            <li key={b} className="flex items-center text-base">
                                                <CheckCircle className="h-5 w-5 text-emerald-500 mr-4 flex-shrink-0" />
                                                {b}
                                            </li>
                                        ))}
                                    </ul>
                                </CardContent>
                            </Card>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
