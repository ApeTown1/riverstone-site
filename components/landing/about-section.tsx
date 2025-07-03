import { Badge } from "@/components/ui/badge";

export function AboutSection() {
    return (
        <section id="about" className="pt-12 pb-24 bg-white/60 backdrop-blur-sm">
            <div className="container mx-auto px-4 lg:px-6">
                <div className="max-w-6xl mx-auto text-center space-y-6 sm:space-y-12">
                    <div className="space-y-6">
                        <Badge className="bg-gradient-to-r from-emerald-100 to-green-100 text-emerald-800 border-0 px-6 py-3 text-sm font-semibold rounded-full">
                            About Riverstone
                        </Badge>
                        <h2 className="text-4xl lg:text-6xl font-bold text-neutral-900 tracking-tight">
                            Finance is Evolving, and So Are We
                        </h2>
                    </div>

                    <div className="grid md:grid-cols-2 gap-16 items-start text-left">
                        <div className="space-y-8">
                            <p className="text-base md:text-xl text-neutral-600 leading-relaxed font-light">
                                Since 2016, we have worked with investments in
                                private equity, venture capital, private debt,
                                corporate finance, strategy consulting, and
                                asset management. Our team has been
                                collaborating since 2021.
                            </p>
                            <p className="text-base md:text-xl text-neutral-600 leading-relaxed font-light">
                                With global financial experience across London,
                                Cape Town, Tel Aviv, and Argentina, our team of
                                five is based in central hours and easily
                                accessible to the global stage.
                            </p>
                            <p className="text-base md:text-xl text-neutral-600 leading-relaxed font-light">
                                At Riverstone, we bring over a decade of
                                expertise in traditional finance to the
                                forefront of innovation. We bridge conventional
                                finance with the transformative world of
                                blockchain and crypto.
                            </p>
                        </div>

                        <div className="space-y-8">
                            <p className="text-base md:text-xl text-neutral-600 leading-relaxed font-light">
                                Driven by integrity, collaboration, and
                                excellence, our mission is to empower businesses
                                navigating this dynamic space. We deliver
                                tailored financial advisory solutions grounded
                                in strategic insight and forward-thinking
                                vision.
                            </p>
                            <p className="text-base md:text-xl text-neutral-600 leading-relaxed font-light">
                                We help clients overcome complexities, unlock
                                potential, and achieve enduring success. In a
                                world of change, we are your trusted partner for
                                growth.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
