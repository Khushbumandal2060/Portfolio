"use client";
import { useState } from "react";

export default function Contact() {
  const [msg, setMsg] = useState("");

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    const form = new FormData(e.target);
    // Normally send API request
    setMsg(`Thank you, ${form.get("name")}!`);
  };

  return (
    <section id="contact" className="py-20 bg-gray-900 text-white px-6 md:px-20">
      <h2 className="text-3xl font-bold mb-10 text-center">Contact Me</h2>
      <form onSubmit={handleSubmit} className="max-w-xl mx-auto flex flex-col gap-4">
        <input name="name" placeholder="Name" className="p-3 rounded bg-gray-800 border border-gray-700" />
        <input name="email" placeholder="Email" className="p-3 rounded bg-gray-800 border border-gray-700" />
        <textarea name="message" placeholder="Message" className="p-3 rounded bg-gray-800 border border-gray-700" />
        <button type="submit" className="bg-cyan-600 hover:bg-cyan-500 transition py-3 rounded-full">Send</button>
      </form>
      {msg && <p className="text-center mt-4">{msg}</p>}
    </section>
  );
}