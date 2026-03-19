"use client";
import Link from "next/link";
import { useState, useEffect, useRef } from "react";
import { ThemeToggle } from "@/components/landing/theme-toggle";

export function Header() {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const [forceMobile, setForceMobile] = useState(false);
    const navRef = useRef<HTMLDivElement>(null);
    const logoRef = useRef<HTMLDivElement>(null);
    const burgerButtonRef = useRef<HTMLButtonElement>(null);
    const [menuLeft, setMenuLeft] = useState(0);

    useEffect(() => {
        function handleResize() {
            if (window.innerWidth >= 1000) {
                setForceMobile(false);
                setMobileMenuOpen(false);
            } else {
                setForceMobile(true);
            }
        }
        handleResize();
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    useEffect(() => {
        if (mobileMenuOpen && burgerButtonRef.current) {
            const buttonRect = burgerButtonRef.current.getBoundingClientRect();
            const menuWidth = 224;
            let left = buttonRect.right - menuWidth;
            const rightEdge = window.innerWidth - 8;
            if (left + menuWidth > rightEdge) left = rightEdge - menuWidth;
            if (left < 8) left = 8;
            setMenuLeft(left);
        }
    }, [mobileMenuOpen]);

    const handleBurgerClick = () => {
        setMobileMenuOpen((open) => !open);
    };
    const handleMenuClose = () => {
        setMobileMenuOpen(false);
    };

    return (
        <>
            <header className="border-b border-white/20 dark:border-neutral-800 bg-white/80 dark:bg-neutral-900/90 backdrop-blur-2xl fixed top-0 left-0 w-full z-50 shadow-sm">
                <div className="container mx-auto px-4 lg:px-6 h-20 flex items-center justify-between">
                    <Link href="/">
                        <div
                            className="flex items-center space-x-4"
                            ref={logoRef}
                        >
                            <img
                                src="/riverstone-logo.svg"
                                alt="Riverstone Logo"
                                className="w-14 h-auto max-h-16 object-contain align-middle dark:invert"
                                style={{ minWidth: "40px" }}
                            />
                            <span
                                className="text-2xl tracking-tight text-neutral-900 dark:text-white"
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
                        className={`items-center space-x-8 ${
                            forceMobile ? "hidden" : "flex"
                        }`}
                    >
                        <Link
                            href="/about"
                            className="text-sm font-semibold text-neutral-700 dark:text-neutral-300 hover:text-neutral-900 dark:hover:text-white transition-all duration-300 hover:scale-105"
                        >
                            About
                        </Link>
                        <Link
                            href="/services"
                            className="text-sm font-semibold text-neutral-700 dark:text-neutral-300 hover:text-neutral-900 dark:hover:text-white transition-all duration-300 hover:scale-105"
                        >
                            Services
                        </Link>
                        <Link
                            href="/market-insights"
                            className="text-sm font-semibold text-neutral-700 dark:text-neutral-300 hover:text-neutral-900 dark:hover:text-white transition-all duration-300 hover:scale-105"
                        >
                            Market Insights
                        </Link>
                        <Link
                            href="/case-studies"
                            className="text-sm font-semibold text-neutral-700 dark:text-neutral-300 hover:text-neutral-900 dark:hover:text-white transition-all duration-300 hover:scale-105"
                        >
                            Case Studies
                        </Link>
                        <Link
                            href="/contact"
                            className="text-sm font-semibold text-neutral-700 dark:text-neutral-300 hover:text-neutral-900 dark:hover:text-white transition-all duration-300 hover:scale-105"
                        >
                            Contact
                        </Link>
                        <ThemeToggle />
                    </nav>
                    <div
                        className={`${
                            forceMobile ? "flex" : "hidden"
                        } items-center gap-3 relative`}
                    >
                        <ThemeToggle />
                        <button
                            ref={burgerButtonRef}
                            className={`p-2 rounded-xl border border-neutral-300 dark:border-neutral-700 bg-white/80 dark:bg-neutral-800/80 hover:bg-neutral-100 dark:hover:bg-neutral-700 focus:outline-none transition-transform duration-200 ${
                                mobileMenuOpen ? "scale-125" : "scale-100"
                            }`}
                            aria-label="Open menu"
                            onClick={handleBurgerClick}
                        >
                            <svg
                                className="w-7 h-7 text-neutral-900 dark:text-white"
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
                        <div
                            className={`fixed z-50 w-56 bg-white dark:bg-neutral-900 shadow-2xl rounded-2xl flex flex-col p-4 space-y-4 border border-neutral-200 dark:border-neutral-700 transition-all duration-300 ease-out ${
                                mobileMenuOpen
                                    ? "opacity-100 translate-y-0 pointer-events-auto"
                                    : "opacity-0 -translate-y-2 pointer-events-none"
                            }`}
                            style={{ left: menuLeft, top: "5rem" }}
                        >
                            <Link
                                href="/about"
                                className="text-lg font-semibold text-neutral-700 dark:text-neutral-200 hover:text-neutral-900 dark:hover:text-white"
                                onClick={handleMenuClose}
                            >
                                About
                            </Link>
                            <Link
                                href="/#services"
                                className="text-lg font-semibold text-neutral-700 dark:text-neutral-200 hover:text-neutral-900 dark:hover:text-white"
                                onClick={handleMenuClose}
                            >
                                Services
                            </Link>
                            <Link
                                href="/market-insights"
                                className="text-lg font-semibold text-neutral-700 dark:text-neutral-200 hover:text-neutral-900 dark:hover:text-white"
                                onClick={handleMenuClose}
                            >
                                Market Insights
                            </Link>
                            <Link
                                href="/case-studies"
                                className="text-lg font-semibold text-neutral-700 dark:text-neutral-200 hover:text-neutral-900 dark:hover:text-white"
                                onClick={handleMenuClose}
                            >
                                Case Studies
                            </Link>
                            <Link
                                href="/contact"
                                className="text-lg font-semibold text-neutral-700 dark:text-neutral-200 hover:text-neutral-900 dark:hover:text-white"
                                onClick={handleMenuClose}
                            >
                                Contact
                            </Link>
                        </div>
                    </div>
                </div>
            </header>
            {/* Spacer to prevent content from being hidden behind the fixed header */}
            <div style={{ height: "5rem" }} />
        </>
    );
}
