import React from 'react';
import { motion } from 'framer-motion';
import { Phone, Mail, Star, Home, Trophy, ArrowRight } from 'lucide-react';

interface AgentCardProps {
  agent: {
    id: number;
    name: string;
    role: string;
    image: string;
    propertiesSold: number;
    experience: string;
    rating: string;
  };
  index: number;
}

const AgentCard: React.FC<AgentCardProps> = ({ agent, index }) => {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className="bg-white rounded-[1.5rem] overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 flex flex-col h-full"
    >
      {/* Top Image Section */}
      <div className="relative h-80 w-full shrink-0 border-b border-gray-100">
        <img 
          src={agent.image} 
          alt={agent.name} 
          className="w-full h-full object-cover object-center" 
        />
        {/* Top Right Badge (Like the 'Live' badge in screenshot) */}
        <div className="absolute top-4 right-4 bg-teal-500 text-white px-3 py-1.5 rounded-full flex items-center gap-1.5 shadow-md">
          <div className="w-1.5 h-1.5 bg-white rounded-full animate-pulse"></div>
          <span className="font-bold text-sm">Top Agent</span>
        </div>
      </div>

      {/* Content Section */}
      <div className="p-6 md:p-8 flex flex-col flex-grow">
        
        {/* Name & Title */}
        <div className="mb-4">
          <h3 className="text-2xl font-bold text-gray-900 mb-1">{agent.name}</h3>
          <p className="text-primary-600 font-medium text-sm">{agent.role}</p>
        </div>

        {/* Short Description / Tags (Matching the pill tags in screenshot) */}
        <p className="text-gray-500 text-sm mb-5 leading-relaxed">
          Dedicated luxury real estate consultant with a proven track record of finding the perfect dream homes for elite clients.
        </p>

        <div className="flex flex-wrap gap-2 mb-6">
          <span className="bg-primary-50 text-primary-700 px-3 py-1.5 rounded-full text-xs font-bold border border-primary-100 flex items-center gap-1">
            <Home size={12} /> {agent.propertiesSold} Sold
          </span>
          <span className="bg-purple-50 text-purple-700 px-3 py-1.5 rounded-full text-xs font-bold border border-purple-100 flex items-center gap-1">
            <Trophy size={12} /> {agent.experience}
          </span>
          <span className="bg-yellow-50 text-yellow-700 px-3 py-1.5 rounded-full text-xs font-bold border border-yellow-100 flex items-center gap-1">
            <Star size={12} className="fill-yellow-600 text-yellow-600" /> {agent.rating}
          </span>
        </div>

        <div className="mt-auto">
          {/* Divider */}
          <div className="h-px w-full bg-gray-200 mb-6"></div>

          {/* Action Buttons (Matching the exact layout from screenshot) */}
          <div className="flex flex-col gap-2.5">
            {/* Top Row: Two buttons side by side */}
            <div className="flex gap-2.5">
              <button className="flex-1 bg-white border-2 border-gray-200 hover:border-primary-600 hover:text-primary-600 text-gray-700 py-2 rounded-xl text-sm font-bold transition-colors flex items-center justify-center gap-1.5">
                <Phone size={14} />
                Call
              </button>
              <button className="flex-1 bg-gray-900 hover:bg-black text-white py-2 rounded-xl text-sm font-bold transition-colors flex items-center justify-center gap-1.5 shadow-md">
                <Mail size={14} />
                Email
              </button>
            </div>
            
            {/* Bottom Row: Full width button */}
            <button className="w-full bg-[#8b5cf6] hover:bg-[#7c3aed] text-white py-2.5 rounded-xl text-sm font-bold transition-colors flex items-center justify-center gap-1.5 shadow-md">
              Message on WhatsApp <ArrowRight size={16} />
            </button>
          </div>
        </div>

      </div>
    </motion.div>
  );
};

export default AgentCard;
