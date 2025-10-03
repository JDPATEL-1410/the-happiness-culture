import React, { useState } from "react";
import { motion } from "framer-motion";

// Import all calculators
import SIPCalculator from "../components/calculators/SIPCalculator";
import LumpsumCalculator from "../components/calculators/LumpsumCalculator";
import STPCalculator from "../components/calculators/STPCalculator";
import SWPCalculator from "../components/calculators/SWPCalculator";
import RetirementCalculator from "../components/calculators/RetirementCalculator";
import DelayCalculator from "../components/calculators/DelayCalculator";
import InsuranceCalculator from "../components/calculators/InsuranceCalculator";
import EMICalculator from "../components/calculators/EMICalculator";
import TaxCalculator from "../components/calculators/TaxCalculator";
import MarriageCalculator from "../components/calculators/MarriageCalculator";
import EducationCalculator from "../components/calculators/EducationCalculator";
import HomeLoanCalculator from "../components/calculators/HomeLoanCalculator";
import CarLoanCalculator from "../components/calculators/CarLoanCalculator";
import VacationCalculator from "../components/calculators/VacationCalculator";

const Calculator = () => {
  const [active, setActive] = useState("sip");

  // List of calculators
  const calculators = [
    { id: "sip", label: "SIP Calculator", component: <SIPCalculator /> },
    { id: "lumpsum", label: "Lumpsum Calculator", component: <LumpsumCalculator /> },
    { id: "stp", label: "STP Calculator", component: <STPCalculator /> },
    { id: "swp", label: "SWP Calculator", component: <SWPCalculator /> },
    { id: "retirement", label: "Retirement Planning", component: <RetirementCalculator /> },
    { id: "delay", label: "Delay Planning", component: <DelayCalculator /> },
    { id: "insurance", label: "Life Insurance Calculator", component: <InsuranceCalculator /> },
    { id: "emi", label: "EMI Planning Calculator", component: <EMICalculator /> },
    { id: "tax", label: "Tax Calculator", component: <TaxCalculator /> },
    { id: "marriage", label: "Marriage Planning Calculator", component: <MarriageCalculator /> },
    { id: "education", label: "Education Planning Calculator", component: <EducationCalculator /> },
    { id: "home-loan", label: "Home Loan Calculator", component: <HomeLoanCalculator /> },
    { id: "car-loan", label: "Car Planning Calculator", component: <CarLoanCalculator /> },
    { id: "vacation", label: "Vacation Planning Calculator", component: <VacationCalculator /> },
  ];

  return (
    <div className="pt-20 bg-gray-50 min-h-screen">
      {/* Page Header */}
      <section className="py-12 bg-gradient-to-r from-primary-500 to-success-500 text-white">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h1 className="text-4xl font-bold mb-3">Financial Calculators</h1>
          <p className="text-lg opacity-90">
            Plan your investments, goals, and future with our easy-to-use calculators
          </p>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 py-12 grid lg:grid-cols-4 gap-8">
        {/* Sidebar Menu */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="bg-white rounded-xl shadow-lg p-6 h-fit"
        >
          <h2 className="text-xl font-semibold text-gray-800 mb-6">Choose Calculator</h2>
          <ul className="space-y-3">
            {calculators.map((calc) => (
              <li key={calc.id}>
                <button
                  onClick={() => setActive(calc.id)}
                  className={`w-full text-left px-4 py-2 rounded-lg font-medium transition-colors ${
                    active === calc.id
                      ? "bg-primary-500 text-white"
                      : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                  }`}
                >
                  {calc.label}
                </button>
              </li>
            ))}
          </ul>
        </motion.div>

        {/* Main Calculator Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="lg:col-span-3 bg-white rounded-xl shadow-lg p-8"
        >
          {calculators.find((calc) => calc.id === active)?.component}
        </motion.div>
      </div>
    </div>
  );
};

export default Calculator;
