import React, { useState } from "react";
import CalculatorLayout from "./CalculatorLayout";
import { LineChart, Line, XAxis, YAxis, Tooltip, CartesianGrid, ResponsiveContainer } from "recharts";

const EducationPlanningCalculator = () => {
  const [currentCost, setCurrentCost] = useState(1000000);
  const [years, setYears] = useState(10);
  const [inflation, setInflation] = useState(8);

  const futureCost = currentCost * Math.pow(1 + inflation / 100, years);

  const data = Array.from({ length: years }, (_, i) => ({
    year: i + 1,
    cost: currentCost * Math.pow(1 + inflation / 100, i + 1)
  }));

  return (
    <CalculatorLayout
      title="Education Planning Calculator"
      description="Estimate future education costs and plan your savings"
      inputs={
        <>
          <div>
            <label className="block mb-2 font-medium">Current Education Cost (₹)</label>
            <input type="range" min="50000" max="5000000" value={currentCost} onChange={(e) => setCurrentCost(+e.target.value)} className="w-full"/>
            <div className="text-xl font-bold">₹{currentCost.toLocaleString()}</div>
          </div>

          <div>
            <label className="block mb-2 font-medium">Years Left</label>
            <input type="range" min="1" max="25" value={years} onChange={(e) => setYears(+e.target.value)} className="w-full"/>
            <div className="text-xl font-bold">{years} Years</div>
          </div>

          <div>
            <label className="block mb-2 font-medium">Inflation Rate (%)</label>
            <input type="range" min="2" max="15" value={inflation} onChange={(e) => setInflation(+e.target.value)} className="w-full"/>
            <div className="text-xl font-bold">{inflation}%</div>
          </div>
        </>
      }
      chart={
        <ResponsiveContainer width="100%" height={300}>
          <LineChart data={data}>
            <CartesianGrid strokeDasharray="3 3"/>
            <XAxis dataKey="year"/>
            <YAxis/>
            <Tooltip/>
            <Line type="monotone" dataKey="cost" stroke="#3b82f6" strokeWidth={2}/>
          </LineChart>
        </ResponsiveContainer>
      }
      results={
        <div className="p-4 bg-white rounded-xl shadow">
          <h4 className="text-gray-600">Future Education Cost</h4>
          <p className="text-2xl font-bold text-green-500">₹{futureCost.toLocaleString()}</p>
        </div>
      }
    />
  );
};

export default EducationPlanningCalculator;
