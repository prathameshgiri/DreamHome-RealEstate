import React, { useState, useRef, useEffect } from 'react';
import { ChevronDown } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

interface CustomSelectProps {
  icon?: React.ElementType;
  prefix?: string;
  options: string[];
  value: string;
  onChange: (val: string) => void;
}

const CustomSelect: React.FC<CustomSelectProps> = ({ icon: Icon, prefix, options, value, onChange }) => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <div className="relative" ref={dropdownRef}>
      <div 
        className={`w-full bg-gray-50/80 border rounded-2xl py-3.5 pl-12 pr-10 transition-all cursor-pointer flex items-center h-[54px] ${isOpen ? 'border-primary-500 bg-white ring-2 ring-primary-500/20' : 'border-gray-100 hover:border-gray-300'}`}
        onClick={() => setIsOpen(!isOpen)}
      >
        {Icon && <Icon className={`absolute left-4 top-1/2 -translate-y-1/2 transition-colors ${isOpen ? 'text-primary-600' : 'text-primary-500'}`} size={20} />}
        {prefix && <div className={`absolute left-4 top-1/2 -translate-y-1/2 font-bold transition-colors ${isOpen ? 'text-primary-600' : 'text-primary-500'}`}>{prefix}</div>}
        
        <span className="text-gray-800 font-medium truncate select-none">{value}</span>
        
        <ChevronDown 
          className={`absolute right-4 top-1/2 -translate-y-1/2 transition-all duration-300 pointer-events-none ${isOpen ? 'rotate-180 text-primary-500' : 'text-gray-400'}`} 
          size={20} 
        />
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, y: 10, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 10, scale: 0.98 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
            className="absolute z-50 top-[calc(100%+8px)] left-0 right-0 bg-white border border-gray-100 rounded-2xl shadow-[0_20px_40px_-15px_rgba(0,0,0,0.1)] overflow-hidden origin-top"
          >
            <div className="py-2 max-h-[240px] overflow-y-auto custom-scrollbar">
              {options.map((option) => (
                <div 
                  key={option}
                  className={`px-5 py-3 cursor-pointer transition-colors flex items-center justify-between ${value === option ? 'bg-primary-50 text-primary-700 font-bold' : 'text-gray-600 font-medium hover:bg-gray-50 hover:text-gray-900'}`}
                  onClick={() => {
                    onChange(option);
                    setIsOpen(false);
                  }}
                >
                  {option}
                  {value === option && (
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      className="w-2 h-2 rounded-full bg-primary-600"
                    />
                  )}
                </div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default CustomSelect;
