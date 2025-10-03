import React, { useState } from "react";

// Standard EMI calculator for any loan.
const EMICalculator = () => {
  const [principal, setPrincipal] = useState(1000000);
  const [annualRate, setAnnualRate] = useState(9); // % p.a.
  const [tenureYears, setTenureYears] = useState(20);

  const n = Math.max(1, Math.round(tenureYears * 12));   // months
  const r = annualRate / 100 / 12;                       // monthly rate

  const pow = Math.pow(1 + r, n);
  const emi = r === 0 ? principal / n : (principal * r * pow) / (pow - 1);
  const totalPayment = emi * n;
  const totalInterest = totalPayment - principal;

  return (
    <div>
      <h2 className="text-2xl font-bold text-gray-800 mb-6">EMI Planning Calculator</h2>

      {/* Inputs */}
      <div className="grid md:grid-cols-3 gap-6 mb-6">
        <div>
          <label className="block text-gray-700 font-medium mb-2">Loan Amount (₹)</label>
          <input
            type="number"
            value={principal}
            onChange={(e) => setPrincipal(Number(e.target.value))}
            className="w-full border rounded-lg px-3 py-2"
            min={0}
          />
        </div>
        <div>
          <label className="block text-gray-700 font-medium mb-2">Interest Rate (% p.a.)</label>
          <input
            type="number"
            value={annualRate}
            onChange={(e) => setAnnualRate(Number(e.target.value))}
            className="w-full border rounded-lg px-3 py-2"
            min={0}
            step="0.1"
          />
        </div>
        <div>
          <label className="block text-gray-700 font-medium mb-2">Tenure (Years)</label>
          <input
            type="number"
            value={tenureYears}
            onChange={(e) => setTenureYears(Number(e.target.value))}
            className="w-full border rounded-lg px-3 py-2"
            min={0}
          />
        </div>
      </div>

      {/* Results */}
      <div className="grid md:grid-cols-3 gap-6">
        <div className="bg-gray-50 p-6 rounded-lg shadow">
          <h3 className="text-gray-600">Monthly EMI</h3>
          <p className="text-2xl font-bold text-success-600 mt-2">
            ₹{emi.toFixed(0).toLocaleString()}
          </p>
        </div>
        <div className="bg-gray-50 p-6 rounded-lg shadow">
          <h3 className="text-gray-600">Total Interest</h3>
          <p className="text-2xl font-bold text-primary-600 mt-2">
            ₹{totalInterest.toFixed(0).toLocaleString()}
          </p>
        </div>
        <div className="bg-gray-50 p-6 rounded-lg shadow">
          <h3 className="text-gray-600">Total Payment</h3>
          <p className="text-2xl font-bold text-indigo-600 mt-2">
            ₹{totalPayment.toFixed(0).toLocaleString()}
          </p>
        </div>
      </div>
    </div>
  );
};

export default EMICalculator;
