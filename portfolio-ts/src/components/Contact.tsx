"use client";
import { useState } from "react";
import { motion } from "framer-motion";

export default function Contact() {
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    setLoading(true);

    const form = e.target;

    const data = {
      name: form.name.value,
      email: form.email.value,
      message: form.message.value,
    };

    try {
      const res = await fetch("http://localhost:5000/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      const result = await res.json();

      if (result.success) {
        alert("✅ Message sent successfully!");
        form.reset();
      } else {
        alert("❌ Failed to send message");
      }
    } catch (error) {
      alert("⚠️ Server error. Is backend running?");
    }

    setLoading(false);
  };

  return (
    <section
      id="contact"
      className="py-24 bg-gradient-to-b from-gray-900 to-gray-950 text-white px-6 md:px-20"
    >
      {/* Heading */}
      <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
        Contact <span className="text-cyan-400">Me</span>
      </h2>

      {/* Form */}
      <motion.form
        onSubmit={handleSubmit}
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="max-w-2xl mx-auto space-y-6 bg-gray-900/60 backdrop-blur-lg border border-gray-800 p-10 rounded-2xl shadow-2xl"
      >
        {/* Name */}
        <input
          name="name"
          placeholder="Your Name"
          required
          className="w-full p-4 rounded-lg bg-gray-800 border border-gray-700 focus:border-cyan-400 focus:outline-none transition"
        />

        {/* Email */}
        <input
          name="email"
          type="email"
          placeholder="Your Email"
          required
          className="w-full p-4 rounded-lg bg-gray-800 border border-gray-700 focus:border-cyan-400 focus:outline-none transition"
        />

        {/* Message */}
        <textarea
          name="message"
          rows={5}
          placeholder="Your Message"
          required
          className="w-full p-4 rounded-lg bg-gray-800 border border-gray-700 focus:border-cyan-400 focus:outline-none transition"
        />

        {/* Button */}
        <button
          disabled={loading}
          className="w-full bg-cyan-600 hover:bg-cyan-500 transition py-4 text-lg font-semibold rounded-full shadow-lg disabled:opacity-60"
        >
          {loading ? "Sending..." : "Send Message"}
        </button>
      </motion.form>
    </section>
  );
}