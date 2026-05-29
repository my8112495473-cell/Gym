import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Menu, X, Phone, Dumbbell, Sun, Moon } from "lucide-react";

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [theme, setTheme] = useState<"light" | "dark" | null>(null);

  // Initialize theme from storage safely on browser mount
  useEffect(() => {
    const savedTheme = localStorage.getItem("everfit-theme");
    if (savedTheme === "light") {
      setTheme("light");
      document.documentElement.classList.add("light");
    } else {
      setTheme("dark");
      document.documentElement.classList.add("dark");
    }
  }, []);

  const toggleTheme = () => {
    const nextTheme = theme === "dark" || theme === null ? "light" : "dark";
    setTheme(nextTheme);
    const root = document.documentElement;
    if (nextTheme === "light") {
      root.classList.add("light");
      root.classList.remove("dark");
    } else {
      root.classList.add("dark");
      root.classList.remove("light");
    }
    localStorage.setItem("everfit-theme", nextTheme);
  };

  useEffect(() => {
    const handleScroll = () => {
      // Background shift
      if (window.scrollY > 40) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }

      // Progress bar percentage
      const totalScroll = document.documentElement.scrollHeight - window.innerHeight;
      if (totalScroll > 0) {
        setScrollProgress((window.scrollY / totalScroll) * 100);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Services", href: "#services" },
    { name: "Why Us", href: "#why-choose-us" },
    { name: "Reviews", href: "#reviews" },
    { name: "Gallery", href: "#gallery" },
    { name: "Contact", href: "#contact" }
  ];

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setIsMobileMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      {/* Scroll Progress Indicator */}
      <div 
        id="scroll-progress-indicator"
        className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-brand-pink via-brand-purple to-brand-coral z-55 transition-all duration-100 origin-left"
        style={{ width: `${scrollProgress}%` }}
      />

      <nav
        id="main-navigation"
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? "bg-dark-charcoal/80 backdrop-blur-md border-b border-white/5 py-3 shadow-lg"
            : "bg-transparent py-5"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <a 
              href="#home" 
              onClick={(e) => handleLinkClick(e, "#home")}
              className="flex items-center space-x-2 group focus:outline-none"
              id="navigation-logo"
            >
              <div className="relative flex items-center justify-center w-10 h-10 rounded-full bg-gradient-to-br from-brand-pink to-brand-purple text-white shadow-md shadow-brand-pink/20">
                <Dumbbell className="w-5 h-5 group-hover:rotate-12 transition-transform duration-300" />
                <span className="absolute -inset-1 rounded-full bg-brand-pink/20 blur-sm group-hover:blur-md transition-all duration-300 opacity-0 group-hover:opacity-100" />
              </div>
              <div className="flex flex-col">
                <span className="font-display font-bold text-lg md:text-xl tracking-wide text-white bg-clip-text">
                  EVERFIT
                </span>
                <span className="text-[10px] tracking-[0.2em] uppercase text-brand-pink font-semibold -mt-1">
                  Ladies Gym
                </span>
              </div>
            </a>

            {/* Desktop Navigation Links */}
            <div className="hidden lg:flex items-center space-x-7" id="desktop-links">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => handleLinkClick(e, link.href)}
                  className="font-sans text-sm font-medium text-gray-300 hover:text-white transition-colors py-2 relative group"
                >
                  {link.name}
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-brand-pink to-brand-coral transition-all duration-300 group-hover:w-full" />
                </a>
              ))}
            </div>

            {/* CTA action button */}
            <div className="hidden sm:flex items-center space-x-3" id="desktop-cta">
              {theme !== null && (
                <button
                  type="button"
                  onClick={toggleTheme}
                  className="flex items-center justify-center w-10 h-10 rounded-full bg-white/5 border border-white/10 text-white hover:bg-white/10 hover:border-white/20 transition-all cursor-pointer"
                  title={theme === "dark" ? "Switch to Light Wellness Theme" : "Switch to Dark Active Theme"}
                >
                  {theme === "dark" ? (
                    <Sun className="w-4 h-4 text-amber-400" />
                  ) : (
                    <Moon className="w-4 h-4 text-brand-pink" />
                  )}
                </button>
              )}
              <a
                href="tel:08960418286"
                className="flex items-center justify-center w-10 h-10 rounded-full bg-white/5 border border-white/10 text-white hover:bg-white/10 hover:border-white/20 transition-all"
                title="Call Everfit"
              >
                <Phone className="w-4 h-4 text-brand-pink" />
              </a>
              <a
                href="#contact"
                onClick={(e) => handleLinkClick(e, "#contact")}
                className="relative inline-flex items-center justify-center px-4 py-2 text-xs font-semibold uppercase tracking-wider text-white rounded-full overflow-hidden group focus:outline-none"
              >
                <span className="absolute inset-0 bg-gradient-to-r from-brand-pink via-brand-coral to-brand-purple transition-all duration-500 group-hover:bg-gradient-to-l" />
                <span className="absolute -inset-1 bg-brand-pink/50 blur-md rounded-full opacity-50 group-hover:opacity-100 transition-opacity duration-300" />
                <span className="relative z-10">Book Trial</span>
              </a>
            </div>

            {/* Mobile Menu Toggle Button */}
            <div className="flex lg:hidden items-center space-x-2" id="mobile-toggle">
              {theme !== null && (
                <button
                  type="button"
                  onClick={toggleTheme}
                  className="flex items-center justify-center w-10 h-10 rounded-full bg-white/5 border border-white/10 text-white hover:bg-white/10 hover:border-white/20 transition-all cursor-pointer"
                  title={theme === "dark" ? "Switch to Light Wellness Theme" : "Switch to Dark Active Theme"}
                >
                  {theme === "dark" ? (
                    <Sun className="w-4 h-4 text-amber-400" />
                  ) : (
                    <Moon className="w-4 h-4 text-brand-pink" />
                  )}
                </button>
              )}
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="inline-flex items-center justify-center p-2 rounded-lg text-gray-400 hover:text-white hover:bg-white/5 focus:outline-none"
                aria-label="Toggle menu"
              >
                {isMobileMenuOpen ? (
                  <X className="w-6 h-6 text-white" />
                ) : (
                  <Menu className="w-6 h-6 text-white" />
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="lg:hidden bg-dark-charcoal/95 border-b border-white/10 backdrop-blur-xl overflow-hidden"
              id="mobile-navigation-drawer"
            >
              <div className="px-4 pt-2 pb-6 space-y-2">
                {navLinks.map((link) => (
                  <a
                    key={link.name}
                    href={link.href}
                    onClick={(e) => handleLinkClick(e, link.href)}
                    className="block px-3 py-3 rounded-lg text-base font-semibold text-gray-300 hover:text-white hover:bg-white/5 transition-all"
                  >
                    {link.name}
                  </a>
                ))}
                <div className="pt-4 flex flex-col space-y-3 px-3">
                  <a
                    href="tel:08960418286"
                    className="flex items-center justify-center space-x-2 w-full py-3 rounded-xl bg-white/5 border border-white/10 text-white font-medium"
                  >
                    <Phone className="w-4 h-4 text-brand-pink" />
                    <span>089604 18286</span>
                  </a>
                  <a
                    href="#contact"
                    onClick={(e) => handleLinkClick(e, "#contact")}
                    className="flex items-center justify-center w-full py-3 rounded-xl bg-gradient-to-r from-brand-pink to-brand-coral text-white font-semibold text-center uppercase tracking-wider text-sm shadow-md shadow-brand-pink/20"
                  >
                    Book Free Trial
                  </a>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </>
  );
}
