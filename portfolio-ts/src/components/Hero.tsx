"use client";
import { motion } from "framer-motion";
import Image from "next/image";

export default function Hero() {
  return (
    <section id="about" className="min-h-screen flex flex-col-reverse md:flex-row justify-center items-center bg-gradient-to-r from-gray-800 via-gray-700 to-cyan-700 text-white px-6 md:px-20">
      
      {/* Text */}
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6 }}
        className="md:w-1/2 flex flex-col items-center md:items-start text-center md:text-left"
      >
        <h1 className="text-5xl md:text-6xl font-bold mb-4">Hi, I'm Khushbu</h1>
        <p className="text-lg md:text-xl mb-6 max-w-md">
          I design and build modern, responsive web applications using Next.js, Tailwind CSS, and TypeScript.
        </p>
        <a href="#contact" className="bg-cyan-600 hover:bg-cyan-500 transition px-6 py-3 rounded-full shadow-lg">
          Hire Me
        </a>
      </motion.div>

      {/* Image */}
      <motion.div
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6 }}
        className="md:w-1/2 flex justify-center mb-10 md:mb-0"
      >
        <Image
          src="/khushbu.jpg"
          alt="Khushbu Profile"
          width={400}
          height={400}
          className="rounded-full shadow-2xl transition-transform hover:scale-105"
        />
      </motion.div>

    </section>
  );
}