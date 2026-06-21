import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-white border-t border-gray-100 pt-16 pb-8">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          <div className="col-span-1 md:col-span-1">
            <Link to="/" className="flex items-center gap-2 mb-6">
              <div className="w-10 h-10 bg-primary-600 rounded-xl flex items-center justify-center text-white font-sans font-bold text-xl">
                D
              </div>
              <span className="font-sans font-bold text-2xl tracking-tight text-dark">
                DreamHome
              </span>
            </Link>
            <p className="text-gray-500 mb-6 leading-relaxed">
              Discover luxurious properties, apartments, villas, and commercial spaces in the best locations worldwide.
            </p>
          </div>
          
          <div>
            <h4 className="font-sans font-bold text-lg mb-6 text-dark">Quick Links</h4>
            <ul className="flex flex-col gap-3">
              <li><Link to="/properties" className="text-gray-500 hover:text-primary-600 transition-colors">Properties</Link></li>
              <li><Link to="/agents" className="text-gray-500 hover:text-primary-600 transition-colors">Our Agents</Link></li>
              <li><Link to="/about" className="text-gray-500 hover:text-primary-600 transition-colors">About Us</Link></li>
              <li><Link to="/contact" className="text-gray-500 hover:text-primary-600 transition-colors">Contact Us</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-sans font-bold text-lg mb-6 text-dark">Services</h4>
            <ul className="flex flex-col gap-3">
              <li><Link to="/buy" className="text-gray-500 hover:text-primary-600 transition-colors">Buy a Property</Link></li>
              <li><Link to="/rent" className="text-gray-500 hover:text-primary-600 transition-colors">Rent a Property</Link></li>
              <li><Link to="/sell" className="text-gray-500 hover:text-primary-600 transition-colors">Sell a Property</Link></li>
              <li><Link to="/mortgage" className="text-gray-500 hover:text-primary-600 transition-colors">Mortgage Calculator</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-sans font-bold text-lg mb-6 text-dark">Contact</h4>
            <ul className="flex flex-col gap-3 text-gray-500">
              <li>123 Luxury Avenue, Beverly Hills, CA 90210</li>
              <li>contact@dreamhome.com</li>
              <li>+1 (800) 123-4567</li>
            </ul>
          </div>
        </div>
        
        <div className="pt-8 border-t border-gray-100 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-400">
          <p>&copy; {new Date().getFullYear()} DreamHome. All rights reserved.</p>
          <div className="flex gap-6">
            <Link to="/privacy" className="hover:text-primary-600">Privacy Policy</Link>
            <Link to="/terms" className="hover:text-primary-600">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
