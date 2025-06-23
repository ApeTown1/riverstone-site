"use client";

import {
    ContactSection,
    Footer,
    Header,
    HeroSection,
    ServicesSection,
    CaseStudiesSection,
    AboutSection,
    MarketInsightsSection,
} from "@/components/landing";

export default function CryptoAdvisoryLanding() {
    return (
        <div className="min-h-screen bg-gradient-to-br from-neutral-50 via-white to-stone-50/30">
            <Header />
            <HeroSection />
            <AboutSection />
            <ServicesSection />
            <CaseStudiesSection />
            <MarketInsightsSection />
            <Footer />
        </div>
    );
}
