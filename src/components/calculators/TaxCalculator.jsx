// src/components/calculators/TaxCalculator.jsx
import React, { useState } from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import CalculatorLayout from "../CalculatorLayout";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const TaxCalculator = () => {
  const [income, setIncome] = useState(800000); // Annual Income
  const [age, setAge] = useState(30); // Age of the taxpayer

  const navigate = useNavigate();

  // --- Tax Calculation Logic (Old Regime Simplified) ---
  const calculateTax = (income) => {
    let tax = 0;
    if (income <= 250000) tax = 0;
    else if (income <= 500000) tax = (income - 250000) * 0.05;
    else if (income <= 1000000) tax = 12500 + (income - 500000) * 0.2;
    else tax = 112500 + (income - 1000000) * 0.3;

    // Rebate under section 87A for income ≤ 5L
    if (income <= 500000) tax = 0;

    // 4% cess
    tax = tax + tax * 0.04;
    return tax;
  };

  const tax = calculateTax(income);
  const postTaxIncome = income - tax;

  const data = [
    { name: "Gross Income", amount: income },
    { name: "Tax Payable", amount: tax },
    { name: "Net Income", amount: postTaxIncome },
  ];

  return (
    <div className="pt-16">
      {/* Gradient Hero Section */}
      <section className="py-20 bg-gradient-to-br from-primary-500 to-success-500 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl font-bold mb-6">Tax Calculator</h1>
            <p className="text-xl opacity-90 max-w-3xl mx-auto mb-8 leading-relaxed">
              Estimate your income tax liability based on your annual income and age.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={() => navigate("/calculator/tax")}
                className="bg-white text-blue-900 font-semibold py-3 px-8 rounded-xl hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 inline-flex items-center justify-center"
              >
                📊 Try Tax Calculator
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
      </section>

      {/* Calculator Layout */}
      <CalculatorLayout
        title="Estimate Your Taxes"
        description="Adjust your income and age to estimate your tax payable and net take-home."
        inputs={
          <>
            <div>
              <label className="block mb-2 font-medium">Annual Income (₹)</label>
              <input
                type="range"
                min="100000"
                max="5000000"
                step="10000"
                value={income}
                onChange={(e) => setIncome(+e.target.value)}
                className="w-full"
              />
              <div className="text-xl font-bold">₹{income.toLocaleString()}</div>
            </div>

            <div>
              <label className="block mb-2 font-medium">Age</label>
              <input
                type="range"
                min="18"
                max="80"
                value={age}
                onChange={(e) => setAge(+e.target.value)}
                className="w-full"
              />
              <div className="text-xl font-bold">{age} Years</div>
            </div>
          </>
        }
        chart={
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={data}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip formatter={(val) => `₹${val.toLocaleString()}`} />
              <Bar dataKey="amount" fill="#22c55e" />
            </BarChart>
          </ResponsiveContainer>
        }
        results={
          <>
            <div className="p-4 bg-white rounded-xl shadow text-center">
              <h4 className="text-gray-600">Tax Payable</h4>
              <p className="text-2xl font-bold text-red-500">
                ₹{tax.toFixed(0).toLocaleString()}
              </p>
            </div>
            <div className="p-4 bg-white rounded-xl shadow text-center">
              <h4 className="text-gray-600">Net Income (After Tax)</h4>
              <p className="text-2xl font-bold text-green-500">
                ₹{postTaxIncome.toFixed(0).toLocaleString()}
              </p>
            </div>
            <div className="p-4 bg-white rounded-xl shadow text-center">
              <h4 className="text-gray-600">Gross Income</h4>
              <p className="text-2xl font-bold text-blue-500">
                ₹{income.toLocaleString()}
              </p>
            </div>
          </>
        }
      />
    </div>
  );
};

export default TaxCalculator;
