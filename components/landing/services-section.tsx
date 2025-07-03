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
        description: "Structured capital raise support: decks, targeting, and warm intros.",
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
        description: "Strategic GTM with brand positioning and partner activations.",
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
        description: "KPI-driven PR with top-tier media building stakeholder trust.",
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
        description: "M&A advisory and investor communications for growth.",
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
        description: "Data-driven valuations that align with investor criteria.",
        bullets: [
            "Tokenomics & revenue modeling",
            "Strategic business cases",
            "Board-level financial analysis",
        ],
    },
];

function MobileServiceDropdown({ icon, title, description, bullets }: { icon: React.ReactNode, title: string, description: string, bullets: string[] }) {
    const [open, setOpen] = useState(false);
    return (
        <div className="mb-4">
            <button
                className="w-full flex items-center gap-4 py-4 px-4 bg-white/90 rounded-2xl shadow group border border-neutral-200 focus:outline-none focus:ring-2 focus:ring-emerald-300 transition"
                onClick={() => setOpen((o) => !o)}
                aria-expanded={open}
            >
                <span className="w-12 h-12 flex items-center justify-center bg-gradient-to-br from-neutral-700 to-neutral-800 rounded-2xl shadow-lg">
                    {icon}
                </span>
                <span className="flex-1 text-left text-lg font-bold text-neutral-900">{title}</span>
                <span className={`ml-2 transform transition-transform duration-200 ${open ? 'rotate-90' : ''}`}>▶</span>
            </button>
            {open && (
                <div className="px-4 pb-4 pt-2">
                    <div className="text-neutral-600 text-base font-light leading-relaxed mb-2">{description}</div>
                    <ul className="space-y-3 text-neutral-600">
                        {bullets.map((b) => (
                            <li key={b} className="flex items-center text-base">
                                <CheckCircle className="h-5 w-5 text-emerald-500 mr-3 flex-shrink-0" />
                                {b}
                            </li>
                        ))}
                    </ul>
                </div>
            )}
        </div>
    );
}

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
        <section id="services" className="pt-20 pb-24 bg-white/60 backdrop-blur-sm">
            <div className="container mx-auto px-4 lg:px-6">
                <div className="text-center space-y-6 mb-20">
                    <Badge className="bg-gradient-to-r from-neutral-100 to-stone-100 text-neutral-800 border-0 px-6 py-3 text-sm font-semibold rounded-full">
                        Our Services
                    </Badge>
                    <h2 className="text-4xl lg:text-6xl font-bold text-neutral-900 tracking-tight">
                        Strategic Advisory That Drives Growth
                    </h2>
                    <p className="text-xl text-neutral-600 max-w-4xl mx-auto font-light leading-relaxed">
                    We shape fundraising and go-to-market plans that deliver revenue, users, and market presence.
                    </p>
                </div>

                {/* Mobile Swipe Carousel replaced with vertical dropdown list */}
                <div className="block md:hidden mt-10 sm:mt-12">
                    {services.map((service) => (
                        <MobileServiceDropdown
                            key={service.title}
                            icon={service.icon}
                            title={service.title}
                            description={service.description}
                            bullets={service.bullets}
                        />
                    ))}
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
