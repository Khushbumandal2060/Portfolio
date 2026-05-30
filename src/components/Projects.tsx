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
  },
  {
    title: "TumorDetect",
    desc: "AI-powered brain tumor detection system from MRI images using deep learning.",
    tech: ["Python", "Flask", "TensorFlow"],
    github: "https://github.com/Khushbumandal2060/TumorDetect",
    live: "#",
    image: "/braintumor.png",
  },
  {
    title: "Netflix Clone",
    desc: "Full Stack Netflix Clone with authentication and streaming UI using React and Firebase.",
    tech: ["React", "Tailwind", "Firebase"],
    github: "https://github.com/Khushbumandal2060/Netflix_Clone",
    live: "#",
    image: "/netflix.jpg",
  },
  {
    title: "WeatherApp",
    desc: "Real-time weather application with location-based forecasts and clean UI.",
    tech: ["React", "API", "Firebase"],
    github: "https://github.com/Khushbumandal2060/WeatherApp",
    live: "#",
    image: "/weather.png",
  },
];

export default function Projects() {
  return (
    <section
      id="projects"
      className="relative py-32 px-6 lg:px-20 overflow-hidden"
    >
      {/* Background Glow */}
      <div className="absolute top-1/3 right-0 w-[500px] h-[500px] bg-fuchsia-600/5 rounded-full blur-[140px] -z-10" />

      <div className="max-w-7xl mx-auto">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <p className="section-label mb-3">Portfolio</p>

          <h2 className="section-title">
            Featured <span className="gradient-text">Projects</span>
          </h2>

          <p className="text-zinc-500 text-sm mt-4 max-w-xl mx-auto">
            A selection of projects I've built to solve real problems and learn
            new technologies.
          </p>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {projects.map((project, i) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className="group h-[430px] rounded-2xl overflow-hidden
              bg-white/[0.03]
              border border-white/10
              hover:border-violet-500/30
              transition-all duration-500
              flex flex-col"
            >
              {/* Image */}
              <div className="relative h-48 w-full overflow-hidden">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-[#050505]/80 to-transparent" />
              </div>

              {/* Content */}
              <div className="p-5 flex flex-col flex-1">
                <h3 className="text-lg font-bold text-white mb-2">
                  {project.title}
                </h3>

                <p className="text-zinc-400 text-sm leading-relaxed flex-1 line-clamp-3">
                  {project.desc}
                </p>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2 mt-4">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="text-[11px] px-2 py-1 rounded-full
                      bg-violet-500/10
                      text-violet-300
                      border border-violet-500/20"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Links */}
                <div className="flex gap-4 mt-5">
                  <Link
                    href={project.github}
                    target="_blank"
                    className="text-zinc-400 hover:text-violet-400 transition-colors"
                  >
                    <FaGithub size={18} />
                  </Link>

                  <Link
                    href={project.live}
                    target="_blank"
                    className="text-zinc-400 hover:text-violet-400 transition-colors"
                  >
                    <FaExternalLinkAlt size={16} />
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}