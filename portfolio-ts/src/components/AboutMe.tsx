"use client";
import { motion } from "framer-motion";
import Image from "next/image";

export default function AboutMe() {
  return (
    <section
      id="about"
      className="py-24 bg-gray-900 text-white px-6 md:px-20"
    >
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-12">
        

        {/* LEFT SIDE - IMAGE */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="md:w-1/2 flex justify-center"
        >
          <Image
            src="/khushbu1.jpg"
            alt="Khushbu Mandal"
            width={450}
            height={350}
            className="rounded-2xl shadow-2xl object-cover hover:scale-105 transition"
          />
        </motion.div>

        {/* RIGHT SIDE - TEXT */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="md:w-1/2 text-center md:text-left"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            About <span className="text-cyan-400">Me</span>
          </h2>
          <p className="text-cyan-400 mb-4">BCA Student | Web Developer</p>

          <p className="text-gray-400 mb-4 leading-relaxed">
            Hello! I'm <span className="text-white font-semibold">Khushbu Mandal</span>, 
            a passionate <span className="text-cyan-400">Web Developer</span> from Nepal 🇳🇵.
            I am currently pursuing BCA and love building modern, responsive, 
            and user-friendly web applications.
          </p>

          <p className="text-gray-400 mb-6 leading-relaxed">
            I work with technologies like <span className="text-white">Next.js, React, Tailwind CSS, PHP, and MySQL</span>. 
            My goal is to become a full-stack developer and create impactful digital solutions.
          </p>

          {/* SKILLS TAGS */}
          <div className="flex flex-wrap gap-3 justify-center md:justify-start mb-6">
            {["Next.js", "React", "Tailwind", "PHP", "MySQL"].map((skill) => (
              <span
                key={skill}
                className="px-4 py-2 bg-gray-800 text-sm rounded-full border border-gray-700 hover:border-cyan-400 transition"
              >
                {skill}
              </span>
            ))}
          </div>

          {/* BUTTON */}
          <a
            href="#contact"
            className="inline-block px-8 py-3 bg-cyan-600 hover:bg-cyan-500 transition rounded-full font-medium shadow-lg"
          >
            Contact Me
          </a>
        </motion.div>

      </div>
    </section>
  );
}