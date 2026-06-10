import { useState } from 'react';
import { motion } from 'framer-motion';
import { Search, Building2, Home, Construction, Briefcase, Users, CheckCircle2 } from 'lucide-react';

const allClients = [
  "Ever Green Homes", "SPR Builders", "Namma Family Groups", "MC Builder", "Shri Sangamam Properties", 
  "Value Reality", "AR Enterprise", "Dann Promoters", "Crown Properties & Developers", "HI Tech", 
  "Jayam Foundation", "Green India Construction", "RIZSA Builder & Developer", "LAYA Estates", 
  "Lakshitha Foundation", "Dream Home", "Aditi Housing", "VIKAA Homes", "HI-TECH Housing / Properties", 
  "Sri Lakshmi Construction", "SRI AUROBINDHO MEERA CONSTRUCTION", "AP Builders", "Shri Krish Housing & Properties", 
  "Staarhome ARS Home", "Premier Housing", "BIG Promoters", "Real Homes", "Cloud Six Homes", 
  "Sangamam Properties", "Bharathi Construction", "JK Housing Properties", "Sky Homes", "Evergreen", 
  "Keerthi Builders", "SSR Dev", "Accord Housing", "Unit Construction", "Cloud Six Home", 
  "Starhomes ARS Homes", "NRI Homes", "MJ Promo", "VIP Housing", "Abhimanyu", "MV Property", "HIS Sunshine"
];

const categories = ["All", "Builders", "Promoters", "Housing & Properties", "Construction Companies"];

const categorizeClient = (name: string) => {
  const lowerName = name.toLowerCase();
  if (lowerName.includes("builder")) return "Builders";
  if (lowerName.includes("promoter") || lowerName.includes("promo")) return "Promoters";
  if (lowerName.includes("housing") || lowerName.includes("property") || lowerName.includes("properties")) return "Housing & Properties";
  if (lowerName.includes("construction") || lowerName.includes("infra")) return "Construction Companies";
  return "Housing & Properties"; // Default fallback
};

export default function Clients() {
  const [activeTab, setActiveTab] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");

  const filteredClients = allClients.filter(client => {
    const matchesSearch = client.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = activeTab === "All" || categorizeClient(client) === activeTab;
    return matchesSearch && matchesCategory;
  });

  return (
    <section id="clients" className="pt-32 md:pt-40 pb-24 bg-[#050505] relative overflow-hidden">
      {/* Background Ornaments */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary-900/10 rounded-full blur-[120px] pointer-events-none translate-x-1/2 -translate-y-1/2"></div>
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="text-center max-w-4xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 mb-6"
          >
            <Users size={16} className="text-primary-500" />
            <span className="text-sm font-medium text-gray-300">Trusted by 45+ Real Estate Brands</span>
          </motion.div>
          <h2 className="text-3xl md:text-5xl font-heading font-bold mb-6 text-white">
            Our Trusted <span className="text-gradient-primary">Clients</span>
          </h2>
          <p className="text-gray-400 text-lg md:text-xl">
            Helping Real Estate Brands Generate Quality Leads Through Creative Marketing & Meta Ads
          </p>
        </div>

        {/* Marquee Section */}
        <div className="mb-24 -mx-4 md:-mx-6 relative w-screen md:w-[calc(100%+3rem)] left-1/2 right-1/2 -ml-[50vw] md:-ml-[calc(50vw-1.5rem)] overflow-hidden">
          {/* Gradient Masks */}
          <div className="absolute top-0 bottom-0 left-0 w-24 bg-gradient-to-r from-[#050505] to-transparent z-10"></div>
          <div className="absolute top-0 bottom-0 right-0 w-24 bg-gradient-to-l from-[#050505] to-transparent z-10"></div>
          
          <div className="flex animate-marquee mb-4 gap-4">
            {[...allClients, ...allClients].map((client, i) => (
              <div key={i} className="flex-shrink-0 bg-white/5 border border-white/10 px-6 py-4 rounded-xl flex items-center justify-center whitespace-nowrap text-gray-300 font-medium hover:border-primary-500/50 hover:text-white hover:bg-white/10 transition-colors">
                {client}
              </div>
            ))}
          </div>
          <div className="flex animate-marquee-reverse gap-4">
            {[...allClients.reverse(), ...allClients].map((client, i) => (
              <div key={i} className="flex-shrink-0 bg-white/5 border border-white/10 px-6 py-4 rounded-xl flex items-center justify-center whitespace-nowrap text-gray-300 font-medium hover:border-primary-500/50 hover:text-white hover:bg-white/10 transition-colors">
                {client}
              </div>
            ))}
          </div>
        </div>

        {/* Search & Filter Section */}
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row gap-6 justify-between items-center mb-10">
            {/* Tabs */}
            <div className="flex flex-wrap items-center gap-2 justify-center">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActiveTab(cat)}
                  className={`px-5 py-2.5 rounded-full text-sm font-semibold transition-all duration-300 ${
                    activeTab === cat 
                      ? 'bg-primary-500 text-black shadow-[0_0_15px_rgba(0,102,255,0.4)]' 
                      : 'bg-white/5 text-gray-400 border border-white/10 hover:bg-white/10 hover:text-white'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>

            {/* Search */}
            <div className="relative w-full md:w-72">
              <input 
                type="text" 
                placeholder="Search clients..." 
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full bg-black/50 border border-white/10 rounded-full pl-12 pr-4 py-3 text-sm text-white focus:outline-none focus:border-primary-500 focus:ring-1 focus:ring-primary-500 transition-all placeholder:text-gray-500"
              />
              <Search size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500" />
            </div>
          </div>

          {/* Grid */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {filteredClients.map((client, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.2 }}
                className="bg-black/40 border border-white/5 hover:border-primary-500/30 p-4 rounded-xl flex items-start gap-3 group transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_10px_20px_rgba(0,0,0,0.3)] hover:bg-white/[0.02]"
              >
                <div className="w-10 h-10 rounded-lg bg-white/5 flex items-center justify-center shrink-0 group-hover:bg-primary-500/10 transition-colors">
                   {categorizeClient(client) === 'Builders' ? <Building2 size={18} className="text-primary-500" /> :
                    categorizeClient(client) === 'Promoters' ? <Briefcase size={18} className="text-primary-400" /> :
                    categorizeClient(client) === 'Construction Companies' ? <Construction size={18} className="text-orange-400" /> :
                    <Home size={18} className="text-primary-300" />}
                </div>
                <div>
                  <h4 className="text-sm font-semibold text-gray-200 group-hover:text-white transition-colors">{client}</h4>
                  <p className="text-[10px] text-gray-500 uppercase tracking-wider mt-1">{categorizeClient(client)}</p>
                </div>
              </motion.div>
            ))}
            
            {filteredClients.length === 0 && (
              <div className="col-span-full py-12 text-center text-gray-500">
                No clients found matching your search.
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
