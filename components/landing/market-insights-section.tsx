"use client";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight, TrendingUp } from "lucide-react";
import Image from "next/image";

export function MarketInsightsSection() {
    return (
        <section id="insights" className="py-24 bg-white/60 backdrop-blur-sm">
            <div className="container mx-auto px-4 lg:px-6">
                <div className="text-center space-y-6 mb-20">
                    <Badge className="bg-gradient-to-r from-neutral-100 to-stone-100 text-neutral-800 border-0 px-6 py-3 text-sm font-semibold rounded-full">
                        Market Intelligence
                    </Badge>
                    <h2 className="text-4xl lg:text-6xl font-bold text-neutral-900 tracking-tight">
                        Strategic Insights That Drive Decisions
                    </h2>
                    <p className="text-xl text-neutral-600 max-w-4xl mx-auto font-light leading-relaxed">
                        Stay ahead with our analysis of market trends, funding
                        patterns, and strategic opportunities across Web2 and
                        Web3.
                    </p>
                </div>

                <div className="grid lg:grid-cols-2 gap-16 items-center">
                    <div className="space-y-12">
                        <div className="grid grid-cols-3 gap-6">
                            <Card className="bg-white/90 backdrop-blur-sm border-0 shadow-xl rounded-3xl p-6 hover:shadow-2xl transition-all duration-300 hover:scale-105">
                                <div className="flex items-center justify-between mb-4">
                                    <div className="text-sm font-semibold text-neutral-500">
                                        Bitcoin
                                    </div>
                                    <TrendingUp className="h-5 w-5 text-emerald-500" />
                                </div>
                                <div className="text-2xl font-bold text-neutral-900">
                                    $67,234
                                </div>
                                <div className="text-sm text-emerald-500 font-semibold">
                                    +5.2% (24h)
                                </div>
                            </Card>

                            <Card className="bg-white/90 backdrop-blur-sm border-0 shadow-xl rounded-3xl p-6 hover:shadow-2xl transition-all duration-300 hover:scale-105">
                                <div className="flex items-center justify-between mb-4">
                                    <div className="text-sm font-semibold text-neutral-500">
                                        Ethereum
                                    </div>
                                    <TrendingUp className="h-5 w-5 text-emerald-500" />
                                </div>
                                <div className="text-2xl font-bold text-neutral-900">
                                    $3,456
                                </div>
                                <div className="text-sm text-emerald-500 font-semibold">
                                    +3.8% (24h)
                                </div>
                            </Card>

                            <Card className="bg-white/90 backdrop-blur-sm border-0 shadow-xl rounded-3xl p-6 hover:shadow-2xl transition-all duration-300 hover:scale-105">
                                <div className="flex items-center justify-between mb-4">
                                    <div className="text-sm font-semibold text-neutral-500">
                                        Solana
                                    </div>
                                    <TrendingUp className="h-5 w-5 text-emerald-500" />
                                </div>
                                <div className="text-2xl font-bold text-neutral-900">
                                    $198
                                </div>
                                <div className="text-sm text-emerald-500 font-semibold">
                                    +7.1% (24h)
                                </div>
                            </Card>
                        </div>

                        <div className="space-y-8">
                            <h3 className="text-3xl font-bold text-neutral-900">
                                This Week&apos;s Key Insights
                            </h3>
                            <div className="space-y-8">
                                <div className="flex items-start space-x-6">
                                    <div className="w-3 h-3 bg-gradient-to-r from-neutral-700 to-neutral-800 rounded-full mt-4 flex-shrink-0" />
                                    <div>
                                        <div className="font-semibold text-neutral-900 mb-2 text-xl">
                                            Web3 Funding Landscape Evolving
                                        </div>
                                        <div className="text-neutral-600 leading-relaxed text-lg font-light">
                                            Strategic investors are focusing on
                                            real utility and revenue models,
                                            moving beyond pure speculation to
                                            sustainable business fundamentals.
                                        </div>
                                    </div>
                                </div>
                                <div className="flex items-start space-x-6">
                                    <div className="w-3 h-3 bg-gradient-to-r from-neutral-700 to-neutral-800 rounded-full mt-4 flex-shrink-0" />
                                    <div>
                                        <div className="font-semibold text-neutral-900 mb-2 text-xl">
                                            RWA Tokenization Gaining Momentum
                                        </div>
                                        <div className="text-neutral-600 leading-relaxed text-lg font-light">
                                            Real-world asset tokenization is
                                            attracting institutional capital as
                                            traditional finance embraces
                                            blockchain infrastructure.
                                        </div>
                                    </div>
                                </div>
                                <div className="flex items-start space-x-6">
                                    <div className="w-3 h-3 bg-gradient-to-r from-neutral-700 to-neutral-800 rounded-full mt-4 flex-shrink-0" />
                                    <div>
                                        <div className="font-semibold text-neutral-900 mb-2 text-xl">
                                            Narrative Strategy More Critical
                                            Than Ever
                                        </div>
                                        <div className="text-neutral-600 leading-relaxed text-lg font-light">
                                            In a crowded market, clear
                                            positioning and compelling
                                            storytelling separate successful
                                            raises from failed attempts.
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="relative">
                        <div className="absolute inset-0 bg-gradient-to-r from-neutral-200/40 to-stone-200/40 rounded-3xl blur-3xl opacity-60" />
                        <div className="relative bg-white/90 backdrop-blur-sm rounded-3xl p-2 shadow-2xl border border-white/50">
                            <Image
                                src="/placeholder.svg?height=500&width=600"
                                alt="Market Analysis Dashboard"
                                width={600}
                                height={500}
                                className="rounded-2xl"
                            />
                        </div>
                    </div>
                </div>
                {/* Blog Insights Section */}
                <div className="mt-16 space-y-8">
                    <div className="flex items-center justify-between">
                        <h3 className="text-3xl font-bold text-neutral-900">
                            Latest from Our Substack
                        </h3>
                        <Button
                            variant="outline"
                            className="border-neutral-200 text-neutral-700 hover:bg-neutral-50 px-6 py-3 rounded-2xl font-semibold hover:shadow-lg transition-all duration-300 hover:scale-105"
                        >
                            View All Posts
                            <ArrowRight className="ml-2 h-4 w-4" />
                        </Button>
                    </div>

                    <div className="grid md:grid-cols-2 gap-8">
                        <Card className="bg-white/90 backdrop-blur-sm border-0 shadow-xl rounded-3xl hover:shadow-2xl transition-all duration-500 hover:scale-105 group overflow-hidden">
                            <div className="h-48 bg-gradient-to-br from-neutral-100 to-stone-100 relative">
                                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
                                <div className="absolute bottom-4 left-6">
                                    <Badge className="bg-white/90 text-neutral-800 border-0 px-3 py-1 text-xs font-semibold rounded-full">
                                        Market Analysis
                                    </Badge>
                                </div>
                            </div>
                            <CardContent className="p-8">
                                <h4 className="text-xl font-bold text-neutral-900 mb-3 group-hover:text-neutral-700 transition-colors">
                                    The Institutional Crypto Adoption Wave:
                                    What&apos;s Driving the Shift
                                </h4>
                                <p className="text-neutral-600 leading-relaxed mb-4 font-light">
                                    Exploring how traditional financial
                                    institutions are finally embracing crypto
                                    infrastructure and what this means for the
                                    broader market...
                                </p>
                                <div className="flex items-center justify-between text-sm text-neutral-500">
                                    <span>5 min read</span>
                                    <span>2 days ago</span>
                                </div>
                            </CardContent>
                        </Card>

                        <Card className="bg-white/90 backdrop-blur-sm border-0 shadow-xl rounded-3xl hover:shadow-2xl transition-all duration-500 hover:scale-105 group overflow-hidden">
                            <div className="h-48 bg-gradient-to-br from-emerald-100 to-green-100 relative">
                                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
                                <div className="absolute bottom-4 left-6">
                                    <Badge className="bg-white/90 text-neutral-800 border-0 px-3 py-1 text-xs font-semibold rounded-full">
                                        Strategy
                                    </Badge>
                                </div>
                            </div>
                            <CardContent className="p-8">
                                <h4 className="text-xl font-bold text-neutral-900 mb-3 group-hover:text-neutral-700 transition-colors">
                                    Fundraising in 2024: Why Narrative Beats
                                    Numbers
                                </h4>
                                <p className="text-neutral-600 leading-relaxed mb-4 font-light">
                                    In today&apos;s competitive funding
                                    landscape, having great metrics isn&apos;t
                                    enough. Here&apos;s how to craft a
                                    compelling story that resonates...
                                </p>
                                <div className="flex items-center justify-between text-sm text-neutral-500">
                                    <span>7 min read</span>
                                    <span>1 week ago</span>
                                </div>
                            </CardContent>
                        </Card>
                    </div>
                </div>
            </div>
        </section>
    );
}
