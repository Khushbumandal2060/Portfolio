"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";

export default function Hero() {
  const text = "Web Developer";

  return (
    <section
      id="about"
      className="min-h-screen flex flex-col-reverse md:flex-row justify-center items-center bg-gray-900 text-white px-6 md:px-20"
    >
      {/* LEFT TEXT */}
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6 }}
        className="md:w-1/2 flex flex-col items-center md:items-start text-center md:text-left space-y-5"
      >
        {/* Intro */}
        <p className="text-xl md:text-2xl lg:text-3xl text-cyan-300 font-medium">
          Hey, I'm
        </p>

        {/* Name */}
        <h1 className="text-5xl md:text-7xl font-bold gradient-text">
          Khushbu Mandal
        </h1>

        {/* Role */}
        <div className="overflow-hidden">
          <motion.h2
            className="text-3xl md:text-4xl lg:text-5xl font-semibold"
            initial={{ clipPath: "inset(0 100% 0 0)" }}
            animate={{
              clipPath: [
                "inset(0 100% 0 0)",
                "inset(0 0% 0 0)",
                "inset(0 100% 0 0)",
              ],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
            }}
          >
            <span className="text-cyan-400">{text}</span>
          </motion.h2>
        </div>

        {/* Description */}
        <p className="text-lg md:text-xl lg:text-2xl text-gray-300 max-w-lg leading-relaxed">
          I design and build{" "}
          <span className="text-cyan-400 font-semibold">modern</span>, responsive
          web applications using{" "}
          <span className="text-gray-200 font-medium">Next.js</span>,{" "}
          <span className="text-gray-200 font-medium">Tailwind CSS</span>, and{" "}
          <span className="text-gray-200 font-medium">TypeScript</span>.
        </p>

        {/* BUTTONS */}
        <div className="flex flex-col sm:flex-row gap-4 mt-4">
          <button
            onClick={() =>
              document.getElementById("contact")?.scrollIntoView({
                behavior: "smooth",
              })
            }
            className="px-8 py-4 rounded-full text-lg font-medium 
            bg-gradient-to-r from-cyan-500 to-blue-500 
            hover:from-cyan-400 hover:to-blue-400 
            transition shadow-lg hover:shadow-cyan-500/30"
          >
            Hire Me
          </button>

          <div className="flex gap-4">
            <a
              href="/Khushbu Mandal(CV).pdf"
              target="_blank"
              className="px-6 py-3 rounded-full border border-gray-600 
              text-gray-300 hover:text-white hover:border-cyan-400 
              transition"
            >
              View CV
            </a>

            <a
              href="/Khushbu Mandal(CV).pdf"
              download
              className="px-6 py-3 rounded-full bg-gray-800 
              hover:bg-gray-700 transition text-gray-200"
            >
              Download
            </a>
          </div>
        </div>

        {/* SOCIAL */}
        <div className="mt-6">
          <h3 className="text-gray-300 font-semibold mb-4 text-xl">
            Find me on
          </h3>

          <div className="flex gap-6 text-3xl">
            <Link
              href="https://github.com/Khushbumandal2060"
              target="_blank"
              className="text-gray-400 hover:text-cyan-400 transition transform hover:scale-110"
            >
              <FaGithub />
            </Link>

            <Link
              href="https://www.linkedin.com/in/khushbu-kumari-mandal-99637b343/"
              target="_blank"
              className="text-gray-400 hover:text-cyan-400 transition transform hover:scale-110"
            >
              <FaLinkedin />
            </Link>

            <Link
              href="https://www.instagram.com/khushbumandal15/"
              target="_blank"
              className="text-gray-400 hover:text-cyan-400 transition transform hover:scale-110"
            >
              <FaInstagram />
            </Link>
          </div>
        </div>
      </motion.div>

      {/* RIGHT IMAGE */}
      <motion.div
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6 }}
        className="md:w-1/2 flex justify-center mb-12 md:mb-0"
      >
        <Image
          src="/khushbu.jpg"
          alt="Khushbu Profile"
          width={900}
          height={900}
          className="rounded-full shadow-2xl object-cover 
          w-72 h-72 md:w-96 md:h-96 lg:w-[28rem] lg:h-[28rem] 
          border-4 border-cyan-500/20 
          hover:scale-105 transition"
        />
      </motion.div>
    </section>
  );
}