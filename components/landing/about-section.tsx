"use client";
import { Badge } from "@/components/ui/badge";

export function AboutSection() {
    return (
        <section id="about" className="pt-12 pb-24 bg-white/60 dark:bg-neutral-950 backdrop-blur-sm">
            <div className="container mx-auto px-4 lg:px-6">
                <div className="max-w-6xl mx-auto text-center space-y-6 sm:space-y-12">
                    <div className="space-y-6">
                        <Badge className="bg-gradient-to-r from-emerald-100 to-green-100 text-emerald-800 border-0 px-6 py-3 text-sm font-semibold rounded-full">
                            About Riverstone
                        </Badge>
                        <h2 className="text-4xl lg:text-6xl font-bold text-neutral-900 dark:text-white tracking-tight">
                            Finance is Evolving, and So Are We
                        </h2>
                    </div>

                    <div className="max-w-4xl mx-auto text-left space-y-6">
                        <h3 className="text-3xl lg:text-4xl font-bold text-neutral-900 dark:text-white">
                            Built Different.
                        </h3>
                        <p className="text-base md:text-xl text-neutral-600 dark:text-neutral-300 leading-relaxed font-light">
                            Most advisory firms offer fragmented support &mdash; a deck here, an intro there. Riverstone is different. We combine deep institutional finance experience with hands-on Web3 execution, and we stay in the room until the job is done. We&apos;ve built financial models that justified nine-figure valuations. We&apos;ve run BD strategies that turned protocol partnerships into live integrations. We&apos;ve coached founders through term sheets, investor negotiations, and M&amp;A decisions. We don&apos;t just open doors. We help you walk through them.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}
