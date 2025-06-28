import { Badge } from "@/components/ui/badge";

export function AboutSection() {
    return (
        <section id="about" className="py-24 bg-white/60 backdrop-blur-sm">
            <div className="container mx-auto px-4 lg:px-6">
                <div className="max-w-6xl mx-auto text-center space-y-12">
                    <div className="space-y-6">
                        <Badge className="bg-gradient-to-r from-emerald-100 to-green-100 text-emerald-800 border-0 px-6 py-3 text-sm font-semibold rounded-full">
                            About Riverstone
                        </Badge>
                        <h2 className="text-4xl lg:text-6xl font-bold text-neutral-900 tracking-tight">
                            Finance is Evolving, and So Are We
                        </h2>
                    </div>

                    <div className="grid md:grid-cols-2 gap-16 items-center text-left">
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
                            <div className="bg-gradient-to-r from-neutral-50 to-stone-50 p-8 rounded-3xl border border-neutral-100/50 shadow-lg">
                                <p className="text-neutral-900 font-semibold text-center text-lg italic">
                                    &quot;We aim to provide an exceptional
                                    service to our clients. We want to be
                                    measured against the best in the
                                    world.&quot;
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="text-center bg-gradient-to-r from-neutral-900 via-neutral-800 to-neutral-900 text-white p-12 rounded-3xl shadow-2xl mt-16">
                    <h3 className="text-3xl font-bold mb-6">
                        Riverstone&apos;s Thesis
                    </h3>
                    <p className="text-base md:text-xl text-neutral-200 font-light max-w-4xl mx-auto text-[65%] md:text-base">
                        <strong className="text-white font-semibold">
                            Crypto&apos;s potential lies not in its
                            divergence from traditional finance but in
                            its ability to complement and transform it.
                        </strong>{" "}
                        Riverstone stands at this intersection,
                        committed to creating value, fostering
                        innovation, and navigating the complexities of
                        this dynamic industry.
                    </p>
                </div>
            </div>
        </section>
    );
}
