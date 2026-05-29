import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { servicesData } from "../data";
import { 
  Flame, 
  Activity, 
  Zap, 
  Music, 
  Sparkles, 
  Shield, 
  Dumbbell, 
  UserCheck, 
  Compass, 
  Apple,
  ArrowRight,
  BookOpen
} from "lucide-react";

// Helper map to dynamically resolve Lucide Icons from text names
const iconMap: Record<string, any> = {
  Flame: Flame,
  Activity: Activity,
  Zap: Zap,
  Music: Music,
  Sparkles: Sparkles,
  Shield: Shield,
  Dumbbell: Dumbbell,
  UserCheck: UserCheck,
  Compass: Compass,
  Apple: Apple
};

export default function Services() {
  const [activeTab, setActiveTab] = useState("All");

  const categories = ["All", "Cardio & Dance", "strength & Conditioning", "Mind & Body", "Personal Coaching"];

  const filteredServices = activeTab === "All"
    ? servicesData
    : servicesData.filter(s => s.tag.toLowerCase() === activeTab.toLowerCase());

  const handleBookTrialClick = () => {
    const contactSection = document.querySelector("#contact");
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="services" className="py-24 bg-dark-charcoal text-white relative">
      {/* Decorative vertical glow strip */}
      <div className="absolute left-0 top-1/2 -translate-y-1/2 w-[1px] h-96 bg-gradient-to-b from-transparent via-brand-pink/50 to-transparent pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Title Grid */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 space-y-4 md:space-y-0 text-center md:text-left">
          <div className="space-y-3">
            <span className="text-xs font-bold font-display uppercase tracking-widest text-brand-pink block">
              OUR WORLD-CLASS FITNESS OFFERINGS
            </span>
            <h2 className="font-display font-extrabold text-3xl sm:text-4xl text-white">
              Vibrant & Energizing Programs
            </h2>
            <div className="h-1 w-20 bg-gradient-to-r from-brand-pink via-brand-coral to-brand-purple rounded-full mx-auto md:mx-0" />
          </div>
          <p className="font-sans text-gray-400 text-sm max-w-sm font-light">
            Each physical session is finely structured to maximize calorie expenditure, correct posture alignment, and boost positive energy.
          </p>
        </div>

        {/* Tab Selector Links */}
        <div className="flex flex-wrap gap-2 justify-center mb-12" id="services-tabs">
          {categories.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-4 py-2 text-xs sm:text-sm font-display font-medium rounded-full cursor-pointer transition-all duration-300 ${
                activeTab === tab
                  ? "bg-gradient-to-r from-brand-pink to-brand-purple text-white shadow-md shadow-brand-pink/20"
                  : "bg-white/5 text-gray-400 hover:text-white hover:bg-white/10"
              }`}
            >
              {tab === "All" ? "All Programs" : tab}
            </button>
          ))}
        </div>

        {/* Services Active cards grid */}
        <motion.div 
          layout
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
          id="services-cards-grid"
        >
          <AnimatePresence mode="popLayout">
            {filteredServices.map((service, index) => {
              const IconComponent = iconMap[service.iconName] || Dumbbell;
              return (
                <motion.div
                  layout
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.05 }}
                  key={service.id}
                  className="group relative bg-dark-card/60 backdrop-blur-md rounded-2xl p-6 border border-white/5 transition-all duration-300 card-glow hover:border-brand-pink/30 flex flex-col justify-between"
                >
                  <div>
                    {/* Header: Icon & Category Indicator */}
                    <div className="flex items-center justify-between mb-6">
                      <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-brand-pink/10 to-brand-purple/10 flex items-center justify-center text-brand-pink group-hover:scale-110 group-hover:bg-gradient-to-br group-hover:from-brand-pink group-hover:to-brand-purple group-hover:text-white transition-all duration-300">
                        <IconComponent className="w-6 h-6" />
                      </div>
                      <span className="text-[10px] font-bold uppercase tracking-widest text-[#8a2be2] bg-[#8a2be2]/10 px-2.5 py-1 rounded-full">
                        {service.tag}
                      </span>
                    </div>

                    {/* Service Name & Description */}
                    <h3 className="font-display font-bold text-lg sm:text-xl text-white mb-2 group-hover:text-brand-pink transition-colors">
                      {service.title}
                    </h3>
                    
                    <p className="font-sans text-xs sm:text-sm text-gray-400 leading-relaxed font-light mb-4">
                      {service.description}
                    </p>
                  </div>

                  {/* Highlights Bullet and Trial Activation CTA */}
                  <div className="pt-4 border-t border-white/5 mt-4">
                    <p className="text-[11px] font-semibold text-brand-coral uppercase tracking-wide mb-3 flex items-center">
                      <span className="w-1.5 h-1.5 rounded-full bg-brand-coral mr-2" />
                      {service.benefit}
                    </p>
                    <button
                      onClick={handleBookTrialClick}
                      className="inline-flex items-center text-xs font-bold uppercase tracking-wider text-white bg-white/5 group-hover:bg-brand-pink px-3 py-1.5 rounded-full hover:scale-102 transition-all space-x-1"
                    >
                      <span>Join Slot</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </motion.div>
        
        {/* Footnote Motivating banner */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16 p-8 rounded-3xl bg-gradient-to-r from-brand-pink/10 to-brand-purple/10 border border-white/5 text-center flex flex-col md:flex-row items-center justify-between gap-6"
        >
          <div className="text-left max-w-xl">
            <h4 className="font-display font-bold text-lg sm:text-xl text-white mb-2">
              Unsure which program fits your current milestones?
            </h4>
            <p className="font-sans text-xs sm:text-sm text-gray-400 leading-relaxed font-light">
              Walk into our Raja Bazar/Yahiyaganj center today. Our polite owner and certified advisors will perform a free muscle fitness consultation to design your schedules.
            </p>
          </div>
          <button
            onClick={handleBookTrialClick}
            className="px-6 py-3 bg-white text-dark-charcoal font-display font-bold text-xs uppercase tracking-wider rounded-full hover:bg-brand-pink hover:text-white transition-all shadow-md active:scale-95 shrink-0"
          >
            Request Free Guidance
          </button>
        </motion.div>

      </div>
    </section>
  );
}
