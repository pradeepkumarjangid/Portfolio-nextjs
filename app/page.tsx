import Footer from "@/components/layout/Footer";
import Navbar from "@/components/layout/Navbar";
import About from "@/components/sections/about/About";
import Contact from "@/components/sections/contact/Contact";
import Experience from "@/components/sections/experience/Experience";
import Hero from "@/components/sections/hero/Hero";
import Projects from "@/components/sections/projects/Projects";
import Skills from "@/components/sections/skills/Skills";

export default function Home() {
  return (
    <div>
      <Navbar/>
      <About/>
      <Hero/>
      <Skills/>
      <Projects/>
      <Experience/>
      <Contact/>
      <Footer/>
    </div>
  );
}
