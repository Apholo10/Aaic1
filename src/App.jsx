import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Quees from "./components/Quees";
import Features from "./components/Features";
import Benefits from "./components/Benefits";
import OurFamily from "./components/OurFamily";
import Testimonials from "./components/Testimonials";
import OurPromise from "./components/OurPromise";
import FinalCTA from "./components/FinalCTA";
import Footer from "./components/Footer";

function App() {
  return ( 
    <div className="min-h-screen bg-[#f7f5f2] text-[#1a1a2e] overflow-hidden">
      <Navbar />
      <Hero />
      <Quees />
      <Features />
      <Benefits />
      <OurFamily />
      <Testimonials />
      <OurPromise />
      <FinalCTA />
      <Footer />
    </div>
  );
}

export default App