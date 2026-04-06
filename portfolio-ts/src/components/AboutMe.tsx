"use client";
import { forwardRef } from "react";
import { motion } from "framer-motion";
import Image from "next/image";

const AboutMe = forwardRef<HTMLElement>((props, ref) => {
  return (
    <section
      ref={ref}
      id="about"
      className="py-24 bg-gradient-to-b from-gray-900 to-gray-950 text-white px-6 md:px-20"
    >
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">

        {/* IMAGE SECTION */}
        <motion.div
          initial={{ opacity: 0, x: -60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          className="relative flex justify-center"
        >
          {/* Glow effect */}
          <div className="absolute w-72 h-72 bg-cyan-500/20 blur-3xl rounded-full"></div>

          <Image
            src="/khushbu1.jpg"
            alt="Khushbu Mandal"
            width={420}
            height={420}
            className="relative rounded-3xl shadow-2xl object-cover border border-gray-800 hover:scale-105 transition duration-300"
          />
        </motion.div>

        {/* TEXT SECTION */}
        <motion.div
          initial={{ opacity: 0, x: 60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            About <span className="text-cyan-400">Me</span>
          </h2>

          <p className="text-cyan-400 mb-4 font-medium">
            BCA Student • Web Developer
          </p>

          <p className="text-gray-400 mb-4 leading-relaxed">
            Hello! I'm <span className="text-white font-semibold">Khushbu Mandal</span>, 
            a passionate <span className="text-cyan-400">Web Developer</span> from Nepal 🇳🇵.
            I love building modern, responsive, and user-friendly web applications.
          </p>

          <p className="text-gray-400 mb-6 leading-relaxed">
            I work with technologies like <span className="text-white">Next.js, React, Tailwind CSS, PHP, and MySQL</span>.
            My goal is to become a full-stack developer and create impactful digital solutions.
          </p>

          {/* SKILLS */}
          <div className="flex flex-wrap gap-3 mb-8">
            {["Next.js", "React", "Tailwind", "PHP", "MySQL"].map((skill) => (
              <span
                key={skill}
                className="px-4 py-2 bg-gray-800 text-sm rounded-full border border-gray-700 hover:border-cyan-400 hover:text-cyan-400 transition"
              >
                {skill}
              </span>
            ))}
          </div>

          {/* STATS */}
          <div className="grid grid-cols-3 gap-6 mb-8 text-center">
            <div>
              <h3 className="text-2xl font-bold text-cyan-400">5+</h3>
              <p className="text-gray-400 text-sm">Projects</p>
            </div>
            <div>
              <h3 className="text-2xl font-bold text-cyan-400">1+</h3>
              <p className="text-gray-400 text-sm">Years Learning</p>
            </div>
            <div>
              <h3 className="text-2xl font-bold text-cyan-400">100%</h3>
              <p className="text-gray-400 text-sm">Dedication</p>
            </div>
          </div>

          {/* BUTTONS */}
          <div className="flex gap-4">
            <a
              href="#contact"
              className="px-8 py-3 bg-cyan-600 hover:bg-cyan-500 transition rounded-full font-medium shadow-lg"
            >
              Contact Me
            </a>

            <a
              href="/cv.pdf"
              className="px-8 py-3 border border-gray-700 hover:border-cyan-400 hover:text-cyan-400 transition rounded-full"
            >
              Download CV
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
});

AboutMe.displayName = "AboutMe";

export default AboutMe;