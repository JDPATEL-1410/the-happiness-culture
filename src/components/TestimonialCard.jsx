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
      className="testimonial-card relative"
    >
      {/* Quote Icon */}
      <div className="absolute -top-3 left-6">
        <div className="w-8 h-8 bg-gradient-to-r from-primary-500 to-success-500 rounded-full flex items-center justify-center">
          <FaQuoteLeft className="text-white text-sm" />
        </div>
      </div>

      {/* Rating */}
      <div className="flex items-center mb-4 pt-2">
        {[...Array(5)].map((_, index) => (
          <FaStar
            key={index}
            className={`text-lg ${
              index < rating ? 'text-yellow-400' : 'text-gray-300'
            }`}
          />
        ))}
      </div>

      {/* Testimonial Text */}
      <p className="text-gray-600 mb-6 leading-relaxed italic">
        "{testimonial}"
      </p>

      {/* Author Info */}
      <div className="flex items-center">
        <div className="w-12 h-12 bg-gradient-to-r from-primary-500 to-success-500 rounded-full flex items-center justify-center text-white font-bold text-lg mr-4">
          {avatar || name.charAt(0)}
        </div>
        <div>
          <h4 className="font-semibold text-gray-800">{name}</h4>
          <p className="text-sm text-gray-500">
            {designation}{company ? ` at ${company}` : ''}
          </p>
        </div>
      </div>

      {/* Hover Effect Border */}
      <div className="absolute inset-0 border-2 border-transparent hover:border-primary-200 rounded-2xl transition-all duration-300 pointer-events-none"></div>
    </motion.div>
  );
};

export default TestimonialCard;
