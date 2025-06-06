import React from 'react';
import { Link } from 'react-router-dom';
import { Battery, Zap, Mail, Phone, MapPin, Twitter, Linkedin, Github } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-dark-900 border-t border-dark-700">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="relative">
                <Battery className="h-8 w-8 text-electric-400" />
                <Zap className="h-4 w-4 text-yellow-400 absolute -top-1 -right-1" />
              </div>
              <span className="text-xl font-bold text-white">
                Bharat<span className="text-electric-400">Charge</span>
              </span>
            </div>
            <p className="text-gray-400 text-sm max-w-sm">
              Revolutionizing India's EV ecosystem with smart battery exchange solutions. 
              Find, exchange, and power your journey sustainably.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-electric-400 transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-electric-400 transition-colors">
                <Linkedin className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-electric-400 transition-colors">
                <Github className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-semibold mb-4">Platform</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/stations" className="text-gray-400 hover:text-white transition-colors text-sm">
                  Station Locator
                </Link>
              </li>
              <li>
                <Link to="/assistant" className="text-gray-400 hover:text-white transition-colors text-sm">
                  AI Assistant
                </Link>
              </li>
              <li>
                <Link to="/benefits" className="text-gray-400 hover:text-white transition-colors text-sm">
                  Benefits
                </Link>
              </li>
              <li>
                <Link to="/privacy" className="text-gray-400 hover:text-white transition-colors text-sm">
                  Privacy Policy
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-white font-semibold mb-4">Services</h3>
            <ul className="space-y-2 text-sm text-gray-400">
              <li>Battery Exchange</li>
              <li>Station Verification</li>
              <li>Real-time Tracking</li>
              <li>Government Integration</li>
              <li>Mobile App</li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-white font-semibold mb-4">Contact</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-2 text-sm text-gray-400">
                <Mail className="h-4 w-4" />
                <span>support@bharatcharge.in</span>
              </div>
              <div className="flex items-center space-x-2 text-sm text-gray-400">
                <Phone className="h-4 w-4" />
                <span>+91 1800-CHARGE</span>
              </div>
              <div className="flex items-center space-x-2 text-sm text-gray-400">
                <MapPin className="h-4 w-4" />
                <span>New Delhi, India</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-dark-700 mt-8 pt-8 flex flex-col sm:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm">
            © 2024 BharatCharge. All rights reserved. Made in India 🇮🇳
          </p>
          <div className="flex space-x-6 mt-4 sm:mt-0">
            <Link to="/privacy" className="text-gray-400 hover:text-white text-sm transition-colors">
              Privacy Policy
            </Link>
            <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">
              Terms of Service
            </a>
            <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">
              Cookies
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;