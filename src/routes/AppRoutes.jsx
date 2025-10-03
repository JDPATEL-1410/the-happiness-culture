import React, { Suspense, lazy } from "react";
import { Routes, Route } from "react-router-dom";

// Lazy imports for pages
const Home = lazy(() => import("../pages/Home"));
const About = lazy(() => import("../pages/About"));
const Services = lazy(() => import("../pages/Services"));
const Blog = lazy(() => import("../pages/Blog"));
const Calculator = lazy(() => import("../pages/Calculator"));
const Contact = lazy(() => import("../pages/Contact"));
const Login = lazy(() => import("../pages/Login"));

// Legal / Compliance Pages
const PrivacyPolicy = lazy(() => import("../pages/PrivacyPolicy"));
const TermsOfService = lazy(() => import("../pages/TermsOfService"));
const Disclaimer = lazy(() => import("../pages/Disclaimer"));   // ✅ fixed
const CommissionDisclosure = lazy(() => import("../pages/CommissionDisclosure"));


const AppRoutes = () => {
  return (
    <Suspense fallback={<div className="text-center py-20">Loading...</div>}>
      <Routes>
        {/* Main Pages */}
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/calculator" element={<Calculator />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/login" element={<Login />} />

        {/* Legal Pages */}
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="/terms-of-service" element={<TermsOfService />} />
        <Route path="/disclaimer" element={<Disclaimer />} />
        <Route path="/commission-disclosure" element={<CommissionDisclosure />} />
      </Routes>
    </Suspense>
  );
};

export default AppRoutes;
