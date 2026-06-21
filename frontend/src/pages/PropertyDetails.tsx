import { useParams } from 'react-router-dom';
import ImageGallery from '../components/property/ImageGallery';
import PropertyHeader from '../components/property/PropertyHeader';
import PropertyFeatures from '../components/property/PropertyFeatures';
import ContactCard from '../components/property/ContactCard';

// Dummy data for now
const propertyData = {
  id: '1',
  title: 'Skyline Luxury Penthouse',
  location: 'Worli Sea Face, Mumbai',
  price: '₹12.5 Cr',
  beds: 4,
  baths: 5,
  sqft: '4,500',
  description: 'Experience the pinnacle of luxury living in this magnificent penthouse overlooking the Arabian Sea. Featuring double-height ceilings, a private infinity pool, and state-of-the-art home automation. The master suite offers panoramic ocean views and a walk-in wardrobe imported from Italy.',
  features: [
    'Private Elevator Access',
    'Smart Home Automation',
    'Infinity Plunge Pool',
    'Italian Marble Flooring',
    'Gaggenau Kitchen Appliances',
    '24/7 Concierge Service',
    'Ocean Facing Balconies',
    'Home Theater System'
  ],
  images: [
    'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80',
    'https://images.unsplash.com/photo-1600607687931-cece5ce21711?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    'https://images.unsplash.com/photo-1600566753086-00f18efc2291?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
  ],
  agent: {
    name: 'Aarav Sharma',
    role: 'Senior Luxury Consultant',
    phone: '+91 98765 43210',
    email: 'aarav@dreamhome.com',
    image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80'
  }
};

const PropertyDetails = () => {
  const { id: _id } = useParams();

  // In a real app, you would fetch data based on ID here.
  // We'll use the dummy data for now.

  return (
    <div className="bg-gray-50 min-h-screen pt-24 pb-20">
      <div className="container-custom">
        {/* Image Gallery */}
        <ImageGallery images={propertyData.images} />

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 mt-10">
          
          {/* Main Content (Left Side) */}
          <div className="lg:col-span-2 flex flex-col gap-8">
            <PropertyHeader 
              title={propertyData.title}
              location={propertyData.location}
              price={propertyData.price}
              beds={propertyData.beds}
              baths={propertyData.baths}
              sqft={propertyData.sqft}
            />

            <div className="bg-white rounded-3xl p-8 shadow-sm border border-gray-100">
              <h3 className="text-2xl font-bold text-dark mb-4">Property Description</h3>
              <p className="text-gray-600 leading-relaxed text-lg">
                {propertyData.description}
              </p>
            </div>

            <PropertyFeatures features={propertyData.features} />
          </div>

          {/* Sticky Sidebar (Right Side) */}
          <div className="lg:col-span-1">
            <div className="sticky top-28">
              <ContactCard agent={propertyData.agent} />
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default PropertyDetails;
