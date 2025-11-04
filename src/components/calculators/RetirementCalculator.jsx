// src/components/calculators/RetirementCalculator.jsx
import React, { useState } from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import CalculatorLayout from "../CalculatorLayout";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
  ResponsiveContainer,
} from "recharts";

const RetirementCalculator = () => {
  const [currentAge, setCurrentAge] = useState(30);
  const [retirementAge, setRetirementAge] = useState(60);
  const [monthlyExpense, setMonthlyExpense] = useState(40000);
  const [inflationRate, setInflationRate] = useState(6);
  const [postRetirementYears, setPostRetirementYears] = useState(25);
  const [expectedReturn, setExpectedReturn] = useState(10);

  const navigate = useNavigate();

  // --- Core Calculations ---
  const yearsToRetirement = retirementAge - currentAge;
  const inflationFactor = Math.pow(1 + inflationRate / 100, yearsToRetirement);
  const futureMonthlyExpense = monthlyExpense * inflationFactor;
  const annualExpense = futureMonthlyExpense * 12;

  // Corpus needed using Present Value of Annuity formula
  const r = (expectedReturn - inflationRate) / 100;
  const corpusNeeded =
    annualExpense *
    ((1 - Math.pow(1 + r, -postRetirementYears)) / r);

  // Chart data
  const data = Array.from({ length: yearsToRetirement + 1 }, (_, i) => {
    const age = currentAge + i;
    const expense =
      monthlyExpense * Math.pow(1 + inflationRate / 100, i) * 12;
    return {
      age,
      expense: Math.round(expense),
    };
  });

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
            <h1 className="text-5xl font-bold mb-6">Retirement Calculator</h1>
            <p className="text-xl opacity-90 max-w-3xl mx-auto mb-8 leading-relaxed">
              Plan your retirement by estimating the corpus you need to sustain
              your expenses after retirement. Adjust age, expenses, and inflation to see results.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={() => navigate("/calculator/retirement")}
                className="bg-white text-blue-900 font-semibold py-3 px-8 rounded-xl hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 inline-flex items-center justify-center"
              >
                📊 Try Retirement Calculator
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
        title="Plan Your Retirement"
        description="Estimate the retirement corpus you need to maintain your lifestyle."
        inputs={
          <>
            <div>
              <label className="block mb-2 font-medium">Current Age</label>
              <input
                type="range"
                min="20"
                max="50"
                value={currentAge}
                onChange={(e) => setCurrentAge(+e.target.value)}
                className="w-full"
              />
              <div className="text-xl font-bold">{currentAge} Years</div>
            </div>

            <div>
              <label className="block mb-2 font-medium">Retirement Age</label>
              <input
                type="range"
                min="50"
                max="70"
                value={retirementAge}
                onChange={(e) => setRetirementAge(+e.target.value)}
                className="w-full"
              />
              <div className="text-xl font-bold">{retirementAge} Years</div>
            </div>

            <div>
              <label className="block mb-2 font-medium">Monthly Expense (₹)</label>
              <input
                type="range"
                min="10000"
                max="200000"
                step="1000"
                value={monthlyExpense}
                onChange={(e) => setMonthlyExpense(+e.target.value)}
                className="w-full"
              />
              <div className="text-xl font-bold">
                ₹{monthlyExpense.toLocaleString()}
              </div>
            </div>

            <div>
              <label className="block mb-2 font-medium">Inflation Rate (%)</label>
              <input
                type="range"
                min="1"
                max="15"
                value={inflationRate}
                onChange={(e) => setInflationRate(+e.target.value)}
                className="w-full"
              />
              <div className="text-xl font-bold">{inflationRate}%</div>
            </div>

            <div>
              <label className="block mb-2 font-medium">Post-Retirement Years</label>
              <input
                type="range"
                min="10"
                max="40"
                value={postRetirementYears}
                onChange={(e) => setPostRetirementYears(+e.target.value)}
                className="w-full"
              />
              <div className="text-xl font-bold">{postRetirementYears} Years</div>
            </div>

            <div>
              <label className="block mb-2 font-medium">Expected Return Rate (%)</label>
              <input
                type="range"
                min="1"
                max="15"
                value={expectedReturn}
                onChange={(e) => setExpectedReturn(+e.target.value)}
                className="w-full"
              />
              <div className="text-xl font-bold">{expectedReturn}%</div>
            </div>
          </>
        }
        chart={
          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={data}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="age" />
              <YAxis />
              <Tooltip formatter={(val) => `₹${val.toLocaleString()}`} />
              <Line
                type="monotone"
                dataKey="expense"
                stroke="#22c55e"
                strokeWidth={2}
              />
            </LineChart>
          </ResponsiveContainer>
        }
        results={
          <>
            <div className="p-4 bg-white rounded-xl shadow text-center">
              <h4 className="text-gray-600">Future Monthly Expense</h4>
              <p className="text-2xl font-bold text-orange-500">
                ₹{futureMonthlyExpense.toFixed(0).toLocaleString()}
              </p>
            </div>
            <div className="p-4 bg-white rounded-xl shadow text-center">
              <h4 className="text-gray-600">Annual Expense at Retirement</h4>
              <p className="text-2xl font-bold text-blue-500">
                ₹{annualExpense.toFixed(0).toLocaleString()}
              </p>
            </div>
            <div className="p-4 bg-white rounded-xl shadow text-center">
              <h4 className="text-gray-600">Corpus Needed</h4>
              <p className="text-2xl font-bold text-green-500">
                ₹{corpusNeeded.toFixed(0).toLocaleString()}
              </p>
            </div>
          </>
        }
      />
    </div>
  );
};

export default RetirementCalculator;
