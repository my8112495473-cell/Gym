import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { testimonialsData } from "../data";
import { Star, ChevronLeft, ChevronRight, Quote, MessageCircle } from "lucide-react";

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0); // -1 for left, 1 for right

  // Auto transition every 6 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      handleNext();
    }, 6000);
    return () => clearInterval(timer);
  }, [currentIndex]);

  const handlePrev = () => {
    setDirection(-1);
    setCurrentIndex((prev) => (prev === 0 ? testimonialsData.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setDirection(1);
    setCurrentIndex((prev) => (prev === testimonialsData.length - 1 ? 0 : prev + 1));
  };

  const slideVariants = {
    enter: (dir: number) => ({
      x: dir > 0 ? 100 : -100,
      opacity: 0
    }),
    center: {
      x: 0,
      opacity: 1
    },
    exit: (dir: number) => ({
      x: dir < 0 ? 100 : -100,
      opacity: 0
    })
  };

  return (
    <section id="reviews" className="py-24 bg-dark-charcoal text-white relative overflow-hidden">
      
      {/* Background abstract overlay grids */}
      <div className="absolute left-[-5%] top-1/2 -translate-y-1/2 w-80 h-80 bg-brand-pink/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Core Header with Google Credentials */}
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-4">
          <span className="text-xs font-bold font-display uppercase tracking-widest text-brand-pink block">
            CLIENT TESTIMONIALS
          </span>
          <h2 className="font-display font-extrabold text-3xl sm:text-4xl">
            Success Stories from Our Members
          </h2>
          <div className="h-1 w-20 bg-gradient-to-r from-brand-pink to-brand-coral rounded-full mx-auto" />
          
          {/* Animated Google Reviews Rating Badge */}
          <motion.div 
            initial={{ scale: 0.95, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true }}
            className="inline-flex items-center space-x-3 bg-white/[0.03] border border-white/10 rounded-full py-2.5 px-6"
          >
            <div className="flex text-amber-450">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-4.5 h-4.5 fill-current" />
              ))}
            </div>
            <div className="text-xs sm:text-sm font-sans font-medium text-gray-300">
              <strong className="text-white">4.9/5 Stars</strong> based on <strong className="text-white">280 Google Reviews</strong>
            </div>
          </motion.div>
        </div>

        {/* Testimonials Main Slider Box Setup */}
        <div className="max-w-4xl mx-auto relative px-4" id="testimonials-slider-container">
          
          {/* Main Card View */}
          <div className="min-h-[280px] sm:min-h-[240px] flex items-center justify-center relative bg-dark-card/40 backdrop-blur-md rounded-3xl p-6 sm:p-10 border border-white/5 shadow-2xl">
            <div className="absolute top-4 left-6 text-brand-pink/15">
              <Quote className="w-16 h-16 fill-current" />
            </div>

            <AnimatePresence initial={false} custom={direction} mode="wait">
              <motion.div
                key={currentIndex}
                custom={direction}
                variants={slideVariants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{ duration: 0.4, ease: "easeInOut" }}
                className="w-full flex flex-col md:flex-row items-center md:items-start md:space-x-8 text-center md:text-left relative z-10"
              >
                {/* Profile Image Frame */}
                <div className="relative shrink-0 mb-6 md:mb-0">
                  <div className="w-20 h-20 rounded-2xl overflow-hidden border-2 border-brand-pink/50 shadow-md">
                    <img
                      src={testimonialsData[currentIndex].avatarUrl}
                      alt={testimonialsData[currentIndex].name}
                      className="w-full h-full object-cover"
                      referrerPolicy="no-referrer"
                    />
                  </div>
                  <div className="absolute -bottom-2 -right-2 bg-brand-pink text-white rounded-full p-1.5 shadow-md">
                    <Star className="w-3.5 h-3.5 fill-current" />
                  </div>
                </div>

                {/* Content Blocks */}
                <div className="flex-1 space-y-4">
                  <div className="flex justify-center md:justify-start text-amber-450 space-x-0.5">
                    {[...Array(testimonialsData[currentIndex].rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-current" />
                    ))}
                  </div>

                  <p className="font-sans text-sm sm:text-base md:text-lg text-white font-light italic leading-relaxed">
                    "{testimonialsData[currentIndex].comment}"
                  </p>

                  <div>
                    <h4 className="font-display font-bold text-sm sm:text-base text-brand-pink">
                      {testimonialsData[currentIndex].name}
                    </h4>
                    <span className="text-xs text-gray-400">
                      {testimonialsData[currentIndex].role}
                    </span>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Slider Arrows Navigation controllers */}
          <div className="flex justify-between items-center mt-8 px-2">
            
            {/* Dots */}
            <div className="flex space-x-1.5">
              {testimonialsData.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => {
                    setDirection(idx > currentIndex ? 1 : -1);
                    setCurrentIndex(idx);
                  }}
                  className={`w-2.5 h-2.5 rounded-full cursor-pointer transition-all duration-300 ${
                    idx === currentIndex
                      ? "bg-brand-pink w-6"
                      : "bg-white/10 hover:bg-white/20"
                  }`}
                  aria-label={`Go to testimonial ${idx + 1}`}
                />
              ))}
            </div>

            {/* Row Trigger Nav Buttons */}
            <div className="flex space-x-3">
              <button
                onClick={handlePrev}
                className="p-3 bg-white/5 hover:bg-white/10 text-white rounded-full border border-white/5 hover:border-white/15 cursor-pointer transition-all hover:scale-105 active:scale-95"
                aria-label="Previous testimonial"
              >
                <ChevronLeft className="w-5 h-5 text-gray-300" />
              </button>
              <button
                onClick={handleNext}
                className="p-3 bg-white/5 hover:bg-white/10 text-white rounded-full border border-white/5 hover:border-white/15 cursor-pointer transition-all hover:scale-105 active:scale-95"
                aria-label="Next testimonial"
              >
                <ChevronRight className="w-5 h-5 text-gray-300" />
              </button>
            </div>
          </div>

        </div>

        {/* Motivating Call To Trial Widget */}
        <div className="mt-20 max-w-2xl mx-auto text-center space-y-5 bg-gradient-to-r from-brand-pink/5 to-brand-purple/5 p-6 rounded-2xl border border-white/5">
          <p className="font-sans text-xs sm:text-sm text-gray-300 font-light">
            Want to write your own transformation milestone? Our doors at Raja Bazar are open for you to verify our vibes firsthand.
          </p>
          <button
            onClick={() => {
              const contactSec = document.querySelector("#contact");
              if (contactSec) {
                contactSec.scrollIntoView({ behavior: "smooth" });
              }
            }}
            className="inline-flex items-center space-x-2 text-xs font-bold uppercase tracking-widest text-[#ff1493] hover:text-[#ff7f50] transition-colors"
          >
            <span>Book Free Guidance Session</span>
            <ChevronRight className="w-4 h-4 animate-pulse" />
          </button>
        </div>

      </div>
    </section>
  );
}
