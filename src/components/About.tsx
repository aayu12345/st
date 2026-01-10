"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { CheckCircle2 } from "lucide-react";

export default function About() {
    return (
        <section id="about" className="py-24 bg-[#0a0a0a] relative overflow-hidden">
            {/* Ambient Background Elements */}
            <div className="absolute top-1/2 left-0 w-[600px] h-[600px] bg-gold/5 rounded-full blur-[120px] pointer-events-none -translate-y-1/2" />

            <div className="container mx-auto px-6 relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">

                    {/* Visual Side (Left) */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="relative"
                    >
                        <div className="relative h-[600px] w-full rounded-2xl overflow-hidden border border-white/10 group">
                            {/* Since we don't have the specific vector graphic, we use a premium image that fits the theme */}
                            <Image
                                src="/hero.png" // Reusing hero image for now, ideally this should be a different image like 'about.jpg'
                                alt="Luxury Property Interior"
                                fill
                                className="object-cover transition-transform duration-700 group-hover:scale-105"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent opacity-60" />

                            {/* Floating Stats Card */}
                            <div className="absolute bottom-8 left-8 right-8 glass p-6 rounded-xl border border-white/10 bg-black/40 backdrop-blur-md">
                                <div className="flex justify-between items-center">
                                    <div>
                                        <p className="text-gold text-3xl font-serif font-bold">24/7</p>
                                        <p className="text-white/60 text-xs uppercase tracking-wider">Operations</p>
                                    </div>
                                    <div className="h-8 w-px bg-white/10" />
                                    <div>
                                        <p className="text-gold text-3xl font-serif font-bold">100%</p>
                                        <p className="text-white/60 text-xs uppercase tracking-wider">Commitment</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Decor elements */}
                        <div className="absolute -top-4 -left-4 w-24 h-24 border-t border-l border-gold/30 rounded-tl-3xl" />
                        <div className="absolute -bottom-4 -right-4 w-24 h-24 border-b border-r border-gold/30 rounded-br-3xl" />
                    </motion.div>

                    {/* Content Side (Right) */}
                    <div className="space-y-8">
                        <div>
                            <motion.span
                                initial={{ opacity: 0, y: 10 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                className="text-gold text-sm uppercase tracking-widest font-semibold block mb-4"
                            >
                                Who We Are
                            </motion.span>
                            <motion.h2
                                initial={{ opacity: 0, y: 10 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.1 }}
                                className="text-4xl md:text-5xl font-serif text-white mb-6"
                            >
                                The Operational Backbone <br />
                                <span className="text-white/40">Of Your Business</span>
                            </motion.h2>
                        </div>

                        <div className="space-y-6 text-white/70 leading-relaxed font-light">
                            <motion.p
                                initial={{ opacity: 0, y: 10 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.2 }}
                            >
                                At <span className="text-white font-medium">STR Brains</span>, we proudly support hosts and property owners by delivering expert guest communication and complete operational assistance for short-term rentals. Backed by a skilled, globally distributed team, we ensure smooth 24/7 operations so your guests are always taken care of—no matter the time zone.
                            </motion.p>

                            <motion.p
                                initial={{ opacity: 0, y: 10 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.3 }}
                            >
                                Our mission is simple: to make hosting easier, smoother, and more profitable. From round-the-clock guest communication and check-in coordination to calendar oversight, maintenance reporting, issue resolution, and tailored pricing strategies, STR Brains handles every detail with precision and care.
                            </motion.p>

                            <motion.p
                                initial={{ opacity: 0, y: 10 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.4 }}
                            >
                                We act as the operational backbone of your business so you can focus on growth while we manage the day-to-day workload. With deep industry knowledge and a commitment to excellence, STR Brains is your trusted partner in the fast-paced STR market.
                            </motion.p>
                        </div>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.5 }}
                            className="pt-4"
                        >
                            <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                {["Deep Industry Knowledge", "Tailored Pricing Strategies", "Global Team Support", "Flexible Budgeting"].map((item, i) => (
                                    <li key={i} className="flex items-center gap-3 text-sm text-gold-light">
                                        <CheckCircle2 size={16} />
                                        <span className="text-white/80">{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </motion.div>
                    </div>

                </div>
            </div>
        </section>
    );
}
