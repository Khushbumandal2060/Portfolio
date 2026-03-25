"use client";
import { motion } from "framer-motion";

const skills = [
  { name: "Next.js", level: 90 },
  { name: "React.js", level: 85 },
  { name: "TypeScript", level: 80 },
  { name: "Tailwind CSS", level: 90 },
  { name: "Node.js", level: 70 },
];

export default function Skills() {
  return (
    <section id="skills" className="py-20 bg-gray-900 text-white px-6 md:px-20">
      <h2 className="text-3xl font-bold mb-10 text-center">Skills</h2>
      <div className="max-w-4xl mx-auto space-y-6">
        {skills.map((skill) => (
          <div key={skill.name}>
            <div className="flex justify-between mb-1">
              <span>{skill.name}</span>
              <span>{skill.level}%</span>
            </div>
            <div className="bg-gray-800 rounded-full h-4">
              <motion.div
                initial={{ width: 0 }}
                whileInView={{ width: `${skill.level}%` }}
                transition={{ duration: 1.2 }}
                className="h-4 bg-cyan-600 rounded-full"
              />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}