"use client";
import Link from "next/link";
import { motion } from "framer-motion";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

export default function Projects() {
  const projects = [
    {
      title: "JobNepal",
      desc: "A web app where users can apply for jobs and employers can post jobs.",
      tech: ["HTML", "CSS", "JS", "PHP", "MySQL"],
      github: "https://github.com/Khushbumandal2060/Jobnepal",
      live: "#",
      image: "https://source.unsplash.com/600x400/?website,job",
    },
    {
      title: "TumorDetect",
      desc: "AI-based system to detect diseases from MRI images.",
      tech: ["Python", "Flask", "AI"],
      github: "https://github.com/Khushbumandal2060/TumorDetect",
      live: "#",
      image: "https://source.unsplash.com/600x400/?ai,medical",
    },
    {
      title: "Portfolio Website",
      desc: "Personal portfolio built with Next.js and Tailwind CSS.",
      tech: ["Next.js", "Tailwind", "TypeScript"],
      github: "https://github.com/Khushbumandal2060/Portfolio",
      live: "#",
      image: "https://source.unsplash.com/600x400/?portfolio,web",
    },
    {
      title: "Metrokaushal",
      desc: "Government Website for trainings in metropolitan area.",
      tech: ["Python", "Django"],
      github: "https://github.com/Khushbumandal2060/MetroKaushal",
      live: "#",
      image: "https://source.unsplash.com/600x400/?government,website",
    },
    {
      title: "Weather App",
      desc: "Weather app with JavaScript and React.",
      tech: ["JavaScript", "React"],
      github: "https://github.com/Khushbumandal2060/Weather-App",
      live: "#",
      image: "https://source.unsplash.com/600x400/?weather,app",
    },
    {
      title: "Netflix Clone",
      desc: "Full stack app with React and Firebase.",
      tech: ["React", "Firebase"],
      github: "https://github.com/Khushbumandal2060/Netflix_Clone",
      live: "#",
      image: "https://source.unsplash.com/600x400/?netflix,app",
    },
  ];

  return (
    <section className="py-24 bg-gradient-to-b from-gray-950 to-black text-white px-6 md:px-20">
      
      {/* Heading */}
      <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
        My <span className="text-cyan-400">Projects</span>
      </h2>

      {/* Grid */}
      <div className="grid md:grid-cols-3 gap-10 max-w-7xl mx-auto">

        {projects.map((project, index) => (
          <motion.div
            key={project.title}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            className="group relative rounded-2xl overflow-hidden bg-gray-900/60 backdrop-blur-lg border border-gray-800 hover:border-cyan-400 transition duration-300 shadow-xl"
          >
            
            {/* Image */}
            <div className="overflow-hidden">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-52 object-cover group-hover:scale-110 transition duration-500"
              />
            </div>

            {/* Content */}
            <div className="p-6 flex flex-col">
              
              <h3 className="text-2xl font-semibold mb-2">
                {project.title}
              </h3>

              <p className="text-gray-300 text-sm mb-4">
                {project.desc}
              </p>

              {/* Tech badges */}
              <div className="flex flex-wrap gap-2 mb-5">
                {project.tech.map((t) => (
                  <span
                    key={t}
                    className="text-xs bg-cyan-500/10 text-cyan-400 px-3 py-1 rounded-full border border-cyan-500/20"
                  >
                    {t}
                  </span>
                ))}
              </div>

              {/* Buttons */}
              <div className="flex gap-3 mt-auto">
                <Link
                  href={project.github}
                  target="_blank"
                  className="flex items-center justify-center gap-2 flex-1 bg-gray-800 py-2 rounded-lg hover:bg-gray-700 transition"
                >
                  <FaGithub /> Code
                </Link>

                <Link
                  href={project.live}
                  target="_blank"
                  className="flex items-center justify-center gap-2 flex-1 bg-cyan-600 py-2 rounded-lg hover:bg-cyan-500 transition"
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