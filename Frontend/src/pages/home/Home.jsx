import Navbar from "../home/components/Navbar";
import Hero from "../home/components/Hero";
import About from "../home/components/About";
import Features from "../home/components/Features";
import FAQ from "../home/components/FAQ";
import CTA from "../home/components/CTA";  
import ContactUs from "../home/components/ContactUs";
import Footer from "../home/components/Footer";


export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Features />
        <FAQ />
        <CTA />
        <ContactUs />
      </main>
      <Footer />
    </>
  );
}
