import { motion } from 'framer-motion';
import { Shield, TrendingUp, Users, MapPin, Phone, Mail, Clock } from 'lucide-react';

const About = () => {
  return (
    <div className="bg-gray-50 min-h-screen pt-24 pb-20">
      <div className="container-custom">
        {/* Story Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-24">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-block px-4 py-1.5 rounded-full bg-primary-50 text-primary-600 font-bold text-sm mb-4">
              Our Story
            </div>
            <h1 className="text-4xl md:text-5xl font-sans font-extrabold text-dark mb-6 leading-tight">Redefining Luxury Real Estate in India</h1>
            <p className="text-gray-600 text-lg mb-6 leading-relaxed">
              Founded in 2010, DreamHome emerged with a singular vision: to transform the luxury real estate experience. We believe that buying a premium property is not just a transaction, but the beginning of a legacy.
            </p>
            <p className="text-gray-600 text-lg mb-8 leading-relaxed">
              Our curated portfolio features only the most exceptional properties—from sky-high penthouses in Mumbai to sprawling villas in Goa. We pair this exclusive access with white-glove service, ensuring complete privacy, transparency, and satisfaction for our esteemed clients.
            </p>
            <div className="grid grid-cols-3 gap-6 pt-6 border-t border-gray-200">
              <div>
                <h4 className="text-3xl font-extrabold text-primary-600 mb-1">15+</h4>
                <p className="text-sm font-bold text-gray-500 uppercase tracking-wider">Years Exp.</p>
              </div>
              <div>
                <h4 className="text-3xl font-extrabold text-primary-600 mb-1">₹5K+</h4>
                <p className="text-sm font-bold text-gray-500 uppercase tracking-wider">Cr Volume</p>
              </div>
              <div>
                <h4 className="text-3xl font-extrabold text-primary-600 mb-1">10K+</h4>
                <p className="text-sm font-bold text-gray-500 uppercase tracking-wider">Happy Clients</p>
              </div>
            </div>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative h-[600px] rounded-3xl overflow-hidden shadow-2xl"
          >
            <img 
              src="https://images.unsplash.com/photo-1600607686527-6fb886090705?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80" 
              alt="Luxury Living" 
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
          </motion.div>
        </div>

        {/* Values Section */}
        <div className="mb-24">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-extrabold text-dark mb-4">Why Choose DreamHome</h2>
            <p className="text-gray-500 text-lg max-w-2xl mx-auto">We operate on a foundation of absolute integrity, utilizing cutting-edge technology and deep market insights.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100 text-center hover:-translate-y-2 transition-transform duration-300">
              <div className="w-16 h-16 bg-primary-50 rounded-2xl flex items-center justify-center text-primary-600 mx-auto mb-6">
                <Shield size={32} />
              </div>
              <h3 className="text-xl font-bold text-dark mb-3">Trust & Transparency</h3>
              <p className="text-gray-600">Complete transparency in legal verifications, pricing, and documentation. No hidden fees, ever.</p>
            </div>
            <div className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100 text-center hover:-translate-y-2 transition-transform duration-300">
              <div className="w-16 h-16 bg-primary-50 rounded-2xl flex items-center justify-center text-primary-600 mx-auto mb-6">
                <TrendingUp size={32} />
              </div>
              <h3 className="text-xl font-bold text-dark mb-3">Market Expertise</h3>
              <p className="text-gray-600">Our deep data-driven insights ensure you buy at the right price and sell at the highest value.</p>
            </div>
            <div className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100 text-center hover:-translate-y-2 transition-transform duration-300">
              <div className="w-16 h-16 bg-primary-50 rounded-2xl flex items-center justify-center text-primary-600 mx-auto mb-6">
                <Users size={32} />
              </div>
              <h3 className="text-xl font-bold text-dark mb-3">Elite Network</h3>
              <p className="text-gray-600">Access off-market premium listings through our extensive network of high-net-worth individuals.</p>
            </div>
          </div>
        </div>

        {/* Contact Section */}
        <div className="bg-dark rounded-3xl overflow-hidden shadow-2xl">
          <div className="grid grid-cols-1 lg:grid-cols-2">
            
            {/* Contact Form */}
            <div className="p-10 md:p-16">
              <div className="inline-block px-4 py-1.5 rounded-full bg-white/10 text-white font-bold text-sm mb-4">
                Get In Touch
              </div>
              <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-8">Let's Find Your Dream Home</h2>
              
              <form className="flex flex-col gap-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="flex flex-col gap-2">
                    <label className="text-white/70 text-sm font-bold uppercase tracking-wider">First Name</label>
                    <input type="text" className="bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-primary-500 transition-colors" placeholder="John" />
                  </div>
                  <div className="flex flex-col gap-2">
                    <label className="text-white/70 text-sm font-bold uppercase tracking-wider">Last Name</label>
                    <input type="text" className="bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-primary-500 transition-colors" placeholder="Doe" />
                  </div>
                </div>
                <div className="flex flex-col gap-2">
                  <label className="text-white/70 text-sm font-bold uppercase tracking-wider">Email Address</label>
                  <input type="email" className="bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-primary-500 transition-colors" placeholder="john@example.com" />
                </div>
                <div className="flex flex-col gap-2">
                  <label className="text-white/70 text-sm font-bold uppercase tracking-wider">Message</label>
                  <textarea rows={4} className="bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-primary-500 transition-colors resize-none" placeholder="I am looking for a penthouse in Mumbai..."></textarea>
                </div>
                <button className="bg-primary-600 hover:bg-primary-700 text-white text-sm font-bold py-3 rounded-xl transition-colors mt-2">
                  Send Message
                </button>
              </form>
            </div>

            {/* Contact Info & Map Box */}
            <div className="bg-white/5 p-10 md:p-16 border-l border-white/10 flex flex-col justify-center">
              <h3 className="text-2xl font-bold text-white mb-8">Contact Information</h3>
              
              <div className="flex flex-col gap-8">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-primary-600/20 flex items-center justify-center text-primary-500 shrink-0">
                    <MapPin size={24} />
                  </div>
                  <div>
                    <h4 className="text-white font-bold text-lg mb-1">Corporate Headquarters</h4>
                    <p className="text-white/70 leading-relaxed">Level 12, The Ruby Tower,<br/>Senapati Bapat Marg, Dadar West,<br/>Mumbai, Maharashtra 400028</p>
                  </div>
                </div>
                
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-xl bg-primary-600/20 flex items-center justify-center text-primary-500 shrink-0">
                    <Phone size={24} />
                  </div>
                  <div>
                    <h4 className="text-white font-bold text-lg mb-1">Phone Number</h4>
                    <p className="text-white/70">+91 22 6655 4433</p>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-xl bg-primary-600/20 flex items-center justify-center text-primary-500 shrink-0">
                    <Mail size={24} />
                  </div>
                  <div>
                    <h4 className="text-white font-bold text-lg mb-1">Email Address</h4>
                    <p className="text-white/70">contact@dreamhome.in</p>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-xl bg-primary-600/20 flex items-center justify-center text-primary-500 shrink-0">
                    <Clock size={24} />
                  </div>
                  <div>
                    <h4 className="text-white font-bold text-lg mb-1">Working Hours</h4>
                    <p className="text-white/70">Mon - Sat: 9:00 AM - 7:00 PM</p>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>

      </div>
    </div>
  );
};

export default About;
