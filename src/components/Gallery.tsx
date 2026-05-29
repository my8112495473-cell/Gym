import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { galleryData } from "../data";
import { ZoomIn, Sparkles, Image as ImageIcon } from "lucide-react";

export default function Gallery() {
  const [selectedTag, setSelectedTag] = useState("All");

  const tags = ["All", "Zumba", "Yoga", "Crossfit", "Gym Environment"];

  const filteredItems = selectedTag === "All"
    ? galleryData
    : galleryData.filter(item => item.tag === selectedTag);

  return (
    <section id="gallery" className="py-24 bg-[#161618] text-white relative">
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Gallery Title Grid */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 space-y-4 md:space-y-0 text-center md:text-left">
          <div className="space-y-3">
            <span className="text-xs font-bold font-display uppercase tracking-widest text-brand-pink block">
              OUR STUDIO GALLERY
            </span>
            <h2 className="font-display font-extrabold text-3xl sm:text-4xl text-white">
              Sneak Peak of Our Vibe
            </h2>
            <div className="h-1 w-20 bg-gradient-to-r from-brand-pink via-brand-coral to-brand-purple rounded-full mx-auto md:mx-0" />
          </div>
          <p className="font-sans text-gray-400 text-sm max-w-sm font-light">
            Step inside our Lucknow workspace. Check our equipment, spacious group sessions, and friendly training spaces.
          </p>
        </div>

        {/* Gallery Tag Filters */}
        <div className="flex flex-wrap gap-2 justify-center mb-10" id="gallery-tag-filters">
          {tags.map((tag) => (
            <button
              key={tag}
              onClick={() => setSelectedTag(tag)}
              className={`px-4 py-1.5 text-xs sm:text-sm font-display font-medium rounded-full cursor-pointer transition-all duration-300 ${
                selectedTag === tag
                  ? "bg-gradient-to-r from-brand-pink to-brand-purple text-white shadow-md shadow-brand-pink/15"
                  : "bg-white/5 text-gray-400 hover:text-white hover:bg-white/10"
              }`}
            >
              {tag}
            </button>
          ))}
        </div>

        {/* Dense Responsive Grid with Framer Motion Layouts */}
        <motion.div 
          layout
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
          id="gallery-images-container"
        >
          <AnimatePresence mode="popLayout">
            {filteredItems.map((item, index) => (
              <motion.div
                key={item.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4 }}
                className="group relative h-72 sm:h-80 rounded-2xl overflow-hidden bg-dark-card border border-white/5 shadow-lg group select-none"
              >
                {/* Image */}
                <img
                  src={item.url}
                  alt={item.title}
                  className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-108"
                  referrerPolicy="no-referrer"
                />

                {/* Glassmorphism Dark Cover on Hover */}
                <div className="absolute inset-0 bg-gradient-to-t from-dark-charcoal via-dark-charcoal/40 to-transparent opacity-60 group-hover:opacity-90 transition-opacity duration-300 pointer-events-none" />

                {/* Zoom Interactive Overlay */}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none z-10">
                  <div className="p-3 bg-brand-pink/90 backdrop-blur-md rounded-full text-white shadow-xl transform scale-75 group-hover:scale-100 transition-transform duration-300">
                    <ZoomIn className="w-5 h-5" />
                  </div>
                </div>

                {/* Details Footer tags */}
                <div className="absolute bottom-4 left-4 right-4 bg-dark-card/80 backdrop-blur-md border border-white/10 rounded-xl p-3 transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-[9px] font-mono uppercase tracking-widest text-brand-coral font-bold flex items-center mb-0.5">
                        <Sparkles className="w-2.5 h-2.5 mr-1" />
                        {item.tag}
                      </p>
                      <h4 className="font-display font-extrabold text-xs sm:text-sm text-white">
                        {item.title}
                      </h4>
                    </div>
                    <ImageIcon className="w-4 h-4 text-gray-400 group-hover:text-brand-pink transition-colors shrink-0" />
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

      </div>
    </section>
  );
}
