"use client";

import { motion } from "framer-motion";
import {
    BarChart3,
    ConciergeBell,
    Palette,
    Wrench,
    Megaphone,
    ShieldCheck,
    ArrowUpRight
} from "lucide-react";
import Link from "next/link";

const services = [
    {
        icon: BarChart3,
        title: "Revenue Optimization",
        description: "AI-driven dynamic pricing algorithms that maximize occupancy and ADR (Average Daily Rate) 365 days a year."
    },
    {
        icon: ConciergeBell,
        title: "5-Star Guest Experience",
        description: "24/7 concierge support, premium amenities, and personalized touches that result in glowing reviews."
    },
    {
        icon: Palette,
        title: "Interior Curation",
        description: "Expert design and staging to transform your property into a high-converting, Instagram-worthy destination."
    },
    {
        icon: Megaphone,
        title: "Strategic Marketing",
        description: "Omni-channel exposure on Airbnb, VRBO, Booking.com, and our exclusive direct booking platform."
    },
    {
        icon: Wrench,
        title: "Proactive Maintenance",
        description: "Rigorous 50-point inspections and trusted local vendor networks to keep your asset in pristine condition."
    },
    {
        icon: ShieldCheck,
        title: "Legal & Compliance",
        description: "Full handling of STR permits, taxes, and regulatory compliance so you never have to worry."
    }
];

export default function Services() {
    return (
        <section id="services" className="py-24 bg-[#0a0a0a] relative overflow-hidden">
            {/* Background Ambience */}
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-gold/5 rounded-full blur-[120px] pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-blue-900/5 rounded-full blur-[120px] pointer-events-none" />

            <div className="container mx-auto px-6 relative z-10">
                <div className="flex flex-col md:flex-row justify-between items-end mb-16">
                    <div className="max-w-2xl">
                        <span className="text-gold text-sm uppercase tracking-widest font-semibold block mb-4">Our Expertise</span>
                        <h2 className="text-4xl md:text-5xl font-serif text-white mb-6">
                            Comprehensive Management <br />
                            <span className="text-white/40">For Modern Investors.</span>
                        </h2>
                    </div>
                    <Link
                        href="#contact"
                        className="hidden md:flex items-center gap-2 text-gold hover:text-white transition-colors pb-2 border-b border-gold/30 hover:border-white"
                    >
                        <span className="text-sm uppercase tracking-wider">View Full Service Menu</span>
                        <ArrowUpRight size={18} />
                    </Link>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {services.map((service, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1, duration: 0.5 }}
                            className="group p-8 border border-white/5 rounded-2xl bg-white/[0.02] hover:bg-white/[0.04] transition-all duration-300 hover:-translate-y-2"
                        >
                            <div className="mb-6 inline-flex p-4 rounded-xl bg-gold/10 text-gold group-hover:bg-gold group-hover:text-black transition-colors duration-300">
                                <service.icon size={28} />
                            </div>
                            <h3 className="text-xl font-serif text-white mb-4 group-hover:text-gold transition-colors">{service.title}</h3>
                            <p className="text-white/60 leading-relaxed text-sm">
                                {service.description}
                            </p>
                        </motion.div>
                    ))}
                </div>

                <div className="mt-12 md:hidden text-center">
                    <Link
                        href="#contact"
                        className="inline-flex items-center gap-2 text-gold hover:text-white transition-colors pb-1 border-b border-gold/30 hover:border-white"
                    >
                        <span className="text-sm uppercase tracking-wider">View Full Service Menu</span>
                        <ArrowUpRight size={18} />
                    </Link>
                </div>
            </div>
        </section>
    );
}
