import React, { useState } from "react";
import CalculatorLayout from "./CalculatorLayout";
import { LineChart, Line, XAxis, YAxis, Tooltip, CartesianGrid, ResponsiveContainer } from "recharts";

const SIPCalculator = () => {
  const [monthly, setMonthly] = useState(5000);
  const [rate, setRate] = useState(12);
  const [years, setYears] = useState(10);

  const months = years * 12;
  const r = rate / 100 / 12;
  let maturity = 0;

  for (let i = 1; i <= months; i++) {
    maturity = maturity * (1 + r) + monthly;
  }

  const invested = monthly * months;
  const wealth = maturity - invested;

  const data = Array.from({ length: years }, (_, i) => {
    let m = 0;
    for (let j = 1; j <= (i + 1) * 12; j++) {
      m = m * (1 + r) + monthly;
    }
    return { year: `Year ${i + 1}`, invested: monthly * (i + 1) * 12, value: m };
  });

  return (
    <CalculatorLayout
      title="SIP Calculator"
      description="Calculate your potential returns with systematic investment planning."
      inputs={
        <>
          <div>
            <label>Monthly Investment (₹)</label>
            <input type="number" value={monthly} onChange={(e) => setMonthly(+e.target.value)} className="w-full border rounded px-3 py-2"/>
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
            <Line type="monotone" dataKey="invested" stroke="#1f2937" strokeWidth={2} />
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

export default SIPCalculator;