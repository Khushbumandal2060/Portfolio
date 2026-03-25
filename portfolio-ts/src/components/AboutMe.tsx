"use client";
import { motion } from "framer-motion";
import Image from "next/image";

export default function AboutMe() {
    return (
        <section
            id="about"
            className="py-20 bg-gray-900 text-white px-6 md:px-20"
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
                        src="/khushbu.jpg" // put your image in public folder
                        alt="About Me"
                        width={350}
                        height={350}
                        className="rounded-2xl shadow-2xl object-cover"
                    />
                </motion.div>

                {/* RIGHT SIDE - TEXT */}
                <motion.div
                    initial={{ opacity: 0, x: 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6 }}
                    className="md:w-1/2 text-center md:text-left"
                >
                    <h2 className="text-4xl font-bold mb-6">
                        About <span className="text-cyan-400">Me</span>
                    </h2>

                    <p className="text-gray-400 mb-4 leading-relaxed">
                        Hello! I'm <span className="text-white font-semibold">Khushbu Mandal</span>,
                        a passionate web developer from Nepal. I specialize in building
                        modern, responsive, and user-friendly web applications.
                    </p>

                    <p className="text-gray-400 mb-6 leading-relaxed">
                        I enjoy working with technologies like Next.js, React, Tailwind CSS,
                        and TypeScript. My goal is to create clean, efficient, and visually
                        appealing digital experiences.
                    </p>

                    {/* BUTTON */}
                    <a
                        href="#contact"
                        className="inline-block px-6 py-3 bg-cyan-600 hover:bg-cyan-500 transition rounded-full font-medium shadow-lg"
                    >
                        Contact Me
                    </a>
                </motion.div>

            </div>
        </section>
    );
}