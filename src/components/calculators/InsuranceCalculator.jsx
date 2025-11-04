import React, { useState } from "react";
import CalculatorLayout from "./CalculatorLayout";
import { LineChart, Line, XAxis, YAxis, Tooltip, CartesianGrid, ResponsiveContainer } from "recharts";

const InsuranceCalculator = () => {
  const [annualIncome, setAnnualIncome] = useState(600000);
  const [coverMultiplier, setCoverMultiplier] = useState(15);

  const requiredCover = annualIncome * coverMultiplier;

  const data = [
    { name: "Annual Income", value: annualIncome },
    { name: "Insurance Cover Needed", value: requiredCover }
  ];

  return (
    <CalculatorLayout
      title="Life Insurance Calculator"
      description="Estimate the ideal insurance coverage based on your income"
      inputs={
        <>
          <div>
            <label className="block mb-2 font-medium">Annual Income (₹)</label>
            <input type="range" min="100000" max="5000000" value={annualIncome} onChange={(e) => setAnnualIncome(+e.target.value)} className="w-full"/>
            <div className="text-xl font-bold">₹{annualIncome.toLocaleString()}</div>
          </div>
          <div>
            <label className="block mb-2 font-medium">Cover Multiplier (Years)</label>
            <input type="range" min="5" max="25" value={coverMultiplier} onChange={(e) => setCoverMultiplier(+e.target.value)} className="w-full"/>
            <div className="text-xl font-bold">{coverMultiplier}x</div>
          </div>
        </>
      }
      chart={
        <ResponsiveContainer width="100%" height={300}>
          <LineChart data={data}>
            <CartesianGrid strokeDasharray="3 3"/>
            <XAxis dataKey="name"/>
            <YAxis/>
            <Tooltip/>
            <Line type="monotone" dataKey="value" stroke="#22c55e" strokeWidth={2}/>
          </LineChart>
        </ResponsiveContainer>
      }
      results={
        <div className="p-4 bg-white rounded-xl shadow">
          <h4>Recommended Cover</h4>
          <p className="text-2xl font-bold text-orange-500">₹{requiredCover.toLocaleString()}</p>
        </div>
      }
    />
  );
};

export default InsuranceCalculator;
