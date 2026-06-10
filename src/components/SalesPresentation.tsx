import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  X, ChevronRight, ChevronLeft, Target, AlertCircle, Award, 
  Map, Lightbulb, PieChart, ShieldCheck, CheckCircle2, 
  ArrowRight, Rocket, TrendingUp, BarChart3, Users, Zap
} from 'lucide-react';

const slides = [
  {
    id: 'intro',
    title: "AGAM Project Growth System",
    subtitle: "Customized Strategy & Discovery",
    icon: <Target size={40} className="text-amber-500" />,
    content: (
      <div className="space-y-8">
        <p className="text-xl text-gray-300 leading-relaxed border-l-4 border-amber-500 pl-6">
          "Every project is different and requires a tailored growth strategy. Before proposing a solution, we must understand your current situation."
        </p>
        <div className="bg-white/[0.03] border border-white/10 p-8 rounded-3xl">
          <h4 className="text-amber-500 font-bold uppercase tracking-widest text-sm mb-6">Discovery Checklist</h4>
          <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {[
              "Current project location?",
              "What type of project? (Layout/Villa/Apt)",
              "Total units & units sold?",
              "Current enquiry sources?",
              "Running Meta Ads?",
              "Using a CRM System?",
              "Lead tracking & follow-ups?",
              "Number of sales staff?",
              "Target for the next 90 days?"
            ].map((q, i) => (
              <li key={i} className="flex items-start gap-3 text-gray-300">
                <div className="w-2 h-2 rounded-full bg-amber-500 mt-2 shrink-0"></div>
                <span>{q}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    )
  },
  {
    id: 'pain',
    title: "The Industry Challenge",
    subtitle: "Pain Identification",
    icon: <AlertCircle size={40} className="text-amber-500" />,
    content: (
      <div className="space-y-8">
        <p className="text-xl text-gray-300 leading-relaxed">
          "This is the same challenge we see with many builders. Most projects spend on marketing but lack a proper system to convert."
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {[
            { label: "Low Visibility & Enquiries", icon: <TrendingUp size={24} /> },
            { label: "Poor Lead Quality", icon: <Users size={24} /> },
            { label: "No Follow-up System", icon: <AlertCircle size={24} /> },
            { label: "Leads Getting Wasted", icon: <Zap size={24} /> },
            { label: "No Tracking Process", icon: <Target size={24} /> },
            { label: "No Performance Reports", icon: <BarChart3 size={24} /> },
          ].map((item, i) => (
            <div key={i} className="flex items-center gap-4 bg-red-500/5 border border-red-500/20 p-6 rounded-2xl text-red-200">
              <div className="text-red-500">{item.icon}</div>
              <span className="font-semibold">{item.label}</span>
            </div>
          ))}
        </div>
      </div>
    )
  },
  {
    id: 'authority',
    title: "Who We Are",
    subtitle: "Authority & Positioning",
    icon: <Award size={40} className="text-amber-500" />,
    content: (
      <div className="space-y-8">
        <div className="bg-gradient-to-br from-amber-500/10 to-transparent p-8 rounded-3xl border border-amber-500/20">
          <h3 className="text-2xl font-bold text-white mb-4">More Than Just Marketing</h3>
          <ul className="space-y-4 text-lg text-gray-300">
            <li className="flex items-center gap-3"><X className="text-red-500" /> Not just a YouTube channel</li>
            <li className="flex items-center gap-3"><X className="text-red-500" /> Not just an ad agency</li>
            <li className="flex items-center gap-3"><X className="text-red-500" /> Not just a video production company</li>
          </ul>
        </div>
        <div className="bg-white/[0.03] p-8 rounded-3xl border border-white/10">
          <h3 className="text-2xl font-bold text-white mb-4">Our True Position</h3>
          <p className="text-gray-400 text-lg leading-relaxed">
            While platforms like 99acres and MagicBricks are directories, AGAM functions as your <span className="text-amber-500 font-bold">Dedicated Growth Partner</span> focusing on visibility, lead generation, lead management, and comprehensive growth support across Tamil Nadu.
          </p>
        </div>
      </div>
    )
  },
  {
    id: 'system',
    title: "The AGAM 5-Phase System",
    subtitle: "Complete Project Growth System",
    icon: <Map size={40} className="text-amber-500" />,
    content: (
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {[
          { title: "Brand Visibility", items: ["Pro Video Shoot", "Pro Editing", "YouTube Promo", "Instagram Promo", "FB Promo"] },
          { title: "Lead Generation", items: ["Meta Ads Management", "Audience Targeting", "Campaign Monitoring", "Reach Expansion"] },
          { title: "Lead Management", items: ["Lead Tracking", "Lead Monitoring", "Follow-up Support", "Response Tracking"] },
          { title: "Performance Monitoring", items: ["Daily Analysis", "Weekly Reports", "Monthly Reports", "Strategy Review"] },
          { title: "Business Growth Support", items: ["Dedicated Executive", "Customer Care", "Project Monitoring", "Growth Recs"] },
        ].map((phase, i) => (
           <div key={i} className="bg-white/[0.03] border border-white/10 p-6 rounded-3xl hover:border-amber-500/50 transition-colors">
              <div className="text-amber-500 font-bold uppercase tracking-widest text-xs mb-4">Phase {i + 1}</div>
              <h4 className="text-xl font-bold text-white mb-4">{phase.title}</h4>
              <ul className="space-y-2">
                {phase.items.map((item, j) => (
                  <li key={j} className="flex items-center gap-2 text-sm text-gray-400">
                    <CheckCircle2 size={14} className="text-amber-500/50" /> {item}
                  </li>
                ))}
              </ul>
           </div>
        ))}
      </div>
    )
  },
  {
    id: 'value',
    title: "CRM & Value Stack",
    subtitle: "Why We Don't Stop at Lead Gen",
    icon: <ShieldCheck size={40} className="text-amber-500" />,
    content: (
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        <div className="space-y-6">
           <h3 className="text-2xl font-bold text-white mb-4">CRM Value Addition</h3>
           <p className="text-gray-400 text-lg">Most companies stop after generating leads. We track and manage them to ensure high conversion.</p>
           <ul className="space-y-4">
             {["Prevent lead wastage", "Track follow-ups", "Monitor enquiry status", "Improve conversion rates", "Manage project performance"].map((item, i) => (
               <li key={i} className="flex items-center gap-3 bg-white/[0.02] p-4 rounded-xl border border-white/5">
                 <ShieldCheck className="text-amber-500" /> <span className="text-gray-300 font-medium">{item}</span>
               </li>
             ))}
           </ul>
        </div>
        <div className="bg-gradient-to-br from-amber-900/20 to-black p-8 rounded-3xl border border-amber-500/30">
           <h3 className="text-2xl font-bold text-amber-500 mb-6 flex items-center gap-3"><Award /> Total Value Stack</h3>
           <ul className="space-y-3">
             {["Branding Support", "Lead Generation", "Daily Monitoring", "Customer Care Support", "Dedicated Project Exec", "Performance Tracking", "Follow-up System", "Reporting System", "Growth Strategy", "CRM Support"].map((item, i) => (
               <li key={i} className="flex items-center justify-between border-b border-white/5 pb-3 last:border-0 last:pb-0">
                 <span className="text-gray-300">{item}</span>
                 <CheckCircle2 size={18} className="text-amber-500" />
               </li>
             ))}
           </ul>
        </div>
      </div>
    )
  },
  {
    id: 'closing',
    title: "Packages & Partnership",
    subtitle: "Let's Scale Your Project",
    icon: <Rocket size={40} className="text-amber-500" />,
    content: (
      <div className="space-y-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            { title: "PROJECT GROWTH", price: "₹49,999" },
            { title: "PROJECT ACCELERATION", price: "₹79,999" },
            { title: "MARKET DOMINATION", price: "₹99,999" },
          ].map((pkg, i) => (
            <div key={i} className="bg-white/[0.02] border border-white/10 p-8 rounded-3xl text-center hover:bg-amber-500/5 hover:border-amber-500/30 transition-all">
               <h4 className="text-sm font-bold text-gray-400 uppercase tracking-widest mb-6">{pkg.title}</h4>
               <div className="text-4xl font-bold text-white">{pkg.price}</div>
               <div className="text-amber-500 text-sm font-bold mt-2">+ GST</div>
            </div>
          ))}
        </div>
        <div className="bg-gradient-to-r from-amber-500/10 to-transparent p-8 md:p-12 rounded-3xl border border-amber-500/20 text-center">
           <p className="text-2xl md:text-3xl font-heading font-medium text-white leading-relaxed mb-8">
             "Our objective is not to sell a package. It is to help your project reach more buyers, generate quality enquiries, and create a proper growth system."
           </p>
           <h3 className="text-xl text-amber-400 font-bold">Would you like us to prepare a customized growth plan for your project?</h3>
        </div>
      </div>
    )
  }
];

export default function SalesPresentation({ onClose }: { onClose: () => void }) {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    if (currentSlide < slides.length - 1) setCurrentSlide(curr => curr + 1);
  };

  const prevSlide = () => {
    if (currentSlide > 0) setCurrentSlide(curr => curr - 1);
  };

  const activeSlide = slides[currentSlide];

  return (
    <div className="fixed inset-0 z-[100] bg-[#030303] flex flex-col font-sans overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-[0.02] mix-blend-overlay"></div>
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-[radial-gradient(circle_at_center,rgba(212,175,55,0.08),transparent_70%)] pointer-events-none"></div>

      {/* Header */}
      <div className="flex items-center justify-between p-6 md:px-12 border-b border-white/5 bg-black/50 backdrop-blur-md relative z-20">
        <div className="flex items-center gap-4">
          <div className="w-10 h-10 bg-amber-500/10 rounded-xl border border-amber-500/20 flex items-center justify-center text-amber-500">
            <Lightbulb size={20} />
          </div>
          <div>
            <div className="text-[10px] font-bold text-gray-500 uppercase tracking-widest">Growth Pitch Deck</div>
            <div className="text-white font-medium text-sm">AGAM Properties</div>
          </div>
        </div>
        
        <div className="flex items-center gap-6">
          <div className="hidden md:flex gap-2">
             {slides.map((_, i) => (
               <div 
                 key={i} 
                 onClick={() => setCurrentSlide(i)}
                 className={`h-2 rounded-full cursor-pointer transition-all ${currentSlide === i ? 'w-8 bg-amber-500' : 'w-2 bg-white/20'}`}
               />
             ))}
          </div>
          <button onClick={onClose} className="p-3 text-gray-500 hover:text-white bg-white/5 rounded-full hover:bg-white/10 transition-colors">
            <X size={20} />
          </button>
        </div>
      </div>

      {/* Main Content Area */}
      <div className="flex-1 overflow-y-auto relative z-10 flex flex-col">
        <div className="flex-1 w-full max-w-7xl mx-auto p-6 md:p-12 flex flex-col justify-center min-h-max">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentSlide}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.3 }}
              className="w-full"
            >
              <div className="flex items-center gap-6 mb-12">
                <div className="p-4 bg-amber-500/10 border border-amber-500/20 rounded-2xl">
                  {activeSlide.icon}
                </div>
                <div>
                  <h2 className="text-sm font-bold text-amber-500 uppercase tracking-widest mb-2">Step {currentSlide + 1} of {slides.length}: {activeSlide.subtitle}</h2>
                  <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-white tracking-tight">{activeSlide.title}</h1>
                </div>
              </div>

              <div className="w-full">
                {activeSlide.content}
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>

      {/* Footer Controls */}
      <div className="p-6 md:px-12 border-t border-white/5 bg-black/50 backdrop-blur-md relative z-20 flex justify-between items-center">
        <button 
          onClick={prevSlide}
          disabled={currentSlide === 0}
          className="px-6 py-3 flex items-center gap-2 text-gray-400 hover:text-white disabled:opacity-30 disabled:hover:text-gray-400 transition-colors"
        >
          <ChevronLeft size={20} /> Previous
        </button>

        <div className="text-sm text-gray-500 font-medium font-mono">
          {currentSlide + 1} / {slides.length}
        </div>

        {currentSlide < slides.length - 1 ? (
          <button 
            onClick={nextSlide}
            className="px-8 py-3 bg-amber-500 text-black font-bold uppercase tracking-wider text-sm rounded-xl hover:bg-amber-400 flex items-center gap-2 transition-colors"
          >
            Next Step <ChevronRight size={20} />
          </button>
        ) : (
          <a
            href="#packages"
            onClick={onClose}
            className="px-8 py-3 bg-gradient-to-r from-amber-500 to-amber-300 text-black font-bold uppercase tracking-wider text-sm rounded-xl hover:opacity-90 flex items-center gap-2 transition-opacity"
          >
            Complete Pitch <CheckCircle2 size={20} />
          </a>
        )}
      </div>
    </div>
  );
}
