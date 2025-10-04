import React, { useState } from "react";
import CalculatorLayout from "./CalculatorLayout";
import { PieChart, Pie, Cell, Tooltip, ResponsiveContainer } from "recharts";

const TaxCalculator = () => {
  const [income, setIncome] = useState(800000);
  const [deductions, setDeductions] = useState(150000);

  const taxableIncome = Math.max(0, income - deductions);

  // Basic old regime tax slabs (India FY 23-24 as example)
  const calculateTax = (amt) => {
    if (amt <= 250000) return 0;
    if (amt <= 500000) return (amt - 250000) * 0.05;
    if (amt <= 1000000) return 12500 + (amt - 500000) * 0.2;
    return 112500 + (amt - 1000000) * 0.3;
  };

  const tax = calculateTax(taxableIncome);

  const chartData = [
    { name: "Taxable Income", value: taxableIncome },
    { name: "Deductions", value: deductions },
  ];
  const COLORS = ["#22c55e", "#ef4444"];

  return (
    <CalculatorLayout
      title="Income Tax Calculator"
      description="Estimate your income tax liability based on your annual income and deductions."
      inputs={
        <>
          <div>
            <label className="block text-gray-700 font-medium mb-2">
              Annual Income (₹)
            </label>
            <input
              type="number"
              value={income}
              onChange={(e) => setIncome(Number(e.target.value))}
              className="w-full border rounded-lg px-3 py-2"
            />
          </div>
          <div>
            <label className="block text-gray-700 font-medium mb-2">
              Deductions (₹)
            </label>
            <input
              type="number"
              value={deductions}
              onChange={(e) => setDeductions(Number(e.target.value))}
              className="w-full border rounded-lg px-3 py-2"
            />
          </div>
        </>
      }
      chart={
        <ResponsiveContainer width="100%" height={250}>
          <PieChart>
            <Pie
              data={chartData}
              cx="50%"
              cy="50%"
              labelLine={false}
              outerRadius={100}
              fill="#8884d8"
              dataKey="value"
              label
            >
              {chartData.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={COLORS[index]} />
              ))}
            </Pie>
            <Tooltip />
          </PieChart>
        </ResponsiveContainer>
      }
      results={
        <>
          <div className="p-4 bg-white rounded-xl shadow">
            <h4 className="text-gray-600">Taxable Income</h4>
            <p className="text-2xl font-bold text-blue-500">
              ₹{taxableIncome.toLocaleString()}
            </p>
          </div>
          <div className="p-4 bg-white rounded-xl shadow">
            <h4 className="text-gray-600">Tax Payable</h4>
            <p className="text-2xl font-bold text-red-500">
              ₹{tax.toLocaleString()}
            </p>
          </div>
        </>
      }
    />
  );
};

export default TaxCalculator;