import React, { useState } from "react";

// Compares starting SIP today vs delaying by X years.
// Also tells you how much higher SIP you'll need after delay to match the same corpus.
const DelayCalculator = () => {
  const [monthlySIP, setMonthlySIP] = useState(10000);
  const [totalYears, setTotalYears] = useState(20);
  const [delayYears, setDelayYears] = useState(3);
  const [rate, setRate] = useState(12);

  const r = rate / 100 / 12;
  const nTotal = Math.max(0, Math.round(totalYears * 12));
  const nAfterDelay = Math.max(0, Math.round((totalYears - delayYears) * 12));

  const fvFactor = (n) => (n === 0 ? 0 : ((Math.pow(1 + r, n) - 1) / r) * (1 + r));

  const fvStartToday = monthlySIP * fvFactor(nTotal);
  const fvAfterDelay = monthlySIP * fvFactor(nAfterDelay);
  const costOfDelay = Math.max(0, fvStartToday - fvAfterDelay);

  // Required SIP after delay to reach the "start today" corpus
  const denom = fvFactor(nAfterDelay);
  const requiredSipAfterDelay = denom > 0 ? fvStartToday / denom : Infinity;

  return (
    <div>
      <h2 className="text-2xl font-bold text-gray-800 mb-6">Delay Planning Calculator</h2>

      {/* Inputs */}
      <div className="grid md:grid-cols-4 gap-6 mb-6">
        <div>
          <label className="block text-gray-700 font-medium mb-2">Monthly SIP (₹)</label>
          <input
            type="number"
            value={monthlySIP}
            onChange={(e) => setMonthlySIP(Number(e.target.value))}
            className="w-full border rounded-lg px-3 py-2"
            min={0}
          />
        </div>
        <div>
          <label className="block text-gray-700 font-medium mb-2">Total Horizon (Years)</label>
          <input
            type="number"
            value={totalYears}
            onChange={(e) => setTotalYears(Number(e.target.value))}
            className="w-full border rounded-lg px-3 py-2"
            min={0}
          />
        </div>
        <div>
          <label className="block text-gray-700 font-medium mb-2">Delay (Years)</label>
          <input
            type="number"
            value={delayYears}
            onChange={(e) => setDelayYears(Number(e.target.value))}
            className="w-full border rounded-lg px-3 py-2"
            min={0}
            max={totalYears}
          />
        </div>
        <div>
          <label className="block text-gray-700 font-medium mb-2">Expected Return (% p.a.)</label>
          <input
            type="number"
            value={rate}
            onChange={(e) => setRate(Number(e.target.value))}
            className="w-full border rounded-lg px-3 py-2"
            min={0}
          />
        </div>
      </div>

      {/* Results */}
      <div className="grid md:grid-cols-3 gap-6">
        <div className="bg-gray-50 p-6 rounded-lg shadow">
          <h3 className="text-gray-600">Corpus if You Start Today</h3>
          <p className="text-2xl font-bold text-success-600 mt-2">
            ₹{fvStartToday.toLocaleString()}
          </p>
        </div>

        <div className="bg-gray-50 p-6 rounded-lg shadow">
          <h3 className="text-gray-600">Corpus if You Delay by {delayYears} yrs</h3>
          <p className="text-2xl font-bold text-primary-600 mt-2">
            ₹{fvAfterDelay.toLocaleString()}
          </p>
        </div>

        <div className="bg-gray-50 p-6 rounded-lg shadow">
          <h3 className="text-gray-600">Cost of Delay</h3>
          <p className="text-2xl font-bold text-red-600 mt-2">
            ₹{costOfDelay.toLocaleString()}
          </p>
        </div>
      </div>

      <div className="mt-6 bg-white border rounded-lg p-6">
        <h4 className="font-semibold text-gray-800 mb-1">Required SIP After Delay to Match Corpus</h4>
        <p className="text-lg">
          {requiredSipAfterDelay === Infinity
            ? "Not possible if delay ≥ total horizon."
            : `₹${Math.ceil(requiredSipAfterDelay).toLocaleString()} per month`}
        </p>
        <p className="text-xs text-gray-500 mt-2">
          Assumes zero investment during the delay and same return rate throughout.
        </p>
      </div>
    </div>
  );
};

export default DelayCalculator;
