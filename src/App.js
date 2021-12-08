import React from "react";
import Hero from "./assets/components/Hero";
import About from "./assets/components/About";
import Projects from "./assets/components/Projects";
import Contact from "./assets/components/Contact";
import DATA from "./data.js";
import Separator from "./assets/icons/Separator";

function App() {
  return (
    <>
      <Hero
        name={DATA.name}
        title={DATA.title}
        speciality={DATA.speciality}
        location={DATA.location}
      />
      <Separator />
      <About about={DATA.about} skills={DATA.skills} />
      
      <div className="night-background">
        <Projects projects={DATA.projects} />
        <Contact links={DATA.links} />
        <footer>
          <p className='grey tiny'>{DATA.mail}</p>
          <a href="#" className='grey tiny'>^volver</a>
        </footer>
      </div>
    </>
  );
}

export default App;
