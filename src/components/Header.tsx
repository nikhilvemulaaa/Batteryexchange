import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Battery, Menu, X, Zap } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { path: '/', label: 'Home' },
    { path: '/stations', label: 'Station Locator' },
    { path: '/assistant', label: 'AI Assistant' },
    { path: '/benefits', label: 'Benefits' },
    { path: '/privacy', label: 'Privacy' },
  ];

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled 
          ? 'bg-dark-900/90 backdrop-blur-md border-b border-dark-700' 
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <div className="relative">
              <Battery className="h-8 w-8 text-electric-400" />
              <Zap className="h-4 w-4 text-yellow-400 absolute -top-1 -right-1" />
            </div>
            <span className="text-xl font-bold text-white">
              Bharat<span className="text-electric-400">Charge</span>
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`relative py-2 px-3 text-sm font-medium transition-colors duration-200 ${
                  location.pathname === item.path
                    ? 'text-electric-400'
                    : 'text-gray-300 hover:text-white'
                }`}
              >
                {item.label}
                {location.pathname === item.path && (
                  <motion.div
                    layoutId="activeTab"
                    className="absolute inset-x-0 -bottom-1 h-0.5 bg-electric-400"
                  />
                )}
              </Link>
            ))}
          </nav>

          {/* CTA Button */}
          <div className="hidden md:block">
            <Link
              to="/stations"
              className="bg-electric-400 hover:bg-electric-500 text-dark-900 px-4 py-2 rounded-lg font-medium transition-colors duration-200"
            >
              Find Stations
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 text-gray-300 hover:text-white"
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        <motion.div
          initial={false}
          animate={isMenuOpen ? { height: 'auto', opacity: 1 } : { height: 0, opacity: 0 }}
          className="md:hidden overflow-hidden"
        >
          <div className="py-4 space-y-2">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                onClick={() => setIsMenuOpen(false)}
                className={`block py-2 px-3 text-sm font-medium transition-colors duration-200 ${
                  location.pathname === item.path
                    ? 'text-electric-400 bg-dark-800 rounded-lg'
                    : 'text-gray-300 hover:text-white hover:bg-dark-800 rounded-lg'
                }`}
              >
                {item.label}
              </Link>
            ))}
            <Link
              to="/stations"
              onClick={() => setIsMenuOpen(false)}
              className="block mt-4 bg-electric-400 hover:bg-electric-500 text-dark-900 px-4 py-2 rounded-lg font-medium text-center transition-colors duration-200"
            >
              Find Stations
            </Link>
          </div>
        </motion.div>
      </div>
    </motion.header>
  );
};

export default Header;