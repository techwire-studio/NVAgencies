import React, { useState } from "react";
import { useCart } from "./CartContext";
import { Link } from "react-router-dom";
import {
  HomeIcon,
  ShoppingCartIcon,
  SearchIcon,
  UserIcon,
  BellIcon,
  MenuIcon,
  XIcon,
} from "@heroicons/react/outline";

const Navbar = () => {
  const [showSearchBar, setShowSearchBar] = useState(false);
  const { cartCount } = useCart();
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="bg-[#fffdfb] shadow-md">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        {/* Logo Section */}
        <div className="text-xl font-bold flex items-center space-x-2">
          <img
            src="https://nvagencies.co.in/cdn/shop/products/NV_LOGO-removebg-preview_25d21915-5665-4655-946d-425a1930f043.png?v=1698241282"
            alt="Logo"
            className="h-10"
          />
          <span className="text-[#804A27]">NV Agencies</span>
        </div>

        {/* Hamburger Menu Button */}
        <div className="lg:hidden">
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="text-[#ee8e62] hover:text-[#804A27] transition"
          >
            {menuOpen ? (
              <XIcon className="w-6 h-6" />
            ) : (
              <MenuIcon className="w-6 h-6" />
            )}
          </button>
        </div>

        {/* Navigation Links and Icons */}
        <div
          className={`lg:flex items-center space-y-5 lg:space-y-0 gap-5 mr-5 ${menuOpen ? "block" : "hidden"
            } absolute lg:static top-16 left-0 w-full lg:w-auto bg-[#fffdfb] lg:bg-transparent lg:p-0 p-4 lg:space-x-4 z-50`}
        >
          <Link
            to="/"
            className="block text-[#ee8e62] hover:text-[#804A27] font-medium transition lg:inline"
          >
            Home
          </Link>
          <Link
            to="/about"
            className="block text-[#ee8e62] hover:text-[#804A27] font-medium transition lg:inline"
          >
            About
          </Link>
          <Link
            to="/track"
            className="block text-[#ee8e62] hover:text-[#804A27] font-medium transition lg:inline"
          >
            Track Orders
          </Link>
          <Link
            to="/shop"
            className="block text-[#ee8e62] hover:text-[#804A27] font-medium transition lg:inline"
          >
            Shop
          </Link>
          <Link
            to="/contact"
            className="block text-[#ee8e62] hover:text-[#804A27] font-medium transition lg:inline"
          >
            Contact
          </Link>
          {/* Search Bar */}
          <div className="relative flex items-center mt-4 lg:mt-0">
            <SearchIcon
              onClick={() => setShowSearchBar(!showSearchBar)}
              className="w-6 h-6 text-[#ee8e62] hover:text-[#804A27] cursor-pointer transition-transform transform hover:rotate-y-180"
            />
            <div
              className={`transition-all duration-300 ease-in-out overflow-hidden ${showSearchBar ? "ml-2 w-60" : "w-0"
                }`}
            >
              <input
                type="text"
                placeholder="Search..."
                className="w-full p-2 border border-[#ee8e62] rounded-md focus:outline-none focus:ring-2 focus:ring-[#804A27]"
              />
            </div>
          </div>
          {/* Icons */}
          <div className="flex space-x-4 mt-4 lg:mt-0">
            <UserIcon className="nav-icon" />
            <BellIcon className="nav-icon" />
            <div className="relative">
              <Link to="/cart">
                <ShoppingCartIcon className="nav-icon" />
              </Link>
              {cartCount > 0 && (
                <span className="absolute top-[-10px] left-3 bg-red-500 text-white text-xs rounded-full w-4 h-4 flex items-center justify-center">
                  {cartCount}
                </span>
              )}
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
