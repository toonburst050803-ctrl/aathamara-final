import { motion } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { useState, useEffect } from 'react';
import { navItems } from '../types';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled ? 'bg-black/80 backdrop-blur-md border-b border-white/10 py-4' : 'bg-transparent py-6'
      }`}
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex items-center justify-between">
          <a href="#" className="flex flex-col items-center justify-center group gap-1">
            <img src="https://www.image2url.com/r2/default/images/1779976435701-fe0c1dfb-80dd-42c5-adf7-7a2b48bd12f0.png" alt="Aathmara Logo" className="w-20 group-hover:scale-105 transition-transform duration-500 drop-shadow-xl object-contain" />
          </a>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="text-sm font-medium text-gray-300 hover:text-primary-400 transition-colors uppercase tracking-wider relative group"
              >
                {item.label}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary-500 transition-all group-hover:w-full"></span>
              </a>
            ))}
            <a
              href="#contact"
              className="ml-4 px-6 py-2.5 rounded-full bg-gradient-primary text-black font-semibold uppercase tracking-wider text-sm hover:scale-105 transition-transform shadow-[0_0_15px_rgba(0,102,255,0.4)] hover:shadow-[0_0_25px_rgba(0,102,255,0.6)]"
            >
              Get Started
            </a>
          </div>

          {/* Mobile Toggle */}
          <button
            className="md:hidden text-white hover:text-primary-400"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Nav Menu */}
      <motion.div
        initial={false}
        animate={{ height: isOpen ? 'auto' : 0, opacity: isOpen ? 1 : 0 }}
        className="md:hidden overflow-hidden bg-black/95 backdrop-blur-xl border-b border-white/10"
      >
        <div className="px-4 py-6 flex flex-col gap-4">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              onClick={() => setIsOpen(false)}
              className="text-lg font-medium text-gray-300 hover:text-primary-400 uppercase tracking-wide border-b border-white/5 pb-2"
            >
              {item.label}
            </a>
          ))}
          <a
            href="#contact"
            onClick={() => setIsOpen(false)}
            className="mt-4 px-6 py-3 rounded text-center bg-gradient-primary text-black font-semibold uppercase tracking-wider text-sm"
          >
            Get Started
          </a>
        </div>
      </motion.div>
    </nav>
  );
}
