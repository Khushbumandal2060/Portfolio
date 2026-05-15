"use client";
import { forwardRef } from "react";
import { motion } from "framer-motion";
import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaNodeJs,
  FaPython,
  FaPhp,
  FaJava,
  FaDatabase,
} from "react-icons/fa";
import {
  SiNextdotjs,
  SiTypescript,
  SiTailwindcss,
  SiDjango,
  SiTensorflow,
  SiKeras,
  SiSharp,
} from "react-icons/si";

const skillCategories = [
  {
    title: "Frontend",
    description: "Building beautiful, responsive interfaces",
    color: "#8b5cf6",
    skills: [
      { name: "HTML5", icon: FaHtml5, color: "#e34f26", level: 90 },
      { name: "CSS3", icon: FaCss3Alt, color: "#1572b6", level: 90 },
      { name: "JavaScript", icon: FaJs, color: "#f7df1e", level: 85 },
      { name: "TypeScript", icon: SiTypescript, color: "#3178c6", level: 80 },
      { name: "React", icon: FaReact, color: "#61dafb", level: 85 },
      { name: "Next.js", icon: SiNextdotjs, color: "#ffffff", level: 90 },
      { name: "Tailwind", icon: SiTailwindcss, color: "#06b6d4", level: 90 },
    ],
  },
  {
    title: "Backend",
    description: "Server-side logic & database management",
    color: "#3b82f6",
    skills: [
      { name: "Node.js", icon: FaNodeJs, color: "#339933", level: 75 },
      { name: "Python", icon: FaPython, color: "#3776ab", level: 85 },
      { name: "PHP", icon: FaPhp, color: "#777bb4", level: 70 },
      { name: "Django", icon: SiDjango, color: "#092e20", level: 75 },
      { name: "MySQL", icon: FaDatabase, color: "#4479a1", level: 80 },
      { name: "C#", icon: SiSharp, color: "#239120", level: 70 },
      { name: "Java", icon: FaJava, color: "#ed8b00", level: 75 },
    ],
  },
  {
    title: "AI / ML",
    description: "Intelligent systems & deep learning",
    color: "#10b981",
    skills: [
      { name: "TensorFlow", icon: SiTensorflow, color: "#ff6f00", level: 75 },
      { name: "Keras", icon: SiKeras, color: "#d00000", level: 70 },
    ],
  },
];

const SkillCard = ({
  skill,
  index,
}: {
  skill: (typeof skillCategories)[0]["skills"][0];
  index: number;
}) => {
  const Icon = skill.icon;
  const circumference = 2 * Math.PI * 18; // radius = 18
  const offset = circumference - (skill.level / 100) * circumference;

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay: index * 0.05 }}
      className="group relative flex flex-col items-center gap-3 p-4 rounded-2xl
        bg-white/2 border border-white/5
        hover:bg-white/5 hover:border-white/10
        transition-all duration-500 hover:-translate-y-1 cursor-default"
    >
      {/* Circular progress ring with icon */}
      <div className="relative w-16 h-16 flex items-center justify-center">
        {/* Background ring */}
        <svg className="absolute inset-0 w-full h-full -rotate-90">
          <circle
            cx="32"
            cy="32"
            r="18"
            fill="none"
            stroke="rgba(255,255,255,0.04)"
            strokeWidth="2.5"
          />
          <motion.circle
            cx="32"
            cy="32"
            r="18"
            fill="none"
            stroke={skill.color}
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeDasharray={circumference}
            initial={{ strokeDashoffset: circumference }}
            whileInView={{ strokeDashoffset: offset }}
            viewport={{ once: true }}
            transition={{ duration: 1.2, delay: 0.3 + index * 0.05, ease: [0.22, 1, 0.36, 1] }}
            style={{ filter: `drop-shadow(0 0 6px ${skill.color}40)` }}
          />
        </svg>

        {/* Icon */}
        <Icon
          className="text-2xl transition-transform duration-500 group-hover:scale-110"
          style={{ color: skill.color }}
        />
      </div>

      {/* Name */}
      <p className="text-xs font-semibold text-zinc-300 group-hover:text-white transition-colors duration-300">
        {skill.name}
      </p>

      {/* Level indicator */}
      <span className="text-[10px] font-mono text-zinc-600 group-hover:text-zinc-500 transition-colors">
        {skill.level}%
      </span>
    </motion.div>
  );
};

const Skills = forwardRef<HTMLElement>((props, ref) => {
  return (
    <section
      ref={ref}
      id="skills"
      className="relative py-32 px-6 lg:px-20 overflow-hidden"
    >
      {/* Ambient */}
      <div className="absolute top-1/3 left-0 w-[400px] h-[400px] bg-indigo-600/3 rounded-full blur-[140px] -z-10" />
      <div className="absolute bottom-1/4 right-0 w-[300px] h-[300px] bg-violet-600/3 rounded-full blur-[120px] -z-10" />

      <div className="max-w-6xl mx-auto">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          className="text-center mb-20"
        >
          <p className="section-label mb-3">Expertise</p>
          <h2 className="section-title">
            Technical <span className="gradient-text">Skills</span>
          </h2>
          <p className="text-zinc-500 text-sm mt-4 max-w-lg mx-auto">
            Technologies and tools I use to bring ideas to life. Always learning
            and expanding my toolkit.
          </p>
        </motion.div>

        {/* Categories */}
        <div className="space-y-12">
          {skillCategories.map((category, catIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: catIndex * 0.1 }}
            >
              {/* Category header */}
              <div className="flex items-center gap-4 mb-6">
                <div
                  className="w-1 h-8 rounded-full"
                  style={{ backgroundColor: category.color }}
                />
                <div>
                  <h3 className="text-lg font-bold text-white">
                    {category.title}
                  </h3>
                  <p className="text-xs text-zinc-600">{category.description}</p>
                </div>
                <div className="flex-1 h-px bg-white/4 ml-4" />
                <span className="text-xs font-mono text-zinc-700">
                  {category.skills.length} skills
                </span>
              </div>

              {/* Skill cards grid */}
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-7 gap-3">
                {category.skills.map((skill, skillIndex) => (
                  <SkillCard
                    key={skill.name}
                    skill={skill}
                    index={skillIndex}
                  />
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
});

Skills.displayName = "Skills";
export default Skills;