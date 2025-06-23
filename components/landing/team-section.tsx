"use client";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import Image from "next/image";

export function TeamSection() {
    return (
        <section
            id="team"
            className="py-24 bg-gradient-to-br from-neutral-50 to-stone-50"
        >
            <div className="container mx-auto px-4 lg:px-6">
                <div className="text-center space-y-6 mb-20">
                    <Badge className="bg-gradient-to-r from-emerald-100 to-green-100 text-emerald-800 border-0 px-6 py-3 text-sm font-semibold rounded-full">
                        Our Team
                    </Badge>
                    <h2 className="text-4xl lg:text-6xl font-bold text-neutral-900 tracking-tight">
                        Traditional Finance Meets Web3 Innovation
                    </h2>
                    <p className="text-xl text-neutral-600 max-w-4xl mx-auto font-light leading-relaxed">
                        Our team has been working together since 2021, combining
                        over a decade of traditional finance expertise with deep
                        Web3 experience across global markets including London,
                        Cape Town, Tel Aviv, and Argentina.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
                    <Card className="bg-white/90 backdrop-blur-sm border-0 shadow-xl rounded-3xl text-center hover:shadow-2xl transition-all duration-500 hover:scale-105 group">
                        <CardHeader className="pb-6 pt-10">
                            <div className="relative mx-auto mb-6">
                                <div className="absolute inset-0 bg-gradient-to-r from-emerald-400 to-green-400 rounded-full blur-lg opacity-30 group-hover:opacity-50 transition-opacity duration-300" />
                                <Image
                                    src="/Asher.jpeg"
                                    alt="Asher Weinstein"
                                    width={120}
                                    height={120}
                                    className="relative rounded-full border-4 border-white shadow-xl object-cover"
                                />
                            </div>
                            <CardTitle className="text-neutral-900 text-2xl">
                                Asher Weinstein
                            </CardTitle>
                            <CardDescription className="text-emerald-700 font-semibold text-lg">
                                Co-Founder
                            </CardDescription>
                        </CardHeader>
                        <CardContent className="px-8 pb-10">
                            <p className="text-neutral-600 mb-6 leading-relaxed text-lg font-light">
                                Career foundation in equity research, corporate finance, and venture capital. Passionate about blockchain technology, with hands-on startup experience across SaaS, fintech, and Web3 verticals. Brings a strategic lens to early-stage growth and investor positioning.
                            </p>
                            <div className="flex justify-center space-x-3">
                                <Badge
                                    variant="secondary"
                                    className="bg-neutral-100 text-neutral-700 px-4 py-2 rounded-full"
                                >
                                    Equity Research
                                </Badge>
                                <Badge
                                    variant="secondary"
                                    className="bg-neutral-100 text-neutral-700 px-4 py-2 rounded-full"
                                >
                                    Venture Capital
                                </Badge>
                            </div>
                            <div className="flex justify-center space-x-4 mt-6">
                                <Button
                                    size="sm"
                                    variant="outline"
                                    className="border-neutral-200 hover:bg-neutral-50 px-4 py-2 rounded-xl transition-all duration-300 hover:scale-105"
                                    onClick={() =>
                                        window.open(
                                            "https://www.linkedin.com/in/asher-jonathan-weinstein/",
                                            "_blank"
                                        )
                                    }
                                >
                                    <svg
                                        className="w-4 h-4 mr-2"
                                        fill="currentColor"
                                        viewBox="0 0 24 24"
                                    >
                                        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                                    </svg>
                                    LinkedIn
                                </Button>
                                <Button
                                    size="sm"
                                    variant="outline"
                                    className="border-neutral-200 hover:bg-neutral-50 px-4 py-2 rounded-xl transition-all duration-300 hover:scale-105"
                                    onClick={() =>
                                        window.open(
                                            "https://x.com/apetown_",
                                            "_blank"
                                        )
                                    }
                                >
                                    <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 24 24">
                                        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                                    </svg>
                                    X
                                </Button>
                            </div>
                        </CardContent>
                    </Card>

                    <Card className="bg-white/90 backdrop-blur-sm border-0 shadow-xl rounded-3xl text-center hover:shadow-2xl transition-all duration-500 hover:scale-105 group">
                        <CardHeader className="pb-6 pt-10">
                            <div className="relative mx-auto mb-6">
                                <div className="absolute inset-0 bg-gradient-to-r from-emerald-400 to-green-400 rounded-full blur-lg opacity-30 group-hover:opacity-50 transition-opacity duration-300" />
                                <Image
                                    src="/Ryan.jpeg"
                                    alt="Ryan Berelowitz"
                                    width={120}
                                    height={120}
                                    className="relative rounded-full border-4 border-white shadow-xl object-cover"
                                />
                            </div>
                            <CardTitle className="text-neutral-900 text-2xl">
                                Ryan Berelowitz
                            </CardTitle>
                            <CardDescription className="text-emerald-700 font-semibold text-lg">
                                Co-Founder
                            </CardDescription>
                        </CardHeader>
                        <CardContent className="px-8 pb-10">
                            <p className="text-neutral-600 mb-6 leading-relaxed text-lg font-light">
                                Former corporate finance and private equity consultant focused on M&A and strategy. Experienced startup operator, having contributed to and co-founded two companies. Brings sharp execution and leadership across Web3 and emerging tech.
                            </p>
                            <div className="flex justify-center space-x-3">
                                <Badge
                                    variant="secondary"
                                    className="bg-neutral-100 text-neutral-700 px-4 py-2 rounded-full"
                                >
                                    Private Equity
                                </Badge>
                                <Badge
                                    variant="secondary"
                                    className="bg-neutral-100 text-neutral-700 px-4 py-2 rounded-full"
                                >
                                    M&A Strategy
                                </Badge>
                            </div>
                            <div className="flex justify-center space-x-4 mt-6">
                                <Button
                                    size="sm"
                                    variant="outline"
                                    className="border-neutral-200 hover:bg-neutral-50 px-4 py-2 rounded-xl transition-all duration-300 hover:scale-105"
                                    onClick={() =>
                                        window.open(
                                            "https://www.linkedin.com/in/ryan-berelowitz-69a426107/",
                                            "_blank"
                                        )
                                    }
                                >
                                    <svg
                                        className="w-4 h-4 mr-2"
                                        fill="currentColor"
                                        viewBox="0 0 24 24"
                                    >
                                        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                                    </svg>
                                    LinkedIn
                                </Button>
                                <Button
                                    size="sm"
                                    variant="outline"
                                    className="border-neutral-200 hover:bg-neutral-50 px-4 py-2 rounded-xl transition-all duration-300 hover:scale-105"
                                    onClick={() =>
                                        window.open(
                                            "https://x.com/Kay_the_great_",
                                            "_blank"
                                        )
                                    }
                                >
                                    <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 24 24">
                                        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                                    </svg>
                                    X
                                </Button>
                            </div>
                        </CardContent>
                    </Card>

                    <Card className="bg-white/90 backdrop-blur-sm border-0 shadow-xl rounded-3xl text-center hover:shadow-2xl transition-all duration-500 hover:scale-105 group">
                        <CardHeader className="pb-6 pt-10">
                            <div className="relative mx-auto mb-6">
                                <div className="absolute inset-0 bg-gradient-to-r from-emerald-400 to-green-400 rounded-full blur-lg opacity-30 group-hover:opacity-50 transition-opacity duration-300" />
                                <Image
                                    src="/Jorge.jpeg"
                                    alt="Jorge Saracco"
                                    width={120}
                                    height={120}
                                    className="relative rounded-full border-4 border-white shadow-xl object-cover"
                                />
                            </div>
                            <CardTitle className="text-neutral-900 text-2xl">
                                Jorge Saracco
                            </CardTitle>
                            <CardDescription className="text-emerald-700 font-semibold text-lg">
                                Head of Investment Strategy
                            </CardDescription>
                        </CardHeader>
                        <CardContent className="px-8 pb-10">
                            <p className="text-neutral-600 mb-6 leading-relaxed text-lg font-light">
                                Qualified industrial engineer with deep expertise in institutional onboarding and systems analysis. Formerly at Genesis Capital and Binance, and COO at Rabadon. Brings structured precision and operational strength to the DeFi landscape.
                            </p>
                            <div className="flex justify-center space-x-3">
                                <Badge
                                    variant="secondary"
                                    className="bg-neutral-100 text-neutral-700 px-4 py-2 rounded-full"
                                >
                                    Industrial Engineer
                                </Badge>
                                <Badge
                                    variant="secondary"
                                    className="bg-neutral-100 text-neutral-700 px-4 py-2 rounded-full"
                                >
                                    DeFi Specialist
                                </Badge>
                            </div>
                            <div className="flex justify-center space-x-4 mt-6">
                                <Button
                                    size="sm"
                                    variant="outline"
                                    className="border-neutral-200 hover:bg-neutral-50 px-4 py-2 rounded-xl transition-all duration-300 hover:scale-105"
                                    onClick={() =>
                                        window.open(
                                            "https://www.linkedin.com/in/jorge-s-064365190/",
                                            "_blank"
                                        )
                                    }
                                >
                                    <svg
                                        className="w-4 h-4 mr-2"
                                        fill="currentColor"
                                        viewBox="0 0 24 24"
                                    >
                                        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                                    </svg>
                                    LinkedIn
                                </Button>
                                <Button
                                    size="sm"
                                    variant="outline"
                                    className="border-neutral-200 hover:bg-neutral-50 px-4 py-2 rounded-xl transition-all duration-300 hover:scale-105"
                                    onClick={() =>
                                        window.open(
                                            "https://x.com/KingJojajito",
                                            "_blank"
                                        )
                                    }
                                >
                                    <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 24 24">
                                        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                                    </svg>
                                    X
                                </Button>
                            </div>
                        </CardContent>
                    </Card>
                </div>
            </div>
        </section>
    );
}
