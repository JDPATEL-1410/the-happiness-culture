// src/components/calculators/STPCalculator.jsx
import React, { useState } from "react";
import CalculatorLayout from "./CalculatorLayout";
import { LineChart, Line, XAxis, YAxis, Tooltip, CartesianGrid, ResponsiveContainer } from "recharts";

const STPCalculator = () => {
  const [initial, setInitial] = useState(500000); // initial amount
  const [monthly, setMonthly] = useState(10000); // monthly transfer
  const [rate, setRate] = useState(12);
  const [years, setYears] = useState(10);

  const months = years * 12;
  const r = rate / 100 / 12;

  let balance = initial;
  let maturity = 0;

  for (let i = 1; i <= months; i++) {
    if (balance > 0) {
      const transfer = Math.min(monthly, balance);
      balance -= transfer;
      maturity = maturity * (1 + r) + transfer;
    } else {
      maturity = maturity * (1 + r);
    }
  }

  const invested = initial;
  const wealth = maturity - invested;

  const data = Array.from({ length: years }, (_, i) => {
    let b = initial;
    let m = 0;
    for (let j = 1; j <= (i + 1) * 12; j++) {
      if (b > 0) {
        const transfer = Math.min(monthly, b);
        b -= transfer;
        m = m * (1 + r) + transfer;
      } else {
        m = m * (1 + r);
      }
    }
    return { year: `Year ${i + 1}`, invested: invested, value: m };
  });

  return (
    <CalculatorLayout
      title="STP Calculator"
      description="Calculate returns from a Systematic Transfer Plan (STP)."
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
            <label>Monthly Transfer (₹)</label>
            <input
              type="number"
              value={monthly}
              onChange={(e) => setMonthly(+e.target.value)}
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
            <Line type="monotone" dataKey="value" stroke="#22c55e" strokeWidth={2} />
          </LineChart>
        </ResponsiveContainer>
      }
      results={
        <>
          <div className="p-4 bg-white rounded shadow">
            <h4>Total Investment</h4>
            <p className="text-xl font-bold">₹{invested.toLocaleString()}</p>
          </div>
          <div className="p-4 bg-white rounded shadow">
            <h4>Wealth Gained</h4>
            <p className="text-xl font-bold text-green-500">₹{wealth.toLocaleString()}</p>
          </div>
          <div className="p-4 bg-white rounded shadow">
            <h4>Maturity Amount</h4>
            <p className="text-xl font-bold text-orange-500">₹{maturity.toLocaleString()}</p>
          </div>
        </>
      }
    />
  );
};

export default STPCalculator;