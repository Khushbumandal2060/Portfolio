"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

const projects = [
  {
    title: "JobNepal",
    desc: "A full-featured job portal for posting and applying to jobs with user and admin panels.",
    tech: ["HTML", "CSS", "JS", "PHP", "MySQL"],
    github: "https://github.com/Khushbumandal2060/Jobnepal",
    live: "#",
    image: "/Jobnepal.png",
    featured: true,
  },
  {
    title: "TumorDetect",
    desc: "AI-powered brain tumor detection system from MRI images using deep learning.",
    tech: ["Python", "Flask", "TensorFlow"],
    github: "https://github.com/Khushbumandal2060/TumorDetect",
    live: "#",
    image: "/braintumor.png",
    featured: true,
  },
  {
    title: "Portfolio",
    desc: "Personal portfolio website built with Next.js and modern web technologies.",
    tech: ["Next.js", "Tailwind", "Resend"],
    github: "https://github.com/Khushbumandal2060/Portfolio",
    live: "#",
    image: "/portfolio.png",
    featured: false,
  },
  {
    title: "Netflix Clone",
    desc: "Full Stack Netflix Clone with authentication and streaming UI using React and Firebase.",
    tech: ["React", "Tailwind", "Firebase"],
    github: "https://github.com/Khushbumandal2060/Netflix_Clone",
    live: "#",
    image: "/netflix.jpg",
    featured: false,
  },
  {
    title: "WeatherApp",
    desc: "Real-time weather application with location-based forecasts and clean UI.",
    tech: ["React", "API", "Firebase"],
    github: "https://github.com/Khushbumandal2060/WeatherApp",
    live: "#",
    image: "/weather.png",
    featured: false,
  },
  {
    title: "MetroKaushal",
    desc: "Government training platform web system for skill development programs.",
    tech: ["Django", "Python", "SQLite"],
    github: "https://github.com/Khushbumandal2060/MetroKaushal",
    live: "#",
    image: "/metro.png",
    featured: false,
  },
];

export default function Projects() {
  return (
    <section
      id="projects"
      className="relative py-32 px-6 lg:px-20 overflow-hidden"
    >
      {/* Ambient */}
      <div className="absolute top-1/3 right-0 w-[500px] h-[500px] bg-fuchsia-600/3 rounded-full blur-[140px] -z-10" />

      <div className="max-w-7xl mx-auto">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          className="text-center mb-20"
        >
          <p className="section-label mb-3">Portfolio</p>
          <h2 className="section-title">
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <p className="text-zinc-500 text-sm mt-4 max-w-md mx-auto">
            A selection of projects I&apos;ve built to solve real problems and learn new technologies.
          </p>
        </motion.div>

        {/* Featured projects — large cards */}
        <div className="grid md:grid-cols-2 gap-5 mb-5">
          {projects.filter((p) => p.featured).map((project, i) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: i * 0.1 }}
              className="group relative rounded-2xl overflow-hidden
                bg-white/2 border border-white/5
                hover:border-white/8
                transition-all duration-500"
            >
              {/* IMAGE */}
              <div className="relative w-full h-56 overflow-hidden">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-linear-to-t from-[#050505] via-[#050505]/40 to-transparent" />

                {/* Overlay actions */}
                <div className="absolute bottom-4 left-4 right-4 flex gap-2">
                  <Link
                    href={project.github}
                    target="_blank"
                    className="flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium
                      bg-white/10 backdrop-blur-md rounded-lg border border-white/10
                      text-white hover:bg-white/20 transition-all duration-300"
                  >
                    <FaGithub /> Code
                  </Link>
                  <Link
                    href={project.live}
                    className="flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium
                      bg-violet-600/80 backdrop-blur-md rounded-lg
                      text-white hover:bg-violet-500/80 transition-all duration-300"
                  >
                    <FaExternalLinkAlt className="text-[10px]" /> Live
                  </Link>
                </div>
              </div>

              {/* CONTENT */}
              <div className="p-5">
                <h3 className="text-lg font-bold text-white mb-1.5">
                  {project.title}
                </h3>
                <p className="text-zinc-500 text-sm leading-relaxed mb-4">
                  {project.desc}
                </p>
                <div className="flex flex-wrap gap-1.5">
                  {project.tech.map((t) => (
                    <span
                      key={t}
                      className="text-[11px] px-2.5 py-1 rounded-full font-medium
                        bg-violet-500/8 text-violet-300 border border-violet-500/10"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Other projects — smaller cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
          {projects.filter((p) => !p.featured).map((project, i) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: i * 0.08 }}
              className="group p-5 rounded-2xl
                bg-white/2 border border-white/5
                hover:bg-white/4 hover:border-white/8
                transition-all duration-500 flex flex-col"
            >
              {/* Thumbnail */}
              <div className="relative w-full h-32 rounded-xl overflow-hidden mb-4">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-linear-to-t from-[#050505]/60 to-transparent" />
              </div>

              <h3 className="text-sm font-bold text-white mb-1">
                {project.title}
              </h3>
              <p className="text-zinc-600 text-xs leading-relaxed mb-3 flex-1">
                {project.desc}
              </p>

              <div className="flex gap-2 mt-auto">
                <Link
                  href={project.github}
                  target="_blank"
                  className="text-zinc-600 hover:text-violet-400 text-sm transition-colors"
                >
                  <FaGithub />
                </Link>
                <Link
                  href={project.live}
                  className="text-zinc-600 hover:text-violet-400 text-[11px] transition-colors"
                >
                  <FaExternalLinkAlt />
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
