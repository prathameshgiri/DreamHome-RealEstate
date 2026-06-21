import React from 'react';
import { motion } from 'framer-motion';

interface ImageGalleryProps {
  images: string[];
}

const ImageGallery: React.FC<ImageGalleryProps> = ({ images }) => {
  // We'll show the first image large, and the next 4 as a grid next to it (Airbnb style)
  const mainImage = images[0];
  const sideImages = images.slice(1, 5);

  return (
    <div className="grid grid-cols-1 md:grid-cols-4 gap-3 h-[400px] md:h-[500px] rounded-3xl overflow-hidden shadow-lg">
      <motion.div 
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6 }}
        className="md:col-span-2 relative h-full group overflow-hidden"
      >
        <img 
          src={mainImage} 
          alt="Main Property" 
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" 
        />
        <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors" />
      </motion.div>
      
      <div className="hidden md:grid md:col-span-2 grid-cols-2 grid-rows-2 gap-3 h-full">
        {sideImages.map((img, idx) => (
          <motion.div 
            key={idx}
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.1 * (idx + 1) }}
            className="relative h-full group overflow-hidden"
          >
            <img 
              src={img} 
              alt={`Property ${idx + 2}`} 
              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" 
            />
            <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors" />
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default ImageGallery;
