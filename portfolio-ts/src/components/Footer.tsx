"use client";
import Link from "next/link";
import { FaGithub, FaLinkedin, FaInstagram, FaEnvelope } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-6 py-20 grid grid-cols-1 md:grid-cols-4 gap-10">
        {/* Logo */}
        <div>
          <Link href="/" className="text-3xl md:text-4xl font-bold text-white hover:text-cyan-400">
            Khushbu<span className="text-cyan-400">.</span>
          </Link>
          <p className="mt-5 text-base md:text-lg text-gray-400 max-w-xs">
            I build modern, responsive web applications using Next.js, Tailwind CSS, and TypeScript.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-white font-semibold mb-5 text-xl md:text-2xl">Quick Links</h3>
          <ul className="space-y-3 text-lg md:text-xl">
            {["About", "Skills", "Projects", "Contact"].map((link) => (
              <li key={link}>
                <Link href={`#${link.toLowerCase()}`} className="hover:text-cyan-400 transition">
                  {link}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h3 className="text-white font-semibold mb-5 text-xl md:text-2xl">Contact</h3>
          <p className="flex items-center gap-3 text-lg md:text-xl">
            <FaEnvelope className="text-cyan-400" /> khusbumandal@email.com
          </p>
        </div>

        {/* Social */}
        <div>
          <h3 className="text-white font-semibold mb-5 text-xl md:text-2xl">
            Follow Me
          </h3>

          <div className="flex gap-6 text-3xl md:text-4xl">

            {/* GitHub */}
            <Link
              href="https://github.com/Khushbumandal2060"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-cyan-400 transition transform hover:scale-110"
            >
              <FaGithub />
            </Link>

            {/* LinkedIn */}
            <Link
              href="https://www.linkedin.com/in/khushbu-kumari-mandal-99637b343/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-cyan-400 transition transform hover:scale-110"
            >
              <FaLinkedin />
            </Link>

            {/* Instagram */}
            <Link
              href="https://www.instagram.com/khushbumandal15/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-cyan-400 transition transform hover:scale-110"
            >
              <FaInstagram />
            </Link>

          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-800 py-5 text-center text-gray-400 text-base md:text-lg">
        &copy; {new Date().getFullYear()} Khushbu Mandal. All rights reserved.
      </div>
    </footer>
  );
}