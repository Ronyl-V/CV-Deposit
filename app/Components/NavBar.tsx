"use client";

import React, { useState } from "react";
import { FileText, Menu, X } from "lucide-react";
import Link from "next/link";

const NavBar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className="bg-white border-b border-gray-200 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <FileText className="h-8 w-8 text-blue-600" />
            <span className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
              CVPlatform
            </span>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-4">
            <Link
              href="/Connexion"
              className="text-black font-semibold rounded-md px-3 py-2 hover:bg-gray-100"
            >
              Se connecter
            </Link>
            <Link
              href="/"
              className="text-white font-semibold rounded-md px-4 py-2 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700"
            >
              S&apos;inscrire
            </Link>
          </div>

          {/* Mobile Hamburger */}
          <button
            onClick={toggleMenu}
            className="md:hidden text-gray-700 focus:outline-none"
          >
            {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Menu Dropdown */}
        {isMobileMenuOpen && (
          <div className="md:hidden mt-2 space-y-2 pb-4">
            <Link
              href="/Connexion"
              className="block text-black font-semibold rounded-md px-4 py-2 hover:bg-gray-100"
            >
              Se connecter
            </Link>
            <Link
              href="/"
              className="block text-white font-semibold rounded-md px-4 py-2 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700"
            >
              S&apos;inscrire
            </Link>
          </div>
        )}
      </div>
    </nav>
  );
};

export default NavBar;
