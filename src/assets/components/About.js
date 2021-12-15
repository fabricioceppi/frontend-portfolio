import { nanoid } from "nanoid";
import React from "react";
import Star from "../icons/Star";
import CheckMark from "../icons/CheckMark";

function About(props) {
  const skills = props.skills.map((skill) => {
    let stars = [];
    for (let i = 0; i < skill.level; i++) {
      stars.push(<Star key={nanoid()}/>);
    }
    
    return (
      <li className="skill" key={nanoid()}>
        <CheckMark />
        <span className="white small">{skill.name}</span>
        <span className="stars">{stars}</span>
      </li>
    );

  });
  return (
    <section className="about" id='about'>
      <div>
        <h2 className="red small">Sobre mi</h2>
        <p className="weak-blue small">{props.about}</p>
      </div>

      <div className="skill-set">
        <h2 className="blue small">Resumen de conocimientos</h2>
        <div>
          <ul>{skills}</ul>
          <a className="action-button white small" href='./downloads/Cv-Front-End.pdf'>Ver Curriculum</a>
        </div>
      </div>
    </section>
  );
}

export default About;
