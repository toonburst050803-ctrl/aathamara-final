import { motion } from 'framer-motion';
import { Target, Users, MapPin, Search, ArrowDown } from 'lucide-react';

export default function Targeting() {
  const funnelSteps = [
    { label: 'Targeted Ad', color: 'from-primary-600 to-primary-500', width: 'w-full max-w-md', desc: 'Precision Meta & Google campaigns focusing entirely on high-intent real estate buyers.' },
    { label: 'Quality Lead Capture', color: 'from-primary-500 to-primary-400', width: 'w-[90%] max-w-sm', desc: 'Frictionless forms capturing verified phone numbers and buyer intent.' },
    { label: 'Sales Call / Presales', color: 'from-primary-400 to-primary-300', width: 'w-[75%] max-w-xs', desc: 'Rapid follow-up within 5 minutes to qualify leads and build initial rapport.' },
    { label: 'Physical Site Visit', color: 'from-cyan-300 to-cyan-500', width: 'w-[60%] max-w-[16rem]', desc: 'Confirmed appointments and walk-ins to experience the project firsthand.' },
    { label: 'Final Booking', color: 'from-green-500 to-emerald-600', width: 'w-[45%] max-w-[12rem]', desc: 'Seamless transaction processing, closing the sale efficiently with token advance.' },
  ];

  return (
    <section className="pt-40 md:pt-48 pb-24 bg-black border-y border-white/5">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          <div className="order-2 lg:order-1">
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="text-left"
            >
              <h2 className="text-3xl md:text-4xl font-heading font-bold mb-6">
                Precision <span className="text-gradient-primary">Targeting Strategy</span>
              </h2>
              <p className="text-gray-400 text-lg mb-10 leading-relaxed">
                We don't just generate leads; we engineer a customized journey that filters out window-shoppers and focuses entirely on high-intent property buyers.
              </p>

              <div className="space-y-6">
                {[
                  { icon: MapPin, title: 'Hyper-Local Targeting', desc: 'Geofencing radius targeting around your project to capture local upgrades.' },
                  { icon: Target, title: 'High Intent Audiences', desc: 'Behavioral targeting focusing on users actively searching for real estate investments.' },
                  { icon: Users, title: 'Behavioral Retargeting', desc: 'Automated ads pursuing users who visited your landing page but didn\'t register.' },
                  { icon: Search, title: 'Site Visit Optimization', desc: 'Campaign objective shifted from purely CPL (Cost Per Lead) to CPV (Cost Per Visit).' }
                ].map((feature, idx) => (
                  <motion.div 
                    key={idx}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: idx * 0.1 }}
                    className="flex gap-4"
                  >
                    <div className="shrink-0 w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-primary-400">
                      <feature.icon size={20} />
                    </div>
                    <div>
                      <h4 className="text-white font-semibold text-lg">{feature.title}</h4>
                      <p className="text-gray-400 text-sm">{feature.desc}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>

          <div className="order-1 lg:order-2 flex flex-col items-center justify-center bg-zinc-950 p-8 md:p-12 rounded-3xl border border-white/10 relative">
             <div className="absolute top-0 right-0 p-6 opacity-30 text-primary-500">
               <Target size={120} strokeWidth={1} />
             </div>
             
             <h3 className="text-xl font-heading font-bold text-white mb-8 text-center uppercase tracking-widest relative z-10 text-primary-400">
               The Conversion Funnel
             </h3>
             
             <div className="w-full flex flex-col items-center gap-1 relative z-10">
               {funnelSteps.map((step, idx) => (
                 <div key={idx} className="w-full flex flex-col items-center cursor-default">
                    <motion.div 
                      initial={{ opacity: 0, scaleX: 0 }}
                      whileInView={{ opacity: 1, scaleX: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.6, delay: idx * 0.2 }}
                      className={`${step.width} h-14 bg-gradient-to-r ${step.color} rounded flex items-center justify-center shadow-lg transform hover:scale-105 transition-transform duration-300 relative group`}
                    >
                      <span className="text-black font-bold uppercase tracking-wider text-xs md:text-sm px-4 text-center relative z-10 w-full truncate">
                        {step.label}
                      </span>
                      
                      {/* Tooltip */}
                      <div className="absolute opacity-0 group-hover:opacity-100 transition-opacity duration-300 bottom-full mb-3 left-1/2 -translate-x-1/2 w-64 bg-zinc-900 border border-white/10 p-3 rounded-lg shadow-2xl text-center z-50 pointer-events-none">
                        <p className="text-gray-300 text-xs font-normal normal-case tracking-normal whitespace-normal w-full overflow-hidden leading-relaxed">{step.desc}</p>
                        {/* Triangle pointer */}
                        <div className="absolute top-full left-1/2 -translate-x-1/2 w-0 h-0 border-l-[6px] border-l-transparent border-r-[6px] border-r-transparent border-t-[6px] border-t-white/10"></div>
                        <div className="absolute top-full left-1/2 -translate-x-1/2 w-0 h-0 border-l-[5px] border-l-transparent border-r-[5px] border-r-transparent border-t-[5px] border-t-zinc-900 -mt-[1px]"></div>
                      </div>
                    </motion.div>
                    {idx < funnelSteps.length - 1 && (
                      <motion.div 
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                         viewport={{ once: true }}
                        transition={{ delay: (idx * 0.2) + 0.3 }}
                        className="my-2 text-white/30"
                      >
                        <ArrowDown size={16} />
                      </motion.div>
                    )}
                 </div>
               ))}
             </div>
          </div>

        </div>
      </div>
    </section>
  );
}
