"use client";
import Link from "next/link";
import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";
import { FiArrowUp, FiHeart } from "react-icons/fi";

interface FooterProps {
  sections: { [key: string]: React.RefObject<HTMLElement | null> };
}

const Footer: React.FC<FooterProps> = ({ sections }) => {
  const quickLinks = [
    { label: "About", ref: "about" },
    { label: "Services", ref: "services" },
    { label: "Skills", ref: "skills" },
    { label: "Projects", ref: "projects" },
    { label: "Education", ref: "education" },
    { label: "Contact", ref: "contact" },
  ];

  const scrollToSection = (ref: string) => {
    sections[ref]?.current?.scrollIntoView({ behavior: "smooth" });
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative border-t border-white/4">
      {/* Back to top button */}
      <div className="absolute -top-5 left-1/2 -translate-x-1/2 z-10">
        <button
          onClick={scrollToTop}
          className="w-10 h-10 rounded-full bg-[#0a0a0a] border border-white/8
            hover:border-violet-500/25 hover:bg-white/3
            flex items-center justify-center text-zinc-600 hover:text-violet-400
            transition-all duration-300 hover:-translate-y-0.5
            shadow-xl shadow-black/50"
        >
          <FiArrowUp className="text-sm" />
        </button>
      </div>

      <div className="max-w-6xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 mb-12">
          {/* BRAND — spans 4 cols */}
          <div className="md:col-span-4">
            <button
              className="text-xl font-black tracking-tighter group mb-4 block"
              onClick={() => scrollToSection("hero")}
            >
              <span className="text-white group-hover:text-violet-400 transition-colors duration-500">
                Khushbu
              </span>
              <span className="text-violet-500">.</span>
            </button>
            <p className="text-zinc-600 text-sm leading-relaxed max-w-xs">
              Building modern, responsive web applications with clean code,
              thoughtful design, and attention to every detail.
            </p>
          </div>

          {/* NAVIGATION — spans 3 cols */}
          <div className="md:col-span-3">
            <h3 className="text-[11px] uppercase tracking-[0.2em] text-zinc-600 font-semibold mb-5">
              Navigation
            </h3>
            <ul className="space-y-2.5">
              {quickLinks.map((link) => (
                <li key={link.ref}>
                  <button
                    onClick={() => scrollToSection(link.ref)}
                    className="text-sm text-zinc-500 hover:text-violet-400 transition-colors duration-300"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* CONTACT — spans 3 cols */}
          <div className="md:col-span-3">
            <h3 className="text-[11px] uppercase tracking-[0.2em] text-zinc-600 font-semibold mb-5">
              Get in Touch
            </h3>
            <div className="space-y-3">
              <a
                href="mailto:khusbumandal2060@email.com"
                className="block text-sm text-zinc-500 hover:text-violet-400 transition-colors duration-300"
              >
                khusbumandal2060@email.com
              </a>
              <p className="text-sm text-zinc-600">Nepal 🇳🇵</p>
            </div>
          </div>

          {/* SOCIAL — spans 2 cols */}
          <div className="md:col-span-2">
            <h3 className="text-[11px] uppercase tracking-[0.2em] text-zinc-600 font-semibold mb-5">
              Socials
            </h3>
            <div className="flex gap-2">
              {[
                { icon: FaGithub, href: "https://github.com/Khushbumandal2060" },
                { icon: FaLinkedin, href: "https://www.linkedin.com/in/khushbu-kumari-mandal/" },
                { icon: FaInstagram, href: "https://www.instagram.com/khushbumandal15/" },
              ].map(({ icon: Icon, href }) => (
                <Link
                  key={href}
                  href={href}
                  target="_blank"
                  className="w-9 h-9 rounded-lg bg-white/3 border border-white/5
                    flex items-center justify-center text-zinc-600 text-sm
                    hover:text-violet-400 hover:border-violet-500/20 hover:bg-white/6
                    transition-all duration-300"
                >
                  <Icon />
                </Link>
              ))}
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="h-px bg-white/4 mb-6" />

        {/* Bottom bar */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-3 text-xs text-zinc-700">
          <p>&copy; {new Date().getFullYear()} Khushbu Mandal. All rights reserved.</p>
          <p className="flex items-center gap-1">
            Crafted with <FiHeart className="text-violet-500 text-[10px]" /> using Next.js
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;