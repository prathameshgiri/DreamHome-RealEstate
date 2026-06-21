import React from 'react';
import { MapPin, Bed, Bath, Square, Heart, Share2 } from 'lucide-react';

interface PropertyHeaderProps {
  title: string;
  location: string;
  price: string;
  beds: number;
  baths: number;
  sqft: string;
}

const PropertyHeader: React.FC<PropertyHeaderProps> = ({ title, location, price, beds, baths, sqft }) => {
  return (
    <div className="bg-white rounded-3xl p-8 shadow-sm border border-gray-100 flex flex-col md:flex-row justify-between items-start md:items-end gap-6">
      <div>
        <div className="flex items-center gap-2 text-primary-600 font-bold mb-3 bg-primary-50 w-fit px-4 py-1.5 rounded-full text-sm">
          For Sale
        </div>
        <h1 className="text-3xl md:text-5xl font-sans font-extrabold text-dark mb-3 leading-tight">{title}</h1>
        <div className="flex items-center gap-2 text-gray-500 mb-8">
          <MapPin size={20} className="text-primary-500" />
          <span className="text-lg font-medium">{location}</span>
        </div>

        <div className="flex flex-wrap items-center gap-6">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-full bg-primary-50 flex items-center justify-center text-primary-600">
              <Bed size={22} />
            </div>
            <div>
              <p className="text-xl font-bold text-dark">{beds}</p>
              <p className="text-sm font-medium text-gray-500 uppercase tracking-wider">Bedrooms</p>
            </div>
          </div>
          <div className="w-px h-10 bg-gray-200 hidden sm:block"></div>
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-full bg-primary-50 flex items-center justify-center text-primary-600">
              <Bath size={22} />
            </div>
            <div>
              <p className="text-xl font-bold text-dark">{baths}</p>
              <p className="text-sm font-medium text-gray-500 uppercase tracking-wider">Bathrooms</p>
            </div>
          </div>
          <div className="w-px h-10 bg-gray-200 hidden sm:block"></div>
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-full bg-primary-50 flex items-center justify-center text-primary-600">
              <Square size={22} />
            </div>
            <div>
              <p className="text-xl font-bold text-dark">{sqft}</p>
              <p className="text-sm font-medium text-gray-500 uppercase tracking-wider">Square Feet</p>
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-col items-start md:items-end w-full md:w-auto">
        <h2 className="text-4xl md:text-5xl font-extrabold text-primary-600 mb-6">{price}</h2>
        <div className="flex gap-4 w-full md:w-auto">
          <button className="flex-1 md:flex-none flex items-center justify-center gap-2 px-4 py-2 text-sm rounded-xl border-2 border-gray-100 font-bold text-gray-700 hover:border-red-500 hover:text-red-500 transition-colors shadow-sm bg-white">
            <Heart size={20} />
            Save
          </button>
          <button className="flex-1 md:flex-none flex items-center justify-center gap-2 px-4 py-2 text-sm rounded-xl border-2 border-gray-100 font-bold text-gray-700 hover:border-primary-600 hover:text-primary-600 transition-colors shadow-sm bg-white">
            <Share2 size={20} />
            Share
          </button>
        </div>
      </div>
    </div>
  );
};

export default PropertyHeader;
