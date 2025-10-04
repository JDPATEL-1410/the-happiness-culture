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
  FaPaperPlane
} from 'react-icons/fa';

const Contact = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  
  const { register, handleSubmit, formState: { errors }, reset } = useForm();

  const contactInfo = [
    {
      icon: FaPhone,
      title: "Phone",
      details: ["+91 93228 35288", "+91 87654 32109"],
      link: "tel:+919876543210",
      color: "bg-blue-500"
    },
    {
      icon: FaWhatsapp,
      title: "WhatsApp",
      details: ["Available 24/7", "Quick Response"],
      link: "https://wa.me/919876543210",
      color: "bg-green-500"
    },
    {
      icon: FaEnvelope,
      title: "Email",
      details: ["info@thehappynessculture.com", "support@thehappynessculture.com"],
      link: "mailto:info@thehappynessculture.com",
      color: "bg-red-500"
    },
    {
      icon: FaMapMarkerAlt,
      title: "Office",
      details: ["Flat 5, 2nd Floor, Yash Society, Off Ranade Road, Opp Nirmal Nursing Home, Mumbai, Maharashtra, 400028, India"],
      color: "bg-purple-500"
    }
  ];

  const businessHours = [
    { day: "Monday - Friday", time: "9:00 AM - 7:00 PM" },
    { day: "Saturday", time: "10:00 AM - 5:00 PM" },
    { day: "Sunday", time: "By Appointment" }
  ];

  const services = [
    "Financial Planning Consultation",
    "SIP & Mutual Fund Advisory",
    "Tax Planning Services",
    "Insurance Planning",
    "Retirement Planning",
    "Wealth Management"
  ];

  const socialLinks = [
    { icon: FaLinkedin, href: "https://linkedin.com/company/thehappynessculture", color: "hover:text-blue-600" },
    { icon: FaInstagram, href: "https://instagram.com/thehappynessculture", color: "hover:text-pink-600" },
    { icon: FaYoutube, href: "https://youtube.com/@thehappynessculture", color: "hover:text-red-600" },
    { icon: FaWhatsapp, href: "https://wa.me/919876543210", color: "hover:text-green-600" }
  ];

  const onSubmit = async (data) => {
    setIsSubmitting(true);
    
    // Simulate API call
    try {
      await new Promise(resolve => setTimeout(resolve, 2000));
      console.log('Form submitted:', data);
      setIsSubmitted(true);
      reset();
    } catch (error) {
      console.error('Error submitting form:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isSubmitted) {
    return (
      <div className="pt-16 min-h-screen flex items-center justify-center bg-gray-50">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          className="text-center p-8"
        >
          <div className="w-20 h-20 bg-success-500 rounded-full flex items-center justify-center mx-auto mb-6">
            <FaCheckCircle className="text-white text-3xl" />
          </div>
          <h2 className="text-3xl font-bold text-gray-800 mb-4">Thank You!</h2>
          <p className="text-lg text-gray-600 mb-6">
            Your message has been sent successfully. Our team will contact you within 24 hours.
          </p>
          <button
            onClick={() => setIsSubmitted(false)}
            className="bg-primary-500 hover:bg-primary-600 text-white font-semibold py-3 px-8 rounded-xl transition-all duration-300"
          >
            Send Another Message
          </button>
        </motion.div>
      </div>
    );
  }

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
            <h1 className="text-5xl font-bold mb-6">Get In Touch</h1>
            <p className="text-xl opacity-90 max-w-3xl mx-auto leading-relaxed mb-8">
              Ready to start your financial journey? Our expert advisors are here to help you achieve your financial goals. Schedule a free consultation today!
            </p>
            
            <div className="flex items-center justify-center space-x-8 text-sm">
              <div className="flex items-center">
                <div className="w-2 h-2 bg-success-400 rounded-full mr-2"></div>
                Free Consultation
              </div>
              <div className="flex items-center">
                <div className="w-2 h-2 bg-success-400 rounded-full mr-2"></div>
                Expert Guidance
              </div>
              <div className="flex items-center">
                <div className="w-2 h-2 bg-success-400 rounded-full mr-2"></div>
                Personalized Solutions
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="bg-gray-50 rounded-2xl p-8"
            >
              <h2 className="text-3xl font-bold text-gray-800 mb-6">Send us a Message</h2>
              <p className="text-gray-600 mb-8">
                Fill out the form below and we'll get back to you as soon as possible.
              </p>

              <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="form-label">First Name</label>
                    <input
                      type="text"
                      {...register('firstName', { required: 'First name is required' })}
                      className={`form-input ${errors.firstName ? 'border-red-500' : ''}`}
                      placeholder="Enter your first name"
                    />
                    {errors.firstName && (
                      <p className="text-red-500 text-sm mt-1">{errors.firstName.message}</p>
                    )}
                  </div>

                  <div>
                    <label className="form-label">Last Name</label>
                    <input
                      type="text"
                      {...register('lastName', { required: 'Last name is required' })}
                      className={`form-input ${errors.lastName ? 'border-red-500' : ''}`}
                      placeholder="Enter your last name"
                    />
                    {errors.lastName && (
                      <p className="text-red-500 text-sm mt-1">{errors.lastName.message}</p>
                    )}
                  </div>
                </div>

                <div>
                  <label className="form-label">Email Address</label>
                  <input
                    type="email"
                    {...register('email', { 
                      required: 'Email is required',
                      pattern: {
                        value: /^\S+@\S+$/i,
                        message: 'Invalid email address'
                      }
                    })}
                    className={`form-input ${errors.email ? 'border-red-500' : ''}`}
                    placeholder="Enter your email address"
                  />
                  {errors.email && (
                    <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>
                  )}
                </div>

                <div>
                  <label className="form-label">Phone Number</label>
                  <input
                    type="tel"
                    {...register('phone', { 
                      required: 'Phone number is required',
                      pattern: {
                        value: /^[0-9]{10}$/,
                        message: 'Please enter a valid 10-digit phone number'
                      }
                    })}
                    className={`form-input ${errors.phone ? 'border-red-500' : ''}`}
                    placeholder="Enter your phone number"
                  />
                  {errors.phone && (
                    <p className="text-red-500 text-sm mt-1">{errors.phone.message}</p>
                  )}
                </div>

                <div>
                  <label className="form-label">Service Interested In</label>
                  <select
                    {...register('service', { required: 'Please select a service' })}
                    className={`form-input ${errors.service ? 'border-red-500' : ''}`}
                  >
                    <option value="">Select a service</option>
                    {services.map((service) => (
                      <option key={service} value={service}>{service}</option>
                    ))}
                  </select>
                  {errors.service && (
                    <p className="text-red-500 text-sm mt-1">{errors.service.message}</p>
                  )}
                </div>

                <div>
                  <label className="form-label">Message</label>
                  <textarea
                    rows="5"
                    {...register('message', { required: 'Message is required' })}
                    className={`form-input ${errors.message ? 'border-red-500' : ''}`}
                    placeholder="Tell us about your financial goals and how we can help..."
                  ></textarea>
                  {errors.message && (
                    <p className="text-red-500 text-sm mt-1">{errors.message.message}</p>
                  )}
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-primary-500 hover:bg-primary-600 disabled:bg-gray-400 text-white font-semibold py-4 px-8 rounded-xl transition-all duration-300 flex items-center justify-center"
                >
                  {isSubmitting ? (
                    <>
                      <div className="spinner mr-3"></div>
                      Sending...
                    </>
                  ) : (
                    <>
                      <FaPaperPlane className="mr-2" />
                      Send Message
                    </>
                  )}
                </button>
              </form>
            </motion.div>

            {/* Contact Information */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              <div>
                <h2 className="text-3xl font-bold text-gray-800 mb-6">Contact Information</h2>
                <p className="text-gray-600 mb-8">
                  Get in touch with us through any of the following channels. We're here to help you succeed!
                </p>
              </div>

              {/* Contact Methods */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {contactInfo.map((info, index) => (
                  <div key={index} className="bg-white rounded-xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300">
                    <div className={`w-12 h-12 ${info.color} rounded-xl flex items-center justify-center mb-4`}>
                      <info.icon className="text-white text-xl" />
                    </div>
                    <h3 className="font-semibold text-gray-800 mb-2">{info.title}</h3>
                    {info.details.map((detail, idx) => (
                      <p key={idx} className="text-gray-600 text-sm">
                        {info.link && idx === 0 ? (
                          <a href={info.link} className="hover:text-primary-500 transition-colors duration-300">
                            {detail}
                          </a>
                        ) : (
                          detail
                        )}
                      </p>
                    ))}
                  </div>
                ))}
              </div>

              {/* Business Hours */}
              <div className="bg-white rounded-xl p-6 shadow-lg">
                <div className="flex items-center mb-4">
                  <FaClock className="text-primary-500 text-xl mr-3" />
                  <h3 className="text-xl font-semibold text-gray-800">Business Hours</h3>
                </div>
                <div className="space-y-3">
                  {businessHours.map((hours, index) => (
                    <div key={index} className="flex justify-between items-center">
                      <span className="text-gray-700 font-medium">{hours.day}</span>
                      <span className="text-gray-600">{hours.time}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Social Links */}
              <div className="bg-white rounded-xl p-6 shadow-lg">
                <h3 className="text-xl font-semibold text-gray-800 mb-4">Follow Us</h3>
                <p className="text-gray-600 mb-4">
                  Stay connected for the latest financial insights and tips
                </p>
                <div className="flex space-x-4">
                  {socialLinks.map((social, index) => (
                    <a
                      key={index}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center text-gray-600 ${social.color} transition-all duration-300 hover:scale-110`}
                    >
                      <social.icon className="text-xl" />
                    </a>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold text-gray-800 mb-4">Visit Our Office</h2>
            <p className="text-xl text-gray-600">
              Located in the heart of Mumbai's financial district
            </p>
          </motion.div>

        <div className="h-96 w-full">
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

        </div>
      </section>
    </div>
  );
};

export default Contact;
