import { useEffect, useState } from "react";
import { motion } from "motion/react";
import { Phone, ArrowRight, MessageCircle, Star, Sparkles, Trophy, Calendar } from "lucide-react";

export default function Hero() {
  const [rating, setRating] = useState(0);
  const [reviews, setReviews] = useState(0);
  const [programs, setPrograms] = useState(0);

  useEffect(() => {
    // Run an increment animation for statistics when the component mounts
    const ratingInterval = setInterval(() => {
      setRating((prev) => {
        if (prev >= 4.9) {
          clearInterval(ratingInterval);
          return 4.9;
        }
        return parseFloat((prev + 0.1).toFixed(1));
      });
    }, 45);

    const reviewsInterval = setInterval(() => {
      setReviews((prev) => {
        if (prev >= 280) {
          clearInterval(reviewsInterval);
          return 280;
        }
        return prev + 8;
      });
    }, 30);

    const programsInterval = setInterval(() => {
      setPrograms((prev) => {
        if (prev >= 10) {
          clearInterval(programsInterval);
          return 10;
        }
        return prev + 1;
      });
    }, 100);

    return () => {
      clearInterval(ratingInterval);
      clearInterval(reviewsInterval);
      clearInterval(programsInterval);
    };
  }, []);

  const handleCtaClick = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center pt-24 pb-16 overflow-hidden bg-dark-charcoal text-white"
    >
      {/* Dynamic Background Image Layer with Heavy Dark Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1517838277536-f5f99be501cd?q=80&w=1920&auto=format&fit=crop"
          alt="Everfit Ladies Gym Lucknow Atmosphere"
          className="w-full h-full object-cover object-center opacity-30 transform scale-105"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-dark-charcoal via-dark-charcoal/90 to-dark-charcoal" />
        <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-dark-charcoal to-transparent" />
      </div>

      {/* Floating Ambient Glow Orbs */}
      <motion.div
        animate={{
          x: [0, 30, -20, 0],
          y: [0, -40, 30, 0],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute top-1/4 left-1/10 w-72 h-72 bg-brand-pink/15 rounded-full blur-3xl z-0 pointer-events-none"
      />
      <motion.div
        animate={{
          x: [0, -40, 30, 0],
          y: [0, 35, -25, 0],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 2,
        }}
        className="absolute bottom-1/4 right-1/10 w-96 h-96 bg-brand-purple/15 rounded-full blur-3xl z-0 pointer-events-none"
      />

      {/* Main Content Hero */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Headline and CTAs Description Grid */}
          <div className="lg:col-span-7 flex flex-col space-y-8 text-center lg:text-left">
            {/* Tagline */}
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex self-center lg:self-start items-center space-x-2 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-brand-pink text-xs font-semibold uppercase tracking-widest"
            >
              <Sparkles className="w-3.5 h-3.5" />
              <span>Lucknow's #1 Ladies-Only Gym</span>
            </motion.div>

            {/* Headline */}
            <h1 className="font-display font-extrabold text-4xl sm:text-5xl lg:text-6.5xl leading-tight sm:leading-none tracking-tight">
              Transform Your
              <span className="block mt-1 text-transparent bg-clip-text bg-gradient-to-r from-brand-pink via-brand-coral to-brand-purple leading-normal drop-shadow-sm">
                Fitness Journey
              </span>
              at{" "}
              <motion.span 
                initial={{ opacity: 0.9 }}
                animate={{ opacity: [0.9, 1, 0.9] }}
                transition={{ duration: 3, repeat: Infinity }}
                className="text-white relative inline-block text-glow"
              >
                Everfit Gym
              </motion.span>
            </h1>

            {/* Subheading */}
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="font-sans text-gray-300 text-base sm:text-lg lg:text-xl max-w-xl mx-auto lg:mx-0 leading-relaxed font-light"
            >
              Safe, energetic, and women-focused fitness space in Lucknow. Elevate your confidence, master your body, and join a welcoming sisterhood customized for ladies of all age brackets.
            </motion.p>

            {/* Call To Actions Row */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
            >
              <button
                onClick={() => handleCtaClick("#contact")}
                className="relative inline-flex items-center justify-center px-8 py-4 font-display font-semibold text-sm uppercase tracking-wider text-white rounded-full overflow-hidden shadow-xl shadow-brand-pink/30 hover:scale-103 active:scale-98 transition-all group"
              >
                <span className="absolute inset-0 bg-gradient-to-r from-brand-pink via-brand-coral to-brand-purple transition-all duration-500 group-hover:bg-gradient-to-l" />
                <span className="absolute -inset-1 bg-brand-pink/50 blur-lg rounded-full opacity-60 group-hover:opacity-100 transition-opacity duration-300" />
                <span className="relative z-10 flex items-center space-x-2">
                  <span>Get Started Today</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </span>
              </button>

              <button
                onClick={() => handleCtaClick("#contact")}
                className="inline-flex items-center justify-center px-8 py-4 font-display font-semibold text-sm uppercase tracking-wider text-white rounded-full bg-white/5 border border-white/10 hover:bg-white/10 hover:border-white/25 hover:scale-103 active:scale-98 transition-all focus:outline-none"
              >
                <span>Book Free Trial</span>
              </button>

              <a
                href="tel:08960418286"
                className="inline-flex items-center justify-center px-8 py-4 font-display font-semibold text-sm uppercase tracking-wider text-brand-pink border border-brand-pink/30 hover:bg-brand-pink/5 hover:border-brand-pink/60 rounded-full transition-all"
              >
                <Phone className="w-4 h-4 mr-2" />
                <span>Call Now</span>
              </a>
            </motion.div>

            {/* Highlights Bar */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.6 }}
              className="flex flex-wrap gap-x-6 gap-y-3 justify-center lg:justify-start pt-4 text-xs font-semibold text-gray-400 border-t border-white/5"
            >
              <div className="flex items-center">
                <div className="w-1.5 h-1.5 rounded-full bg-brand-pink mr-2" />
                <span>100% Women Only Workspace</span>
              </div>
              <div className="flex items-center">
                <div className="w-1.5 h-1.5 rounded-full bg-brand-purple mr-2" />
                <span>Fully Air Conditioned</span>
              </div>
              <div className="flex items-center">
                <div className="w-1.5 h-1.5 rounded-full bg-brand-coral mr-2" />
                <span>Locker & Shower Access</span>
              </div>
            </motion.div>
          </div>

          {/* Graphical Presentation Block & Counters */}
          <div className="lg:col-span-5 relative mt-6 lg:mt-0 flex justify-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="relative w-80 h-96 sm:w-88 sm:h-100 rounded-3xl overflow-hidden shadow-2xl z-10"
            >
              {/* Image with overlay frame */}
              <div className="absolute inset-0 bg-gradient-to-t from-dark-charcoal via-transparent to-brand-purple/20 mix-blend-multiply" />
              <img
                src="https://images.unsplash.com/photo-1548690312-e3b507d8c110?q=80&w=600&auto=format&fit=crop"
                alt="Strong woman training at Everfit Gym"
                className="w-full h-full object-cover transition-transform duration-10000 ease-out hover:scale-108"
                referrerPolicy="no-referrer"
              />

              {/* Glowing Corner Accents */}
              <div className="absolute top-4 left-4 p-3 bg-dark-charcoal/80 backdrop-blur-md rounded-2xl border border-white/10 flex items-center space-x-2">
                <Trophy className="w-5 h-5 text-brand-coral" />
                <span className="text-xs font-bold font-display uppercase tracking-widest text-white">Lucknow's Premier</span>
              </div>

              {/* Live Hours Overlay Pill */}
              <div className="absolute bottom-4 left-4 right-4 p-4 bg-dark-charcoal/80 backdrop-blur-md rounded-2xl border border-white/15">
                <div className="flex items-center justify-between">
                  <div>
                    <h4 className="text-xs font-bold text-gray-300">TODAY'S STATUS</h4>
                    <p className="text-sm font-extrabold text-white flex items-center mt-1">
                      <span className="w-2.5 h-2.5 bg-green-500 rounded-full inline-block mr-2 animate-pulse" />
                      Open · Closes 7:30 PM
                    </p>
                  </div>
                  <a
                    href="https://wa.me/918960418286"
                    target="_blank"
                    rel="noreferrer"
                    className="p-2 rounded-xl bg-brand-pink hover:bg-brand-pink/80 text-white transition-all scale-100 active:scale-95"
                    title="WhatsApp us"
                  >
                    <MessageCircle className="w-5 h-5" />
                  </a>
                </div>
              </div>
            </motion.div>

            {/* Background Decorative Rings */}
            <div className="absolute -top-6 -right-6 w-40 h-40 rounded-full border border-dashed border-brand-pink/30 animate-spin" style={{ animationDuration: "60s" }} />
            <div className="absolute -bottom-6 -left-6 w-32 h-32 rounded-full border border-dashed border-brand-purple/20 animate-spin" style={{ animationDuration: "40s" }} />

            {/* Live Counters overlapping frame */}
            <motion.div
              initial={{ x: 50, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="absolute -right-4 top-1/2 -translate-y-1/2 flex flex-col space-y-4 z-20 pointer-events-none"
            >
              <div className="bg-dark-card/90 backdrop-blur-xl border border-white/10 rounded-2xl p-3 shadow-lg flex items-center space-x-3 w-40">
                <div className="w-10 h-10 rounded-xl bg-brand-pink/15 flex items-center justify-center text-brand-pink">
                  <Star className="w-5 h-5 fill-current" />
                </div>
                <div>
                  <div className="text-xl font-display font-extrabold text-white">{rating.toFixed(1)}</div>
                  <div className="text-[10px] text-gray-400 tracking-wider uppercase font-semibold">Google Rating</div>
                </div>
              </div>

              <div className="bg-dark-card/90 backdrop-blur-xl border border-white/10 rounded-2xl p-3 shadow-lg flex items-center space-x-3 w-40">
                <div className="w-10 h-10 rounded-xl bg-brand-purple/15 flex items-center justify-center text-brand-purple">
                  <MessageCircle className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xl font-display font-extrabold text-white">{reviews}+</div>
                  <div className="text-[10px] text-gray-400 tracking-wider uppercase font-semibold">Real Reviews</div>
                </div>
              </div>

              <div className="bg-dark-card/90 backdrop-blur-xl border border-white/10 rounded-2xl p-3 shadow-lg flex items-center space-x-3 w-40">
                <div className="w-10 h-10 rounded-xl bg-brand-coral/15 flex items-center justify-center text-brand-coral">
                  <Calendar className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xl font-display font-extrabold text-white">{programs}+</div>
                  <div className="text-[10px] text-gray-400 tracking-wider uppercase font-semibold">Programs</div>
                </div>
              </div>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}
