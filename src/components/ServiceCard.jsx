import React from 'react';
import { motion } from 'framer-motion';
import { FaArrowRight } from 'react-icons/fa';

const ServiceCard = ({ 
  icon: Icon, 
  title, 
  description, 
  features, 
  buttonText = "Learn More",
  buttonLink = "#",
  gradient = "from-primary-500 to-success-500",
  delay = 0 
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay }}
      viewport={{ once: true }}
      className="service-card group"
    >
      {/* Icon Section */}
      <div className="relative mb-6">
        <div className={`w-16 h-16 bg-gradient-to-r ${gradient} rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
          <Icon className="text-white text-2xl" />
        </div>
        <div className="absolute -top-1 -right-1 w-6 h-6 bg-accent-500 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <FaArrowRight className="text-white text-xs" />
        </div>
      </div>

      {/* Content */}
      <h3 className="text-xl font-bold text-gray-800 mb-3 group-hover:text-primary-500 transition-colors duration-300">
        {title}
      </h3>
      
      <p className="text-gray-600 mb-4 leading-relaxed">
        {description}
      </p>

      {/* Features List */}
      {features && (
        <ul className="space-y-2 mb-6">
          {features.map((feature, index) => (
            <li key={index} className="flex items-center text-sm text-gray-600">
              <div className="w-1.5 h-1.5 bg-success-500 rounded-full mr-3"></div>
              {feature}
            </li>
          ))}
        </ul>
      )}

      {/* CTA Button */}
      <a
        href={buttonLink}
        className="inline-flex items-center text-primary-500 font-semibold hover:text-success-500 transition-colors duration-300 group/btn"
      >
        {buttonText}
        <FaArrowRight className="ml-2 text-sm group-hover/btn:translate-x-1 transition-transform duration-300" />
      </a>

      {/* Hover Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary-500/5 to-success-500/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
    </motion.div>
  );
};

export default ServiceCard;
