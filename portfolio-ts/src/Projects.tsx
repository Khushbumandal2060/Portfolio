"use client";

const projects = [
  { title: "Job Portal", desc: "Full-stack job portal", link: "#", img: "/jobportal.png" },
  { title: "MRI Detection", desc: "AI Brain MRI detection", link: "#", img: "/mri.png" },
  { title: "Portfolio Website", desc: "My personal portfolio", link: "#", img: "/portfolio.png" },
  { title: "Netflix Clone", desc: "Full-Stack Netflix Clone", link: "#", img: "/netflix.png" },
  { title: "Metrokaushal", desc: "Full-Stack Skill Training in Metro", link: "#", img: "/metrokaushal.png" },
];

export default function Projects() {
  return (
    <section id="projects" className="py-16 bg-gray-100 px-4">
      <h2 className="text-4xl font-bold text-center mb-12 text-gray-800">Projects</h2>
      <div className="max-w-7xl mx-auto grid gap-8 md:grid-cols-3">
        {projects.map((p, i) => (
          <a
            key={i}
            href={p.link}
            className="bg-white/80 backdrop-blur-md rounded-xl shadow-lg overflow-hidden hover:scale-105 transition-transform"
          >
            <img src={p.img} alt={p.title} className="w-full h-48 object-cover" />
            <div className="p-4">
              <h3 className="text-xl font-semibold text-gray-800">{p.title}</h3>
              <p className="text-gray-600 mt-2">{p.desc}</p>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
}