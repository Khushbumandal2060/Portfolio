"use client";

import { useState } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  return (
    <nav className="fixed w-full bg-white/70 backdrop-blur-md shadow-md z-50">
      <div className="max-w-7xl mx-auto flex justify-between items-center p-4">
        <h1 className="text-2xl font-bold text-gray-800">Khushbu Mandal</h1>
        <div className="hidden md:flex space-x-6 text-gray-700 font-medium">
          <a href="#skills" className="hover:text-gray-900 transition">Skills</a>
          <a href="#projects" className="hover:text-gray-900 transition">Projects</a>
          <a href="#contact" className="hover:text-gray-900 transition">Contact</a>
        </div>
        <div className="md:hidden">
          <button onClick={() => setOpen(!open)}>
            <span className="text-2xl">&#9776;</span>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="md:hidden bg-white/90 backdrop-blur-md flex flex-col items-center py-4 space-y-3">
          <a href="#skills">Skills</a>
          <a href="#projects">Projects</a>
          <a href="#contact">Contact</a>
        </div>
      )}
    </nav>
  );
}