"use client";
import React, { useState } from 'react';
import '../app/globals.css';
import { FaUser, FaShoppingCart, FaBars } from 'react-icons/fa';

const Navbar = () => {
  const [activeNavItem, setActiveNavItem] = useState('HOME');
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = ['HOME', 'SERVICES', 'PACKAGES', 'ABOUT US', 'GALLERY', 'CONTACT'];

  const handleItemClick = (item) => {
    setActiveNavItem(item);
    window.alert(`You have clicked ${item}`);
    if (isMenuOpen) setIsMenuOpen(false); // Close mobile menu if open
  };

  return (
    <div className="navbar flex items-center justify-between px-4 py-2 sticky top-0 bg-white shadow-md z-10">
      {/* Logo Section */}
      <div className="logo">
        <h1 className="text-2xl md:text-3xl font-bold text-red-500">WYPE</h1>
        <p className="mt-1 md:mt-2 text-sm md:text-lg text-black">REVIVE - RIDE - RAPTURE</p>
      </div>

      {/* Desktop Navigation */}
      <div className="navitems hidden custom-md:flex flex-1 justify-center">
        <ul className="flex space-x-8 font-normal cursor-pointer">
          {navItems.map((item) => (
            <li
              key={item}
              className={` ${item === activeNavItem ? 'text-red-500 ' : 'text-black'}`}
              onClick={() => handleItemClick(item)}
            >
              {item}
            </li>
          ))}
        </ul>
      </div>

      {/* User, Cart, and Hamburger Menu */}
      <div className="loginandcart flex items-center space-x-4 cursor-pointer">
        <FaUser className="w-6 h-6 text-gray-700" onClick={() => handleItemClick('User')} />
        <FaShoppingCart className="w-6 h-6 text-gray-700" onClick={() => handleItemClick('Cart')} />
        {/* Mobile Menu Toggle */}
        <button className="custom-md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
          <FaBars className="w-6 h-6 text-gray-700" />
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="mobile-menu custom-md:hidden absolute top-20 left-0 w-full bg-white shadow-md">
          <ul className="flex flex-col items-center space-y-4 py-4">
            {navItems.map((item) => (
              <li
                key={item}
                className={`${item === activeNavItem ? 'text-red-500 ' : 'text-black'}`}
                onClick={() => handleItemClick(item)}
              >
                {item}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default Navbar;
