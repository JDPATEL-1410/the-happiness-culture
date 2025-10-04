import React, { useState } from "react";
import CalculatorLayout from "./CalculatorLayout";
import { BarChart, Bar, XAxis, YAxis, Tooltip, CartesianGrid, ResponsiveContainer } from "recharts";

const VacationCalculator = () => {
  const [costToday, setCostToday] = useState(300000);
  const [inflation, setInflation] = useState(7);
  const [years, setYears] = useState(5);

  const futureCost = costToday * Math.pow(1 + inflation / 100, years);

  const chartData = [
    { name: "Today", value: costToday },
    { name: `${years} Years Later`, value: futureCost },
  ];

  return (
    <CalculatorLayout
      title="Vacation Planning Calculator"
      description="Plan your dream vacation by calculating the future cost considering inflation."
      inputs={
        <>
          <div>
            <label className="block text-gray-700 mb-2">Current Cost (₹)</label>
            <input
              type="number"
              value={costToday}
              onChange={(e) => setCostToday(Number(e.target.value))}
              className="w-full border rounded-lg px-3 py-2"
            />
          </div>
          <div>
            <label className="block text-gray-700 mb-2">Inflation (% p.a.)</label>
            <input
              type="number"
              value={inflation}
              onChange={(e) => setInflation(Number(e.target.value))}
              className="w-full border rounded-lg px-3 py-2"
            />
          </div>
          <div>
            <label className="block text-gray-700 mb-2">Years Left</label>
            <input
              type="number"
              value={years}
              onChange={(e) => setYears(Number(e.target.value))}
              className="w-full border rounded-lg px-3 py-2"
            />
          </div>
        </>
      }
      chart={
        <ResponsiveContainer width="100%" height={250}>
          <BarChart data={chartData}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Bar dataKey="value" fill="#ec4899" />
          </BarChart>
        </ResponsiveContainer>
      }
      results={
        <>
          <div className="p-4 bg-white rounded-xl shadow">
            <h4 className="text-gray-600">Future Vacation Cost</h4>
            <p className="text-2xl font-bold text-pink-500">
              ₹{futureCost.toLocaleString()}
            </p>
          </div>
        </>
      }
    />
  );
};

export default VacationCalculator;