"use client";
import { motion } from "framer-motion";

const skillCategories = [
    {
        title: "Frontend",
        color: "cyan",
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
        color: "cyan",
        skills: [
            { name: "Node.js", level: 70 },
            { name: "Java", level: 70 },
            { name: "PHP", level: 70 },
            { name: "MySQL", level: 70 },
            { name: "Django", level: 70 },
            { name: "C#", level: 70 },
            { name: "C", level: 70 },
            { name: "Python", level: 70 },
        ],
    },
    {
        title: "AI / ML",
        color: "cyan",
        skills: [
            { name: "Keras", level: 70 },
            { name: "TensorFlow", level: 70 },
        ],
    },
];

export default function Skills() {
    return (
        <section id="skills" className="py-20 bg-gray-900 text-white px-6 md:px-20">
            <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center">
                Skills
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
                {skillCategories.map((category) => (
                    <div
                        key={category.title}
                        className="glass p-6 rounded-2xl hover:scale-105 hover:border-cyan-400 transition"
                    >
                        <h3
                            className={`text-2xl md:text-3xl font-bold mb-6 text-${category.color}-400`}
                        >
                            {category.title}
                        </h3>

                        <div className="space-y-5">
                            {category.skills.map((skill) => (
                                <div key={skill.name}>
                                    <div className="flex justify-between items-center mb-2">
                                        <span className="text-lg md:text-xl font-semibold">
                                            {skill.name}
                                        </span>
                                        <span className="text-sm md:text-base text-gray-300">
                                            {skill.level}%
                                        </span>
                                    </div>
                                    <div className="bg-gray-700 rounded-full h-4 overflow-hidden">
                                        <motion.div
                                            initial={{ width: 0 }}
                                            whileInView={{ width: `${skill.level}%` }}
                                            viewport={{ once: true }}
                                            transition={{ duration: 1.2, ease: "easeInOut" }}
                                            className={`h-4 rounded-full bg-gradient-to-r from-${category.color}-400 via-${category.color}-500 to-${category.color}-600`}
                                        />
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}