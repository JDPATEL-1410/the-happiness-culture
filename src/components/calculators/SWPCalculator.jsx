// src/components/calculators/SWPCalculator.jsx
import React, { useState } from "react";
import CalculatorLayout from "./CalculatorLayout";
import { LineChart, Line, XAxis, YAxis, Tooltip, CartesianGrid, ResponsiveContainer } from "recharts";

const SWPCalculator = () => {
  const [initial, setInitial] = useState(1000000); // Initial investment
  const [withdrawal, setWithdrawal] = useState(10000); // Monthly withdrawal
  const [rate, setRate] = useState(10); // Annual return %
  const [years, setYears] = useState(10);

  const months = years * 12;
  const r = rate / 100 / 12;

  let balance = initial;
  let data = [];

  for (let i = 1; i <= months; i++) {
    balance = balance * (1 + r) - withdrawal;
    if (balance < 0) balance = 0;
    if (i % 12 === 0) {
      data.push({ year: `Year ${i / 12}`, balance });
    }
  }

  return (
    <CalculatorLayout
      title="SWP Calculator"
      description="Estimate how long your money will last with a Systematic Withdrawal Plan (SWP)."
      inputs={
        <>
          <div>
            <label>Initial Investment (₹)</label>
            <input
              type="number"
              value={initial}
              onChange={(e) => setInitial(+e.target.value)}
              className="w-full border rounded px-3 py-2"
            />
          </div>
          <div>
            <label>Monthly Withdrawal (₹)</label>
            <input
              type="number"
              value={withdrawal}
              onChange={(e) => setWithdrawal(+e.target.value)}
              className="w-full border rounded px-3 py-2"
            />
          </div>
          <div>
            <label>Expected Annual Returns (%)</label>
            <input
              type="number"
              value={rate}
              onChange={(e) => setRate(+e.target.value)}
              className="w-full border rounded px-3 py-2"
            />
          </div>
          <div>
            <label>Investment Period (Years)</label>
            <input
              type="number"
              value={years}
              onChange={(e) => setYears(+e.target.value)}
              className="w-full border rounded px-3 py-2"
            />
          </div>
        </>
      }
      chart={
        <ResponsiveContainer width="100%" height={250}>
          <LineChart data={data}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="year" />
            <YAxis />
            <Tooltip />
            <Line type="monotone" dataKey="balance" stroke="#f97316" strokeWidth={2} />
          </LineChart>
        </ResponsiveContainer>
      }
      results={
        <>
          <div className="p-4 bg-white rounded shadow">
            <h4>Initial Investment</h4>
            <p className="text-xl font-bold">₹{initial.toLocaleString()}</p>
          </div>
          <div className="p-4 bg-white rounded shadow">
            <h4>Total Withdrawals</h4>
            <p className="text-xl font-bold text-green-500">
              ₹{(withdrawal * months).toLocaleString()}
            </p>
          </div>
          <div className="p-4 bg-white rounded shadow">
            <h4>Balance After {years} Years</h4>
            <p className="text-xl font-bold text-orange-500">
              ₹{data.length ? data[data.length - 1].balance.toLocaleString() : 0}
            </p>
          </div>
        </>
      }
    />
  );
};

export default SWPCalculator;
