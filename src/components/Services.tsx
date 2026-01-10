"use client";

import { motion } from "framer-motion";
import {
    MessageSquare,
    ClipboardCheck,
    Calculator,
    Map,
    Globe,
    SprayCan,
    Wrench,
    ListChecks,
    Share2,
    Star,
    CheckCircle2,
    Heart,
    Instagram,
    Facebook,
    Twitter
} from "lucide-react";

// Overview Icons
const serviceIcons = [
    { icon: MessageSquare, label: "Guest Communication", id: "guest-communication" },
    { icon: ClipboardCheck, label: "Claims Management", id: "claims-management" },
    { icon: Calculator, label: "Accounting Services", id: "accounting-services" },
    { icon: Map, label: "Property Guidebooks", id: "property-guidebooks" },
    { icon: Globe, label: "Website Creation", id: "website-creation" },
    { icon: SprayCan, label: "Cleaning Management", id: "cleaning-management" },
    { icon: Wrench, label: "Maintenance Services", id: "maintenance-services" },
    { icon: ListChecks, label: "Listing Management", id: "listing-management" },
    { icon: Share2, label: "Social Media Management", id: "social-media-management" },
    { icon: Star, label: "Reviews Management", id: "reviews-management" },
];

export default function Services() {
    return (
        <section id="services" className="py-24 bg-[#0a0a0a] relative overflow-hidden">
            {/* Background Ambience */}
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-gold/5 rounded-full blur-[120px] pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-blue-900/5 rounded-full blur-[120px] pointer-events-none" />

            <div className="container mx-auto px-6 relative z-10">
                {/* Header */}
                <div className="flex flex-col md:flex-row justify-between items-end mb-16">
                    <div className="max-w-2xl">
                        <span className="text-gold text-sm uppercase tracking-widest font-semibold block mb-4">Our Expertise</span>
                        <h2 className="text-4xl md:text-5xl font-serif text-white mb-6">
                            Comprehensive Management <br />
                            <span className="text-white/40">For Modern Investors.</span>
                        </h2>
                    </div>
                </div>

                {/* Services Icons Row */}
                <div className="flex flex-wrap justify-center gap-8 mb-24">
                    {serviceIcons.map((service, index) => (
                        <motion.a
                            key={index}
                            href={`#${service.id}`}
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.05 }}
                            className="flex flex-col items-center gap-3 w-32 text-center group cursor-pointer"
                        >
                            <div className="w-16 h-16 rounded-full bg-gold/10 flex items-center justify-center text-gold group-hover:bg-gold group-hover:text-black transition-colors duration-300">
                                <service.icon size={28} />
                            </div>
                            <p className="text-white/70 text-sm font-medium leading-tight group-hover:text-white transition-colors">
                                {service.label}
                            </p>
                        </motion.a>
                    ))}
                </div>

                {/* Detailed Service 1: Guest Communication */}
                <div id="guest-communication" className="mb-32 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="space-y-6"
                    >
                        <div className="flex items-center gap-3 text-gold mb-2">
                            <MessageSquare size={24} />
                            <h3 className="text-3xl font-serif text-white">Guest Communication</h3>
                        </div>
                        <p className="text-white/70 leading-relaxed font-light">
                            At STR Brains, outstanding guest communication is what sets us apart. Our dedication to fast, professional, and personalized interactions consistently earns our clients 5-star reviews and exceptional guest feedback.
                        </p>

                        <div className="space-y-4">
                            <h4 className="text-white font-medium text-lg">How We Deliver Excellence</h4>
                            <ul className="space-y-4 text-sm text-white/60">
                                <li><strong className="text-white block mb-1">24/7 Support:</strong> No matter the time of day, guests can count on quick, reliable responses.</li>
                                <li><strong className="text-white block mb-1">Personalized Pre-Stay Engagement:</strong> Warm welcome messages and property details to create a positive first impression.</li>
                                <li><strong className="text-white block mb-1">Efficient In-Stay Assistance:</strong> Resolving issues and providing local recommendations for a stress-free stay.</li>
                                <li><strong className="text-white block mb-1">Thoughtful Post-Stay Follow-Up:</strong> Encouraging positive reviews and thanking guests for their stay.</li>
                            </ul>
                        </div>
                    </motion.div>
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="relative h-[400px] w-full rounded-2xl overflow-hidden border border-white/10 flex items-center justify-center bg-[#111]"
                    >
                        <div className="w-3/4 h-3/4 bg-[#1a1a1a] rounded-lg shadow-2xl border border-white/5 p-4 flex flex-col gap-2 relative">
                            <div className="w-full h-8 bg-white/5 rounded flex items-center px-4 gap-2">
                                <div className="w-3 h-3 rounded-full bg-red-500/50" />
                                <div className="w-3 h-3 rounded-full bg-yellow-500/50" />
                                <div className="w-3 h-3 rounded-full bg-green-500/50" />
                            </div>
                            <div className="flex-1 flex gap-2">
                                <div className="w-1/3 bg-white/5 rounded h-full" />
                                <div className="w-2/3 bg-white/5 rounded h-full flex flex-col gap-3 p-4">
                                    <div className="w-full h-4 bg-white/10 rounded" />
                                    <div className="w-3/4 h-4 bg-white/10 rounded" />
                                    <div className="w-1/2 h-4 bg-white/10 rounded" />
                                </div>
                            </div>
                            <p className="absolute -bottom-8 left-0 right-0 text-white/30 text-xs text-center uppercase tracking-widest">Unified Inbox Dashboard</p>
                        </div>
                    </motion.div>
                </div>

                {/* Detailed Service 2: Claims Management */}
                <div id="claims-management" className="mb-32 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center lg:flex-row-reverse">
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="order-1 lg:order-2 space-y-6"
                    >
                        <div className="flex items-center gap-3 text-gold mb-2">
                            <ClipboardCheck size={24} />
                            <h3 className="text-3xl font-serif text-white">Claims Management</h3>
                        </div>
                        <p className="text-white/70 leading-relaxed font-light">
                            We handle damages or vandalism claims on your behalf. From documenting the issue to submitting detailed claims, our team acts quickly and efficiently.
                        </p>
                        <p className="text-white/70 leading-relaxed font-light">
                            With a proven <span className="text-gold font-semibold">99% success rate</span>, we ensure you receive fast resolutions and the compensation you deserve.
                        </p>

                        <div className="grid grid-cols-2 gap-4 pt-4">
                            <div className="p-4 bg-white/5 rounded-xl border border-white/10 text-center">
                                <p className="text-gold text-2xl font-serif font-bold">$3,601</p>
                                <p className="text-white/40 text-xs uppercase">Recovered Claim</p>
                            </div>
                            <div className="p-4 bg-white/5 rounded-xl border border-white/10 text-center">
                                <p className="text-gold text-2xl font-serif font-bold">48h</p>
                                <p className="text-white/40 text-xs uppercase">Avg. Resolution</p>
                            </div>
                        </div>
                    </motion.div>
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="order-2 lg:order-1 grid grid-cols-2 gap-4"
                    >
                        {["$1199.99", "$450.00", "$695.00", "$3601.68"].map((amount, i) => (
                            <div key={i} className="bg-[#1a1a1a] border border-white/10 rounded-xl p-4 aspect-[3/4] flex flex-col justify-between shadow-2xl relative overflow-hidden group hover:border-gold/30 transition-colors">
                                <div className="w-1/3 h-1 bg-white/20 rounded-full mx-auto mb-4" />
                                <div className="space-y-2 opacity-50">
                                    <div className="h-2 w-full bg-white/10 rounded" />
                                    <div className="h-2 w-3/4 bg-white/10 rounded" />
                                    <div className="h-2 w-1/2 bg-white/10 rounded" />
                                </div>
                                <div className="mt-auto text-center">
                                    <div className="inline-block px-3 py-1 bg-green-500/20 text-green-400 rounded-full text-xs font-mono mb-2">Paid</div>
                                    <p className="text-gold font-bold text-lg">{amount}</p>
                                </div>
                            </div>
                        ))}
                    </motion.div>
                </div>

                {/* Detailed Service 3: Accounting Services */}
                <div id="accounting-services" className="mb-32 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="space-y-6"
                    >
                        <div className="flex items-center gap-3 text-gold mb-2">
                            <Calculator size={24} />
                            <h3 className="text-3xl font-serif text-white">Accounting Services</h3>
                        </div>
                        <p className="text-white/70 leading-relaxed font-light">
                            Managing finances is essential for long-term success. Our comprehensive accounting services give you confidence in your financial management while freeing up your time.
                        </p>

                        <div className="space-y-6 pt-4">
                            {[
                                { title: "Detailed Financial Tracking", desc: "Accurate, up-to-date records of all revenue streams and expenses." },
                                { title: "Monthly & Quarterly Reconciliation", desc: "Thorough verification that all transactions align correctly." },
                                { title: "Expense Monitoring", desc: "Helping you identify cost-saving opportunities." },
                                { title: "Comprehensive Reporting", desc: "Clear financial summaries and performance reports." }
                            ].map((item, i) => (
                                <div key={i} className="flex gap-4">
                                    <CheckCircle2 className="shrink-0 text-gold mt-1" size={20} />
                                    <div>
                                        <h5 className="text-white font-medium mb-1">{item.title}</h5>
                                        <p className="text-white/50 text-sm leading-relaxed">{item.desc}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </motion.div>
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="relative h-[400px] w-full bg-[#1a1a1a] rounded-2xl border border-white/10 flex items-center justify-center overflow-hidden"
                    >
                        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-gold/5 via-transparent to-transparent opacity-50" />
                        <div className="text-center space-y-4 relative z-10">
                            <div className="inline-flex p-6 rounded-full bg-black border border-white/10 shadow-2xl mb-4">
                                <Calculator size={48} className="text-gold" />
                            </div>
                            <div>
                                <p className="text-white text-lg font-serif">Financial Clarity</p>
                                <p className="text-white/40 text-sm">Automated & Audited</p>
                            </div>
                        </div>
                    </motion.div>
                </div>

                {/* Detailed Service 4: Property Guidebooks */}
                <div id="property-guidebooks" className="mb-32 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center lg:flex-row-reverse">
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="order-1 lg:order-2 space-y-6"
                    >
                        <div className="flex items-center gap-3 text-gold mb-2">
                            <Map size={24} />
                            <h3 className="text-3xl font-serif text-white">Property Guidebooks</h3>
                        </div>
                        <p className="text-white/70 leading-relaxed font-light">
                            At STR Brains, we create customized property guidebooks that provide guests with everything they need for a smooth and enjoyable stay. Each guidebook is carefully crafted to include all essential information—such as house rules, check-in details, and instructions for appliances.
                        </p>
                        <p className="text-white/70 leading-relaxed font-light">
                            To further elevate the guest experience, we also curate local recommendations, including top restaurants, popular attractions, and must-try activities. These thoughtfully designed guidebooks help guests feel confident and informed.
                        </p>
                    </motion.div>
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="order-2 lg:order-1 flex justify-center"
                    >
                        {/* Phone Mockup */}
                        <div className="w-[280px] h-[580px] border-8 border-[#222] rounded-[3rem] bg-[#0a0a0a] relative shadow-2xl overflow-hidden flex flex-col">
                            {/* Notch */}
                            <div className="absolute top-0 left-1/2 -translate-x-1/2 h-6 w-32 bg-[#222] rounded-b-xl z-20" />

                            {/* Screen Content */}
                            <div className="flex-1 bg-white text-black p-6 pt-12 overflow-hidden relative">
                                <div className="text-center space-y-4">
                                    <h4 className="text-2xl font-bold font-serif text-blue-900 tracking-tight">YOUR HOME!</h4>
                                    <p className="text-[10px] text-gray-400 uppercase tracking-wide">861 S Rainbow Blvd, Las Vegas, USA</p>

                                    <div className="w-full h-32 rounded-lg bg-blue-100 bg-[url('https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&q=80')] bg-cover bg-center" />

                                    <div className="flex justify-between text-[10px] text-gray-500 py-2 border-b border-gray-100">
                                        <span>BEDROOMS: 4</span>
                                        <span>BEDS: 6</span>
                                        <span>BATHROOMS: 3.5</span>
                                    </div>

                                    <div className="bg-yellow-100 p-2 rounded text-[10px] text-left space-y-1">
                                        <p className="font-bold">Wi-Fi Details</p>
                                        <p>Network: House Wifi</p>
                                        <p>Password: 0000</p>
                                    </div>

                                    <div className="text-left text-[10px] space-y-1 text-gray-600">
                                        <p>✓ Private Pool and Spa</p>
                                        <p>✓ Fully Equipped Kitchen</p>
                                        <p>✓ Luxury Bedding</p>
                                        <p>✓ High-Speed Wi-Fi</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </div>

                {/* Detailed Service 5: Website Creation */}
                <div id="website-creation" className="mb-32 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="space-y-6"
                    >
                        <div className="flex items-center gap-3 text-gold mb-2">
                            <Globe size={24} />
                            <h3 className="text-3xl font-serif text-white">Website Creation</h3>
                        </div>
                        <p className="text-white/70 leading-relaxed font-light">
                            We create modern, professional, and easy-to-navigate websites designed to highlight your rental properties and increase direct bookings. A thoughtfully built website boosts your online visibility and strengthens your brand.
                        </p>

                        <div className="space-y-4 pt-2">
                            <h4 className="text-white font-medium text-lg">Our Website Services Include:</h4>
                            <ul className="space-y-4 text-sm text-white/60">
                                <li><strong className="text-white block mb-1">Custom Website Design:</strong> Unique designs tailored to your branding.</li>
                                <li><strong className="text-white block mb-1">Mobile-Friendly Layouts:</strong> Fully responsive websites for all devices.</li>
                                <li><strong className="text-white block mb-1">Direct Booking Integration:</strong> Avoid specific platform fees and maximize revenue.</li>
                                <li><strong className="text-white block mb-1">Analytics & Tracking:</strong> Monitor site traffic and conversions.</li>
                            </ul>
                        </div>
                        <p className="text-white/50 text-sm italic pt-4">Your website is the digital face of your business—make a powerful first impression.</p>
                    </motion.div>
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="relative h-[450px] w-full flex items-center justify-center p-8"
                    >
                        {/* Device Mockups */}
                        <div className="absolute top-10 right-0 w-[300px] h-[190px] border-4 border-gray-800 rounded-lg bg-[#0a0a0a] shadow-2xl z-10 rotate-6 transform hover:rotate-0 transition-transform duration-500 overflow-hidden">
                            {/* Laptop Screen */}
                            <div className="w-full h-full bg-white/5 flex flex-col p-2">
                                <div className="h-2 w-full bg-white/10 mb-2" />
                                <div className="flex gap-2 flex-1">
                                    <div className="w-1/3 bg-white/10 h-full" />
                                    <div className="w-2/3 space-y-1">
                                        <div className="h-2 w-full bg-white/10" />
                                        <div className="h-2 w-3/4 bg-white/10" />
                                        <div className="h-2 w-1/2 bg-white/10" />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="absolute bottom-10 left-10 w-[200px] h-[260px] border-4 border-gray-800 rounded-xl bg-[#0a0a0a] shadow-2xl -rotate-6 transform hover:rotate-0 transition-transform duration-500 overflow-hidden">
                            {/* Tablet Screen */}
                            <div className="w-full h-full bg-white/5 p-4 flex flex-col justify-end">
                                <div className="w-full h-24 bg-gold/10 rounded-lg mb-2" />
                                <div className="space-y-2">
                                    <div className="h-2 w-full bg-white/10 rounded" />
                                    <div className="h-2 w-full bg-white/10 rounded" />
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </div>

                {/* Detailed Service 6: Cleaning Management */}
                <div id="cleaning-management" className="mb-32 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center lg:flex-row-reverse">
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="order-1 lg:order-2 space-y-6"
                    >
                        <div className="flex items-center gap-3 text-gold mb-2">
                            <SprayCan size={24} />
                            <h3 className="text-3xl font-serif text-white">Cleaning Management</h3>
                        </div>
                        <p className="text-white/70 leading-relaxed font-light">
                            Cleanliness is the cornerstone of an exceptional guest experience. A perfectly maintained property builds trust and leads to outstanding reviews.
                        </p>

                        <div className="space-y-6 pt-4">
                            {[
                                { title: "Smooth Coordination", desc: "We manage and schedule professional cleaning teams to ensure turnovers are efficient." },
                                { title: "High Cleaning Standards", desc: "Every cleaning follows a detailed checklist to ensure every surface is spotless." },
                                { title: "Quality Inspections", desc: "Final inspections before every check-in to confirm our rigorous standards." }
                            ].map((item, i) => (
                                <div key={i} className="flex gap-4">
                                    <CheckCircle2 className="shrink-0 text-gold mt-1" size={20} />
                                    <div>
                                        <h5 className="text-white font-medium mb-1">{item.title}</h5>
                                        <p className="text-white/50 text-sm leading-relaxed">{item.desc}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </motion.div>
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="order-2 lg:order-1 relative h-[500px]"
                    >
                        {/* Circular Image Placeholders */}
                        <div className="absolute top-0 left-0 w-64 h-64 rounded-full border-4 border-white/10 overflow-hidden shadow-2xl bg-[#111]">
                            <div className="w-full h-full bg-[url('https://images.unsplash.com/photo-1582719508461-905c673771fd?auto=format&fit=crop&q=80')] bg-cover bg-center opacity-80 hover:scale-110 transition-transform duration-700" />
                        </div>
                        <div className="absolute bottom-0 right-0 w-64 h-64 rounded-full border-4 border-white/10 overflow-hidden shadow-2xl bg-[#111]">
                            <div className="w-full h-full bg-[url('https://images.unsplash.com/photo-1556228453-efd6c1ff04f6?auto=format&fit=crop&q=80')] bg-cover bg-center opacity-80 hover:scale-110 transition-transform duration-700" />
                        </div>
                        {/* Decorative connecting line */}
                        <svg className="absolute inset-0 pointer-events-none opacity-20" viewBox="0 0 400 500">
                            <path d="M 150 150 Q 250 250 300 400" fill="none" stroke="url(#gradient)" strokeWidth="2" strokeDasharray="5,5" />
                            <defs>
                                <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                                    <stop offset="0%" stopColor="#d4af37" />
                                    <stop offset="100%" stopColor="transparent" />
                                </linearGradient>
                            </defs>
                        </svg>
                    </motion.div>
                </div>

                {/* Detailed Service 7: Maintenance Service */}
                <div id="maintenance-services" className="mb-32 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="space-y-6"
                    >
                        <div className="flex items-center gap-3 text-gold mb-2">
                            <Wrench size={24} />
                            <h3 className="text-3xl font-serif text-white">Maintenance Service</h3>
                        </div>
                        <p className="text-white/70 leading-relaxed font-light">
                            Maintaining your property in excellent condition is key. We provide comprehensive maintenance solutions that address issues swiftly and proactively, ensuring your property is always guest-ready.
                        </p>

                        <div className="space-y-4 pt-2">
                            <ul className="space-y-4 text-sm text-white/60">
                                <li><strong className="text-white block mb-1">Proactive Scheduling:</strong> Routine upkeep to prevent issues before they occur.</li>
                                <li><strong className="text-white block mb-1">Fast Issue Resolution:</strong> From plumbing to electrical, we coordinate quick fixes.</li>
                                <li><strong className="text-white block mb-1">Trusted Service Providers:</strong> Partnering with dependable professionals.</li>
                                <li><strong className="text-white block mb-1">Transparent Reporting:</strong> Clear updates on all maintenance activities.</li>
                            </ul>
                        </div>
                    </motion.div>
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="relative h-[400px] flex items-center justify-center p-8"
                    >
                        <div className="w-80 h-80 rounded-full border border-white/10 bg-[#111] overflow-hidden relative shadow-2xl group">
                            <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1621905251189-08b45d6a269e?auto=format&fit=crop&q=80')] bg-cover bg-center opacity-60 group-hover:scale-105 transition-transform duration-700" />
                            <div className="absolute inset-0 flex items-center justify-center">
                                <div className="w-20 h-20 bg-black/50 backdrop-blur-md rounded-full flex items-center justify-center border border-white/20">
                                    <Wrench size={32} className="text-gold" />
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </div>

                {/* Detailed Service 8: Listing Management */}
                <div id="listing-management" className="mb-32 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center lg:flex-row-reverse">
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="order-1 lg:order-2 space-y-6"
                    >
                        <div className="flex items-center gap-3 text-gold mb-2">
                            <ListChecks size={24} />
                            <h3 className="text-3xl font-serif text-white">Listing Management</h3>
                        </div>
                        <p className="text-white/70 leading-relaxed font-light">
                            A powerful and strategically managed listing is essential for driving bookings. We excel in crafting and optimizing listings that rise above the competition.
                        </p>

                        <div className="space-y-6 pt-4">
                            {[
                                { title: "Professional Listing Creation", desc: "Compelling descriptions and high-quality photo arrangement." },
                                { title: "Multi-Platform Oversight", desc: "Seamless content management across Airbnb, Vrbo, Booking.com, and more." },
                                { title: "Performance Optimization", desc: "Continuous monitoring of pricing, visibility, and strategies." }
                            ].map((item, i) => (
                                <div key={i} className="flex gap-4">
                                    <CheckCircle2 className="shrink-0 text-gold mt-1" size={20} />
                                    <div>
                                        <h5 className="text-white font-medium mb-1">{item.title}</h5>
                                        <p className="text-white/50 text-sm leading-relaxed">{item.desc}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </motion.div>
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="order-2 lg:order-1 flex gap-8 justify-center"
                    >
                        {/* Platform Logos Column */}
                        <div className="space-y-6 flex flex-col items-center">
                            {[
                                { name: "Airbnb", color: "text-[#FF5A5F]" },
                                { name: "Booking.com", color: "text-[#003580]" },
                                { name: "Vrbo", color: "text-[#3e66a4]" },
                                { name: "Expedia", color: "text-[#FBD000]" },
                            ].map((platform, i) => (
                                <div key={i} className="w-16 h-16 rounded-full bg-white flex items-center justify-center text-xl font-bold shadow-lg hover:scale-110 transition-transform cursor-default">
                                    <span className={platform.color}>{platform.name[0]}</span>
                                </div>
                            ))}
                        </div>
                        <div className="space-y-6 flex flex-col items-center pt-12">
                            {[
                                { name: "TripAdvisor", color: "text-[#00AF87]" },
                                { name: "Hopper", color: "text-[#FA6464]" },
                                { name: "Direct", color: "text-black" },
                            ].map((platform, i) => (
                                <div key={i} className="w-16 h-16 rounded-full bg-white flex items-center justify-center text-xl font-bold shadow-lg hover:scale-110 transition-transform cursor-default">
                                    <span className={platform.color}>{platform.name[0]}</span>
                                </div>
                            ))}
                        </div>
                    </motion.div>
                </div>

                {/* Detailed Service 9: Social Media Management */}
                <div id="social-media-management" className="mb-32 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="space-y-6"
                    >
                        <div className="flex items-center gap-3 text-gold mb-2">
                            <Share2 size={24} />
                            <h3 className="text-3xl font-serif text-white">Social Media Management</h3>
                        </div>
                        <p className="text-white/70 leading-relaxed font-light">
                            In today’s digital era, maintaining a strong social media presence is crucial for connecting with guests and showcasing the unique charm of your property. At STR Brains, we design and manage effective social media strategies.
                        </p>

                        <div className="space-y-4 pt-2">
                            <ul className="space-y-4 text-sm text-white/60">
                                <li><strong className="text-white block mb-1">Content Creation:</strong> Captivating posts, reels, and stories that spotlight your property.</li>
                                <li><strong className="text-white block mb-1">Engagement & Interaction:</strong> Prompt and meaningful responses to comments and messages.</li>
                                <li><strong className="text-white block mb-1">Campaign Planning:</strong> Thoughtfully crafted campaigns to promote special offers.</li>
                                <li><strong className="text-white block mb-1">Platform Management:</strong> Professional handling of Instagram, Facebook, and Twitter.</li>
                            </ul>
                        </div>
                        <p className="text-white/50 text-sm italic pt-4">Boost visibility and strengthen loyalty through engaging social content.</p>
                    </motion.div>
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="relative h-[450px] w-full flex items-center justify-center p-8"
                    >
                        {/* Phone Mockup with Instagram-style Feed */}
                        <div className="w-[280px] h-[580px] border-8 border-[#222] rounded-[3rem] bg-[#0a0a0a] relative shadow-2xl overflow-hidden flex flex-col z-10">
                            {/* Notch */}
                            <div className="absolute top-0 left-1/2 -translate-x-1/2 h-6 w-32 bg-[#222] rounded-b-xl z-20" />

                            {/* App Content */}
                            <div className="flex-1 bg-black text-white p-4 pt-12 overflow-hidden relative flex flex-col">
                                {/* Header */}
                                <div className="flex justify-between items-center mb-4">
                                    <span className="font-bold text-lg">str.brains</span>
                                    <div className="flex gap-4">
                                        <Heart size={20} />
                                        <MessageSquare size={20} />
                                    </div>
                                </div>

                                {/* Grid */}
                                <div className="grid grid-cols-2 gap-2 flex-1 overflow-hidden">
                                    <div className="bg-[url('https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&q=80')] bg-cover bg-center rounded h-32" />
                                    <div className="bg-[url('https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&q=80')] bg-cover bg-center rounded h-32" />
                                    <div className="bg-[url('https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?auto=format&fit=crop&q=80')] bg-cover bg-center rounded h-32" />
                                    <div className="bg-[url('https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&q=80')] bg-cover bg-center rounded h-32" />
                                    <div className="bg-[url('https://images.unsplash.com/photo-1600596542815-2495db98dada?auto=format&fit=crop&q=80')] bg-cover bg-center rounded h-32" />
                                    <div className="bg-[url('https://images.unsplash.com/photo-1613545325278-f24b0cae1224?auto=format&fit=crop&q=80')] bg-cover bg-center rounded h-32" />
                                </div>
                            </div>
                        </div>
                        {/* Background Elements */}
                        <div className="absolute -z-10 top-20 -right-4 w-32 h-32 bg-purple-500/20 rounded-full blur-2xl" />
                        <div className="absolute -z-10 bottom-20 -left-4 w-32 h-32 bg-pink-500/20 rounded-full blur-2xl" />
                    </motion.div>
                </div>

                {/* Detailed Service 10: Reviews Management */}
                <div id="reviews-management" className="mb-8 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center lg:flex-row-reverse">
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="order-1 lg:order-2 space-y-6"
                    >
                        <div className="flex items-center gap-3 text-gold mb-2">
                            <Star size={24} />
                            <h3 className="text-3xl font-serif text-white">Reviews Management</h3>
                        </div>
                        <p className="text-white/70 leading-relaxed font-light">
                            Your property’s reviews play a crucial role in building trust and driving more bookings. At STR Brains, we protect and enhance your online reputation.
                        </p>

                        <div className="space-y-6 pt-4">
                            {[
                                { title: "Personalized Responses", desc: "Thoughtful, professional replies seeking to express gratitude and address concerns." },
                                { title: "Reputation Protection", desc: "Disputing unfair reviews quickly with platforms using our safeguard experience." },
                                { title: "Insights & Improvements", desc: "Analyzing review patterns to uncover trends and boost guest satisfaction." }
                            ].map((item, i) => (
                                <div key={i} className="flex gap-4">
                                    <CheckCircle2 className="shrink-0 text-gold mt-1" size={20} />
                                    <div>
                                        <h5 className="text-white font-medium mb-1">{item.title}</h5>
                                        <p className="text-white/50 text-sm leading-relaxed">{item.desc}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </motion.div>
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="order-2 lg:order-1 relative h-[500px]"
                    >
                        {/* Review Success Visual */}
                        <div className="absolute inset-0 flex items-center justify-center">
                            <div className="w-[350px] h-[450px] relative">
                                {/* Property Image Background */}
                                <div className="absolute inset-0 rounded-t-[100px] rounded-b-xl overflow-hidden">
                                    <div className="w-full h-full bg-[url('https://images.unsplash.com/photo-1613977257363-707ba9348227?auto=format&fit=crop&q=80')] bg-cover bg-center opacity-80" />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent" />
                                </div>

                                {/* Review Card Overlay */}
                                <motion.div
                                    initial={{ y: 20, opacity: 0 }}
                                    whileInView={{ y: 0, opacity: 1 }}
                                    transition={{ delay: 0.3 }}
                                    className="absolute -bottom-6 left-6 right-6 p-6 bg-white/10 backdrop-blur-md border border-white/20 rounded-xl shadow-2xl"
                                >
                                    <div className="flex gap-1 text-gold mb-2">
                                        {[...Array(5)].map((_, i) => <Star key={i} size={20} fill="currentColor" />)}
                                    </div>
                                    <p className="text-white text-lg font-serif italic mb-2">"Absolutely stunning property! The team made our stay unforgettable."</p>
                                    <div className="flex items-center gap-2">
                                        <div className="w-8 h-8 rounded-full bg-gray-300" />
                                        <span className="text-white/60 text-sm">Sarah Jenkins</span>
                                    </div>
                                </motion.div>
                            </div>
                        </div>
                    </motion.div>
                </div>

            </div>
        </section>
    );
}
