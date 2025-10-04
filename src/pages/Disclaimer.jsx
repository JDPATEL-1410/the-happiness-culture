import React from "react";
import { motion } from "framer-motion";
import { FaExclamationTriangle } from "react-icons/fa";

const Disclaimer = () => {
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
                <FaExclamationTriangle className="text-3xl" />
              </div>
              <h1 className="text-5xl font-bold">Disclaimer</h1>
            </div>
            <p className="text-xl opacity-90">
              Important regulatory and risk disclosures for investors
            </p>
          </motion.div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 space-y-10 text-gray-700 leading-relaxed">

          <div>
            <h2 className="text-2xl font-bold mb-3">Market Risks & Investment Disclosures</h2>
            <p>
              Mutual fund investments are subject to market risks, and values may fluctuate due to economic and financial conditions. 
              Past performance does not guarantee future results, and short-term market movements are unpredictable. 
              Investors should review all scheme-related documents carefully before investing.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold mb-3">Dividend Payments</h2>
            <p>
              Opting for the Dividend Option does not guarantee payouts. Dividends are distributed only when a fund has sufficient surplus. 
              If no surplus is generated, no dividend will be paid.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold mb-3">Updating Personal Information</h2>
            <p>
              Investors must keep their records updated to ensure smooth transactions and communication. 
              Any changes in personal details such as name, address, contact information, nominee, or bank account must be reported immediately. 
              Outdated or inaccurate details may lead to transaction failures or non-receipt of critical information.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold mb-3">Nominee & Joint Holder Updates</h2>
            <p>
              If a nominee or joint holder passes away, records must be updated promptly to avoid complications in claiming investments. 
              Proof such as a death certificate and identity verification documents are required for changes. 
              Keeping nominee details current ensures smooth transfer of investments to legal heirs.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold mb-3">Review Meetings & Reports</h2>
            <p>
              We recommend annual reviews to track portfolio performance and realign investments with financial goals. 
              Markets evolve, and periodic reviews help optimize asset allocation. 
              AMCs send statements via email, ensuring transparency and easy record-keeping.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold mb-3">Valuation Reports & NAV Calculations</h2>
            <p>
              NAV and valuation figures reflect the last recorded transaction date and may not represent current values. 
              NAV applicable to transactions depends on execution date and cutoff times. 
              Reports are for information only and should not be the sole basis for investment decisions.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold mb-3">Lock-in Periods & Exit Loads</h2>
            <ul className="list-disc list-inside space-y-2">
              <li>Retirement & Children’s Gift Funds: Lock-in of 5 years per installment.</li>
              <li>ELSS Funds: Lock-in of 3 years per installment.</li>
              <li>Exit Loads: Apply separately on each SIP installment or lump sum redemption within 12–24 months. Exit load rates vary across schemes.</li>
            </ul>
          </div>

          <div>
            <h2 className="text-2xl font-bold mb-3">Taxation & TDS Rules</h2>
            <p>
              Taxation on mutual funds depends on investment type, holding duration, and redemption date. 
              Short-Term and Long-Term Capital Gains (STCG, LTCG) apply differently. 
              NRI investors with NRE/NRO accounts will have TDS deducted as per regulations. 
              Investors should consult a tax advisor before making decisions.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold mb-3">Regulatory & Compensation Disclosure</h2>
            <p>
              We distribute only regular plans of mutual funds and earn trail commissions from AMCs. 
              We do not distribute direct plans and do not charge investors any direct advisory fees. 
              Our role is limited to facilitating investments.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold mb-3">Exit Load, Lock-in Period & Redemption Terms</h2>
            <p>
              Investors must review exit loads, lock-in rules, and redemption terms before withdrawal. 
              Redemption proceeds are credited in T+1 or T+2 days depending on the scheme’s processing. 
              Planning redemptions in advance ensures timely fund access.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold mb-3">Data Privacy & Security</h2>
            <p>
              We do not share, sell, or misuse investor data. Sensitive details like PAN, Aadhaar, and bank accounts are not stored on our website. 
              Transactions are processed securely through AMCs, RTAs, BSE/NSE/MFU platforms to ensure compliance and confidentiality.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold mb-3">Error Rectification & Misrepresentation Disclaimer</h2>
            <p>
              While we aim for accuracy, occasional errors may occur. 
              Investors are responsible for verifying details before making financial decisions. 
              We reserve the right to rectify errors but do not guarantee assured returns or fixed income. 
              Beware of fraudulent schemes and misleading investment guarantees — mutual funds are market-linked and subject to risks.
            </p>
          </div>

        </div>
      </section>
    </div>
  );
};

export default Disclaimer;
