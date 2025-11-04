import React from 'react';
import { motion } from 'framer-motion';
import { FaArrowRight } from 'react-icons/fa';

const ServiceCard = ({ 
  icon: Icon, 
  title, 
  headline,
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
      className="service-card group bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 relative overflow-hidden"
    >
      {/* Icon Section */}
      <div className="relative mb-6">
        <div className={`w-16 h-16 bg-gradient-to-r ${gradient} rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
          <Icon className="text-white text-2xl" />
        </div>
      </div>

      {/* Title */}
      <h3 className="text-2xl font-bold text-gray-800 mb-2">
        {title}
      </h3>

      {/* Headline (Emotional Hook) */}
      {headline && (
        <p className="text-lg font-semibold text-primary-600 mb-4 italic">
          {headline}
        </p>
      )}
      
      {/* Description */}
      <p className="text-gray-600 mb-6 leading-relaxed">
        {description}
      </p>

      {/* Features List */}
      {features && features.length > 0 && (
        <ul className="space-y-2 mb-6">
          {features.slice(0, 4).map((feature, index) => (
            <li key={index} className="flex items-start text-sm text-gray-600">
              <div className="w-1.5 h-1.5 bg-success-500 rounded-full mr-3 mt-1.5 flex-shrink-0"></div>
              <span>{feature}</span>
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
