// src/components/calculators/EMICalculator.jsx
import React, { useState } from "react";
import CalculatorLayout from "./CalculatorLayout";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const EMICalculator = () => {
  const [loanAmount, setLoanAmount] = useState(500000);
  const [rate, setRate] = useState(8);
  const [years, setYears] = useState(10);

  const months = years * 12;
  const monthlyRate = rate / 12 / 100;

  // EMI Formula
  const emi =
    (loanAmount *
      monthlyRate *
      Math.pow(1 + monthlyRate, months)) /
    (Math.pow(1 + monthlyRate, months) - 1);

  const totalPayment = emi * months;
  const totalInterest = totalPayment - loanAmount;

  const data = Array.from({ length: years }, (_, i) => {
    const monthsTillNow = (i + 1) * 12;
    const paid = emi * monthsTillNow;
    return {
      year: `Year ${i + 1}`,
      principal: loanAmount,
      paid: paid,
    };
  });

  return (
    <CalculatorLayout
      title="EMI Calculator"
      description="Calculate your monthly EMI, interest outgo, and total repayment"
      inputs={
        <>
          <div>
            <label className="block mb-2 font-medium">
              Loan Amount (₹)
            </label>
            <input
              type="number"
              value={loanAmount}
              onChange={(e) => setLoanAmount(+e.target.value)}
              className="w-full border rounded-lg px-3 py-2"
            />
          </div>

          <div>
            <label className="block mb-2 font-medium">
              Interest Rate (% p.a.)
            </label>
            <input
              type="number"
              value={rate}
              onChange={(e) => setRate(+e.target.value)}
              className="w-full border rounded-lg px-3 py-2"
            />
          </div>

          <div>
            <label className="block mb-2 font-medium">
              Loan Tenure (Years)
            </label>
            <input
              type="number"
              value={years}
              onChange={(e) => setYears(+e.target.value)}
              className="w-full border rounded-lg px-3 py-2"
            />
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
              dataKey="paid"
              stroke="#22c55e"
              strokeWidth={2}
            />
          </LineChart>
        </ResponsiveContainer>
      }
      results={
        <>
          <div className="p-4 bg-white rounded-xl shadow text-center">
            <h4 className="text-gray-600">Monthly EMI</h4>
            <p className="text-2xl font-bold text-blue-600">
              ₹{emi.toFixed(0).toLocaleString()}
            </p>
          </div>

          <div className="p-4 bg-white rounded-xl shadow text-center">
            <h4 className="text-gray-600">Total Interest</h4>
            <p className="text-2xl font-bold text-red-600">
              ₹{totalInterest.toFixed(0).toLocaleString()}
            </p>
          </div>

          <div className="p-4 bg-white rounded-xl shadow text-center">
            <h4 className="text-gray-600">Total Payment</h4>
            <p className="text-2xl font-bold text-green-600">
              ₹{totalPayment.toFixed(0).toLocaleString()}
            </p>
          </div>
        </>
      }
    />
  );
};

export default EMICalculator;