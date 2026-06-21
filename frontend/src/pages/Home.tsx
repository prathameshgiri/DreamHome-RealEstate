import { useState } from 'react';
import { motion } from 'framer-motion';
import { Search, MapPin, Home as HomeIcon, ArrowRight, Filter, Building, CheckCircle, Shield, Award, Play, Star } from 'lucide-react';
import CustomSelect from '../components/ui/CustomSelect';
import PropertyCard from '../components/property/PropertyCard';
import AgentCard from '../components/agent/AgentCard';

const featuredProperties = [
  {
    id: 1,
    title: 'Skyline Luxury Penthouse',
    location: 'Worli Sea Face, Mumbai',
    price: '₹12.5 Cr',
    beds: 4,
    baths: 5,
    sqft: '4,500',
    image: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
    tag: 'Premium'
  },
  {
    id: 2,
    title: 'Modern Oasis Villa',
    location: 'Jubilee Hills, Hyderabad',
    price: '₹8.2 Cr',
    beds: 5,
    baths: 6,
    sqft: '6,200',
    image: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
    tag: 'Featured'
  },
  {
    id: 3,
    title: 'The Crown Apartment',
    location: 'Koregaon Park, Pune',
    price: '₹3.8 Cr',
    beds: 3,
    baths: 3,
    sqft: '2,100',
    image: 'https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
    tag: 'New'
  }
];

const topAgents = [
  {
    id: 1,
    name: 'Aarav Sharma',
    role: 'Senior Luxury Consultant',
    image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    propertiesSold: 124,
    experience: '8 Years',
    rating: 4.9
  },
  {
    id: 2,
    name: 'Priya Patel',
    role: 'Residential Specialist',
    image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    propertiesSold: 98,
    experience: '5 Years',
    rating: 4.8
  },
  {
    id: 3,
    name: 'Vikram Singh',
    role: 'Commercial Director',
    image: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    propertiesSold: 215,
    experience: '12 Years',
    rating: 5.0
  }
];

const Home = () => {
  const [propertyType, setPropertyType] = useState('All Types');
  const [priceRange, setPriceRange] = useState('Any Price');

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative min-h-[85vh] py-32 md:py-0 flex items-center justify-center">
        {/* Background */}
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/20 to-transparent z-10" />
          <img 
            src="/images/hero.png" 
            alt="Luxury Dream Home" 
            className="w-full h-full object-cover object-top"
          />
        </div>

        {/* Hero Content */}
        <div className="relative z-20 container-custom flex flex-col items-start text-left mt-16 w-full">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="inline-block px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white/90 text-xs font-bold tracking-widest uppercase mb-6 shadow-sm"
          >
            Premium Real Estate Platform
          </motion.div>

          <motion.h1 
            className="text-5xl md:text-7xl lg:text-8xl font-sans font-bold text-white mb-6 leading-tight"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Find Your <br className="hidden md:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-300">Dream Home</span> Today
          </motion.h1>

          <motion.p 
            className="text-lg md:text-xl text-white/90 max-w-2xl font-light mb-12 leading-relaxed"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            Discover luxurious properties, apartments, villas, and commercial spaces in the best locations worldwide.
          </motion.p>

          <motion.div 
            className="flex flex-col sm:flex-row gap-5"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            <button className="bg-white text-[#111827] px-5 py-2.5 rounded-full text-sm font-bold tracking-wide transition-all shadow-lg hover:shadow-xl hover:bg-gray-50 flex items-center justify-center gap-2">
              Explore Properties
            </button>
            <button className="bg-white/10 backdrop-blur-md border border-white/30 text-white px-5 py-2.5 rounded-full text-sm font-bold tracking-wide transition-all hover:bg-white/20 flex items-center justify-center gap-2">
              Book Consultation
            </button>
          </motion.div>
        </div>
      </section>

      {/* Floating Search Box */}
      <div className="relative z-30 px-4 mt-6 md:-mt-16 w-full max-w-5xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1 }}
        >
          <div className="glass bg-white/95 backdrop-blur-2xl rounded-3xl p-5 md:p-8 shadow-[0_20px_50px_-12px_rgba(0,0,0,0.15)] border border-white/60">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4 items-end">
                <div className="flex flex-col gap-2">
                  <label className="text-sm font-bold text-gray-600 pl-2 uppercase tracking-wider text-xs">Location</label>
                  <div className="relative group">
                    <MapPin className="absolute left-4 top-1/2 -translate-y-1/2 text-primary-500 transition-colors" size={20} />
                    <input 
                      type="text" 
                      placeholder="City, Neighborhood..." 
                      className="w-full bg-gray-50/80 border border-gray-100 rounded-2xl py-3.5 pl-12 pr-4 focus:ring-2 focus:ring-primary-500 focus:bg-white transition-all outline-none font-medium"
                    />
                  </div>
                </div>
                
                <div className="flex flex-col gap-2">
                  <label className="text-sm font-bold text-gray-600 pl-2 uppercase tracking-wider text-xs">Property Type</label>
                  <CustomSelect 
                    icon={HomeIcon}
                    options={['All Types', 'Apartments', 'Villas', 'Commercial']}
                    value={propertyType}
                    onChange={setPropertyType}
                  />
                </div>
                
                <div className="flex flex-col gap-2">
                  <label className="text-sm font-bold text-gray-600 pl-2 uppercase tracking-wider text-xs">Price Range</label>
                  <CustomSelect 
                    prefix="₹"
                    options={['Any Price', '50L - 1Cr', '1Cr - 5Cr', '5Cr+']}
                    value={priceRange}
                    onChange={setPriceRange}
                  />
                </div>

                <div className="flex gap-3">
                  <button className="bg-gray-50 hover:bg-gray-100 border border-gray-100 text-gray-700 p-3.5 rounded-2xl transition-colors flex items-center justify-center shadow-sm">
                    <Filter size={22} />
                  </button>
                  <button className="bg-primary-600 hover:bg-primary-700 text-white py-2.5 px-5 rounded-2xl text-sm transition-all shadow-lg hover:shadow-primary-600/30 flex-grow flex items-center justify-center gap-2 font-bold hover:-translate-y-0.5">
                    <Search size={20} />
                    Search
                  </button>
                </div>
              </div>
            </div>
        </motion.div>
      </div>

      {/* Statistics Section */}
      <section className="pt-20 md:pt-32 pb-20 bg-white relative z-10">
        <div className="container-custom">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { number: '15,000+', label: 'Properties' },
              { number: '5,000+', label: 'Happy Customers' },
              { number: '250+', label: 'Cities' },
              { number: '20+', label: 'Years Experience' }
            ].map((stat, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1, duration: 0.6 }}
                className="text-center group"
              >
                <h3 className="text-4xl md:text-5xl font-sans font-extrabold text-primary-600 mb-2 group-hover:scale-105 transition-transform">{stat.number}</h3>
                <p className="text-gray-500 font-bold uppercase tracking-wider text-sm">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Properties Section */}
      <section className="py-20 bg-gray-50 relative z-10">
        <div className="container-custom">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
            <div className="max-w-2xl">
              <h2 className="text-4xl md:text-5xl font-sans font-extrabold text-dark mb-4">Featured Properties</h2>
              <p className="text-gray-500 font-medium text-lg">Explore our handpicked selection of premium properties.</p>
            </div>
            <button className="flex items-center gap-2 text-primary-600 font-bold hover:text-primary-700 transition-colors group">
              View All Properties 
              <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredProperties.map((property, idx) => (
              <PropertyCard key={property.id} property={property} index={idx} />
            ))}
          </div>
        </div>
      </section>

      {/* 1. Explore Top Cities */}
      <section className="py-20 bg-white relative z-10">
        <div className="container-custom">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-4xl md:text-5xl font-sans font-extrabold text-dark mb-4">Explore Top Cities</h2>
            <p className="text-gray-500 font-medium text-lg">Find exclusive properties in India's most sought-after locations.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { name: 'Mumbai', count: '1,240', image: 'https://images.unsplash.com/photo-1570168007204-dfb528c6958f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80' },
              { name: 'Bangalore', count: '850', image: 'https://images.unsplash.com/photo-1596176530529-78163a4f7af2?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80' },
              { name: 'Pune', count: '620', image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80' },
              { name: 'Hyderabad', count: '430', image: 'https://images.unsplash.com/photo-1449844908441-8829872d2607?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80' },
            ].map((city, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1, duration: 0.6 }}
                className="relative h-80 rounded-[1.5rem] overflow-hidden group cursor-pointer shadow-md hover:shadow-xl transition-all"
              >
                <img src={city.image} alt={city.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
                <div className="absolute bottom-0 left-0 p-6">
                  <h3 className="text-2xl font-bold text-white mb-1">{city.name}</h3>
                  <p className="text-white/80 text-sm font-medium">{city.count} Properties</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 2. How It Works */}
      <section className="py-20 bg-gray-50 relative z-10">
        <div className="container-custom">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-4xl md:text-5xl font-sans font-extrabold text-dark mb-4">How It Works</h2>
            <p className="text-gray-500 font-medium text-lg">A simple, transparent process to finding your perfect home.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
            {/* Connecting Line */}
            <div className="hidden md:block absolute top-1/2 left-[15%] right-[15%] h-0.5 bg-gray-200 -translate-y-1/2 z-0"></div>
            
            {[
              { icon: Search, title: 'Search & Filter', desc: 'Browse thousands of verified luxury properties in your preferred locations.' },
              { icon: Building, title: 'Visit & Inspect', desc: 'Schedule a tour with our elite agents to experience the property firsthand.' },
              { icon: CheckCircle, title: 'Secure & Close', desc: 'Complete the paperwork seamlessly with our end-to-end legal support.' }
            ].map((step, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.2, duration: 0.6 }}
                className="relative z-10 flex flex-col items-center text-center bg-white p-8 rounded-[2rem] shadow-sm hover:shadow-xl transition-all border border-gray-100"
              >
                <div className="w-20 h-20 bg-primary-50 rounded-full flex items-center justify-center text-primary-600 mb-6 shadow-sm">
                  <step.icon size={32} />
                </div>
                <h3 className="text-2xl font-bold text-dark mb-3">{step.title}</h3>
                <p className="text-gray-500 leading-relaxed text-sm">{step.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. Why Choose Us */}
      <section className="py-20 bg-white relative z-10">
        <div className="container-custom">
          <div className="flex flex-col lg:flex-row gap-16 items-center">
            <div className="flex-1">
              <motion.div 
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="relative rounded-[2rem] overflow-hidden shadow-2xl h-[600px]"
              >
                <img src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80" alt="Luxury Home" className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-tr from-black/60 to-transparent"></div>
                <button className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-20 h-20 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center text-white hover:bg-white hover:text-primary-600 transition-all shadow-[0_0_40px_rgba(255,255,255,0.3)]">
                  <Play size={28} className="ml-1" />
                </button>
              </motion.div>
            </div>
            <div className="flex-1">
              <h2 className="text-4xl md:text-5xl font-sans font-extrabold text-dark mb-6 leading-tight">Why We Are The Industry Leaders</h2>
              <p className="text-gray-500 font-medium text-lg mb-10 leading-relaxed">We provide a seamless, transparent, and luxurious experience from your very first search to the final signature.</p>
              
              <div className="flex flex-col gap-8">
                {[
                  { icon: Shield, title: 'Verified Listings', desc: 'Every property is rigorously inspected and legally verified by our team.' },
                  { icon: Award, title: 'Best Price Guarantee', desc: 'Our expert negotiators ensure you get the best market value.' },
                  { icon: HomeIcon, title: 'Premium Portfolio', desc: 'Exclusive access to off-market luxury homes and penthouses.' }
                ].map((item, idx) => (
                  <motion.div 
                    key={idx}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: idx * 0.15 }}
                    className="flex gap-5 group"
                  >
                    <div className="w-14 h-14 shrink-0 rounded-2xl bg-gray-50 border border-gray-100 flex items-center justify-center text-primary-600 group-hover:bg-primary-600 group-hover:text-white transition-colors shadow-sm">
                      <item.icon size={24} />
                    </div>
                    <div>
                      <h4 className="text-xl font-bold text-dark mb-1">{item.title}</h4>
                      <p className="text-gray-500 text-sm leading-relaxed">{item.desc}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Meet Our Top Agents */}
      <section className="py-20 bg-gray-50 relative z-10">
        <div className="container-custom">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
            <div className="max-w-2xl">
              <h2 className="text-4xl md:text-5xl font-sans font-extrabold text-dark mb-4">Meet Our Top Agents</h2>
              <p className="text-gray-500 font-medium text-lg">Work with the industry's most successful luxury consultants.</p>
            </div>
            <button className="flex items-center gap-2 text-primary-600 font-bold hover:text-primary-700 transition-colors group">
              View All Agents 
              <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {topAgents.map((agent, idx) => (
              <AgentCard key={agent.id} agent={agent} index={idx} />
            ))}
          </div>
        </div>
      </section>

      {/* 4.5. Client Feedback / Testimonials */}
      <section className="py-20 bg-white relative z-10">
        <div className="container-custom">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-4xl md:text-5xl font-sans font-extrabold text-dark mb-4">What Our Clients Say</h2>
            <p className="text-gray-500 font-medium text-lg">Read the experiences of homeowners who trusted us with their dreams.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                name: 'Rajiv Mehta',
                role: 'CEO, TechCorp',
                text: 'The team at DreamHome made finding our sea-facing penthouse in Mumbai an absolute breeze. Their verified listings and expert negotiation saved us both time and money.',
                image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80',
                rating: 5
              },
              {
                name: 'Sneha Kapoor',
                role: 'Fashion Designer',
                text: 'I was looking for a very specific modern villa in Hyderabad, and they delivered exactly what I envisioned. The legal team made the paperwork completely stress-free.',
                image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80',
                rating: 5
              },
              {
                name: 'Amit Singhal',
                role: 'Investment Banker',
                text: 'As an investor, I need quick, reliable data and premium off-market properties. This platform is my go-to for all luxury real estate investments.',
                image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80',
                rating: 5
              }
            ].map((feedback, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.15 }}
                className="bg-gray-50 p-8 rounded-[2rem] border border-gray-100 shadow-sm hover:shadow-xl transition-all relative flex flex-col h-full"
              >
                <div className="flex text-yellow-400 mb-6 gap-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={16} className={i < Math.floor(feedback.rating) ? 'fill-yellow-400 text-yellow-400' : 'fill-gray-200 text-gray-200'} />
                  ))}
                </div>
                <p className="text-gray-600 font-medium mb-8 leading-relaxed italic">"{feedback.text}"</p>
                
                <div className="flex items-center gap-4 mt-auto">
                  <img src={feedback.image} alt={feedback.name} className="w-12 h-12 rounded-full object-cover shadow-sm" />
                  <div>
                    <h4 className="font-bold text-dark">{feedback.name}</h4>
                    <p className="text-xs font-bold uppercase tracking-wider text-primary-600 mt-0.5">{feedback.role}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. Final CTA Banner */}
      <section className="py-24 relative z-10 overflow-hidden mx-4 md:mx-auto max-w-7xl rounded-[2rem] mb-20 shadow-2xl">
        <div className="absolute inset-0 z-0">
          <img src="https://images.unsplash.com/photo-1512917774080-9991f1c4c750?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80" alt="Luxury Villa" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-dark/80 backdrop-blur-sm"></div>
        </div>
        <div className="relative z-10 container-custom text-center max-w-3xl mx-auto">
          <h2 className="text-4xl md:text-6xl font-sans font-extrabold text-white mb-6 leading-tight">Ready to Find Your Dream Home?</h2>
          <p className="text-white/80 text-lg md:text-xl font-medium mb-10 leading-relaxed">Join thousands of happy homeowners who found their perfect match through our premium platform.</p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <button className="bg-primary-600 hover:bg-primary-700 text-white px-8 py-3 rounded-2xl text-sm font-bold transition-colors shadow-lg flex items-center justify-center gap-2">
              Start Exploring
              <ArrowRight size={18} />
            </button>
            <button className="bg-white/10 hover:bg-white/20 border border-white/20 text-white px-8 py-3 rounded-2xl text-sm font-bold transition-all shadow-lg">
              Contact an Agent
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
