"use client";
import { motion, useMotionValue, useTransform, useSpring } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";
import { FiDownload, FiArrowDown } from "react-icons/fi";

export default function Hero() {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springX = useSpring(mouseX, { stiffness: 50, damping: 20 });
  const springY = useSpring(mouseY, { stiffness: 50, damping: 20 });

  const blobX = useTransform(springX, [0, 1], [-15, 15]);
  const blobY = useTransform(springY, [0, 1], [-15, 15]);

  const handleMouseMove = (e: React.MouseEvent) => {
    const rect = e.currentTarget.getBoundingClientRect();
    mouseX.set((e.clientX - rect.left) / rect.width);
    mouseY.set((e.clientY - rect.top) / rect.height);
  };

  return (
    <section
      id="hero"
      onMouseMove={handleMouseMove}
      className="relative min-h-screen flex flex-col-reverse lg:flex-row justify-center items-center px-6 lg:px-20 overflow-hidden"
    >
      {/* Animated background blobs */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <motion.div
          style={{ x: blobX, y: blobY }}
          className="absolute top-[15%] left-[15%] w-[600px] h-[600px] bg-violet-600/[0.07] rounded-full blur-[130px] animate-blob"
        />
        <motion.div
          style={{ x: blobX, y: blobY }}
          className="absolute bottom-[15%] right-[20%] w-[500px] h-[500px] bg-fuchsia-600/5 rounded-full blur-[120px] animate-blob animation-delay-2000"
        />
        <div className="absolute top-[50%] left-[50%] -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-indigo-600/3 rounded-full blur-[150px] animate-blob animation-delay-4000" />
      </div>

      {/* Subtle grid */}
      <div
        className="absolute inset-0 -z-10 opacity-[0.02]"
        style={{
          backgroundImage: `radial-gradient(circle, rgba(255,255,255,0.4) 1px, transparent 1px)`,
          backgroundSize: "40px 40px",
        }}
      />

      {/* LEFT TEXT */}
      <div className="lg:w-1/2 flex flex-col items-center lg:items-start text-center lg:text-left space-y-7 max-w-xl">
        {/* Status badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full
            bg-emerald-500/8 border border-emerald-500/15
            text-[13px] text-emerald-400 font-medium"
        >
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
            <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
          </span>
          Available for work
        </motion.div>

        {/* Name */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.4 }}
        >
          <p className="text-zinc-500 text-base mb-3 font-medium">Hey, I&apos;m</p>
          <h1 className="text-[3.5rem] md:text-[4.5rem] lg:text-[5.5rem] font-black tracking-[-0.04em] leading-[0.85]">
            <span className="text-white">Khushbu</span>
            <br />
            <span className="gradient-text">Mandal</span>
          </h1>
        </motion.div>

        {/* Animated role */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.7 }}
          className="h-8 overflow-hidden"
        >
          <motion.div
            animate={{ y: [0, -32, -64, 0] }}
            transition={{
              duration: 6,
              repeat: Infinity,
              ease: "easeInOut",
              times: [0, 0.33, 0.66, 1],
            }}
          >
            {["Web Developer", "UI Designer", "Problem Solver"].map((role) => (
              <div key={role} className="h-8 flex items-center">
                <span className="text-lg font-semibold text-violet-400">
                  {role}
                </span>
              </div>
            ))}
          </motion.div>
        </motion.div>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="text-zinc-500 text-base leading-relaxed max-w-md"
        >
          I craft <span className="text-zinc-300 font-medium">beautiful, performant</span>{" "}
          web experiences using modern technologies. Passionate about turning ideas
          into elegant digital solutions.
        </motion.p>

        {/* BUTTONS */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          className="flex flex-wrap gap-3"
        >
          <button
            onClick={() =>
              document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })
            }
            className="group px-7 py-3 rounded-full text-sm font-semibold
              bg-violet-600 text-white
              hover:bg-violet-500 hover:shadow-xl hover:shadow-violet-600/20
              transition-all duration-400 hover:-translate-y-0.5 active:translate-y-0"
          >
            Hire Me
            <span className="inline-block ml-1 transition-transform duration-300 group-hover:translate-x-0.5">
              →
            </span>
          </button>

          <a
            href="/khushbu_resume.pdf"
            download
            className="flex items-center gap-2 px-6 py-3 rounded-full text-sm font-medium
              bg-white/4 border border-white/8 text-zinc-300
              hover:bg-white/[0.07] hover:border-white/12 hover:text-white
              transition-all duration-300"
          >
            <FiDownload className="text-base" />
            Resume
          </a>
        </motion.div>

        {/* SOCIAL */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="flex items-center gap-5 pt-4"
        >
          <div className="h-px w-12 bg-zinc-800" />
          {[
            { icon: FaGithub, href: "https://github.com/Khushbumandal2060" },
            { icon: FaLinkedin, href: "https://www.linkedin.com/in/khushbu-kumari-mandal-99637b343/" },
            { icon: FaInstagram, href: "https://www.instagram.com/khushbumandal15/" },
          ].map(({ icon: Icon, href }) => (
            <Link
              key={href}
              href={href}
              target="_blank"
              className="text-zinc-600 hover:text-violet-400 text-lg
                transition-all duration-300 hover:-translate-y-1"
            >
              <Icon />
            </Link>
          ))}
        </motion.div>
      </div>

      {/* RIGHT IMAGE */}
      <motion.div
        initial={{ opacity: 0, scale: 0.85 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.9, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
        className="lg:w-1/2 flex justify-center mb-16 lg:mb-0"
      >
        <div className="relative group">
          {/* Outer glow ring */}
          <div className="absolute -inset-8 rounded-full bg-linear-to-br from-violet-600/20 via-fuchsia-500/10 to-transparent blur-3xl
            opacity-0 group-hover:opacity-100 transition-opacity duration-1000" />

          {/* Decorative ring */}
          <div className="absolute -inset-3 rounded-full border border-violet-500/10 group-hover:border-violet-500/20 transition-colors duration-700" />

          <Image
            src="/khushbu.jpg"
            alt="Khushbu Mandal — Web Developer"
            width={900}
            height={900}
            priority
            className="relative rounded-full object-cover
              w-60 h-60 md:w-72 md:h-72 lg:w-88 lg:h-88
              border border-white/6
              shadow-2xl shadow-black/50
              group-hover:shadow-violet-900/20
              transition-all duration-700"
          />

          {/* Floating badge */}
          <motion.div
            animate={{ y: [0, -6, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            className="absolute -right-2 top-1/4 px-3 py-1.5 rounded-lg
              bg-[#0a0a0a] border border-white/6
              text-xs font-mono text-violet-400 shadow-xl"
          >
            &lt;/&gt; Next.js
          </motion.div>

          <motion.div
            animate={{ y: [0, 6, 0] }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
            className="absolute -left-4 bottom-1/4 px-3 py-1.5 rounded-lg
              bg-[#0a0a0a] border border-white/6
              text-xs font-mono text-fuchsia-400 shadow-xl"
          >
            ✦ Tailwind
          </motion.div>
        </div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="text-[10px] uppercase tracking-[0.2em] text-zinc-700 font-medium">
          Scroll
        </span>
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="text-zinc-600"
        >
          <FiArrowDown className="text-sm" />
        </motion.div>
      </motion.div>
    </section>
  );
}