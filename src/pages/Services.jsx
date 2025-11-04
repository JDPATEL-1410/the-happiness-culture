import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import ServiceCard from '../components/ServiceCard';
import { 
  FaChartPie, 
  FaChartLine, 
  FaUniversity,
  FaShieldAlt,
  FaPiggyBank,
  FaHandHoldingUsd,
  FaCalculator,
  FaHandshake,
  FaPhone,
  FaWhatsapp,
  FaArrowRight
} from 'react-icons/fa';

const Services = () => {
  const mainServices = [
    {
      icon: FaChartPie,
      title: "Financial Planning",
      headline: "Plan Rationally. Live Peacefully.",
      description: "Create a complete, goal-based financial blueprint aligned with your life goals and risk profile. From budgeting to insurance, every decision is driven by logic, not emotion.",
      features: [
        "Goal-based Financial Planning",
        "Risk Profiling & Assessment",
        "Cash Flow Analysis",
        "Regular Portfolio Review",
        "Emergency Fund Planning",
        "Debt Management Strategy"
      ],
      buttonText: "Start Planning",
      buttonLink: "/contact",
      gradient: "from-blue-500 to-purple-500"
    },
    {
      icon: FaChartLine,
      title: "Mutual Funds & SIPs",
      headline: "Invest Smart. Stay Consistent.",
      description: "Simplify long-term wealth creation through systematic SIPs and diversified mutual fund portfolios. Designed for peace of mind and steady growth.",
      features: [
        "Diversified Fund Selection",
        "SIP Amount Optimization",
        "Tax-Efficient Investing",
        "Regular Performance Monitoring",
        "Goal-Specific Portfolios",
        "Step-up SIP Planning"
      ],
      buttonText: "Start SIP",
      buttonLink: "/calculator",
      gradient: "from-success-500 to-green-600"
    },
    {
      icon: FaUniversity,
      title: "SIF (Specialised Investment Fund)",
      headline: "Exclusive Growth. Rational Control.",
      description: "For seasoned investors — access structured opportunities through our curated Specialised Investment Fund (SIF) model. Built on deep research, behavioural insights, and transparent governance.",
      features: [
        "Structured Investment Opportunities",
        "Deep Research & Analysis",
        "Behavioural Insights",
        "Transparent Governance",
        "Professional Management",
        "Exclusive Access"
      ],
      buttonText: "Explore SIF",
      buttonLink: "/contact",
      gradient: "from-indigo-500 to-purple-600"
    },
    {
      icon: FaHandHoldingUsd,
      title: "PMS & AIF",
      headline: "Premium Portfolios. Expertly Managed.",
      description: "Partner with top Portfolio Managers and Alternative Investment Funds. Diversify intelligently. Institutional-grade research, risk analysis, and rational decision frameworks.",
      features: [
        "Portfolio Management Services",
        "Alternative Investment Funds",
        "Institutional-grade Research",
        "Risk Analysis & Management",
        "Rational Decision Frameworks",
        "Expert Portfolio Managers"
      ],
      buttonText: "Explore PMS & AIF",
      buttonLink: "/contact",
      gradient: "from-yellow-500 to-orange-500"
    },
    {
      icon: FaPiggyBank,
      title: "Retirement Planning",
      headline: "Design Your Golden Decades.",
      description: "Build an inflation-protected, tax-efficient retirement corpus. Enjoy lifelong income with stability and confidence through our structured retirement models.",
      features: [
        "Retirement Corpus Calculation",
        "Pension Plan Optimization",
        "Inflation-Protected Planning",
        "Tax-Efficient Strategies",
        "Healthcare Cost Planning",
        "Structured Retirement Models"
      ],
      buttonText: "Plan Retirement",
      buttonLink: "/contact",
      gradient: "from-purple-500 to-pink-500"
    },
    {
      icon: FaHandshake,
      title: "P2P Investing",
      headline: "Earn Smarter. Diversify Beyond Markets.",
      description: "Unlock consistent returns with our curated P2P Lending portfolios. Managed risk, verified borrowers, and smart diversification for monthly passive income.",
      features: [
        "Curated P2P Portfolios",
        "Managed Risk Framework",
        "Verified Borrowers",
        "Smart Diversification",
        "Monthly Passive Income",
        "Transparent Process"
      ],
      buttonText: "Start P2P Journey",
      buttonLink: "/contact",
      gradient: "from-green-500 to-teal-500"
    }
  ];

  const processSteps = [
    {
      step: "01",
      title: "Free Consultation",
      description: "Book a complimentary consultation to discuss your financial goals and current situation."
    },
    {
      step: "02",
      title: "Financial Analysis",
      description: "We analyze your finances, risk profile, and create a personalized investment strategy."
    },
    {
      step: "03",
      title: "Portfolio Creation",
      description: "Build a diversified portfolio aligned with your goals, timeline, and risk tolerance."
    },
    {
      step: "04",
      title: "Ongoing Support",
      description: "Regular reviews, rebalancing, and adjustments to keep you on track toward your goals."
    }
  ];

  const whyChooseUs = [
    {
      title: "Science-Backed Approach",
      description: "Risk-adjusted portfolios built on research and behavioural science, not stories.",
      icon: "🧬"
    },
    {
      title: "Transparent Governance",
      description: "Clear, upfront communication with no hidden charges or commission bias.",
      icon: "💎"
    },
    {
      title: "Rational Decision Making",
      description: "Every recommendation is driven by logic, data, and your unique financial goals.",
      icon: "🎯"
    },
    {
      title: "Peace of Mind",
      description: "Grow your wealth calmly without anxiety, hype, or emotional decision-making.",
      icon: "🧘"
    }
  ];

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-primary-500 to-success-500 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="text-5xl font-bold mb-6">Our Financial Services</h1>
            <p className="text-xl md:text-2xl opacity-90 max-w-4xl mx-auto leading-relaxed mb-4 font-semibold">
              Rational Wealth, Tailored for You
            </p>
            <p className="text-lg opacity-80 max-w-3xl mx-auto leading-relaxed mb-8">
              Comprehensive, science-backed investment strategies to help you grow, protect, and enjoy your wealth calmly.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/calculator"
                className="bg-white text-primary-500 font-semibold py-4 px-8 rounded-xl hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 inline-flex items-center justify-center"
              >
                <FaCalculator className="mr-2" />
                Try SIP Calculator
              </Link>
              
              <a
                href="https://wa.me/919322835288"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-green-500 hover:bg-green-600 text-white font-semibold py-4 px-8 rounded-xl transition-all duration-300 transform hover:scale-105 inline-flex items-center justify-center"
              >
                <FaWhatsapp className="mr-2" />
                Get Free Consultation
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Main Services */}
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
              Complete Financial Solutions
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Everything you need to build, protect, and grow your wealth through rational systems
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {mainServices.map((service, index) => (
              <ServiceCard
                key={index}
                {...service}
                delay={index * 0.1}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Our Process */}
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
              Our Simple 4-Step Process
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We make financial planning simple and straightforward with our proven rational approach
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {processSteps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                className="relative text-center"
              >
                {/* Step Number */}
                <div className="w-16 h-16 bg-gradient-to-r from-primary-500 to-success-500 rounded-full flex items-center justify-center text-white font-bold text-xl mx-auto mb-6">
                  {step.step}
                </div>
                
                {/* Connector Line */}
                {index < processSteps.length - 1 && (
                  <div className="hidden lg:block absolute top-8 left-full w-full h-0.5 bg-gradient-to-r from-primary-500 to-success-500 transform -translate-y-1/2 z-0"></div>
                )}
                
                <h3 className="text-xl font-bold text-gray-800 mb-3">{step.title}</h3>
                <p className="text-gray-600 leading-relaxed">{step.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
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
              Why Choose The Happyness Culture?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Because we build rational wealth systems based on trust, science, and experience
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {whyChooseUs.map((reason, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-gray-50 rounded-2xl p-8 text-center hover:bg-white hover:shadow-lg transition-all duration-300"
              >
                <div className="text-4xl mb-4">{reason.icon}</div>
                <h3 className="text-xl font-bold text-gray-800 mb-3">{reason.title}</h3>
                <p className="text-gray-600 leading-relaxed">{reason.description}</p>
              </motion.div>
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
              Ready to Transform Your Financial Future?
            </h2>
            <p className="text-xl mb-8 opacity-90">
              Book a free consultation with our expert financial advisors and take the first step towards financial freedom.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://wa.me/919322835288"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white text-primary-500 font-semibold py-4 px-8 rounded-xl hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 inline-flex items-center justify-center"
              >
                <FaWhatsapp className="mr-2" />
                WhatsApp Consultation
              </a>
              
              <a
                href="tel:+919322835288"
                className="bg-transparent border-2 border-white text-white font-semibold py-4 px-8 rounded-xl hover:bg-white hover:text-primary-500 transition-all duration-300 transform hover:scale-105 inline-flex items-center justify-center"
              >
                <FaPhone className="mr-2" />
                Call Now
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Services;
