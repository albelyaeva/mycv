import {useEffect, useState} from "react";
import './App.css'
import Header from "./components/Header.tsx";
import Skills from "./components/Skills.tsx";
import Experience from "./components/Experience.tsx";
import Projects from "./components/Projects.tsx";
import About from "./components/About.tsx";
import Footer from "./components/Footer.tsx";

function App() {

    const [visibleSection, setVisibleSection] = useState<string | null>(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        setVisibleSection(entry.target.id);
                    }
                });
            },
            { threshold: 0.5 }
        );

        const sections = document.querySelectorAll('.section');
        sections.forEach((section) => observer.observe(section));

        return () => {
            sections.forEach((section) => observer.unobserve(section));
        };
    }, []);

  return (
      <>
          <Header visibleSection={String(visibleSection)}/>
          <About visibleSection={String(visibleSection)} />
          <Skills/>
          <Experience/>
          <Projects/>
          <Footer />
      </>
  )
}

export default App
