"use client";
import { useState, useEffect } from "react";
import { FiMenu, FiX } from "react-icons/fi";

interface NavbarProps {
  sections: {
    [key: string]: React.RefObject<HTMLElement>;
  };
}

const Navbar: React.FC<NavbarProps> = ({ sections }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [active, setActive] = useState("about");

  // Scroll effect + active section
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);

      Object.keys(sections).forEach((key) => {
        const section = sections[key]?.current;
        if (section) {
          const rect = section.getBoundingClientRect();
          if (rect.top <= 100 && rect.bottom >= 100) {
            setActive(key);
          }
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [sections]);

  const navLinks = [
    { label: "About", ref: "about" },
    { label: "Skills", ref: "skills" },
    { label: "Projects", ref: "projects" },
    { label: "Education", ref: "education" },
    { label: "Achievements", ref: "achievements" },
    { label: "Contact", ref: "contact" },
  ];

  const handleScrollTo = (ref: string) => {
    sections[ref]?.current?.scrollIntoView({ behavior: "smooth" });
    setIsMobileMenuOpen(false);
  };

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-gray-900/80 backdrop-blur-xl shadow-lg py-4"
          : "bg-transparent py-6"
      }`}
    >
      <div className="w-full px-6 md:px-12 flex items-center justify-between">
        
        {/* Logo */}
        <h1
          onClick={() => handleScrollTo("about")}
          className="text-3xl md:text-4xl font-bold text-white cursor-pointer tracking-wide"
        >
          Khushbu<span className="text-cyan-400"></span>
        </h1>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-10">
          {navLinks.map((link) => (
            <button
              key={link.ref}
              onClick={() => handleScrollTo(link.ref)}
              className={`relative text-lg font-medium transition ${
                active === link.ref
                  ? "text-cyan-400"
                  : "text-white hover:text-cyan-400"
              }`}
            >
              {link.label}

              {/* Active underline */}
              <span
                className={`absolute left-0 -bottom-1 h-[2px] bg-cyan-400 transition-all duration-300 ${
                  active === link.ref ? "w-full" : "w-0"
                }`}
              ></span>
            </button>
          ))}
        </div>

        {/* Mobile Button */}
        <div className="md:hidden">
          <button
            className="text-white text-3xl"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <FiX /> : <FiMenu />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="fixed top-0 right-0 w-2/3 h-full bg-gray-900/95 backdrop-blur-xl p-8 flex flex-col gap-8 md:hidden shadow-2xl">
          
          {/* Close Button */}
          <button
            className="self-end text-3xl text-white mb-6"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            <FiX />
          </button>

          {navLinks.map((link) => (
            <button
              key={link.ref}
              onClick={() => handleScrollTo(link.ref)}
              className={`text-2xl font-medium transition ${
                active === link.ref
                  ? "text-cyan-400"
                  : "text-white hover:text-cyan-400"
              }`}
            >
              {link.label}
            </button>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navbar;