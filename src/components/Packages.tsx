import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Check, Star, X, TrendingUp, Users, Target, Activity, Zap, BarChart3, Filter, ArrowRight } from 'lucide-react';

const packages = [
  {
    title: 'STARTER LEAD GENERATION',
    price: '₹49,999',
    period: '/month',
    budgetRecommendation: '₹1,000/day (Approx ₹30,000/month)',
    budgetRaw: '₹1,000/day',
    leads: '120–300+',
    description: 'Perfect for single project marketing focusing purely on fresh lead generation.',
    highlight: false,
    expectedResults: [
      { label: 'Leads', value: '120–300+', icon: Users, percentage: 100 },
      { label: 'Qualified', value: '20–60', icon: Filter, percentage: 25 },
      { label: 'Site Visits', value: '5–20', icon: Zap, percentage: 8 },
      { label: 'Bookings', value: '1–5', icon: Target, percentage: 2 },
    ],
    bestFor: ['DTCP Plots', 'Villas', 'Small Apartment Projects', 'Local Builders'],
    includedServices: ['Meta Ads Setup', 'Facebook & Instagram Campaigns', 'Lead Generation', 'WhatsApp Lead Integration', 'Audience Targeting', 'Monthly Optimization', 'Creative Ad Design'],
    targetAudience: ['Age: 28–50', 'Nearby Location Radius Targeting', 'Real Estate Interested Audience', 'Home Loan Interested Users', 'High Intent Buyers'],
    campaignFunnel: ['Ad', 'Lead', 'WhatsApp', 'Call', 'Site Visit', 'Booking'],
    buttons: ['Start Campaign', 'WhatsApp Now'],
    badge: '',
    videoUrl: 'https://www.youtube.com/embed/cqea9Hi-7mU?controls=1&rel=0&modestbranding=1'
  },
  {
    title: 'GROWTH & RETARGETING',
    price: '₹79,999',
    period: '/month',
    budgetRecommendation: '₹1,000/day (2 months) (Approx ₹60,000 total)',
    budgetRaw: '₹1,000/day (2mo)',
    leads: '300–700+',
    description: 'Accelerate conversions with retargeting and creative performance strategies.',
    highlight: true,
    expectedResults: [
      { label: 'Leads', value: '300–700+', icon: Users, percentage: 100 },
      { label: 'Qualified', value: '60–150', icon: Filter, percentage: 30 },
      { label: 'Site Visits', value: '15–40', icon: Zap, percentage: 10 },
      { label: 'Bookings', value: '3–10', icon: Target, percentage: 3 },
    ],
    bestFor: ['Apartments', 'Gated Communities', 'Mid-Level Builders', 'Multi-Project Marketing'],
    includedServices: ['Advanced Meta Ads', 'Retargeting Campaigns', 'Instagram Growth', 'Creative Strategy', 'Conversion Optimization', 'Multiple Ad Testing', 'Audience Scaling', 'Professional Reels Support', 'CRM Integration'],
    targetAudience: ['High Intent Property Buyers', 'Retargeting Video Viewers', 'Website Visitors', 'Engaged Instagram Audience', 'Business Owners & Investors'],
    campaignFunnel: ['Video Ad', 'Lead Form', 'Retargeting', 'Call', 'Site Visit', 'Booking'],
    buttons: ['Scale My Project', 'Book Consultation'],
    badge: 'Most Popular',
    videoUrl: 'https://www.youtube.com/embed/cqea9Hi-7mU?controls=1&rel=0&modestbranding=1'
  },
  {
    title: 'PREMIUM SCALING',
    price: '₹99,999',
    period: '/month',
    budgetRecommendation: '₹1,000/day (80 days) (Approx ₹80,000 total)',
    budgetRaw: '₹1,000/day (80d)',
    leads: '700–1500+',
    description: 'The ultimate luxury branding and full funnel system for major builders.',
    highlight: false,
    expectedResults: [
      { label: 'Leads', value: '700–1500+', icon: Users, percentage: 100 },
      { label: 'Qualified', value: '150–400', icon: Filter, percentage: 35 },
      { label: 'Site Visits', value: '40–100', icon: Zap, percentage: 12 },
      { label: 'Bookings', value: '8–25', icon: Target, percentage: 4 },
    ],
    bestFor: ['Luxury Villas', 'Township Projects', 'Premium Apartments', 'Large Builders'],
    includedServices: ['Full Funnel Meta Strategy', 'Premium Branding', 'Viral Reel Marketing', 'Luxury Video Production', 'Dedicated Campaign Management', 'Audience Scaling', 'Multi Audience Testing', 'Conversion Retargeting', 'Booking Optimization', 'CRM Integration'],
    targetAudience: ['Premium Buyers', 'High Income Audience', 'Investors', 'Luxury Lifestyle Audience', 'Frequent Travelers', 'Property Investors'],
    campaignFunnel: ['Luxury Ad', 'Premium Funnel', 'Follow-up', 'Site Visit', 'Booking'],
    buttons: ['Launch Premium Campaign', 'Talk to Expert'],
    badge: 'Enterprise Level Growth',
    videoUrl: 'https://www.youtube.com/embed/cqea9Hi-7mU?controls=1&rel=0&modestbranding=1'
  }
];

const CircularProgress = ({ percentage, colorClass }: { percentage: number, colorClass: string }) => (
  <div className="relative w-12 h-12 flex items-center justify-center shrink-0">
    <svg viewBox="0 0 100 100" className="w-full h-full transform -rotate-90">
      <circle cx="50" cy="50" r="40" stroke="currentColor" strokeWidth="8" fill="transparent" className="text-white/10" />
      <motion.circle 
        cx="50" cy="50" r="40" stroke="currentColor" strokeWidth="8" fill="transparent"
        strokeDasharray="251.2"
        strokeLinecap="round"
        initial={{ strokeDashoffset: 251.2 }}
        animate={{ strokeDashoffset: 251.2 - (251.2 * percentage) / 100 }}
        transition={{ duration: 1.5, ease: "easeOut", delay: 0.2 }}
        className={colorClass}
      />
    </svg>
    <div className="absolute inset-0 flex items-center justify-center text-[10px] font-bold text-white">
      {percentage}%
    </div>
  </div>
);

type PackageType = typeof packages[0];

export default function Packages() {
  const [selectedPkg, setSelectedPkg] = useState<PackageType | null>(null);

  // Prevent background scrolling when modal is open
  useEffect(() => {
    if (selectedPkg) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
    return () => { document.body.style.overflow = 'auto'; };
  }, [selectedPkg]);

  return (
    <section id="packages" className="pt-40 md:pt-48 pb-24 bg-black relative">
      <div className="container mx-auto px-4 md:px-6 z-10 relative">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-5xl font-heading font-bold mb-6">
            Investment <span className="text-gradient-primary">Packages</span>
          </h2>
          <p className="text-gray-400 text-lg">
            Transparent pricing designed for predictable growth. Select the tier that matches your project scale.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
          {packages.map((pkg, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              onClick={() => setSelectedPkg(pkg)}
              className={`relative rounded-3xl p-8 flex flex-col h-full bg-[#0a0a0a] cursor-pointer transition-all duration-300 hover:-translate-y-3 group ${
                pkg.highlight 
                  ? 'border border-primary-500 shadow-[0_0_30px_rgba(0,102,255,0.15)] ring-1 ring-primary-500/50' 
                  : 'border border-white/10 hover:border-primary-500/50'
              }`}
            >
              {pkg.badge && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-gradient-primary text-black px-4 py-1 rounded-full text-xs font-bold uppercase tracking-wider flex items-center gap-1 shadow-lg z-10">
                  <Star size={14} className="fill-black" /> {pkg.badge}
                </div>
              )}
              
              <div className="mb-8 relative z-10">
                <h3 className="text-xl font-heading font-semibold text-white mb-2">{pkg.title}</h3>
                <p className="text-sm text-gray-400 mb-6 min-h-[40px]">{pkg.description}</p>
                <div className="flex items-baseline gap-1">
                  <span className="text-4xl font-heading font-bold text-white">{pkg.price}</span>
                  <span className="text-sm text-gray-400">{pkg.period}</span>
                </div>
              </div>

              <div className="bg-black/50 rounded-xl p-4 mb-8 border border-white/5 space-y-3 relative z-10">
                <div className="flex justify-between items-center text-sm">
                  <span className="text-gray-400">Ad Budget Rec.</span>
                  <span className="font-semibold text-primary-400">{pkg.budgetRaw}</span>
                </div>
                <div className="flex justify-between items-center text-sm border-t border-white/5 pt-3">
                  <span className="text-gray-400">Expected Leads</span>
                  <span className="font-semibold text-primary-400">{pkg.leads}</span>
                </div>
              </div>

              <div className="flex-grow space-y-4 mb-10 relative z-10">
                {pkg.includedServices.slice(0, 5).map((feature, i) => (
                  <div key={i} className="flex items-start gap-3 text-sm">
                    <div className="shrink-0 w-5 h-5 rounded-full bg-primary-500/20 flex items-center justify-center mt-0.5">
                      <Check size={12} className="text-primary-400" />
                    </div>
                    <span className="text-gray-300">{feature}</span>
                  </div>
                ))}
                {pkg.includedServices.length > 5 && (
                  <div className="text-xs text-primary-500 mt-2 italic flex items-center gap-1">
                    + {pkg.includedServices.length - 5} more features
                  </div>
                )}
              </div>

              <div
                className={`w-full py-4 rounded-xl font-semibold uppercase tracking-wider text-sm transition-all duration-300 text-center relative z-10 ${
                  pkg.highlight
                    ? 'bg-gradient-primary text-black group-hover:shadow-[0_0_20px_rgba(0,102,255,0.4)] md:group-hover:scale-105'
                    : 'bg-white/5 text-white group-hover:bg-primary-500 group-hover:text-black border border-white/10 group-hover:border-primary-500'
                }`}
              >
                View Details
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Premium Full-Screen Presentation Proposal */}
      <AnimatePresence>
        {selectedPkg && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-black/95 backdrop-blur-2xl"
          >
            <motion.div 
              initial={{ y: "100%", opacity: 0, scale: 0.95 }}
              animate={{ y: 0, opacity: 1, scale: 1 }}
              exit={{ y: "100%", opacity: 0, scale: 0.95 }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="absolute inset-0 w-full h-full bg-[#030303] overflow-y-auto overflow-x-hidden font-sans"
            >
              {/* Luxury Background Effects */}
              <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-[radial-gradient(circle_at_center,rgba(212,175,55,0.08),transparent_60%)] pointer-events-none"></div>
              <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-[radial-gradient(circle_at_center,rgba(212,175,55,0.05),transparent_60%)] pointer-events-none"></div>

              {/* Top Navigation Bar */}
              <div className="sticky top-0 z-50 flex items-center justify-between px-6 py-4 md:px-12 md:py-6 bg-[#030303]/80 backdrop-blur-xl border-b border-white/5">
                <div className="flex items-center gap-3">
                  <span className="text-gray-500 font-medium tracking-widest uppercase text-[10px] md:text-xs">Business Proposal</span>
                  <span className="text-gray-700">/</span>
                  <span className="text-amber-500 font-bold tracking-widest uppercase text-[10px] md:text-xs drop-shadow-[0_0_8px_rgba(251,191,36,0.5)]">{selectedPkg.title}</span>
                </div>
                <button 
                  onClick={() => setSelectedPkg(null)}
                  className="flex items-center gap-3 group text-gray-500 hover:text-white transition-colors"
                >
                  <span className="text-xs font-semibold uppercase tracking-widest hidden sm:block group-hover:text-amber-500 transition-colors">Dismiss</span>
                  <div className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center group-hover:border-amber-500/50 group-hover:bg-amber-500/10 transition-all bg-black">
                    <X size={16} />
                  </div>
                </button>
              </div>

              <div className="max-w-7xl mx-auto px-6 py-12 md:px-12 md:py-24 relative z-10">
                {/* Header Section */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 mb-24 items-end">
                  <div>
                    <motion.div 
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.1 }}
                    >
                      {selectedPkg.badge && (
                        <div className="inline-flex items-center gap-2 px-4 py-1.5 border border-amber-500/30 bg-amber-500/10 text-amber-500 text-[10px] font-bold uppercase tracking-widest rounded-full mb-8 shadow-[0_0_15px_rgba(245,158,11,0.2)]">
                          <Star size={12} className="fill-amber-500" /> {selectedPkg.badge}
                        </div>
                      )}
                    </motion.div>
                    <motion.h1 
                      initial={{ opacity: 0, y: 30 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.2 }}
                      className="text-4xl md:text-6xl lg:text-7xl font-heading font-bold text-white mb-6 leading-[1.1] tracking-tight"
                    >
                      {selectedPkg.title.split(' ').map((word, i) => (
                        <span key={i} className={i === selectedPkg.title.split(' ').length - 1 ? 'text-transparent bg-clip-text bg-gradient-to-r from-amber-200 via-amber-400 to-amber-600 drop-shadow-[0_0_30px_rgba(251,191,36,0.2)]' : ''}>
                          {word}{' '}
                        </span>
                      ))}
                    </motion.h1>
                    <motion.p 
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.3 }}
                      className="text-lg md:text-xl text-gray-400 leading-relaxed font-light border-l-2 border-amber-500/30 pl-6"
                    >
                      <span className="block text-amber-500/80 text-xs font-bold uppercase tracking-widest mb-2">Growth Objective</span>
                      {selectedPkg.description}
                    </motion.p>
                  </div>

                  <motion.div 
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.4 }}
                    className="flex flex-col lg:items-end justify-end"
                  >
                    <div className="text-[10px] font-bold tracking-widest uppercase text-gray-500 mb-3">Total Investment Retainer</div>
                    <div className="flex items-baseline gap-2 mb-6">
                      <span className="text-5xl md:text-7xl font-heading font-bold text-white drop-shadow-[0_2px_20px_rgba(255,255,255,0.1)]">{selectedPkg.price}</span>
                      <span className="text-xl text-amber-500/70">{selectedPkg.period}</span>
                    </div>
                    <div className="p-5 rounded-2xl bg-white/[0.02] border border-white/5 backdrop-blur-sm flex items-center gap-4 w-full lg:w-auto shadow-2xl">
                      <div className="w-12 h-12 rounded-full bg-amber-500/10 border border-amber-500/20 flex items-center justify-center">
                        <TrendingUp size={20} className="text-amber-500" />
                      </div>
                      <div>
                        <div className="text-[10px] text-gray-400 uppercase tracking-widest mb-1">Recommended Ad Budget</div>
                        <div className="text-base font-bold text-white">{selectedPkg.budgetRecommendation}</div>
                      </div>
                    </div>
                  </motion.div>
                </div>

                {/* Dashboard Grid */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 mb-24">
                  {/* Left Column - Stats & Funnel */}
                  <div className="lg:col-span-7 space-y-12">
                    {/* Performance Metrics */}
                    <motion.div 
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.5 }}
                    >
                      <h3 className="text-[10px] font-bold text-gray-500 uppercase tracking-widest mb-6 flex items-center gap-3">
                        <BarChart3 size={14} className="text-amber-500" /> Projected KPI Performance
                        <div className="h-px flex-1 bg-gradient-to-r from-white/10 to-transparent"></div>
                      </h3>
                      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                        {selectedPkg.expectedResults.map((result, i) => {
                          const Icon = result.icon;
                          const labels = ["Total Reach / Leads", "Qualified Prospects", "Site Visits", "Expected Closures"];
                          return (
                            <div key={i} className="bg-white/[0.02] border border-white/5 p-5 rounded-3xl relative overflow-hidden group hover:border-amber-500/30 hover:bg-white/[0.04] transition-all duration-300">
                              <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-100 group-hover:scale-125 group-hover:rotate-12 transition-all duration-700">
                                <Icon size={60} className="text-amber-500" />
                              </div>
                              <div className="relative z-10 flex flex-col h-full justify-between">
                                <h4 className="text-[10px] font-bold text-amber-500/80 uppercase tracking-widest mb-4 h-8">{labels[i] || result.label}</h4>
                                <div>
                                  <div className="text-2xl md:text-3xl font-bold text-white font-heading tracking-tight drop-shadow-md">{result.value}</div>
                                  {i > 0 && (
                                    <div className="mt-4 pt-4 border-t border-white/5 flex items-center justify-between">
                                      <span className="text-[10px] text-gray-500 uppercase tracking-wider">Conv. Rate</span>
                                      <span className="text-[10px] font-bold text-amber-400 bg-amber-500/10 px-2 py-1 rounded-md">{result.percentage}%</span>
                                    </div>
                                  )}
                                  {i === 0 && (
                                    <div className="mt-4 pt-4 border-t border-white/5 flex items-center justify-between">
                                      <span className="text-[10px] text-gray-500 uppercase tracking-wider">Volume</span>
                                      <span className="text-[10px] font-bold text-amber-400 bg-amber-500/10 px-2 py-1 rounded-md">Max</span>
                                    </div>
                                  )}
                                </div>
                              </div>
                            </div>
                          );
                        })}
                      </div>
                    </motion.div>

                    {/* Campaign Architecture (Funnel) */}
                    <motion.div 
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.6 }}
                    >
                      <h3 className="text-[10px] font-bold text-gray-500 uppercase tracking-widest mb-6 flex items-center gap-3">
                        <Activity size={14} className="text-amber-500" /> Campaign Flow Architecture
                        <div className="h-px flex-1 bg-gradient-to-r from-white/10 to-transparent"></div>
                      </h3>
                      <div className="bg-white/[0.02] border border-white/5 rounded-3xl p-8 relative overflow-hidden mb-6">
                        <div className="absolute inset-0 bg-gradient-to-br from-amber-500/5 to-transparent object-cover"></div>
                        <div className="flex flex-wrap md:flex-nowrap justify-between items-center gap-6 md:gap-2 relative z-10">
                          {selectedPkg.campaignFunnel.map((step, i) => (
                            <div key={i} className="flex flex-col items-center flex-1 relative min-w-[80px]">
                              <motion.div 
                                initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ delay: 0.7 + (i * 0.1), type: 'spring' }}
                                className="w-12 h-12 md:w-16 md:h-16 rounded-2xl bg-[#0a0a0a] border border-amber-500/20 flex items-center justify-center text-amber-500 mb-4 z-10 shadow-[0_0_20px_rgba(212,175,55,0.1)] relative group hover:border-amber-500 transition-colors"
                              >
                                <span className="text-lg md:text-xl font-heading font-bold group-hover:scale-110 transition-transform">{i + 1}</span>
                              </motion.div>
                              <span className="text-[10px] font-bold text-white uppercase tracking-widest text-center">{step}</span>
                              {i < selectedPkg.campaignFunnel.length - 1 && (
                                <div className="hidden md:block absolute top-[24px] md:top-[32px] left-[60%] w-[100%] h-px bg-gradient-to-r from-amber-500/50 to-transparent z-0"></div>
                              )}
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* Video Presentation Embed */}
                      <motion.div 
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.8 }}
                        className="rounded-3xl border border-white/10 bg-black overflow-hidden relative group shadow-[0_0_30px_rgba(0,0,0,0.5)] max-w-sm mx-auto"
                      >
                        <div className="aspect-[9/16] w-full relative">
                           {/* Video Overlay / Labels */}
                           <div className="absolute top-4 left-4 z-20 flex items-center gap-2 pointer-events-none">
                             <div className="w-2 h-2 rounded-full bg-amber-500 animate-pulse shadow-[0_0_10px_rgba(245,158,11,0.8)]"></div>
                             <span className="text-[10px] font-bold text-white uppercase tracking-widest bg-black/60 px-3 py-1.5 rounded-full backdrop-blur-md border border-white/10 shadow-lg">
                               Funnel Explanation
                             </span>
                           </div>
                           
                           {/* Video Presentation */}
                           <iframe 
                             className="w-full h-full relative z-10 transition-all duration-700 opacity-90 group-hover:opacity-100 border-0"
                             src={selectedPkg.videoUrl || "https://www.youtube.com/embed/cqea9Hi-7mU?controls=1&rel=0&modestbranding=1"} 
                             title="Campaign Strategy & Funnel Video"
                             allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                             allowFullScreen
                           ></iframe>
                        </div>
                      </motion.div>
                    </motion.div>
                  </div>

                  {/* Right Column - Lists */}
                  <div className="lg:col-span-5 space-y-8 lg:space-y-12">
                    <motion.div 
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.7 }}
                      className="bg-gradient-to-br from-amber-900/10 via-black to-[#050505] border border-amber-500/20 p-8 md:p-10 rounded-3xl relative overflow-hidden group"
                    >
                      <div className="absolute top-0 right-0 w-64 h-64 bg-amber-500/5 blur-3xl rounded-full group-hover:bg-amber-500/10 transition-colors duration-700"></div>
                      <h3 className="text-[10px] font-bold text-amber-500 uppercase tracking-widest mb-8 flex items-center gap-3 relative z-10">
                        <Zap size={14} /> Services Included
                      </h3>
                      <ul className="space-y-5 relative z-10">
                        {selectedPkg.includedServices.map((service, i) => (
                          <motion.li 
                            initial={{ opacity: 0, x: 10 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.8 + (i * 0.05) }}
                            key={i} className="flex items-start gap-4"
                          >
                            <div className="w-5 h-5 rounded-full bg-amber-500/10 border border-amber-500/30 flex items-center justify-center shrink-0 mt-0.5">
                              <Check size={10} className="text-amber-500" />
                            </div>
                            <span className="text-sm font-medium text-gray-300 leading-relaxed">{service}</span>
                          </motion.li>
                        ))}
                      </ul>
                    </motion.div>

                    <motion.div 
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.8 }}
                      className="bg-white/[0.02] border border-white/5 p-8 md:p-10 rounded-3xl"
                    >
                      <h3 className="text-[10px] font-bold text-gray-500 uppercase tracking-widest mb-6 flex items-center gap-3">
                        <Target size={14} className="text-amber-500" /> Ideal Client Profile
                      </h3>
                      <div className="flex flex-wrap gap-3">
                        {selectedPkg.bestFor.map((item, i) => (
                           <span key={i} className="bg-black border border-white/10 text-gray-400 px-5 py-3 rounded-xl text-[10px] font-bold uppercase tracking-widest hover:border-amber-500/30 hover:text-amber-500 transition-colors cursor-default">
                             {item}
                           </span>
                        ))}
                      </div>
                    </motion.div>
                  </div>
                </div>

                {/* Proposal Footer Action */}
                <motion.div 
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.9 }}
                  className="relative overflow-hidden flex flex-col md:flex-row items-center justify-between p-8 md:p-12 bg-gradient-to-r from-amber-600/10 via-amber-900/20 to-[#050505] border border-amber-500/30 rounded-3xl group"
                >
                  <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-[0.03] mix-blend-overlay"></div>
                  <div className="absolute right-0 top-0 w-1/2 h-full bg-gradient-to-l from-amber-500/10 to-transparent transform translate-x-full group-hover:translate-x-0 transition-transform duration-1000 ease-out"></div>
                  
                  <div className="mb-8 md:mb-0 text-center md:text-left relative z-10">
                    <h3 className="text-3xl font-heading font-bold text-white mb-2 tracking-tight">Ready to Authorize?</h3>
                    <p className="text-amber-500/80 text-sm font-medium">Secure your campaign setup slot for this month.</p>
                  </div>
                  <div className="flex flex-col sm:flex-row gap-4 w-full md:w-auto relative z-10">
                    <button onClick={() => setSelectedPkg(null)} className="px-8 py-4 bg-black/50 border border-white/10 hover:bg-white/10 hover:border-white/20 rounded-2xl text-white font-bold uppercase tracking-widest text-[10px] sm:text-xs flex items-center justify-center transition-all">
                      Review Later
                    </button>
                    <a href="#contact" onClick={() => setSelectedPkg(null)} className="px-8 py-4 bg-gradient-to-r from-amber-500 to-amber-300 hover:from-amber-400 hover:to-amber-200 text-black rounded-2xl font-bold uppercase tracking-widest text-[10px] sm:text-xs flex items-center justify-center gap-3 transition-all shadow-[0_0_30px_rgba(245,158,11,0.3)] hover:shadow-[0_0_40px_rgba(245,158,11,0.5)] hover:-translate-y-1">
                      Approve & Deploy <ArrowRight size={16} />
                    </a>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}

