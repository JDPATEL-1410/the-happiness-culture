import React, { useState } from "react";

const SIPCalculator = () => {
  const [monthlyInvestment, setMonthlyInvestment] = useState(10000);
  const [years, setYears] = useState(10);
  const [rate, setRate] = useState(12);

  const months = years * 12;
  const monthlyRate = rate / 100 / 12;
  const maturityValue =
    monthlyInvestment * ((Math.pow(1 + monthlyRate, months) - 1) / monthlyRate) * (1 + monthlyRate);

  const investedAmount = monthlyInvestment * months;
  const wealthGain = maturityValue - investedAmount;

  return (
    <div>
      <h2 className="text-2xl font-bold text-gray-800 mb-6">SIP Calculator</h2>
      
      <div className="grid md:grid-cols-3 gap-6 mb-6">
        <div>
          <label className="block text-gray-700 font-medium mb-2">Monthly Investment (₹)</label>
          <input
            type="number"
            value={monthlyInvestment}
            onChange={(e) => setMonthlyInvestment(Number(e.target.value))}
            className="w-full border rounded-lg px-3 py-2"
          />
        </div>
        <div>
          <label className="block text-gray-700 font-medium mb-2">Investment Period (Years)</label>
          <input
            type="number"
            value={years}
            onChange={(e) => setYears(Number(e.target.value))}
            className="w-full border rounded-lg px-3 py-2"
          />
        </div>
        <div>
          <label className="block text-gray-700 font-medium mb-2">Expected Return Rate (%)</label>
          <input
            type="number"
            value={rate}
            onChange={(e) => setRate(Number(e.target.value))}
            className="w-full border rounded-lg px-3 py-2"
          />
        </div>
      </div>

      <div className="bg-gray-50 p-6 rounded-lg shadow">
        <p className="text-lg text-gray-800"><strong>Invested Amount:</strong> ₹{investedAmount.toLocaleString()}</p>
        <p className="text-lg text-gray-800"><strong>Wealth Gain:</strong> ₹{wealthGain.toLocaleString()}</p>
        <p className="text-xl font-bold text-success-600"><strong>Total Value:</strong> ₹{maturityValue.toLocaleString()}</p>
      </div>
    </div>
  );
};

export default SIPCalculator;
