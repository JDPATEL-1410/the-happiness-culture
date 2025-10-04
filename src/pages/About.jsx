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
  FaEnvelope
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

  const team = [
    {
      name: "Rahul Mehta",
      designation: "Founder & CEO",
      experience: "12+ Years",
      specialization: "Wealth Management & Portfolio Strategy",
      description: "Certified Financial Planner with expertise in mutual funds and investment advisory services.",
      social: {
        linkedin: "#",
        twitter: "#",
        email: "rahul@thehappynessculture.com"
      }
    },
    {
      name: "Sneha Gupta",
      designation: "Senior Financial Advisor",
      experience: "8+ Years",
      specialization: "Tax Planning & Insurance",
      description: "Specialist in tax-efficient investment strategies and comprehensive insurance planning.",
      social: {
        linkedin: "#",
        twitter: "#",
        email: "sneha@thehappynessculture.com"
      }
    },
    {
      name: "Vikash Sharma",
      designation: "Investment Analyst",
      experience: "6+ Years",
      specialization: "Market Research & Analysis",
      description: "Expert in market analysis and research-driven investment recommendations.",
      social: {
        linkedin: "#",
        twitter: "#",
        email: "vikash@thehappynessculture.com"
      }
    }
  ];

  const milestones = [
    { year: "2017", title: "Company Founded", description: "Started with a vision to democratize financial planning" },
    { year: "2018", title: "First 1000 Clients", description: "Reached our first major milestone of serving 1000+ families" },
    { year: "2020", title: "₹100Cr AUM", description: "Crossed ₹100 Crore in Assets Under Management" },
    { year: "2022", title: "SEBI Registration", description: "Became SEBI registered investment advisor" },
    { year: "2024", title: "₹500Cr AUM", description: "Achieved ₹500 Crore in Assets Under Management" },
    { year: "2025", title: "10,000+ Clients", description: "Serving over 10,000 happy families across India" }
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
            <p className="text-xl opacity-90 max-w-3xl mx-auto leading-relaxed">
              We believe that financial literacy and smart investment decisions are the keys to achieving true happiness and financial freedom. Our mission is to make wealth creation accessible, simple, and rewarding for everyone.
            </p>
          </motion.div>
        </div>
      </section>

     {/* Mission, Vision & Purpose */}
<section className="py-20 bg-white">
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
    <p className="text-gray-600 leading-relaxed flex-grow">
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
    <p className="text-gray-600 leading-relaxed flex-grow">
      To be India’s most trusted wealth partner, transforming the way people think about money—
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
      className="mt-16 bg-gradient-to-r from-primary-100 to-success-100 rounded-2xl p-10"
    >
      <h2 className="text-3xl font-bold text-gray-800 mb-6 text-center">Our Purpose & Core Values</h2>
      <p className="text-lg text-gray-700 text-center mb-8">
        These are our non-negotiables — the DNA that drives every action, decision, and relationship.
      </p>
      <ul className="grid md:grid-cols-2 gap-6 text-gray-700">
        <li><span className="font-bold text-primary-600">1) Integrity –</span> Honesty and transparency in every interaction.</li>
        <li><span className="font-bold text-primary-600">2) Rational Thinking –</span> Decisions rooted in science, logic, and long-term perspective.</li>
        <li><span className="font-bold text-primary-600">3) Happiness First –</span> Wealth is a means to joyful, fulfilling lives, not just numbers.</li>
        <li><span className="font-bold text-primary-600">4) Fitness & Discipline –</span> Respecting the body and mind as the foundation of success.</li>
        <li><span className="font-bold text-primary-600">5) Equality –</span> Serving all investors with fairness and dignity, beyond caste, creed, or status.</li>
        <li><span className="font-bold text-primary-600">6) Visionary Growth –</span> Always looking at the long-term impact of today’s actions.</li>
        <li><span className="font-bold text-primary-600">7) Contribution –</span> Creating positive change in society through education, community, and prosperity.</li>
      </ul>
    </motion.div>
  </div>
</section>


      {/* Core Values */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-800 mb-4">Our Core Values</h2>
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
                className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 text-center group"
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
      <section className="py-20 bg-white">
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
              From a small startup to India's trusted financial advisory firm - here's our growth story
            </p>
          </motion.div>

          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 bg-gradient-to-b from-primary-500 to-success-500 h-full"></div>

            <div className="space-y-12">
              {milestones.map((milestone, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className={`flex items-center ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}
                >
                  <div className="flex-1 px-8">
                    <div className={`bg-white rounded-2xl p-6 shadow-lg ${index % 2 === 0 ? 'text-right' : 'text-left'}`}>
                      <div className="text-primary-500 font-bold text-lg mb-2">{milestone.year}</div>
                      <h3 className="text-xl font-bold text-gray-800 mb-2">{milestone.title}</h3>
                      <p className="text-gray-600">{milestone.description}</p>
                    </div>
                  </div>
                  
                  <div className="w-6 h-6 bg-success-500 rounded-full border-4 border-white shadow-lg z-10"></div>
                  
                  <div className="flex-1 px-8"></div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Meet Our Team */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-800 mb-4">Meet Our Expert Team</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our team of certified financial experts is dedicated to helping you achieve your financial goals
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 text-center group"
              >
                {/* Avatar */}
                <div className="w-24 h-24 bg-gradient-to-r from-primary-500 to-success-500 rounded-full flex items-center justify-center text-white text-2xl font-bold mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                  {member.name.split(' ').map(n => n[0]).join('')}
                </div>

                {/* Info */}
                <h3 className="text-xl font-bold text-gray-800 mb-2">{member.name}</h3>
                <p className="text-primary-500 font-semibold mb-1">{member.designation}</p>
                <p className="text-success-600 text-sm mb-2">{member.experience} Experience</p>
                <p className="text-gray-600 text-sm mb-4 font-medium">{member.specialization}</p>
                <p className="text-gray-600 text-sm leading-relaxed mb-6">{member.description}</p>

                {/* Social Links */}
                <div className="flex justify-center space-x-4">
                  <a
                    href={member.social.linkedin}
                    className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center text-white hover:bg-blue-700 transition-colors duration-300"
                  >
                    <FaLinkedin />
                  </a>
                  <a
                    href={member.social.twitter}
                    className="w-10 h-10 bg-blue-400 rounded-full flex items-center justify-center text-white hover:bg-blue-500 transition-colors duration-300"
                  >
                    <FaTwitter />
                  </a>
                  <a
                    href={`mailto:${member.social.email}`}
                    className="w-10 h-10 bg-success-500 rounded-full flex items-center justify-center text-white hover:bg-success-600 transition-colors duration-300"
                  >
                    <FaEnvelope />
                  </a>
                </div>
              </motion.div>
            ))}
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
              { name: "ISO 27001:2013", icon: "ISO", color: "bg-green-500" },
              { name: "CFP Certified", icon: "CFP", color: "bg-purple-500" },
              { name: "5-Star Rated", icon: "★", color: "bg-yellow-500" }
            ].map((cert, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center group"
              >
                <div className={`w-20 h-20 ${cert.color} rounded-2xl flex items-center justify-center text-white font-bold text-xl mx-auto mb-4 group-hover:scale-110 transition-transform duration-300`}>
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

