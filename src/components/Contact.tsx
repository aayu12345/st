"use client";

import { motion } from "framer-motion";
import { Mail, Phone, MapPin, CheckCircle2 } from "lucide-react";
import { useState } from "react";

export default function Contact() {
    return (
        <section id="contact" className="py-24 bg-[#050505] relative">
            <div className="container mx-auto px-6">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">

                    {/* Left Column: Info */}
                    <div>
                        <span className="text-gold text-sm uppercase tracking-widest font-semibold block mb-4">Get Started</span>
                        <h2 className="text-4xl md:text-5xl font-serif text-white mb-6">
                            Partner With <br />
                            <span className="text-white/40">STR Brains</span>
                        </h2>
                        <p className="text-white/60 text-lg mb-10 leading-relaxed">
                            We are selective with our partners to ensure the highest quality of service. Fill out the form to see if your property qualifies for our portfolio.
                        </p>

                        <div className="space-y-6 mb-12">
                            <div className="flex items-center gap-4 text-white/80">
                                <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-gold">
                                    <Mail size={20} />
                                </div>
                                <span>hello@strbrains.com</span>
                            </div>
                            <div className="flex items-center gap-4 text-white/80">
                                <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-gold">
                                    <Phone size={20} />
                                </div>
                                <span>+1 (555) 123-4567</span>
                            </div>
                            <div className="flex items-center gap-4 text-white/80">
                                <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-gold">
                                    <MapPin size={20} />
                                </div>
                                <span>Beverly Hills, CA</span>
                            </div>
                        </div>

                        <div className="bg-white/5 rounded-2xl p-8 border border-white/10">
                            <h4 className="text-white font-serif text-xl mb-4">Why Partner With Us?</h4>
                            <ul className="space-y-3">
                                {[
                                    "Average 40% Revenue Increase",
                                    "Complete Hands-Off Management",
                                    "5-Star Guest Satisfaction Guarantee",
                                    "Transparent Monthly Reporting"
                                ].map((item, i) => (
                                    <li key={i} className="flex items-center gap-3 text-white/70 text-sm">
                                        <CheckCircle2 size={16} className="text-gold" />
                                        {item}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>

                    {/* Right Column: Form */}
                    <div className="bg-surface rounded-3xl p-8 md:p-10 border border-white/5 shadow-2xl">
                        <h3 className="text-2xl font-serif text-white mb-8">Request an Evaluation</h3>
                        <form className="space-y-6">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div className="space-y-2">
                                    <label className="text-xs uppercase tracking-wider text-white/50">First Name</label>
                                    <input
                                        type="text"
                                        className="w-full bg-black/40 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-gold transition-colors"
                                        placeholder="John"
                                    />
                                </div>
                                <div className="space-y-2">
                                    <label className="text-xs uppercase tracking-wider text-white/50">Last Name</label>
                                    <input
                                        type="text"
                                        className="w-full bg-black/40 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-gold transition-colors"
                                        placeholder="Doe"
                                    />
                                </div>
                            </div>

                            <div className="space-y-2">
                                <label className="text-xs uppercase tracking-wider text-white/50">Email Address</label>
                                <input
                                    type="email"
                                    className="w-full bg-black/40 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-gold transition-colors"
                                    placeholder="john@example.com"
                                />
                            </div>

                            <div className="space-y-2">
                                <label className="text-xs uppercase tracking-wider text-white/50">Property Address (Optional)</label>
                                <input
                                    type="text"
                                    className="w-full bg-black/40 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-gold transition-colors"
                                    placeholder="123 Luxury Blvd, Los Angeles"
                                />
                            </div>

                            <div className="space-y-2">
                                <label className="text-xs uppercase tracking-wider text-white/50">Message</label>
                                <textarea
                                    className="w-full bg-black/40 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-gold transition-colors min-h-[120px]"
                                    placeholder="Tell us about your property goals..."
                                ></textarea>
                            </div>

                            <button
                                type="submit"
                                className="w-full py-4 bg-gold hover:bg-gold-light text-black font-bold uppercase tracking-widest rounded-lg transition-all transform hover:scale-[1.02]"
                            >
                                Submit Request
                            </button>
                        </form>
                    </div>

                </div>
            </div>
        </section>
    );
}
