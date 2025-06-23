import { Badge } from "@/components/ui/badge";
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import {
    TrendingUp,
    Target,
    Globe,
    Users,
    BarChart3,
    CheckCircle,
} from "lucide-react";

export function ServicesSection() {
    return (
        <section id="services" className="py-24 bg-white/60 backdrop-blur-sm">
            <div className="container mx-auto px-4 lg:px-6">
                <div className="text-center space-y-6 mb-20">
                    <Badge className="bg-gradient-to-r from-neutral-100 to-stone-100 text-neutral-800 border-0 px-6 py-3 text-sm font-semibold rounded-full">
                        Our Services
                    </Badge>
                    <h2 className="text-4xl lg:text-6xl font-bold text-neutral-900 tracking-tight">
                        Strategic Advisory That Drives Growth
                    </h2>
                    <p className="text-xl text-neutral-600 max-w-4xl mx-auto font-light leading-relaxed">
                        From fundraising to go-to-market, we design strategies
                        around what actually drives growth — in revenue, users,
                        markets, and reputation.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    <Card className="bg-white/90 backdrop-blur-sm border-0 shadow-xl rounded-3xl hover:shadow-2xl transition-all duration-500 hover:scale-105 group">
                        <CardHeader className="pb-6">
                            <div className="w-16 h-16 bg-gradient-to-br from-neutral-700 to-neutral-800 rounded-3xl flex items-center justify-center mb-6 shadow-lg group-hover:scale-110 transition-transform duration-300">
                                <TrendingUp className="h-8 w-8 text-white" />
                            </div>
                            <CardTitle className="text-neutral-900 text-2xl">
                                Fundraising & Investor Strategy
                            </CardTitle>
                            <CardDescription className="text-neutral-600 text-lg font-light leading-relaxed">
                                End-to-end fundraising support from deck
                                refinement to investor introductions, backed by
                                deep venture and PE experience.
                            </CardDescription>
                        </CardHeader>
                        <CardContent>
                            <ul className="space-y-4 text-neutral-600">
                                <li className="flex items-center text-lg">
                                    <CheckCircle className="h-5 w-5 text-emerald-500 mr-4 flex-shrink-0" />
                                    Deck refinement & narrative framing
                                </li>
                                <li className="flex items-center text-lg">
                                    <CheckCircle className="h-5 w-5 text-emerald-500 mr-4 flex-shrink-0" />
                                    Investor targeting & warm introductions
                                </li>
                                <li className="flex items-center text-lg">
                                    <CheckCircle className="h-5 w-5 text-emerald-500 mr-4 flex-shrink-0" />
                                    Portfolio advisory for VCs & angels
                                </li>
                            </ul>
                        </CardContent>
                    </Card>

                    <Card className="bg-white/90 backdrop-blur-sm border-0 shadow-xl rounded-3xl hover:shadow-2xl transition-all duration-500 hover:scale-105 group">
                        <CardHeader className="pb-6">
                            <div className="w-16 h-16 bg-gradient-to-br from-neutral-700 to-neutral-800 rounded-3xl flex items-center justify-center mb-6 shadow-lg group-hover:scale-110 transition-transform duration-300">
                                <Target className="h-8 w-8 text-white" />
                            </div>
                            <CardTitle className="text-neutral-900 text-2xl">
                                Go-to-Market & Ecosystem Launch
                            </CardTitle>
                            <CardDescription className="text-neutral-600 text-lg font-light leading-relaxed">
                                Strategic market entry that delivers real
                                traction through brand positioning, growth
                                loops, and ecosystem activation.
                            </CardDescription>
                        </CardHeader>
                        <CardContent>
                            <ul className="space-y-4 text-neutral-600">
                                <li className="flex items-center text-lg">
                                    <CheckCircle className="h-5 w-5 text-emerald-500 mr-4 flex-shrink-0" />
                                    Brand positioning & content strategy
                                </li>
                                <li className="flex items-center text-lg">
                                    <CheckCircle className="h-5 w-5 text-emerald-500 mr-4 flex-shrink-0" />
                                    KOL activations & community building
                                </li>
                                <li className="flex items-center text-lg">
                                    <CheckCircle className="h-5 w-5 text-emerald-500 mr-4 flex-shrink-0" />
                                    Partnership & conference strategy
                                </li>
                            </ul>
                        </CardContent>
                    </Card>

                    <Card className="bg-white/90 backdrop-blur-sm border-0 shadow-xl rounded-3xl hover:shadow-2xl transition-all duration-500 hover:scale-105 group">
                        <CardHeader className="pb-6">
                            <div className="w-16 h-16 bg-gradient-to-br from-neutral-700 to-neutral-800 rounded-3xl flex items-center justify-center mb-6 shadow-lg group-hover:scale-110 transition-transform duration-300">
                                <Globe className="h-8 w-8 text-white" />
                            </div>
                            <CardTitle className="text-neutral-900 text-2xl">
                                Public Relations & Narrative Strategy
                            </CardTitle>
                            <CardDescription className="text-neutral-600 text-lg font-light leading-relaxed">
                                KPI-backed media strategies that secure coverage
                                in top-tier publications and build trust with
                                key stakeholders.
                            </CardDescription>
                        </CardHeader>
                        <CardContent>
                            <ul className="space-y-4 text-neutral-600">
                                <li className="flex items-center text-lg">
                                    <CheckCircle className="h-5 w-5 text-emerald-500 mr-4 flex-shrink-0" />
                                    Tier-1 media placements & coverage
                                </li>
                                <li className="flex items-center text-lg">
                                    <CheckCircle className="h-5 w-5 text-emerald-500 mr-4 flex-shrink-0" />
                                    Podcast bookings & speaking slots
                                </li>
                                <li className="flex items-center text-lg">
                                    <CheckCircle className="h-5 w-5 text-emerald-500 mr-4 flex-shrink-0" />
                                    Twitter/X Spaces & thought leadership
                                </li>
                            </ul>
                        </CardContent>
                    </Card>

                    <Card className="bg-white/90 backdrop-blur-sm border-0 shadow-xl rounded-3xl hover:shadow-2xl transition-all duration-500 hover:scale-105 group">
                        <CardHeader className="pb-6">
                            <div className="w-16 h-16 bg-gradient-to-br from-neutral-700 to-neutral-800 rounded-3xl flex items-center justify-center mb-6 shadow-lg group-hover:scale-110 transition-transform duration-300">
                                <Users className="h-8 w-8 text-white" />
                            </div>
                            <CardTitle className="text-neutral-900 text-2xl">
                                Corporate & Investor Services
                            </CardTitle>
                            <CardDescription className="text-neutral-600 text-lg font-light leading-relaxed">
                                Institutional-grade advisory for M&A strategy,
                                investor communications, and portfolio-level
                                strategic planning.
                            </CardDescription>
                        </CardHeader>
                        <CardContent>
                            <ul className="space-y-4 text-neutral-600">
                                <li className="flex items-center text-lg">
                                    <CheckCircle className="h-5 w-5 text-emerald-500 mr-4 flex-shrink-0" />
                                    M&A strategy & deal planning
                                </li>
                                <li className="flex items-center text-lg">
                                    <CheckCircle className="h-5 w-5 text-emerald-500 mr-4 flex-shrink-0" />
                                    Token treasury management
                                </li>
                                <li className="flex items-center text-lg">
                                    <CheckCircle className="h-5 w-5 text-emerald-500 mr-4 flex-shrink-0" />
                                    Strategic outreach & partnerships
                                </li>
                            </ul>
                        </CardContent>
                    </Card>

                    <Card className="bg-white/90 backdrop-blur-sm border-0 shadow-xl rounded-3xl hover:shadow-2xl transition-all duration-500 hover:scale-105 group">
                        <CardHeader className="pb-6">
                            <div className="w-16 h-16 bg-gradient-to-br from-neutral-700 to-neutral-800 rounded-3xl flex items-center justify-center mb-6 shadow-lg group-hover:scale-110 transition-transform duration-300">
                                <BarChart3 className="h-8 w-8 text-white" />
                            </div>
                            <CardTitle className="text-neutral-900 text-2xl">
                                Financial Modeling & Valuation
                            </CardTitle>
                            <CardDescription className="text-neutral-600 text-lg font-light leading-relaxed">
                                Investor-grade financial models and valuations
                                that translate complex tokenomics into
                                actionable business insight.
                            </CardDescription>
                        </CardHeader>
                        <CardContent>
                            <ul className="space-y-4 text-neutral-600">
                                <li className="flex items-center text-lg">
                                    <CheckCircle className="h-5 w-5 text-emerald-500 mr-4 flex-shrink-0" />
                                    Tokenomics & revenue modeling
                                </li>
                                <li className="flex items-center text-lg">
                                    <CheckCircle className="h-5 w-5 text-emerald-500 mr-4 flex-shrink-0" />
                                    Strategic business cases
                                </li>
                                <li className="flex items-center text-lg">
                                    <CheckCircle className="h-5 w-5 text-emerald-500 mr-4 flex-shrink-0" />
                                    Board-level financial analysis
                                </li>
                            </ul>
                        </CardContent>
                    </Card>
                </div>
            </div>
        </section>
    );
}
