import React from "react";
import Hero from "./assets/components/Hero";
import About from "./assets/components/About";
import Projects from "./assets/components/Projects";
import Contact from "./assets/components/Contact";
import DATA from "./data.js";

function App() {

  return (
    <>
      <Hero
        name={DATA.name}
        title={DATA.title}
        speciality={DATA.speciality}
        location={DATA.location}
      />
      <About about={DATA.about} skills={DATA.skills} />

      <div className="night-background">
        <Projects projects={DATA.projects} />
        <Contact links={DATA.links} />
        <footer id="contact">
          <p className="grey tiny">{DATA.mail}</p>
          <a href="#home" className="grey tiny">
            ^volver
          </a>
        </footer>
      </div>
    </>
  );
}

export default App;
