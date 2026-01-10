"use client";

import { motion } from "framer-motion";
import { ArrowDown, Play } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function Hero() {
    return (
        <section className="relative h-screen w-full flex items-center justify-center overflow-hidden">
            {/* Background Image */}
            <div className="absolute inset-0 z-0">
                <Image
                    src="/hero.png"
                    alt="Luxury Interior"
                    fill
                    priority
                    className="object-cover"
                    quality={90}
                />
                {/* Modern Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-[#0a0a0a]" />
            </div>

            {/* Content */}
            <div className="relative z-10 container mx-auto px-6 pt-20 text-center">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="space-y-6 max-w-4xl mx-auto"
                >
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.2, duration: 0.8 }}
                        className="inline-block px-4 py-1 border border-white/20 rounded-full bg-white/5 backdrop-blur-sm mb-4"
                    >
                        <span className="text-gold-light text-sm uppercase tracking-[0.2em] font-medium">
                            Elevating Hospitality
                        </span>
                    </motion.div>

                    <h1 className="text-5xl md:text-7xl lg:text-8xl font-serif font-medium leading-tight text-white mb-6 drop-shadow-2xl">
                        Where Luxury <br />
                        <span className="text-gold-gradient italic">Meets Nature</span>
                    </h1>

                    <p className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto leading-relaxed font-light">
                        We transform premium properties into high-performing assets with 5-star hospitality and data-driven revenue management.
                    </p>

                    <div className="flex flex-col md:flex-row items-center justify-center gap-6 pt-8">
                        <Link
                            href="#contact"
                            className="group relative px-8 py-4 bg-gold text-black font-semibold text-sm uppercase tracking-wider rounded-sm overflow-hidden transition-all hover:bg-white"
                        >
                            <span className="relative z-10 group-hover:text-black transition-colors">Start Your Journey</span>
                            <div className="absolute inset-0 bg-white transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300" />
                        </Link>

                        <button className="flex items-center gap-3 text-white hover:text-gold transition-colors group">
                            <div className="w-12 h-12 rounded-full border border-white/30 flex items-center justify-center group-hover:border-gold group-hover:bg-gold/10 transition-all">
                                <Play size={16} className="fill-current" />
                            </div>
                            <span className="text-sm uppercase tracking-widest font-medium">Watch Film</span>
                        </button>
                    </div>
                </motion.div>
            </div>

            {/* Scroll Indicator */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1, duration: 1 }}
                className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
            >
                <div className="flex flex-col items-center gap-2 text-white/50">
                    <span className="text-[10px] uppercase tracking-widest">Scroll</span>
                    <ArrowDown className="animate-bounce" size={20} />
                </div>
            </motion.div>
        </section>
    );
}
