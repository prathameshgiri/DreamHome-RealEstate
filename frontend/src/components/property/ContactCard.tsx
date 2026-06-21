import React from 'react';
import { Phone, Mail, MapPin, Building2, CalendarDays } from 'lucide-react';

interface ContactCardProps {
  agent: {
    name: string;
    role: string;
    phone: string;
    email: string;
    image: string;
  };
}

const ContactCard: React.FC<ContactCardProps> = ({ agent }) => {
  return (
    <div className="bg-white rounded-3xl p-8 shadow-[0_20px_40px_-15px_rgba(0,0,0,0.1)] border border-gray-100 flex flex-col gap-6">
      <h3 className="text-xl font-bold text-dark">Contact Agent</h3>
      
      {/* Agent Info */}
      <div className="flex items-center gap-4 pb-6 border-b border-gray-100">
        <img 
          src={agent.image} 
          alt={agent.name} 
          className="w-16 h-16 rounded-full object-cover shadow-sm"
        />
        <div>
          <h4 className="text-lg font-bold text-dark">{agent.name}</h4>
          <p className="text-sm font-medium text-primary-600">{agent.role}</p>
        </div>
      </div>

      {/* Contact Details List */}
      <div className="flex flex-col gap-4">
        <div className="flex items-center gap-3 text-gray-600">
          <div className="w-10 h-10 rounded-full bg-gray-50 flex items-center justify-center text-gray-500">
            <Building2 size={18} />
          </div>
          <div className="flex flex-col">
            <span className="text-xs font-bold uppercase tracking-wider text-gray-400">Agency</span>
            <span className="font-medium text-sm">DreamHome Luxury Real Estate</span>
          </div>
        </div>

        <div className="flex items-center gap-3 text-gray-600">
          <div className="w-10 h-10 rounded-full bg-gray-50 flex items-center justify-center text-gray-500">
            <MapPin size={18} />
          </div>
          <div className="flex flex-col">
            <span className="text-xs font-bold uppercase tracking-wider text-gray-400">Address</span>
            <span className="font-medium text-sm">124 Nariman Point, Mumbai</span>
          </div>
        </div>

        <div className="flex items-center gap-3 text-gray-600">
          <div className="w-10 h-10 rounded-full bg-primary-50 flex items-center justify-center text-primary-600">
            <Phone size={18} />
          </div>
          <div className="flex flex-col">
            <span className="text-xs font-bold uppercase tracking-wider text-primary-400">Phone</span>
            <span className="font-bold text-sm text-dark">{agent.phone}</span>
          </div>
        </div>
        
        <div className="flex items-center gap-3 text-gray-600">
          <div className="w-10 h-10 rounded-full bg-gray-50 flex items-center justify-center text-gray-500">
            <Mail size={18} />
          </div>
          <div className="flex flex-col">
            <span className="text-xs font-bold uppercase tracking-wider text-gray-400">Email</span>
            <span className="font-medium text-sm">{agent.email}</span>
          </div>
        </div>
      </div>

      {/* Action Buttons */}
      <div className="flex flex-col gap-3 mt-2">
        <button className="w-full bg-primary-600 hover:bg-primary-700 text-white text-sm py-3 rounded-2xl font-bold transition-colors shadow-lg shadow-primary-600/30 flex items-center justify-center gap-2">
          <Phone size={18} />
          Call Agent Now
        </button>
        <button className="w-full bg-white hover:bg-gray-50 border-2 border-gray-100 text-gray-800 text-sm py-3 rounded-2xl font-bold transition-colors flex items-center justify-center gap-2">
          <CalendarDays size={18} />
          Schedule a Tour
        </button>
      </div>

    </div>
  );
};

export default ContactCard;
