// src/components/calculators/SWPCalculator.jsx
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

const SWPCalculator = () => {
  const [initialInvestment, setInitialInvestment] = useState(1000000);
  const [withdrawal, setWithdrawal] = useState(10000);
  const [rate, setRate] = useState(10);
  const [years, setYears] = useState(15);

  const navigate = useNavigate();

  // --- Core Calculations ---
  const months = years * 12;
  const r = rate / 100 / 12;

  let balance = initialInvestment;
  const data = [];

  for (let i = 1; i <= months; i++) {
    balance = balance * (1 + r) - withdrawal;
    if (balance < 0) balance = 0;
    if (i % 12 === 0) {
      data.push({
        year: `Year ${i / 12}`,
        balance: Math.round(balance),
      });
    }
  }

  const totalWithdrawals = withdrawal * months;
  const totalValue = balance;

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
            <h1 className="text-5xl font-bold mb-6">SWP Calculator</h1>
            <p className="text-xl opacity-90 max-w-3xl mx-auto mb-8 leading-relaxed">
              Plan your systematic withdrawals from a lump sum investment. Adjust
              the withdrawal amount, duration, and return rate to see how long your
              money lasts.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={() => navigate("/calculator/swp")}
                className="bg-white text-blue-900 font-semibold py-3 px-8 rounded-xl hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 inline-flex items-center justify-center"
              >
                📊 Try SWP Calculator
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
        title="Systematic Withdrawal Planning"
        description="Estimate how long your lump sum investment will last with periodic withdrawals."
        inputs={
          <>
            <div>
              <label className="block mb-2 font-medium">Initial Investment (₹)</label>
              <input
                type="range"
                min="50000"
                max="5000000"
                step="50000"
                value={initialInvestment}
                onChange={(e) => setInitialInvestment(+e.target.value)}
                className="w-full"
              />
              <div className="text-xl font-bold">
                ₹{initialInvestment.toLocaleString()}
              </div>
            </div>

            <div>
              <label className="block mb-2 font-medium">Monthly Withdrawal (₹)</label>
              <input
                type="range"
                min="1000"
                max="100000"
                step="1000"
                value={withdrawal}
                onChange={(e) => setWithdrawal(+e.target.value)}
                className="w-full"
              />
              <div className="text-xl font-bold">₹{withdrawal.toLocaleString()}</div>
            </div>

            <div>
              <label className="block mb-2 font-medium">Expected Annual Return (%)</label>
              <input
                type="range"
                min="1"
                max="20"
                value={rate}
                onChange={(e) => setRate(+e.target.value)}
                className="w-full"
              />
              <div className="text-xl font-bold">{rate}%</div>
            </div>

            <div>
              <label className="block mb-2 font-medium">Withdrawal Duration (Years)</label>
              <input
                type="range"
                min="1"
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
            <LineChart data={data}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="year" />
              <YAxis />
              <Tooltip formatter={(val) => `₹${val.toLocaleString()}`} />
              <Line
                type="monotone"
                dataKey="balance"
                stroke="#22c55e"
                strokeWidth={2}
              />
            </LineChart>
          </ResponsiveContainer>
        }
        results={
          <>
            <div className="p-4 bg-white rounded-xl shadow text-center">
              <h4 className="text-gray-600">Total Withdrawals</h4>
              <p className="text-2xl font-bold text-blue-500">
                ₹{totalWithdrawals.toLocaleString()}
              </p>
            </div>
            <div className="p-4 bg-white rounded-xl shadow text-center">
              <h4 className="text-gray-600">Remaining Value</h4>
              <p className="text-2xl font-bold text-green-500">
                ₹{totalValue.toLocaleString()}
              </p>
            </div>
            <div className="p-4 bg-white rounded-xl shadow text-center">
              <h4 className="text-gray-600">Duration Planned</h4>
              <p className="text-2xl font-bold text-orange-500">{years} Years</p>
            </div>
          </>
        }
      />
    </div>
  );
};

export default SWPCalculator;
