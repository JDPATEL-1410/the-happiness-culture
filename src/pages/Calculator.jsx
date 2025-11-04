// src/pages/Calculator.jsx
import React from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import {
  FaChartLine,
  FaMoneyBillWave,
  FaExchangeAlt,
  FaWallet,
  FaUserShield,
  FaCalendarAlt,
  FaUniversity,
  FaHome,
  FaCar,
  FaUmbrellaBeach,
} from "react-icons/fa";

const calculators = [
  { name: "SIP Calculator", path: "/calculator/sip", icon: FaChartLine },
  { name: "Lumpsum Calculator", path: "/calculator/lumpsum", icon: FaMoneyBillWave },
  { name: "STP Calculator", path: "/calculator/stp", icon: FaExchangeAlt },
  { name: "SWP Calculator", path: "/calculator/swp", icon: FaWallet },
  { name: "Retirement Calculator", path: "/calculator/retirement", icon: FaCalendarAlt },
  { name: "Delay Calculator", path: "/calculator/delay", icon: FaCalendarAlt },
  { name: "Life Insurance Calculator", path: "/calculator/insurance", icon: FaUserShield },
  { name: "EMI Calculator", path: "/calculator/emi", icon: FaUniversity },
  { name: "Tax Calculator", path: "/calculator/tax", icon: FaMoneyBillWave },
  { name: "Marriage Calculator", path: "/calculator/marriage", icon: FaUniversity },
  { name: "Education Calculator", path: "/calculator/education", icon: FaUniversity },
  { name: "Home Loan Calculator", path: "/calculator/home-loan", icon: FaHome },
  { name: "Car Loan Calculator", path: "/calculator/car-loan", icon: FaCar },
  { name: "Vacation Calculator", path: "/calculator/vacation", icon: FaUmbrellaBeach },
];

const Calculator = () => {
  const navigate = useNavigate();

  return (
    <div className="pt-16">
      {/* Hero Gradient Section (same as About Page style) */}
<section className="py-16 bg-gray-50 min-h-screen">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="text-5xl font-bold mb-6">Financial Calculators</h1>
            <p className="text-xl opacity-90 max-w-3xl mx-auto leading-relaxed mb-8">
              Plan smarter with our comprehensive suite of calculators. Whether it’s SIP, 
              Lumpsum, Retirement, or Tax Planning — get clarity on your financial future in just a few clicks.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={() => navigate("/calculator/sip")}
                className="bg-white text-blue-900 font-semibold py-3 px-8 rounded-xl hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 inline-flex items-center justify-center"
              >
                📊 Try SIP Calculator
              </button>

              <a
                href="https://wa.me/919876543210"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-green-500 text-white font-semibold py-3 px-8 rounded-xl hover:bg-green-600 transition-all duration-300 transform hover:scale-105 inline-flex items-center justify-center"
              >
                💬 Get Free Consultation
              </a>
            </div>
          </motion.div>
        </div>
  </div>
      </section>

      {/* Calculator Grid Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold text-gray-800 mb-4">Choose a Calculator</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Select from a wide range of calculators to plan your financial journey.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
            {calculators.map((calc, index) => (
              <motion.div
                key={calc.name}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                onClick={() => navigate(calc.path)}
                className="bg-white shadow-lg rounded-xl p-6 cursor-pointer hover:shadow-2xl hover:scale-105 transition-all duration-300 text-center group"
              >
                <div className="w-16 h-16 bg-gradient-to-r from-primary-500 to-success-500 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <calc.icon className="text-white text-2xl" />
                </div>
                <h3 className="text-lg font-semibold text-gray-800">{calc.name}</h3>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Calculator;

