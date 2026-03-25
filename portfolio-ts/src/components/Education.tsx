"use client";
import { motion } from "framer-motion";
import { FaSchool, FaUniversity, FaGraduationCap } from "react-icons/fa";

export default function Education() {
    const educationData = [
        {
            level: "Secondary School",
            institution: "Jaycees Secondary Boarding School",
            duration: "2007 - 2020",
            description: "Completed SEE with excellent grades.",
            icon: <FaSchool className="text-cyan-400 w-6 h-6 md:w-8 md:h-8" />,
        },
        {
            level: "Higher Secondary School",
            institution: "Whitehouse International College",
            duration: "2020 - 2022",
            description: "Completed 12th grade focusing on Management.",
            icon: <FaGraduationCap className="text-cyan-400 w-6 h-6 md:w-8 md:h-8" />,
        },
        {
            level: "BCA",
            institution: "Padma Kanya Multiple Campus",
            duration: "2022 - Present",
            description: "Pursuing BCA, specializing in Web Development and Software Engineering.",
            icon: <FaUniversity className="text-cyan-400 w-6 h-6 md:w-8 md:h-8" />,
        },
    ];

    return (
        <section id="education" className="py-20 bg-gray-800 text-white px-6 md:px-20">
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">Education</h2>

            <div className="flex flex-col relative gap-12 before:absolute before:top-0 before:left-10 before:h-full before:w-1 before:bg-cyan-600 before:rounded">
                {educationData.map((edu, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6, delay: index * 0.3 }}
                        className="flex items-start gap-6 md:gap-8 relative"
                    >
                        {/* Icon */}
                        <div className="flex-shrink-0 mt-1 md:mt-2">{edu.icon}</div>

                        {/* Content */}
                        <div className="bg-gray-700 rounded-xl p-6 shadow-lg hover:shadow-2xl transition w-full">
                            <h3 className="text-xl md:text-2xl font-semibold mb-2 text-cyan-400">{edu.level}</h3>
                            <p className="text-lg md:text-xl font-bold mb-1">{edu.institution}</p>
                            <p className="text-gray-300 mb-2">{edu.duration}</p>
                            <p className="text-gray-300">{edu.description}</p>
                        </div>
                    </motion.div>
                ))}
            </div>
        </section>
    );
}