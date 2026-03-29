"use client";
import Link from "next/link";
import { FaGithub, FaLinkedin, FaInstagram, FaEnvelope } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-6 py-20 grid grid-cols-1 md:grid-cols-4 gap-12 md:gap-10">

        {/* LOGO */}
        <div className="flex flex-col items-start md:items-start">
          <Link
            href="/"
            className="text-3xl md:text-4xl font-bold text-white hover:text-cyan-400"
          >
            Khushbu<span className="text-cyan-400">.</span>
          </Link>
          <p className="mt-4 text-gray-400 text-base md:text-lg max-w-xs">
            I build modern, responsive web applications using Next.js, Tailwind CSS, and TypeScript.
          </p>
        </div>

        {/* QUICK LINKS */}
        <div className="flex flex-col">
          <h3 className="text-white font-semibold mb-5 text-xl md:text-2xl">Quick Links</h3>
          <ul className="space-y-3 text-lg md:text-xl">
            {["About", "Skills", "Projects", "Contact"].map((link) => (
              <li key={link}>
                <Link
                  href={`#${link.toLowerCase()}`}
                  className="hover:text-cyan-400 transition"
                >
                  {link}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* CONTACT */}
        <div className="flex flex-col">
          <h3 className="text-white font-semibold mb-5 text-xl md:text-2xl">Contact</h3>
          <p className="flex items-center gap-3 text-lg md:text-xl">
            <FaEnvelope className="text-cyan-400" /> khusbumandal2060@email.com
          </p>
        </div>

        {/* SOCIAL */}
        <div className="flex flex-col">
          <h3 className="text-white font-semibold mb-5 text-xl md:text-2xl">Follow Me</h3>
          <div className="flex gap-6 text-3xl md:text-4xl mt-2">
            <Link
              href="https://github.com/Khushbumandal2060"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-cyan-400 transition transform hover:scale-110"
            >
              <FaGithub />
            </Link>
            <Link
              href="https://www.linkedin.com/in/khushbu-kumari-mandal-99637b343/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-cyan-400 transition transform hover:scale-110"
            >
              <FaLinkedin />
            </Link>
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

      {/* BOTTOM BAR */}
      <div className="border-t border-gray-800 py-5 text-center text-gray-400 text-base md:text-lg">
        &copy; {new Date().getFullYear()} Khushbu Mandal. All rights reserved.
      </div>
    </footer>
  );
}