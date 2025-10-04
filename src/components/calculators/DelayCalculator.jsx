import React, { useState } from "react";
import CalculatorLayout from "./CalculatorLayout";
import {
  LineChart, Line, XAxis, YAxis, Tooltip, CartesianGrid, ResponsiveContainer
} from "recharts";

const DelayPlanningCalculator = () => {
  const [monthly, setMonthly] = useState(10000);
  const [rate, setRate] = useState(12);
  const [years, setYears] = useState(20);
  const [delay, setDelay] = useState(5);

  const r = rate / 100 / 12;
  const months = years * 12;

  const calcMaturity = (startDelay = 0) => {
    let m = 0;
    for (let i = 1; i <= months - startDelay * 12; i++) {
      m = m * (1 + r) + monthly;
    }
    return m;
  };

  const normalMaturity = calcMaturity();
  const delayedMaturity = calcMaturity(delay);

  const loss = normalMaturity - delayedMaturity;

  const data = [
    { plan: "No Delay", value: normalMaturity },
    { plan: `${delay} Year Delay`, value: delayedMaturity }
  ];

  return (
    <CalculatorLayout
      title="Delay Planning Calculator"
      description="See the cost of delaying your investment"
      inputs={
        <>
          <div>
            <label className="block mb-2 font-medium">Monthly SIP (₹)</label>
            <input type="range" min="1000" max="100000" value={monthly} onChange={(e) => setMonthly(+e.target.value)} className="w-full"/>
            <div className="text-xl font-bold">₹{monthly.toLocaleString()}</div>
          </div>

          <div>
            <label className="block mb-2 font-medium">Rate of Return (%)</label>
            <input type="range" min="5" max="20" value={rate} onChange={(e) => setRate(+e.target.value)} className="w-full"/>
            <div className="text-xl font-bold">{rate}%</div>
          </div>

          <div>
            <label className="block mb-2 font-medium">Investment Horizon (Years)</label>
            <input type="range" min="5" max="40" value={years} onChange={(e) => setYears(+e.target.value)} className="w-full"/>
            <div className="text-xl font-bold">{years} Years</div>
          </div>

          <div>
            <label className="block mb-2 font-medium">Delay (Years)</label>
            <input type="range" min="1" max="10" value={delay} onChange={(e) => setDelay(+e.target.value)} className="w-full"/>
            <div className="text-xl font-bold">{delay} Years</div>
          </div>
        </>
      }
      chart={
        <ResponsiveContainer width="100%" height={300}>
          <LineChart data={data}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="plan"/>
            <YAxis />
            <Tooltip />
            <Line type="monotone" dataKey="value" stroke="#ef4444" strokeWidth={2} />
          </LineChart>
        </ResponsiveContainer>
      }
      results={
        <>
          <div className="p-4 bg-white rounded-xl shadow">
            <h4 className="text-gray-600">Corpus Without Delay</h4>
            <p className="text-2xl font-bold">₹{normalMaturity.toLocaleString()}</p>
          </div>
          <div className="p-4 bg-white rounded-xl shadow">
            <h4 className="text-gray-600">Corpus With {delay} Years Delay</h4>
            <p className="text-2xl font-bold text-orange-500">₹{delayedMaturity.toLocaleString()}</p>
          </div>
          <div className="p-4 bg-white rounded-xl shadow">
            <h4 className="text-gray-600">Wealth Lost Due To Delay</h4>
            <p className="text-2xl font-bold text-red-500">₹{loss.toLocaleString()}</p>
          </div>
        </>
      }
    />
  );
};

export default DelayPlanningCalculator;
