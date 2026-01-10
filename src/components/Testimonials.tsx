"use client";

import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";

const testimonials = [
    {
        company: "Cogan Place Properties",
        feedback: "Working with STR Brains has simplified our operations more than we imagined. Their team is reliable, fast, and incredibly organized. Guest messages are handled instantly, issues are resolved before they escalate, and our calendar runs smoother than ever. What impressed us most is how STR Brains adapted to our workflow instead of forcing a template. They've brought consistency, calm, and real efficiency to our business.",
        initials: "CP"
    },
    {
        company: "Timothy Properties",
        feedback: "STR Brains has elevated our hosting experience from day one. Their communication style is warm, clear, and extremely professional — which our guests appreciate. They handle everything from daily coordination to unexpected situations with confidence and care. Because of them, our response rate and reviews have noticeably improved. They're not just a support team; they're a dependable partner who always delivers.",
        initials: "TP"
    },
    {
        company: "Zenhost Properties",
        feedback: "STR Brains has allowed us to scale without the stress. Their global team manages 24/7 guest support with precision, and their attention to detail is unmatched. We’ve seen fewer disruptions, smoother turnovers, and higher guest satisfaction since teaming up. What sets them apart is their ability to stay two steps ahead and keep operations running effortlessly. STR Brains has truly become a cornerstone of our success.",
        initials: "ZP"
    }
];

export default function Testimonials() {
    return (
        <section id="testimonials" className="py-24 bg-[#0a0a0a] relative">
            {/* Background Gradients */}
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-gold/5 rounded-full blur-[100px] pointer-events-none" />

            <div className="container mx-auto px-6 relative z-10">
                <div className="text-center mb-16 space-y-4">
                    <motion.span
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-gold text-sm uppercase tracking-widest font-semibold"
                    >
                        Client Success
                    </motion.span>
                    <motion.h2
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-3xl md:text-5xl font-serif text-white"
                    >
                        Hear From Our <span className="text-gold italic">Esteemed Partners</span>
                    </motion.h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {testimonials.map((item, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.2 }}
                            className="bg-white/5 border border-white/10 p-8 rounded-xl relative group hover:border-gold/30 transition-colors duration-300"
                        >
                            {/* Quote Icon */}
                            <div className="absolute -top-4 -left-2 bg-[#0a0a0a] border border-white/10 p-2 rounded-full text-gold group-hover:scale-110 transition-transform">
                                <Quote size={20} fill="currentColor" />
                            </div>

                            {/* Stars */}
                            <div className="flex gap-1 mb-6 text-gold">
                                {[...Array(5)].map((_, i) => (
                                    <Star key={i} size={16} fill="currentColor" />
                                ))}
                            </div>

                            {/* Text */}
                            <p className="text-white/70 font-light leading-relaxed mb-8 text-sm italic">
                                "{item.feedback}"
                            </p>

                            {/* Author */}
                            <div className="flex items-center gap-4 mt-auto">
                                <div className="w-10 h-10 rounded-full bg-linear-to-br from-gold/20 to-gold/5 flex items-center justify-center border border-gold/20 text-gold font-serif text-sm">
                                    {item.initials}
                                </div>
                                <div>
                                    <h4 className="text-white font-serif tracking-wide text-sm">{item.company}</h4>
                                    <p className="text-white/40 text-xs uppercase tracking-wider">Verified Partner</p>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
