import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  FaRocket, 
  FaChartLine, 
  FaShieldAlt, 
  FaUsers,
  FaArrowRight,
  FaPlay
} from 'react-icons/fa';

const HeroSection = () => {
  const stats = [
    { icon: FaUsers, number: '10,000+', label: 'Happy Clients' },
    { icon: FaChartLine, number: '₹500Cr+', label: 'Assets Under Management' },
    { icon: FaRocket, number: '15%', label: 'Average Returns'  },
    { icon: FaShieldAlt, number: '100%', label: 'Secure Investments' },
  ];

  return (
    <section className="relative bg-gradient-to-br from-primary-500 via-primary-600 to-success-500 min-h-screen flex items-center overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 hero-bg opacity-20"></div>
      
      {/* Floating Elements */}
      <div className="absolute top-20 left-10 w-20 h-20 bg-white/10 rounded-full blur-xl animate-bounce-slow"></div>
      <div className="absolute top-40 right-20 w-16 h-16 bg-success-400/20 rounded-full blur-lg animate-pulse-slow"></div>
      <div className="absolute bottom-40 left-20 w-24 h-24 bg-white/5 rounded-full blur-2xl animate-bounce-slow delay-1000"></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="text-white"
          >
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center bg-white/20 backdrop-blur-sm rounded-full px-6 py-2 mb-6"
            >
              <FaRocket className="mr-2 text-success-300" />
              <span className="text-sm font-medium">India's Trusted Financial Partner</span>
            </motion.div>

            {/* Main Heading */}
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="text-4xl md:text-6xl font-bold leading-tight mb-6"
            >
              Transform Your{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-success-300 to-white">
                Financial Dreams
              </span>{' '}
              Into Reality
            </motion.h1>

            {/* Tagline */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="text-xl md:text-2xl font-medium text-success-100 mb-4"
            >
              Knowledge Is The New Happy Rich
            </motion.p>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
              className="text-lg text-white/90 mb-8 leading-relaxed"
            >
              Start your wealth creation journey with our expert-guided mutual fund SIPs. 
              Get personalized investment strategies that grow with your dreams and secure your future.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1 }}
              className="flex flex-col sm:flex-row gap-4 mb-8"
            >
              <Link
                to="/calculator"
                className="flex items-center justify-center bg-success-500 hover:bg-success-600 text-white font-semibold py-4 px-8 rounded-xl transition-all duration-300 transform hover:scale-105 hover:shadow-2xl group"
              >
                Start Calculator
                <FaArrowRight className="ml-2 group-hover:translate-x-1 transition-transform duration-300" />
              </Link>
              
              <button className="flex items-center justify-center bg-white/20 backdrop-blur-sm hover:bg-white/30 text-white font-semibold py-4 px-8 rounded-xl transition-all duration-300 transform hover:scale-105 border border-white/30">
                <FaPlay className="mr-2" />
                Watch Demo
              </button>
            </motion.div>

            {/* Trust Indicators */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.2 }}
              className="flex flex-wrap items-center gap-6 text-sm text-white/80"
            >
              <div className="flex items-center">
                <div className="w-2 h-2 bg-success-400 rounded-full mr-2"></div>
                SEBI Registered
              </div>
              <div className="flex items-center">
                <div className="w-2 h-2 bg-success-400 rounded-full mr-2"></div>
                ISO Certified
              </div>
              <div className="flex items-center">
                <div className="w-2 h-2 bg-success-400 rounded-full mr-2"></div>
                5-Star Rated
              </div>
            </motion.div>
          </motion.div>

          {/* Right Content - Stats Cards */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="grid grid-cols-2 gap-6"
          >
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 + index * 0.1 }}
                className="bg-white/20 backdrop-blur-md rounded-2xl p-6 border border-white/30 hover:bg-white/30 transition-all duration-300 group"
              >
                <div className="flex items-center justify-between mb-4">
                 <stat.icon className="text-3xl text-white group-hover:text-success-300 group-hover:scale-110 transition-all duration-300" />

                </div>
                <h3 className="text-2xl font-bold text-white mb-1">
                  {stat.number}
                </h3>
                <p className="text-white/80 text-sm">
                  {stat.label}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Scroll Down Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <div className="flex flex-col items-center text-white/60 animate-bounce">
            <span className="text-sm mb-2">Scroll to explore</span>
            <div className="w-1 h-8 bg-white/30 rounded-full">
              <div className="w-1 h-3 bg-white rounded-full animate-pulse"></div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
