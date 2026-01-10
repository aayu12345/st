import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Testimonials from "@/components/Testimonials";
import Partners from "@/components/Partners";
import Services from "@/components/Services";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#0a0a0a] text-white selection:bg-gold selection:text-black">
      <Navbar />
      <Hero />
      <About />
      <Testimonials />
      <Partners />
      <Services />
      <Contact />
      <Footer />
    </main>
  );
}
