import { motion } from "motion/react";
import { benefitsData } from "../data";
import { 
  Heart, 
  Award, 
  Sliders, 
  Users, 
  Calendar, 
  TrendingUp,
  Flame
} from "lucide-react";

const iconMap: Record<string, any> = {
  Heart: Heart,
  Award: Award,
  Sliders: Sliders,
  Users: Users,
  Calendar: Calendar,
  TrendingUp: TrendingUp
};

export default function WhyChooseUs() {
  return (
    <section id="why-choose-us" className="py-24 bg-[#161618] text-white relative overflow-hidden">
      
      {/* Dynamic light gradient spots */}
      <div className="absolute right-[-10%] top-[-10%] w-96 h-96 bg-brand-purple/5 rounded-full blur-3xl" />
      <div className="absolute left-[-10%] bottom-[-10%] w-96 h-96 bg-brand-pink/5 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-4">
          <span className="text-xs font-bold font-display uppercase tracking-widest text-brand-pink block">
            WHY LUCKNOW TRUSTS EVERFIT
          </span>
          <h2 className="font-display font-extrabold text-3xl sm:text-4xl">
            A Supportive Fitness Ecosystem
          </h2>
          <div className="h-1 w-20 bg-gradient-to-r from-brand-pink to-brand-coral rounded-full mx-auto" />
          <p className="font-sans text-gray-400 text-sm sm:text-base font-light leading-relaxed">
            We are dedicated to producing a premium, fully customized ladies-only infrastructure that empowers women to prioritize wellness.
          </p>
        </div>

        {/* Benefits Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefitsData.map((benefit, index) => {
            const IconComponent = iconMap[benefit.iconName] || Heart;
            return (
              <motion.div
                key={benefit.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group p-8 rounded-2xl bg-dark-card/40 border border-white/5 hover:border-brand-pink/20 glow-purple transition-all duration-300"
              >
                {/* Floating Icon Wrapper */}
                <div className="w-14 h-14 rounded-2xl bg-white/5 flex items-center justify-center text-brand-pink group-hover:bg-gradient-to-br group-hover:from-brand-pink group-hover:to-brand-purple group-hover:text-white group-hover:scale-110 group-hover:shadow-md group-hover:shadow-brand-pink/20 transition-all duration-300 mb-6">
                  <IconComponent className="w-7 h-7" />
                </div>

                {/* Card copy */}
                <h3 className="font-display font-extrabold text-lg sm:text-xl text-white mb-3 group-hover:text-brand-pink transition-colors">
                  {benefit.title}
                </h3>
                
                <p className="font-sans text-xs sm:text-sm text-gray-400 leading-relaxed font-light">
                  {benefit.description}
                </p>
              </motion.div>
            );
          })}
        </div>

        {/* Live physical parameters bar */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="mt-16 bg-white/[0.02] border border-white/5 rounded-2xl p-6 sm:p-8 flex flex-col sm:flex-row items-center justify-around gap-6 text-center"
        >
          <div>
            <div className="text-3xl font-display font-black text-brand-pink">100%</div>
            <div className="text-[10px] text-gray-400 tracking-wider uppercase font-semibold mt-1">Ladies Only Environment</div>
          </div>
          <div className="hidden sm:block h-10 w-[1px] bg-white/10" />
          <div>
            <div className="text-3xl font-display font-black text-brand-purple">280+</div>
            <div className="text-[10px] text-gray-400 tracking-wider uppercase font-semibold mt-1">Top Google Reviews</div>
          </div>
          <div className="hidden sm:block h-10 w-[1px] bg-white/10" />
          <div>
            <div className="text-3xl font-display font-black text-brand-coral">4.9★</div>
            <div className="text-[10px] text-gray-400 tracking-wider uppercase font-semibold mt-1">Stellar Store Rating</div>
          </div>
          <div className="hidden sm:block h-10 w-[1px] bg-white/10" />
          <div>
            <div className="text-3xl font-display font-black text-white">YAHIYAGANJ</div>
            <div className="text-[10px] text-gray-400 tracking-wider uppercase font-semibold mt-1">Lucknow Location</div>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
