"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

const projects = [
  {
    title: "JobNepal",
    desc: "Job portal for posting and applying jobs.",
    tech: ["HTML", "CSS", "JS", "PHP", "MySQL"],
    github: "https://github.com/Khushbumandal2060/Jobnepal",
    live: "#",
    image: "/jobnepal.png",
  },
  {
    title: "TumorDetect",
    desc: "AI system for brain tumor detection from MRI images.",
    tech: ["Python", "Flask", "AI"],
    github: "https://github.com/Khushbumandal2060/TumorDetect",
    live: "#",
    image: "/braintumor.png",
  },
  {
    title: "Portfolio",
    desc: "Personal portfolio website built with Next.js.",
    tech: ["Next.js", "Tailwind", "Nodemailer"],
    github: "https://github.com/Khushbumandal2060/Portfolio",
    live: "#",
    image: "/portfolio.png",
  },
  {
    title: "Netflix_Clone",
    desc: "Full Stack Netflix Clone using React JS and Firebase.",
    tech: ["React JS", "Tailwind CSS", "Firebase"],
    github: "https://github.com/Khushbumandal2060/Netflix_Clone",
    live: "#",
    image: "/netflix.jpg",
  },
  {
    title: "WeatherApp",
    desc: "Weather application built with React JS and Firebase.",
    tech: ["React JS", "Firebase"],
    github: "https://github.com/Khushbumandal2060/WeatherApp",
    live: "#",
    image: "/weather.png",
  },
  {
    title: "MetroKaushal",
    desc: "Government training platform web system.",
    tech: ["Django", "Python"],
    github: "https://github.com/Khushbumandal2060/MetroKaushal",
    live: "#",
    image: "/metro.png",
  },
];

export default function Projects() {
  return (
    <section className="py-24 bg-gray-950 text-white px-6 md:px-20">
      <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
        My <span className="text-cyan-400">Projects</span>
      </h2>

      <div className="grid md:grid-cols-3 gap-10 max-w-7xl mx-auto">
        {projects.map((project, i) => (
          <motion.div
            key={project.title}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1 }}
            className="group h-full flex flex-col bg-gray-900 border border-gray-800 rounded-3xl overflow-hidden
                       hover:border-cyan-400 hover:shadow-xl hover:shadow-cyan-500/10 transition-all duration-300"
          >
            {/* IMAGE */}
            <div className="relative w-full h-56 overflow-hidden">
              <Image
                src={project.image}
                alt={project.title}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-110"
              />
              {/* subtle overlay for premium feel */}
              <div className="absolute inset-0 bg-black/10 group-hover:bg-black/0 transition" />
            </div>

            {/* CONTENT */}
            <div className="p-6 flex flex-col flex-1">
              <h3 className="text-xl font-bold mb-2">{project.title}</h3>

              <p className="text-gray-400 text-sm mb-4 flex-1 leading-relaxed">
                {project.desc}
              </p>

              <div className="flex flex-wrap gap-2 mb-5">
                {project.tech.map((t) => (
                  <span
                    key={t}
                    className="text-xs px-3 py-1 bg-cyan-500/10 text-cyan-300 rounded-full"
                  >
                    {t}
                  </span>
                ))}
              </div>

              <div className="flex gap-3 mt-auto">
                <Link
                  href={project.github}
                  className="flex-1 flex items-center justify-center gap-2 bg-gray-800 hover:bg-gray-700 py-2 rounded-xl transition"
                >
                  <FaGithub /> Code
                </Link>

                <Link
                  href={project.live}
                  className="flex-1 flex items-center justify-center gap-2 bg-cyan-600 hover:bg-cyan-500 py-2 rounded-xl transition"
                >
                  <FaExternalLinkAlt /> Live
                </Link>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}