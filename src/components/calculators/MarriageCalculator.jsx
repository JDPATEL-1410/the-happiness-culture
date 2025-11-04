// src/components/calculators/MarriageCalculator.jsx
import React, { useState } from "react";
import CalculatorLayout from "./CalculatorLayout";
import {
  LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer
} from "recharts";

const MarriageCalculator = () => {
  const [costToday, setCostToday] = useState(1500000);
  const [inflation, setInflation] = useState(6);
  const [years, setYears] = useState(10);

  const futureCost = costToday * Math.pow(1 + inflation / 100, years);

  const data = Array.from({ length: years }, (_, i) => {
    const year = i + 1;
    return {
      year: `Year ${year}`,
      cost: costToday * Math.pow(1 + inflation / 100, year)
    };
  });

  return (
    <CalculatorLayout
      title="Marriage Planning Calculator"
      description="Estimate future marriage expenses based on inflation"
      inputs={
        <>
          <div>
            <label className="block mb-2 font-medium">Current Cost (₹)</label>
            <input type="number" value={costToday} onChange={(e) => setCostToday(+e.target.value)} className="w-full border rounded-lg px-3 py-2" />
          </div>
          <div>
            <label className="block mb-2 font-medium">Inflation (% p.a.)</label>
            <input type="number" value={inflation} onChange={(e) => setInflation(+e.target.value)} className="w-full border rounded-lg px-3 py-2" />
          </div>
          <div>
            <label className="block mb-2 font-medium">Years Left</label>
            <input type="number" value={years} onChange={(e) => setYears(+e.target.value)} className="w-full border rounded-lg px-3 py-2" />
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
            <Line type="monotone" dataKey="cost" stroke="#22c55e" strokeWidth={2} />
          </LineChart>
        </ResponsiveContainer>
      }
      results={
        <div className="p-4 bg-white rounded-xl shadow text-center">
          <h4 className="text-gray-600">Future Marriage Cost</h4>
          <p className="text-2xl font-bold text-green-600 mt-2">₹{futureCost.toLocaleString()}</p>
        </div>
      }
    />
  );
};

export default MarriageCalculator;
