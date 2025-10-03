import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import HeroSection from '../components/HeroSection';
import ServiceCard from '../components/ServiceCard';
import SIPCalculator from '../components/SIPCalculator';
import TestimonialCard from '../components/TestimonialCard';
import { 
  FaChartPie, 
  FaShieldAlt, 
  FaUniversity, 
  FaUmbrella,
  FaPiggyBank,
  FaGem,
  FaChartLine,
  FaUsers,
  FaAward,
  FaRocket
} from 'react-icons/fa';

const Home = () => {
  const services = [
    {
      icon: FaChartPie,
      title: "Financial Planning",
      description: "Comprehensive financial planning tailored to your life goals and dreams.",
      features: ["Goal-based Planning", "Risk Assessment", "Portfolio Review", "Regular Monitoring"],
      buttonText: "Plan Your Future",
      buttonLink: "/services",
      gradient: "from-blue-500 to-purple-500"
    },
    {
      icon: FaChartLine,
      title: "Mutual Funds & SIP",
      description: "Start your wealth creation journey with systematic investment plans.",
      features: ["Diversified Portfolio", "Tax Benefits", "Professional Management", "Low Minimum Investment"],
      buttonText: "Start SIP",
      buttonLink: "/calculator",
      gradient: "from-success-500 to-green-600"
    },
    {
      icon: FaUmbrella,
      title: "Tax Saving Schemes",
      description: "Optimize your tax liability while building wealth for the future.",
      features: ["ELSS Funds", "PPF Planning", "Tax Deductions", "Smart Tax Planning"],
      buttonText: "Save Tax",
      buttonLink: "/services",
      gradient: "from-orange-500 to-red-500"
    },
    {
      icon: FaShieldAlt,
      title: "Insurance Planning",
      description: "Protect your family's financial future with comprehensive insurance solutions.",
      features: ["Term Insurance", "Health Insurance", "Child Plans", "Retirement Plans"],
      buttonText: "Get Protected",
      buttonLink: "/services",
      gradient: "from-indigo-500 to-blue-600"
    },
    {
      icon: FaPiggyBank,
      title: "Retirement Planning",
      description: "Secure your golden years with strategic retirement planning solutions.",
      features: ["Pension Plans", "Annuity Plans", "Senior Citizen Schemes", "Healthcare Planning"],
      buttonText: "Plan Retirement",
      buttonLink: "/services",
      gradient: "from-purple-500 to-pink-500"
    },
    {
      icon: FaGem,
      title: "Wealth Management",
      description: "Premium wealth management services for high net worth individuals.",
      features: ["Portfolio Management", "Alternative Investments", "Estate Planning", "Family Office"],
      buttonText: "Manage Wealth",
      buttonLink: "/services",
      gradient: "from-yellow-500 to-orange-500"
    }
  ];

  const testimonials = [
    {
      name: "Rajesh Kumar",
      designation: "Software Engineer",
      company: "TCS",
      testimonial: "The Happyness Culture helped me achieve my dream of buying a house through their excellent SIP planning. Their guidance made investing so simple and rewarding.",
      rating: 5
    },
    {
      name: "Priya Sharma",
      designation: "Doctor",
      company: "Apollo Hospital",
      testimonial: "As a busy professional, I needed someone reliable to manage my investments. Their team provided personalized solutions that perfectly fit my financial goals.",
      rating: 5
    },
    {
      name: "Amit Patel",
      designation: "Business Owner",
      testimonial: "Outstanding service and expertise! They helped me diversify my investments and provided excellent returns. Highly recommend for anyone serious about wealth creation.",
      rating: 5
    }
  ];

  const stats = [
    { icon: FaUsers, number: "10,000+", label: "Happy Clients" },
    { icon: FaChartLine, number: "₹500Cr+", label: "Assets Under Management" },
    { icon: FaAward, number: "15%", label: "Average Returns" },
    { icon: FaRocket, number: "8+", label: "Years of Excellence" }
  ];

  return (
    <div className="overflow-hidden">
      {/* Hero Section */}
      <HeroSection />

      {/* Services Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-800 mb-4">
              Our Financial Services
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive financial solutions designed to help you achieve your dreams and secure your future
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <ServiceCard
                key={index}
                {...service}
                delay={index * 0.1}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Calculator Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold text-gray-800 mb-4">
              Plan Your SIP Investment
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Use our advanced Calculator to visualize your investment growth and plan your financial future
            </p>
          </motion.div>

          <SIPCalculator />
        </div>
      </section>

      {/* Why Choose Us Section */}
<section className="py-20 bg-white">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div className="grid lg:grid-cols-2 gap-16 items-center">
      {/* Left Content */}
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <h2 className="text-4xl font-bold text-gray-800 mb-6">
          Why Choose The Happyness Culture?
        </h2>

        <div className="space-y-6">
          {[
            {
              title: "Expert Guidance",
              description: "Certified financial advisors with 8+ years of experience in wealth management."
            },
            {
              title: "Personalized Solutions",
              description: "Customized investment strategies based on your unique financial goals and risk profile."
            },
            {
              title: "Transparent Process",
              description: "Complete transparency in fees, processes, and investment recommendations."
            },
            {
              title: "Technology-Driven",
              description: "Advanced tools and platforms for seamless investment tracking and management."
            }
          ].map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              className="flex items-start space-x-4"
            >
              <div className="w-6 h-6 bg-success-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                <span className="text-white text-xs">✓</span>
              </div>
              <div>
                <h3 className="font-semibold text-gray-800 mb-2">{item.title}</h3>
                <p className="text-gray-600">{item.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Stats Section */}
      <motion.div
        initial={{ opacity: 0, x: 50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="grid grid-cols-2 gap-6"
      >
        {stats.map((stat, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            viewport={{ once: true }}
            className="bg-gradient-to-br from-primary-500 to-success-500 rounded-2xl p-8 text-white text-center group hover:scale-105 transition-transform duration-300"
          >
            {/* ICON FIXED COLOR */}
            <stat.icon className="text-white text-4xl mb-4 mx-auto group-hover:text-success-200 transition-colors duration-300" />
            <h3 className="text-3xl font-bold mb-2">{stat.number}</h3>
            <p className="text-white/90">{stat.label}</p>
          </motion.div>
        ))}
      </motion.div>
    </div>
  </div>
</section>


      {/* Testimonials Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-800 mb-4">
              What Our Clients Say
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Don't just take our word for it. Here's what our satisfied clients have to say about our services
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <TestimonialCard
                key={index}
                {...testimonial}
                delay={index * 0.1}
              />
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-primary-500 to-success-500">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-white"
          >
            <h2 className="text-4xl font-bold mb-6">
              Ready to Start Your Wealth Creation Journey?
            </h2>
            <p className="text-xl mb-8 opacity-90">
              Join thousands of satisfied investors who trust us with their financial future. 
              Start your SIP today with as low as ₹500 per month.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/calculator"
                className="bg-white text-primary-500 font-semibold py-4 px-8 rounded-xl hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 inline-flex items-center justify-center"
              >
                Calculate SIP Returns
              </Link>
              
              <Link
                to="/contact"
                className="bg-transparent border-2 border-white text-white font-semibold py-4 px-8 rounded-xl hover:bg-white hover:text-primary-500 transition-all duration-300 transform hover:scale-105 inline-flex items-center justify-center"
              >
                Book Free Consultation
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Home;
