// src/components/calculators/EMICalculator.jsx
import React, { useState } from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import CalculatorLayout from "../CalculatorLayout";
import {
  PieChart,
  Pie,
  Cell,
  Tooltip,
  ResponsiveContainer,
  Legend,
} from "recharts";

const EMICalculator = () => {
  const [loanAmount, setLoanAmount] = useState(1000000); // Loan Amount
  const [rate, setRate] = useState(8); // Annual Interest Rate
  const [tenure, setTenure] = useState(20); // Tenure in Years

  const navigate = useNavigate();

  // EMI Calculation Formula
  const monthlyRate = rate / 12 / 100;
  const months = tenure * 12;
  const emi =
    (loanAmount * monthlyRate * Math.pow(1 + monthlyRate, months)) /
    (Math.pow(1 + monthlyRate, months) - 1);

  const totalPayment = emi * months;
  const totalInterest = totalPayment - loanAmount;

  // Chart Data
  const data = [
    { name: "Principal", value: loanAmount },
    { name: "Interest", value: totalInterest },
  ];
  const COLORS = ["#22c55e", "#ef4444"];

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
            <h1 className="text-5xl font-bold mb-6">EMI Calculator</h1>
            <p className="text-xl opacity-90 max-w-3xl mx-auto mb-8 leading-relaxed">
              Calculate your monthly EMI, total payment, and total interest for your loan.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={() => navigate("/calculator/emi")}
                className="bg-white text-blue-900 font-semibold py-3 px-8 rounded-xl hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 inline-flex items-center justify-center"
              >
                📊 Try EMI Calculator
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
        title="Calculate Your Loan EMI"
        description="Adjust loan amount, interest rate, and tenure to plan your repayment effectively."
        inputs={
          <>
            <div>
              <label className="block mb-2 font-medium">Loan Amount (₹)</label>
              <input
                type="range"
                min="50000"
                max="50000000"
                step="50000"
                value={loanAmount}
                onChange={(e) => setLoanAmount(+e.target.value)}
                className="w-full"
              />
              <div className="text-xl font-bold">₹{loanAmount.toLocaleString()}</div>
            </div>

            <div>
              <label className="block mb-2 font-medium">Interest Rate (%)</label>
              <input
                type="range"
                min="1"
                max="20"
                step="0.1"
                value={rate}
                onChange={(e) => setRate(+e.target.value)}
                className="w-full"
              />
              <div className="text-xl font-bold">{rate}%</div>
            </div>

            <div>
              <label className="block mb-2 font-medium">Tenure (Years)</label>
              <input
                type="range"
                min="1"
                max="40"
                value={tenure}
                onChange={(e) => setTenure(+e.target.value)}
                className="w-full"
              />
              <div className="text-xl font-bold">{tenure} Years</div>
            </div>
          </>
        }
        chart={
          <ResponsiveContainer width="100%" height={300}>
            <PieChart>
              <Pie
                data={data}
                cx="50%"
                cy="50%"
                innerRadius={80}
                outerRadius={120}
                fill="#8884d8"
                paddingAngle={5}
                dataKey="value"
              >
                {data.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                ))}
              </Pie>
              <Tooltip formatter={(val) => `₹${val.toLocaleString()}`} />
              <Legend />
            </PieChart>
          </ResponsiveContainer>
        }
        results={
          <>
            <div className="p-4 bg-white rounded-xl shadow text-center">
              <h4 className="text-gray-600">Monthly EMI</h4>
              <p className="text-2xl font-bold text-green-500">
                ₹{emi.toFixed(0).toLocaleString()}
              </p>
            </div>
            <div className="p-4 bg-white rounded-xl shadow text-center">
              <h4 className="text-gray-600">Total Interest</h4>
              <p className="text-2xl font-bold text-red-500">
                ₹{totalInterest.toFixed(0).toLocaleString()}
              </p>
            </div>
            <div className="p-4 bg-white rounded-xl shadow text-center">
              <h4 className="text-gray-600">Total Payment</h4>
              <p className="text-2xl font-bold text-blue-500">
                ₹{totalPayment.toFixed(0).toLocaleString()}
              </p>
            </div>
          </>
        }
      />
    </div>
  );
};

export default EMICalculator;
