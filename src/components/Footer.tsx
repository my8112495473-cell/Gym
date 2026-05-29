import React from "react";
import { Facebook, Instagram, MessageCircle, Phone, Dumbbell, ArrowUp } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer id="footer" className="bg-[#0b0b0c] text-gray-450 pt-16 pb-8 border-t border-white/5 relative">
      
      {/* Scroll back to top float overlay button */}
      <div className="absolute top-0 right-10 -translate-y-1/2">
        <button
          onClick={handleScrollToTop}
          className="p-3.5 rounded-full bg-brand-pink text-white hover:bg-brand-coral cursor-pointer shadow-lg shadow-brand-pink/20 transition-all hover:-translate-y-1 active:scale-95 flex items-center justify-center border border-white/10"
          title="Scroll to top"
          id="scroll-to-top-button"
        >
          <ArrowUp className="w-5 h-5" />
        </button>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Content Grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12" id="footer-widgets-container">
          
          {/* Column A: Brand Identity */}
          <div className="space-y-4">
            <a 
              href="#home"
              onClick={(e) => handleLinkClick(e, "#home")}
              className="flex items-center space-x-2 group focus:outline-none"
              id="footer-logo"
            >
              <div className="flex items-center justify-center w-10 h-10 rounded-full bg-gradient-to-br from-brand-pink to-brand-purple text-white shadow-md">
                <Dumbbell className="w-5 h-5 group-hover:rotate-12 transition-transform duration-300" />
              </div>
              <div className="flex flex-col">
                <span className="font-display font-bold text-lg tracking-wide text-white">
                  EVERFIT LUCKNOW
                </span>
                <span className="text-[10px] tracking-[0.2em] uppercase text-brand-pink font-semibold -mt-1">
                  Ladies Gym
                </span>
              </div>
            </a>
            <p className="font-sans text-xs sm:text-sm text-gray-400 font-light leading-relaxed">
              Empowering every woman's physique, confidence, and wellness journey. We build robust support systems that make fitness fun, safe, and highly transformative.
            </p>
            
            {/* Social Triggers */}
            <div className="flex space-x-3.5 pt-2" id="footer-social-links">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noreferrer"
                className="w-9 h-9 rounded-xl bg-white/5 hover:bg-brand-pink hover:text-white flex items-center justify-center transition-all cursor-pointer text-gray-400"
                aria-label="Follow Everfit on Facebook"
              >
                <Facebook className="w-4 h-4" />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noreferrer"
                className="w-9 h-9 rounded-xl bg-white/5 hover:bg-brand-pink hover:text-white flex items-center justify-center transition-all cursor-pointer text-gray-400"
                aria-label="Follow Everfit on Instagram"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href="https://wa.me/918960418286"
                target="_blank"
                rel="noreferrer"
                className="w-9 h-9 rounded-xl bg-white/5 hover:bg-brand-pink hover:text-white flex items-center justify-center transition-all cursor-pointer text-gray-400"
                aria-label="Chat with Everfit on WhatsApp"
              >
                <MessageCircle className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Column B: Fast Navigation Quick Links */}
          <div className="space-y-4">
            <h4 className="font-display font-bold text-xs uppercase tracking-widest text-white">
              Explore Pages
            </h4>
            <ul className="space-y-2.5 text-xs sm:text-sm" id="footer-navigation-links">
              <li>
                <a 
                  href="#home" 
                  onClick={(e) => handleLinkClick(e, "#home")}
                  className="text-gray-400 hover:text-brand-pink transition-colors font-light"
                >
                  Home Lobby
                </a>
              </li>
              <li>
                <a 
                  href="#about" 
                  onClick={(e) => handleLinkClick(e, "#about")}
                  className="text-gray-400 hover:text-brand-pink transition-colors font-light"
                >
                  Our Philosophy
                </a>
              </li>
              <li>
                <a 
                  href="#services" 
                  onClick={(e) => handleLinkClick(e, "#services")}
                  className="text-gray-400 hover:text-brand-pink transition-colors font-light"
                >
                  Fitness Programs
                </a>
              </li>
              <li>
                <a 
                  href="#why-choose-us" 
                  onClick={(e) => handleLinkClick(e, "#why-choose-us")}
                  className="text-gray-400 hover:text-brand-pink transition-colors font-light"
                >
                  Why Ladies Choose Us
                </a>
              </li>
              <li>
                <a 
                  href="#reviews" 
                  onClick={(e) => handleLinkClick(e, "#reviews")}
                  className="text-gray-400 hover:text-brand-pink transition-colors font-light"
                >
                  Reviews Rating
                </a>
              </li>
            </ul>
          </div>

          {/* Column C: Certified Services */}
          <div className="space-y-4">
            <h4 className="font-display font-bold text-xs uppercase tracking-widest text-white">
              Elite Activities
            </h4>
            <ul className="space-y-2.5 text-xs sm:text-sm text-gray-400" id="footer-activities-links">
              <li>
                <span className="font-light">Zumba Aerobics Suite</span>
              </li>
              <li>
                <span className="font-light">High Power CrossFit Circuit</span>
              </li>
              <li>
                <span className="font-light">Core Pilates & Alignment Yoga</span>
              </li>
              <li>
                <span className="font-light">Posture Corrective Lifting</span>
              </li>
              <li>
                <span className="font-light">Nutrition Habit Consultation</span>
              </li>
            </ul>
          </div>

          {/* Column D: Lucknow Center Contacts */}
          <div className="space-y-4">
            <h4 className="font-display font-bold text-xs uppercase tracking-widest text-white">
              Yahiyaganj Center
            </h4>
            <p className="font-sans text-xs sm:text-sm text-gray-400 font-light leading-relaxed">
              Prabhu Ashram, 230/45,<br />
              Raja Bazar, Yahiyaganj,<br />
              Lucknow, UP 226003
            </p>
            <div className="pt-2 space-y-1">
              <span className="text-[10px] font-bold text-gray-400 uppercase tracking-widest block">TELEPHONE REGISTRATIONS</span>
              <a 
                href="tel:08960418286"
                className="text-sm font-bold text-brand-pink hover:text-brand-coral transition-colors"
                title="Call Everfit"
              >
                089604 18286
              </a>
            </div>
          </div>

        </div>

        {/* Lower Legal Bar with credits */}
        <div className="pt-8 border-t border-white/5 flex flex-col sm:flex-row justify-between items-center text-xs text-gray-500 font-light" id="footer-legal-bar">
          <p>
            &copy; {currentYear} Everfit Ladies Gym Lucknow. All Rights Reserved.
          </p>
          <div className="flex space-x-4 mt-4 sm:mt-0 text-[11px]">
            <span>Empowered judgment-free community</span>
            <span>•</span>
            <span>Designed with complete security focus</span>
          </div>
        </div>

      </div>
    </footer>
  );
}
