"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

const projects = [
  {
    title: "JobNepal",
    desc: "A full-featured job portal for posting and applying to jobs with user and admin panels.",
    tech: ["HTML", "CSS", "JavaScript", "PHP", "MySQL"],
    github: "https://github.com/Khushbumandal2060/Jobnepal",
    live: "https://jobnepal.howto.rocks/",
    image: "/Jobnepal.png",
  },
  {
    title: "TumorDetect",
    desc: "AI-powered brain tumor detection system from MRI images using deep learning.",
    tech: ["Python", "Flask", "TensorFlow/Keras", "NumPy", "Prisma", "PostgreSQL", "UploadThing"],
    github: "https://github.com/Khushbumandal2060/TumorDetect",
    live: "https://tumordetect-6pyo.onrender.com",
    image: "/braintumor.png",
  },
  {
    title: "Authentication System",
    desc: "A secure full-stack authentication system with Email OTP verification, JWT authentication, password reset, active session management, security audit logs, and a modern responsive UI.",
    tech: [
      "React", "Tailwind CSS", "Node.js", "Express.js", "MongoDB", "JWT", "bcrypt.js", "Nodemailer"],
    github: "https://github.com/Khushbumandal2060/Authentication-System",
    live: "https://authentication-system-frontend-1ly2.onrender.com/",
    image: "/authentication.png",
  },
  {
    title: "WeatherApp",
    desc: "Real-time weather application with location-based forecasts and clean UI.",
    tech: ["React", "OpenWeather API", "JavaScript"],
    github: "https://github.com/Khushbumandal2060/Weather-App",
    live: "https://weather-app-blue-six-32.vercel.app/",
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

      <div className="max-w-[1600px] mx-auto">
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
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 items-stretch">
          {projects.map((project, i) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className="group h-full rounded-2xl overflow-hidden
                bg-white/[0.03]
                border border-white/10
                hover:border-violet-500/30
                transition-all duration-500
                flex flex-col"
            >
              {/* Image */}
              <div className="relative h-48 w-full overflow-hidden shrink-0">
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

                <p className="text-zinc-400 text-sm leading-relaxed line-clamp-3 mb-4">
                  {project.desc}
                </p>

                {/* Bottom block: pinned to the bottom of every card, in a row */}
                <div className="mt-auto">
                  {/* Tech Stack */}
                  <div className="flex flex-wrap gap-2 mb-5">
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

                  {/* Buttons */}
                  <div className="grid grid-cols-2 gap-3">
                    {/* GitHub */}
                    <Link
                      href={project.github}
                      target="_blank"
                      className="flex items-center justify-center gap-2 py-2 rounded-lg
                        border border-white/10
                        bg-white/5
                        hover:bg-white/10
                        text-zinc-300
                        transition-all duration-300"
                    >
                      <FaGithub />
                      <span className="text-sm font-medium">Code</span>
                    </Link>

                    {/* Live Demo */}
                    {project.live !== "#" ? (
                      <Link
                        href={project.live}
                        target="_blank"
                        className="flex items-center justify-center gap-2 py-2 rounded-lg
                          bg-violet-600
                          hover:bg-violet-500
                          text-white
                          transition-all duration-300"
                      >
                        <FaExternalLinkAlt size={14} />
                        <span className="text-sm font-medium">Live Demo</span>
                      </Link>
                    ) : (
                      <button
                        disabled
                        className="flex items-center justify-center gap-2 py-2 rounded-lg
                          bg-zinc-800
                          text-zinc-500
                          cursor-not-allowed"
                      >
                        <FaExternalLinkAlt size={14} />
                        <span className="text-sm font-medium">Coming Soon</span>
                      </button>
                    )}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
