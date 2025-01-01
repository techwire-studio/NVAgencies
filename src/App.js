import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar.js";
import Footer from "./components/Footer.js";
import Home from "./components/Home.js";
import About from "./components/About.js";
import Track from "./components/Track.js";
import Cart from "./components/ShoppingCartPage.js";
import Contact from "./components/Contact.js";

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
      </Routes>
      <Footer />
    </div>
  );
};

export default App;
