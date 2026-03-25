"use client";

export default function Hero() {
  return (
    <section className="flex flex-col justify-center items-center min-h-screen bg-gradient-to-r from-purple-400 via-pink-400 to-red-400 text-white text-center p-6">
      <h1 className="text-6xl font-extrabold mb-4 drop-shadow-lg">
        Hi, I'm Khushbu 👋
      </h1>
      <p className="text-2xl mb-6 drop-shadow-md">
        Full Stack Developer | TypeScript & Next.js Enthusiast
      </p>
      <a
        href="#projects"
        className="bg-white text-purple-600 font-semibold px-8 py-3 rounded-full hover:scale-105 transition-transform shadow-lg"
      >
        See My Work
      </a>
    </section>
  );
}