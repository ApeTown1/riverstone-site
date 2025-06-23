"use client";

import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import { useState, useEffect, useRef } from "react";

export function Header() {
    const [dropdownOpen, setDropdownOpen] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const [forceMobile, setForceMobile] = useState(false);
    const navRef = useRef<HTMLDivElement>(null);
    const logoRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        function checkOverflow() {
            if (!navRef.current || !logoRef.current) return;
            const navRect = navRef.current.getBoundingClientRect();
            const logoRect = logoRef.current.getBoundingClientRect();
            // If nav overlaps logo or goes off the right edge, force mobile
            if (navRect.left < logoRect.right + 16 || navRect.right > window.innerWidth - 32) {
                setForceMobile(true);
            } else {
                setForceMobile(false);
            }
        }
        checkOverflow();
        window.addEventListener("resize", checkOverflow);
        return () => window.removeEventListener("resize", checkOverflow);
    }, []);

    return (
        <header className="border-b border-white/20 bg-white/80 backdrop-blur-2xl sticky top-0 z-50 shadow-sm">
            <div className="container mx-auto px-4 lg:px-6 h-20 flex items-center justify-between">
                <Link href="/">
                    <div className="flex items-center space-x-4" ref={logoRef}>
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
                <nav ref={navRef} className={`items-center space-x-10 ${forceMobile ? 'hidden' : 'hidden md:flex'}`}>
                    <Link href="/about" className="text-sm font-semibold text-neutral-700 hover:text-neutral-900 transition-all duration-300 hover:scale-105">About</Link>
                    <Link href="/#services" className="text-sm font-semibold text-neutral-700 hover:text-neutral-900 transition-all duration-300 hover:scale-105">Services</Link>
                    <Link href="/#insights" className="text-sm font-semibold text-neutral-700 hover:text-neutral-900 transition-all duration-300 hover:scale-105">Market Insights</Link>
                    <div className="relative group" onMouseEnter={() => setDropdownOpen(true)} onMouseLeave={() => setDropdownOpen(false)}>
                        <Link href="/#case-studies" className="text-sm font-semibold text-neutral-700 hover:text-neutral-900 transition-all duration-300 hover:scale-105 focus:outline-none" onClick={() => setDropdownOpen(!dropdownOpen)} onFocus={() => setDropdownOpen(true)}>
                            Case Studies
                        </Link>
                        <div className={`absolute left-0 mt-2 w-56 bg-white border border-neutral-200 rounded-xl shadow-lg transition-opacity duration-200 z-50 ${dropdownOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}>
                            <ul className="py-2">
                                <li><Link href="/#gtm" className="block px-6 py-3 text-neutral-700 hover:bg-neutral-100 rounded-xl transition-all duration-200">Go-to-Market & Ecosystem Launch</Link></li>
                                <li><Link href="/#gaming" className="block px-6 py-3 text-neutral-700 hover:bg-neutral-100 rounded-xl transition-all duration-200">Fundraising & Investor Strategy</Link></li>
                                <li><Link href="/#ma" className="block px-6 py-3 text-neutral-700 hover:bg-neutral-100 rounded-xl transition-all duration-200">Financial Modeling & Valuation</Link></li>
                            </ul>
                        </div>
                    </div>
                    <Link href="/contact" className="text-sm font-semibold text-neutral-700 hover:text-neutral-900 transition-all duration-300 hover:scale-105">Contact</Link>
                </nav>
                <div className={`${forceMobile ? 'flex' : 'md:hidden'} items-center`}>
                    <button
                        className="p-2 rounded-xl border border-neutral-300 bg-white/80 hover:bg-neutral-100 focus:outline-none"
                        onClick={() => setMobileMenuOpen((open) => !open)}
                        aria-label="Open menu"
                    >
                        <svg className="w-7 h-7 text-neutral-900" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                        </svg>
                    </button>
                </div>
                {mobileMenuOpen && (
                    <div className="fixed inset-0 z-50 bg-black/40" onClick={() => setMobileMenuOpen(false)} />
                )}
                <div className={`fixed top-0 right-0 z-50 w-64 h-full bg-white shadow-2xl transform transition-transform duration-300 ${(mobileMenuOpen || forceMobile) ? 'translate-x-0' : 'translate-x-full'} md:hidden`}>
                    <div className="flex flex-col p-6 space-y-6">
                        <button
                            className="self-end p-2 rounded-xl hover:bg-neutral-100"
                            onClick={() => setMobileMenuOpen(false)}
                            aria-label="Close menu"
                        >
                            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        </button>
                        <Link href="/about" className="text-lg font-semibold text-neutral-700 hover:text-neutral-900" onClick={() => setMobileMenuOpen(false)}>About</Link>
                        <Link href="/#services" className="text-lg font-semibold text-neutral-700 hover:text-neutral-900" onClick={() => setMobileMenuOpen(false)}>Services</Link>
                        <Link href="/#insights" className="text-lg font-semibold text-neutral-700 hover:text-neutral-900" onClick={() => setMobileMenuOpen(false)}>Market Insights</Link>
                        <div>
                            <button
                                className="w-full text-left text-lg font-semibold text-neutral-700 hover:text-neutral-900 flex items-center justify-between"
                                onClick={() => setDropdownOpen((open) => !open)}
                            >
                                Case Studies
                                <svg className={`w-5 h-5 ml-2 transition-transform ${dropdownOpen ? 'rotate-90' : ''}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                </svg>
                            </button>
                            {dropdownOpen && (
                                <ul className="pl-4 mt-2 space-y-2">
                                    <li><Link href="/#gtm" className="block text-neutral-700 hover:text-neutral-900" onClick={() => setMobileMenuOpen(false)}>Go-to-Market & Ecosystem Launch</Link></li>
                                    <li><Link href="/#gaming" className="block text-neutral-700 hover:text-neutral-900" onClick={() => setMobileMenuOpen(false)}>Fundraising & Investor Strategy</Link></li>
                                    <li><Link href="/#ma" className="block text-neutral-700 hover:text-neutral-900" onClick={() => setMobileMenuOpen(false)}>Financial Modeling & Valuation</Link></li>
                                </ul>
                            )}
                        </div>
                        <Link href="/contact" className="text-lg font-semibold text-neutral-700 hover:text-neutral-900" onClick={() => setMobileMenuOpen(false)}>Contact</Link>
                    </div>
                </div>
            </div>
        </header>
    );
}
