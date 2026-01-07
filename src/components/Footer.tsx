"use client";

import Link from "next/link";
import { Instagram, Linkedin, Twitter } from "lucide-react";

export default function Footer() {
    return (
        <footer className="bg-black border-t border-white/10 pt-20 pb-10">
            <div className="container mx-auto px-6">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
                    <div className="md:col-span-1">
                        <Link href="/" className="text-2xl font-serif font-bold tracking-wide text-white block mb-6">
                            STR <span className="text-gold">BRAINS</span>
                        </Link>
                        <p className="text-white/40 text-sm leading-relaxed mb-6">
                            Redefining short-term rental management with a fusion of luxury hospitality and data intelligence.
                        </p>
                        <div className="flex gap-4">
                            {[Instagram, Twitter, Linkedin].map((Icon, i) => (
                                <Link key={i} href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-white/60 hover:text-gold hover:bg-white/10 transition-all">
                                    <Icon size={18} />
                                </Link>
                            ))}
                        </div>
                    </div>

                    <div>
                        <h4 className="text-white font-medium mb-6">Company</h4>
                        <ul className="space-y-4 text-sm text-white/50">
                            {["About Us", "Careers", "Press", "Contact"].map((item) => (
                                <li key={item}><Link href="#" className="hover:text-gold transition-colors">{item}</Link></li>
                            ))}
                        </ul>
                    </div>

                    <div>
                        <h4 className="text-white font-medium mb-6">Services</h4>
                        <ul className="space-y-4 text-sm text-white/50">
                            {["Revenue Management", "Interior Design", "Concierge", "Marketing"].map((item) => (
                                <li key={item}><Link href="#" className="hover:text-gold transition-colors">{item}</Link></li>
                            ))}
                        </ul>
                    </div>

                    <div>
                        <h4 className="text-white font-medium mb-6">Legal</h4>
                        <ul className="space-y-4 text-sm text-white/50">
                            {["Privacy Policy", "Terms of Service", "Cookie Policy"].map((item) => (
                                <li key={item}><Link href="#" className="hover:text-gold transition-colors">{item}</Link></li>
                            ))}
                        </ul>
                    </div>
                </div>

                <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-white/30 uppercase tracking-widest text-center md:text-left">
                    <p>&copy; {new Date().getFullYear()} STR Brains. All rights reserved.</p>
                    <p>Designed by Antigravity</p>
                </div>
            </div>
        </footer>
    );
}
