"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { TrendingUp, Users, BarChart3, Globe, ArrowRight, CheckCircle, Target } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export default function CryptoAdvisoryLanding() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-neutral-50 via-white to-stone-50/30">
      {/* Header */}
      <header className="border-b border-white/20 bg-white/80 backdrop-blur-2xl sticky top-0 z-50 shadow-sm">
        <div className="container mx-auto px-4 lg:px-6 h-20 flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <Image src="/riverstone-logo.png" alt="Riverstone Logo" width={40} height={40} className="object-contain" />
            <span
              className="text-2xl tracking-tight text-neutral-900"
              style={{ fontFamily: "system-ui, -apple-system, sans-serif" }}
            >
              <span className="font-bold">RIVER</span>
              <span className="font-normal">STONE</span>
            </span>
          </div>
          <nav className="hidden md:flex items-center space-x-10">
            <Link
              href="#services"
              className="text-sm font-semibold text-neutral-700 hover:text-neutral-900 transition-all duration-300 hover:scale-105"
            >
              Services
            </Link>
            <Link
              href="#insights"
              className="text-sm font-semibold text-neutral-700 hover:text-neutral-900 transition-all duration-300 hover:scale-105"
            >
              Market Insights
            </Link>
            <Link
              href="#team"
              className="text-sm font-semibold text-neutral-700 hover:text-neutral-900 transition-all duration-300 hover:scale-105"
            >
              Team
            </Link>
            <Link
              href="#contact"
              className="text-sm font-semibold text-neutral-700 hover:text-neutral-900 transition-all duration-300 hover:scale-105"
            >
              Contact
            </Link>
          </nav>
          <div className="hidden md:flex items-center space-x-4 ml-6">
            <Button
              size="sm"
              variant="ghost"
              className="text-neutral-600 hover:text-neutral-900 p-2 rounded-xl transition-all duration-300 hover:scale-105"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
              </svg>
            </Button>
            <Button
              size="sm"
              variant="ghost"
              className="text-neutral-600 hover:text-neutral-900 p-2 rounded-xl transition-all duration-300 hover:scale-105"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
              </svg>
            </Button>
          </div>
          <Button className="bg-gradient-to-r from-neutral-900 to-neutral-800 hover:from-neutral-800 hover:to-neutral-700 text-white font-semibold px-6 py-3 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
            Book Consultation
          </Button>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative py-24 lg:py-40 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-neutral-50/50 via-stone-50/30 to-neutral-100/50" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(0,0,0,0.05),transparent_50%)] bg-[radial-gradient(circle_at_70%_80%,rgba(0,0,0,0.03),transparent_50%)]" />

        <div className="container mx-auto px-4 lg:px-6 relative">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-10">
              <div className="space-y-8">
                <h1 className="text-5xl lg:text-7xl font-bold leading-tight tracking-tight">
                  Bridge{" "}
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-neutral-800 via-neutral-900 to-neutral-700">
                    Traditional Finance
                  </span>{" "}
                  with Web3 Innovation
                </h1>
                <p className="text-xl lg:text-2xl text-neutral-600 leading-relaxed font-light">
                  Boutique strategic advisory for startups, protocols, and investors. We help you tell sharper stories,
                  attract the right capital, and scale with credibility across Web2, Web3, and everything in between.
                </p>
                <div className="bg-gradient-to-r from-neutral-50 to-stone-50 p-6 rounded-2xl border border-neutral-100/50 shadow-lg">
                  <p className="text-neutral-800 font-semibold text-lg">
                    <strong>KPI-Driven Results:</strong> We work on measurable outcomes. When work isn't delivered to
                    standard, invoices aren't sent and clients aren't billed.
                  </p>
                </div>
              </div>
              <div className="flex flex-col sm:flex-row gap-6">
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-neutral-900 to-neutral-800 hover:from-neutral-800 hover:to-neutral-700 text-white font-semibold px-10 py-4 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105 text-lg"
                  onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
                >
                  Start Your Journey
                  <ArrowRight className="ml-3 h-5 w-5" />
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-2 border-neutral-200 text-neutral-700 hover:bg-neutral-50 px-10 py-4 rounded-2xl font-semibold hover:shadow-lg transition-all duration-300 hover:scale-105 text-lg"
                >
                  View Our Track Record
                </Button>
              </div>
              <div className="grid grid-cols-3 gap-10 pt-12">
                <div className="text-center group">
                  <div className="text-4xl lg:text-5xl font-bold bg-gradient-to-r from-neutral-800 to-neutral-900 bg-clip-text text-transparent group-hover:scale-110 transition-transform duration-300">
                    3 Years
                  </div>
                  <div className="text-sm text-neutral-500 font-medium mt-2">Team Since 2021</div>
                </div>
                <div className="text-center group">
                  <div className="text-4xl lg:text-5xl font-bold bg-gradient-to-r from-neutral-800 to-neutral-900 bg-clip-text text-transparent group-hover:scale-110 transition-transform duration-300">
                    Global
                  </div>
                  <div className="text-sm text-neutral-500 font-medium mt-2">Reach & Experience</div>
                </div>
                <div className="text-center group">
                  <div className="text-4xl lg:text-5xl font-bold bg-gradient-to-r from-neutral-800 to-neutral-900 bg-clip-text text-transparent group-hover:scale-110 transition-transform duration-300">
                    Since 2024
                  </div>
                  <div className="text-sm text-neutral-500 font-medium mt-2">Riverstone Founded</div>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-neutral-200/40 to-stone-200/40 rounded-3xl blur-3xl opacity-60 animate-pulse" />
              <div className="relative bg-white/90 backdrop-blur-sm rounded-3xl p-2 shadow-2xl border border-white/50">
                <Image
                  src="/placeholder.svg?height=600&width=600"
                  alt="Crypto Trading Dashboard"
                  width={600}
                  height={600}
                  className="rounded-2xl"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-24 bg-white/60 backdrop-blur-sm">
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
                <p className="text-xl text-neutral-600 leading-relaxed font-light">
                  Since 2016, we have worked with investments in private equity, venture capital, private debt,
                  corporate finance, strategy consulting, and asset management. Our team has been collaborating since
                  2021.
                </p>
                <p className="text-xl text-neutral-600 leading-relaxed font-light">
                  With global financial experience across London, Cape Town, Tel Aviv, and Argentina, our team of five
                  is based in central hours and easily accessible to the global stage.
                </p>
                <p className="text-xl text-neutral-600 leading-relaxed font-light">
                  At Riverstone, we bring over a decade of expertise in traditional finance to the forefront of
                  innovation. We bridge conventional finance with the transformative world of blockchain and crypto.
                </p>
              </div>

              <div className="space-y-8">
                <p className="text-xl text-neutral-600 leading-relaxed font-light">
                  Driven by integrity, collaboration, and excellence, our mission is to empower businesses navigating
                  this dynamic space. We deliver tailored financial advisory solutions grounded in strategic insight and
                  forward-thinking vision.
                </p>
                <p className="text-xl text-neutral-600 leading-relaxed font-light">
                  We help clients overcome complexities, unlock potential, and achieve enduring success. In a world of
                  change, we are your trusted partner for growth.
                </p>
                <div className="bg-gradient-to-r from-neutral-50 to-stone-50 p-8 rounded-3xl border border-neutral-100/50 shadow-lg">
                  <p className="text-neutral-900 font-semibold text-center text-lg italic">
                    "We aim to provide an exceptional service to our clients. We want to be measured against the best in
                    the world."
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Thesis Section */}
      <section className="py-24 bg-gradient-to-br from-neutral-50 via-stone-50 to-neutral-100">
        <div className="container mx-auto px-4 lg:px-6">
          <div className="max-w-6xl mx-auto">
            <div className="text-center space-y-6 mb-16">
              <Badge className="bg-gradient-to-r from-neutral-100 to-stone-100 text-neutral-800 border-0 px-6 py-3 text-sm font-semibold rounded-full">
                Our Thesis
              </Badge>
              <h2 className="text-4xl lg:text-6xl font-bold text-neutral-900 leading-tight tracking-tight">
                Redefining the Crossroads of Traditional Finance and the Crypto Frontier
              </h2>
              <p className="text-2xl text-neutral-600 italic font-light">With purpose and precision.</p>
            </div>

            <div className="space-y-12 text-xl text-neutral-700 leading-relaxed font-light">
              <p className="text-center max-w-4xl mx-auto">
                The crypto industry stands at a pivotal crossroads. After years of volatility, experimentation, and
                rapid growth, we are now witnessing the confluence of traditional finance (TradFi) and blockchain
                innovation. At Riverstone, we believe this intersection presents unparalleled opportunities, requiring a
                level of sophistication, diligence, and foresight that aligns with our core expertise.
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
                      The crypto market has evolved beyond speculative fervor. Institutional adoption—evidenced by
                      Bitcoin and Ethereum ETFs, tokenized assets, and real-world applications—transforms perceptions.
                      BlackRock, JPMorgan, and Fidelity recognize blockchain's efficiency, transparency, and
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
                      Success requires more than technical innovation; it demands strategic clarity, financial
                      precision, and actionable insights. The reckless gambling of early web3 VC is giving way to
                      disciplined investment focused on value creation and operational resilience.
                    </p>
                  </CardContent>
                </Card>
              </div>

              <div className="bg-gradient-to-r from-neutral-50 via-stone-50 to-neutral-100 p-12 rounded-3xl border border-neutral-100/50 shadow-xl">
                <h3 className="text-3xl font-bold text-neutral-900 mb-6 text-center">The Promise of the Future</h3>
                <p className="text-neutral-700 leading-relaxed mb-6 text-lg font-light text-center max-w-4xl mx-auto">
                  We foresee a future where governments settle debts in Bitcoin, blockchain enables unprecedented
                  financial transparency, and crypto-native projects mature into indispensable partners for
                  institutions. This future isn't just about technology—it's about building the frameworks,
                  partnerships, and trust required to make it a reality.
                </p>
                <p className="text-neutral-700 leading-relaxed text-lg font-light text-center max-w-4xl mx-auto">
                  At Riverstone, we see ourselves as architects of this future. By bridging the gap between traditional
                  finance and the crypto frontier, we aim to turn ambitious visions into enduring realities.
                </p>
              </div>

              <div className="text-center bg-gradient-to-r from-neutral-900 via-neutral-800 to-neutral-900 text-white p-12 rounded-3xl shadow-2xl">
                <h3 className="text-3xl font-bold mb-6">Riverstone's Thesis</h3>
                <p className="text-xl leading-relaxed text-neutral-200 font-light max-w-4xl mx-auto">
                  <strong className="text-white text-2xl">
                    Crypto's potential lies not in its divergence from traditional finance but in its ability to
                    complement and transform it.
                  </strong>{" "}
                  Riverstone stands at this intersection, committed to creating value, fostering innovation, and
                  navigating the complexities of this dynamic industry.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
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
              From fundraising to go-to-market, we design strategies around what actually drives growth — in revenue,
              users, markets, and reputation.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="bg-white/90 backdrop-blur-sm border-0 shadow-xl rounded-3xl hover:shadow-2xl transition-all duration-500 hover:scale-105 group">
              <CardHeader className="pb-6">
                <div className="w-16 h-16 bg-gradient-to-br from-neutral-700 to-neutral-800 rounded-3xl flex items-center justify-center mb-6 shadow-lg group-hover:scale-110 transition-transform duration-300">
                  <TrendingUp className="h-8 w-8 text-white" />
                </div>
                <CardTitle className="text-neutral-900 text-2xl">Fundraising & Investor Strategy</CardTitle>
                <CardDescription className="text-neutral-600 text-lg font-light leading-relaxed">
                  End-to-end fundraising support from deck refinement to investor introductions, backed by deep venture
                  and PE experience.
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
                <CardTitle className="text-neutral-900 text-2xl">Go-to-Market & Ecosystem Launch</CardTitle>
                <CardDescription className="text-neutral-600 text-lg font-light leading-relaxed">
                  Strategic market entry that delivers real traction through brand positioning, growth loops, and
                  ecosystem activation.
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
                <CardTitle className="text-neutral-900 text-2xl">Public Relations & Narrative Strategy</CardTitle>
                <CardDescription className="text-neutral-600 text-lg font-light leading-relaxed">
                  KPI-backed media strategies that secure coverage in top-tier publications and build trust with key
                  stakeholders.
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
                <CardTitle className="text-neutral-900 text-2xl">Corporate & Investor Services</CardTitle>
                <CardDescription className="text-neutral-600 text-lg font-light leading-relaxed">
                  Institutional-grade advisory for M&A strategy, investor communications, and portfolio-level strategic
                  planning.
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
                <CardTitle className="text-neutral-900 text-2xl">Financial Modeling & Valuation</CardTitle>
                <CardDescription className="text-neutral-600 text-lg font-light leading-relaxed">
                  Investor-grade financial models and valuations that translate complex tokenomics into actionable
                  business insight.
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

      {/* Case Studies Section */}
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
              Discover how Riverstone helps innovative companies overcome complex financial and strategic challenges.
              Our case studies highlight tailored strategies, actionable insights, and measurable results.
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
                <CardTitle className="text-3xl text-neutral-900 mb-4">All-Inclusive Go-to-Market Mastery</CardTitle>
                <CardDescription className="text-neutral-600 text-xl font-light leading-relaxed">
                  A DeFi startup leveraging AI-driven automation needed comprehensive support to transform product
                  development into market success.
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
                      Technical founders struggled to juggle product development with fundraising, branding, and market
                      entry demands. They risked losing traction while being bogged down by tasks outside their
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
                      <li>• Brand narrative and website development</li>
                      <li>• On-ground support at Token2049 Dubai</li>
                      <li>• Customer pipeline development</li>
                      <li>• Social media management and rebranding</li>
                      <li>• Warm investor introductions</li>
                    </ul>
                  </div>
                </div>
                <div className="bg-white/90 backdrop-blur-sm p-8 rounded-2xl border border-emerald-100/50 shadow-lg">
                  <h4 className="font-semibold text-neutral-900 mb-4 text-xl">The Impact</h4>
                  <p className="text-neutral-600 leading-relaxed text-lg font-light">
                    Strong traction in investor meetings, bustling customer and partner pipeline, and controlled public
                    narrative. Founders stayed focused on product development and deal closures while Riverstone's
                    round-the-clock support provided cost-effective peace of mind.
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
                  Building a Financial Narrative for a $10M Raise in Gaming
                </CardTitle>
                <CardDescription className="text-neutral-600 text-xl font-light leading-relaxed">
                  A high-potential Web3 gaming startup in the TON ecosystem needed to justify a $100M valuation to
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
                      How could they justify a nine-figure valuation to professional investors? How could they present
                      both revenue potential and token dynamics without overwhelming stakeholders? All in under a week.
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
                      <li>• Vision translation into credible financial narrative</li>
                      <li>• Web2/Web3 comparable benchmarking</li>
                      <li>• Dual revenue modeling (product + token)</li>
                      <li>• Dynamic investor-ready financial model</li>
                    </ul>
                  </div>
                </div>
                <div className="bg-white/90 backdrop-blur-sm p-8 rounded-2xl border border-neutral-100/50 shadow-lg">
                  <h4 className="font-semibold text-neutral-900 mb-4 text-xl">The Impact</h4>
                  <p className="text-neutral-600 leading-relaxed text-lg font-light">
                    In seven days, Riverstone delivered a complete valuation and fundraising toolkit. The financial
                    model became a core component of the investor pitch, helping founders move conversations forward
                    with clarity and confidence. The $10M raise became not only credible but compelling.
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
                  An Andreessen Horowitz (a16z) portfolio company making credit more accessible, transparent, and
                  programmable by bringing debt infrastructure on-chain needed to decide: acquire a target company or
                  build a new business unit internally?
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
                      The client needed a decision framework, not just a valuation. Should they acquire to leverage
                      licensing and technology, or build internally at a slower but more controlled pace?
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
                      <li>• Mediated buyer-seller communication</li>
                      <li>• Full-spectrum due diligence coordination</li>
                      <li>• Dynamic decision modeling (acquire vs. build)</li>
                      <li>• Strategic guidance and executive insights</li>
                    </ul>
                  </div>
                </div>
                <div className="bg-white/90 backdrop-blur-sm p-8 rounded-2xl border border-neutral-100/50 shadow-lg">
                  <h4 className="font-semibold text-neutral-900 mb-4 text-xl">The Impact</h4>
                  <p className="text-neutral-600 leading-relaxed text-lg font-light">
                    Riverstone enabled a clear, confident decision aligned with long-term goals. What began as M&A
                    mediation turned into a strategic partnership. Today, we continue to support their growth journey
                    through research, advisory, and special projects.
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

      {/* Market Insights Section */}
      <section id="insights" className="py-24 bg-white/60 backdrop-blur-sm">
        <div className="container mx-auto px-4 lg:px-6">
          <div className="text-center space-y-6 mb-20">
            <Badge className="bg-gradient-to-r from-neutral-100 to-stone-100 text-neutral-800 border-0 px-6 py-3 text-sm font-semibold rounded-full">
              Market Intelligence
            </Badge>
            <h2 className="text-4xl lg:text-6xl font-bold text-neutral-900 tracking-tight">
              Strategic Insights That Drive Decisions
            </h2>
            <p className="text-xl text-neutral-600 max-w-4xl mx-auto font-light leading-relaxed">
              Stay ahead with our analysis of market trends, funding patterns, and strategic opportunities across Web2
              and Web3.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-12">
              <div className="grid grid-cols-3 gap-6">
                <Card className="bg-white/90 backdrop-blur-sm border-0 shadow-xl rounded-3xl p-6 hover:shadow-2xl transition-all duration-300 hover:scale-105">
                  <div className="flex items-center justify-between mb-4">
                    <div className="text-sm font-semibold text-neutral-500">Bitcoin</div>
                    <TrendingUp className="h-5 w-5 text-emerald-500" />
                  </div>
                  <div className="text-2xl font-bold text-neutral-900">$67,234</div>
                  <div className="text-sm text-emerald-500 font-semibold">+5.2% (24h)</div>
                </Card>

                <Card className="bg-white/90 backdrop-blur-sm border-0 shadow-xl rounded-3xl p-6 hover:shadow-2xl transition-all duration-300 hover:scale-105">
                  <div className="flex items-center justify-between mb-4">
                    <div className="text-sm font-semibold text-neutral-500">Ethereum</div>
                    <TrendingUp className="h-5 w-5 text-emerald-500" />
                  </div>
                  <div className="text-2xl font-bold text-neutral-900">$3,456</div>
                  <div className="text-sm text-emerald-500 font-semibold">+3.8% (24h)</div>
                </Card>

                <Card className="bg-white/90 backdrop-blur-sm border-0 shadow-xl rounded-3xl p-6 hover:shadow-2xl transition-all duration-300 hover:scale-105">
                  <div className="flex items-center justify-between mb-4">
                    <div className="text-sm font-semibold text-neutral-500">Solana</div>
                    <TrendingUp className="h-5 w-5 text-emerald-500" />
                  </div>
                  <div className="text-2xl font-bold text-neutral-900">$198</div>
                  <div className="text-sm text-emerald-500 font-semibold">+7.1% (24h)</div>
                </Card>
              </div>

              <div className="space-y-8">
                <h3 className="text-3xl font-bold text-neutral-900">This Week's Key Insights</h3>
                <div className="space-y-8">
                  <div className="flex items-start space-x-6">
                    <div className="w-3 h-3 bg-gradient-to-r from-neutral-700 to-neutral-800 rounded-full mt-4 flex-shrink-0" />
                    <div>
                      <div className="font-semibold text-neutral-900 mb-2 text-xl">Web3 Funding Landscape Evolving</div>
                      <div className="text-neutral-600 leading-relaxed text-lg font-light">
                        Strategic investors are focusing on real utility and revenue models, moving beyond pure
                        speculation to sustainable business fundamentals.
                      </div>
                    </div>
                  </div>
                  <div className="flex items-start space-x-6">
                    <div className="w-3 h-3 bg-gradient-to-r from-neutral-700 to-neutral-800 rounded-full mt-4 flex-shrink-0" />
                    <div>
                      <div className="font-semibold text-neutral-900 mb-2 text-xl">
                        RWA Tokenization Gaining Momentum
                      </div>
                      <div className="text-neutral-600 leading-relaxed text-lg font-light">
                        Real-world asset tokenization is attracting institutional capital as traditional finance
                        embraces blockchain infrastructure.
                      </div>
                    </div>
                  </div>
                  <div className="flex items-start space-x-6">
                    <div className="w-3 h-3 bg-gradient-to-r from-neutral-700 to-neutral-800 rounded-full mt-4 flex-shrink-0" />
                    <div>
                      <div className="font-semibold text-neutral-900 mb-2 text-xl">
                        Narrative Strategy More Critical Than Ever
                      </div>
                      <div className="text-neutral-600 leading-relaxed text-lg font-light">
                        In a crowded market, clear positioning and compelling storytelling separate successful raises
                        from failed attempts.
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-neutral-200/40 to-stone-200/40 rounded-3xl blur-3xl opacity-60" />
              <div className="relative bg-white/90 backdrop-blur-sm rounded-3xl p-2 shadow-2xl border border-white/50">
                <Image
                  src="/placeholder.svg?height=500&width=600"
                  alt="Market Analysis Dashboard"
                  width={600}
                  height={500}
                  className="rounded-2xl"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Blog Insights Section */}
      <div className="mt-16 space-y-8">
        <div className="flex items-center justify-between">
          <h3 className="text-3xl font-bold text-neutral-900">Latest from Our Substack</h3>
          <Button
            variant="outline"
            className="border-neutral-200 text-neutral-700 hover:bg-neutral-50 px-6 py-3 rounded-2xl font-semibold hover:shadow-lg transition-all duration-300 hover:scale-105"
          >
            View All Posts
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <Card className="bg-white/90 backdrop-blur-sm border-0 shadow-xl rounded-3xl hover:shadow-2xl transition-all duration-500 hover:scale-105 group overflow-hidden">
            <div className="h-48 bg-gradient-to-br from-neutral-100 to-stone-100 relative">
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
              <div className="absolute bottom-4 left-6">
                <Badge className="bg-white/90 text-neutral-800 border-0 px-3 py-1 text-xs font-semibold rounded-full">
                  Market Analysis
                </Badge>
              </div>
            </div>
            <CardContent className="p-8">
              <h4 className="text-xl font-bold text-neutral-900 mb-3 group-hover:text-neutral-700 transition-colors">
                The Institutional Crypto Adoption Wave: What's Driving the Shift
              </h4>
              <p className="text-neutral-600 leading-relaxed mb-4 font-light">
                Exploring how traditional financial institutions are finally embracing crypto infrastructure and what
                this means for the broader market...
              </p>
              <div className="flex items-center justify-between text-sm text-neutral-500">
                <span>5 min read</span>
                <span>2 days ago</span>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-white/90 backdrop-blur-sm border-0 shadow-xl rounded-3xl hover:shadow-2xl transition-all duration-500 hover:scale-105 group overflow-hidden">
            <div className="h-48 bg-gradient-to-br from-emerald-100 to-green-100 relative">
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
              <div className="absolute bottom-4 left-6">
                <Badge className="bg-white/90 text-neutral-800 border-0 px-3 py-1 text-xs font-semibold rounded-full">
                  Strategy
                </Badge>
              </div>
            </div>
            <CardContent className="p-8">
              <h4 className="text-xl font-bold text-neutral-900 mb-3 group-hover:text-neutral-700 transition-colors">
                Fundraising in 2024: Why Narrative Beats Numbers
              </h4>
              <p className="text-neutral-600 leading-relaxed mb-4 font-light">
                In today's competitive funding landscape, having great metrics isn't enough. Here's how to craft a
                compelling story that resonates...
              </p>
              <div className="flex items-center justify-between text-sm text-neutral-500">
                <span>7 min read</span>
                <span>1 week ago</span>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Team Section */}
      <section id="team" className="py-24 bg-gradient-to-br from-neutral-50 to-stone-50">
        <div className="container mx-auto px-4 lg:px-6">
          <div className="text-center space-y-6 mb-20">
            <Badge className="bg-gradient-to-r from-emerald-100 to-green-100 text-emerald-800 border-0 px-6 py-3 text-sm font-semibold rounded-full">
              Our Team
            </Badge>
            <h2 className="text-4xl lg:text-6xl font-bold text-neutral-900 tracking-tight">
              Traditional Finance Meets Web3 Innovation
            </h2>
            <p className="text-xl text-neutral-600 max-w-4xl mx-auto font-light leading-relaxed">
              Our team has been working together since 2021, combining over a decade of traditional finance expertise
              with deep Web3 experience across global markets including London, Cape Town, Tel Aviv, and Argentina.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
            <Card className="bg-white/90 backdrop-blur-sm border-0 shadow-xl rounded-3xl text-center hover:shadow-2xl transition-all duration-500 hover:scale-105 group">
              <CardHeader className="pb-6 pt-10">
                <div className="relative mx-auto mb-6">
                  <div className="absolute inset-0 bg-gradient-to-r from-neutral-400 to-stone-400 rounded-full blur-lg opacity-30 group-hover:opacity-50 transition-opacity duration-300" />
                  <Image
                    src="/asher-profile.jpg"
                    alt="Asher Weinstein"
                    width={120}
                    height={120}
                    className="relative rounded-full border-4 border-white shadow-xl object-cover"
                  />
                </div>
                <CardTitle className="text-neutral-900 text-2xl">Asher Weinstein</CardTitle>
                <CardDescription className="text-neutral-700 font-semibold text-lg">Co-Founder</CardDescription>
              </CardHeader>
              <CardContent className="px-8 pb-10">
                <p className="text-neutral-600 mb-6 leading-relaxed text-lg font-light">
                  Career foundation in equity research, corporate finance and venture capital. Deep passion for
                  blockchain technology with hands-on startup experience across SaaS, fintech, and Web3 verticals.
                </p>
                <div className="flex justify-center space-x-3">
                  <Badge variant="secondary" className="bg-neutral-100 text-neutral-700 px-4 py-2 rounded-full">
                    Equity Research
                  </Badge>
                  <Badge variant="secondary" className="bg-neutral-100 text-neutral-700 px-4 py-2 rounded-full">
                    Venture Capital
                  </Badge>
                </div>
                <div className="flex justify-center space-x-4 mt-6">
                  <Button
                    size="sm"
                    variant="outline"
                    className="border-neutral-200 hover:bg-neutral-50 px-4 py-2 rounded-xl transition-all duration-300 hover:scale-105"
                    onClick={() => window.open("https://www.linkedin.com/in/asher-jonathan-weinstein/", "_blank")}
                  >
                    <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                    </svg>
                    LinkedIn
                  </Button>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-white/90 backdrop-blur-sm border-0 shadow-xl rounded-3xl text-center hover:shadow-2xl transition-all duration-500 hover:scale-105 group">
              <CardHeader className="pb-6 pt-10">
                <div className="relative mx-auto mb-6">
                  <div className="absolute inset-0 bg-gradient-to-r from-stone-400 to-neutral-400 rounded-full blur-lg opacity-30 group-hover:opacity-50 transition-opacity duration-300" />
                  <Image
                    src="/ryan-profile.jpg"
                    alt="Ryan Berelozitz"
                    width={120}
                    height={120}
                    className="relative rounded-full border-4 border-white shadow-xl object-cover"
                  />
                </div>
                <CardTitle className="text-neutral-900 text-2xl">Ryan Berelowitz</CardTitle>
                <CardDescription className="text-neutral-700 font-semibold text-lg">Co-Founder</CardDescription>
              </CardHeader>
              <CardContent className="px-8 pb-10">
                <p className="text-neutral-600 mb-6 leading-relaxed text-lg font-light">
                  Former corporate finance and private equity consultant specializing in M&A and strategy. Avid Web3
                  enthusiast with hands-on startup experience, having contributed to and co-founded two companies.
                </p>
                <div className="flex justify-center space-x-3">
                  <Badge variant="secondary" className="bg-neutral-100 text-neutral-700 px-4 py-2 rounded-full">
                    Private Equity
                  </Badge>
                  <Badge variant="secondary" className="bg-neutral-100 text-neutral-700 px-4 py-2 rounded-full">
                    M&A Strategy
                  </Badge>
                </div>
                <div className="flex justify-center space-x-4 mt-6">
                  <Button
                    size="sm"
                    variant="outline"
                    className="border-neutral-200 hover:bg-neutral-50 px-4 py-2 rounded-xl transition-all duration-300 hover:scale-105"
                    onClick={() => window.open("https://www.linkedin.com/in/ryan-berelowitz-69a426107/", "_blank")}
                  >
                    <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                    </svg>
                    LinkedIn
                  </Button>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-white/90 backdrop-blur-sm border-0 shadow-xl rounded-3xl text-center hover:shadow-2xl transition-all duration-500 hover:scale-105 group">
              <CardHeader className="pb-6 pt-10">
                <div className="relative mx-auto mb-6">
                  <div className="absolute inset-0 bg-gradient-to-r from-emerald-400 to-green-400 rounded-full blur-lg opacity-30 group-hover:opacity-50 transition-opacity duration-300" />
                  <Image
                    src="/george-profile.jpg"
                    alt="George Saracco"
                    width={120}
                    height={120}
                    className="relative rounded-full border-4 border-white shadow-xl object-cover"
                  />
                </div>
                <CardTitle className="text-neutral-900 text-2xl">George Saracco</CardTitle>
                <CardDescription className="text-emerald-700 font-semibold text-lg">
                  Head of Investment Strategy
                </CardDescription>
              </CardHeader>
              <CardContent className="px-8 pb-10">
                <p className="text-neutral-600 mb-6 leading-relaxed text-lg font-light">
                  A qualified industrial engineer with deep expertise in institutional onboarding and systems analysis.
                  With experience at Genesis Capital facilitating institutional entry via U.S. banks, tenure at Binance
                  as systems analyst, and leadership as COO of Rabadon, he brings structured precision to DeFi's
                  evolving landscape.
                </p>
                <div className="flex justify-center space-x-3">
                  <Badge variant="secondary" className="bg-neutral-100 text-neutral-700 px-4 py-2 rounded-full">
                    Industrial Engineer
                  </Badge>
                  <Badge variant="secondary" className="bg-neutral-100 text-neutral-700 px-4 py-2 rounded-full">
                    DeFi Specialist
                  </Badge>
                </div>
                <div className="flex justify-center space-x-4 mt-6">
                  <Button
                    size="sm"
                    variant="outline"
                    className="border-neutral-200 hover:bg-neutral-50 px-4 py-2 rounded-xl transition-all duration-300 hover:scale-105"
                    onClick={() => window.open("https://www.linkedin.com/in/jorge-s-064365190/", "_blank")}
                  >
                    <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                    </svg>
                    LinkedIn
                  </Button>
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
            </Button>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 bg-white/60 backdrop-blur-sm">
        <div className="container mx-auto px-4 lg:px-6">
          <div className="text-center space-y-6 mb-20">
            <Badge className="bg-gradient-to-r from-emerald-100 to-green-100 text-emerald-800 border-0 px-6 py-3 text-sm font-semibold rounded-full">
              Contact Us
            </Badge>
            <h2 className="text-4xl lg:text-6xl font-bold text-neutral-900 tracking-tight">
              Let's Discuss Your Project
            </h2>
            <p className="text-xl text-neutral-600 max-w-4xl mx-auto font-light leading-relaxed">
              Get in touch to learn more about our services and how we can help your business thrive.
            </p>
          </div>

          <div className="max-w-3xl mx-auto">
            <form className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-lg font-medium text-neutral-900">
                  Your Name
                </label>
                <div className="mt-2">
                  <input
                    type="text"
                    id="name"
                    className="shadow-sm bg-neutral-50 border border-neutral-300 text-neutral-900 text-lg rounded-lg focus:ring-neutral-500 focus:border-neutral-500 block w-full p-3"
                    placeholder="John Doe"
                    required
                  />
                </div>
              </div>

              <div>
                <label htmlFor="email" className="block text-lg font-medium text-neutral-900">
                  Your Email
                </label>
                <div className="mt-2">
                  <input
                    type="email"
                    id="email"
                    className="shadow-sm bg-neutral-50 border border-neutral-300 text-neutral-900 text-lg rounded-lg focus:ring-neutral-500 focus:border-neutral-500 block w-full p-3"
                    placeholder="john.doe@example.com"
                    required
                  />
                </div>
              </div>

              <div>
                <label htmlFor="message" className="block text-lg font-medium text-neutral-900">
                  Your Message
                </label>
                <div className="mt-2">
                  <textarea
                    id="message"
                    rows={5}
                    className="shadow-sm bg-neutral-50 border border-neutral-300 text-neutral-900 text-lg rounded-lg focus:ring-neutral-500 focus:border-neutral-500 block w-full p-3"
                    placeholder="Tell us about your project..."
                    required
                  />
                </div>
              </div>

              <div>
                <Button
                  type="submit"
                  className="w-full bg-gradient-to-r from-neutral-900 to-neutral-800 hover:from-neutral-800 hover:to-neutral-700 text-white font-semibold px-6 py-3 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 text-lg"
                >
                  Send Message
                </Button>
              </div>
            </form>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 bg-neutral-50 border-t border-neutral-100">
        <div className="container mx-auto px-4 lg:px-6 text-center">
          <p className="text-sm text-neutral-500">© {new Date().getFullYear()} Riverstone. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}
