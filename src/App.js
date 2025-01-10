import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar.js";
import Footer from "./components/Footer.js";
import Home from "./components/Home.js";
import About from "./components/About.js";
import Track from "./components/Track.js";
import Cart from "./components/ShoppingCartPage.js";
import Contact from "./components/Contact.js";
import FAQ from "./components/Faq.js";
import ShippingPolicy from "./components/ShippingPolicy.js";
import RefundPolicy from "./components/RefundPolicy.js";
import TermsOfService from "./components/TermsOfService.js"
import PrivacyPolicy from "./components/PrivacyPolicy.js"

const App = () => {
  return (
    <div className="min-h-screen bg-[#FFF8F0]">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/track" element={<Track />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/pages/faq" element={<FAQ />} />
        <Route path="/policies/shipping-policy" element={<ShippingPolicy />} />
        <Route path="/policies/refund-policy" element={<RefundPolicy />} />
        <Route path="/policies/terms-of-service" element={<TermsOfService />} />
        <Route path="/policies/privacy-policy" element={<PrivacyPolicy />} />
      </Routes>
      <Footer />
    </div>
  );
};

export default App;
