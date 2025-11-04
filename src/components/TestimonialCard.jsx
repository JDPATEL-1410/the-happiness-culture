import React from 'react';
import { motion } from 'framer-motion';
import { FaStar, FaQuoteLeft } from 'react-icons/fa';

const TestimonialCard = ({ 
  name, 
  designation, 
  company, 
  testimonial, 
  rating = 5, 
  avatar, 
  delay = 0 
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay }}
      viewport={{ once: true }}
      className="testimonial-card relative bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300"
    >
      {/* Quote Icon */}
      <div className="absolute -top-3 left-6">
        <div className="w-8 h-8 bg-gradient-to-r from-primary-500 to-success-500 rounded-full flex items-center justify-center shadow-lg">
          <FaQuoteLeft className="text-white text-sm" />
        </div>
      </div>

      {/* Testimonial Text */}
      <p className="text-gray-700 mb-6 leading-relaxed text-base pt-4">
        "{testimonial}"
      </p>

      {/* Divider */}
      <div className="w-12 h-1 bg-gradient-to-r from-primary-500 to-success-500 rounded-full mb-4"></div>

      {/* Author Info */}
      <div className="flex items-start">
        <div className="flex-1">
          <h4 className="font-bold text-gray-800 text-lg mb-1">{name}</h4>
          <p className="text-sm text-gray-600">
            {designation}{company ? `, ${company}` : ''}
          </p>
        </div>
      </div>

      {/* Rating Stars - Bottom Right */}
      <div className="flex items-center justify-end mt-4">
        {[...Array(5)].map((_, index) => (
          <FaStar
            key={index}
            className={`text-base ml-1 ${
              index < rating ? 'text-yellow-400' : 'text-gray-300'
            }`}
          />
        ))}
      </div>

      {/* Hover Effect Border */}
      <div className="absolute inset-0 border-2 border-transparent group-hover:border-primary-200 rounded-2xl transition-all duration-300 pointer-events-none"></div>
    </motion.div>
  );
};

export default TestimonialCard;
