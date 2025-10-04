import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

import { 
  FaPhone, 
  FaEnvelope, 
  FaMapMarkerAlt, 
  FaWhatsapp,
  FaLinkedin,
  FaInstagram,
  FaYoutube,
  FaArrowUp
} from 'react-icons/fa';

import logo from '../assets/footerlogo.png';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const quickLinks = [
    { name: 'Home', path: '/' },
    { name: 'About Us', path: '/about' },
    { name: 'Services', path: '/services' },
    { name: 'Calculator', path: '/calculator' },
    { name: 'Knowledge Hub', path: '/blog' },
    { name: 'Contact Us', path: '/contact' }
  ];

  const services = [
    'Financial Planning',
    'Mutual Funds & SIP',
    'Tax Saving Schemes',
    'Insurance Planning',
    'Retirement Planning',
    'Wealth Management'
  ];

  const contactInfo = [
    { icon: FaPhone, text: '+91 93228 35288', href: 'tel:+919322835288' },
    { icon: FaEnvelope, text: 'info@thehappynessculture.com', href: 'mailto:info@thehappynessculture.com' },
    { icon: FaMapMarkerAlt, text: 'Flat 5, 2nd Floor, Yash Society, Off Ranade Road, Opp Nirmal Nursing Home, Mumbai, Maharashtra, 400028, India' }
  ];

  const socialLinks = [
    { icon: FaLinkedin, href: 'https://linkedin.com/company/thehappynessculture', color: 'hover:text-blue-600' },
    { icon: FaInstagram, href: 'https://instagram.com/thehappynessculture', color: 'hover:text-pink-600' },
    { icon: FaYoutube, href: 'https://youtube.com/@thehappynessculture', color: 'hover:text-red-600' },
    { icon: FaWhatsapp, href: 'https://wa.me/919322835288', color: 'hover:text-green-600' }
  ];

  return (
    <footer className="bg-primary-500 text-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 hero-bg opacity-10"></div>
      
      {/* Main Footer Content */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          
          {/* Company Info */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="mb-6 flex justify-center">
              <img
                src={logo}
                alt="The Happyness Culture"
                className="h-28 object-contain"
              />
            </div>
            <p className="text-gray-300 mb-6 leading-relaxed max-w-xs">
              Your trusted partner in financial growth. We help you build wealth through smart
              investment strategies and personalized financial planning.
            </p>

            {/* Social Links */}
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  className={`w-10 h-10 bg-white/10 rounded-full flex items-center justify-center ${social.color} transition-all duration-300 hover:bg-white/20`}
                >
                  <social.icon className="text-lg" />
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <h3 className="text-lg font-semibold mb-6">Quick Links</h3>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <Link
                    to={link.path}
                    className="footer-link flex items-center group"
                  >
                    <span className="w-1.5 h-1.5 bg-success-500 rounded-full mr-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Services */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h3 className="text-lg font-semibold mb-6">Our Services</h3>
            <ul className="space-y-3">
              {services.map((service, index) => (
                <li key={index} className="footer-link flex items-center group">
                  <span className="w-1.5 h-1.5 bg-success-500 rounded-full mr-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                  {service}
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <h3 className="text-lg font-semibold mb-6">Contact Info</h3>
            <div className="space-y-5">
              {contactInfo.map((contact, index) => (
                <div key={index} className="flex items-start space-x-3">
                  {/* Circle icon */}
                  <div className="w-10 h-10 flex items-center justify-center rounded-full bg-white/10 text-success-400">
                    <contact.icon className="text-base" />
                  </div>
                  {/* Text */}
                  <div className="flex-1 text-sm leading-relaxed text-gray-300">
                    {contact.href ? (
                      <a
                        href={contact.href}
                        className="hover:text-success-300 transition-colors duration-300"
                      >
                        {contact.text}
                      </a>
                    ) : (
                      <span>{contact.text}</span>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Certifications */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="border-t border-white/20 mt-12 pt-8"
        >
          <div className="flex flex-wrap justify-center items-center gap-8 mb-6">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-success-500 rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-xs">S</span>
              </div>
              <span className="text-sm">SEBI Registered</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-xs">ISO</span>
              </div>
              <span className="text-sm">ISO 27001:2013</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-yellow-500 rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-xs">★</span>
              </div>
              <span className="text-sm">5-Star Rated</span>
            </div>
          </div>
        </motion.div>

        {/* Regulatory & Risk Disclosure */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          viewport={{ once: true }}
          className="bg-black/70 text-gray-300 text-xs leading-relaxed p-6 rounded-lg mt-6 space-y-4"
        >
          <p>
            <strong>Risk Factors –</strong> Investments in Mutual Funds are subject to Market Risks. 
            Read all scheme related documents carefully before investing. Mutual Fund Schemes do not 
            assure or guarantee any returns. Past performance may or may not be sustained in future. 
            Investors should evaluate all risk factors, exit loads, and TER before making any decision. 
            We deal in Regular Plans only for Mutual Fund Schemes and earn a Trailing Commission on 
            client investments. Direct Plans are available at lower expense ratios; we do not deal in 
            Direct Plans and are not entitled to any commission therefrom.
          </p>

          <p>
            <strong>AMFI Registered Mutual Fund Distributor</strong> | ARN: <strong>119542</strong> | 
            Date of Registration: <strong>18-Feb-2023</strong> | Validity: <strong>14-Feb-2026</strong>
          </p>

          <p>
            © 2025 The Happyness Culture. All Rights Reserved. | 
            <Link to="/commission-disclosure" className="text-success-400 hover:text-success-500 ml-1">
              Commission Disclosure
            </Link> | 
            <a href="https://www.sebi.gov.in/filings/mutual-funds.html" 
              className="text-success-400 hover:text-success-500 ml-1" 
              target="_blank" 
              rel="noopener noreferrer">
              SID/SAI/KIM
            </a> | 
            <Link to="/privacy-policy" className="text-success-400 hover:text-success-500 ml-1">
              Privacy Policy
            </Link> | 
            <a href="/AMFI_Code-of-Conduct.pdf" 
              className="text-success-400 hover:text-success-500 ml-1" 
              target="_blank" 
              rel="noopener noreferrer">
              Code of Conduct
            </a>
          </p>

          <p>
            For grievances, contact our Grievance Officer: <strong>Aditya Palav</strong> | 
            Mobile: <a href="tel:+919322835288" className="text-success-400 hover:text-success-500">9322835288</a> | 
            Email: <a href="mailto:adityapalav@gmail.com" className="text-success-400 hover:text-success-500">adityapalav@gmail.com</a> | 
            Office: Flat 5, 2nd Floor, Yash Society, Off Ranade Road, Opp Nirmal Nursing Home, Mumbai, Maharashtra, 400028, India
          </p>
        </motion.div>

       {/* Bottom Bar */}
<div className="relative border-t border-white/20 mt-6">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
    <div className="flex flex-col md:flex-row justify-between items-center">
      <p className="text-gray-400 text-xs mb-2 md:mb-0 text-center md:text-left">
        © 2025 The Happyness Culture. All Rights Reserved. <br className="md:hidden" />
        Developed by{" "}
        <a
          href="https://ainatech.in/" // replace with real link
          target="_blank"
          rel="noopener noreferrer"
          className="text-success-400 hover:text-success-300 font-semibold"
        >
          AINA TECH SERVICES LLP
        </a>
      </p>
      <div className="flex space-x-6 text-xs mt-3 md:mt-0">
        <Link to="/privacy-policy" className="footer-link">Privacy Policy</Link>
        <Link to="/terms-of-service" className="footer-link">Terms of Service</Link>
        <Link to="/disclaimer" className="footer-link">Disclaimer</Link>
        <Link to="/commission-disclosure" className="footer-link">Commission Disclosure</Link>
      </div>
    </div>
  </div>
</div>

      {/* Scroll to Top Button */}
      <button
        onClick={scrollToTop}
        className="absolute right-6 bottom-6 w-10 h-10 bg-success-500 rounded-full flex items-center justify-center text-white hover:bg-success-600 transition-colors duration-300"
        aria-label="Scroll to top"
      >
        <FaArrowUp />
      </button>
      </div> {/* <-- Closing the main content div */}
    </footer>
  );
};

export default Footer;
