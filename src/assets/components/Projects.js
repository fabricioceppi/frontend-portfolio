import React from "react";
import External from "../icons/External";
import GitHubIcon from "../icons/GitHubIcon";
import ReactIcon from "../icons/ReactIcon";
import HtmlIcon from "../icons/HtmlIcon";
import CssIcon from "../icons/CssIcon";
import JsIcon from "../icons/JsIcon";


function Projects(props) {
  return (
    <section className='projects'>
      <div>
        <h2 className="red small">Proyectos</h2>
        <h3 className="big white">{props.projects[0].name}</h3>
        <p className='grey small'>
          {props.projects[0].description}
        </p>
        <div className='project-links'>
          <External />
          <GitHubIcon fill="#ff364a" />
        </div>
      </div>

      <div>
        <div className='project-displayer'>
          {/* <img src='' alt=''></img> */}
        </div>

        <div className='techs'>
          <div><ReactIcon /></div>
          <div><CssIcon /></div>
          <div><HtmlIcon /></div>
          <div><JsIcon /></div>
        </div>

        <div className='projects-list'>
          <ul>
            <li role='button' aria-pressed={true}>Proyecto</li>
            <li role='button' aria-pressed={false}>Proyecto</li>
            <li role='button' aria-pressed={false}>Proyecto</li>
            <li role='button' aria-pressed={false}>Proyecto</li>
            <li role='button' aria-pressed={false}>Proyecto</li>
            <li role='button' aria-pressed={false}>Proyecto</li>
          </ul>
        </div>
      </div>
    </section>
  );
}

export default Projects;
