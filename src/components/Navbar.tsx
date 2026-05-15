"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiMenu, FiX } from "react-icons/fi";

interface NavbarProps {
  sections: {
    [key: string]: React.RefObject<HTMLElement | null>;
  };
}

const Navbar: React.FC<NavbarProps> = ({ sections }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [active, setActive] = useState("hero");

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
      Object.keys(sections).forEach((key) => {
        const section = sections[key]?.current;
        if (section) {
          const rect = section.getBoundingClientRect();
          if (rect.top <= 120 && rect.bottom >= 120) {
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
    { label: "Services", ref: "services" },
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
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className={`fixed w-full z-50 transition-all duration-700 ${
          isScrolled
            ? "py-3 bg-[#050505]/70 backdrop-blur-2xl border-b border-white/4"
            : "py-5 bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-8 flex items-center justify-between">
          {/* Logo */}
          <button
            onClick={() => handleScrollTo("hero")}
            className="relative group"
          >
            <span className="text-xl font-black tracking-tighter">
              <span className="text-white group-hover:text-violet-400 transition-colors duration-500">
                Khushbu
              </span>
              <span className="text-violet-500">.</span>
            </span>
          </button>

          {/* Desktop Links */}
          <div className="hidden md:flex items-center gap-1 bg-white/3 rounded-full px-1.5 py-1.5 border border-white/4">
            {navLinks.map((link) => (
              <button
                key={link.ref}
                onClick={() => handleScrollTo(link.ref)}
                className={`relative px-4 py-1.5 text-[13px] font-medium rounded-full transition-all duration-400 ${
                  active === link.ref
                    ? "text-white"
                    : "text-zinc-500 hover:text-zinc-300"
                }`}
              >
                {active === link.ref && (
                  <motion.span
                    layoutId="navPill"
                    className="absolute inset-0 rounded-full bg-violet-600/20 border border-violet-500/20"
                    transition={{ type: "spring", stiffness: 400, damping: 30 }}
                  />
                )}
                <span className="relative z-10">{link.label}</span>
              </button>
            ))}
          </div>

          {/* CTA */}
          <button
            onClick={() => handleScrollTo("contact")}
            className="hidden md:block px-5 py-2 text-[13px] font-semibold rounded-full
              bg-violet-600 hover:bg-violet-500 text-white
              transition-all duration-300 hover:shadow-lg hover:shadow-violet-600/25"
          >
            Let&apos;s Talk
          </button>

          {/* Mobile Button */}
          <button
            className="md:hidden text-white text-xl p-2 rounded-xl hover:bg-white/5 transition"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <FiX /> : <FiMenu />}
          </button>
        </div>
      </motion.nav>

      {/* Mobile Menu — rendered outside nav to avoid inheriting scroll-dependent transparency */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-[60] bg-black/60 backdrop-blur-sm md:hidden"
              onClick={() => setIsMobileMenuOpen(false)}
            />
            <motion.div
              initial={{ opacity: 0, x: "100%" }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: "100%" }}
              transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
              className="fixed top-0 right-0 z-[70] w-[280px] h-full bg-[#0a0a0a] p-6 flex flex-col md:hidden border-l border-white/[0.06]"
            >
              <button
                className="self-end text-xl text-zinc-500 hover:text-white p-2 mb-8"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                <FiX />
              </button>

              <div className="space-y-1">
                {navLinks.map((link, i) => (
                  <motion.button
                    key={link.ref}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.05 + i * 0.04 }}
                    onClick={() => handleScrollTo(link.ref)}
                    className={`w-full text-left text-base font-medium px-4 py-3 rounded-xl transition-all duration-300 ${
                      active === link.ref
                        ? "text-violet-400 bg-violet-500/10"
                        : "text-zinc-400 hover:text-white hover:bg-white/3"
                    }`}
                  >
                    {link.label}
                  </motion.button>
                ))}
              </div>

              <div className="mt-auto">
                <button
                  onClick={() => handleScrollTo("contact")}
                  className="w-full py-3 rounded-xl text-sm font-semibold bg-violet-600 hover:bg-violet-500 transition"
                >
                  Let&apos;s Talk
                </button>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;