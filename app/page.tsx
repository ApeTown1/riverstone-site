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
import Head from "next/head";

export default function CryptoAdvisoryLanding() {
    return (
        <>
            <Head>
                <title>Web3 Growth, Powered by Insight</title>
                <meta name="description" content="Precision Advisory for Web3 Leaders" />
                {/* Open Graph */}
                <meta property="og:title" content="Web3 Growth, Powered by Insight" />
                <meta property="og:description" content="Precision Advisory for Web3 Leaders" />
                <meta property="og:image" content="https://www.riverstone.one/riverstone-logo.png" />
                <meta property="og:url" content="https://www.riverstone.one" />
                <meta property="og:type" content="website" />
                {/* Twitter Card */}
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:title" content="Web3 Growth, Powered by Insight" />
                <meta name="twitter:description" content="Precision Advisory for Web3 Leaders" />
                <meta name="twitter:image" content="https://www.riverstone.one/riverstone-logo.png" />
            </Head>
        <div className="min-h-screen bg-gradient-to-br from-neutral-50 via-white to-stone-50/30">
            <Header />
            <HeroSection />
                <CaseStudiesSection />
                <ServicesSection />
            <AboutSection />
            <MarketInsightsSection />
            <TeamSection />
            <Footer />
        </div>
        </>
    );
}
