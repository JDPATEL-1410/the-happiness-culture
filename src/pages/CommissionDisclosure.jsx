import React from "react";
import { motion } from "framer-motion";
import { FaChartBar } from "react-icons/fa";

const CommissionDisclosure = () => {
  const commissions = [
    { scheme: "Arbitrage Funds", firstYear: "0.05% to 0.60%", onwards: "0.05% to 0.60%" },
    { scheme: "ELSS Funds", firstYear: "0.50% to 1.25%", onwards: "0.50% to 1.25%" },
    { scheme: "Equity Oriented Funds", firstYear: "0.50% to 1.25%", onwards: "0.50% to 1.25%" },
    { scheme: "Aggressive Hybrid Equity Funds", firstYear: "0.50% to 1.25%", onwards: "0.50% to 1.25%" },
    { scheme: "Fixed Maturity Plans", firstYear: "0.05% to 0.50%", onwards: "0.05% to 0.50%" },
    { scheme: "Fund of Funds", firstYear: "0.25% to 1%", onwards: "0.25% to 1%" },
    { scheme: "Gilt Funds", firstYear: "0.25% to 1%", onwards: "0.05% to 0.65%" },
    { scheme: "Hybrid Debt Funds", firstYear: "0.05% to 0.75%", onwards: "0.05% to 0.75%" },
    { scheme: "Income Funds", firstYear: "0.05% to 1%", onwards: "0.05% to 1%" },
    { scheme: "Index Funds", firstYear: "0.01% to 0.75%", onwards: "0.01% to 0.75%" },
    { scheme: "Liquid / Ultra Short-Term Funds", firstYear: "0.05% to 0.50%", onwards: "0.05% to 0.50%" },
    { scheme: "Short-Term Income Funds", firstYear: "0.05% to 0.65%", onwards: "0.05% to 0.65%" },
    { scheme: "Thematic / Sector Funds", firstYear: "0.50% to 1.25%", onwards: "0.50% to 1.25%" },
  ];

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-primary-500 to-success-500 text-white">
        <div className="max-w-5xl mx-auto text-center px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="flex items-center justify-center mb-6">
              <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center mr-4">
                <FaChartBar className="text-3xl" />
              </div>
              <h1 className="text-5xl font-bold">Commission Disclosure</h1>
            </div>
            <p className="text-lg opacity-90">
              Under SEBI Circular SEBI/IMD/CIR No.4 /168230/09
            </p>
          </motion.div>
        </div>
      </section>

      {/* Commission Table */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="overflow-x-auto shadow-lg rounded-lg">
            <table className="w-full border-collapse">
              <thead className="bg-primary-500 text-white">
                <tr>
                  <th className="p-4 text-left">Scheme Type</th>
                  <th className="p-4 text-left">Trail 1st Year</th>
                  <th className="p-4 text-left">Trail 2nd Year Onwards</th>
                </tr>
              </thead>
              <tbody>
                {commissions.map((row, index) => (
                  <tr
                    key={index}
                    className={`${
                      index % 2 === 0 ? "bg-gray-50" : "bg-white"
                    } hover:bg-success-50 transition`}
                  >
                    <td className="p-4 font-medium text-gray-800">{row.scheme}</td>
                    <td className="p-4 text-gray-700">{row.firstYear}</td>
                    <td className="p-4 text-gray-700">{row.onwards}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Disclaimer */}
          <div className="mt-10 bg-gray-100 p-6 rounded-lg text-sm text-gray-600 leading-relaxed">
            <p className="mb-3">
              *Investments in mutual funds are subject to market risk. Customers should
              read the scheme-related documents / key information documents of the Mutual
              Fund products carefully before investing. This disclosure is on a
              best-effort basis and commission rates are updated as and when actual
              details are received from AMCs.
            </p>
            <p className="mb-3">
              This information is for reference only and does not represent any financial
              advice. Prices and NAVs of mutual fund schemes are subject to market
              fluctuations. Past performance does not indicate or guarantee future
              results.
            </p>
            <p className="mb-3">
              This disclosure is an integral part of proposals we prepare for clients and
              is provided purely on a non-binding, informational basis. Clients are free
              to accept or reject proposals and are encouraged to seek independent legal,
              investment, and taxation advice before making decisions.
            </p>
            <p>
              We shall not be held responsible for any direct or indirect loss arising
              from reliance on this information.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CommissionDisclosure;
