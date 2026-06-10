import { motion } from 'framer-motion';
import { Star, Quote, Building2 } from 'lucide-react';

const testimonials = [
  {
    name: 'Ever Green Homes',
    content: 'Professional service and quality lead generation. Very satisfied with the campaign results.',
  },
  {
    name: 'SPR Builders',
    content: 'Creative ads and proper audience targeting helped us get genuine enquiries.',
  },
  {
    name: 'MC Builder',
    content: 'Good response from Meta Ads campaigns. The team handled everything professionally.',
  },
  {
    name: 'Value Reality',
    content: 'Excellent marketing support with attractive creatives and lead management.',
  },
  {
    name: 'Crown Properties & Developers',
    content: 'We received quality site visit leads within a short period of time.',
  },
  {
    name: 'HI-TECH Housing / Properties',
    content: 'Very supportive team with consistent campaign optimization and reporting.',
  },
  {
    name: 'Keerthi Builders',
    content: 'Creative video promotions helped improve our brand reach and visibility.',
  },
  {
    name: 'Accord Housing',
    content: 'Professional approach and smooth communication throughout the campaign.',
  },
  {
    name: 'Cloud Six Homes',
    content: 'Lead quality was good and customer engagement increased significantly.',
  },
  {
    name: 'VIP Housing',
    content: 'Highly recommended for real estate digital marketing and Meta Ads services.',
  },
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="pt-32 md:pt-40 pb-24 bg-black relative">
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-5xl font-heading font-bold mb-6">
            Client <span className="text-gradient-primary">Feedbacks</span>
          </h2>
          <p className="text-gray-400 text-lg">
            Hear directly from the builders and promoters who scaled their projects with our performance marketing systems.
          </p>
        </div>

        <div className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6">
          {testimonials.map((test, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: (index % 3) * 0.15 }}
              className="glass-card p-8 rounded-2xl relative border-t-4 border-t-primary-500 overflow-hidden group break-inside-avoid"
            >
              <div className="absolute top-4 right-4 text-primary-500/10 group-hover:text-primary-500/20 transition-colors">
                <Quote size={40} />
              </div>
              
              <div className="flex gap-1 mb-6">
                {[1, 2, 3, 4, 5].map((s) => (
                  <Star key={s} size={16} className="fill-primary-400 text-primary-400" />
                ))}
              </div>
              
              <p className="text-gray-300 mb-8 leading-relaxed italic relative z-10">"{test.content}"</p>
              
              <div className="mt-auto relative z-10 flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center shrink-0">
                  <Building2 size={16} className="text-primary-400" />
                </div>
                <div>
                  <h4 className="text-white font-bold text-base font-heading">{test.name}</h4>
                  <p className="text-primary-400 text-xs font-semibold tracking-wider uppercase mt-0.5">Verified Client</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
