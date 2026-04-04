"use client";
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { FiMenu, FiX } from "react-icons/fi";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = ["About Me", "Skills", "Projects", "Contact"];

  return (
    <nav
      className={`fixed w-full z-50 transition-all ${
        isScrolled
          ? "bg-gray-900/90 backdrop-blur-md py-4 shadow-lg"
          : "bg-transparent py-6"
      } font-sans`}
    >
      <div className="w-full px-6 md:px-12 flex items-center justify-between">
        {/* Logo */}
        <Link
          href="/"
          className="text-3xl md:text-4xl font-extrabold text-white hover:text-cyan-400 tracking-tight transition-all duration-300"
        >
          Khushbu
        </Link>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-12 font-medium">
          {navLinks.map((link) => (
            <Link
              key={link}
              href={`#${link.toLowerCase().replace(/\s/g, "-")}`}
              className="text-white hover:text-cyan-400 transition-all duration-300 text-lg md:text-xl tracking-tight"
            >
              {link}
            </Link>
          ))}
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button
            className="text-white text-3xl transition-all duration-300"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <FiX /> : <FiMenu />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "100%" }}
            transition={{ duration: 0.3 }}
            className="fixed top-0 right-0 w-2/3 h-full bg-gray-900 p-8 flex flex-col gap-8 md:hidden shadow-2xl z-50 font-sans"
          >
            {navLinks.map((link) => (
              <Link
                key={link}
                href={`#${link.toLowerCase().replace(/\s/g, "-")}`}
                className="text-white hover:text-cyan-400 font-medium text-2xl tracking-tight transition-all duration-300"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {link}
              </Link>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;