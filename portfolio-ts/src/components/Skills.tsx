"use client";
import { forwardRef } from "react";
import { motion } from "framer-motion";
import { FaCode, FaServer, FaBrain } from "react-icons/fa";

const skillCategories = [
  {
    title: "Frontend",
    icon: <FaCode />,
    gradient: "from-cyan-400 to-blue-500",
    skills: [
      { name: "Next.js", level: 90 },
      { name: "React.js", level: 85 },
      { name: "TypeScript", level: 80 },
      { name: "Tailwind CSS", level: 90 },
      { name: "JavaScript", level: 70 },
    ],
  },
  {
    title: "Backend",
    icon: <FaServer />,
    gradient: "from-purple-400 to-pink-500",
    skills: [
      { name: "Node.js", level: 70 },
      { name: "Java", level: 70 },
      { name: "PHP", level: 70 },
      { name: "MySQL", level: 70 },
      { name: "Django", level: 70 },
      { name: "C#", level: 70 },
      { name: "Python", level: 70 },
    ],
  },
  {
    title: "AI / ML",
    icon: <FaBrain />,
    gradient: "from-green-400 to-emerald-500",
    skills: [
      { name: "Keras", level: 70 },
      { name: "TensorFlow", level: 70 },
    ],
  },
];

const Skills = forwardRef<HTMLElement>((props, ref) => {
  return (
    <section ref={ref} id="skills" className="py-24 bg-gradient-to-b from-gray-900 to-gray-950 text-white px-6 md:px-20">
      
      {/* Heading */}
      <h2 className="text-4xl md:text-5xl font-bold mb-16 text-center">
        My <span className="text-cyan-400">Skills</span>
      </h2>

      {/* Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10 max-w-6xl mx-auto">
        {skillCategories.map((category, index) => (
          <motion.div
            key={category.title}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            className="relative p-6 rounded-2xl bg-gray-900/60 backdrop-blur-lg border border-gray-800 hover:border-cyan-400 transition duration-300 shadow-xl hover:shadow-cyan-500/10"
          >
            {/* ICON + TITLE */}
            <div className="flex items-center gap-3 mb-6">
              <div className="text-2xl text-cyan-400">{category.icon}</div>
              <h3 className="text-2xl font-bold">{category.title}</h3>
            </div>

            {/* Skills */}
            <div className="space-y-5">
              {category.skills.map((skill) => (
                <div key={skill.name}>
                  <div className="flex justify-between mb-2">
                    <span className="text-sm font-medium">{skill.name}</span>
                    <span className="text-sm text-gray-400">{skill.level}%</span>
                  </div>
                  <div className="w-full h-3 bg-gray-800 rounded-full overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${skill.level}%` }}
                      transition={{ duration: 1 }}
                      className={`h-3 rounded-full bg-gradient-to-r ${category.gradient}`}
                    />
                  </div>
                </div>
              ))}
            </div>

          </motion.div>
        ))}
      </div>
    </section>
  );
});

Skills.displayName = "Skills";

export default Skills;