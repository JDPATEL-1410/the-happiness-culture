import React from "react";
import { motion } from "framer-motion";
import { FaLock } from "react-icons/fa";

const PrivacyPolicy = () => {
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
                <FaLock className="text-3xl" />
              </div>
              <h1 className="text-5xl font-bold">Privacy Policy</h1>
            </div>
            <p className="text-xl opacity-90">
              Effective from June 1, 2018 | Updated October 3, 2025
            </p>
          </motion.div>
        </div>
      </section>

      {/* Content */}
      <section className="py-16 bg-white">
        <div className="max-w-5xl mx-auto px-4 space-y-10 text-gray-700 leading-relaxed">

          <div>
            <p>
              This privacy policy sets out how The Happyness Culture uses and protects
              any information that you share when you use this website. We are committed
              to ensuring that your privacy is protected at all times. Any information
              provided will only be used in accordance with this policy.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold mb-3">1. General Commitment</h2>
            <p>
              We understand that our relationship is strongly built on trust and faith.
              In the course of using this website or availing our services, we may
              become privy to personal information of our customers, including
              confidential details. We are strictly committed to protecting such
              information and have taken reasonable measures to secure it. However, we
              shall not be liable for disclosures required by law, regulators, or due to
              circumstances beyond our control.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold mb-3">2. Information We Collect</h2>
            <ul className="list-disc list-inside space-y-2">
              <li>Name and contact details (email, phone number, address).</li>
              <li>Information when registering, purchasing, or using features.</li>
              <li>Usage details such as IP address, browser, and interactions.</li>
            </ul>
          </div>

          <div>
            <h2 className="text-2xl font-bold mb-3">3. Collection & Use of Image Data</h2>
            <p>
              With your permission, our application may access your device’s camera or
              gallery for features like document upload and Video KYC. Uploaded images
              are used solely for verification and are not shared with third parties,
              unless required by law or necessary for service delivery.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold mb-3">4. Use of Location Data</h2>
            <p>
              We may access your location to verify your identity and grant access to
              application features where relevant. This data is not shared externally
              without your consent, except where legally mandated.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold mb-3">5. Security</h2>
            <p>
              We are committed to ensuring that your information is secure. To prevent
              unauthorized access or disclosure, we implement physical, electronic, and
              managerial safeguards, including 256-bit encryption and secure hosting
              with continuous backups.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold mb-3">6. Links to Other Websites</h2>
            <p>
              Our website may contain links to other websites. We are not responsible
              for the protection and privacy of any information you provide on such
              third-party websites. Users are advised to review the privacy policies of
              those websites.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold mb-3">7. Controlling Your Personal Information</h2>
            <p>
              If you believe any information we hold is incorrect or incomplete, please
              contact us at <a href="mailto:info@wecare.investments" className="text-success-500">info@wecare.investments</a>. 
              You may also request deletion of your account or certain personal
              information through app settings or official channels.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold mb-3">8. Security Certificates</h2>
            <p>
              We recognize the security implications of being a trusted financial
              services provider. All client data is encrypted, stored securely, and not
              shared without explicit consent. Passwords are one-way encrypted before
              being stored in our systems. Communication with AMCs and other partners
              is also encrypted for maximum security.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold mb-3">9. Policy Updates</h2>
            <p>
              This policy may be updated periodically. Please check this page from time
              to time to ensure you are happy with any changes. The latest update was on
              <strong> October 3, 2025</strong>.
            </p>
          </div>

        </div>
      </section>
    </div>
  );
};

export default PrivacyPolicy;
