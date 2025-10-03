import React, { useState } from "react";

const CarLoanCalculator = () => {
  const [loan, setLoan] = useState(800000);
  const [rate, setRate] = useState(9);
  const [years, setYears] = useState(5);

  const months = years * 12;
  const monthlyRate = rate / 100 / 12;

  const emi =
    (loan * monthlyRate * Math.pow(1 + monthlyRate, months)) /
    (Math.pow(1 + monthlyRate, months) - 1);

  return (
    <div>
      <h2 className="text-2xl font-bold text-gray-800 mb-6">Car Loan EMI Calculator</h2>

      <div className="grid md:grid-cols-3 gap-6 mb-6">
        <div>
          <label className="block text-gray-700 mb-2">Loan Amount (₹)</label>
          <input
            type="number"
            value={loan}
            onChange={(e) => setLoan(Number(e.target.value))}
            className="w-full border rounded-lg px-3 py-2"
          />
        </div>
        <div>
          <label className="block text-gray-700 mb-2">Interest Rate (% p.a.)</label>
          <input
            type="number"
            value={rate}
            onChange={(e) => setRate(Number(e.target.value))}
            className="w-full border rounded-lg px-3 py-2"
          />
        </div>
        <div>
          <label className="block text-gray-700 mb-2">Loan Tenure (Years)</label>
          <input
            type="number"
            value={years}
            onChange={(e) => setYears(Number(e.target.value))}
            className="w-full border rounded-lg px-3 py-2"
          />
        </div>
      </div>

      <div className="bg-gray-50 p-6 rounded-lg shadow text-center">
        <h3 className="text-gray-600">Monthly EMI</h3>
        <p className="text-2xl font-bold text-success-600 mt-2">₹{emi.toFixed(0)}</p>
      </div>
    </div>
  );
};

export default CarLoanCalculator;

