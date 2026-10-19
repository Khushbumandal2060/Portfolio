"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import { FaBriefcase } from "react-icons/fa";
import { FiExternalLink } from "react-icons/fi";

export default function Experience() {
  return (
    <section
      id="experience"
      className="relative py-32 px-6 lg:px-20 overflow-hidden"
    >
      <div className="absolute top-1/3 left-0 w-[400px] h-[400px] bg-violet-600/3 rounded-full blur-[140px] -z-10" />

      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          className="text-center mb-16"
        >
          <p className="section-label mb-3">Career Journey</p>
          <h2 className="section-title">
            My <span className="gradient-text">Experience</span>
          </h2>
        </motion.div>

        <motion.article
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.5 }}
          className="grid md:grid-cols-[1fr_220px] gap-8 items-center p-6 md:p-8 rounded-2xl
            bg-white/2 border border-white/5 hover:border-white/10 transition-colors"
        >
          <div>
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-xl flex items-center justify-center text-lg shrink-0
                bg-violet-500/10 text-violet-400">
                <FaBriefcase />
              </div>
              <div>
                <h3 className="text-lg font-bold text-white">
                  Web Developer Intern
                </h3>
                <p className="text-sm text-violet-300 mt-1">Curl Labs Pvt. Ltd.</p>
                <p className="text-xs text-zinc-600 font-mono mt-2">
                  June 22 – September 22, 2026
                </p>
              </div>
            </div>

            <p className="text-sm text-zinc-400 leading-relaxed mt-6">
              Completed the internship program by carrying out the tasks
              required for the Web Developer role, demonstrating work ethic,
              leadership, and teamwork.
            </p>

            <a
              href="/internship_certificate.jpg"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 mt-6 text-sm font-medium text-violet-400
                hover:text-violet-300 transition-colors"
            >
              View internship certificate
              <FiExternalLink />
            </a>
          </div>

          <a
            href="/internship_certificate.jpg"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="View Web Developer internship certificate"
            className="block w-full max-w-[180px] mx-auto rounded-xl overflow-hidden border border-white/10
              hover:border-violet-500/30 transition-colors"
          >
            <Image
              src="/internship_certificate.jpg"
              alt="Internship certificate from Curl Labs"
              width={1034}
              height={1600}
              className="w-full h-auto"
            />
          </a>
        </motion.article>
      </div>
    </section>
  );
}
