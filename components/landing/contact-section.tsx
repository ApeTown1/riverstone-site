"use client";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { useState } from "react";

export function ContactSection() {
    const [status, setStatus] = useState<string | null>(null);
    const [loading, setLoading] = useState(false);

    async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();
        setLoading(true);
        setStatus(null);
        const form = e.currentTarget;
        const formData = {
            name: (form.elements.namedItem("name") as HTMLInputElement).value,
            email: (form.elements.namedItem("email") as HTMLInputElement).value,
            message: (form.elements.namedItem("message") as HTMLTextAreaElement).value,
        };
        try {
            const res = await fetch("/api/contact", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(formData),
            });
            if (res.ok) {
                setStatus("Your message has been sent!");
                form.reset();
            } else {
                setStatus("There was an error sending your message. Please try again.");
            }
        } catch {
            setStatus("There was an error sending your message. Please try again.");
        }
        setLoading(false);
    }

    return (
        <section id="contact" className="py-24 bg-white/60 backdrop-blur-sm">
            <div className="container mx-auto px-4 lg:px-6">
                <div className="text-center space-y-6 mb-20">
                    <Badge className="bg-gradient-to-r from-emerald-100 to-green-100 text-emerald-800 border-0 px-6 py-3 text-sm font-semibold rounded-full">
                        Contact Us
                    </Badge>
                    <h2 className="text-4xl lg:text-6xl font-bold text-neutral-900 tracking-tight">
                        Let&apos;s Discuss Your Project
                    </h2>
                    <p className="text-xl text-neutral-600 max-w-4xl mx-auto font-light leading-relaxed">
                        Get in touch to learn more about our services and how we
                        can help your business thrive.
                    </p>
                </div>

                <div className="max-w-3xl mx-auto flex flex-col items-center">
                    <a
                        href="https://t.me/apetown1"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-block w-full sm:w-auto bg-gradient-to-r from-neutral-900 to-neutral-800 hover:from-neutral-800 hover:to-neutral-700 text-white font-semibold px-10 py-4 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 text-lg mt-8"
                    >
                        Message Us on Telegram
                    </a>
                </div>
            </div>
        </section>
    );
}
