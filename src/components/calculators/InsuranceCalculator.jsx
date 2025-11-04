// src/components/calculators/InsuranceCalculator.jsx
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

const InsuranceCalculator = () => {
  const [income, setIncome] = useState(1000000); // Annual income
  const [years, setYears] = useState(20); // Years to protect family
  const [expenses, setExpenses] = useState(400000); // Annual household expenses

  const navigate = useNavigate();

  // Required life cover = (Annual expenses × years) + outstanding liabilities
  const requiredCover = expenses * years;

  // Recommended cover = 10x to 15x annual income (industry thumb rule)
  const minRecommended = income * 10;
  const maxRecommended = income * 15;

  // Chart data
  const data = [
    { name: "Required Cover", value: requiredCover },
    { name: "Recommended (Min)", value: minRecommended },
    { name: "Recommended (Max)", value: maxRecommended },
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
            <h1 className="text-5xl font-bold mb-6">Life Insurance Calculator</h1>
            <p className="text-xl opacity-90 max-w-3xl mx-auto mb-8 leading-relaxed">
              Find out how much life cover your family needs to stay financially secure 
              in case of uncertainty.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={() => navigate("/calculator/insurance")}
                className="bg-white text-blue-900 font-semibold py-3 px-8 rounded-xl hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 inline-flex items-center justify-center"
              >
                🛡️ Try Insurance Calculator
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
        title="Calculate Your Life Insurance Needs"
        description="Based on your income, expenses, and years of protection required."
        inputs={
          <>
            <div>
              <label className="block mb-2 font-medium">Annual Income (₹)</label>
              <input
                type="range"
                min="200000"
                max="5000000"
                step="50000"
                value={income}
                onChange={(e) => setIncome(+e.target.value)}
                className="w-full"
              />
              <div className="text-xl font-bold">₹{income.toLocaleString()}</div>
            </div>

            <div>
              <label className="block mb-2 font-medium">Annual Household Expenses (₹)</label>
              <input
                type="range"
                min="100000"
                max="3000000"
                step="50000"
                value={expenses}
                onChange={(e) => setExpenses(+e.target.value)}
                className="w-full"
              />
              <div className="text-xl font-bold">₹{expenses.toLocaleString()}</div>
            </div>

            <div>
              <label className="block mb-2 font-medium">Years to Protect Family</label>
              <input
                type="range"
                min="5"
                max="40"
                value={years}
                onChange={(e) => setYears(+e.target.value)}
                className="w-full"
              />
              <div className="text-xl font-bold">{years} Years</div>
            </div>
          </>
        }
        chart={
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={data}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Bar dataKey="value" fill="#22c55e" barSize={60} />
            </BarChart>
          </ResponsiveContainer>
        }
        results={
          <>
            <div className="p-4 bg-white rounded-xl shadow text-center">
              <h4 className="text-gray-600">Required Cover</h4>
              <p className="text-2xl font-bold text-green-500">
                ₹{Math.round(requiredCover).toLocaleString()}
              </p>
            </div>
            <div className="p-4 bg-white rounded-xl shadow text-center">
              <h4 className="text-gray-600">Min Recommended</h4>
              <p className="text-2xl font-bold text-blue-500">
                ₹{Math.round(minRecommended).toLocaleString()}
              </p>
            </div>
            <div className="p-4 bg-white rounded-xl shadow text-center">
              <h4 className="text-gray-600">Max Recommended</h4>
              <p className="text-2xl font-bold text-orange-500">
                ₹{Math.round(maxRecommended).toLocaleString()}
              </p>
            </div>
          </>
        }
      />
    </div>
  );
};

export default InsuranceCalculator;
