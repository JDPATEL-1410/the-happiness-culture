import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  FaRocket, 
  FaChartLine, 
  FaShieldAlt, 
  FaUsers,
  FaArrowRight,
  FaCheckCircle,
  FaStar
} from 'react-icons/fa';

const HeroSection = () => {
  const stats = [
    { icon: FaUsers, number: '750+', label: 'Families Guided', color: 'from-blue-400 to-blue-600' },
    { icon: FaChartLine, number: '₹29 Cr+', label: 'Assets Under Management', color: 'from-green-400 to-green-600' },
    { icon: FaRocket, number: '15%+', label: 'Average Risk-Adjusted Returns', color: 'from-purple-400 to-purple-600' },
    { icon: FaShieldAlt, number: '100%', label: 'Peace of Mind Guarantee', color: 'from-orange-400 to-orange-600' },
  ];

  return (
    <section className="relative bg-gradient-to-br from-primary-500 via-primary-600 to-success-500 min-h-screen flex items-center overflow-hidden">
      {/* Modern Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_30%_20%,rgba(34,197,94,0.15),transparent_50%)]"></div>
        <div className="absolute bottom-0 right-0 w-full h-full bg-[radial-gradient(circle_at_70%_80%,rgba(34,197,94,0.1),transparent_50%)]"></div>
      </div>
      
      {/* Animated Particles */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-[10%] w-2 h-2 bg-success-400 rounded-full animate-ping"></div>
        <div className="absolute top-40 right-[15%] w-2 h-2 bg-success-300 rounded-full animate-ping delay-700"></div>
        <div className="absolute bottom-32 left-[20%] w-2 h-2 bg-success-400 rounded-full animate-ping delay-1000"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-20">
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          {/* Left Content - 7 columns */}
          <div className="lg:col-span-7 text-white space-y-6">
            
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 bg-success-500/20 backdrop-blur-sm rounded-full px-4 py-2 border border-success-400/40"
            >
              <div className="flex items-center gap-1">
                <FaStar className="text-yellow-400 text-xs" />
                <FaStar className="text-yellow-400 text-xs" />
                <FaStar className="text-yellow-400 text-xs" />
                <FaStar className="text-yellow-400 text-xs" />
                <FaStar className="text-yellow-400 text-xs" />
              </div>
              <span className="text-sm font-semibold">The Happyness Culture</span>
            </motion.div>

            {/* Main Headline */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
            >
              <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-extrabold leading-tight">
                Transform Your{' '}
                <span className="block mt-1 bg-gradient-to-r from-success-400 via-success-300 to-success-200 bg-clip-text text-transparent">
                  Financial Dreams
                </span>
                <span className="block mt-1">Into Reality</span>
              </h1>
              <div className="flex items-center gap-3 mt-4">
                <div className="h-1 w-16 bg-gradient-to-r from-success-400 to-transparent rounded-full"></div>
                <span className="text-success-300 font-bold text-lg lg:text-xl">The Rational Way</span>
              </div>
            </motion.div>

            {/* Subheadline Box */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="bg-gradient-to-r from-success-500/10 to-transparent backdrop-blur-sm rounded-2xl px-6 py-4 border-l-4 border-success-400"
            >
              <p className="text-xl lg:text-2xl font-medium">
                Because <span className="text-success-300 font-bold">peace</span> is the new <span className="text-success-300 font-bold">alpha</span>.
              </p>
            </motion.div>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.6 }}
              className="text-base lg:text-lg text-gray-300 leading-relaxed"
            >
              At The Happyness Culture, we help you <strong className="text-white">invest wisely</strong>, <strong className="text-white">live calmly</strong>, and <strong className="text-white">grow consistently</strong> through rational wealth systems.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.6 }}
              className="flex flex-col sm:flex-row gap-4 pt-2"
            >
              <Link
                to="/calculator"
                className="group relative inline-flex items-center justify-center bg-gradient-to-r from-success-500 to-success-600 hover:from-success-600 hover:to-success-700 text-white font-bold py-4 px-8 rounded-xl overflow-hidden transition-all duration-300 transform hover:scale-105 shadow-lg shadow-success-500/30 hover:shadow-success-500/50"
              >
                <span className="relative z-10 flex items-center gap-2">
                  <span className="text-lg">🚀</span>
                  Start My SIP Plan
                  <FaArrowRight className="group-hover:translate-x-1 transition-transform" />
                </span>
              </Link>
              
              <button className="group inline-flex items-center justify-center bg-white/10 hover:bg-white/15 backdrop-blur-sm text-white font-bold py-4 px-8 rounded-xl border border-white/20 hover:border-white/40 transition-all duration-300">
                <span className="text-lg mr-2">💼</span>
                Explore Happy-Rich Community
              </button>
            </motion.div>

            {/* Badge Line */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1, duration: 0.6 }}
              className="flex flex-wrap items-center gap-2 text-sm pt-4"
            >
              <div className="flex items-center gap-2 bg-white/5 backdrop-blur-sm px-4 py-2 rounded-lg border border-white/10">
                <FaCheckCircle className="text-success-400" />
                <span className="text-gray-300">Chartered wealth manager</span>
              </div>
              <div className="flex items-center gap-2 bg-white/5 backdrop-blur-sm px-4 py-2 rounded-lg border border-white/10">
                <span className="font-mono text-success-300 font-semibold">ARN-119542</span>
              </div>
              <div className="flex items-center gap-2 bg-white/5 backdrop-blur-sm px-4 py-2 rounded-lg border border-white/10">
                <span className="text-gray-300">Trusted by 750+ Families</span>
              </div>
            </motion.div>
          </div>

          {/* Right Content - Stats Grid - 5 columns */}
          <div className="lg:col-span-5">
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="grid grid-cols-2 gap-4"
            >
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.6 + index * 0.1, duration: 0.4 }}
                  className="group relative aspect-square"
                >
                  <div className="absolute inset-0 bg-white/10 backdrop-blur-md rounded-2xl p-5 border border-white/20 hover:border-success-400/50 transition-all duration-300 hover:shadow-2xl hover:shadow-success-500/20 hover:-translate-y-2 flex flex-col justify-between">
                    <div>
                      {/* Icon with gradient background */}
                      <div className={`inline-flex p-3 rounded-xl bg-gradient-to-br ${stat.color} mb-3 shadow-lg`}>
                        <stat.icon className="text-white text-xl" />
                      </div>
                      
                      {/* Check Icon */}
                      <div className="absolute top-4 right-4">
                        <FaCheckCircle className="text-success-400 text-base" />
                      </div>
                    </div>
                    
                    <div>
                      {/* Number */}
                      <h3 className="text-2xl sm:text-3xl font-bold text-white mb-1">
                        {stat.number}
                      </h3>
                      
                      {/* Label */}
                      <p className="text-gray-300 text-xs sm:text-sm font-medium leading-tight">
                        {stat.label}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>

      {/* Custom Animations */}
      <style jsx>{`
        .delay-700 {
          animation-delay: 700ms;
        }
        .delay-1000 {
          animation-delay: 1000ms;
        }
      `}</style>
    </section>
  );
};

export default HeroSection;
