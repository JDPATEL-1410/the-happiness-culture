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

const RetirementCalculator = () => {
  const [monthlyExpense, setMonthlyExpense] = useState(50000);
  const [inflation, setInflation] = useState(6);
  const [years, setYears] = useState(20);
  const [retirementYears, setRetirementYears] = useState(25);

  // Step 1: Expense at retirement
  const futureExpense =
    monthlyExpense * Math.pow(1 + inflation / 100, years);

  // Step 2: Corpus needed (simple estimate: expense * 12 * retirementYears)
  const requiredCorpus = futureExpense * 12 * retirementYears;

  const data = Array.from({ length: years }, (_, i) => {
    const year = i + 1;
    return {
      year: `Year ${year}`,
      expense: monthlyExpense * Math.pow(1 + inflation / 100, year),
    };
  });

  return (
    <CalculatorLayout
      title="Retirement Planning Calculator"
      description="Plan your retirement corpus based on current expenses and inflation"
      inputs={
        <>
          <div>
            <label className="block mb-2 font-medium">
              Current Monthly Expense (₹)
            </label>
            <input
              type="number"
              value={monthlyExpense}
              onChange={(e) => setMonthlyExpense(+e.target.value)}
              className="w-full border rounded-lg px-3 py-2"
            />
          </div>

          <div>
            <label className="block mb-2 font-medium">
              Inflation (% per annum)
            </label>
            <input
              type="number"
              value={inflation}
              onChange={(e) => setInflation(+e.target.value)}
              className="w-full border rounded-lg px-3 py-2"
            />
          </div>

          <div>
            <label className="block mb-2 font-medium">
              Years to Retirement
            </label>
            <input
              type="number"
              value={years}
              onChange={(e) => setYears(+e.target.value)}
              className="w-full border rounded-lg px-3 py-2"
            />
          </div>

          <div>
            <label className="block mb-2 font-medium">
              Expected Retirement Duration (Years)
            </label>
            <input
              type="number"
              value={retirementYears}
              onChange={(e) => setRetirementYears(+e.target.value)}
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
              dataKey="expense"
              stroke="#f97316"
              strokeWidth={2}
            />
          </LineChart>
        </ResponsiveContainer>
      }
      results={
        <>
          <div className="p-4 bg-white rounded-xl shadow text-center">
            <h4 className="text-gray-600">Monthly Expense at Retirement</h4>
            <p className="text-2xl font-bold text-green-600 mt-2">
              ₹{futureExpense.toLocaleString()}
            </p>
          </div>

          <div className="p-4 bg-white rounded-xl shadow text-center">
            <h4 className="text-gray-600">Corpus Required</h4>
            <p className="text-2xl font-bold text-orange-600 mt-2">
              ₹{requiredCorpus.toLocaleString()}
            </p>
          </div>
        </>
      }
    />
  );
};

export default RetirementCalculator;
