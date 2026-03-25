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
      {/* Left Text Section */}
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6 }}
        className="md:w-1/2 flex flex-col items-center md:items-start text-center md:text-left space-y-4"
      >
        <p className="text-xl md:text-2xl lg:text-3xl text-cyan-400 font-medium">
          Hey, I'm
        </p>

        <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold">
          Khushbu Mandal
        </h1>

        {/* Cylon Effect */}
        <div className="overflow-hidden mt-2">
          <motion.h2
            className="text-3xl md:text-4xl lg:text-5xl font-semibold relative inline-block text-white"
            initial={{ clipPath: "inset(0 100% 0 0)" }}
            animate={{ clipPath: ["inset(0 100% 0 0)", "inset(0 0% 0 0)", "inset(0 100% 0 0)"] }}
            transition={{
              duration: 3,
              repeat: Infinity,
              repeatType: "loop",
            }}
          >
            <span className="bg-gradient-to-r from-cyan-500 via-cyan-300 to-cyan-500 bg-clip-text text-transparent">
              {text}
            </span>
          </motion.h2>
        </div>

        <p className="text-lg md:text-xl lg:text-2xl text-gray-300 max-w-lg mt-4">
          I design and build modern, responsive web applications using Next.js, Tailwind CSS, and TypeScript.
        </p>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row items-center gap-4 mt-6">
          <a
            href="#contact"
            className="bg-cyan-600 hover:bg-cyan-500 transition px-8 py-4 rounded-full shadow-lg text-lg md:text-xl lg:text-2xl"
          >
            Hire Me
          </a>
          <a
            href="/Khushbu_Mandal_CV.pdf"
            download
            className="bg-gray-700 hover:bg-gray-600 transition px-8 py-4 rounded-full shadow-lg text-lg md:text-xl lg:text-2xl"
          >
            Download CV
          </a>
        </div>

        {/* Social Links */}
        <div className="mt-8 flex gap-6 text-3xl md:text-4xl">
          <Link href="https://github.com/Khushbumandal2060" className="hover:text-cyan-400 transition">
            <FaGithub />
          </Link>
          <Link href="https://linkedin.com/in/khushbumandal" className="hover:text-cyan-400 transition">
            <FaLinkedin />
          </Link>
          <Link href="https://instagram.com/in/khushbumandal15" className="hover:text-cyan-400 transition">
            <FaInstagram />
          </Link>
        </div>
      </motion.div>

      {/* Right Image Section */}
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
          className="rounded-full shadow-2xl object-cover w-72 h-72 md:w-96 md:h-96 lg:w-[28rem] lg:h-[28rem] transition-transform hover:scale-105"
        />
      </motion.div>
    </section>
  );
}
