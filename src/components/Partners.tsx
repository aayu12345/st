"use client";

export default function Partners() {
    const partners = ["Airbnb", "VRBO", "Booking.com", "Expedia", "Marriott Homes"];

    return (
        <section className="py-10 bg-[#0a0a0a] border-b border-white/5">
            <div className="container mx-auto px-6">
                <p className="text-center text-white/30 text-xs uppercase tracking-widest mb-8">Trusted by Global Platforms</p>
                <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16 opacity-50 grayscale hover:grayscale-0 transition-all duration-500">
                    {partners.map((partner) => (
                        <span key={partner} className="text-xl md:text-2xl font-serif font-bold text-white/60 hover:text-gold transition-colors cursor-default">
                            {partner}
                        </span>
                    ))}
                </div>
            </div>
        </section>
    );
}
