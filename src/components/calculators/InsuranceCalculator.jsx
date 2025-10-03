import React, { useState } from "react";

// Simple "income replacement" approach with a sanity check against expenses-based.
// Recommends MAX of the two, minus existing savings, plus liabilities.
const InsuranceCalculator = () => {
  const [annualIncome, setAnnualIncome] = useState(1200000); // ₹
  const [annualExpenses, setAnnualExpenses] = useState(600000); // ₹
  const [yearsToRetire, setYearsToRetire] = useState(25);
  const [outstandingLoans, setOutstandingLoans] = useState(1500000);
  const [existingSavings, setExistingSavings] = useState(500000);

  // Method 1: Income-replacement (simple)
  const incomeReplacement = annualIncome * yearsToRetire;

  // Method 2: Expenses-based
  const expensesBased = annualExpenses * yearsToRetire;

  // Pick the higher need, add liabilities, subtract current savings
  const baseNeed = Math.max(incomeReplacement, expensesBased);
  const rawCover = baseNeed + outstandingLoans - existingSavings;

  // Round up to nearest lakh
  const roundUpLakh = (val) => Math.max(0, Math.ceil(val / 100000) * 100000);
  const recommendedCover = roundUpLakh(rawCover);

  return (
    <div>
      <h2 className="text-2xl font-bold text-gray-800 mb-6">Life Insurance Calculator</h2>

      {/* Inputs */}
      <div className="grid md:grid-cols-5 gap-6 mb-6">
        <div>
          <label className="block text-gray-700 font-medium mb-2">Annual Income (₹)</label>
          <input
            type="number"
            value={annualIncome}
            onChange={(e) => setAnnualIncome(Number(e.target.value))}
            className="w-full border rounded-lg px-3 py-2"
            min={0}
          />
        </div>
        <div>
          <label className="block text-gray-700 font-medium mb-2">Annual Expenses (₹)</label>
          <input
            type="number"
            value={annualExpenses}
            onChange={(e) => setAnnualExpenses(Number(e.target.value))}
            className="w-full border rounded-lg px-3 py-2"
            min={0}
          />
        </div>
        <div>
          <label className="block text-gray-700 font-medium mb-2">Years to Retirement</label>
          <input
            type="number"
            value={yearsToRetire}
            onChange={(e) => setYearsToRetire(Number(e.target.value))}
            className="w-full border rounded-lg px-3 py-2"
            min={0}
          />
        </div>
        <div>
          <label className="block text-gray-700 font-medium mb-2">Outstanding Loans (₹)</label>
          <input
            type="number"
            value={outstandingLoans}
            onChange={(e) => setOutstandingLoans(Number(e.target.value))}
            className="w-full border rounded-lg px-3 py-2"
            min={0}
          />
        </div>
        <div>
          <label className="block text-gray-700 font-medium mb-2">Existing Savings (₹)</label>
          <input
            type="number"
            value={existingSavings}
            onChange={(e) => setExistingSavings(Number(e.target.value))}
            className="w-full border rounded-lg px-3 py-2"
            min={0}
          />
        </div>
      </div>

      {/* Results */}
      <div className="grid md:grid-cols-3 gap-6">
        <div className="bg-gray-50 p-6 rounded-lg shadow">
          <h3 className="text-gray-600">Income Replacement Need</h3>
          <p className="text-2xl font-bold text-primary-600 mt-2">
            ₹{incomeReplacement.toLocaleString()}
          </p>
        </div>
        <div className="bg-gray-50 p-6 rounded-lg shadow">
          <h3 className="text-gray-600">Expenses-based Need</h3>
          <p className="text-2xl font-bold text-indigo-600 mt-2">
            ₹{expensesBased.toLocaleString()}
          </p>
        </div>
        <div className="bg-gray-50 p-6 rounded-lg shadow">
          <h3 className="text-gray-600">Recommended Cover</h3>
          <p className="text-2xl font-bold text-success-600 mt-2">
            ₹{recommendedCover.toLocaleString()}
          </p>
        </div>
      </div>

      <p className="text-xs text-gray-500 mt-4">
        Note: This is a quick planning tool. It doesn’t factor inflation, returns, or existing policies’ terms.
      </p>
    </div>
  );
};

export default InsuranceCalculator;
