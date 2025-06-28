"use client";

import { Badge } from "@/components/ui/badge";
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import { CheckCircle, Target, ChevronLeft, ChevronRight } from "lucide-react";
import { useState, useEffect, useRef, useCallback } from "react";

const caseStudiesData = [
    {
        id: "gtm",
        badge: "Cross-Chain Staking Infrastructure / DeFi / AI",
        category: "Full-Service GTM",
        title: "All-Inclusive Go-to-Market Mastery",
        description: "A DeFi startup leveraging AI-driven automation needed comprehensive support to transform product development into market success.",
        challenge: "Technical founders struggled to juggle product development with fundraising, branding, and market entry demands. They risked losing traction while being bogged down by tasks outside their expertise.",
        solution: [
            "Brand narrative and website development",
            "On-ground support at Token2049 Dubai",
            "Customer pipeline development",
            "Social media management and rebranding",
            "Warm investor introductions",
        ],
        impact: "Strong traction in investor meetings, bustling customer and partner pipeline, and controlled public narrative. Founders stayed focused on product development and deal closures while Riverstone's round-the-clock support provided cost-effective peace of mind.",
        gradient: "from-emerald-50/80 to-green-50/80",
        badgeGradient: "from-emerald-100 to-green-100",
        badgeColor: "text-emerald-800",
        iconBg: "from-emerald-600 to-emerald-700",
        categoryColor: "from-emerald-700 to-emerald-800",
    },
    {
        id: "ma",
        badge: "On-Chain Credit / a16z Portfolio Company",
        category: "Strategic Growth",
        title: "M&A Mediation as a Strategic Growth Catalyst",
        description: "An Andreessen Horowitz (a16z) portfolio company making credit more accessible, transparent, and programmable by bringing debt infrastructure on-chain needed to decide: acquire a target company or build a new business unit internally?",
        challenge: "The client needed a decision framework, not just a valuation. Should they acquire to leverage licensing and technology, or build internally at a slower but more controlled pace?",
        solution: [
            "Mediated buyer-seller communication",
            "Full-spectrum due diligence coordination",
            "Dynamic decision modeling (acquire vs. build)",
            "Strategic guidance and executive insights",
        ],
        impact: "Riverstone enabled a clear, confident decision aligned with long-term goals. What began as M&A mediation turned into a strategic partnership. Today, we continue to support their growth journey through research, advisory, and special projects.",
        gradient: "from-stone-50/80 to-neutral-50/80",
        badgeGradient: "from-stone-100 to-neutral-100",
        badgeColor: "text-stone-800",
        iconBg: "from-neutral-700 to-neutral-800",
        categoryColor: "from-neutral-800 to-neutral-900",
    },
    {
        id: "gaming",
        badge: "Gaming & TON Ecosystem",
        category: "$10M Raise",
        title: "Building a Financial Narrative for a Raise in Gaming",
        description: "A high-potential Web3 gaming startup in the TON ecosystem needed to justify a $100M valuation to professional investors—and they needed it fast.",
        challenge: "How could they justify a nine-figure valuation to professional investors? How could they present both revenue potential and token dynamics without overwhelming stakeholders? All in under a week.",
        solution: [
            "Vision translation into credible financial narrative",
            "Web2/Web3 comparable benchmarking",
            "Dual revenue modeling (product + token)",
            "Dynamic investor-ready financial model",
        ],
        impact: "In seven days, Riverstone delivered a complete valuation and fundraising toolkit. The financial model became a core component of the investor pitch, helping founders move conversations forward with clarity and confidence. The $10M raise became not only credible but compelling.",
        gradient: "from-neutral-50/80 to-stone-50/80",
        badgeGradient: "from-neutral-100 to-stone-100",
        badgeColor: "text-neutral-800",
        iconBg: "from-neutral-700 to-neutral-800",
        categoryColor: "from-neutral-800 to-neutral-900",
    },
];

export function CaseStudiesSection() {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [mobileActiveIndex, setMobileActiveIndex] = useState(0);
    const sectionRef = useRef<HTMLDivElement>(null);
    const scrollRef = useRef<HTMLDivElement>(null);

    const goToNext = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % caseStudiesData.length);
    };

    const goToPrev = () => {
        setCurrentIndex(
            (prevIndex) =>
                (prevIndex - 1 + caseStudiesData.length) % caseStudiesData.length
        );
    };

    const scrollToCard = useCallback((direction: number) => {
        if (!scrollRef.current) return;
        
        const container = scrollRef.current;
        const firstChild = container.firstChild as HTMLElement;
        const cardWidth = firstChild?.clientWidth || 0;
        
        // Scroll exactly one card
        container.scrollBy({ left: cardWidth * direction, behavior: "smooth" });
        
        // Update active index
        let newIndex = mobileActiveIndex + direction;
        
        // Handle continuous loop
        if (newIndex >= caseStudiesData.length) {
            newIndex = 0;
            // Reset to first card after scroll completes
            setTimeout(() => {
                container.scrollTo({ left: 0, behavior: "instant" });
            }, 300);
        } else if (newIndex < 0) {
            newIndex = caseStudiesData.length - 1;
            // Scroll to last card after scroll completes
            setTimeout(() => {
                container.scrollTo({ left: cardWidth * (caseStudiesData.length - 1), behavior: "instant" });
            }, 300);
        }
        
        setMobileActiveIndex(newIndex);
    }, [mobileActiveIndex]);

    useEffect(() => {
        function handleSelectCaseStudy(e: any) {
            if (typeof e.detail?.idx === 'number') {
                setCurrentIndex(e.detail.idx);
                setTimeout(() => {
                    sectionRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
                }, 50);
            }
        }
        window.addEventListener('selectCaseStudy', handleSelectCaseStudy);
        if (window.location.hash === '#case-studies') {
            const params = new URLSearchParams(window.location.search);
            const idx = params.get('card');
            if (idx && !isNaN(Number(idx))) {
                setCurrentIndex(Number(idx));
            }
            setTimeout(() => {
                sectionRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }, 50);
        }
        return () => window.removeEventListener('selectCaseStudy', handleSelectCaseStudy);
    }, []);

    return (
        <section
            id="case-studies"
            ref={sectionRef}
            className="py-16 md:py-20 bg-gradient-to-br from-neutral-50 to-stone-50"
        >
            <div className="container mx-auto px-4 lg:px-6">
                <div className="text-center space-y-6 mb-8">
                    <Badge className="bg-gradient-to-r from-emerald-100 to-green-100 text-emerald-800 border-0 px-6 py-3 text-sm font-semibold rounded-full">
                        Case Studies
                    </Badge>
                    <h2 className="text-4xl lg:text-6xl font-bold text-neutral-900 tracking-tight">
                        Driving Impact Through Financial Expertise
                    </h2>
                    <p className="text-xl text-neutral-600 max-w-4xl mx-auto font-light leading-relaxed">
                        Discover how Riverstone helps innovative companies
                        overcome complex financial and strategic challenges. Our
                        case studies highlight tailored strategies, actionable
                        insights, and measurable results.
                    </p>
                </div>

                {/* Mobile Swipe Carousel */}
                <div className="block md:hidden mt-24 sm:mt-32 relative">
                    {/* Left Arrow */}
                    <button
                        className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-black text-white p-3 rounded-full opacity-80 hover:opacity-100 transition-opacity"
                        onClick={() => scrollToCard(-1)}
                        aria-label="Previous Case Study"
                    >
                        <ChevronLeft size={20} />
                    </button>
                    {/* Right Arrow */}
                    <button
                        className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-black text-white p-3 rounded-full opacity-80 hover:opacity-100 transition-opacity"
                        onClick={() => scrollToCard(1)}
                        aria-label="Next Case Study"
                    >
                        <ChevronRight size={20} />
                    </button>
                    <div 
                        ref={scrollRef}
                        className="flex overflow-x-auto snap-x snap-mandatory scroll-smooth gap-4"
                        style={{ WebkitOverflowScrolling: "touch" }}
                    >
                        {caseStudiesData.map((study) => (
                            <div key={study.id} className="min-w-[90%] max-w-[90%] max-h-[80vh] snap-center mx-auto p-6 overflow-y-auto rounded-3xl shadow-xl flex-shrink-0">
                                <Card
                                    id={study.id}
                                    className={`bg-gradient-to-br ${study.gradient} backdrop-blur-sm border-0 shadow-xl rounded-3xl overflow-hidden transition-all duration-500 w-full flex flex-col h-full`}
                                >
                                    <CardHeader className="bg-white/95 backdrop-blur-sm p-6 flex-shrink-0">
                                        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-4 gap-2">
                                            <Badge
                                                className={`bg-gradient-to-r ${study.badgeGradient} ${study.badgeColor} border-0 px-4 py-2 text-xs font-semibold rounded-full w-fit`}
                                            >
                                                {study.badge}
                                            </Badge>
                                            <div
                                                className={`text-lg font-bold bg-gradient-to-r ${study.categoryColor} bg-clip-text text-transparent`}
                                            >
                                                {study.category}
                                            </div>
                                        </div>
                                        <CardTitle className="text-lg font-bold leading-tight break-words text-neutral-900 mb-3">
                                            {study.title}
                                        </CardTitle>
                                        <CardDescription className="text-sm leading-relaxed break-words text-neutral-600 font-light">
                                            {study.description}
                                        </CardDescription>
                                    </CardHeader>
                                    <CardContent className="space-y-6 p-6 overflow-y-auto flex-1">
                                        <div className="space-y-6">
                                            <div className="space-y-4">
                                                <h4 className="font-semibold text-neutral-900 flex items-center text-sm">
                                                    <div
                                                        className={`w-6 h-6 bg-gradient-to-br ${study.iconBg} rounded-lg flex items-center justify-center mr-3`}
                                                    >
                                                        <Target className="h-3 w-3 text-white" />
                                                    </div>
                                                    The Challenge
                                                </h4>
                                                <p className="text-sm leading-relaxed break-words text-neutral-600 font-light">
                                                    {study.challenge}
                                                </p>
                                            </div>
                                            <div className="space-y-4">
                                                <h4 className="font-semibold text-neutral-900 flex items-center text-sm">
                                                    <div
                                                        className="w-6 h-6 bg-gradient-to-br from-emerald-600 to-emerald-700 rounded-lg flex items-center justify-center mr-3"
                                                    >
                                                        <CheckCircle className="h-3 w-3 text-white" />
                                                    </div>
                                                    The Solution
                                                </h4>
                                                <ul className="text-sm leading-relaxed break-words text-neutral-600 space-y-2 font-light">
                                                    {study.solution.map((item) => (
                                                        <li key={item}>• {item}</li>
                                                    ))}
                                                </ul>
                                            </div>
                                        </div>
                                        <div className="bg-white/90 backdrop-blur-sm p-4 rounded-xl border border-neutral-100/50 shadow-lg">
                                            <h4 className="font-semibold text-neutral-900 mb-3 text-sm">
                                                The Impact
                                            </h4>
                                            <p className="text-sm leading-relaxed break-words text-neutral-600 font-light">
                                                {study.impact}
                                            </p>
                                        </div>
                                    </CardContent>
                                </Card>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Desktop Roulette Carousel */}
                <div className="hidden md:block relative mt-32 md:mt-40 lg:mt-48 xl:mt-56">
                    <div className="relative flex items-center justify-center min-h-[350px] md:min-h-[630px] lg:min-h-[810px]">
                        {/* Left Arrow */}
                        <button
                            onClick={goToPrev}
                            className="absolute left-0 top-1/2 -translate-y-1/2 z-30 p-2 rounded-full bg-black hover:bg-neutral-800 transition-all duration-300 opacity-70 hover:opacity-100"
                            aria-label="Previous Case Study"
                        >
                            <ChevronLeft className="h-6 w-6 text-white" />
                        </button>

                        {/* Cards */}
                        <div className="relative w-full flex items-center justify-center h-full max-w-5xl mx-auto">
                            {caseStudiesData.map((study, index) => {
                                const isActive = index === currentIndex;
                                const isPrev =
                                    index ===
                                    (currentIndex - 1 + caseStudiesData.length) %
                                        caseStudiesData.length;
                                const isNext =
                                    index === (currentIndex + 1) % caseStudiesData.length;

                                let base = "absolute left-1/2 top-1/2 w-full max-w-4xl px-2 transition-all duration-500 ease-in-out flex justify-center items-center";
                                let style: React.CSSProperties = {
                                    zIndex: 0,
                                    opacity: 0,
                                    pointerEvents: "none",
                                    transform: "translate(-50%, -50%) scale(0.7)",
                                    filter: "blur(4px)",
                                };
                                if (isActive) {
                                    style = {
                                        zIndex: 20,
                                        opacity: 1,
                                        pointerEvents: "auto",
                                        transform: "translate(-50%, -50%) scale(0.9)",
                                        filter: "none",
                                    };
                                    // Responsive scaling
                                    base += " scale-90 sm:scale-95 md:scale-100";
                                } else if (isPrev) {
                                    style = {
                                        zIndex: 10,
                                        opacity: 0.5,
                                        pointerEvents: "none",
                                        transform: "translate(-80%, -50%) scale(0.85)",
                                        filter: "blur(2px)",
                                    };
                                    base += " scale-90 sm:scale-95 md:scale-100";
                                } else if (isNext) {
                                    style = {
                                        zIndex: 10,
                                        opacity: 0.5,
                                        pointerEvents: "none",
                                        transform: "translate(-20%, -50%) scale(0.85)",
                                        filter: "blur(2px)",
                                    };
                                    base += " scale-90 sm:scale-95 md:scale-100";
                                }
                                return (
                                    <div key={study.id} className={base + " scale-90 sm:scale-95 md:scale-100"} style={style}>
                                        <Card
                                            id={study.id}
                                            className={`bg-gradient-to-br ${study.gradient} backdrop-blur-sm border-0 shadow-2xl rounded-3xl overflow-hidden transition-all duration-500 w-full max-w-5xl flex flex-col`}
                                        >
                                            <CardHeader className="bg-white/95 backdrop-blur-sm p-8 md:p-10">
                                <div className="flex items-center justify-between mb-6">
                                                    <Badge
                                                        className={`bg-gradient-to-r ${study.badgeGradient} ${study.badgeColor} border-0 px-6 py-3 text-sm font-semibold rounded-full`}
                                                    >
                                                        {study.badge}
                                    </Badge>
                                                    <div
                                                        className={`text-3xl font-bold bg-gradient-to-r ${study.categoryColor} bg-clip-text text-transparent`}
                                                    >
                                                        {study.category}
                                    </div>
                                </div>
                                <CardTitle className="text-3xl text-neutral-900 mb-4">
                                                    {study.title}
                                </CardTitle>
                                <CardDescription className="text-neutral-600 text-xl font-light leading-relaxed">
                                                    {study.description}
                                </CardDescription>
                            </CardHeader>
                                            <CardContent className="space-y-8 p-8 md:p-10">
                                                <div className="grid md:grid-cols-2 gap-8 md:gap-12">
                                    <div className="space-y-6">
                                                        <h4 className="font-semibold text-neutral-900 flex items-center text-xl text-[65%] md:text-base">
                                                            <div
                                                                className={`w-8 h-8 bg-gradient-to-br ${study.iconBg} rounded-xl flex items-center justify-center mr-3`}
                                                            >
                                                <Target className="h-4 w-4 text-white" />
                                            </div>
                                            The Challenge
                                        </h4>
                                                        <p className="text-neutral-600 leading-relaxed font-light text-[65%] md:text-base">
                                                            {study.challenge}
                                    </p>
                                    </div>
                                    <div className="space-y-6">
                                                        <h4 className="font-semibold text-neutral-900 flex items-center text-xl text-[65%] md:text-base">
                                                            <div
                                                                className="w-8 h-8 bg-gradient-to-br from-emerald-600 to-emerald-700 rounded-xl flex items-center justify-center mr-3"
                                                            >
                                                <CheckCircle className="h-4 w-4 text-white" />
                                            </div>
                                            The Solution
                                        </h4>
                                                        <ul className="text-neutral-600 space-y-3 font-light text-[65%] md:text-base">
                                                            {study.solution.map((item) => (
                                                                <li key={item}>• {item}</li>
                                                            ))}
                                    </ul>
                                    </div>
                                </div>
                                                <div className="bg-white/90 backdrop-blur-sm p-6 md:p-8 rounded-2xl border border-neutral-100/50 shadow-lg">
                                                    <h4 className="font-semibold text-neutral-900 mb-4 text-xl text-[65%] md:text-base">
                                        The Impact
                                    </h4>
                                                    <p className="text-neutral-600 leading-relaxed font-light text-[65%] md:text-base">
                                                        {study.impact}
                                    </p>
                                </div>
                            </CardContent>
                        </Card>
                                    </div>
                                );
                            })}
                                </div>

                        {/* Right Arrow */}
                        <button
                            onClick={goToNext}
                            className="absolute right-0 top-1/2 -translate-y-1/2 z-30 p-2 rounded-full bg-black hover:bg-neutral-800 transition-all duration-300 opacity-70 hover:opacity-100"
                            aria-label="Next Case Study"
                        >
                            <ChevronRight className="h-6 w-6 text-white" />
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
}
