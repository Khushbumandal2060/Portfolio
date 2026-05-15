"use client";

import { useRef } from "react";

import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import AboutMe from "../components/AboutMe";
import Skills from "../components/Skills";
import Projects from "../components/Projects";
import Services from "../components/Services";
import Education from "../components/Education";
import Achievements from "../components/Achievements";
import Contact from "../components/Contact";
import Footer from "../components/Footer";

export default function Home() {
  const heroRef = useRef<HTMLElement>(null);
  const aboutRef = useRef<HTMLElement>(null);
  const servicesRef = useRef<HTMLElement>(null);
  const skillsRef = useRef<HTMLElement>(null);
  const projectsRef = useRef<HTMLElement>(null);
  const educationRef = useRef<HTMLElement>(null);
  const achievementsRef = useRef<HTMLElement>(null);
  const contactRef = useRef<HTMLElement>(null);

  const sections = {
    hero: heroRef,
    about: aboutRef,
    services: servicesRef,
    skills: skillsRef,
    projects: projectsRef,
    education: educationRef,
    achievements: achievementsRef,
    contact: contactRef,
  };

  return (
    <>
      <Navbar sections={sections} />

      <section ref={heroRef}>
        <Hero />
      </section>

      <section ref={aboutRef}>
        <AboutMe />
      </section>

      <section ref={servicesRef}>
        <Services />
      </section>

      <section ref={skillsRef}>
        <Skills />
      </section>

      <section ref={projectsRef}>
        <Projects />
      </section>

      <section ref={educationRef}>
        <Education />
      </section>

      <section ref={achievementsRef}>
        <Achievements />
      </section>

      <section ref={contactRef}>
        <Contact />
      </section>

      <Footer sections={sections} />
    </>
  );
}