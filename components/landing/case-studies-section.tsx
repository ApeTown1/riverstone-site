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
import { useState, useEffect, useRef } from "react";

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
    const sectionRef = useRef<HTMLDivElement>(null);

    const goToNext = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % caseStudiesData.length);
    };

    const goToPrev = () => {
        setCurrentIndex(
            (prevIndex) =>
                (prevIndex - 1 + caseStudiesData.length) % caseStudiesData.length
        );
    };

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
                <div className="text-center space-y-6 mb-10 md:mb-14">
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

                <div className="relative flex items-center justify-center min-h-[630px] md:min-h-[750px] lg:min-h-[810px]">
                    {/* Left Arrow */}
                    <button
                        onClick={goToPrev}
                        className="absolute left-0 top-1/2 -translate-y-1/2 z-30 p-2 rounded-full bg-white/50 hover:bg-white/90 transition-all duration-300 opacity-70 hover:opacity-100"
                        aria-label="Previous Case Study"
                    >
                        <ChevronLeft className="h-6 w-6 text-neutral-800" />
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
                                    transform: "translate(-50%, -50%) scale(1)",
                                    filter: "none",
                                };
                            } else if (isPrev) {
                                style = {
                                    zIndex: 10,
                                    opacity: 0.5,
                                    pointerEvents: "none",
                                    transform: "translate(-80%, -50%) scale(0.85)",
                                    filter: "blur(2px)",
                                };
                            } else if (isNext) {
                                style = {
                                    zIndex: 10,
                                    opacity: 0.5,
                                    pointerEvents: "none",
                                    transform: "translate(-20%, -50%) scale(0.85)",
                                    filter: "blur(2px)",
                                };
                            }
                            return (
                                <div key={study.id} className={base} style={style}>
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
                        className="absolute right-0 top-1/2 -translate-y-1/2 z-30 p-2 rounded-full bg-white/50 hover:bg-white/90 transition-all duration-300 opacity-70 hover:opacity-100"
                        aria-label="Next Case Study"
                    >
                        <ChevronRight className="h-6 w-6 text-neutral-800" />
                    </button>
                </div>
            </div>
        </section>
    );
}
