import React from 'react';
import { motion } from 'framer-motion';
import { 
  FaRocket, 
  FaEye, 
  FaHeart, 
  FaUsers, 
  FaAward, 
  FaCertificate,
  FaLinkedin,
  FaTwitter,
  FaEnvelope,
  FaArrowRight
} from 'react-icons/fa';

const About = () => {
  const values = [
    {
      icon: FaHeart,
      title: "Client-Centric Approach",
      description: "Every decision we make is centered around our clients' best interests and long-term financial success."
    },
    {
      icon: FaCertificate,
      title: "Transparency",
      description: "Complete transparency in our processes, fees, and investment recommendations builds lasting trust."
    },
    {
      icon: FaAward,
      title: "Excellence",
      description: "We strive for excellence in every service we provide, continuously improving our expertise and offerings."
    },
    {
      icon: FaUsers,
      title: "Integrity",
      description: "We maintain the highest ethical standards and integrity in all our business practices and client relationships."
    }
  ];

  const milestones = [
    { year: "2023", title: "Company Founded", description: "Started with a vision to build rational wealth systems" },
    { year: "2024", title: "First 500 Families", description: "Reached our first major milestone of serving 500+ families" },
    { year: "2025", title: "₹29Cr AUM", description: "Crossed ₹29 Crore in Assets Under Management with 750+ families" }
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
            <h1 className="text-5xl font-bold mb-6">About The Happyness Culture</h1>
            <p className="text-xl md:text-2xl opacity-90 max-w-4xl mx-auto leading-relaxed font-semibold mb-4">
              True wealth is peace of mind.
            </p>
            <p className="text-lg opacity-80 max-w-3xl mx-auto leading-relaxed">
              We believe financial success isn't just about returns—it's about creating a life of balance, security, and joy.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Main About Section - Short & Credibility Focused */}
      <section className="py-20 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <h2 className="text-4xl font-bold text-gray-800 mb-8">About The Happyness Culture</h2>
            
            <div className="bg-gradient-to-br from-primary-50 to-success-50 rounded-2xl p-8 mb-8">
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                Founded by <span className="font-bold text-primary-600">Aditya Palav</span>, Chartered Wealth Manager & Behavioural Finance Coach. 
                The Happyness Culture is built on one belief — <span className="font-bold italic">True wealth is peace of mind</span>.
              </p>
              
              <p className="text-lg text-gray-700 leading-relaxed">
                With 20+ years of experience in Indian markets and over 750 happy investors, Aditya and his team blend rational investing, 
                behavioural finance, and ethical advice to help you achieve lifelong financial balance.
              </p>
            </div>

            <motion.a
              href="/contact"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center gap-2 bg-gradient-to-r from-primary-500 to-success-500 text-white font-bold py-4 px-8 rounded-xl hover:shadow-lg transition-all duration-300"
            >
              <span>Know Our Story</span>
              <FaArrowRight />
            </motion.a>
          </motion.div>
        </div>
      </section>

      {/* Mission, Vision & Purpose */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-stretch">
            {/* Mission */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-primary-50 to-success-50 rounded-2xl p-8 h-full flex flex-col"
            >
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-primary-500 rounded-xl flex items-center justify-center mr-4">
                  <FaRocket className="text-white text-xl" />
                </div>
                <h2 className="text-3xl font-bold text-gray-800">Our Mission</h2>
              </div>
              <p className="text-gray-600 leading-relaxed text-lg flex-grow">
                To empower individuals and families to achieve financial freedom and lasting happiness 
                through rational, transparent, and visionary wealth management.
              </p>
            </motion.div>

            {/* Vision */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-success-50 to-primary-50 rounded-2xl p-8 h-full flex flex-col"
            >
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-success-500 rounded-xl flex items-center justify-center mr-4">
                  <FaEye className="text-white text-xl" />
                </div>
                <h2 className="text-3xl font-bold text-gray-800">Our Vision</h2>
              </div>
              <p className="text-gray-600 leading-relaxed text-lg flex-grow">
                To be India's most trusted wealth partner, transforming the way people think about money—
                beyond returns, towards a life of abundance, integrity, and joy. By 2040, we aim to touch 
                millions of lives, nurture a community of happy investors, and build a ₹10,000 crore legacy 
                of prosperity.
              </p>
            </motion.div>
          </div>

          {/* Purpose & Core Values */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="mt-16 bg-white rounded-2xl p-10 shadow-lg"
          >
            <h2 className="text-3xl font-bold text-gray-800 mb-6 text-center">Our Purpose & Core Values</h2>
            <p className="text-lg text-gray-700 text-center mb-8">
              These are our non-negotiables — the DNA that drives every action, decision, and relationship.
            </p>
            <div className="grid md:grid-cols-2 gap-6 text-gray-700">
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 bg-primary-500 rounded-full flex items-center justify-center text-white font-bold text-sm flex-shrink-0">1</div>
                <p><span className="font-bold text-primary-600">Integrity –</span> Honesty and transparency in every interaction.</p>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 bg-primary-500 rounded-full flex items-center justify-center text-white font-bold text-sm flex-shrink-0">2</div>
                <p><span className="font-bold text-primary-600">Rational Thinking –</span> Decisions rooted in science, logic, and long-term perspective.</p>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 bg-primary-500 rounded-full flex items-center justify-center text-white font-bold text-sm flex-shrink-0">3</div>
                <p><span className="font-bold text-primary-600">Happiness First –</span> Wealth is a means to joyful, fulfilling lives, not just numbers.</p>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 bg-primary-500 rounded-full flex items-center justify-center text-white font-bold text-sm flex-shrink-0">4</div>
                <p><span className="font-bold text-primary-600">Fitness & Discipline –</span> Respecting the body and mind as the foundation of success.</p>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 bg-primary-500 rounded-full flex items-center justify-center text-white font-bold text-sm flex-shrink-0">5</div>
                <p><span className="font-bold text-primary-600">Equality –</span> Serving all investors with fairness and dignity, beyond caste, creed, or status.</p>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 bg-primary-500 rounded-full flex items-center justify-center text-white font-bold text-sm flex-shrink-0">6</div>
                <p><span className="font-bold text-primary-600">Visionary Growth –</span> Always looking at the long-term impact of today's actions.</p>
              </div>
              <div className="flex items-start gap-3 md:col-span-2 justify-center">
                <div className="w-8 h-8 bg-primary-500 rounded-full flex items-center justify-center text-white font-bold text-sm flex-shrink-0">7</div>
                <p><span className="font-bold text-primary-600">Contribution –</span> Creating positive change in society through education, community, and prosperity.</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-800 mb-4">What We Stand For</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              These fundamental principles guide everything we do and shape how we serve our clients
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-gray-50 rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 text-center group"
              >
                <div className="w-16 h-16 bg-gradient-to-r from-primary-500 to-success-500 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                  <value.icon className="text-white text-2xl" />
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-4">{value.title}</h3>
                <p className="text-gray-600 leading-relaxed">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Journey */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-800 mb-4">Our Journey</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Building trust, one family at a time
            </p>
          </motion.div>

          <div className="relative max-w-4xl mx-auto">
            {/* Timeline Line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 bg-gradient-to-b from-primary-500 to-success-500 h-full hidden lg:block"></div>

            <div className="space-y-12">
              {milestones.map((milestone, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className={`flex items-center ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} flex-col lg:flex`}
                >
                  <div className="flex-1 px-4 lg:px-8 mb-4 lg:mb-0">
                    <div className={`bg-white rounded-2xl p-6 shadow-lg ${index % 2 === 0 ? 'lg:text-right' : 'lg:text-left'} text-center`}>
                      <div className="text-primary-500 font-bold text-lg mb-2">{milestone.year}</div>
                      <h3 className="text-xl font-bold text-gray-800 mb-2">{milestone.title}</h3>
                      <p className="text-gray-600">{milestone.description}</p>
                    </div>
                  </div>
                  
                  <div className="w-6 h-6 bg-success-500 rounded-full border-4 border-white shadow-lg z-10 hidden lg:block"></div>
                  
                  <div className="flex-1 px-4 lg:px-8 hidden lg:block"></div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Certifications & Awards */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-800 mb-4">Certifications & Recognition</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our commitment to excellence is recognized by leading industry bodies
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { name: "SEBI Registered", icon: "S", color: "bg-blue-500" },
              { name: "ISO Certified", icon: "ISO", color: "bg-green-500" },
              { name: "AMFI Member", icon: "A", color: "bg-purple-500" },
              { name: "ARN-119542", icon: "✓", color: "bg-success-500" }
            ].map((cert, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center group"
              >
                <div className={`w-20 h-20 ${cert.color} rounded-2xl flex items-center justify-center text-white font-bold text-xl mx-auto mb-4 group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                  {cert.icon}
                </div>
                <p className="text-gray-800 font-semibold">{cert.name}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
