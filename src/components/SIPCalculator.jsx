import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Line } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler
} from 'chart.js';
import { FaRupeeSign, FaChartLine, FaCalendarAlt, FaPercentage } from 'react-icons/fa';
import { calculateSIP } from '../utils/calculateSIP';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler
);

const SIPCalculator = ({ showTitle = true, compact = false }) => {
  const [sipData, setSipData] = useState({
    monthlyInvestment: 5000,
    expectedReturns: 12,
    timePeriod: 10
  });

  const [results, setResults] = useState({
    maturityAmount: 0,
    totalInvestment: 0,
    wealthGained: 0,
    chartData: null
  });

  useEffect(() => {
    const calculatedResults = calculateSIP(
      sipData.monthlyInvestment,
      sipData.expectedReturns,
      sipData.timePeriod
    );
    setResults(calculatedResults);
  }, [sipData]);

  const handleInputChange = (field, value) => {
    setSipData(prev => ({
      ...prev,
      [field]: parseFloat(value) || 0
    }));
  };

  const chartOptions = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: 'top',
        labels: {
          usePointStyle: true,
          padding: 20,
          font: {
            size: 12
          }
        }
      },
      tooltip: {
        backgroundColor: 'rgba(10, 26, 79, 0.9)',
        titleColor: '#fff',
        bodyColor: '#fff',
        borderColor: '#2ECC71',
        borderWidth: 1,
        cornerRadius: 10,
        displayColors: true,
        callbacks: {
          label: function(context) {
            return `₹${context.parsed.y.toLocaleString('en-IN')}`;
          }
        }
      }
    },
    scales: {
      x: {
        grid: {
          color: 'rgba(0, 0, 0, 0.1)'
        },
        title: {
          display: true,
          text: 'Years',
          color: '#374151',
          font: {
            weight: 'bold'
          }
        }
      },
      y: {
        grid: {
          color: 'rgba(0, 0, 0, 0.1)'
        },
        title: {
          display: true,
          text: 'Amount (₹)',
          color: '#374151',
          font: {
            weight: 'bold'
          }
        },
        ticks: {
          callback: function(value) {
            return '₹' + (value >= 10000000 ? (value/10000000).toFixed(1) + 'Cr' : 
                          value >= 100000 ? (value/100000).toFixed(1) + 'L' : 
                          value.toLocaleString('en-IN'));
          }
        }
      }
    }
  };

  const InputField = ({ icon: Icon, label, value, onChange, min, max, step, suffix }) => (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="bg-white rounded-xl p-4 border border-gray-200 hover:border-primary-300 transition-all duration-300"
    >
      <div className="flex items-center mb-3">
        <Icon className="text-primary-500 mr-2" />
        <label className="text-sm font-semibold text-gray-700">{label}</label>
      </div>
      <div className="relative">
        <input
          type="range"
          min={min}
          max={max}
          step={step}
          value={value}
          onChange={(e) => onChange(parseFloat(e.target.value))}
          className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer slider"
          style={{
            background: `linear-gradient(to right, #2ECC71 0%, #2ECC71 ${((value - min) / (max - min)) * 100}%, #e5e7eb ${((value - min) / (max - min)) * 100}%, #e5e7eb 100%)`
          }}
        />
        <div className="flex justify-between text-xs text-gray-500 mt-1">
          <span>{min}{suffix}</span>
          <span className="text-lg font-bold text-primary-500">
            {value.toLocaleString('en-IN')}{suffix}
          </span>
          <span>{max}{suffix}</span>
        </div>
      </div>
    </motion.div>
  );

  return (
    <div className={`${compact ? 'p-4' : 'p-6'} bg-gray-50 rounded-2xl`}>
      {showTitle && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-8"
        >
          <h2 className="text-3xl font-bold text-gray-800 mb-2">
            Calculator
          </h2>
          <p className="text-gray-600">
            Calculate your potential returns with systematic investment planning
          </p>
        </motion.div>
      )}

      <div className="grid lg:grid-cols-2 gap-8">
        {/* Input Section */}
        <div className="space-y-6">
          <InputField
            icon={FaRupeeSign}
            label="Monthly Investment"
            value={sipData.monthlyInvestment}
            onChange={(value) => handleInputChange('monthlyInvestment', value)}
            min={500}
            max={100000}
            step={500}
            suffix=""
          />

          <InputField
            icon={FaPercentage}
            label="Expected Annual Returns"
            value={sipData.expectedReturns}
            onChange={(value) => handleInputChange('expectedReturns', value)}
            min={1}
            max={30}
            step={0.5}
            suffix="%"
          />

          <InputField
            icon={FaCalendarAlt}
            label="Investment Period"
            value={sipData.timePeriod}
            onChange={(value) => handleInputChange('timePeriod', value)}
            min={1}
            max={40}
            step={1}
            suffix=" Years"
          />

          {/* Results Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.1 }}
              className="bg-white rounded-xl p-4 border-l-4 border-primary-500 shadow-sm"
            >
              <p className="text-xs text-gray-600 mb-1">Total Investment</p>
              <p className="text-lg font-bold text-primary-500">
                ₹{results.totalInvestment?.toLocaleString('en-IN')}
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2 }}
              className="bg-white rounded-xl p-4 border-l-4 border-success-500 shadow-sm"
            >
              <p className="text-xs text-gray-600 mb-1">Wealth Gained</p>
              <p className="text-lg font-bold text-success-500">
                ₹{results.wealthGained?.toLocaleString('en-IN')}
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.3 }}
              className="bg-white rounded-xl p-4 border-l-4 border-accent-500 shadow-sm"
            >
              <p className="text-xs text-gray-600 mb-1">Maturity Amount</p>
              <p className="text-lg font-bold text-accent-500">
                ₹{results.maturityAmount?.toLocaleString('en-IN')}
              </p>
            </motion.div>
          </div>
        </div>

        {/* Chart Section */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.4 }}
          className="bg-white rounded-xl p-6 shadow-lg"
        >
          <div className="flex items-center mb-4">
            <FaChartLine className="text-primary-500 mr-2" />
            <h3 className="text-lg font-bold text-gray-800">Investment Growth</h3>
          </div>
          
          <div className="h-80">
            {results.chartData && (
              <Line options={chartOptions} data={results.chartData} />
            )}
          </div>
        </motion.div>
      </div>

      {/* Start SIP CTA */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6 }}
        className="text-center mt-8 p-6 bg-gradient-to-r from-primary-500 to-success-500 rounded-2xl text-white"
      >
        <h3 className="text-xl font-bold mb-2">Ready to Start Your SIP Journey?</h3>
        <p className="mb-4 opacity-90">
          Begin your wealth creation with as low as ₹500 per month
        </p>
        <button className="bg-white text-primary-500 font-semibold px-8 py-3 rounded-xl hover:bg-gray-100 transition-all duration-300 transform hover:scale-105">
          Start SIP Today
        </button>
      </motion.div>
    </div>
  );
};

export default SIPCalculator;
