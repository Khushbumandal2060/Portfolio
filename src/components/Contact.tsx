"use client";
import { useState, type FormEvent } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiSend, FiCheck, FiAlertCircle, FiMail, FiMapPin } from "react-icons/fi";
import { FaGithub, FaLinkedin } from "react-icons/fa";

type FormStatus = "idle" | "loading" | "success" | "error";

export default function Contact() {
  const [status, setStatus] = useState<FormStatus>("idle");

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("loading");

    const form = e.currentTarget;
    const formData = new FormData(form);

    const data = {
      name: String(formData.get("name") ?? ""),
      email: String(formData.get("email") ?? ""),
      message: String(formData.get("message") ?? ""),
    };

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      const result = await res.json();

      if (result.success) {
        setStatus("success");
        form.reset();
        setTimeout(() => setStatus("idle"), 4000);
      } else {
        setStatus("error");
        setTimeout(() => setStatus("idle"), 4000);
      }
    } catch {
      setStatus("error");
      setTimeout(() => setStatus("idle"), 4000);
    }
  };

  return (
    <section
      id="contact"
      className="relative py-32 px-6 lg:px-20 overflow-hidden"
    >
      {/* Ambient */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[400px] bg-violet-600/4 rounded-full blur-[150px] -z-10" />

      <div className="max-w-5xl mx-auto">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          className="text-center mb-16"
        >
          <p className="section-label mb-3">Get In Touch</p>
          <h2 className="section-title">
            Let&apos;s <span className="gradient-text">Connect</span>
          </h2>
          <p className="text-zinc-500 text-sm mt-4 max-w-md mx-auto">
            Have a project in mind or want to collaborate? I&apos;d love to hear from you.
            Send me a message and I&apos;ll respond within 24 hours.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-5 gap-8">
          {/* Contact Info Cards */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-2 space-y-4"
          >
            {/* Email card */}
            <div className="p-5 rounded-2xl bg-white/2 border border-white/5 group hover:bg-white/4 hover:border-white/8 transition-all duration-500">
              <div className="flex items-center gap-3 mb-2">
                <div className="w-10 h-10 rounded-xl bg-violet-500/10 flex items-center justify-center text-violet-400 group-hover:scale-110 transition-transform duration-500">
                  <FiMail className="text-base" />
                </div>
                <div>
                  <p className="text-xs text-zinc-600 uppercase tracking-wider font-medium">
                    Email
                  </p>
                  <p className="text-sm text-zinc-300">
                    khusbumandal2060@email.com
                  </p>
                </div>
              </div>
            </div>

            {/* Location card */}
            <div className="p-5 rounded-2xl bg-white/2 border border-white/5 group hover:bg-white/4 hover:border-white/8 transition-all duration-500">
              <div className="flex items-center gap-3 mb-2">
                <div className="w-10 h-10 rounded-xl bg-emerald-500/10 flex items-center justify-center text-emerald-400 group-hover:scale-110 transition-transform duration-500">
                  <FiMapPin className="text-base" />
                </div>
                <div>
                  <p className="text-xs text-zinc-600 uppercase tracking-wider font-medium">
                    Location
                  </p>
                  <p className="text-sm text-zinc-300">Nepal 🇳🇵</p>
                </div>
              </div>
            </div>

            {/* Social links */}
            <div className="p-5 rounded-2xl bg-white/2 border border-white/5">
              <p className="text-xs text-zinc-600 uppercase tracking-wider font-medium mb-3">
                Connect
              </p>
              <div className="flex gap-3">
                {[
                  {
                    icon: FaGithub,
                    href: "https://github.com/Khushbumandal2060",
                    label: "GitHub",
                  },
                  {
                    icon: FaLinkedin,
                    href: "https://www.linkedin.com/in/khushbu-kumari-mandal-99637b343/",
                    label: "LinkedIn",
                  },
                ].map(({ icon: Icon, href, label }) => (
                  <a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-3 py-2 rounded-lg
                      bg-white/3 border border-white/5
                      text-zinc-500 text-sm hover:text-violet-400 hover:border-violet-500/20
                      transition-all duration-300"
                  >
                    <Icon /> {label}
                  </a>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Form */}
          <motion.form
            onSubmit={handleSubmit}
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-3 space-y-4 p-7 rounded-2xl
              bg-white/2 border border-white/5"
          >
            {/* Name & Email (STACKED) */}
            <div className="grid grid-cols-1 gap-4">
              <div className="space-y-1.5">
                <label className="text-[11px] text-zinc-600 uppercase tracking-wider font-semibold">
                  Name
                </label>
                <input
                  name="name"
                  placeholder="Your name"
                  required
                  className="w-full px-4 py-3 rounded-xl text-sm text-white
                    bg-white/3 border border-white/6
                    placeholder:text-zinc-700
                    transition-all duration-300"
                />
              </div>

              <div className="space-y-1.5">
                <label className="text-[11px] text-zinc-600 uppercase tracking-wider font-semibold">
                  Email
                </label>
                <input
                  name="email"
                  type="email"
                  placeholder="your@email.com"
                  required
                  className="w-full px-4 py-3 rounded-xl text-sm text-white
                    bg-white/3 border border-white/6
                    placeholder:text-zinc-700
                    transition-all duration-300"
                />
              </div>
            </div>

            {/* Message */}
            <div className="space-y-1.5">
              <label className="text-[11px] text-zinc-600 uppercase tracking-wider font-semibold">
                Message
              </label>
              <textarea
                name="message"
                rows={5}
                placeholder="Tell me about your project..."
                required
                className="w-full px-4 py-3 rounded-xl text-sm text-white resize-none
                  bg-white/3 border border-white/6
                  placeholder:text-zinc-700
                  transition-all duration-300"
              />
            </div>

            {/* Button */}
            <AnimatePresence mode="wait">
              <motion.button
                key={status}
                initial={{ opacity: 0, y: 5 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -5 }}
                disabled={status === "loading"}
                className={`w-full flex items-center justify-center gap-2
                  py-3.5 rounded-xl text-sm font-semibold
                  transition-all duration-400
                  ${
                    status === "success"
                      ? "bg-emerald-600 text-white shadow-lg shadow-emerald-600/20"
                      : status === "error"
                        ? "bg-red-600 text-white shadow-lg shadow-red-600/20"
                        : "bg-violet-600 text-white hover:bg-violet-500 shadow-lg shadow-violet-600/15 hover:shadow-violet-500/25 hover:-translate-y-0.5"
                  }
                  disabled:opacity-60 disabled:cursor-not-allowed disabled:translate-y-0`}
              >
                {status === "loading" && (
                  <>
                    <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                    Sending...
                  </>
                )}
                {status === "idle" && (
                  <>
                    <FiSend className="text-sm" />
                    Send Message
                  </>
                )}
                {status === "success" && (
                  <>
                    <FiCheck className="text-lg" />
                    Message Sent Successfully!
                  </>
                )}
                {status === "error" && (
                  <>
                    <FiAlertCircle className="text-lg" />
                    Failed — Please Try Again
                  </>
                )}
              </motion.button>
            </AnimatePresence>
          </motion.form>
        </div>
      </div>
    </section>
  );
}