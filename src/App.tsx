import { useRef } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Experience from "./components/Experience";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  const projectsRef = useRef<HTMLDivElement>(null);
  const skillsRef = useRef<HTMLDivElement>(null);
  const experienceRef = useRef<HTMLDivElement>(null);
  const contactRef = useRef<HTMLDivElement>(null);

  const scrollToSection = (id: string) => {
    let element: HTMLElement | null = null;

    switch (id) {
      case "projects":
        element = projectsRef.current;
        break;
      case "skills":
        element = skillsRef.current;
        break;
      case "experience":
        element = experienceRef.current;
        break;
      case "contact":
        element = contactRef.current;
        break;
      case "home":
        element = document.getElementById("home");
        break;
      default:
        break;
    }

    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="bg-gray-950">
      <Navbar scrollToSection={scrollToSection} />
      <Hero scrollToSection={scrollToSection} />
      <Projects sectionRef={projectsRef} />
      <Skills sectionRef={skillsRef} />
      <Experience sectionRef={experienceRef} />
      <Contact sectionRef={contactRef} />
      <Footer />
    </div>
  );
}

export default App;
