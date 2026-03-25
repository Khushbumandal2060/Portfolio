"use client";
import { useState } from "react";

export default function Contact() {
  const [msg, setMsg] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: any) => {
    e.preventDefault();

    setLoading(true);

    const form = new FormData(e.target);

    const response = await fetch("https://formspree.io/f/meepqqyl", {
      // Formspree URL
      method: "POST",
      body: form,
      headers: {
        Accept: "application/json",
      },
    });

    setLoading(false);

    if (response.ok) {
      setMsg(`✅ Thank you, ${form.get("name")}! Your message has been sent.`);
      e.target.reset();
    } else {
      setMsg("❌ Something went wrong. Please try again.");
    }
  };

  return (
    <section
      id="contact"
      className="py-24 bg-gradient-to-b from-gray-900 to-gray-950 text-white px-6 md:px-20"
    >
      {/* Heading */}
      <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center">
        Contact <span className="text-cyan-400">Me</span>
      </h2>

      {/* Container */}
      <div className="max-w-2xl mx-auto bg-gray-900/60 backdrop-blur-lg border border-gray-800 p-8 md:p-12 rounded-2xl shadow-2xl">

        <form onSubmit={handleSubmit} className="flex flex-col gap-6">

          {/* Name */}
          <input
            name="name"
            placeholder="Your Name"
            required
            className="p-4 text-lg rounded-lg bg-gray-800 border border-gray-700 focus:border-cyan-400 focus:outline-none"
          />

          {/* Email */}
          <input
            name="email"
            type="email"
            placeholder="Your Email"
            required
            className="p-4 text-lg rounded-lg bg-gray-800 border border-gray-700 focus:border-cyan-400 focus:outline-none"
          />

          {/* Message */}
          <textarea
            name="message"
            rows={5}
            placeholder="Your Message"
            required
            className="p-4 text-lg rounded-lg bg-gray-800 border border-gray-700 focus:border-cyan-400 focus:outline-none"
          />

          {/* Button */}
          <button
            type="submit"
            disabled={loading}
            className="bg-cyan-600 hover:bg-cyan-500 transition py-4 text-lg font-semibold rounded-full shadow-lg"
          >
            {loading ? "Sending..." : "Send Message"}
          </button>
        </form>

        {/* Message */}
        {msg && (
          <p className="text-center mt-6 text-lg text-cyan-400 font-medium">
            {msg}
          </p>
        )}
      </div>
    </section>
  );
}