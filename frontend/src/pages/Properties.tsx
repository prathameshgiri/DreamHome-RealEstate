import { useState } from 'react';
import { Search, MapPin, Home as HomeIcon } from 'lucide-react';
import CustomSelect from '../components/ui/CustomSelect';
import PropertyCard from '../components/property/PropertyCard';
import type { PropertyData } from '../components/property/PropertyCard';

// Generating a large list of dummy properties
const generateProperties = (): PropertyData[] => {
  const types = ['Apartment', 'Villa', 'Penthouse', 'Commercial'];
  const tags = ['Premium', 'New', 'Featured', 'Hot'];
  const locations = ['Bandra West, Mumbai', 'Jubilee Hills, Hyderabad', 'Koregaon Park, Pune', 'Whitefield, Bangalore', 'DLF Phase 5, Gurgaon'];
  
  return Array.from({ length: 12 }).map((_, i) => ({
    id: i + 1,
    title: `Luxury ${types[i % types.length]} ${i + 1}`,
    location: locations[i % locations.length],
    price: `₹${(Math.random() * 10 + 2).toFixed(1)} Cr`,
    beds: Math.floor(Math.random() * 4) + 2,
    baths: Math.floor(Math.random() * 4) + 2,
    sqft: `${Math.floor(Math.random() * 5000) + 1500}`,
    image: `https://images.unsplash.com/photo-${1600000000000 + i}?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80`,
    // Use some generic luxury real estate images for variety
    ...(i === 0 && { image: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80' }),
    ...(i === 1 && { image: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80' }),
    ...(i === 2 && { image: 'https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80' }),
    ...(i === 3 && { image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80' }),
    ...(i === 4 && { image: 'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80' }),
    ...(i === 5 && { image: 'https://images.unsplash.com/photo-1600566753086-00f18efc2291?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80' }),
    ...(i > 5 && { image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80' }), // fallback
    tag: tags[i % tags.length]
  }));
};

const propertiesData = generateProperties();

const Properties = () => {
  const [propertyType, setPropertyType] = useState('All Types');
  const [priceRange, setPriceRange] = useState('Any Price');
  const [location, setLocation] = useState('All Locations');

  return (
    <div className="bg-gray-50 min-h-screen pt-24 pb-20">
      <div className="container-custom">
        {/* Page Header */}
        <div className="mb-10">
          <h1 className="text-4xl md:text-5xl font-sans font-extrabold text-dark mb-4">Find Your Perfect Property</h1>
          <p className="text-gray-500 font-medium text-lg max-w-2xl">Browse our exclusive catalog of luxury homes, penthouses, and premium commercial spaces.</p>
        </div>

        {/* Filter Bar */}
        <div className="bg-white p-4 rounded-3xl shadow-sm border border-gray-100 mb-12 flex flex-col md:flex-row gap-4">
          <div className="flex-1">
            <CustomSelect 
              icon={MapPin}
              options={['All Locations', 'Mumbai', 'Delhi', 'Bangalore', 'Hyderabad', 'Pune']}
              value={location}
              onChange={setLocation}
            />
          </div>
          <div className="flex-1">
            <CustomSelect 
              icon={HomeIcon}
              options={['All Types', 'Apartments', 'Villas', 'Penthouses', 'Commercial']}
              value={propertyType}
              onChange={setPropertyType}
            />
          </div>
          <div className="flex-1">
            <CustomSelect 
              prefix="₹"
              options={['Any Price', 'Under 5Cr', '5Cr - 10Cr', '10Cr - 20Cr', '20Cr+']}
              value={priceRange}
              onChange={setPriceRange}
            />
          </div>
          <button className="bg-primary-600 hover:bg-primary-700 text-white text-sm font-bold py-2.5 px-6 rounded-2xl transition-colors flex items-center justify-center gap-2">
            <Search size={20} />
            Search
          </button>
        </div>

        {/* Properties Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {propertiesData.map((property, idx) => (
            <PropertyCard key={property.id} property={property} index={idx} />
          ))}
        </div>

        {/* Pagination / Load More */}
        <div className="flex justify-center">
          <button className="bg-white border-2 border-gray-200 text-gray-700 hover:border-primary-600 hover:text-primary-600 text-sm font-bold py-2.5 px-8 rounded-2xl transition-all shadow-sm">
            Load More Properties
          </button>
        </div>
      </div>
    </div>
  );
};

export default Properties;
