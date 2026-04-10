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
            icon: <FaSchool />,
        },
        {
            level: "Higher Secondary",
            institution: "Whitehouse International College",
            duration: "2020 - 2022",
            description: "Completed +2 in Management with Computer Science.",
            icon: <FaGraduationCap />,
        },
        {
            level: "BCA",
            institution: "Padma Kanya Multiple Campus",
            duration: "2022 - Present",
            description: "Studying Web Development & Software Engineering.",
            icon: <FaUniversity />,
        },
    ];

    return (
        <section
            id="education" // <-- make sure this matches exactly
            className="py-24 bg-gradient-to-b from-gray-900 to-black text-white px-6 md:px-20"
        >

            {/* Heading */}
            <h2 className="text-4xl md:text-5xl font-bold text-center mb-20">
                My <span className="text-cyan-400">Education</span>
            </h2>

            <div className="relative max-w-5xl mx-auto">

                {/* Timeline Line */}
                <div className="absolute left-1/2 transform -translate-x-1/2 w-1 bg-cyan-500/30 h-full rounded"></div>

                {/* Timeline Items */}
                {educationData.map((edu, index) => {
                    const isLeft = index % 2 === 0;

                    return (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, x: isLeft ? -80 : 80 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.6, delay: index * 0.2 }}
                            className={`mb-16 flex flex-col md:flex-row items-center ${isLeft ? "md:justify-start" : "md:justify-end"
                                }`}
                        >

                            {/* Card */}
                            <div className={`w-full md:w-1/2 ${isLeft ? "md:pr-10" : "md:pl-10"}`}>
                                <div className="bg-gray-900/60 backdrop-blur-lg border border-gray-800 rounded-2xl p-6 shadow-lg hover:shadow-cyan-500/20 hover:border-cyan-400 transition duration-300">

                                    <h3 className="text-xl md:text-2xl font-bold text-cyan-400 mb-2">
                                        {edu.level}
                                    </h3>

                                    <p className="text-lg font-semibold">{edu.institution}</p>

                                    <p className="text-sm text-gray-400 mb-3">{edu.duration}</p>

                                    <p className="text-gray-300 text-sm leading-relaxed">
                                        {edu.description}
                                    </p>

                                </div>
                            </div>

                            {/* Center Icon */}
                            <div className="absolute left-1/2 transform -translate-x-1/2 flex items-center justify-center">
                                <div className="w-12 h-12 rounded-full bg-gray-900 border-2 border-cyan-400 flex items-center justify-center text-cyan-400 text-xl shadow-lg shadow-cyan-500/30">
                                    {edu.icon}
                                </div>
                            </div>

                        </motion.div>
                    );
                })}
            </div>
        </section>
    );
}