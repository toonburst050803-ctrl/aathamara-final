import { motion, useInView } from 'framer-motion';
import { useEffect, useState, useRef } from 'react';

function AnimatedCounter({ end, duration = 2, suffix = '' }: { end: number, duration?: number, suffix?: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  useEffect(() => {
    if (isInView) {
      let start = 0;
      const increment = end / (duration * 60);
      const timer = setInterval(() => {
        start += increment;
        if (start >= end) {
          clearInterval(timer);
          setCount(end);
        } else {
          setCount(Math.floor(start));
        }
      }, 1000 / 60);
      return () => clearInterval(timer);
    }
  }, [end, duration, isInView]);

  return <span ref={ref}>{count}{suffix}</span>;
}

export default function Results() {
  const stats = [
    { value: 2000, suffix: '+', label: 'Leads Generated' },
    { value: 800, suffix: '+', label: 'Site Visits Arranged' },
    { value: 300, suffix: '+', label: 'Booking Conversions' },
  ];

  return (
    <section id="results" className="pt-40 md:pt-48 pb-24 bg-zinc-950 relative overflow-hidden">
      <div className="absolute inset-0 bg-primary-900/5 mix-blend-overlay"></div>
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
         <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-5xl font-heading font-bold mb-6">
            Proven <span className="text-gradient-primary">Results</span>
          </h2>
          <p className="text-gray-400 text-lg">
            Numbers that matter. We measure our success entirely by the growth and conversions we deliver to our builder partners.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 md:gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="glass-card p-6 md:p-8 rounded-2xl text-center flex flex-col items-center justify-center relative overflow-hidden group"
            >
              <div className="absolute inset-0 bg-gradient-to-t from-primary-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              
              <h3 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-white mb-2 relative z-10 group-hover:scale-105 transition-transform">
                <AnimatedCounter end={stat.value} suffix={stat.suffix} />
              </h3>
              <p className="text-xs md:text-sm text-primary-400 uppercase tracking-widest font-medium relative z-10">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
