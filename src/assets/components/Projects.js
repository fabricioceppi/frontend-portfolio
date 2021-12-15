import React, { useState, useRef } from "react";
import External from "../icons/External";
import GitHubIcon from "../icons/GitHubIcon";
import ReactIcon from "../icons/ReactIcon";
import HtmlIcon from "../icons/HtmlIcon";
import CssIcon from "../icons/CssIcon";
import JsIcon from "../icons/JsIcon";
import { nanoid } from "nanoid";
import Left from "../icons/Left";
import Right from "../icons/Right";

const LOGO_MAP = {
  React: <ReactIcon />,
  JavaScript: <JsIcon />,
  HTML: <HtmlIcon />,
  CSS: <CssIcon />
}

function Projects(props) {
  const [projectIndex, setIndex] = useState(0);
  const projects = props.projects;
  const shownProject = projects[projectIndex];
  const projectsRef = useRef(null);

  const projectList = projects.map((project, index) => (
    <li
      role="button"
      aria-pressed={project.id === shownProject.id}
      id={project.id}
      key={nanoid()}
      tabIndex={0}
      onClick={() => {setIndex(index); projectsRef.current.focus()}}
    >
      {project.name}
    </li>
  ));

  const icons = shownProject.techs.map(tech => (
    <div key={nanoid()}>
      {LOGO_MAP[tech]}
    </div>
  ));

  function useControls(n) {
    let newIndex;
    if (n > 0) {
      newIndex = projectIndex === projects.length - 1 ? 0 : projectIndex + n;
    } else {
      newIndex = projectIndex === 0 ? projects.length -1 : projectIndex + n;
    } 
    setIndex(newIndex);
  }

  return (
    <section className="projects" id="projects">
      <div>
        <h2 className="red small">Proyectos</h2>
        <h3 className="big white">{shownProject.name}</h3>
        <p className="grey small">{shownProject.description}</p>
        <div className="project-links">
          <a href={shownProject.liveSite}>
            <External />
          </a>
          <a href={shownProject.repository}>
            <GitHubIcon fill="#ff364a" />
          </a>
        </div>
      </div>

      <div>
        <div className="project-displayer" ref={projectsRef} tabIndex={-1}>
          <a href={shownProject.liveSite}><img src={shownProject.screenShot} alt={shownProject.name}></img></a>
          <div className="controls">
            <Left useControls={useControls}/>
            <Right useControls={useControls}/>
          </div>
        </div>

        <div className="techs">{icons}</div>

      </div>
        <div className="projects-list">
          <ul>{projectList}</ul>
        </div>
    </section>
  );
}

export default Projects;
