import React, { useState } from "react";
import CalculatorLayout from "./CalculatorLayout";
import { LineChart, Line, XAxis, YAxis, Tooltip, CartesianGrid, ResponsiveContainer } from "recharts";

const LumpsumCalculator = () => {
  const [amount, setAmount] = useState(100000);
  const [rate, setRate] = useState(12);
  const [years, setYears] = useState(10);

  const r = rate / 100;
  const maturity = amount * Math.pow(1 + r, years);
  const wealth = maturity - amount;

  const data = Array.from({ length: years }, (_, i) => {
    const value = amount * Math.pow(1 + r, i + 1);
    return { year: `Year ${i + 1}`, invested: amount, value };
  });

  return (
    <CalculatorLayout
      title="Lumpsum Calculator"
      description="Calculate the future value of a one-time investment."
      inputs={
        <>
          <div>
            <label>Investment Amount (₹)</label>
            <input type="number" value={amount} onChange={(e) => setAmount(+e.target.value)} className="w-full border rounded px-3 py-2"/>
          </div>
          <div>
            <label>Expected Annual Returns (%)</label>
            <input type="number" value={rate} onChange={(e) => setRate(+e.target.value)} className="w-full border rounded px-3 py-2"/>
          </div>
          <div>
            <label>Investment Period (Years)</label>
            <input type="number" value={years} onChange={(e) => setYears(+e.target.value)} className="w-full border rounded px-3 py-2"/>
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
            <h4>Initial Investment</h4>
            <p className="text-xl font-bold">₹{amount.toLocaleString()}</p>
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

export default LumpsumCalculator;