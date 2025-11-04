import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { FaBars, FaTimes, FaWhatsapp, FaPhone } from 'react-icons/fa';
import logo from '../assets/logo.png';
import footerlogo from '../assets/footerlogo.png';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu when route changes
  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'About Us', path: '/about' },
    { name: 'Services', path: '/services' },
    { name: 'Calculator', path: '/calculator' },
    { name: 'Knowledge Hub', path: '/blog' },
    { name: 'Contact Us', path: '/contact' }
  ];

  const Logo = () => (
    <Link to="/" onClick={() => setIsOpen(false)} className="flex items-center">
      <img src={logo} alt="The Happyness Culture" className="h-12 sm:h-14 object-contain hover:scale-105 transition-transform duration-300" />
    </Link>
  );

  return (
    <>
      {/* Top Bar - Only on Desktop */}
      <div className="hidden lg:block bg-gradient-to-r from-primary-600 to-primary-700 text-white py-2">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center text-sm">
            <div className="flex items-center space-x-6">
              <a href="tel:+919322835288" className="flex items-center hover:text-success-300 transition-colors duration-300">
                <FaPhone className="mr-2 text-xs" />
                <span>+91 93228 35288</span>
              </a>
              <a href="mailto:info@thehappynessculture.com" className="hover:text-success-300 transition-colors duration-300">
                info@thehappynessculture.com
              </a>
            </div>
            <div className="flex items-center space-x-4">
              <span className="text-success-300 font-semibold">✓ SEBI Registered</span>
              <span className="text-success-300 font-semibold">✓ ISO Certified</span>
              <span className="text-success-300 font-semibold">ARN-119542</span>
            </div>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled 
            ? 'bg-white shadow-lg py-2 lg:top-0' 
            : 'bg-white py-3 lg:top-8'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center">
            {/* Logo */}
            <Logo />

            {/* Desktop Links */}
            <div className="hidden lg:flex items-center space-x-8">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  to={item.path}
                  className={`text-sm font-semibold transition-all duration-300 relative group ${
                    location.pathname === item.path
                      ? 'text-primary-600'
                      : 'text-gray-700 hover:text-primary-600'
                  }`}
                >
                  {item.name}
                  <span className={`absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-primary-500 to-success-500 transition-all duration-300 group-hover:w-full ${
                    location.pathname === item.path ? 'w-full' : ''
                  }`}></span>
                </Link>
              ))}
            </div>

            {/* Desktop CTA Buttons */}
            <div className="hidden lg:flex items-center space-x-3">
              <a
                href="https://wa.me/919322835288"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-2 bg-green-500 hover:bg-green-600 text-white px-5 py-2.5 rounded-xl transition-all duration-300 transform hover:scale-105 shadow-md hover:shadow-lg font-semibold"
              >
                <FaWhatsapp className="text-lg" />
                <span className="text-sm">WhatsApp</span>
              </a>
              <Link
                to="/contact"
                className="bg-gradient-to-r from-primary-500 to-primary-600 hover:from-primary-600 hover:to-primary-700 text-white px-5 py-2.5 rounded-xl text-sm font-semibold transition-all duration-300 transform hover:scale-105 shadow-md hover:shadow-lg"
              >
                Get Started
              </Link>
            </div>

            {/* Mobile Hamburger */}
            <button
              onClick={() => setIsOpen(true)}
              className="lg:hidden p-2 rounded-md text-gray-700 hover:text-primary-600 hover:bg-gray-100 transition-all duration-300"
            >
              <FaBars size={24} />
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Side Drawer */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Dark overlay */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.6 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black z-40 lg:hidden"
              onClick={() => setIsOpen(false)}
            />

            {/* Left Drawer */}
            <motion.div
              initial={{ x: '-100%' }}
              animate={{ x: 0 }}
              exit={{ x: '-100%' }}
              transition={{ type: 'tween', duration: 0.3 }}
              className="fixed top-0 left-0 w-80 h-full bg-white shadow-2xl z-50 flex flex-col lg:hidden"
            >
              {/* Header */}
              <div className="flex justify-between items-center px-6 py-5 bg-gradient-to-r from-primary-500 to-success-500">
                <img src={footerlogo} alt="The Happyness Culture" className="h-10 object-contain" />
                <button 
                  onClick={() => setIsOpen(false)}
                  className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center hover:bg-white/30 transition-colors duration-300"
                >
                  <FaTimes size={20} className="text-white" />
                </button>
              </div>

              {/* Nav Links */}
              <div className="flex-1 px-6 py-6 space-y-2 overflow-y-auto">
                {navItems.map((item, index) => (
                  <motion.div
                    key={item.name}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.05 }}
                  >
                    <Link
                      to={item.path}
                      onClick={() => setIsOpen(false)}
                      className={`block px-4 py-3 rounded-xl text-base font-semibold transition-all duration-300 ${
                        location.pathname === item.path
                          ? 'bg-gradient-to-r from-primary-500 to-success-500 text-white shadow-md'
                          : 'text-gray-700 hover:bg-gray-100'
                      }`}
                    >
                      {item.name}
                    </Link>
                  </motion.div>
                ))}
              </div>

              {/* Contact Info */}
              <div className="px-6 py-4 bg-gray-50 border-t space-y-3">
                <a
                  href="tel:+919322835288"
                  className="flex items-center text-gray-700 hover:text-primary-600 transition-colors duration-300"
                >
                  <FaPhone className="mr-3 text-primary-500" />
                  <span className="text-sm font-medium">+91 93228 35288</span>
                </a>
              </div>

              {/* CTA at bottom */}
              <div className="px-6 py-5 border-t space-y-3 bg-white">
                <a
                  href="https://wa.me/919322835288"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center bg-green-500 hover:bg-green-600 text-white py-3 rounded-xl font-semibold transition-all duration-300 transform active:scale-95"
                >
                  <FaWhatsapp className="mr-2 text-lg" /> WhatsApp Us
                </a>
                <Link
                  to="/contact"
                  onClick={() => setIsOpen(false)}
                  className="block text-center bg-gradient-to-r from-primary-500 to-success-500 text-white py-3 rounded-xl font-semibold transition-all duration-300 transform active:scale-95"
                >
                  Get Started
                </Link>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
