// src/routes/AppRoutes.jsx
import React, { Suspense, lazy } from "react";
import { Routes, Route } from "react-router-dom";

const Home = lazy(() => import("../pages/Home"));
const About = lazy(() => import("../pages/About"));
const Services = lazy(() => import("../pages/Services"));
const Blog = lazy(() => import("../pages/Blog"));
const Contact = lazy(() => import("../pages/Contact"));
const Login = lazy(() => import("../pages/Login"));

// Calculator pages
const Calculator = lazy(() => import("../pages/Calculator"));
const SIPCalculator = lazy(() => import("../components/calculators/SIPCalculator"));
const LumpsumCalculator = lazy(() => import("../components/calculators/LumpsumCalculator"));
const STPCalculator = lazy(() => import("../components/calculators/STPCalculator"));
const SWPCalculator = lazy(() => import("../components/calculators/SWPCalculator"));
const RetirementCalculator = lazy(() => import("../components/calculators/RetirementCalculator"));
const DelayCalculator = lazy(() => import("../components/calculators/DelayCalculator"));
const InsuranceCalculator = lazy(() => import("../components/calculators/InsuranceCalculator"));
const EMICalculator = lazy(() => import("../components/calculators/EMICalculator"));
const TaxCalculator = lazy(() => import("../components/calculators/TaxCalculator"));
const MarriageCalculator = lazy(() => import("../components/calculators/MarriageCalculator"));
const EducationCalculator = lazy(() => import("../components/calculators/EducationCalculator"));
const HomeLoanCalculator = lazy(() => import("../components/calculators/HomeLoanCalculator"));
const CarLoanCalculator = lazy(() => import("../components/calculators/CarLoanCalculator"));
const VacationCalculator = lazy(() => import("../components/calculators/VacationCalculator"));

const AppRoutes = () => (
  <React.Suspense fallback={<div className="text-center py-20">Loading...</div>}>
    <Routes>
      {/* Main Pages */}
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/services" element={<Services />} />
      <Route path="/blog" element={<Blog />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/login" element={<Login />} />

      {/* Calculator Main Page */}
      <Route path="/calculator" element={<Calculator />} />

      {/* Calculator Sub Pages */}
      <Route path="/calculator/sip" element={<SIPCalculator />} />
      <Route path="/calculator/lumpsum" element={<LumpsumCalculator />} />
      <Route path="/calculator/stp" element={<STPCalculator />} />
      <Route path="/calculator/swp" element={<SWPCalculator />} />
      <Route path="/calculator/retirement" element={<RetirementCalculator />} />
      <Route path="/calculator/delay" element={<DelayCalculator />} />
      <Route path="/calculator/insurance" element={<InsuranceCalculator />} />
      <Route path="/calculator/emi" element={<EMICalculator />} />
      <Route path="/calculator/tax" element={<TaxCalculator />} />
      <Route path="/calculator/marriage" element={<MarriageCalculator />} />
      <Route path="/calculator/education" element={<EducationCalculator />} />
      <Route path="/calculator/home-loan" element={<HomeLoanCalculator />} />
      <Route path="/calculator/car-loan" element={<CarLoanCalculator />} />
      <Route path="/calculator/vacation" element={<VacationCalculator />} />
    </Routes>
  </React.Suspense>
);

export default AppRoutes;