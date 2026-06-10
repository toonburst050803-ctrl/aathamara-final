import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, MessageCircle, Target, Presentation } from 'lucide-react';
import { useState } from 'react';
import SalesPresentation from './SalesPresentation';

export default function Hero() {
  const [showPitchDeck, setShowPitchDeck] = useState(false);

  return (
    <>
      <section id="home" className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
        {/* Background with overlay */}
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-black/70 z-10"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent z-10"></div>
          <img
            src="https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&q=80&w=2500"
            alt="Luxury Real Estate"
            className="w-full h-full object-cover opacity-60"
          />
        </div>

        <div className="absolute top-6 left-6 md:top-10 md:left-10 z-[100] flex items-center pointer-events-none drop-shadow-2xl">
           <img src="https://www.image2url.com/r2/default/images/1779976435701-fe0c1dfb-80dd-42c5-adf7-7a2b48bd12f0.png" alt="Aathmara Logo" className="h-28 md:h-36 object-contain" />
        </div>

        <div className="container mx-auto px-4 md:px-6 relative z-20">
          <div className="max-w-4xl mx-auto text-center mt-32 md:mt-40">
            
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-primary-500/30 bg-primary-500/10 text-primary-400 mb-8 max-w-full overflow-hidden"
            >
               <span className="w-2 h-2 rounded-full bg-primary-500 animate-pulse shrink-0"></span>
               <span className="text-xs md:text-sm font-medium tracking-wider uppercase truncate">Premium Real Estate Marketing</span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-5xl md:text-7xl font-heading font-bold leading-tight mb-6"
            >
              Scale Your Real Estate Projects with <span className="text-gradient-primary">Performance Marketing</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-lg md:text-xl text-gray-300 font-light mb-10 max-w-2xl mx-auto leading-relaxed"
            >
              We help builders generate high-quality leads, site visits, and bookings using Meta Ads & Creative Branding.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="flex flex-col sm:flex-row items-center justify-center gap-4 md:gap-6"
            >
              <a
                href="#contact"
                className="w-full sm:w-auto px-8 py-4 rounded bg-gradient-primary text-black font-bold uppercase tracking-wider hover:scale-105 transition-transform flex items-center justify-center gap-2 shadow-[0_0_20px_rgba(0,102,255,0.4)]"
              >
                Book Free Consultation
                <ArrowRight size={20} />
              </a>
              <button
                onClick={() => setShowPitchDeck(true)}
                className="w-full sm:w-auto px-8 py-4 rounded bg-amber-500 text-black font-bold uppercase tracking-wider hover:scale-105 transition-transform flex items-center justify-center gap-2 shadow-[0_0_20px_rgba(245,158,11,0.4)]"
              >
                AGAM PROJECT GROWTH SYSTEM
                <Presentation size={20} />
              </button>
              <a
                href="#packages"
                className="w-full sm:w-auto px-8 py-4 rounded border border-white/20 bg-white/5 hover:bg-white/10 text-white font-bold uppercase tracking-wider backdrop-blur-sm transition-colors flex items-center justify-center gap-2"
              >
                Start Campaign
                <Target size={20} />
              </a>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.7 }}
              className="mt-6 flex justify-center"
             >
               <a href="https://api.whatsapp.com/send?phone=917010513276" target="_blank" rel="noopener noreferrer" className="w-full sm:w-auto px-6 py-3 rounded-full bg-[#25D366]/20 border border-[#25D366]/40 text-[#25D366] hover:bg-[#25D366]/30 transition-colors flex items-center justify-center gap-2 text-sm font-medium">
                 <MessageCircle size={18} />
                 WhatsApp Us
               </a>
            </motion.div>
          </div>

          {/* Floating Stats */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1 }}
            className="mt-20 md:mt-32 grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto"
          >
            {[
              { value: '2000+', label: 'Leads Generated', accent: 'border-b-primary-500' },
              { value: '800+', label: 'Site Visits Arranged', accent: 'border-b-primary-400' },
              { value: '300+', label: 'Booking Conversions', accent: 'border-b-primary-300' }
            ].map((stat, i) => (
              <div key={i} className={`glass-card p-6 rounded-xl border-b-4 ${stat.accent} text-center group hover:-translate-y-2 transition-transform duration-300`}>
                <h3 className="text-4xl font-heading font-bold text-white mb-2 group-hover:text-primary-400 transition-colors">{stat.value}</h3>
                <p className="text-sm text-gray-400 uppercase tracking-widest">{stat.label}</p>
              </div>
            ))}
          </motion.div>
          
          {/* Core tags below stats */}
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1.2 }}
             className="mt-12 flex flex-wrap justify-center gap-3 opacity-60 text-xs md:text-sm"
          >
              {['Meta Ads', 'Lead Generation', 'Site Visit Campaigns', 'Branding', 'Instagram Growth'].map((tag) => (
                <span key={tag} className="px-3 py-1 rounded-full border border-white/20 bg-white/5 uppercase tracking-wide">
                  {tag}
                </span>
              ))}
          </motion.div>

        </div>
      </section>

      {/* Conditionally render pitch deck modal */}
      <AnimatePresence>
        {showPitchDeck && <SalesPresentation onClose={() => setShowPitchDeck(false)} />}
      </AnimatePresence>
    </>
  );
}
