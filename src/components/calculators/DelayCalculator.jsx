// src/components/calculators/DelayCalculator.jsx
import React, { useState } from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import CalculatorLayout from "../CalculatorLayout";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const DelayCalculator = () => {
  const [monthly, setMonthly] = useState(10000);
  const [rate, setRate] = useState(12);
  const [years, setYears] = useState(20);
  const [delayYears, setDelayYears] = useState(5);

  const navigate = useNavigate();

  // Without delay
  const months = years * 12;
  const r = rate / 100 / 12;
  let corpusWithoutDelay = 0;
  for (let i = 1; i <= months; i++) {
    corpusWithoutDelay = corpusWithoutDelay * (1 + r) + monthly;
  }

  // With delay
  const delayedMonths = (years - delayYears) * 12;
  let corpusWithDelay = 0;
  for (let i = 1; i <= delayedMonths; i++) {
    corpusWithDelay = corpusWithDelay * (1 + r) + monthly;
  }

  const loss = corpusWithoutDelay - corpusWithDelay;

  // Chart data
  const data = [
    { name: "Start Immediately", value: Math.round(corpusWithoutDelay) },
    { name: `Delay ${delayYears} Years`, value: Math.round(corpusWithDelay) },
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
            <h1 className="text-5xl font-bold mb-6">Delay Cost Calculator</h1>
            <p className="text-xl opacity-90 max-w-3xl mx-auto mb-8 leading-relaxed">
              See how delaying your investment by just a few years can cost you 
              a massive amount at the time of your goal. Start early, stay ahead!
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={() => navigate("/calculator/delay")}
                className="bg-white text-blue-900 font-semibold py-3 px-8 rounded-xl hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 inline-flex items-center justify-center"
              >
                📊 Try Delay Calculator
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
        title="Delay Impact on Wealth Creation"
        description="Compare wealth if you start investing now vs after a delay."
        inputs={
          <>
            <div>
              <label className="block mb-2 font-medium">Monthly Investment (₹)</label>
              <input
                type="range"
                min="1000"
                max="100000"
                step="1000"
                value={monthly}
                onChange={(e) => setMonthly(+e.target.value)}
                className="w-full"
              />
              <div className="text-xl font-bold">₹{monthly.toLocaleString()}</div>
            </div>

            <div>
              <label className="block mb-2 font-medium">Expected Annual Returns (%)</label>
              <input
                type="range"
                min="4"
                max="20"
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
                min="5"
                max="40"
                value={years}
                onChange={(e) => setYears(+e.target.value)}
                className="w-full"
              />
              <div className="text-xl font-bold">{years} Years</div>
            </div>

            <div>
              <label className="block mb-2 font-medium">Delay in Start (Years)</label>
              <input
                type="range"
                min="0"
                max="20"
                value={delayYears}
                onChange={(e) => setDelayYears(+e.target.value)}
                className="w-full"
              />
              <div className="text-xl font-bold">{delayYears} Years</div>
            </div>
          </>
        }
        chart={
          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={data}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Line type="monotone" dataKey="value" stroke="#22c55e" strokeWidth={3} />
            </LineChart>
          </ResponsiveContainer>
        }
        results={
          <>
            <div className="p-4 bg-white rounded-xl shadow text-center">
              <h4 className="text-gray-600">Wealth if Start Now</h4>
              <p className="text-2xl font-bold text-green-500">
                ₹{Math.round(corpusWithoutDelay).toLocaleString()}
              </p>
            </div>
            <div className="p-4 bg-white rounded-xl shadow text-center">
              <h4 className="text-gray-600">Wealth if Delayed</h4>
              <p className="text-2xl font-bold text-red-500">
                ₹{Math.round(corpusWithDelay).toLocaleString()}
              </p>
            </div>
            <div className="p-4 bg-white rounded-xl shadow text-center">
              <h4 className="text-gray-600">Loss Due to Delay</h4>
              <p className="text-2xl font-bold text-orange-500">
                ₹{Math.round(loss).toLocaleString()}
              </p>
            </div>
          </>
        }
      />
    </div>
  );
};

export default DelayCalculator;
