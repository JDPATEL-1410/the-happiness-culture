import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useForm } from 'react-hook-form';
import { 
  FaPhone, 
  FaEnvelope, 
  FaMapMarkerAlt, 
  FaWhatsapp,
  FaClock,
  FaLinkedin,
  FaInstagram,
  FaYoutube,
  FaCheckCircle,
  FaPaperPlane,
  FaTwitter
} from 'react-icons/fa';

const Contact = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  
  const { register, handleSubmit, formState: { errors }, reset } = useForm();

  const contactInfo = [
    {
      icon: FaPhone,
      title: "Phone",
      details: ["+91 93228 35288"],
      link: "tel:+919322835288",
      color: "from-blue-500 to-blue-600"
    },
    {
      icon: FaWhatsapp,
      title: "WhatsApp",
      details: ["Quick Response", "Available 24/7"],
      link: "https://wa.me/919322835288",
      color: "from-green-500 to-green-600"
    },
    {
      icon: FaEnvelope,
      title: "Email",
      details: ["info@thehappynessculture.com"],
      link: "mailto:info@thehappynessculture.com",
      color: "from-red-500 to-red-600"
    },
    {
      icon: FaMapMarkerAlt,
      title: "Office",
      details: ["Mumbai, Maharashtra", "400028, India"],
      color: "from-purple-500 to-purple-600"
    }
  ];

  const businessHours = [
    { day: "Monday - Friday", time: "9:00 AM - 7:00 PM" },
    { day: "Saturday", time: "10:00 AM - 5:00 PM" },
    { day: "Sunday", time: "By Appointment" }
  ];

  const services = [
    "Financial Planning",
    "Mutual Funds & SIPs",
    "SIF (Specialised Investment Fund)",
    "PMS & AIF",
    "Retirement Planning",
    "P2P Investing"
  ];

  const socialLinks = [
    { icon: FaLinkedin, href: "https://linkedin.com/company/thehappynessculture", color: "hover:bg-blue-600", label: "LinkedIn" },
    { icon: FaInstagram, href: "https://instagram.com/thehappynessculture", color: "hover:bg-pink-600", label: "Instagram" },
    { icon: FaYoutube, href: "https://youtube.com/@thehappynessculture", color: "hover:bg-red-600", label: "YouTube" },
    { icon: FaTwitter, href: "https://twitter.com/thehappynessc", color: "hover:bg-blue-400", label: "Twitter" }
  ];

  const onSubmit = async (data) => {
    setIsSubmitting(true);
    
    try {
      await new Promise(resolve => setTimeout(resolve, 2000));
      console.log('Form submitted:', data);
      setIsSubmitted(true);
      reset();
      
      // Auto-reset after 5 seconds
      setTimeout(() => {
        setIsSubmitted(false);
      }, 5000);
    } catch (error) {
      console.error('Error submitting form:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isSubmitted) {
    return (
      <div className="pt-24 min-h-screen flex items-center justify-center bg-gradient-to-br from-primary-50 to-success-50 px-4">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          className="text-center max-w-md bg-white rounded-3xl shadow-2xl p-8 md:p-12"
        >
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.2, type: "spring" }}
            className="w-24 h-24 bg-gradient-to-r from-success-500 to-success-600 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg"
          >
            <FaCheckCircle className="text-white text-4xl" />
          </motion.div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Thank You!</h2>
          <p className="text-lg text-gray-600 mb-8 leading-relaxed">
            Your message has been sent successfully. Our team will contact you within 24 hours.
          </p>
          <button
            onClick={() => setIsSubmitted(false)}
            className="bg-gradient-to-r from-primary-500 to-primary-600 hover:from-primary-600 hover:to-primary-700 text-white font-semibold py-3 px-8 rounded-xl transition-all duration-300 transform hover:scale-105 shadow-lg"
          >
            Send Another Message
          </button>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="pt-20 lg:pt-24">
      {/* Hero Section */}
      <section className="py-16 md:py-20 lg:py-24 bg-gradient-to-br from-primary-500 via-primary-600 to-success-500 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(255,255,255,0.1),transparent_50%)]"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6"
            >
              Get In Touch
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="text-lg md:text-xl opacity-90 max-w-3xl mx-auto leading-relaxed mb-8 px-4"
            >
              Ready to start your wealth creation journey? Our expert advisors are here to help you achieve your financial goals. Schedule a free consultation today!
            </motion.p>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="flex flex-wrap items-center justify-center gap-4 md:gap-8 text-sm md:text-base"
            >
              {['Free Consultation', 'Expert Guidance', 'Personalized Solutions'].map((item, index) => (
                <div key={index} className="flex items-center bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full">
                  <div className="w-2 h-2 bg-success-300 rounded-full mr-2"></div>
                  {item}
                </div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="py-16 md:py-20 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-5 gap-8 lg:gap-12">
            
            {/* Contact Form - Takes 3 columns */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="lg:col-span-3"
            >
              <div className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-3xl p-6 md:p-8 lg:p-10 shadow-xl">
                <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Send us a Message</h2>
                <p className="text-gray-600 mb-8 text-base md:text-lg">
                  Fill out the form below and we'll get back to you as soon as possible.
                </p>

                <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">First Name *</label>
                      <input
                        type="text"
                        {...register('firstName', { required: 'First name is required' })}
                        className={`w-full px-4 py-3 rounded-xl border-2 transition-all duration-300 ${
                          errors.firstName 
                            ? 'border-red-500 focus:border-red-500' 
                            : 'border-gray-200 focus:border-primary-500'
                        } focus:outline-none bg-white`}
                        placeholder="John"
                      />
                      {errors.firstName && (
                        <p className="text-red-500 text-sm mt-2 flex items-center">
                          <span className="mr-1">⚠</span> {errors.firstName.message}
                        </p>
                      )}
                    </div>

                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">Last Name *</label>
                      <input
                        type="text"
                        {...register('lastName', { required: 'Last name is required' })}
                        className={`w-full px-4 py-3 rounded-xl border-2 transition-all duration-300 ${
                          errors.lastName 
                            ? 'border-red-500 focus:border-red-500' 
                            : 'border-gray-200 focus:border-primary-500'
                        } focus:outline-none bg-white`}
                        placeholder="Doe"
                      />
                      {errors.lastName && (
                        <p className="text-red-500 text-sm mt-2 flex items-center">
                          <span className="mr-1">⚠</span> {errors.lastName.message}
                        </p>
                      )}
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">Email Address *</label>
                    <input
                      type="email"
                      {...register('email', { 
                        required: 'Email is required',
                        pattern: {
                          value: /^\S+@\S+$/i,
                          message: 'Invalid email address'
                        }
                      })}
                      className={`w-full px-4 py-3 rounded-xl border-2 transition-all duration-300 ${
                        errors.email 
                          ? 'border-red-500 focus:border-red-500' 
                          : 'border-gray-200 focus:border-primary-500'
                      } focus:outline-none bg-white`}
                      placeholder="john.doe@example.com"
                    />
                    {errors.email && (
                      <p className="text-red-500 text-sm mt-2 flex items-center">
                        <span className="mr-1">⚠</span> {errors.email.message}
                      </p>
                    )}
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">Phone Number *</label>
                    <input
                      type="tel"
                      {...register('phone', { 
                        required: 'Phone number is required',
                        pattern: {
                          value: /^[0-9]{10}$/,
                          message: 'Please enter a valid 10-digit phone number'
                        }
                      })}
                      className={`w-full px-4 py-3 rounded-xl border-2 transition-all duration-300 ${
                        errors.phone 
                          ? 'border-red-500 focus:border-red-500' 
                          : 'border-gray-200 focus:border-primary-500'
                      } focus:outline-none bg-white`}
                      placeholder="9876543210"
                    />
                    {errors.phone && (
                      <p className="text-red-500 text-sm mt-2 flex items-center">
                        <span className="mr-1">⚠</span> {errors.phone.message}
                      </p>
                    )}
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">Service Interested In *</label>
                    <select
                      {...register('service', { required: 'Please select a service' })}
                      className={`w-full px-4 py-3 rounded-xl border-2 transition-all duration-300 ${
                        errors.service 
                          ? 'border-red-500 focus:border-red-500' 
                          : 'border-gray-200 focus:border-primary-500'
                      } focus:outline-none bg-white`}
                    >
                      <option value="">Select a service</option>
                      {services.map((service) => (
                        <option key={service} value={service}>{service}</option>
                      ))}
                    </select>
                    {errors.service && (
                      <p className="text-red-500 text-sm mt-2 flex items-center">
                        <span className="mr-1">⚠</span> {errors.service.message}
                      </p>
                    )}
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">Message *</label>
                    <textarea
                      rows="5"
                      {...register('message', { required: 'Message is required' })}
                      className={`w-full px-4 py-3 rounded-xl border-2 transition-all duration-300 resize-none ${
                        errors.message 
                          ? 'border-red-500 focus:border-red-500' 
                          : 'border-gray-200 focus:border-primary-500'
                      } focus:outline-none bg-white`}
                      placeholder="Tell us about your financial goals and how we can help..."
                    ></textarea>
                    {errors.message && (
                      <p className="text-red-500 text-sm mt-2 flex items-center">
                        <span className="mr-1">⚠</span> {errors.message.message}
                      </p>
                    )}
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-gradient-to-r from-primary-500 to-primary-600 hover:from-primary-600 hover:to-primary-700 disabled:from-gray-400 disabled:to-gray-400 text-white font-bold py-4 px-8 rounded-xl transition-all duration-300 flex items-center justify-center shadow-lg hover:shadow-xl transform hover:scale-[1.02] disabled:transform-none"
                  >
                    {isSubmitting ? (
                      <>
                        <svg className="animate-spin h-5 w-5 mr-3" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none"></circle>
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                        Sending Message...
                      </>
                    ) : (
                      <>
                        <FaPaperPlane className="mr-3" />
                        Send Message
                      </>
                    )}
                  </button>
                </form>
              </div>
            </motion.div>

            {/* Contact Information - Takes 2 columns */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="lg:col-span-2 space-y-6"
            >
              <div>
                <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Contact Information</h2>
                <p className="text-gray-600 text-base md:text-lg leading-relaxed">
                  Get in touch with us through any of the following channels. We're here to help you succeed!
                </p>
              </div>

              {/* Contact Methods */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-4">
                {contactInfo.map((info, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1"
                  >
                    <div className={`w-14 h-14 bg-gradient-to-br ${info.color} rounded-xl flex items-center justify-center mb-4 shadow-md`}>
                      <info.icon className="text-white text-2xl" />
                    </div>
                    <h3 className="font-bold text-gray-800 mb-2 text-lg">{info.title}</h3>
                    {info.details.map((detail, idx) => (
                      <p key={idx} className="text-gray-600 text-sm leading-relaxed">
                        {info.link && idx === 0 ? (
                          <a href={info.link} className="hover:text-primary-500 transition-colors duration-300 font-medium">
                            {detail}
                          </a>
                        ) : (
                          detail
                        )}
                      </p>
                    ))}
                  </motion.div>
                ))}
              </div>

              {/* Business Hours */}
              <div className="bg-white rounded-2xl p-6 shadow-lg">
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-gradient-to-br from-primary-500 to-primary-600 rounded-xl flex items-center justify-center mr-4">
                    <FaClock className="text-white text-xl" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-800">Business Hours</h3>
                </div>
                <div className="space-y-4">
                  {businessHours.map((hours, index) => (
                    <div key={index} className="flex justify-between items-center pb-3 border-b border-gray-100 last:border-0">
                      <span className="text-gray-700 font-semibold text-sm">{hours.day}</span>
                      <span className="text-gray-600 text-sm">{hours.time}</span>
                    </div>
                  ))}
                </div>
              </div>

{/* Social Links */}
<div className="bg-gradient-to-br from-primary-50 to-success-50 rounded-2xl p-6 shadow-lg">
  <h3 className="text-xl font-bold text-gray-800 mb-3">Follow Us</h3>
  <p className="text-gray-600 mb-6 text-sm">
    Stay connected for the latest financial insights and tips
  </p>
  <div className="flex flex-wrap gap-3">
    <motion.a
      href="https://linkedin.com/company/thehappynessculture"
      target="_blank"
      rel="noopener noreferrer"
      whileHover={{ scale: 1.1, y: -3 }}
      whileTap={{ scale: 0.95 }}
      aria-label="LinkedIn"
      className="w-12 h-12 bg-blue-600 hover:bg-blue-700 rounded-xl flex items-center justify-center transition-all duration-300 shadow-md hover:shadow-lg"
    >
      <FaLinkedin className="text-xl text-white" />
    </motion.a>
    
    <motion.a
      href="https://instagram.com/thehappynessculture"
      target="_blank"
      rel="noopener noreferrer"
      whileHover={{ scale: 1.1, y: -3 }}
      whileTap={{ scale: 0.95 }}
      aria-label="Instagram"
      className="w-12 h-12 bg-pink-600 hover:bg-pink-700 rounded-xl flex items-center justify-center transition-all duration-300 shadow-md hover:shadow-lg"
    >
      <FaInstagram className="text-xl text-white" />
    </motion.a>
    
    <motion.a
      href="https://youtube.com/@thehappynessculture"
      target="_blank"
      rel="noopener noreferrer"
      whileHover={{ scale: 1.1, y: -3 }}
      whileTap={{ scale: 0.95 }}
      aria-label="YouTube"
      className="w-12 h-12 bg-red-600 hover:bg-red-700 rounded-xl flex items-center justify-center transition-all duration-300 shadow-md hover:shadow-lg"
    >
      <FaYoutube className="text-xl text-white" />
    </motion.a>
    
    <motion.a
      href="https://twitter.com/thehappynessc"
      target="_blank"
      rel="noopener noreferrer"
      whileHover={{ scale: 1.1, y: -3 }}
      whileTap={{ scale: 0.95 }}
      aria-label="Twitter"
      className="w-12 h-12 bg-blue-400 hover:bg-blue-500 rounded-xl flex items-center justify-center transition-all duration-300 shadow-md hover:shadow-lg"
    >
      <FaTwitter className="text-xl text-white" />
    </motion.a>
  </div>
</div>

            </motion.div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-16 md:py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-800 mb-4">Visit Our Office</h2>
            <p className="text-lg md:text-xl text-gray-600">
              Located in the heart of Mumbai's financial district
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="rounded-3xl overflow-hidden shadow-2xl"
          >
            <div className="h-96 md:h-[500px] w-full">
              <iframe
                title="The Happyness Culture Office Location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3772.594771071152!2d72.83370207493997!3d19.03271898216313!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7ce21e06c26a7%3A0xd77d8fd0b6e8b8c4!2sYash%20Society%2C%20Off%20Ranade%20Road%2C%20Mumbai%2C%20Maharashtra%20400028!5e0!3m2!1sen!2sin!4v1696583256741!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </motion.div>

          {/* Address Card Below Map */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="mt-8 bg-white rounded-2xl p-6 md:p-8 shadow-lg"
          >
            <div className="flex flex-col md:flex-row items-start md:items-center gap-4">
              <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-purple-600 rounded-2xl flex items-center justify-center flex-shrink-0">
                <FaMapMarkerAlt className="text-white text-2xl" />
              </div>
              <div className="flex-1">
                <h3 className="text-xl font-bold text-gray-800 mb-2">Our Office Address</h3>
                <p className="text-gray-600 leading-relaxed">
                  Flat 5, 2nd Floor, Yash Society, Off Ranade Road, Opp Nirmal Nursing Home, Mumbai, Maharashtra, 400028, India
                </p>
              </div>
              <a
                href="https://maps.google.com/?q=Yash+Society+Off+Ranade+Road+Mumbai"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-primary-500 hover:bg-primary-600 text-white font-semibold py-3 px-6 rounded-xl transition-all duration-300 transform hover:scale-105 shadow-md whitespace-nowrap"
              >
                Get Directions
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
