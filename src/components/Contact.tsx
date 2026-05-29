import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { MapPin, Phone, MessageCircle, Clock, Send, CheckCircle, Calendar, Star } from "lucide-react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    program: "Zumba",
    message: ""
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const programsList = [
    "Zumba",
    "Aerobics",
    "CrossFit",
    "Dance Fitness",
    "Yoga Classes",
    "Pilates",
    "Weight Training",
    "Personal Training",
    "Nutrition Consulting"
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.phone) return;

    setLoading(true);
    
    // Simulate server ingestion
    setTimeout(() => {
      setLoading(false);
      setIsSubmitted(true);
    }, 1200);
  };

  const handleResetForm = () => {
    setFormData({ name: "", phone: "", program: "Zumba", message: "" });
    setIsSubmitted(false);
  };

  return (
    <section id="contact" className="py-24 bg-dark-charcoal text-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-4">
          <span className="text-xs font-bold font-display uppercase tracking-widest text-brand-pink block">
            CLAIM YOUR FREE PASS
          </span>
          <h2 className="font-display font-extrabold text-3xl sm:text-4xl">
            Join the Everfit Sisterhood
          </h2>
          <div className="h-1 w-20 bg-gradient-to-r from-brand-pink to-brand-coral rounded-full mx-auto" />
          <p className="font-sans text-gray-400 text-sm max-w-lg mx-auto font-light leading-relaxed">
            Ready to change your lifestyle? Provide your name and we will reserve your complimentary workout pass and free trainer consultation instantly.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-stretch">
          
          {/* Column A: Leads Form Terminal */}
          <div className="lg:col-span-6 flex flex-col justify-between">
            <div className="bg-dark-card/50 backdrop-blur-md rounded-3xl p-6 sm:p-10 border border-white/5 shadow-2xl h-full flex flex-col justify-center">
              
              <AnimatePresence mode="wait">
                {!isSubmitted ? (
                  <motion.form
                    key="form"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    onSubmit={handleSubmit}
                    className="space-y-6"
                  >
                    <div className="space-y-1">
                      <h4 className="font-display font-bold text-xl sm:text-2xl text-white">
                        Book Your Trial Slot
                      </h4>
                      <p className="text-xs text-gray-400 font-light">
                        Simply fill out your basic coordinates and our booking desk will contact you over phone.
                      </p>
                    </div>

                    <div className="space-y-5">
                      {/* Name */}
                      <div className="space-y-2">
                        <label className="block text-xs font-bold uppercase tracking-widest text-gray-300">
                          Your Active Name *
                        </label>
                        <input
                          type="text"
                          required
                          value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                          placeholder="e.g. Shalini Roy"
                          className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl font-sans text-sm text-white focus:outline-none focus:border-brand-pink focus:bg-white/10 transition-all placeholder:text-gray-500"
                        />
                      </div>

                      {/* Phone Mobile */}
                      <div className="space-y-2">
                        <label className="block text-xs font-bold uppercase tracking-widest text-gray-300">
                          Primary Weight / Whatsapp Number *
                        </label>
                        <input
                          type="tel"
                          required
                          value={formData.phone}
                          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                          placeholder="e.g. 089604 XXXXX"
                          className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl font-sans text-sm text-white focus:outline-none focus:border-brand-pink focus:bg-white/10 transition-all placeholder:text-gray-500"
                        />
                      </div>

                      {/* Program selection */}
                      <div className="space-y-2">
                        <label className="block text-xs font-bold uppercase tracking-widest text-gray-300">
                          Select Preferred Program Slot
                        </label>
                        <select
                          value={formData.program}
                          onChange={(e) => setFormData({ ...formData, program: e.target.value })}
                          className="w-full px-4 py-3 bg-[#1c1c1e] border border-white/10 rounded-xl font-sans text-sm text-white focus:outline-none focus:border-brand-pink transition-all cursor-pointer"
                        >
                          {programsList.map((prg) => (
                            <option key={prg} value={prg} className="bg-dark-charcoal text-white">
                              {prg} General Session
                            </option>
                          ))}
                        </select>
                      </div>

                      {/* Custom Messages Optional */}
                      <div className="space-y-2">
                        <label className="block text-xs font-bold uppercase tracking-widest text-gray-300">
                          Any custom targets? (Optional)
                        </label>
                        <textarea
                          rows={3}
                          value={formData.message}
                          onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                          placeholder="e.g. Interested in fat loss / looking for early morning Zumba schedules..."
                          className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl font-sans text-sm text-white focus:outline-none focus:border-brand-pink focus:bg-white/10 transition-all placeholder:text-gray-500 resize-none"
                        />
                      </div>
                    </div>

                    {/* Submit CTA */}
                    <button
                      type="submit"
                      disabled={loading}
                      className="w-full py-4 bg-gradient-to-r from-brand-pink to-brand-coral hover:from-brand-coral hover:to-brand-pink text-white font-display font-bold text-xs uppercase tracking-widest rounded-xl transition-all shadow-lg active:scale-98 disabled:opacity-50 cursor-pointer flex items-center justify-center space-x-2"
                    >
                      {loading ? (
                        <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                      ) : (
                        <>
                          <span>Join Today (Book Free Pass)</span>
                          <Send className="w-4 h-4" />
                        </>
                      )}
                    </button>
                  </motion.form>
                ) : (
                  <motion.div
                    key="success"
                    initial={{ scale: 0.9, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    exit={{ scale: 0.9, opacity: 0 }}
                    className="text-center py-8 space-y-6"
                  >
                    <div className="w-20 h-20 bg-green-500/10 text-green-400 rounded-full flex items-center justify-center mx-auto shadow-inner border border-green-500/20">
                      <CheckCircle className="w-10 h-10" />
                    </div>
                    <div className="space-y-2">
                      <h4 className="font-display font-extrabold text-2xl text-white">
                        Trial Reserved Successfully!
                      </h4>
                      <p className="font-sans text-sm text-gray-350 max-w-sm mx-auto font-light leading-relaxed">
                        Excellent step, <strong className="text-white font-semibold">{formData.name}</strong>! Your trial slot for <strong className="text-brand-pink font-semibold">{formData.program}</strong> has been priority registered.
                      </p>
                    </div>

                    <div className="bg-white/[0.03] border border-white/5 rounded-2xl p-4 text-left max-w-md mx-auto space-y-3">
                      <div className="flex justify-between text-xs">
                        <span className="text-gray-400">Reserved For:</span>
                        <span className="text-white font-semibold">{formData.name}</span>
                      </div>
                      <div className="flex justify-between text-xs">
                        <span className="text-gray-400">Class Focus:</span>
                        <span className="text-brand-coral font-semibold">{formData.program}</span>
                      </div>
                      <div className="flex justify-between text-xs">
                        <span className="text-gray-400">Local Location:</span>
                        <span className="text-white font-semibold text-right">Yahiyaganj, Lucknow</span>
                      </div>
                    </div>

                    <p className="text-xs text-gray-400 font-light max-w-sm mx-auto">
                      Our booking desk will call you dynamically on <strong className="text-white">{formData.phone}</strong> shortly to lock in your comfortable timing coordinates.
                    </p>

                    <button
                      onClick={handleResetForm}
                      className="px-6 py-2.5 rounded-full bg-white/5 hover:bg-white/10 text-white font-display text-xs uppercase font-medium border border-white/10 tracking-widest"
                    >
                      Reset Slot Booking
                    </button>
                  </motion.div>
                )}
              </AnimatePresence>

            </div>
          </div>

          {/* Column B: Geolocation / Address details / Iframe Map */}
          <div className="lg:col-span-6 flex flex-col justify-between space-y-8">
            <div className="bg-dark-card/50 backdrop-blur-md rounded-3xl p-6 sm:p-8 border border-white/5 shadow-2xl space-y-6 flex-1 flex flex-col justify-between">
              
              <div className="space-y-6">
                <div>
                  <h4 className="font-display font-extrabold text-lg sm:text-xl text-white mb-1">
                    Contact Coordinates
                  </h4>
                  <p className="text-xs text-gray-400 font-light">
                    Walk in anytime or book physical passes instantly over instant call or messenger.
                  </p>
                </div>

                {/* Vertical lists parameters */}
                <div className="space-y-5">
                  
                  {/* Local Address */}
                  <div className="flex items-start space-x-3.5">
                    <div className="p-2.5 rounded-xl bg-brand-pink/10 text-brand-pink shrink-0">
                      <MapPin className="w-5 h-5" />
                    </div>
                    <div>
                      <h5 className="text-xs font-bold uppercase tracking-wider text-gray-300">Physical Address</h5>
                      <p className="font-sans text-sm text-white font-light leading-relaxed mt-0.5">
                        Prabhu Ashram, 230/45, Raja Bazar, Yahiyaganj, Lucknow, Uttar Uttar Pradesh 226003
                      </p>
                    </div>
                  </div>

                  {/* Phone Click to call */}
                  <div className="flex items-start space-x-3.5">
                    <div className="p-2.5 rounded-xl bg-brand-purple/10 text-brand-purple shrink-0">
                      <Phone className="w-5 h-5" />
                    </div>
                    <div>
                      <h5 className="text-xs font-bold uppercase tracking-wider text-gray-300">Direct Mobile (Call Us)</h5>
                      <a
                        href="tel:08960418286"
                        className="font-sans text-sm text-brand-pink hover:text-brand-coral font-bold mt-0.5 transition-colors block"
                        title="Click to call Everfit"
                      >
                        089604 18286
                      </a>
                    </div>
                  </div>

                  {/* Hours */}
                  <div className="flex items-start space-x-3.5">
                    <div className="p-2.5 rounded-xl bg-brand-coral/10 text-brand-coral shrink-0">
                      <Clock className="w-5 h-5" />
                    </div>
                    <div>
                      <h5 className="text-xs font-bold uppercase tracking-wider text-gray-300">Timing Coordinates</h5>
                      <p className="font-sans text-sm text-white font-light mt-0.5">
                        Monday – Saturday: 6:00 AM – 12:00 PM | 4:00 PM – 7:30 PM
                      </p>
                      <span className="inline-flex items-center text-xs text-emerald-450 font-bold mt-1">
                        <span className="w-2 h-2 bg-emerald-500 rounded-full inline-block mr-1.5 animate-pulse" />
                        Open · Closes 7:30 PM
                      </span>
                    </div>
                  </div>

                </div>
              </div>

              {/* Instant Messenger CTA triggers */}
              <div className="flex flex-col sm:flex-row gap-4 pt-4 border-t border-white/5 justify-start">
                <a
                  href="tel:08960418286"
                  className="inline-flex items-center justify-center space-x-2 px-6 py-3 bg-brand-pink hover:bg-brand-pink/90 text-white font-display font-semibold text-xs uppercase tracking-wider rounded-xl transition-all"
                >
                  <Phone className="w-4 h-4" />
                  <span>Call 089604 18286</span>
                </a>
                <a
                  href="https://wa.me/918960418286"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center justify-center space-x-2 px-6 py-3 bg-[#25D366] hover:bg-[#20ba54] text-white font-display font-semibold text-xs uppercase tracking-wider rounded-xl transition-all"
                >
                  <MessageCircle className="w-4 h-4 fill-current" />
                  <span>Chat on WhatsApp</span>
                </a>
              </div>

            </div>

            {/* Google iframe Map container */}
            <div className="h-56 sm:h-64 rounded-3xl overflow-hidden border border-white/10 shadow-lg relative bg-white/5" id="google-maps-embed-container">
              <iframe
                title="Everfit Ladies Gym Prabhu Ashram Lucknow Location Map"
                src="https://maps.google.com/maps?q=Everfit%20Ladies%20Gym%20Prabhu%20Ashram%20Raja%20Bazar%20Yahiyaganj%20Lucknow&t=&z=16&ie=UTF8&iwloc=&output=embed"
                className="w-full h-full border-0 grayscale opacity-90 hover:grayscale-0 transition-all duration-300"
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer"
              />
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
