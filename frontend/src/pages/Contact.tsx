import { MapPin, Phone, Mail, Clock } from 'lucide-react';

const Contact = () => {
  return (
    <div className="bg-gray-50 min-h-screen pt-24 pb-20">
      <div className="container-custom">
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <div className="inline-block px-4 py-1.5 rounded-full bg-primary-50 text-primary-600 font-bold text-sm mb-4">
            Contact Us
          </div>
          <h1 className="text-4xl md:text-5xl font-sans font-extrabold text-dark mb-6 leading-tight">We're Here to Help You Find Home</h1>
          <p className="text-gray-500 font-medium text-lg">Reach out to our elite team of luxury consultants to begin your journey toward your perfect property.</p>
        </div>

        {/* Contact Section from About page (Standalone version) */}
        <div className="bg-dark rounded-3xl overflow-hidden shadow-2xl max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2">
            
            {/* Contact Form */}
            <div className="p-10 md:p-16">
              <h2 className="text-3xl font-extrabold text-white mb-8">Send a Message</h2>
              
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
                <button type="button" className="bg-primary-600 hover:bg-primary-700 text-white text-sm font-bold py-3 rounded-xl transition-colors mt-2 shadow-lg">
                  Submit Inquiry
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

export default Contact;
