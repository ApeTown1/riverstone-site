"use client";

import { Badge } from "@/components/ui/badge";

export function ContactSection() {
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
                </div>

                <div className="w-full max-w-screen-sm mx-auto">
                    <iframe
                        className="airtable-embed w-full h-[533px] border border-neutral-300 bg-transparent"
                        src="https://airtable.com/embed/appSGFRnuiqpHyPvE/pagG4cKJdamQc4fY4/form"
                        frameBorder="0"
                    />
                </div>
            </div>
        </section>
    );
}
