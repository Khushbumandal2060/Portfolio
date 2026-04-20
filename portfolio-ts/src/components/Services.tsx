"use client";
import { motion } from "framer-motion";
import { FaCode, FaServer, FaBrain, FaPaintBrush } from "react-icons/fa";

const services = [
  {
    icon: <FaCode />,
    title: "Frontend Development",
    desc: "Building responsive, modern UI using React, Next.js, and Tailwind CSS.",
  },
  {
    icon: <FaServer />,
    title: "Backend Development",
    desc: "Creating secure backend systems using Node.js, PHP, Django, and databases.",
  },
  {
    icon: <FaBrain />,
    title: "AI / ML Integration",
    desc: "Developing intelligent systems using Python, TensorFlow, and Keras.",
  },
  {
    icon: <FaPaintBrush />,
    title: "UI/UX Design",
    desc: "Designing clean, user-friendly, and visually appealing interfaces.",
  },
];

export default function Services() {
  return (
    <section
      id="services"
      className="py-24 bg-gray-950 text-white px-6 md:px-20"
    >
      {/* Heading */}
      <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
        My <span className="text-cyan-400">Services</span>
      </h2>

      {/* Cards */}
      <div className="grid md:grid-cols-4 gap-8 max-w-7xl mx-auto">
        {services.map((service, index) => (
          <motion.div
            key={service.title}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
            className="glass p-8 rounded-2xl text-center 
                       hover:scale-105 hover:border-cyan-400 
                       transition-all duration-300 group"
          >
            {/* Icon */}
            <div className="text-5xl mb-6 text-cyan-400 group-hover:scale-110 transition">
              {service.icon}
            </div>

            {/* Title */}
            <h3 className="text-2xl font-semibold mb-4">
              {service.title}
            </h3>

            {/* Description */}
            <p className="text-gray-400 text-sm leading-relaxed">
              {service.desc}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}