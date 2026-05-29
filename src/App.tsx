import Navigation from "./components/Navigation";
import Hero from "./components/Hero";
import About from "./components/About";
import Services from "./components/Services";
import WhyChooseUs from "./components/WhyChooseUs";
import Testimonials from "./components/Testimonials";
import Gallery from "./components/Gallery";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Chatbot from "./components/Chatbot";

export default function App() {
  return (
    <div className="bg-dark-charcoal text-white font-sans selection:bg-brand-pink selection:text-white min-h-screen flex flex-col justify-between">
      {/* Sticky Header and Scroll Progress Bar */}
      <Navigation />

      {/* Main Sections Wrapper */}
      <main className="flex-grow">
        {/* Hero Banner with Stats Counters */}
        <Hero />

        {/* Detailed Safe Space Philosophy */}
        <About />

        {/* Dynamic Class List Selector with glowing hover tags */}
        <Services />

        {/* Dynamic Competitive Advantages */}
        <WhyChooseUs />

        {/* Star Rating Slider testimonial board */}
        <Testimonials />

        {/* Masonry-grid Vibe Zoom representation */}
        <Gallery />

        {/* Contact Coordinates form and Google Map */}
        <Contact />
      </main>

      {/* Floating Chatbot Widget for Everfit info & scheduling assistance */}
      <Chatbot />

      {/* Footer Navigation and motivating tags */}
      <Footer />
    </div>
  );
}
