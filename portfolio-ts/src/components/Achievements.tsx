"use client";
import { motion } from "framer-motion";
import { FaTrophy, FaCertificate, FaCode, FaMedal } from "react-icons/fa";

export default function Achievements() {
    const achievements = [
        {
            title: "AI Tumor Detection Project",
            desc: "Built a deep learning model using TensorFlow & Keras to detect brain tumors from MRI images.",
            icon: <FaCode />,
        },
        {
            title: "Full Stack Job Portal",
            desc: "Developed JobNepal using PHP, MySQL, and JavaScript with user and admin functionalities.",
            icon: <FaTrophy />,
        },
        {
            title: "Web Development Skills",
            desc: "Learned and built projects using React, Next.js, Tailwind CSS, and modern tools.",
            icon: <FaCertificate />,
        },
        {
            title: "Academic Achievement",
            desc: "Successfully completed SEE and +2 with good academic performance.",
            icon: <FaMedal />,
        },
    ];

    return (
        <section
            id="achievements" // <-- make sure this matches exactly
            className="py-24 bg-gradient-to-b from-black to-gray-900 text-white px-6 md:px-20"
        >

            {/* Heading */}
            <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
                My <span className="text-cyan-400">Achievements</span>
            </h2>

            {/* Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-6xl mx-auto">
                {achievements.map((item, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: index * 0.2 }}
                        className="group relative p-6 rounded-2xl bg-gray-900/60 backdrop-blur-lg border border-gray-800 hover:border-cyan-400 transition duration-300 shadow-lg hover:shadow-cyan-500/20"
                    >
                        {/* Icon */}
                        <div className="text-cyan-400 text-3xl mb-4 group-hover:scale-110 transition">
                            {item.icon}
                        </div>

                        {/* Title */}
                        <h3 className="text-xl md:text-2xl font-bold mb-2">
                            {item.title}
                        </h3>

                        {/* Description */}
                        <p className="text-gray-300 text-sm leading-relaxed">
                            {item.desc}
                        </p>
                    </motion.div>
                ))}
            </div>
        </section>
    );
}