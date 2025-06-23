"use client";

import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export function HeroSection() {
    return (
        <section className="relative py-24 lg:py-40 overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-neutral-50/50 via-stone-50/30 to-neutral-100/50" />
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(0,0,0,0.05),transparent_50%)] bg-[radial-gradient(circle_at_70%_80%,rgba(0,0,0,0.03),transparent_50%)]" />

            <div className="container mx-auto px-4 lg:px-6 relative">
                <div className="grid lg:grid-cols-2 gap-16 items-center">
                    <div className="space-y-10">
                        <div className="space-y-8">
                            <h1 className="text-5xl lg:text-7xl font-bold leading-tight tracking-tight">
                                Bridge{" "}
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-neutral-800 via-neutral-900 to-neutral-700">
                                    Traditional Finance
                                </span>{" "}
                                with Web3 Innovation
                            </h1>
                            <p className="text-xl lg:text-2xl text-neutral-600 leading-relaxed font-light">
                                Boutique strategic advisory for startups,
                                protocols, and investors. We help you tell
                                sharper stories, attract the right capital, and
                                scale with credibility across Web2, Web3, and
                                everything in between.
                            </p>
                            <div className="bg-gradient-to-r from-neutral-50 to-stone-50 p-6 rounded-2xl border border-neutral-100/50 shadow-lg">
                                <p className="text-neutral-800 font-semibold text-lg">
                                    <strong>KPI-Driven Results:</strong> We work
                                    on measurable outcomes. When work isn&apos;t
                                    delivered to standard, invoices aren&apos;t
                                    sent and clients aren&apos;t billed.
                                </p>
                            </div>
                        </div>
                        <div className="flex flex-col sm:flex-row gap-6">
                            <Button
                                size="lg"
                                className="bg-gradient-to-r from-neutral-900 to-neutral-800 hover:from-neutral-800 hover:to-neutral-700 text-white font-semibold px-10 py-4 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105 text-lg"
                                onClick={() =>
                                    document
                                        .getElementById("contact")
                                        ?.scrollIntoView({ behavior: "smooth" })
                                }
                            >
                                Start Your Journey
                                <ArrowRight className="ml-3 h-5 w-5" />
                            </Button>
                            <Link href="#case-studies" passHref legacyBehavior>
                                <Button
                                    size="lg"
                                    variant="outline"
                                    className="border-2 border-neutral-200 text-neutral-700 hover:bg-neutral-50 px-10 py-4 rounded-2xl font-semibold hover:shadow-lg transition-all duration-300 hover:scale-105 text-lg"
                                >
                                    View Our Track Record
                                </Button>
                            </Link>
                        </div>
                        <div className="grid grid-cols-3 gap-10 pt-12">
                            <div className="text-center group">
                                <div className="text-4xl lg:text-5xl font-bold bg-gradient-to-r from-neutral-800 to-neutral-900 bg-clip-text text-transparent group-hover:scale-110 transition-transform duration-300">
                                    3 Years
                                </div>
                                <div className="text-sm text-neutral-500 font-medium mt-2">
                                    Team Since 2021
                                </div>
                            </div>
                            <div className="text-center group">
                                <div className="text-4xl lg:text-5xl font-bold bg-gradient-to-r from-neutral-800 to-neutral-900 bg-clip-text text-transparent group-hover:scale-110 transition-transform duration-300">
                                    Global
                                </div>
                                <div className="text-sm text-neutral-500 font-medium mt-2">
                                    Reach & Experience
                                </div>
                            </div>
                            <div className="text-center group">
                                <div className="text-4xl lg:text-5xl font-bold bg-gradient-to-r from-neutral-800 to-neutral-900 bg-clip-text text-transparent group-hover:scale-110 transition-transform duration-300">
                                    Since 2024
                                </div>
                                <div className="text-sm text-neutral-500 font-medium mt-2">
                                    Riverstone Founded
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
