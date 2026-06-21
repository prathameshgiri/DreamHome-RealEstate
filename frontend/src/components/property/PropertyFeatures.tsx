import React from 'react';
import { CheckCircle2 } from 'lucide-react';

interface PropertyFeaturesProps {
  features: string[];
}

const PropertyFeatures: React.FC<PropertyFeaturesProps> = ({ features }) => {
  return (
    <div className="bg-white rounded-3xl p-8 shadow-sm border border-gray-100">
      <h3 className="text-2xl font-bold text-dark mb-6">Amenities & Features</h3>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-4 gap-x-8">
        {features.map((feature, idx) => (
          <div key={idx} className="flex items-center gap-3">
            <div className="min-w-6 flex items-center justify-center text-primary-500">
              <CheckCircle2 size={20} className="fill-primary-50 text-primary-600" />
            </div>
            <span className="text-gray-700 font-medium text-lg">{feature}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PropertyFeatures;
