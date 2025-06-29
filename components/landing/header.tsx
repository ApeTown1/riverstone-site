"use client";

import { Badge } from "@/components/ui/badge";
import Image from "next/image";
import Link from "next/link";
import { useState, useEffect, useRef } from "react";

export function Header() {
    const [dropdownOpen, setDropdownOpen] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const [forceMobile, setForceMobile] = useState(false);
    const [burgerHovered, setBurgerHovered] = useState(false);
    const navRef = useRef<HTMLDivElement>(null);
    const logoRef = useRef<HTMLDivElement>(null);
    const [dropdownAnchor, setDropdownAnchor] = useState<HTMLDivElement | null>(
        null
    );
    const burgerButtonRef = useRef<HTMLButtonElement>(null);
    const [menuLeft, setMenuLeft] = useState(0);

    useEffect(() => {
        function handleResize() {
            // Use a simple breakpoint approach - if window is wide enough, show desktop nav
            // This is more reliable than trying to measure hidden elements
            if (window.innerWidth >= 1000) {
                setForceMobile(false);
                // Reset dropdown when switching back to desktop
                setDropdownOpen(false);
                setMobileMenuOpen(false);
            } else {
                setForceMobile(true);
            }
        }
        handleResize();
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    // Adjust dropdown position to keep it on screen
    useEffect(() => {
        if (mobileMenuOpen && burgerButtonRef.current) {
            const buttonRect = burgerButtonRef.current.getBoundingClientRect();
            const menuWidth = 224; // w-56 = 14rem = 224px
            let left = buttonRect.left - menuWidth;
            if (left < 8) left = 8; // 8px padding from left edge
            setMenuLeft(left);
        }
    }, [mobileMenuOpen]);

    // Remove hover logic, use only click for expansion
    // Handlers for menu open/close
    const handleBurgerClick = () => {
        setMobileMenuOpen((open) => !open);
    };
    const handleMenuClose = () => {
        setMobileMenuOpen(false);
    };

    return (
        <>
            <header className="border-b border-white/20 bg-white/80 backdrop-blur-2xl fixed top-0 left-0 w-full z-50 shadow-sm">
                <div className="container mx-auto px-4 lg:px-6 h-20 flex items-center justify-between">
                    <Link href="/">
                        <div
                            className="flex items-center space-x-4"
                            ref={logoRef}
                        >
                            <img
                                src="/riverstone-logo.svg"
                                alt="Riverstone Logo"
                                className="w-14 h-auto max-h-16 object-contain align-middle"
                                style={{ minWidth: "40px" }}
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
                    <nav
                        ref={navRef}
                        className={`items-center space-x-10 ${
                            forceMobile ? "hidden" : "flex"
                        }`}
                    >
                        <Link
                            href="/about"
                            className="text-sm font-semibold text-neutral-700 hover:text-neutral-900 transition-all duration-300 hover:scale-105"
                        >
                            About
                        </Link>
                        <Link
                            href="/services"
                            className="text-sm font-semibold text-neutral-700 hover:text-neutral-900 transition-all duration-300 hover:scale-105"
                        >
                            Services
                        </Link>
                        <Link
                            href="/market-insights"
                            className="text-sm font-semibold text-neutral-700 hover:text-neutral-900 transition-all duration-300 hover:scale-105"
                        >
                            Market Insights
                        </Link>
                        <div
                            className="relative group"
                            onMouseEnter={() => setDropdownOpen(true)}
                            onMouseLeave={() => setDropdownOpen(false)}
                        >
                            <Link
                                href="/case-studies"
                                className="text-sm font-semibold text-neutral-700 hover:text-neutral-900 transition-all duration-300 hover:scale-105 focus:outline-none"
                                onClick={() => setDropdownOpen(!dropdownOpen)}
                                onFocus={() => setDropdownOpen(true)}
                            >
                                Case Studies
                            </Link>
                            <div
                                className={`absolute left-0 mt-2 w-56 bg-white border border-neutral-200 rounded-xl shadow-lg transition-opacity duration-200 z-50 ${
                                    dropdownOpen
                                        ? "opacity-100 pointer-events-auto"
                                        : "opacity-0 pointer-events-none"
                                }`}
                            >
                                <ul className="py-2">
                                    <li>
                                        <a
                                            href="#case-studies"
                                            data-casestudy="0"
                                            className="block px-6 py-3 text-neutral-700 hover:bg-neutral-100 rounded-xl transition-all duration-200"
                                        >
                                            Go-to-Market & Ecosystem Launch
                                        </a>
                                    </li>
                                    <li>
                                        <a
                                            href="#case-studies"
                                            data-casestudy="1"
                                            className="block px-6 py-3 text-neutral-700 hover:bg-neutral-100 rounded-xl transition-all duration-200"
                                        >
                                            Financial Modeling & Valuation
                                        </a>
                                    </li>
                                    <li>
                                        <a
                                            href="#case-studies"
                                            data-casestudy="2"
                                            className="block px-6 py-3 text-neutral-700 hover:bg-neutral-100 rounded-xl transition-all duration-200"
                                        >
                                            Fundraising & Investor Strategy
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <Link
                            href="/contact"
                            className="text-sm font-semibold text-neutral-700 hover:text-neutral-900 transition-all duration-300 hover:scale-105"
                        >
                            Contact
                        </Link>
                    </nav>
                    <div
                        className={`${
                            forceMobile ? "flex" : "hidden"
                        } items-center relative`}
                        ref={setDropdownAnchor}
                    >
                        <button
                            ref={burgerButtonRef}
                            className={`p-2 rounded-xl border border-neutral-300 bg-white/80 hover:bg-neutral-100 focus:outline-none transition-transform duration-200 ${
                                mobileMenuOpen ? "scale-125" : "scale-100"
                            }`}
                            aria-label="Open menu"
                            onClick={handleBurgerClick}
                        >
                            <svg
                                className="w-7 h-7 text-neutral-900"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M4 6h16M4 12h16M4 18h16"
                                />
                            </svg>
                        </button>
                        {/* Dropdown menu to the left and beneath the burger button, always on screen */}
                        {mobileMenuOpen && (
                            <div
                                className="fixed z-50 w-56 bg-white shadow-2xl rounded-2xl flex flex-col p-4 space-y-4 border border-neutral-200"
                                style={{ left: menuLeft, top: "5rem" }}
                            >
                                <Link
                                    href="/about"
                                    className="text-lg font-semibold text-neutral-700 hover:text-neutral-900"
                                    onClick={handleMenuClose}
                                >
                                    About
                                </Link>
                                <Link
                                    href="/#services"
                                    className="text-lg font-semibold text-neutral-700 hover:text-neutral-900"
                                    onClick={handleMenuClose}
                                >
                                    Services
                                </Link>
                                <Link
                                    href="/market-insights"
                                    className="text-lg font-semibold text-neutral-700 hover:text-neutral-900"
                                    onClick={handleMenuClose}
                                >
                                    Market Insights
                                </Link>
                                <Link
                                    href="/case-studies"
                                    className="text-lg font-semibold text-neutral-700 hover:text-neutral-900"
                                    onClick={handleMenuClose}
                                >
                                    Case Studies
                                </Link>
                                <Link
                                    href="/contact"
                                    className="text-lg font-semibold text-neutral-700 hover:text-neutral-900"
                                    onClick={handleMenuClose}
                                >
                                    Contact
                                </Link>
                            </div>
                        )}
                    </div>
                </div>
            </header>
            {/* Spacer to prevent content from being hidden behind the fixed header */}
            <div style={{ height: "5rem" }} />
            <script
                dangerouslySetInnerHTML={{
                    __html: `
          document.addEventListener('DOMContentLoaded', function() {
            document.querySelectorAll('[data-casestudy]').forEach(function(link) {
              link.addEventListener('click', function(e) {
                e.preventDefault();
                const idx = parseInt(link.getAttribute('data-casestudy'));
                window.location.hash = '#case-studies';
                window.dispatchEvent(new CustomEvent('selectCaseStudy', { detail: { idx } }));
              });
            });
          });
        `,
                }}
            />
        </>
    );
}
