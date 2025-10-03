import React, { useState } from "react";

const STPCalculator = () => {
  const [transferAmount, setTransferAmount] = useState(10000);
  const [months, setMonths] = useState(12);
  const [rate, setRate] = useState(12);

  const monthlyRate = rate / 100 / 12;
  const futureValue =
    transferAmount *
    ((Math.pow(1 + monthlyRate, months) - 1) / monthlyRate) *
    (1 + monthlyRate);

  const investedAmount = transferAmount * months;
  const wealthGain = futureValue - investedAmount;

  return (
    <div>
      <h2 className="text-2xl font-bold text-gray-800 mb-6">STP Calculator</h2>

      <div className="grid md:grid-cols-3 gap-6 mb-6">
        <div>
          <label className="block text-gray-700 font-medium mb-2">Monthly Transfer (₹)</label>
          <input
            type="number"
            value={transferAmount}
            onChange={(e) => setTransferAmount(Number(e.target.value))}
            className="w-full border rounded-lg px-3 py-2"
          />
        </div>
        <div>
          <label className="block text-gray-700 font-medium mb-2">Number of Months</label>
          <input
            type="number"
            value={months}
            onChange={(e) => setMonths(Number(e.target.value))}
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
        <p className="text-lg"><strong>Invested Amount:</strong> ₹{investedAmount.toLocaleString()}</p>
        <p className="text-lg"><strong>Wealth Gain:</strong> ₹{wealthGain.toLocaleString()}</p>
        <p className="text-xl font-bold text-success-600"><strong>Total Value:</strong> ₹{futureValue.toLocaleString()}</p>
      </div>
    </div>
  );
};

export default STPCalculator;
