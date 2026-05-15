"use client";
import { motion } from "framer-motion";
import { FaSchool, FaUniversity, FaGraduationCap } from "react-icons/fa";

export default function Education() {
  const educationData = [
    {
      level: "Secondary School",
      institution: "Jaycees Secondary Boarding School",
      duration: "2007 – 2020",
      description: "Completed SEE with excellent grades and strong academic foundation.",
      icon: FaSchool,
      color: "#8b5cf6",
    },
    {
      level: "Higher Secondary (+2)",
      institution: "Whitehouse International College",
      duration: "2020 – 2022",
      description: "Completed +2 in Management with Computer Science specialization.",
      icon: FaGraduationCap,
      color: "#3b82f6",
    },
    {
      level: "Bachelor (BCA)",
      institution: "Padma Kanya Multiple Campus",
      duration: "2022 – Present",
      description: "Currently studying Web Development, Software Engineering, and AI/ML.",
      icon: FaUniversity,
      color: "#10b981",
      current: true,
    },
  ];

  return (
    <section
      id="education"
      className="relative py-32 px-6 lg:px-20 overflow-hidden"
    >
      {/* Ambient */}
      <div className="absolute top-1/2 right-0 w-[400px] h-[400px] bg-blue-600/3 rounded-full blur-[140px] -z-10" />

      <div className="max-w-4xl mx-auto">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          className="text-center mb-20"
        >
          <p className="section-label mb-3">Journey</p>
          <h2 className="section-title">
            My <span className="gradient-text">Education</span>
          </h2>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-[23px] md:left-1/2 md:-translate-x-px top-0 bottom-0 w-px">
            <div className="h-full bg-linear-to-b from-violet-500/30 via-blue-500/20 to-emerald-500/10" />
          </div>

          <div className="space-y-10">
            {educationData.map((edu, index) => {
              const isLeft = index % 2 === 0;
              const Icon = edu.icon;

              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 25 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.5, delay: index * 0.12 }}
                  className="relative flex items-start"
                >
                  {/* Timeline dot */}
                  <div className="absolute left-[15px] md:left-1/2 md:-translate-x-1/2 z-10 mt-6">
                    <div
                      className="w-[18px] h-[18px] rounded-full border-[3px] bg-[#050505]"
                      style={{
                        borderColor: edu.color,
                        boxShadow: `0 0 15px ${edu.color}40`,
                      }}
                    />
                  </div>

                  {/* Card - positioned left or right */}
                  <div
                    className={`ml-14 md:ml-0 w-full md:w-[calc(50%-2.5rem)] ${
                      isLeft ? "md:mr-auto" : "md:ml-auto"
                    }`}
                  >
                    <div className="group p-5 rounded-2xl
                      bg-white/2 border border-white/5
                      hover:bg-white/4 hover:border-white/8
                      transition-all duration-500"
                    >
                      <div className="flex items-start gap-3 mb-3">
                        <div
                          className="w-10 h-10 rounded-xl flex items-center justify-center text-base shrink-0
                            group-hover:scale-110 transition-transform duration-500"
                          style={{
                            backgroundColor: `${edu.color}15`,
                            color: edu.color,
                          }}
                        >
                          <Icon />
                        </div>
                        <div className="flex-1 min-w-0">
                          <div className="flex items-center gap-2 flex-wrap">
                            <h3 className="text-base font-bold text-white">
                              {edu.level}
                            </h3>
                            {edu.current && (
                              <span className="px-2 py-0.5 text-[10px] font-semibold rounded-full
                                bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                                Current
                              </span>
                            )}
                          </div>
                          <p className="text-xs text-zinc-600 font-mono mt-0.5">
                            {edu.duration}
                          </p>
                        </div>
                      </div>

                      <p className="text-sm font-semibold text-zinc-300 mb-1">
                        {edu.institution}
                      </p>
                      <p className="text-sm text-zinc-500 leading-relaxed">
                        {edu.description}
                      </p>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}