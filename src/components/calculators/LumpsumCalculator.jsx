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

const LumpsumCalculator = () => {
  const [amount, setAmount] = useState(100000);
  const [rate, setRate] = useState(12);
  const [years, setYears] = useState(10);
  const navigate = useNavigate();

  const maturity = amount * Math.pow(1 + rate / 100, years);
  const wealth = maturity - amount;

  const data = Array.from({ length: years }, (_, i) => ({
    year: `Year ${i + 1}`,
    invested: amount,
    value: amount * Math.pow(1 + rate / 100, i + 1),
  }));

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
            <h1 className="text-5xl font-bold mb-6">Lumpsum Calculator</h1>
            <p className="text-xl opacity-90 max-w-3xl mx-auto mb-8 leading-relaxed">
              Estimate the future value of your one-time investment and see how
              it grows over time.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={() => navigate("/calculator/lumpsum")}
                className="bg-white text-blue-900 font-semibold py-3 px-8 rounded-xl hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 inline-flex items-center justify-center"
              >
                📊 Try Lumpsum Calculator
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
        title="Lumpsum Calculator"
        description="Calculate the estimated returns on your one-time investment."
        inputs={
          <>
            <div>
              <label className="block mb-2 font-medium">Investment Amount (₹)</label>
              <input
                type="range"
                min="1000"
                max="10000000"
                value={amount}
                onChange={(e) => setAmount(+e.target.value)}
                className="w-full"
              />
              <div className="text-xl font-bold">{amount.toLocaleString()}</div>
            </div>

            <div>
              <label className="block mb-2 font-medium">Expected Annual Returns (%)</label>
              <input
                type="range"
                min="1"
                max="30"
                value={rate}
                onChange={(e) => setRate(+e.target.value)}
                className="w-full"
              />
              <div className="text-xl font-bold">{rate}%</div>
            </div>

            <div>
              <label className="block mb-2 font-medium">Investment Period (Years)</label>
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
              <Tooltip />
              <Line
                type="monotone"
                dataKey="invested"
                stroke="#1f2937"
                strokeWidth={2}
              />
              <Line
                type="monotone"
                dataKey="value"
                stroke="#22c55e"
                strokeWidth={2}
              />
            </LineChart>
          </ResponsiveContainer>
        }
        results={
          <>
            <div className="p-4 bg-white rounded-xl shadow">
              <h4 className="text-gray-600">Total Investment</h4>
              <p className="text-2xl font-bold">
                ₹{amount.toLocaleString()}
              </p>
            </div>
            <div className="p-4 bg-white rounded-xl shadow">
              <h4 className="text-gray-600">Wealth Gained</h4>
              <p className="text-2xl font-bold text-green-500">
                ₹{wealth.toLocaleString()}
              </p>
            </div>
            <div className="p-4 bg-white rounded-xl shadow">
              <h4 className="text-gray-600">Maturity Amount</h4>
              <p className="text-2xl font-bold text-orange-500">
                ₹{maturity.toLocaleString()}
              </p>
            </div>
          </>
        }
      />
    </div>
  );
};

export default LumpsumCalculator;