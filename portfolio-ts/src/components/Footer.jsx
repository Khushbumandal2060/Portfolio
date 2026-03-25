"use client";
import Link from "next/link";
import { FaGithub, FaLinkedin, FaTwitter, FaEnvelope } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 mt-20">
      <div className="max-w-7xl mx-auto px-6 py-16 grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* Logo */}
        <div>
          <Link href="/" className="text-2xl font-bold text-white hover:text-cyan-400">
            Khushbu<span className="text-cyan-400">.</span>
          </Link>
          <p className="mt-4 text-gray-400 max-w-xs">
            I build modern, responsive web applications using Next.js, Tailwind CSS, and TypeScript.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-white font-semibold mb-4">Quick Links</h3>
          <ul className="space-y-2">
            <li><Link href="#about" className="hover:text-cyan-400">About</Link></li>
            <li><Link href="#skills" className="hover:text-cyan-400">Skills</Link></li>
            <li><Link href="#projects" className="hover:text-cyan-400">Projects</Link></li>
            <li><Link href="#contact" className="hover:text-cyan-400">Contact</Link></li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h3 className="text-white font-semibold mb-4">Contact</h3>
          <p className="flex items-center gap-2"><FaEnvelope /> khushbu@email.com</p>
        </div>

        {/* Social */}
        <div>
          <h3 className="text-white font-semibold mb-4">Follow Me</h3>
          <div className="flex gap-4 text-xl">
            <Link href="https://github.com/Khushbumandal2060" className="hover:text-cyan-400"> <FaGithub /> </Link>
            <Link href="https://linkedin.com/in/khushbumandal" className="hover:text-cyan-400"> <FaLinkedin /> </Link>
            <Link href="https://twitter.com/KhushbuMandal" className="hover:text-cyan-400"> <FaTwitter /> </Link>
          </div>
        </div>
      </div>

      <div className="border-t border-gray-800 py-4 text-center text-gray-500">
        &copy; {new Date().getFullYear()} Khushbu Mandal. All rights reserved.
      </div>
    </footer>
  );
}