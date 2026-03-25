"use client";

import { useState } from "react";

export default function Contact() {
  const [msg, setMsg] = useState("");

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    const form = new FormData(e.target);

    const res = await fetch("/api/contact", {
      method: "POST",
      body: JSON.stringify({
        name: form.get("name"),
        email: form.get("email"),
        message: form.get("message"),
      }),
    });

    const data = await res.json();
    setMsg(data.message);
  };

  return (
    <section id="contact" className="py-16 bg-gradient-to-r from-purple-50 via-pink-50 to-red-50 px-4">
      <h2 className="text-4xl font-bold text-center mb-8 text-gray-800">Contact Me</h2>
      <form onSubmit={handleSubmit} className="max-w-lg mx-auto bg-white/80 backdrop-blur-md p-8 rounded-xl shadow-lg space-y-4">
        <input name="name" placeholder="Name" className="w-full p-3 border rounded-md" required/>
        <input name="email" placeholder="Email" className="w-full p-3 border rounded-md" required/>
        <textarea name="message" placeholder="Message" className="w-full p-3 border rounded-md" rows={5} required/>
        <button className="w-full bg-purple-600 text-white font-semibold p-3 rounded-md hover:bg-purple-700 transition">Send</button>
      </form>
      {msg && <p className="text-center mt-4 text-green-600 font-medium">{msg}</p>}
    </section>
  );
}