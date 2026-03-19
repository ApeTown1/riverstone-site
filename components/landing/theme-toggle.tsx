"use client";
import { useEffect, useState } from "react";

export function ThemeToggle() {
    const [isDark, setIsDark] = useState(false);

    useEffect(() => {
        const savedInStorage = localStorage.getItem("theme");
        const shouldBeDark = savedInStorage === "dark";
        if (shouldBeDark) {
            document.documentElement.classList.add("dark");
        } else {
            document.documentElement.classList.remove("dark");
        }
        // Sync cookie so server renders correctly on next request
        document.cookie = `theme=${shouldBeDark ? "dark" : "light"}; path=/; max-age=31536000; SameSite=Lax`;
        setIsDark(shouldBeDark);
    }, []);

    const toggle = () => {
        const next = !isDark;
        setIsDark(next);
        const value = next ? "dark" : "light";
        if (next) {
            document.documentElement.classList.add("dark");
        } else {
            document.documentElement.classList.remove("dark");
        }
        localStorage.setItem("theme", value);
        // Also persist in cookie so server can render the correct class
        document.cookie = `theme=${value}; path=/; max-age=31536000; SameSite=Lax`;
    };

    return (
        <div className="flex items-center gap-1.5 shrink-0">
            {/* Sun */}
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-neutral-400">
                <circle cx="12" cy="12" r="5"/>
                <line x1="12" y1="1" x2="12" y2="3"/>
                <line x1="12" y1="21" x2="12" y2="23"/>
                <line x1="4.22" y1="4.22" x2="5.64" y2="5.64"/>
                <line x1="18.36" y1="18.36" x2="19.78" y2="19.78"/>
                <line x1="1" y1="12" x2="3" y2="12"/>
                <line x1="21" y1="12" x2="23" y2="12"/>
                <line x1="4.22" y1="19.78" x2="5.64" y2="18.36"/>
                <line x1="18.36" y1="5.64" x2="19.78" y2="4.22"/>
            </svg>
            <button
                onClick={toggle}
                role="switch"
                aria-checked={isDark}
                aria-label="Toggle dark mode"
                suppressHydrationWarning
                style={{
                    width: 44,
                    height: 24,
                    borderRadius: 12,
                    background: isDark ? "#4ade80" : "#e5e7eb",
                    border: "none",
                    cursor: "pointer",
                    position: "relative",
                    padding: 3,
                    transition: "background 0.2s ease",
                    flexShrink: 0,
                    display: "inline-block",
                }}
            >
                <span
                    style={{
                        display: "block",
                        width: 18,
                        height: 18,
                        borderRadius: "50%",
                        background: "white",
                        boxShadow: "0 1px 3px rgba(0,0,0,0.2)",
                        transition: "transform 0.2s ease",
                        transform: isDark ? "translateX(20px)" : "translateX(0)",
                    }}
                />
            </button>
            {/* Moon */}
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-neutral-400">
                <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/>
            </svg>
        </div>
    );
}
