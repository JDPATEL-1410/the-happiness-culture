import React, { useState } from "react";

const SWPCalculator = () => {
  const [investment, setInvestment] = useState(500000);
  const [withdrawal, setWithdrawal] = useState(10000);
  const [years, setYears] = useState(5);
  const [rate, setRate] = useState(10);

  const months = years * 12;
  const monthlyRate = rate / 100 / 12;

  let balance = investment;
  for (let i = 0; i < months; i++) {
    balance = balance * (1 + monthlyRate) - withdrawal;
    if (balance < 0) {
      balance = 0;
      break;
    }
  }

  return (
    <div>
      <h2 className="text-2xl font-bold text-gray-800 mb-6">SWP Calculator</h2>

      <div className="grid md:grid-cols-4 gap-6 mb-6">
        <div>
          <label className="block text-gray-700 font-medium mb-2">Initial Investment (₹)</label>
          <input
            type="number"
            value={investment}
            onChange={(e) => setInvestment(Number(e.target.value))}
            className="w-full border rounded-lg px-3 py-2"
          />
        </div>
        <div>
          <label className="block text-gray-700 font-medium mb-2">Monthly Withdrawal (₹)</label>
          <input
            type="number"
            value={withdrawal}
            onChange={(e) => setWithdrawal(Number(e.target.value))}
            className="w-full border rounded-lg px-3 py-2"
          />
        </div>
        <div>
          <label className="block text-gray-700 font-medium mb-2">Duration (Years)</label>
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
        <p className="text-lg"><strong>Final Value:</strong> ₹{balance.toLocaleString()}</p>
        <p className="text-lg"><strong>Total Withdrawals:</strong> ₹{(withdrawal * years * 12).toLocaleString()}</p>
      </div>
    </div>
  );
};

export default SWPCalculator;
