import { motion } from 'framer-motion';
import { 
  Megaphone, 
  Users, 
  Building2, 
  Video, 
  MapPin, 
  TrendingUp, 
  MessageSquare, 
  Repeat 
} from 'lucide-react';

const services = [
  {
    title: 'Meta Ads Management',
    description: 'Data-driven Facebook and Instagram ad campaigns optimized for high-quality real estate leads.',
    icon: Megaphone,
  },
  {
    title: 'Lead Generation',
    description: 'We build targeted funnels that capture high-intent property buyers in your specific location.',
    icon: Users,
  },
  {
    title: 'Real Estate Branding',
    description: 'Premium brand positioning for builders and promoters to establish trust and authority in the market.',
    icon: Building2,
  },
  {
    title: 'Reels & Video Editing',
    description: 'Cinematic property walkthroughs and viral reel editing that capture audience attention instantly.',
    icon: Video,
  },
  {
    title: 'Site Visit Campaigns',
    description: 'Specialized ad strategies focused entirely on converting digital leads into physical site visits.',
    icon: MapPin,
  },
  {
    title: 'Instagram Growth',
    description: 'Organic follower growth and engagement strategies for long-term brand building on social media.',
    icon: TrendingUp,
  },
  {
    title: 'WhatsApp Marketing',
    description: 'Automated follow-ups and broadcast campaigns to nurture leads and finalize property bookings.',
    icon: MessageSquare,
  },
  {
    title: 'Retargeting Campaigns',
    description: 'Keep your projects top-of-mind by re-engaging users who previously interacted with your ads.',
    icon: Repeat,
  },
];

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 }
};

export default function Services() {
  return (
    <section id="services" className="pt-40 md:pt-48 pb-24 bg-zinc-950 relative">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-primary-900/10 via-black to-black"></div>
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-5xl font-heading font-bold mb-6">
            Elite Marketing <span className="text-gradient-primary">Services</span>
          </h2>
          <p className="text-gray-400 text-lg">
            Comprehensive digital growth strategies engineered specifically for the real estate industry to drive site visits and secure bookings.
          </p>
        </div>

        <motion.div 
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <motion.div 
                key={index}
                variants={item}
                className="glass-card p-8 rounded-2xl group hover:-translate-y-2 transition-all duration-300 relative overflow-hidden"
              >
                {/* Hover gradient effect */}
                <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-primary-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-0"></div>
                
                <div className="relative z-10">
                  <div className="w-14 h-14 rounded-xl bg-black border border-primary-500/30 flex items-center justify-center mb-6 text-primary-400 group-hover:bg-primary-500 group-hover:text-black transition-colors duration-300">
                    <Icon size={28} />
                  </div>
                  <h3 className="text-xl font-heading font-semibold text-white mb-3">{service.title}</h3>
                  <p className="text-gray-400 text-sm leading-relaxed">
                    {service.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
