import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Search, User } from 'lucide-react';
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();
  
  const isHomePage = location.pathname === '/';
  const isNavSolid = isScrolled || !isHomePage;

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${isNavSolid ? 'glass py-3 shadow-sm' : 'bg-transparent py-5'}`}>
      <div className="container-custom flex justify-between items-center">
        <Link to="/" className="flex items-center gap-2">
          <div className="w-10 h-10 bg-primary-600 rounded-xl flex items-center justify-center text-white font-sans font-bold text-xl">
            D
          </div>
          <span className={`font-sans font-bold text-2xl tracking-tight transition-colors ${isNavSolid ? 'text-dark' : 'text-white'}`}>
            DreamHome
          </span>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8 font-medium">
          <Link to="/" className={`transition-colors ${isNavSolid ? 'text-gray-700 hover:text-primary-600' : 'text-white/90 hover:text-white'}`}>Home</Link>
          <Link to="/properties" className={`transition-colors ${isNavSolid ? 'text-gray-700 hover:text-primary-600' : 'text-white/90 hover:text-white'}`}>Properties</Link>
          <Link to="/agents" className={`transition-colors ${isNavSolid ? 'text-gray-700 hover:text-primary-600' : 'text-white/90 hover:text-white'}`}>Agents</Link>
          <Link to="/about" className={`transition-colors ${isNavSolid ? 'text-gray-700 hover:text-primary-600' : 'text-white/90 hover:text-white'}`}>About</Link>
          <Link to="/contact" className={`transition-colors ${isNavSolid ? 'text-gray-700 hover:text-primary-600' : 'text-white/90 hover:text-white'}`}>Contact</Link>
        </div>

        <div className="hidden md:flex items-center gap-4">
          <button className={`flex items-center gap-2 font-medium transition-colors ${isNavSolid ? 'text-gray-700 hover:text-primary-600' : 'text-white/90 hover:text-white'}`}>
            <Search size={20} />
            Search
          </button>
          <button className={`px-4 py-2 text-sm rounded-full transition-all shadow-md hover:shadow-lg flex items-center gap-2 font-bold ${isNavSolid ? 'bg-dark text-white hover:bg-primary-600' : 'bg-white text-dark hover:bg-primary-600 hover:text-white'}`}>
            <User size={16} />
            Sign In
          </button>
        </div>

        {/* Mobile Menu Toggle */}
        <button 
          className={`md:hidden ${isNavSolid ? 'text-dark' : 'text-white'}`}
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-0 w-full glass shadow-xl md:hidden border-t border-white/20"
          >
            <div className="flex flex-col p-6 gap-4">
              <Link to="/" className="text-lg font-medium text-gray-800" onClick={() => setMobileMenuOpen(false)}>Home</Link>
              <Link to="/properties" className="text-lg font-medium text-gray-800" onClick={() => setMobileMenuOpen(false)}>Properties</Link>
              <Link to="/agents" className="text-lg font-medium text-gray-800" onClick={() => setMobileMenuOpen(false)}>Agents</Link>
              <Link to="/about" className="text-lg font-medium text-gray-800" onClick={() => setMobileMenuOpen(false)}>About</Link>
              <Link to="/contact" className="text-lg font-medium text-gray-800" onClick={() => setMobileMenuOpen(false)}>Contact</Link>
              <div className="h-px bg-gray-200 my-2"></div>
              <button className="bg-dark text-white w-full py-2 text-sm rounded-xl font-bold">
                Sign In
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
