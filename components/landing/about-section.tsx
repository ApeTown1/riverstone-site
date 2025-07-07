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
                            Riverstone isn’t an agency — we’re a high-conviction advisory. We combine deep traditional finance experience with hands-on execution in Web3, helping founders tie every strategic thread — PR, go-to-market, fundraising, and valuations — into one cohesive story.
                            </p>
                            <p className="text-base md:text-xl text-neutral-600 leading-relaxed font-light">
                            Most firms offer fragmented support across marketing, comms, and capital; we ensure these elements are tightly aligned so nothing falls through the cracks when it matters most.
                            </p>
                            <p className="text-base md:text-xl text-neutral-600 leading-relaxed font-light">
                            Our edge is execution with precision. We don’t just “make intros” — we coach founders on how to present, pitch, and follow up with investors. We prepare your decks, hone your messaging, sit with you on investor calls, and guide the negotiation. We know what investors need to hear, when they need to hear it, and how to move deals from interest to commitment.
                            </p>
                        </div>

                        <div className="space-y-8">
                            <p className="text-base md:text-xl text-neutral-600 leading-relaxed font-light">
                            Where others forward a deck and hope for the best, we train you to win the second meeting — because that’s when the real opportunity begins. We protect our investor network by only sharing quality. We train founders to avoid rookie mistakes. And we don’t just care about deliverables — we care about outcomes.
                            </p>
                            <p className="text-base md:text-xl text-neutral-600 leading-relaxed font-light">
                            Riverstone was built for founders who are serious, coachable, and ready to grow. We take on a small number of clients at a time, integrate deeply into each team, and deliver work that turns brand equity into real-world traction. Our partners — from investors to media to ecosystems — trust our name. We guard that trust by only backing teams we believe in, and putting everything behind them.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
