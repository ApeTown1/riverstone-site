"use client";

import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

export function HeroSection() {
    return (
        <section className="relative py-20 lg:py-28 overflow-hidden dark:bg-neutral-950">
            <div className="absolute inset-0 bg-gradient-to-br from-neutral-50/50 via-stone-50/30 to-neutral-100/50 dark:from-neutral-950 dark:via-neutral-900 dark:to-neutral-950" />
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(0,0,0,0.05),transparent_50%)] bg-[radial-gradient(circle_at_70%_80%,rgba(0,0,0,0.03),transparent_50%)]" />

            <div className="container mx-auto px-4 lg:px-6 relative">
                <div className="flex flex-col sm:grid sm:grid-cols-2 gap-4 lg:gap-20 items-center min-h-[240px] -mt-10">
                    {/* Image - stacked above on mobile */}
                    <div className="flex justify-center items-center w-full order-1 sm:order-2">
                        <img
                            src="/riverstone-logo.svg"
                            alt="Riverstone Logo"
                            className="w-[80%] sm:w-48 md:w-[220px] lg:w-[440px] h-auto max-w-full object-contain mx-auto dark:invert"
                            style={{ minWidth: '108px' }}
                        />
                    </div>
                    {/* Text - below image on mobile */}
                    <div className="flex flex-col items-center sm:items-start text-center sm:text-left w-full max-w-2xl mx-auto sm:mx-0 order-2 sm:order-1">
                        <h1 className="text-4xl sm:text-5xl md:text-5xl lg:text-6xl font-bold leading-tight tracking-tight dark:text-white">
                            <span>Startup Advisory for</span>{"\n"}
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-neutral-800 via-neutral-900 to-neutral-700 dark:from-neutral-100 dark:via-white dark:to-neutral-200 block">Web3 Founders</span>{"\n"}
                            <span>Who Play to Win</span>{"\n"}
                        </h1>
                    </div>
                </div>
                <p className="text-lg sm:text-base md:text-xl lg:text-2xl text-neutral-600 dark:text-neutral-300 leading-relaxed font-light max-w-2xl mx-auto mt-8 text-center">
                    Riverstone is a Web3 first startup advisory. We help startups raise smarter, tell sharper stories, and scale.
                </p>
                <div className="flex flex-col sm:flex-row gap-6 justify-center mt-12 w-full">
                    <a href="https://www.linkedin.com/company/riverstoneone" target="_blank" rel="noopener noreferrer">
                        <Button
                            size="lg"
                            className="w-full sm:w-auto bg-gradient-to-r from-neutral-900 to-neutral-800 hover:from-neutral-800 hover:to-neutral-700 text-white font-semibold px-10 py-4 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105 text-lg"
                        >
                            Message Us Now
                            <ArrowRight className="ml-3 h-5 w-5" />
                        </Button>
                    </a>
                    <Link href="#case-studies" passHref legacyBehavior>
                        <Button
                            size="lg"
                            variant="outline"
                            className="w-full sm:w-auto border-2 border-neutral-200 dark:border-neutral-700 text-neutral-700 dark:text-neutral-300 hover:bg-neutral-50 dark:hover:bg-neutral-800 px-10 py-4 rounded-2xl font-semibold hover:shadow-lg transition-all duration-300 hover:scale-105 text-lg"
                        >
                            View Our Track Record
                        </Button>
                    </Link>
                </div>
            </div>
        </section>
    );
}
