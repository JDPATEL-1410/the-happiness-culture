import React, { useState } from "react";

const EducationCalculator = () => {
  const [costToday, setCostToday] = useState(2000000);
  const [inflation, setInflation] = useState(8);
  const [years, setYears] = useState(12);

  const futureCost = costToday * Math.pow(1 + inflation / 100, years);

  return (
    <div>
      <h2 className="text-2xl font-bold text-gray-800 mb-6">Education Planning Calculator</h2>

      <div className="grid md:grid-cols-3 gap-6 mb-6">
        <div>
          <label className="block text-gray-700 font-medium mb-2">Current Cost (₹)</label>
          <input
            type="number"
            value={costToday}
            onChange={(e) => setCostToday(Number(e.target.value))}
            className="w-full border rounded-lg px-3 py-2"
          />
        </div>
        <div>
          <label className="block text-gray-700 font-medium mb-2">Inflation (% p.a.)</label>
          <input
            type="number"
            value={inflation}
            onChange={(e) => setInflation(Number(e.target.value))}
            className="w-full border rounded-lg px-3 py-2"
          />
        </div>
        <div>
          <label className="block text-gray-700 font-medium mb-2">Years Left</label>
          <input
            type="number"
            value={years}
            onChange={(e) => setYears(Number(e.target.value))}
            className="w-full border rounded-lg px-3 py-2"
          />
        </div>
      </div>

      <div className="bg-gray-50 p-6 rounded-lg shadow text-center">
        <h3 className="text-gray-600">Future Education Cost</h3>
        <p className="text-2xl font-bold text-indigo-600 mt-2">₹{futureCost.toLocaleString()}</p>
      </div>
    </div>
  );
};

export default EducationCalculator;
