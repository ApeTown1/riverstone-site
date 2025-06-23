"use client";

import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

export function Header() {
    return (
        <header className="border-b border-white/20 bg-white/80 backdrop-blur-2xl sticky top-0 z-50 shadow-sm">
            <div className="container mx-auto px-4 lg:px-6 h-20 flex items-center justify-between">
                <Link href="/">
                    <div className="flex items-center space-x-4">
                        <Image
                            src="/riverstone-logo.png"
                            alt="Riverstone Logo"
                            width={40}
                            height={40}
                            className="object-contain"
                        />
                        <span
                            className="text-2xl tracking-tight text-neutral-900"
                            style={{
                                fontFamily:
                                    "system-ui, -apple-system, sans-serif",
                            }}
                        >
                            <span className="font-bold">RIVER</span>
                            <span className="font-normal">STONE</span>
                        </span>
                    </div>
                </Link>
                <nav className="hidden md:flex items-center space-x-10">
                    <Link
                        href="/services"
                        className="text-sm font-semibold text-neutral-700 hover:text-neutral-900 transition-all duration-300 hover:scale-105"
                    >
                        Services
                    </Link>
                    <Link
                        href="/market"
                        className="text-sm font-semibold text-neutral-700 hover:text-neutral-900 transition-all duration-300 hover:scale-105"
                    >
                        Market Insights
                    </Link>
                    <Link
                        href="/about"
                        className="text-sm font-semibold text-neutral-700 hover:text-neutral-900 transition-all duration-300 hover:scale-105"
                    >
                        About
                    </Link>
                    <Link
                        href="/contact"
                        className="text-sm font-semibold text-neutral-700 hover:text-neutral-900 transition-all duration-300 hover:scale-105"
                    >
                        Contact
                    </Link>
                </nav>
                <div className="hidden md:flex items-center space-x-4 ml-6">
                    <Button
                        size="sm"
                        variant="ghost"
                        className="text-neutral-600 hover:text-neutral-900 p-2 rounded-xl transition-all duration-300 hover:scale-105"
                        onClick={() =>
                            window.open(
                                "https://twitter.com/riverstone_one",
                                "_blank"
                            )
                        }
                    >
                        <svg
                            className="w-5 h-5"
                            fill="currentColor"
                            viewBox="0 0 24 24"
                        >
                            <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                        </svg>
                    </Button>
                    <Button
                        size="sm"
                        variant="ghost"
                        className="text-neutral-600 hover:text-neutral-900 p-2 rounded-xl transition-all duration-300 hover:scale-105"
                        onClick={() =>
                            window.open(
                                "https://www.linkedin.com/in/asher-jonathan-weinstein/",
                                "_blank"
                            )
                        }
                    >
                        <svg
                            className="w-5 h-5"
                            fill="currentColor"
                            viewBox="0 0 24 24"
                        >
                            <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                        </svg>
                    </Button>
                </div>
                <Link
                    href="/contact"
                    className="bg-gradient-to-r from-neutral-900 to-neutral-800 hover:from-neutral-800 hover:to-neutral-700 text-white font-semibold px-6 py-3 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
                >
                    Book Consultation
                </Link>
            </div>
        </header>
    );
}
