"use client";
import { motion } from "framer-motion";
import { FaCode, FaServer, FaBrain, FaPaintBrush } from "react-icons/fa";
import { FiArrowUpRight } from "react-icons/fi";

const services = [
  {
    icon: FaCode,
    title: "Frontend Development",
    desc: "Building responsive, pixel-perfect interfaces using React, Next.js, and Tailwind CSS with smooth animations.",
    color: "#8b5cf6",
    gradient: "from-violet-500/20 to-violet-600/5",
  },
  {
    icon: FaServer,
    title: "Backend Development",
    desc: "Creating secure, scalable backend systems using Node.js, PHP, Django, and SQL/NoSQL databases.",
    color: "#3b82f6",
    gradient: "from-blue-500/20 to-blue-600/5",
  },
  {
    icon: FaBrain,
    title: "AI / ML Integration",
    desc: "Developing intelligent systems and models using Python, TensorFlow, and Keras for real-world applications.",
    color: "#10b981",
    gradient: "from-emerald-500/20 to-emerald-600/5",
  },
  {
    icon: FaPaintBrush,
    title: "UI/UX Design",
    desc: "Designing clean, intuitive, and visually stunning interfaces that users love to interact with.",
    color: "#ec4899",
    gradient: "from-pink-500/20 to-pink-600/5",
  },
];

export default function Services() {
  return (
    <section
      id="services"
      className="relative py-32 px-6 lg:px-20 overflow-hidden"
    >
      {/* Ambient */}
      <div className="absolute bottom-0 left-1/4 w-[400px] h-[400px] bg-violet-600/3 rounded-full blur-[130px] -z-10" />

      <div className="max-w-6xl mx-auto">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          className="text-center mb-20"
        >
          <p className="section-label mb-3">What I Do</p>
          <h2 className="section-title">
            Services I <span className="gradient-text">Offer</span>
          </h2>
        </motion.div>

        {/* Cards */}
        <div className="grid md:grid-cols-2 gap-5">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group relative p-7 rounded-2xl
                  bg-white/2 border border-white/5
                  hover:bg-white/4 hover:border-white/8
                  transition-all duration-500 cursor-default"
              >
                {/* Hover gradient */}
                <div
                  className={`absolute inset-0 rounded-2xl bg-linear-to-br ${service.gradient}
                    opacity-0 group-hover:opacity-100 transition-opacity duration-700 -z-10`}
                />

                <div className="flex items-start justify-between mb-5">
                  {/* Icon */}
                  <div
                    className="w-12 h-12 rounded-xl flex items-center justify-center text-xl
                      transition-all duration-500 group-hover:scale-110 group-hover:shadow-lg"
                    style={{
                      backgroundColor: `${service.color}15`,
                      color: service.color,
                    }}
                  >
                    <Icon />
                  </div>

                  {/* Arrow */}
                  <FiArrowUpRight
                    className="text-zinc-700 group-hover:text-zinc-400 text-lg
                      transition-all duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                  />
                </div>

                {/* Title */}
                <h3 className="text-lg font-bold text-white mb-2">
                  {service.title}
                </h3>

                {/* Description */}
                <p className="text-zinc-500 text-sm leading-relaxed group-hover:text-zinc-400 transition-colors duration-500">
                  {service.desc}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}