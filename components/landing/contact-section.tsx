"use client";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

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
                    <p className="text-xl text-neutral-600 max-w-4xl mx-auto font-light leading-relaxed">
                        Get in touch to learn more about our services and how we
                        can help your business thrive.
                    </p>
                </div>

                <div className="max-w-3xl mx-auto">
                    <form className="space-y-6">
                        <div>
                            <label
                                htmlFor="name"
                                className="block text-lg font-medium text-neutral-900"
                            >
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
                            <label
                                htmlFor="email"
                                className="block text-lg font-medium text-neutral-900"
                            >
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
                            <label
                                htmlFor="message"
                                className="block text-lg font-medium text-neutral-900"
                            >
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
    );
}
