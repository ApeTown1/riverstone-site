"use client";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight, TrendingUp } from "lucide-react";
import Image from "next/image";
import { useEffect, useState } from "react";

export function MarketInsightsSection() {
    const [prices, setPrices] = useState({
        bitcoin: { price: null as number | null, change: null as number | null },
        ethereum: { price: null as number | null, change: null as number | null },
        solana: { price: null as number | null, change: null as number | null },
    });
    const [posts, setPosts] = useState<any[]>([]);
    const [loading, setLoading] = useState(true);
    const [postsLoading, setPostsLoading] = useState(true);

    useEffect(() => {
        async function fetchPrices() {
            setLoading(true);
            try {
                const res = await fetch(
                    "https://api.coingecko.com/api/v3/simple/price?ids=bitcoin,ethereum,solana&vs_currencies=usd&include_24hr_change=true"
                );
                const data = await res.json();
                setPrices({
                    bitcoin: {
                        price: data.bitcoin.usd,
                        change: data.bitcoin.usd_24h_change,
                    },
                    ethereum: {
                        price: data.ethereum.usd,
                        change: data.ethereum.usd_24h_change,
                    },
                    solana: {
                        price: data.solana.usd,
                        change: data.solana.usd_24h_change,
                    },
                });
            } catch {
                setPrices({
                    bitcoin: { price: null, change: null },
                    ethereum: { price: null, change: null },
                    solana: { price: null, change: null },
                });
            }
            setLoading(false);
        }
        fetchPrices();
        const interval = setInterval(fetchPrices, 60000);
        return () => clearInterval(interval);
    }, []);

    useEffect(() => {
        async function fetchPosts() {
            setPostsLoading(true);
            try {
                const res = await fetch(
                    "https://api.rss2json.com/v1/api.json?rss_url=https%3A%2F%2Fapetown.substack.com%2Ffeed"
                );
                const data = await res.json();
                if (data.items) {
                    setPosts(data.items.slice(0, 2));
                }
            } catch (error) {
                console.error("Failed to fetch Substack posts:", error);
                setPosts([]);
            }
            setPostsLoading(false);
        }
        fetchPosts();
    }, []);

    return (
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
                        Stay ahead with our analysis of market trends, funding
                        patterns, and strategic opportunities across Web2 and
                        Web3.
                    </p>
                </div>

                <div className="flex justify-center mt-16">
                    <div className="space-y-12 lg:max-w-4xl">
                        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 justify-center">
                            {/* Bitcoin */}
                            <a href="https://www.coingecko.com/en/coins/bitcoin" target="_blank" rel="noopener noreferrer" className="block">
                                <Card className="bg-white/90 backdrop-blur-sm border-0 shadow-xl rounded-3xl p-4 sm:p-6 hover:shadow-2xl transition-all duration-300 hover:scale-105 h-full">
                                    <div className="flex items-center justify-between mb-2 sm:mb-4">
                                        <div className="text-sm font-semibold text-neutral-500">
                                            Bitcoin
                                        </div>
                                        <TrendingUp className="h-5 w-5 text-emerald-500" />
                                    </div>
                                    <div className="text-xl sm:text-2xl md:text-3xl font-bold text-neutral-900 whitespace-nowrap">
                                        {loading || prices.bitcoin.price === null ? '—' : `$${prices.bitcoin.price.toLocaleString()}`}
                                    </div>
                                    <div className={`text-xs sm:text-sm font-semibold ${prices.bitcoin.change !== null && prices.bitcoin.change > 0 ? 'text-emerald-500' : 'text-red-500'}`}>
                                        {loading || prices.bitcoin.change === null ? '' : `${prices.bitcoin.change > 0 ? '+' : ''}${prices.bitcoin.change.toFixed(2)}% (24h)`}
                                    </div>
                                </Card>
                            </a>

                            {/* Ethereum */}
                            <a href="https://www.coingecko.com/en/coins/ethereum" target="_blank" rel="noopener noreferrer" className="block">
                                <Card className="bg-white/90 backdrop-blur-sm border-0 shadow-xl rounded-3xl p-4 sm:p-6 hover:shadow-2xl transition-all duration-300 hover:scale-105 h-full">
                                    <div className="flex items-center justify-between mb-2 sm:mb-4">
                                        <div className="text-sm font-semibold text-neutral-500">
                                            Ethereum
                                        </div>
                                        <TrendingUp className="h-5 w-5 text-emerald-500" />
                                    </div>
                                    <div className="text-xl sm:text-2xl md:text-3xl font-bold text-neutral-900 whitespace-nowrap">
                                        {loading || prices.ethereum.price === null ? '—' : `$${prices.ethereum.price.toLocaleString()}`}
                                    </div>
                                    <div className={`text-xs sm:text-sm font-semibold ${prices.ethereum.change !== null && prices.ethereum.change > 0 ? 'text-emerald-500' : 'text-red-500'}`}>
                                        {loading || prices.ethereum.change === null ? '' : `${prices.ethereum.change > 0 ? '+' : ''}${prices.ethereum.change.toFixed(2)}% (24h)`}
                                    </div>
                                </Card>
                            </a>

                            {/* Solana */}
                            <a href="https://www.coingecko.com/en/coins/solana" target="_blank" rel="noopener noreferrer" className="block">
                                <Card className="bg-white/90 backdrop-blur-sm border-0 shadow-xl rounded-3xl p-4 sm:p-6 hover:shadow-2xl transition-all duration-300 hover:scale-105 h-full">
                                    <div className="flex items-center justify-between mb-2 sm:mb-4">
                                        <div className="text-sm font-semibold text-neutral-500">
                                            Solana
                                        </div>
                                        <TrendingUp className="h-5 w-5 text-emerald-500" />
                                    </div>
                                    <div className="text-xl sm:text-2xl md:text-3xl font-bold text-neutral-900 whitespace-nowrap">
                                        {loading || prices.solana.price === null ? '—' : `$${prices.solana.price.toLocaleString()}`}
                                    </div>
                                    <div className={`text-xs sm:text-sm font-semibold ${prices.solana.change !== null && prices.solana.change > 0 ? 'text-emerald-500' : 'text-red-500'}`}>
                                        {loading || prices.solana.change === null ? '' : `${prices.solana.change > 0 ? '+' : ''}${prices.solana.change.toFixed(2)}% (24h)`}
                                    </div>
                                </Card>
                            </a>
                        </div>
                    </div>
                </div>

                {/* Blog Insights Section */}
                <div className="mt-16 space-y-8">
                    <div className="flex items-center justify-between">
                        <h3 className="text-3xl font-bold text-neutral-900">
                            Latest from Our Substack
                        </h3>
                        <a href="https://apetown.substack.com/" target="_blank" rel="noopener noreferrer">
                            <Button
                                variant="outline"
                                className="border-neutral-200 text-neutral-700 hover:bg-neutral-50 px-6 py-3 rounded-2xl font-semibold hover:shadow-lg transition-all duration-300 hover:scale-105"
                            >
                                View All Posts
                                <ArrowRight className="ml-2 h-4 w-4" />
                            </Button>
                        </a>
                    </div>

                    <div className="grid md:grid-cols-2 gap-8">
                        {postsLoading
                            ? Array.from({ length: 2 }).map((_, i) => (
                                  <Card key={i} className="bg-white/90 backdrop-blur-sm border-0 shadow-xl rounded-3xl overflow-hidden">
                                      <div className="h-48 bg-neutral-200 animate-pulse" />
                                      <CardContent className="p-8">
                                          <div className="h-6 w-3/4 bg-neutral-200 rounded animate-pulse mb-4" />
                                          <div className="h-4 w-full bg-neutral-200 rounded animate-pulse mb-2" />
                                          <div className="h-4 w-5/6 bg-neutral-200 rounded animate-pulse" />
                                      </CardContent>
                                  </Card>
                              ))
                            : posts.map((post, index) => (
                                  <a
                                      href={post.link}
                                      target="_blank"
                                      rel="noopener noreferrer"
                                      key={post.guid}
                                      className="block"
                                  >
                                      <Card className="bg-white/90 backdrop-blur-sm border-0 shadow-xl rounded-3xl hover:shadow-2xl transition-all duration-500 hover:scale-105 group overflow-hidden h-full">
                                          <div className="h-48 bg-gradient-to-br from-neutral-100 to-stone-100 relative">
                                              {post.thumbnail && (
                                                  <Image
                                                      src={post.thumbnail}
                                                      alt={post.title}
                                                      layout="fill"
                                                      objectFit="cover"
                                                      className="transition-transform duration-500 group-hover:scale-110"
                                                  />
                                              )}
                                              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
                                              <div className="absolute bottom-4 left-6">
                                                  <Badge className="bg-white/90 text-neutral-800 border-0 px-3 py-1 text-xs font-semibold rounded-full">
                                                      {index === 0 ? "Deep Dive" : "Protocol Overview"}
                                                  </Badge>
                                              </div>
                                          </div>
                                          <CardContent className="p-8">
                                              <h4 className="text-xl font-bold text-neutral-900 mb-3 group-hover:text-neutral-700 transition-colors">
                                                  {post.title}
                                              </h4>
                                              <p className="text-neutral-600 leading-relaxed mb-4 font-light text-sm">
                                                  {`${post.description
                                                      .replace(/<[^>]*>?/gm, "")
                                                      .substring(0, 120)}...`}
                                              </p>
                                              <div className="flex items-center justify-between text-sm text-neutral-500">
                                                  <span>
                                                      {new Date(
                                                          post.pubDate
                                                      ).toLocaleDateString("en-US", {
                                                          year: "numeric",
                                                          month: "long",
                                                          day: "numeric",
                                                      })}
                                                  </span>
                                              </div>
                                          </CardContent>
                                      </Card>
                                  </a>
                              ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
