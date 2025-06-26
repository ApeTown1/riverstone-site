"use client";

import {
    Footer,
    Header,
    HeroSection,
    AboutSection,
    ServicesSection,
    CaseStudiesSection,
    MarketInsightsSection,
} from "@/components/landing";
import { TeamSection } from '@/components/landing/team-section';

export default function CryptoAdvisoryLanding() {
    return (
        <div className="min-h-screen bg-gradient-to-br from-neutral-50 via-white to-stone-50/30">
            <Header />
            <HeroSection />
            <AboutSection />
            <ServicesSection />
            <CaseStudiesSection />
            <MarketInsightsSection />
            <TeamSection />
            <Footer />
        </div>
    );
}
