"use client";
import { motion } from "framer-motion";
import { FaTrophy, FaCertificate, FaCode, FaMedal } from "react-icons/fa";

export default function Achievements() {
  const achievements = [
    {
      title: "AI Tumor Detection",
      desc: "Built a deep learning model using TensorFlow & Keras to detect brain tumors from MRI images with high accuracy.",
      icon: FaCode,
      color: "#8b5cf6",
      tag: "AI/ML",
    },
    {
      title: "Full Stack Job Portal",
      desc: "Developed JobNepal — a complete job portal with user registration, job posting, application management, and admin dashboard.",
      icon: FaTrophy,
      color: "#f59e0b",
      tag: "Web App",
    },
    {
      title: "Hackathon Participant",
      desc: "Developed the frontend of a hotel booking website under time pressure using HTML, CSS and JavaScript.",
      icon: FaCertificate,
      color: "#3b82f6",
      tag: "Competition",
    },
    {
      title: "Academic Excellence",
      desc: "Successfully completed SEE and +2 with strong academic performance across all subjects.",
      icon: FaMedal,
      color: "#10b981",
      tag: "Academic",
    },
  ];

  return (
    <section
      id="achievements"
      className="relative py-32 px-6 lg:px-20 overflow-hidden"
    >
      {/* Ambient */}
      <div className="absolute bottom-0 left-1/3 w-[400px] h-[400px] bg-amber-600/3 rounded-full blur-[140px] -z-10" />

      <div className="max-w-6xl mx-auto">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          className="text-center mb-20"
        >
          <p className="section-label mb-3">Milestones</p>
          <h2 className="section-title">
            Key <span className="gradient-text">Achievements</span>
          </h2>
        </motion.div>

        {/* Grid */}
        <div className="grid md:grid-cols-2 gap-5">
          {achievements.map((item, index) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group p-6 rounded-2xl
                  bg-white/2 border border-white/5
                  hover:bg-white/4 hover:border-white/8
                  transition-all duration-500"
              >
                <div className="flex items-start gap-4">
                  {/* Icon */}
                  <div
                    className="w-12 h-12 rounded-xl flex items-center justify-center text-xl shrink-0
                      group-hover:scale-110 transition-all duration-500"
                    style={{
                      backgroundColor: `${item.color}12`,
                      color: item.color,
                    }}
                  >
                    <Icon />
                  </div>

                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2 mb-1.5 flex-wrap">
                      <h3 className="text-base font-bold text-white">
                        {item.title}
                      </h3>
                      <span
                        className="px-2 py-0.5 text-[10px] font-semibold rounded-full border"
                        style={{
                          backgroundColor: `${item.color}10`,
                          color: item.color,
                          borderColor: `${item.color}20`,
                        }}
                      >
                        {item.tag}
                      </span>
                    </div>

                    <p className="text-sm text-zinc-500 leading-relaxed group-hover:text-zinc-400 transition-colors duration-500">
                      {item.desc}
                    </p>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}