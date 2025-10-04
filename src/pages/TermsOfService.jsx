import React from "react";
import { motion } from "framer-motion";
import { FaFileContract } from "react-icons/fa";

const TermsOfService = () => {
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
                <FaFileContract className="text-3xl" />
              </div>
              <h1 className="text-5xl font-bold">Terms of Service</h1>
            </div>
            <p className="text-xl opacity-90">
              These terms govern your use of The Happyness Culture website and services.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-16 bg-white">
        <div className="max-w-5xl mx-auto px-4 space-y-10 text-gray-700">
          <div>
            <h2 className="text-2xl font-bold mb-3">1. Acceptance of Terms</h2>
            <p>
              By accessing or using our website, you agree to comply with these Terms of Service. 
              If you do not agree, you should discontinue use of our website and services immediately.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold mb-3">2. Use of Website</h2>
            <p>
              You agree to use the website only for lawful purposes. 
              You must not misuse or interfere with the security, functionality, or availability of the site.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold mb-3">3. Financial Services</h2>
            <p>
              The Happyness Culture is an AMFI-Registered Mutual Fund Distributor (ARN: 119542). 
              We distribute Regular Plans of mutual funds and earn trailing commissions from AMCs. 
              We do not provide investment guarantees or offer Direct Plans.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold mb-3">4. User Responsibilities</h2>
            <p>
              You are responsible for providing accurate personal and financial information during onboarding. 
              Any decisions you make based on the content of this website are at your sole risk.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold mb-3">5. Intellectual Property</h2>
            <p>
              All logos, trademarks, graphics, and content on this site are the property of The Happyness Culture. 
              Unauthorized reproduction, copying, or distribution is prohibited.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold mb-3">6. Limitation of Liability</h2>
            <p>
              We are not liable for any direct, indirect, or consequential losses that result from using our website, 
              including reliance on information, delays, or interruptions of service.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold mb-3">7. Changes to Terms</h2>
            <p>
              The Happyness Culture reserves the right to update or modify these Terms of Service at any time. 
              Changes will be effective immediately upon posting on this website.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold mb-3">8. Governing Law</h2>
            <p>
              These Terms of Service are governed by the laws of India. 
              Any disputes will be subject to the exclusive jurisdiction of the courts in Mumbai, Maharashtra.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default TermsOfService;
