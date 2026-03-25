"use client";
import Image from "next/image";

const projects = [
  { title: "Project 1", description: "Portfolio Website", image: "/project1.jpg", link: "#" },
  { title: "Project 2", description: "E-commerce App", image: "/project2.jpg", link: "#" },
  { title: "Project 3", description: "Blog Platform", image: "/project3.jpg", link: "#" },
];

export default function Projects() {
  return (
    <section id="projects" className="py-20 bg-gray-800 text-white px-6 md:px-20">
      <h2 className="text-3xl font-bold mb-10 text-center">Projects</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
        {projects.map((project) => (
          <a href={project.link} key={project.title} className="bg-gray-900 rounded-lg overflow-hidden shadow-lg transform hover:scale-105 transition">
            <Image src={project.image} width={400} height={250} alt={project.title} className="object-cover w-full h-48"/>
            <div className="p-4">
              <h3 className="text-xl font-bold mb-2">{project.title}</h3>
              <p className="text-gray-300">{project.description}</p>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
}