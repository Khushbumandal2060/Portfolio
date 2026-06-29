"use client";
import { forwardRef } from "react";
import { motion } from "framer-motion";
import Image from "next/image";

const AboutMe = forwardRef<HTMLElement>((props, ref) => {
  const stats = [
    { value: "5+", label: "Projects Built" },
    { value: "1+", label: "Years Learning" },
    { value: "100%", label: "Dedication" },
  ];

  const techStack = [
    "Next.js",
    "React",
    "TypeScript",
    "Tailwind CSS",
    "PHP",
    "Python",
    "Node.js",
    "MySQL",
  ];

  return (
    <section
      ref={ref}
      id="about"
      className="relative py-32 px-6 lg:px-20 overflow-hidden"
    >
      {/* Ambient */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-violet-600/4 rounded-full blur-[150px] -z-10" />

      <div className="max-w-6xl mx-auto">
        {/* Section label */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          className="text-center mb-20"
        >
          <p className="section-label mb-3">About Me</p>
          <h2 className="section-title">
            Get to know <span className="gradient-text">who I am</span>
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* IMAGE */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7 }}
            className="flex justify-center"
          >
            <div className="relative group">
              {/* Glow */}
              <div className="absolute -inset-6 bg-linear-to-br from-violet-600/15 to-fuchsia-600/10 blur-3xl rounded-3xl
                opacity-0 group-hover:opacity-100 transition-opacity duration-1000" />

              <Image
                src="/khushbu1.jpg"
                alt="Khushbu Mandal"
                width={440}
                height={440}
                className="relative rounded-2xl object-cover
                  border border-white/6
                  shadow-2xl shadow-black/40
                  group-hover:border-violet-500/20
                  transition-all duration-700"
              />

              {/* Experience badge */}
              <motion.div
                animate={{ y: [0, -5, 0] }}
                transition={{ duration: 4, repeat: Infinity }}
                className="absolute -right-4 -bottom-4 px-4 py-2.5 rounded-xl
                  bg-[#0a0a0a] border border-white/8 shadow-xl"
              >
                <p className="text-2xl font-bold gradient-text">1+</p>
                <p className="text-[10px] text-zinc-500 uppercase tracking-wider">Years</p>
              </motion.div>
            </div>
          </motion.div>

          {/* TEXT */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7 }}
            className="space-y-6"
          >
            <div>
              <h3 className="text-2xl md:text-3xl font-bold text-white mb-4 leading-snug">
                A passionate developer crafting{" "}
                <span className="text-violet-400">digital experiences</span>
              </h3>

              <p className="text-zinc-400 leading-relaxed mb-3">
                Hello! I&apos;m{" "}
                <span className="text-white font-semibold">Khushbu Mandal</span>, a
                web developer from Nepal 🇳🇵. I specialize in building modern,
                responsive, and user-friendly web applications that solve
                real-world problems.
              </p>

              <p className="text-zinc-500 leading-relaxed">
                My goal is to become a full-stack developer and create impactful
                digital solutions using cutting-edge technologies.
              </p>
            </div>

            {/* Tech tags */}
            <div className="flex flex-wrap gap-2">
              {techStack.map((skill) => (
                <span
                  key={skill}
                  className="px-3 py-1.5 text-xs font-medium rounded-full
                    bg-white/3 border border-white/6
                    text-zinc-400 hover:text-violet-400 hover:border-violet-500/25
                    transition-all duration-300 cursor-default"
                >
                  {skill}
                </span>
              ))}
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-4 pt-2">
              {stats.map((stat) => (
                <div
                  key={stat.label}
                  className="text-center p-4 rounded-xl bg-white/2 border border-white/4"
                >
                  <h4 className="text-xl font-bold gradient-text">{stat.value}</h4>
                  <p className="text-zinc-600 text-[11px] mt-1 font-medium uppercase tracking-wider">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>

            {/* Buttons */}
            <div className="flex gap-3 pt-2">
              <a
                href="#contact"
                className="px-7 py-3 bg-violet-600 hover:bg-violet-500
                  transition-all duration-300 rounded-full text-sm font-semibold
                  shadow-lg shadow-violet-600/15 hover:shadow-violet-500/25
                  hover:-translate-y-0.5 text-white"
              >
                Contact Me
              </a>
              <a
                href="/khushbu_resume.pdf"
                download
                className="px-7 py-3 rounded-full text-sm font-medium
                  bg-white/4 border border-white/8
                  text-zinc-400 hover:text-white hover:border-white/12
                  transition-all duration-300"
              >
                Download CV
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
});

AboutMe.displayName = "AboutMe";
export default AboutMe;
