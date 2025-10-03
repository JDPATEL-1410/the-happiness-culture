import React, { useState } from "react";

const RetirementCalculator = () => {
  const [currentAge, setCurrentAge] = useState(30);
  const [retirementAge, setRetirementAge] = useState(60);
  const [monthlyExpense, setMonthlyExpense] = useState(50000);
  const [inflation, setInflation] = useState(6);
  const [lifeExpectancy, setLifeExpectancy] = useState(80);
  const [returnRate, setReturnRate] = useState(10);

  const yearsToRetirement = retirementAge - currentAge;
  const retirementCorpusNeeded =
    monthlyExpense *
    Math.pow(1 + inflation / 100, yearsToRetirement) *
    12 *
    (lifeExpectancy - retirementAge);

  const sipNeeded =
    retirementCorpusNeeded /
    (((Math.pow(1 + returnRate / 100 / 12, yearsToRetirement * 12) - 1) /
      (returnRate / 100 / 12)) *
      (1 + returnRate / 100 / 12));

  return (
    <div>
      <h2 className="text-2xl font-bold text-gray-800 mb-6">Retirement Planning Calculator</h2>

      <div className="grid md:grid-cols-3 gap-6 mb-6">
        <div>
          <label className="block text-gray-700 font-medium mb-2">Current Age</label>
          <input
            type="number"
            value={currentAge}
            onChange={(e) => setCurrentAge(Number(e.target.value))}
            className="w-full border rounded-lg px-3 py-2"
          />
        </div>
        <div>
          <label className="block text-gray-700 font-medium mb-2">Retirement Age</label>
          <input
            type="number"
            value={retirementAge}
            onChange={(e) => setRetirementAge(Number(e.target.value))}
            className="w-full border rounded-lg px-3 py-2"
          />
        </div>
        <div>
          <label className="block text-gray-700 font-medium mb-2">Monthly Expenses Today (₹)</label>
          <input
            type="number"
            value={monthlyExpense}
            onChange={(e) => setMonthlyExpense(Number(e.target.value))}
            className="w-full border rounded-lg px-3 py-2"
          />
        </div>
      </div>

      <div className="grid md:grid-cols-3 gap-6 mb-6">
        <div>
          <label className="block text-gray-700 font-medium mb-2">Inflation Rate (%)</label>
          <input
            type="number"
            value={inflation}
            onChange={(e) => setInflation(Number(e.target.value))}
            className="w-full border rounded-lg px-3 py-2"
          />
        </div>
        <div>
          <label className="block text-gray-700 font-medium mb-2">Life Expectancy (Years)</label>
          <input
            type="number"
            value={lifeExpectancy}
            onChange={(e) => setLifeExpectancy(Number(e.target.value))}
            className="w-full border rounded-lg px-3 py-2"
          />
        </div>
        <div>
          <label className="block text-gray-700 font-medium mb-2">Expected Return (%)</label>
          <input
            type="number"
            value={returnRate}
            onChange={(e) => setReturnRate(Number(e.target.value))}
            className="w-full border rounded-lg px-3 py-2"
          />
        </div>
      </div>

      <div className="bg-gray-50 p-6 rounded-lg shadow">
        <p className="text-lg"><strong>Corpus Needed at Retirement:</strong> ₹{retirementCorpusNeeded.toLocaleString()}</p>
        <p className="text-xl font-bold text-success-600"><strong>Monthly SIP Required:</strong> ₹{sipNeeded.toLocaleString()}</p>
      </div>
    </div>
  );
};

export default RetirementCalculator;
