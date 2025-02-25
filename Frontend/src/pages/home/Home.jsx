import Navbar from "./components/Navbar"
import Hero from "./components/Hero"
import About from "./components/About"
import Features from "./components/Features"
import FAQ from "./components/FAQ"
import Contact from "./components/Contact"
import CTA from "./components/CTA"
import Footer from "./components/Footer"

function Home() {
  return (
    <div className="overflow-hidden">
      <Navbar />
      <Hero />
      <About />
      <Features />
      <FAQ />
      <Contact />
      <CTA />
      <Footer />
    </div>
  )
}

export default Home

