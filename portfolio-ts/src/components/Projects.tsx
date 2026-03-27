"use client";
import Link from "next/link";

export default function Projects() {
  const projects = [
    {
      title: "JobNepal",
      desc: "A web app where users can apply for jobs and employers can post jobs.",
      tech: "HTML, CSS, JS, PHP, MySQL",
      github: "https://github.com/Khushbumandal2060/Jobnepal",
      live: "#",
    },
    {
      title: "TumorDetect",
      desc: "AI-based system to detect diseases from MRI images.",
      tech: "Python, Flask",
      github: "https://github.com/Khushbumandal2060/TumorDetect",
      live: "#",
    },
    {
      title: "Portfolio Website",
      desc: "Personal portfolio built with Next.js and Tailwind CSS.",
      tech: "Next.js, Tailwind, TypeScript",
      github: "https://github.com/Khushbumandal2060/Portfolio",
      live: "#",
    },
    {
      title: "Metrokaushal",
      desc: "Government Website for trainings in Metropolitian area.",
      tech: "Python, Dgango",
      github: "https://github.com/Khushbumandal2060/MetroKaushal",
      live: "#",
    },
    {
      title: "Weather-App",
      desc: "Weather app with JavaScripts ans react js.",
      tech: "JavaScript, React",
      github: "https://github.com/Khushbumandal2060/Weather-App",
      live: "#",
    },
    {
      title: "NetflixClone",
      desc: "Full Stack app with react js and Firebase.",
      tech: "JavaScript, React",
      github: "https://github.com/Khushbumandal2060/Netflix_Clone",
      live: "#",
    },
  ];

  return (
    <section
      id="projects"
      className="py-24 bg-gray-950 text-white px-6 md:px-20"
    >
      <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 gradient-text">
        My Projects
      </h2>

      <div className="grid md:grid-cols-3 gap-10 max-w-7xl mx-auto">
        {projects.map((project) => (
          <div
            key={project.title}
            className="glass p-6 rounded-2xl overflow-hidden 
                     hover:scale-105 hover:shadow-cyan-500/30 
                     transition-all duration-300 flex flex-col justify-between"
          >
            {/* Title */}
            <h3 className="text-2xl font-semibold mb-3 gradient-text">
              {project.title}
            </h3>

            {/* Description */}
            <p className="text-gray-300 mb-4 leading-relaxed">
              {project.desc}
            </p>

            {/* Tech Stack */}
            <p className="text-sm text-gray-400 mb-6">
              <span className="text-cyan-400 font-medium">Tech:</span> {project.tech}
            </p>

            {/* Buttons */}
            <div className="flex gap-4 mt-auto">
              <Link
                href={project.github}
                className="flex-1 text-center bg-gray-800 px-4 py-2 rounded-lg 
                         hover:bg-gray-700 transition"
              >
                GitHub
              </Link>

              <Link
                href={project.live}
                className="flex-1 text-center bg-cyan-600 px-4 py-2 rounded-lg 
                         hover:bg-cyan-500 transition "
              >
                Live Demo
              </Link>
            </div>
            
          </div>
        ))}
      </div>
    </section>
  );
}