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
  FaUmbrella,
  FaPiggyBank,
  FaGem,
  FaChartLine,
  FaUsers,
  FaAward,
  FaRocket,
  FaBrain,
  FaUserShield,
  FaHeart
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
      name: "Dr. A. Mehta",
      designation: "Doctor",
      testimonial: "Aditya's approach made me calm and confident about money.",
      rating: 5
    },
    {
      name: "Rajiv S.",
      designation: "Investor",
      testimonial: "I've been investing for 10 years, but only now I understand behaviour matters more than returns.",
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
    { icon: FaUsers, number: "750+", label: "Families Guided" },
    { icon: FaChartLine, number: "₹29Cr+", label: "Assets Under Management" },
    { icon: FaRocket, number: "15%+", label: "Average Risk-Adjusted Returns" },
    { icon: FaShieldAlt, number: "100%", label: "Peace of Mind Guarantee" }
  ];

  const whyChooseUsPoints = [
    {
      icon: FaBrain,
      title: "Rational Approach",
      description: "We design risk-adjusted portfolios built on science, not stories."
    },
    {
      icon: FaUserShield,
      title: "Personalised Guidance",
      description: "Every investor gets a wealth blueprint tailored to life goals."
    },
    {
      icon: FaHeart,
      title: "Peaceful Investing",
      description: "Our systems help you grow wealth calmly, without anxiety or hype."
    }
  ];

  return (
    <div className="overflow-hidden">
      {/* Hero Section */}
      <HeroSection />

      {/* Why Choose Us Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
              Why 750+ Families Trust The Happyness Culture
            </h2>
            <p className="text-lg md:text-xl text-gray-600 max-w-4xl mx-auto">
              Because we don't sell returns — we build rational wealth systems based on trust, behavioural science, and experience.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            {whyChooseUsPoints.map((point, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                viewport={{ once: true }}
                className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-primary-500 to-success-500 rounded-2xl flex items-center justify-center mb-6 mx-auto">
                  <point.icon className="text-white text-3xl" />
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-3 text-center">
                  {point.title}
                </h3>
                <p className="text-gray-600 text-center leading-relaxed">
                  {point.description}
                </p>
              </motion.div>
            ))}
          </div>

          {/* Services Tagline */}

        </div>
      </section>

     {/* Services Section */}
<section className="py-20 bg-white">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    {/* Services Tagline */}
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.4, duration: 0.6 }}
      viewport={{ once: true }}
      className="text-center bg-gradient-to-r from-primary-500 to-success-500 text-white rounded-2xl py-8 px-6 mb-14"
    >
      <div className="flex items-center justify-center gap-3 mb-3">
        <FaChartLine className="text-3xl" />
        <h3 className="text-2xl md:text-3xl font-bold">
          Our Financial Services — Rational Wealth, Tailored for You
        </h3>
      </div>
      <p className="text-lg md:text-xl opacity-90 max-w-4xl mx-auto">
        Comprehensive, science-backed investment strategies to help you grow, protect, and enjoy your wealth calmly.
      </p>
    </motion.div>

    {/* Services Grid */}
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

      {/* Stats Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold text-gray-800 mb-4">
              Our Track Record Speaks
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Numbers that reflect trust, growth, and peace of mind
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-gradient-to-br from-primary-500 to-success-500 rounded-2xl p-8 text-white text-center group hover:scale-105 transition-transform duration-300 shadow-lg"
              >
                <stat.icon className="text-white text-4xl mb-4 mx-auto group-hover:scale-110 transition-transform duration-300" />
                <h3 className="text-3xl font-bold mb-2">{stat.number}</h3>
                <p className="text-white/90">{stat.label}</p>
              </motion.div>
            ))}
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
