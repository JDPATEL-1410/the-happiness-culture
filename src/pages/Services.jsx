import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import ServiceCard from '../components/ServiceCard';
import { 
  FaChartPie, 
  FaChartLine, 
  FaUmbrella, 
  FaShieldAlt,
  FaPiggyBank,
  FaGem,
  FaCalculator,
  FaHandshake,
  FaPhone,
  FaWhatsapp
} from 'react-icons/fa';

const Services = () => {
  const mainServices = [
    {
      icon: FaChartPie,
      title: "Comprehensive Financial Planning",
      description: "Get a complete roadmap for your financial future with our personalized planning services.",
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
      title: "Mutual Funds & SIP",
      description: "Build wealth systematically with our expertly curated mutual fund portfolios and SIP plans.",
      features: [
        "Diversified Fund Selection",
        "SIP Amount Optimization",
        "Tax-Efficient Investing",
        "Regular Performance Monitoring",
        "Goal-Specific Portfolios",
        "Step-up SIP Planning"
      ],
      buttonText: "Calculate SIP",
      buttonLink: "/calculator",
      gradient: "from-success-500 to-green-600"
    },
    {
      icon: FaUmbrella,
      title: "Tax Saving Solutions",
      description: "Maximize your tax savings while building wealth through smart investment strategies.",
      features: [
        "ELSS Fund Recommendations",
        "Section 80C Optimization",
        "PPF & EPF Planning",
        "Tax Harvesting Strategies",
        "NPS Investment Planning",
        "Tax-Efficient Withdrawals"
      ],
      buttonText: "Save Tax",
      buttonLink: "/contact",
      gradient: "from-orange-500 to-red-500"
    },
    {
      icon: FaShieldAlt,
      title: "Insurance & Protection Planning",
      description: "Protect your family's financial future with comprehensive insurance coverage solutions.",
      features: [
        "Term Life Insurance",
        "Health Insurance Planning",
        "Critical Illness Cover",
        "Disability Insurance",
        "Child Education Plans",
        "Family Income Protection"
      ],
      buttonText: "Get Protected",
      buttonLink: "/contact",
      gradient: "from-indigo-500 to-blue-600"
    },
    {
      icon: FaPiggyBank,
      title: "Retirement Planning",
      description: "Secure your golden years with strategic retirement planning and income solutions.",
      features: [
        "Retirement Corpus Calculation",
        "Pension Plan Optimization",
        "Annuity Planning",
        "Senior Citizen Schemes",
        "Healthcare Cost Planning",
        "Estate Planning Basics"
      ],
      buttonText: "Plan Retirement",
      buttonLink: "/contact",
      gradient: "from-purple-500 to-pink-500"
    },
    {
      icon: FaGem,
      title: "Premium Wealth Management",
      description: "Exclusive wealth management services for high net worth individuals and families.",
      features: [
        "Portfolio Management Services",
        "Alternative Investment Options",
        "Private Equity & Venture Capital",
        "Real Estate Investment Trusts",
        "International Diversification",
        "Family Office Solutions"
      ],
      buttonText: "Explore Premium",
      buttonLink: "/contact",
      gradient: "from-yellow-500 to-orange-500"
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
      title: "SEBI Registered Advisors",
      description: "All our advisors are SEBI registered and certified financial planners.",
      icon: "🏆"
    },
    {
      title: "Transparent Fee Structure",
      description: "No hidden charges. Clear, upfront fee structure with no commission bias.",
      icon: "💎"
    },
    {
      title: "Technology-Driven",
      description: "Advanced tools and platforms for seamless investment tracking and management.",
      icon: "🚀"
    },
    {
      title: "Personalized Approach",
      description: "Every recommendation is tailored to your unique financial situation and goals.",
      icon: "🎯"
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
            <p className="text-xl opacity-90 max-w-3xl mx-auto leading-relaxed mb-8">
              Comprehensive financial solutions designed to help you achieve your dreams and secure your future. From systematic investment planning to wealth management, we've got you covered.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/calculator"
                className="bg-white text-primary-500 font-semibold py-4 px-8 rounded-xl hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 inline-flex items-center justify-center"
              >
                <FaCalculator className="mr-2" />
                Try Calculator
              </Link>
              
              <a
                href="https://wa.me/919876543210"
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
              Everything you need to build, protect, and grow your wealth under one roof
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
              We make financial planning simple and straightforward with our proven process
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
              Here's what sets us apart from other financial advisory firms
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
                href="https://wa.me/919876543210"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white text-primary-500 font-semibold py-4 px-8 rounded-xl hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 inline-flex items-center justify-center"
              >
                <FaWhatsapp className="mr-2" />
                WhatsApp Consultation
              </a>
              
              <a
                href="tel:+919876543210"
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
