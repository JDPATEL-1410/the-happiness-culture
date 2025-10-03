import React, { useState } from "react";

const TaxCalculator = () => {
  const [income, setIncome] = useState(800000);
  const [deductions, setDeductions] = useState(150000);

  const taxableIncome = Math.max(0, income - deductions);

  // Basic old regime tax slabs (India FY 23-24 as example)
  const calculateTax = (amt) => {
    let tax = 0;
    if (amt <= 250000) tax = 0;
    else if (amt <= 500000) tax = (amt - 250000) * 0.05;
    else if (amt <= 1000000) tax = 12500 + (amt - 500000) * 0.2;
    else tax = 112500 + (amt - 1000000) * 0.3;
    return tax;
  };

  const tax = calculateTax(taxableIncome);

  return (
    <div>
      <h2 className="text-2xl font-bold text-gray-800 mb-6">Income Tax Calculator</h2>

      <div className="grid md:grid-cols-2 gap-6 mb-6">
        <div>
          <label className="block text-gray-700 font-medium mb-2">Annual Income (₹)</label>
          <input
            type="number"
            value={income}
            onChange={(e) => setIncome(Number(e.target.value))}
            className="w-full border rounded-lg px-3 py-2"
          />
        </div>
        <div>
          <label className="block text-gray-700 font-medium mb-2">Deductions (₹)</label>
          <input
            type="number"
            value={deductions}
            onChange={(e) => setDeductions(Number(e.target.value))}
            className="w-full border rounded-lg px-3 py-2"
          />
        </div>
      </div>

      <div className="bg-gray-50 p-6 rounded-lg shadow text-center">
        <h3 className="text-gray-600">Tax Payable</h3>
        <p className="text-2xl font-bold text-primary-600 mt-2">₹{tax.toLocaleString()}</p>
      </div>
    </div>
  );
};

export default TaxCalculator;
