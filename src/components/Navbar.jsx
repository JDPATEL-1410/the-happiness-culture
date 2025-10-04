import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { FaBars, FaTimes, FaWhatsapp } from 'react-icons/fa';
import logo from '../assets/logo.png';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'About Us', path: '/about' },
    { name: 'Services', path: '/services' },
    { name: 'Calculator', path: '/calculator' },
    { name: 'Knowledge Hub', path: '/blog' },
    { name: 'Contact Us', path: '/contact' }
  ];

  const Logo = () => (
    <Link to="/" onClick={() => setIsOpen(false)}>
      <img src={logo} alt="The Happyness Culture" className="h-10 object-contain" />
    </Link>
  );

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-white shadow-md py-2' : 'bg-white py-4'
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
                className={`text-sm font-medium transition relative ${
                  location.pathname === item.path
                    ? 'text-success-500'
                    : 'text-gray-700 hover:text-success-500'
                }`}
              >
                {item.name}
              </Link>
            ))}

            {/* CTA Buttons */}
            <a
              href="https://wa.me/919876543210"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-2 bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-lg transition"
            >
              <FaWhatsapp />
              <span className="text-sm">WhatsApp</span>
            </a>
            <Link
              to="/login"
              className="bg-primary-500 hover:bg-primary-600 text-white px-4 py-2 rounded-lg text-sm"
            >
              Login
            </Link>
          </div>

          {/* Mobile Hamburger */}
          <button
            onClick={() => setIsOpen(true)}
            className="lg:hidden p-2 rounded-md text-gray-700 hover:text-success-500"
          >
            <FaBars size={24} />
          </button>
        </div>
      </div>

      {/* Mobile Side Drawer */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Dark overlay */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.5 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black z-40"
              onClick={() => setIsOpen(false)}
            />

            {/* Left Drawer */}
            <motion.div
              initial={{ x: '-100%' }}
              animate={{ x: 0 }}
              exit={{ x: '-100%' }}
              transition={{ type: 'tween', duration: 0.3 }}
              className="fixed top-0 left-0 w-72 h-full bg-white shadow-lg z-50 flex flex-col"
            >
              <div className="flex justify-between items-center px-4 py-4 border-b">
                <Logo />
                <button onClick={() => setIsOpen(false)}>
                  <FaTimes size={24} className="text-gray-700 hover:text-success-500" />
                </button>
              </div>

              {/* Nav Links */}
              <div className="flex-1 px-6 py-6 space-y-4">
                {navItems.map((item) => (
                  <Link
                    key={item.name}
                    to={item.path}
                    onClick={() => setIsOpen(false)}
                    className={`block text-base font-medium ${
                      location.pathname === item.path
                        ? 'text-success-500'
                        : 'text-gray-700 hover:text-success-500'
                    }`}
                  >
                    {item.name}
                  </Link>
                ))}
              </div>

              {/* CTA at bottom */}
              <div className="px-6 py-4 border-t space-y-3">
                <a
                  href="https://wa.me/919876543210"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center bg-green-500 text-white py-2 rounded-lg"
                >
                  <FaWhatsapp className="mr-2" /> WhatsApp
                </a>
                <Link
                  to="/login"
                  onClick={() => setIsOpen(false)}
                  className="block text-center bg-primary-500 text-white py-2 rounded-lg"
                >
                  Login
                </Link>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
