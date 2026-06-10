import React, { useState } from 'react';
import { Instagram, Mail, Phone, MapPin, Send, CheckCircle2, Youtube } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export default function ContactFooter() {
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
    setTimeout(() => {
      setIsSubmitted(false);
    }, 4000);
  };

  return (
    <footer id="contact" className="bg-zinc-950 pt-40 md:pt-48 pb-8 border-t border-white/10 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary-900/10 rounded-full blur-[120px] pointer-events-none translate-x-1/2 -translate-y-1/2"></div>
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-20">
          
          <div>
            <h2 className="text-3xl md:text-5xl font-heading font-bold mb-6">
              Ready to <span className="text-gradient-primary">Scale?</span>
            </h2>
            <p className="text-gray-400 text-lg mb-8 max-w-md">
              Book a free strategy session with our real estate marketing experts. We'll audit your current process and build a custom acquisition roadmap.
            </p>

            <div className="space-y-6 mb-10">
              <a href="https://api.whatsapp.com/send?phone=917010513276" target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 text-gray-300 hover:text-primary-400 transition-colors group">
                <div className="w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center group-hover:border-primary-500/50">
                  <Phone size={20} className="text-primary-500" />
                </div>
                <div>
                  <p className="text-sm text-gray-500">Call or WhatsApp</p>
                  <p className="text-lg font-medium">+91 70105 13276</p>
                </div>
              </a>
              
              <a href="mailto:agampropertiesandconstruction@gmail.com" className="flex items-center gap-4 text-gray-300 hover:text-primary-400 transition-colors group">
                <div className="w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center group-hover:border-primary-500/50">
                  <Mail size={20} className="text-primary-500" />
                </div>
                <div>
                  <p className="text-sm text-gray-500">Email Us</p>
                  <p className="text-lg font-medium max-w-[200px] sm:max-w-none break-all">agampropertiesandconstruction@gmail.com</p>
                </div>
              </a>
              
              <div className="flex items-center gap-4 text-gray-300 group">
                <div className="w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center shrink-0">
                  <MapPin size={20} className="text-primary-500" />
                </div>
                <div>
                  <p className="text-sm text-gray-500">Headquarters</p>
                  <p className="text-lg font-medium">5/58, pillayar Kovil street, medavakkam CHENNAI 600100</p>
                </div>
              </div>
            </div>

            <div className="flex gap-4">
              <a href="https://www.instagram.com/agamproperty/" target="_blank" rel="noopener noreferrer" className="w-12 h-12 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-gray-400 hover:text-primary-400 hover:border-primary-500/50 transition-all">
                <Instagram size={20} />
              </a>
               <a href="https://www.youtube.com/@agamproperties0620" target="_blank" rel="noopener noreferrer" className="w-12 h-12 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-gray-400 hover:text-primary-400 hover:border-primary-500/50 transition-all">
                <Youtube size={20} />
              </a>
            </div>
          </div>

          <div className="glass-card p-8 rounded-3xl relative overflow-hidden">
            <h3 className="text-2xl font-heading font-semibold text-white mb-6">Request Callback</h3>
            <form className="space-y-4" onSubmit={handleSubmit}>
              <div>
                <label className="block text-sm text-gray-400 mb-2">Full Name</label>
                <input required type="text" className="w-full bg-black/50 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-primary-500 transition-colors" placeholder="John Doe" />
              </div>
              <div>
                <label className="block text-sm text-gray-400 mb-2">Phone / WhatsApp Number</label>
                <input required type="tel" className="w-full bg-black/50 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-primary-500 transition-colors" placeholder="+91 98765 43210" />
              </div>
              <div>
                <label className="block text-sm text-gray-400 mb-2">Project Details</label>
                <textarea rows={4} className="w-full bg-black/50 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-primary-500 transition-colors resize-none" placeholder="Tell us about your upcoming project..."></textarea>
              </div>
              <button type="submit" className="w-full py-4 rounded-xl bg-gradient-primary text-black font-bold uppercase tracking-wider hover:scale-[1.02] transition-transform flex items-center justify-center gap-2 mt-4 shadow-[0_0_15px_rgba(0,102,255,0.3)]">
                Submit Request
                <Send size={18} />
              </button>
            </form>

            <AnimatePresence>
              {isSubmitted && (
                <motion.div 
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="absolute inset-0 z-20 flex flex-col items-center justify-center bg-black/80 backdrop-blur-sm rounded-3xl"
                >
                  <motion.div
                    initial={{ scale: 0, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ type: "spring", stiffness: 300, damping: 20, delay: 0.1 }}
                  >
                    <CheckCircle2 size={80} className="text-primary-500 mb-4" />
                  </motion.div>
                  <motion.h4 
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.3 }}
                    className="text-2xl font-heading font-bold text-white mb-2"
                  >
                    Message Received!
                  </motion.h4>
                  <motion.p 
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.4 }}
                    className="text-gray-400 text-center max-w-[80%]"
                  >
                    Thank you for reaching out. Our team will get back to you shortly.
                  </motion.p>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

        </div>

        <div className="pt-8 border-t border-white/10 text-center flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-500">
          <p>© 2026 AGAM AATHMARA. All rights reserved.</p>
          <div className="flex items-center gap-2">
             <span className="font-heading font-bold text-gray-300">AATHMARA</span>
             <span>– Digital Marketing</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
