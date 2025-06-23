import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { TrendingUp, Target } from "lucide-react";

export function ThesisSection() {
    return (
        <section className="py-24 bg-gradient-to-br from-neutral-50 via-stone-50 to-neutral-100">
            <div className="container mx-auto px-4 lg:px-6">
                <div className="max-w-6xl mx-auto">
                    <div className="text-center space-y-6 mb-16">
                        <Badge className="bg-gradient-to-r from-neutral-100 to-stone-100 text-neutral-800 border-0 px-6 py-3 text-sm font-semibold rounded-full">
                            Our Thesis
                        </Badge>
                        <h2 className="text-4xl lg:text-6xl font-bold text-neutral-900 leading-tight tracking-tight">
                            Redefining the Crossroads of Traditional Finance and
                            the Crypto Frontier
                        </h2>
                        <p className="text-2xl text-neutral-600 italic font-light">
                            With purpose and precision.
                        </p>
                    </div>

                    <div className="space-y-12 text-xl text-neutral-700 leading-relaxed font-light">
                        <p className="text-center max-w-4xl mx-auto">
                            The crypto industry stands at a pivotal crossroads.
                            After years of volatility, experimentation, and
                            rapid growth, we are now witnessing the confluence
                            of traditional finance (TradFi) and blockchain
                            innovation. At Riverstone, we believe this
                            intersection presents unparalleled opportunities,
                            requiring a level of sophistication, diligence, and
                            foresight that aligns with our core expertise.
                        </p>

                        <div className="grid md:grid-cols-2 gap-8 my-16">
                            <Card className="bg-white/90 backdrop-blur-sm border-0 shadow-xl rounded-3xl p-8 hover:shadow-2xl transition-all duration-500 hover:scale-105">
                                <CardHeader className="pb-6">
                                    <CardTitle className="text-neutral-900 flex items-center text-2xl">
                                        <div className="w-12 h-12 bg-gradient-to-br from-neutral-700 to-neutral-800 rounded-2xl flex items-center justify-center mr-4 shadow-lg">
                                            <TrendingUp className="h-6 w-6 text-white" />
                                        </div>
                                        A Maturing Industry
                                    </CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <p className="text-neutral-600 leading-relaxed text-lg font-light">
                                        The crypto market has evolved beyond
                                        speculative fervor. Institutional
                                        adoption—evidenced by Bitcoin and
                                        Ethereum ETFs, tokenized assets, and
                                        real-world applications—transforms
                                        perceptions. BlackRock, JPMorgan, and
                                        Fidelity recognize blockchain&apos;s
                                        efficiency, transparency, and
                                        accessibility.
                                    </p>
                                </CardContent>
                            </Card>

                            <Card className="bg-white/90 backdrop-blur-sm border-0 shadow-xl rounded-3xl p-8 hover:shadow-2xl transition-all duration-500 hover:scale-105">
                                <CardHeader className="pb-6">
                                    <CardTitle className="text-neutral-900 flex items-center text-2xl">
                                        <div className="w-12 h-12 bg-gradient-to-br from-neutral-700 to-neutral-800 rounded-2xl flex items-center justify-center mr-4 shadow-lg">
                                            <Target className="h-6 w-6 text-white" />
                                        </div>
                                        Thoughtful Strategy
                                    </CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <p className="text-neutral-600 leading-relaxed text-lg font-light">
                                        Success requires more than technical
                                        innovation; it demands strategic
                                        clarity, financial precision, and
                                        actionable insights. The reckless
                                        gambling of early web3 VC is giving way
                                        to disciplined investment focused on
                                        value creation and operational
                                        resilience.
                                    </p>
                                </CardContent>
                            </Card>
                        </div>

                        <div className="bg-gradient-to-r from-neutral-50 via-stone-50 to-neutral-100 p-12 rounded-3xl border border-neutral-100/50 shadow-xl">
                            <h3 className="text-3xl font-bold text-neutral-900 mb-6 text-center">
                                The Promise of the Future
                            </h3>
                            <p className="text-neutral-700 leading-relaxed mb-6 text-lg font-light text-center max-w-4xl mx-auto">
                                We foresee a future where governments settle
                                debts in Bitcoin, blockchain enables
                                unprecedented financial transparency, and
                                crypto-native projects mature into indispensable
                                partners for institutions. This future
                                isn&apos;t just about technology—it&apos;s about
                                building the frameworks, partnerships, and trust
                                required to make it a reality.
                            </p>
                            <p className="text-neutral-700 leading-relaxed text-lg font-light text-center max-w-4xl mx-auto">
                                At Riverstone, we see ourselves as architects of
                                this future. By bridging the gap between
                                traditional finance and the crypto frontier, we
                                aim to turn ambitious visions into enduring
                                realities.
                            </p>
                        </div>

                        <div className="text-center bg-gradient-to-r from-neutral-900 via-neutral-800 to-neutral-900 text-white p-12 rounded-3xl shadow-2xl">
                            <h3 className="text-3xl font-bold mb-6">
                                Riverstone&apos;s Thesis
                            </h3>
                            <p className="text-xl leading-relaxed text-neutral-200 font-light max-w-4xl mx-auto">
                                <strong className="text-white text-2xl">
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
                </div>
            </div>
        </section>
    );
}
