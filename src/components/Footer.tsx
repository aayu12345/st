import Link from "next/link";
import { Instagram, Linkedin, Twitter, Mail, Phone, MapPin } from "lucide-react";

export default function Footer() {
    return (
        <footer className="bg-black border-t border-white/10 pt-20 pb-10">
            <div className="container mx-auto px-6">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 mb-16 border-b border-white/10 pb-12">
                    {/* Brand & Description */}
                    <div className="lg:col-span-4 flex flex-col items-start text-left">
                        <Link href="/" className="text-2xl font-serif font-bold tracking-wide text-white block mb-6">
                            STR <span className="text-gold">BRAINS</span>
                        </Link>
                        <p className="text-white/40 text-sm leading-relaxed mb-6 max-w-sm">
                            Redefining short-term rental management with a fusion of luxury hospitality and data intelligence.
                        </p>
                        <div className="flex gap-4">
                            <Link href="https://www.linkedin.com/company/str-brains" target="_blank" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-white/60 hover:text-gold hover:bg-white/10 transition-all">
                                <Linkedin size={18} />
                            </Link>
                        </div>
                    </div>

                    {/* Services Column */}
                    <div className="lg:col-span-5">
                        <h4 className="text-white font-medium mb-6">Our Services</h4>
                        <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-3 text-sm text-white/50">
                            {[
                                { name: "Guest Communication", href: "#guest-communication" },
                                { name: "Claims Management", href: "#claims-management" },
                                { name: "Accounting Services", href: "#accounting-services" },
                                { name: "Property Guidebooks", href: "#property-guidebooks" },
                                { name: "Website Creation", href: "#website-creation" },
                                { name: "Cleaning Management", href: "#cleaning-management" },
                                { name: "Maintenance Services", href: "#maintenance-services" },
                                { name: "Listing Management", href: "#listing-management" },
                                { name: "Social Media", href: "#social-media-management" },
                                { name: "Reviews Management", href: "#reviews-management" },
                            ].map((service) => (
                                <li key={service.name}>
                                    <Link href={service.href} className="hover:text-gold transition-colors block">
                                        {service.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Contact Info */}
                    <div className="lg:col-span-3">
                        <h4 className="text-white font-medium mb-6">Get In Touch</h4>
                        <ul className="space-y-4 text-sm text-white/50">
                            <li className="flex items-center gap-3">
                                <Phone size={16} className="text-gold shrink-0" />
                                <span>+1 (619) 550-0566</span>
                            </li>
                            <li className="flex items-center gap-3">
                                <Mail size={16} className="text-gold shrink-0" />
                                <span className="break-all">operations@strbrains.com</span>
                            </li>
                            <li className="flex items-center gap-3">
                                <MapPin size={16} className="text-gold shrink-0" />
                                <span>San Diego, CA (HQ)</span>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-white/30 uppercase tracking-widest text-center md:text-left">
                    <p>&copy; {new Date().getFullYear()} STR Brains. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
}
