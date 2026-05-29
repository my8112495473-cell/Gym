import { motion } from "motion/react";
import { CheckCircle2, ShieldAlert, HeartHandshake, Smile, ShieldCheck } from "lucide-react";

export default function About() {
  const highlights = [
    {
      title: "100% Secure Ladies-Only Haven",
      desc: "Enjoy absolute workout privacy and absolute comfort in an entirely physical judgment-free zone.",
      icon: ShieldCheck,
      color: "text-brand-pink bg-brand-pink/10"
    },
    {
      title: "Modern, Spacious Air-Cooled Suites",
      desc: "Stay energetic in any season. Modern treadmills, dumbbells, and clean facilities engineered for comfort.",
      icon: HeartHandshake,
      color: "text-brand-coral bg-brand-coral/10"
    },
    {
      title: "Attentive & Friendly Female Trainers",
      desc: "Get correct posture guidance, customized exercise options, and immediate warm, professional support.",
      icon: Smile,
      color: "text-brand-purple bg-brand-purple/10"
    }
  ];

  return (
    <section
      id="about"
      className="py-24 bg-dark-charcoal text-white relative overflow-hidden"
    >
      {/* Decorative blurred background orb */}
      <div className="absolute right-0 top-1/3 w-80 h-80 bg-brand-pink/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          
          {/* Overlapping Glass / Image Masonry Grid */}
          <div className="lg:col-span-6 relative flex justify-center items-center">
            {/* Primary Main Image Frame */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8 }}
              className="relative w-72 h-96 sm:w-88 sm:h-110 rounded-2xl overflow-hidden shadow-2xl border border-white/10"
            >
              <img
                src="https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?q=80&w=600&auto=format&fit=crop"
                alt="Safe and welcoming yoga class at Everfit Ladies Gym"
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
            </motion.div>

            {/* Overlapping Secondary Card (Floating) */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="absolute -bottom-6 -left-4 sm:left-4 w-52 sm:w-60 bg-dark-card/90 backdrop-blur-md rounded-2xl p-4 border border-white/15 shadow-2xl"
            >
              <div className="flex items-center space-x-3 mb-2">
                <div className="p-2 rounded-xl bg-green-500/10 text-green-400">
                  <CheckCircle2 className="w-5 h-5" />
                </div>
                <h4 className="font-display font-semibold text-sm">Safe Space Verified</h4>
              </div>
              <p className="text-xs text-gray-400 leading-relaxed">
                Lucknow's women-certified gym prioritizing personal locker safety, hygiene, and comfortable breathing space.
              </p>
            </motion.div>

            {/* Back Accent Shapes */}
            <div className="absolute top-1/10 left-1/10 -z-10 w-48 h-48 bg-gradient-to-tr from-brand-pink to-brand-purple rounded-full blur-2xl opacity-20" />
          </div>

          {/* Core Text Section */}
          <div className="lg:col-span-6 flex flex-col space-y-8">
            <div className="space-y-3">
              <span className="text-xs font-bold font-display uppercase tracking-widest text-brand-pink block">
                OUR FITNESS SANCTUARY
              </span>
              <h2 className="font-display font-extrabold text-3xl sm:text-4xl text-white leading-tight">
                Crafted Exclusively for Women in Lucknow
              </h2>
              <div className="h-1 w-20 bg-gradient-to-r from-brand-pink to-brand-coral rounded-full" />
            </div>

            <p className="font-sans text-gray-300 text-sm sm:text-base leading-relaxed font-light">
              At **Everfit Ladies Gym**, we believe that every woman deserves a high-energy, hygienic, and extremely encouraging atmosphere to unlock her physical milestones. Located conveniently in the heart of Lucknow (Yahiyaganj, near Raja Bazar), we provide complete guidance that turns fitness from an obstacle into a rewarding lifestyle rhythm.
            </p>

            <p className="font-sans text-gray-300 text-sm sm:text-base leading-relaxed font-light">
              Whether you are an absolute beginner starting weight training, a student matching collegiate calories with **Zumba & Aerobics**, or a homemaker cultivating long-term mobility via **Yoga & Pilates**—our space feels empowering, safe, and highly welcoming.
            </p>

            {/* Animated Cards for features */}
            <div className="flex flex-col space-y-4 pt-2">
              {highlights.map((item, idx) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                  className="flex items-start space-x-4 p-4 rounded-xl bg-white/[0.03] border border-white/5 hover:bg-white/[0.06] hover:border-white/10 transition-all duration-300"
                >
                  <div className={`p-2.5 rounded-lg shrink-0 ${item.color}`}>
                    <item.icon className="w-5 h-5" />
                  </div>
                  <div className="space-y-1">
                    <h3 className="font-display font-bold text-sm sm:text-base text-white">
                      {item.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-gray-400 font-light leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
