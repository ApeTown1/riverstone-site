import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import { ArrowRight, CheckCircle, Target } from "lucide-react";

export function CaseStudiesSection() {
    return (
        <section className="py-24 bg-gradient-to-br from-neutral-50 to-stone-50">
            <div className="container mx-auto px-4 lg:px-6">
                <div className="text-center space-y-6 mb-20">
                    <Badge className="bg-gradient-to-r from-emerald-100 to-green-100 text-emerald-800 border-0 px-6 py-3 text-sm font-semibold rounded-full">
                        Case Studies
                    </Badge>
                    <h2 className="text-4xl lg:text-6xl font-bold text-neutral-900 tracking-tight">
                        Driving Impact Through Financial Expertise
                    </h2>
                    <p className="text-xl text-neutral-600 max-w-4xl mx-auto font-light leading-relaxed">
                        Discover how Riverstone helps innovative companies
                        overcome complex financial and strategic challenges. Our
                        case studies highlight tailored strategies, actionable
                        insights, and measurable results.
                    </p>
                </div>

                <div className="space-y-16">
                    {/* Case Study 1: Go-to-Market (moved to first) */}
                    <Card className="bg-gradient-to-br from-emerald-50/80 to-green-50/80 backdrop-blur-sm border-0 shadow-2xl rounded-3xl overflow-hidden hover:shadow-3xl transition-all duration-500">
                        <CardHeader className="bg-white/95 backdrop-blur-sm p-10">
                            <div className="flex items-center justify-between mb-6">
                                <Badge className="bg-gradient-to-r from-emerald-100 to-green-100 text-emerald-800 border-0 px-6 py-3 text-sm font-semibold rounded-full">
                                    Cross-Chain DeFi Staking / DeFi / AI
                                </Badge>
                                <div className="text-3xl font-bold bg-gradient-to-r from-emerald-700 to-emerald-800 bg-clip-text text-transparent">
                                    Full-Service GTM
                                </div>
                            </div>
                            <CardTitle className="text-3xl text-neutral-900 mb-4">
                                All-Inclusive Go-to-Market Mastery
                            </CardTitle>
                            <CardDescription className="text-neutral-600 text-xl font-light leading-relaxed">
                                A DeFi startup leveraging AI-driven automation
                                needed comprehensive support to transform
                                product development into market success.
                            </CardDescription>
                        </CardHeader>
                        <CardContent className="space-y-8 p-10">
                            <div className="grid md:grid-cols-2 gap-12">
                                <div className="space-y-6">
                                    <h4 className="font-semibold text-neutral-900 flex items-center text-xl">
                                        <div className="w-8 h-8 bg-gradient-to-br from-emerald-600 to-emerald-700 rounded-xl flex items-center justify-center mr-3">
                                            <Target className="h-4 w-4 text-white" />
                                        </div>
                                        The Challenge
                                    </h4>
                                    <p className="text-neutral-600 leading-relaxed text-lg font-light">
                                        Technical founders struggled to juggle
                                        product development with fundraising,
                                        branding, and market entry demands. They
                                        risked losing traction while being
                                        bogged down by tasks outside their
                                        expertise.
                                    </p>
                                </div>
                                <div className="space-y-6">
                                    <h4 className="font-semibold text-neutral-900 flex items-center text-xl">
                                        <div className="w-8 h-8 bg-gradient-to-br from-emerald-600 to-emerald-700 rounded-xl flex items-center justify-center mr-3">
                                            <CheckCircle className="h-4 w-4 text-white" />
                                        </div>
                                        The Solution
                                    </h4>
                                    <ul className="text-neutral-600 space-y-3 text-lg font-light">
                                        <li>
                                            • Brand narrative and website
                                            development
                                        </li>
                                        <li>
                                            • On-ground support at Token2049
                                            Dubai
                                        </li>
                                        <li>• Customer pipeline development</li>
                                        <li>
                                            • Social media management and
                                            rebranding
                                        </li>
                                        <li>• Warm investor introductions</li>
                                    </ul>
                                </div>
                            </div>
                            <div className="bg-white/90 backdrop-blur-sm p-8 rounded-2xl border border-emerald-100/50 shadow-lg">
                                <h4 className="font-semibold text-neutral-900 mb-4 text-xl">
                                    The Impact
                                </h4>
                                <p className="text-neutral-600 leading-relaxed text-lg font-light">
                                    Strong traction in investor meetings,
                                    bustling customer and partner pipeline, and
                                    controlled public narrative. Founders stayed
                                    focused on product development and deal
                                    closures while Riverstone&apos;s
                                    round-the-clock support provided
                                    cost-effective peace of mind.
                                </p>
                            </div>
                        </CardContent>
                    </Card>

                    {/* Case Study 2: Gaming */}
                    <Card className="bg-gradient-to-br from-neutral-50/80 to-stone-50/80 backdrop-blur-sm border-0 shadow-2xl rounded-3xl overflow-hidden hover:shadow-3xl transition-all duration-500">
                        <CardHeader className="bg-white/95 backdrop-blur-sm p-10">
                            <div className="flex items-center justify-between mb-6">
                                <Badge className="bg-gradient-to-r from-neutral-100 to-stone-100 text-neutral-800 border-0 px-6 py-3 text-sm font-semibold rounded-full">
                                    Gaming & TON Ecosystem
                                </Badge>
                                <div className="text-3xl font-bold bg-gradient-to-r from-neutral-800 to-neutral-900 bg-clip-text text-transparent">
                                    $10M Raise
                                </div>
                            </div>
                            <CardTitle className="text-3xl text-neutral-900 mb-4">
                                Building a Financial Narrative for a $10M Raise
                                in Gaming
                            </CardTitle>
                            <CardDescription className="text-neutral-600 text-xl font-light leading-relaxed">
                                A high-potential Web3 gaming startup in the TON
                                ecosystem needed to justify a $100M valuation to
                                professional investors—and they needed it fast.
                            </CardDescription>
                        </CardHeader>
                        <CardContent className="space-y-8 p-10">
                            <div className="grid md:grid-cols-2 gap-12">
                                <div className="space-y-6">
                                    <h4 className="font-semibold text-neutral-900 flex items-center text-xl">
                                        <div className="w-8 h-8 bg-gradient-to-br from-neutral-700 to-neutral-800 rounded-xl flex items-center justify-center mr-3">
                                            <Target className="h-4 w-4 text-white" />
                                        </div>
                                        The Challenge
                                    </h4>
                                    <p className="text-neutral-600 leading-relaxed text-lg font-light">
                                        How could they justify a nine-figure
                                        valuation to professional investors? How
                                        could they present both revenue
                                        potential and token dynamics without
                                        overwhelming stakeholders? All in under
                                        a week.
                                    </p>
                                </div>
                                <div className="space-y-6">
                                    <h4 className="font-semibold text-neutral-900 flex items-center text-xl">
                                        <div className="w-8 h-8 bg-gradient-to-br from-emerald-600 to-emerald-700 rounded-xl flex items-center justify-center mr-3">
                                            <CheckCircle className="h-4 w-4 text-white" />
                                        </div>
                                        The Solution
                                    </h4>
                                    <ul className="text-neutral-600 space-y-3 text-lg font-light">
                                        <li>
                                            • Vision translation into credible
                                            financial narrative
                                        </li>
                                        <li>
                                            • Web2/Web3 comparable benchmarking
                                        </li>
                                        <li>
                                            • Dual revenue modeling (product +
                                            token)
                                        </li>
                                        <li>
                                            • Dynamic investor-ready financial
                                            model
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div className="bg-white/90 backdrop-blur-sm p-8 rounded-2xl border border-neutral-100/50 shadow-lg">
                                <h4 className="font-semibold text-neutral-900 mb-4 text-xl">
                                    The Impact
                                </h4>
                                <p className="text-neutral-600 leading-relaxed text-lg font-light">
                                    In seven days, Riverstone delivered a
                                    complete valuation and fundraising toolkit.
                                    The financial model became a core component
                                    of the investor pitch, helping founders move
                                    conversations forward with clarity and
                                    confidence. The $10M raise became not only
                                    credible but compelling.
                                </p>
                            </div>
                        </CardContent>
                    </Card>

                    {/* Case Study 3: M&A */}
                    <Card className="bg-gradient-to-br from-stone-50/80 to-neutral-50/80 backdrop-blur-sm border-0 shadow-2xl rounded-3xl overflow-hidden hover:shadow-3xl transition-all duration-500">
                        <CardHeader className="bg-white/95 backdrop-blur-sm p-10">
                            <div className="flex items-center justify-between mb-6">
                                <Badge className="bg-gradient-to-r from-stone-100 to-neutral-100 text-stone-800 border-0 px-6 py-3 text-sm font-semibold rounded-full">
                                    On-Chain Credit / a16z Portfolio
                                </Badge>
                                <div className="text-3xl font-bold bg-gradient-to-r from-neutral-800 to-neutral-900 bg-clip-text text-transparent">
                                    Strategic Growth
                                </div>
                            </div>
                            <CardTitle className="text-3xl text-neutral-900 mb-4">
                                M&A Mediation as a Strategic Growth Catalyst
                            </CardTitle>
                            <CardDescription className="text-neutral-600 text-xl font-light leading-relaxed">
                                An Andreessen Horowitz (a16z) portfolio company
                                making credit more accessible, transparent, and
                                programmable by bringing debt infrastructure
                                on-chain needed to decide: acquire a target
                                company or build a new business unit internally?
                            </CardDescription>
                        </CardHeader>
                        <CardContent className="space-y-8 p-10">
                            <div className="grid md:grid-cols-2 gap-12">
                                <div className="space-y-6">
                                    <h4 className="font-semibold text-neutral-900 flex items-center text-xl">
                                        <div className="w-8 h-8 bg-gradient-to-br from-neutral-700 to-neutral-800 rounded-xl flex items-center justify-center mr-3">
                                            <Target className="h-4 w-4 text-white" />
                                        </div>
                                        The Challenge
                                    </h4>
                                    <p className="text-neutral-600 leading-relaxed text-lg font-light">
                                        The client needed a decision framework,
                                        not just a valuation. Should they
                                        acquire to leverage licensing and
                                        technology, or build internally at a
                                        slower but more controlled pace?
                                    </p>
                                </div>
                                <div className="space-y-6">
                                    <h4 className="font-semibold text-neutral-900 flex items-center text-xl">
                                        <div className="w-8 h-8 bg-gradient-to-br from-emerald-600 to-emerald-700 rounded-xl flex items-center justify-center mr-3">
                                            <CheckCircle className="h-4 w-4 text-white" />
                                        </div>
                                        The Solution
                                    </h4>
                                    <ul className="text-neutral-600 space-y-3 text-lg font-light">
                                        <li>
                                            • Mediated buyer-seller
                                            communication
                                        </li>
                                        <li>
                                            • Full-spectrum due diligence
                                            coordination
                                        </li>
                                        <li>
                                            • Dynamic decision modeling (acquire
                                            vs. build)
                                        </li>
                                        <li>
                                            • Strategic guidance and executive
                                            insights
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div className="bg-white/90 backdrop-blur-sm p-8 rounded-2xl border border-neutral-100/50 shadow-lg">
                                <h4 className="font-semibold text-neutral-900 mb-4 text-xl">
                                    The Impact
                                </h4>
                                <p className="text-neutral-600 leading-relaxed text-lg font-light">
                                    Riverstone enabled a clear, confident
                                    decision aligned with long-term goals. What
                                    began as M&A mediation turned into a
                                    strategic partnership. Today, we continue to
                                    support their growth journey through
                                    research, advisory, and special projects.
                                </p>
                            </div>
                        </CardContent>
                    </Card>
                </div>

                <div className="text-center mt-16">
                    <Button
                        size="lg"
                        className="bg-gradient-to-r from-neutral-900 to-neutral-800 hover:from-neutral-800 hover:to-neutral-700 text-white font-semibold px-12 py-4 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105 text-lg"
                    >
                        Discuss Your Project
                        <ArrowRight className="ml-3 h-5 w-5" />
                    </Button>
                </div>
            </div>
        </section>
    );
}
