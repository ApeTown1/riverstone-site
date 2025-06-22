"use client";

import {
    ContactSection,
    Footer,
    Header,
    HeroSection,
    ServicesSection,
} from "@/components/landing";

export default function CryptoAdvisoryLanding() {
    return (
        <div className="min-h-screen bg-gradient-to-br from-neutral-50 via-white to-stone-50/30">
            <Header />
            <HeroSection />
            <ServicesSection />
            <ContactSection />
            <Footer />
        </div>
    );
}
