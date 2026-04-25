"use client";
import { FaGithub, FaLinkedin, FaInstagram, FaEnvelope } from "react-icons/fa";

interface FooterProps {
  sections: { [key: string]: React.RefObject<HTMLElement> };
}

const Footer: React.FC<FooterProps> = ({ sections }) => {
  const quickLinks = [
    { label: "About Me", ref: "about" },
    { label: "Skills", ref: "skills" },
    { label: "Projects", ref: "projects" },
    { label: "Education", ref: "education" },
    { label: "Achievements", ref: "achievements" },
    { label: "Contact", ref: "contact" },
  ];

  const scrollToSection = (ref: string) => {
    sections[ref]?.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-6 py-20 grid grid-cols-1 md:grid-cols-4 gap-12 md:gap-10">

        {/* LOGO */}
        <div className="flex flex-col items-start md:items-start">
          <h1
            className="text-3xl md:text-4xl font-bold text-white hover:text-cyan-400 cursor-pointer"
            onClick={() => scrollToSection("about")}
          >
            Khushbu<span className="text-cyan-400">.</span>
          </h1>
          <p className="mt-4 text-gray-400 text-base md:text-lg max-w-xs">
            I build modern, responsive web applications using Next.js, Tailwind CSS, TypeScript and Backend.
          </p>
        </div>

        {/* QUICK LINKS */}
        <div className="flex flex-col">
          <h3 className="text-white font-semibold mb-5 text-xl md:text-2xl">Quick Links</h3>
          <ul className="space-y-3 text-lg md:text-xl">
            {quickLinks.map((link) => (
              <li key={link.ref}>
                <button
                  onClick={() => scrollToSection(link.ref)}
                  className="hover:text-cyan-400 transition text-left"
                >
                  {link.label}
                </button>
              </li>
            ))}
          </ul>
        </div>

        {/* CONTACT */}
        <div className="flex flex-col">
          <h3 className="text-white font-semibold mb-5 text-xl md:text-2xl">Contact</h3>
          <p className="flex items-center gap-3 text-lg md:text-xl">
            <FaEnvelope className="text-cyan-400"/>khusbumandal2060@email.com
          </p>
        </div>

        {/* SOCIAL */}
        <div className="flex flex-col">
          <h3 className="text-white font-semibold mb-5 text-xl md:text-2xl">Find Me On</h3>
          <div className="flex gap-6 text-3xl md:text-4xl mt-2">
            <a href="https://github.com/Khushbumandal2060" target="_blank" rel="noopener noreferrer" className="hover:text-cyan-400 transition transform hover:scale-110">
              <FaGithub />
            </a>
            <a href="https://www.linkedin.com/in/khushbu-kumari-mandal-99637b343/" target="_blank" rel="noopener noreferrer" className="hover:text-cyan-400 transition transform hover:scale-110">
              <FaLinkedin />
            </a>
            <a href="https://www.instagram.com/khushbumandal15/" target="_blank" rel="noopener noreferrer" className="hover:text-cyan-400 transition transform hover:scale-110">
              <FaInstagram />
            </a>
          </div>
        </div>

      </div>

      {/* BOTTOM BAR */}
      <div className="border-t border-gray-800 py-5 text-center text-gray-400 text-base md:text-lg">
        &copy; {new Date().getFullYear()} Khushbu Mandal. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;