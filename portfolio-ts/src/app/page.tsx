import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import AboutMe from "@/components/AboutMe";
import Skills from "@/components/Skills";
import Projects from "../components/Projects";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
import Education from "../components/Education";


export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <AboutMe />
      <Skills />
      <Projects />
      <Education />
      <Contact />
      <Footer />
      
    </>
  );
}