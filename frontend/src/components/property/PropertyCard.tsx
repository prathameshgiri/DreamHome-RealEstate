import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { MapPin, Bed, Bath, Square, Heart } from 'lucide-react';

export interface PropertyData {
  id: number | string;
  title: string;
  location: string;
  price: string;
  beds: number;
  baths: number;
  sqft: string;
  image: string;
  tag: string;
}

interface PropertyCardProps {
  property: PropertyData;
  index: number;
}

const PropertyCard: React.FC<PropertyCardProps> = ({ property, index }) => {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.6, delay: index * 0.15 }}
      className="bg-white rounded-[1.5rem] overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 flex flex-col h-full group"
    >
      {/* Top Image Section */}
      <div className="relative h-64 w-full shrink-0 border-b border-gray-100 overflow-hidden">
        <img 
          src={property.image} 
          alt={property.title} 
          className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700" 
        />
        {/* Top Right Badge */}
        <div className="absolute top-4 right-4 bg-teal-500 text-white px-3 py-1.5 rounded-full flex items-center gap-1.5 shadow-md">
          <div className="w-1.5 h-1.5 bg-white rounded-full animate-pulse"></div>
          <span className="font-bold text-xs uppercase tracking-wider">{property.tag}</span>
        </div>
        <button className="absolute top-4 left-4 z-10 w-8 h-8 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center text-gray-500 hover:text-red-500 transition-colors shadow-sm">
          <Heart size={14} />
        </button>
      </div>

      {/* Content Section */}
      <div className="p-6 md:p-8 flex flex-col flex-grow">
        
        {/* Price & Title */}
        <div className="mb-4">
          <h3 className="text-2xl font-extrabold text-gray-900 mb-1">{property.price}</h3>
          <p className="text-primary-600 font-bold text-sm line-clamp-1">{property.title}</p>
        </div>

        {/* Location */}
        <p className="text-gray-500 text-sm mb-5 flex items-center gap-1.5">
          <MapPin size={14} className="text-gray-400" />
          <span className="line-clamp-1">{property.location}</span>
        </p>

        {/* Pill Tags for Stats */}
        <div className="flex flex-wrap gap-2 mb-6">
          <span className="bg-primary-50 text-primary-700 px-3 py-1.5 rounded-full text-xs font-bold border border-primary-100 flex items-center gap-1.5">
            <Bed size={12} /> {property.beds} Beds
          </span>
          <span className="bg-purple-50 text-purple-700 px-3 py-1.5 rounded-full text-xs font-bold border border-purple-100 flex items-center gap-1.5">
            <Bath size={12} /> {property.baths} Baths
          </span>
          <span className="bg-yellow-50 text-yellow-700 px-3 py-1.5 rounded-full text-xs font-bold border border-yellow-100 flex items-center gap-1.5">
            <Square size={12} /> {property.sqft}
          </span>
        </div>

        <div className="mt-auto">
          {/* Divider */}
          <div className="h-px w-full bg-gray-200 mb-6"></div>

          {/* Action Buttons */}
          <Link to={`/property/${property.id}`} className="w-full bg-gray-900 hover:bg-black text-white py-2.5 rounded-xl text-sm font-bold transition-colors flex items-center justify-center gap-1.5 shadow-md">
            View Details
          </Link>
        </div>
      </div>
    </motion.div>
  );
};

export default PropertyCard;
