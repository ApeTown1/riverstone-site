"use client";

import { Badge } from "@/components/ui/badge";
import {
    Card,
    CardContent,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import { CheckCircle, Target, ChevronLeft, ChevronRight } from "lucide-react";
import { useState, useEffect, useRef, useCallback } from "react";

const caseStudiesData = [
    {
        id: "polli",
        logoHref: "https://www.polli.co/",
        logoSrc: "https://www.polli.co/wp-content/uploads/2025/06/logo.svg",
        logoAlt: "Polli",
        logoDarkBg: false,
        tags: ["DeFi", "Staking Infrastructure", "Solana · Cosmos · Avalanche"],
        badge: "Equity Investor",
        headline: "From Staking Platform to Market Presence — Built From the Ground Up",
        hook: "We came in as advisors. We stayed as investors.",
        challenge: "Polli had built a genuinely differentiated staking optimisation platform — solving real inefficiencies in the validator market across Solana, Cosmos, and Avalanche. The product was strong. The problem was everything around it: no marketing infrastructure, no community presence, no investor narrative. The founders needed a partner who could own growth end-to-end while they stayed focused on building.",
        solution: "We ran a full-stack GTM from scratch. That meant managing KOL campaigns across 30-50 influencers, building alpha group partnerships across three ecosystems, taking ownership of social media and narrative development, co-marketing with Lava, Kii, and Osmosis, executing conference strategy at Cosmoverse and Breakpoint 2025, and building investor materials and warm introductions in parallel. Nothing was handed off. We owned it.",
        impact: "A growing investor pipeline. An activated KOL network. A community presence built from zero. And — after an extended embedded partnership — a direct equity stake from Riverstone. That last part matters: we don’t take equity in clients. We took it in Polli because we believed in the founders and the market. That’s what genuine alignment looks like.",
        serviceTags: ["Go-to-Market", "Growth Strategy", "Fundraising", "KOL & Community", "Equity Investment"],
        gradient: "from-emerald-50/80 to-green-50/80",
        darkGradient: "dark:from-emerald-950/80 dark:to-green-950/80",
        badgeGradient: "from-emerald-100 to-green-100",
        badgeColor: "text-emerald-800",
        iconBg: "from-emerald-600 to-emerald-700",
        tagBg: "bg-emerald-100 text-emerald-700",
        serviceTagBg: "bg-emerald-50 text-emerald-700 border border-emerald-200",
    },
    {
        id: "bolt",
        logoHref: "https://www.boltliquidity.io/",
        logoSrc: "https://cdn.prod.website-files.com/6759a9322ea96cfd6c863f39/67a249bd2b5352d8e0a6a432_H%20Lockup.svg",
        logoAlt: "Bolt",
        logoDarkBg: false,
        tags: ["DeFi", "Trading Infrastructure"],
        badge: "BD Partnership",
        headline: "Embedding Into the DeFi Ecosystem — BD That Actually Closes",
        hook: "In DeFi, the window to establish position doesn’t stay open long. We moved fast.",
        challenge: "Bolt needed more than a BD hire — it needed someone with the ecosystem relationships and commercial instincts to open the right doors and convert conversations into live integrations, quickly. In DeFi, growth is won through partnerships. Speed and network are everything.",
        solution: "We took full ownership of BD strategy and pipeline. That meant active sourcing of protocol integrations across the DeFi ecosystem, liquidity partnership facilitation with foundations and institutional players, and a performance-linked deal structure that tied our incentives directly to outcomes — not hours.",
        impact: "An active, growing pipeline. Riverstone isn’t a vendor on this engagement — we’re an embedded partner. The difference shows in the results.",
        serviceTags: ["Business Development", "Ecosystem Integrations", "GTM", "Liquidity Strategy"],
        gradient: "from-sky-50/80 to-blue-50/80",
        darkGradient: "dark:from-sky-950/80 dark:to-blue-950/80",
        badgeGradient: "from-sky-100 to-blue-100",
        badgeColor: "text-sky-800",
        iconBg: "from-sky-600 to-blue-700",
        tagBg: "bg-sky-100 text-sky-700",
        serviceTagBg: "bg-sky-50 text-sky-700 border border-sky-200",
    },
    {
        id: "zynta",
        logoHref: "https://zynta.com/",
        logoSrc: "https://zynta.com/wp-content/uploads/2025/06/zynta-logo.svg",
        logoAlt: "Zynta",
        logoDarkBg: false,
        tags: ["Cross-Border Payments", "Regulated Stablecoin Infrastructure"],
        badge: "Fundraising & GTM",
        headline: "Institutional Positioning and Capital for the Next Generation of Cross-Border Finance",
        hook: "A credible business needed an institutional voice. We built it.",
        challenge: "Zynta is building regulated stablecoin rails for cross-border payments across Africa, Canada, and the EU. A real business in a large, underserved market — but without the institutional narrative or investor relationships to match its ambition. They needed both a sharper story and the right capital behind them.",
        solution: "We built the institutional narrative from the ground up — messaging architecture across enterprise, regulated FI, and public sector audiences. Then we ran the full fundraising process: pitch materials, investor positioning, curated introductions to strategic and corporate investors, and end-to-end process management.",
        impact: "Strategic and corporate investment secured. The raise is closed. Riverstone continues to support Zynta as it scales GTM and expands into new corridors. This is what we mean by staying in the room.",
        serviceTags: ["Fundraising & Investor Strategy", "Narrative Development", "Institutional Positioning"],
        gradient: "from-amber-50/80 to-orange-50/80",
        darkGradient: "dark:from-amber-950/80 dark:to-orange-950/80",
        badgeGradient: "from-amber-100 to-orange-100",
        badgeColor: "text-amber-800",
        iconBg: "from-amber-600 to-orange-600",
        tagBg: "bg-amber-100 text-amber-700",
        serviceTagBg: "bg-amber-50 text-amber-700 border border-amber-200",
    },
    {
        id: "brilla",
        logoHref: "https://brila.finance/",
        logoSrc: "/truefi_1.png",
        logoAlt: "TrueFi",
        logoDarkBg: false,
        tags: ["On-Chain Credit", "a16z Portfolio Company"],
        badge: "M&A Advisory",
        headline: "M&A Mediation as a Strategic Growth Catalyst",
        hook: "An a16z portfolio company needed a decision, not a deck. We delivered one.",
        challenge: "A leading on-chain credit protocol backed by Andreessen Horowitz faced a pivotal strategic question: acquire a target company to accelerate its roadmap, or build the capability internally? They needed a structured framework, a defensible valuation, and someone to sit in the room and guide the negotiation to a confident outcome.",
        solution: "We built the full decision architecture: business valuation, multi-scenario sensitivity analysis, dynamic acquire-vs-build modelling, mediation between buyer and seller through the negotiation, data room coordination, and legal team alignment. Every moving part, covered.",
        impact: "A clear, confident decision — aligned with long-term strategic goals and made with full analytical backing. What started as M&A advisory became a standing partnership. TrueFi continues to work with Riverstone on research, strategy, and special projects.",
        serviceTags: ["M&A Advisory", "Financial Modelling", "Corporate Strategy", "Due Diligence"],
        gradient: "from-stone-50/80 to-neutral-50/80",
        darkGradient: "dark:from-stone-900/80 dark:to-neutral-900/80",
        badgeGradient: "from-stone-100 to-neutral-100",
        badgeColor: "text-stone-800",
        iconBg: "from-neutral-700 to-neutral-800",
        tagBg: "bg-stone-100 text-stone-700",
        serviceTagBg: "bg-stone-50 text-stone-700 border border-stone-200",
    },
    {
        id: "ice",
        logoHref: "https://ice.io/",
        logoSrc: "https://ice.io/wp-content/uploads/2024/04/ion-logo-white.png",
        logoAlt: "Ice Open Network",
        logoDarkBg: true,
        tags: ["Web3 Gaming", "TON Ecosystem"],
        badge: "$10M Raise",
        headline: "Building the Financial Narrative That Made a Nine-Figure Valuation Credible",
        hook: "Seven days. One financial model. A $10M raise.",
        challenge: "A high-potential Web3 gaming startup in the TON ecosystem needed to justify a $100M valuation to professional investors — in under a week. The ask was complex: model both token dynamics and product revenue, benchmark against Web2 and Web3 comparables, and present it in a way that sophisticated investors would find credible rather than inflated.",
        solution: "Full valuation discovery across three methodologies: revenue-based, asset-based, and hybrid. Web2 and Web3 comparable benchmarking. A dual revenue model covering product revenue and token dynamics. A dynamic, investor-ready financial model built for real-time scenario adjustments. And narrative integration — valuation findings woven directly into the investor pitch.",
        impact: "Delivered in seven days. The model became a core component of the investor pitch — giving the founders the confidence and clarity to move conversations forward. The raise closed at $10M. The valuation held.",
        serviceTags: ["Financial Modelling & Valuation", "Tokenomics", "Investor Materials"],
        gradient: "from-neutral-50/80 to-stone-50/80",
        darkGradient: "dark:from-neutral-900/80 dark:to-stone-900/80",
        badgeGradient: "from-neutral-100 to-stone-100",
        badgeColor: "text-neutral-800",
        iconBg: "from-slate-700 to-slate-800",
        tagBg: "bg-neutral-200 text-neutral-700",
        serviceTagBg: "bg-neutral-100 text-neutral-700 border border-neutral-200",
    },
];

function ClientLogo({ study, className }: { study: typeof caseStudiesData[0]; className?: string }) {
    return (
        <a
            href={study.logoHref}
            target="_blank"
            rel="noopener noreferrer"
            className={`inline-flex items-center shrink-0 ${className ?? ""}`}
            onClick={(e) => e.stopPropagation()}
        >
            <span className="bg-neutral-100 dark:bg-neutral-700 rounded-lg px-4 py-2 inline-flex items-center" style={{ maxHeight: "56px" }}>
                <img
                    src={study.logoSrc}
                    alt={study.logoAlt}
                    style={{ maxHeight: "32px", width: "auto", objectFit: "contain", display: "block" }}
                />
            </span>
        </a>
    );
}

function MobileDropdown({ label, children }: { label: string; children: React.ReactNode }) {
    const [open, setOpen] = useState(false);
    return (
        <div className="mb-2">
            <button
                className="w-full flex justify-between items-center py-2 px-3 bg-neutral-100 dark:bg-neutral-800 rounded-lg font-semibold text-neutral-800 dark:text-neutral-200 text-left focus:outline-none focus:ring-2 focus:ring-emerald-300 transition"
                onClick={() => setOpen((o) => !o)}
                aria-expanded={open}
            >
                <span>{label}</span>
                <span className={`transform transition-transform duration-200 ${open ? 'rotate-90' : ''}`}>▶</span>
            </button>
            {open && (
                <div className="mt-2 px-2 pb-2 dark:bg-neutral-800 dark:rounded-lg dark:text-white">{children}</div>
            )}
        </div>
    );
}

export function CaseStudiesSection() {
    const [currentIndex, setCurrentIndex] = useState(3);
    const [mobileActiveIndex, setMobileActiveIndex] = useState(3);
    const sectionRef = useRef<HTMLDivElement>(null);
    const scrollRef = useRef<HTMLDivElement>(null);
    const desktopContainerRef = useRef<HTMLDivElement>(null);
    const cardRefs = useRef<(HTMLDivElement | null)[]>([]);

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

        container.scrollBy({ left: cardWidth * direction, behavior: "smooth" });

        let newIndex = mobileActiveIndex + direction;

        if (newIndex >= caseStudiesData.length) {
            newIndex = 0;
            setTimeout(() => {
                container.scrollTo({ left: 0, behavior: "instant" });
            }, 300);
        } else if (newIndex < 0) {
            newIndex = caseStudiesData.length - 1;
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

    useEffect(() => {
        // Scroll mobile carousel to initial mobileActiveIndex on mount
        const container = scrollRef.current;
        if (!container || mobileActiveIndex === 0) return;
        const firstChild = container.firstChild as HTMLElement;
        if (!firstChild) return;
        const cardWidth = firstChild.clientWidth;
        container.scrollTo({ left: cardWidth * mobileActiveIndex, behavior: "instant" });
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    useEffect(() => {
        const container = desktopContainerRef.current;
        if (!container) return;

        const updateHeight = () => {
            const activeEl = cardRefs.current[currentIndex];
            if (!activeEl) return;
            // Cards are scaled to 0.9 visually, so visual height = offsetHeight * 0.9
            container.style.minHeight = `${activeEl.offsetHeight * 0.9 + 32}px`;
        };

        updateHeight();
        window.addEventListener("resize", updateHeight);
        return () => window.removeEventListener("resize", updateHeight);
    }, [currentIndex]);

    return (
        <section
            id="case-studies"
            ref={sectionRef}
            className="py-16 md:py-20 bg-gradient-to-br from-neutral-50 to-stone-50 dark:from-neutral-950 dark:to-neutral-950"
        >
            <div className="container mx-auto px-4 lg:px-6">
                <div className="text-center space-y-6 mb-8">
                    <Badge className="bg-gradient-to-r from-emerald-100 to-green-100 text-emerald-800 border-0 px-6 py-3 text-sm font-semibold rounded-full">
                        Case Studies
                    </Badge>
                    <h2 className="text-4xl lg:text-6xl font-bold text-neutral-900 dark:text-white tracking-tight">
                        Driving Impact Through Financial Expertise
                    </h2>
                    <p className="text-xl text-neutral-600 dark:text-neutral-300 max-w-4xl mx-auto font-light leading-relaxed">
                        Case studies showcasing bespoke strategies, actionable insight, and proven outcomes.
                    </p>
                </div>

                {/* Mobile Swipe Carousel */}
                <div className="block md:hidden mt-10 sm:mt-12 relative">
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
                            <div key={study.id} className="min-w-[90%] max-w-[90%] snap-center mx-auto p-4 flex-shrink-0">
                                <Card
                                    id={study.id}
                                    className={`bg-gradient-to-br ${study.gradient} backdrop-blur-sm border-0 shadow-xl rounded-3xl overflow-hidden transition-all duration-500 w-full flex flex-col min-h-[70vh]`}
                                >
                                    <CardHeader className="bg-white/95 dark:bg-neutral-800/95 backdrop-blur-sm p-6 flex-shrink-0">
                                        {/* Logo row */}
                                        <div className="flex items-start justify-between mb-3 gap-2">
                                            <ClientLogo study={study} />
                                            <Badge
                                                className={`bg-gradient-to-r ${study.badgeGradient} ${study.badgeColor} dark:from-neutral-700 dark:to-neutral-700 dark:text-neutral-100 border-0 px-2 py-1 text-[0.6rem] font-semibold rounded-full shrink-0`}
                                            >
                                                {study.badge}
                                            </Badge>
                                        </div>
                                        {/* Sector tags */}
                                        <div className="flex flex-wrap gap-1.5 mb-3">
                                            {study.tags.map((tag) => (
                                                <span
                                                    key={tag}
                                                    className={`px-2 py-0.5 text-[0.6rem] font-semibold rounded-full ${study.tagBg}`}
                                                >
                                                    {tag}
                                                </span>
                                            ))}
                                        </div>
                                        <CardTitle className="text-lg font-bold leading-tight break-words hyphens-auto text-neutral-900 dark:text-white">
                                            {study.headline}
                                        </CardTitle>
                                        <p className="text-sm italic text-neutral-500 dark:text-neutral-400 mt-2">
                                            {study.hook}
                                        </p>
                                    </CardHeader>
                                    <CardContent className="space-y-4 p-4 overflow-y-auto flex-1 scrollbar-thin scrollbar-thumb-gray-300">
                                        <MobileDropdown label="The Challenge">
                                            <div className="text-sm leading-relaxed break-words hyphens-auto text-neutral-600 dark:text-neutral-300 font-light">
                                                {study.challenge}
                                            </div>
                                        </MobileDropdown>
                                        <MobileDropdown label="The Solution">
                                            <p className="text-sm leading-relaxed break-words hyphens-auto text-neutral-600 dark:text-neutral-300 font-light">
                                                {study.solution}
                                            </p>
                                        </MobileDropdown>
                                        <div className="bg-white/90 dark:bg-neutral-800/90 backdrop-blur-sm p-4 rounded-xl border border-neutral-100/50 dark:border-neutral-700/50 shadow-lg">
                                            <h4 className="font-semibold text-neutral-900 dark:text-white mb-3 text-sm">
                                                The Impact
                                            </h4>
                                            <p className="text-sm leading-relaxed break-words hyphens-auto text-neutral-600 dark:text-neutral-300 font-light">
                                                {study.impact}
                                            </p>
                                            {/* Service tags */}
                                            <div className="flex flex-wrap gap-1.5 mt-3">
                                                {study.serviceTags.map((tag) => (
                                                    <span
                                                        key={tag}
                                                        className={`px-2 py-0.5 text-[0.6rem] font-semibold rounded-full ${study.serviceTagBg}`}
                                                    >
                                                        {tag}
                                                    </span>
                                                ))}
                                            </div>
                                        </div>
                                    </CardContent>
                                </Card>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Desktop Roulette Carousel */}
                <div className="hidden md:block relative mt-10 md:mt-12 lg:mt-14 xl:mt-16">
                    <div ref={desktopContainerRef} className="relative flex items-center justify-center">
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
                                    <div key={study.id} ref={el => { cardRefs.current[index] = el; }} className={base + " scale-90 sm:scale-95 md:scale-100"} style={style}>
                                        <Card
                                            id={study.id}
                                            className={`bg-gradient-to-br ${study.gradient} ${(study as any).darkGradient || ''} backdrop-blur-sm border-0 shadow-2xl rounded-3xl overflow-hidden transition-all duration-500 w-full max-w-5xl flex flex-col`}
                                        >
                                            <CardHeader className="bg-white/95 dark:bg-neutral-800/95 backdrop-blur-sm p-8 md:p-10">
                                                {/* Logo + badge row */}
                                                <div className="flex items-start justify-between mb-4 gap-4">
                                                    <ClientLogo study={study} />
                                                    <Badge
                                                        className={`bg-gradient-to-r ${study.badgeGradient} ${study.badgeColor} dark:from-neutral-700 dark:to-neutral-700 dark:text-neutral-100 border-0 px-4 py-2 text-sm font-semibold rounded-full shrink-0`}
                                                    >
                                                        {study.badge}
                                                    </Badge>
                                                </div>
                                                {/* Sector tags */}
                                                <div className="flex flex-wrap gap-2 mb-5">
                                                    {study.tags.map((tag) => (
                                                        <span
                                                            key={tag}
                                                            className={`px-3 py-1 text-xs font-semibold rounded-full ${study.tagBg}`}
                                                        >
                                                            {tag}
                                                        </span>
                                                    ))}
                                                </div>
                                                <CardTitle className="text-3xl text-neutral-900 dark:text-white">
                                                    {study.headline}
                                                </CardTitle>
                                                <p className="text-base italic text-neutral-500 dark:text-neutral-400 mt-2">
                                                    {study.hook}
                                                </p>
                                            </CardHeader>
                                            <CardContent className="space-y-8 p-8 md:p-10">
                                                <div className="grid md:grid-cols-2 gap-8 md:gap-12">
                                                    <div className="space-y-6">
                                                        <h4 className="font-semibold text-neutral-900 dark:text-white flex items-center text-xl text-[65%] md:text-base">
                                                            <div
                                                                className={`w-8 h-8 bg-gradient-to-br ${study.iconBg} rounded-xl flex items-center justify-center mr-3`}
                                                            >
                                                                <Target className="h-4 w-4 text-white" />
                                                            </div>
                                                            The Challenge
                                                        </h4>
                                                        <p className="text-neutral-600 dark:text-neutral-300 leading-relaxed font-light text-[65%] md:text-base">
                                                            {study.challenge}
                                                        </p>
                                                    </div>
                                                    <div className="space-y-6">
                                                        <h4 className="font-semibold text-neutral-900 dark:text-white flex items-center text-xl text-[65%] md:text-base">
                                                            <div
                                                                className="w-8 h-8 bg-gradient-to-br from-emerald-600 to-emerald-700 rounded-xl flex items-center justify-center mr-3"
                                                            >
                                                                <CheckCircle className="h-4 w-4 text-white" />
                                                            </div>
                                                            The Solution
                                                        </h4>
                                                        <p className="text-neutral-600 dark:text-neutral-300 leading-relaxed font-light text-[65%] md:text-base">
                                                            {study.solution}
                                                        </p>
                                                    </div>
                                                </div>
                                                <div className="bg-white/90 dark:bg-neutral-800/80 backdrop-blur-sm p-6 md:p-8 rounded-2xl border border-neutral-100/50 dark:border-neutral-700/50 shadow-lg">
                                                    <h4 className="font-semibold text-neutral-900 dark:text-white mb-4 text-xl text-[65%] md:text-base">
                                                        The Impact
                                                    </h4>
                                                    <p className="text-neutral-600 dark:text-neutral-300 leading-relaxed font-light text-[65%] md:text-base">
                                                        {study.impact}
                                                    </p>
                                                    {/* Service tags */}
                                                    <div className="flex flex-wrap gap-2 mt-4">
                                                        {study.serviceTags.map((tag) => (
                                                            <span
                                                                key={tag}
                                                                className={`px-3 py-1 text-xs font-semibold rounded-full ${study.serviceTagBg}`}
                                                            >
                                                                {tag}
                                                            </span>
                                                        ))}
                                                    </div>
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
