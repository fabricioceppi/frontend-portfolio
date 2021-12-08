import React from "react";
import GitHubIcon from "../icons/GitHubIcon";
import LinkedInIcon from "../icons/LinkedIcon";
import MailIcon from "../icons/MailIcon";

function Contact() {
  return (
    <section className="contact">
      <div>
        <h2 className="white small">Contacto</h2>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="12"
          height="40.5"
          viewBox="0 0 12 40.5"
        >
          <g
            id="Grupo_23"
            data-name="Grupo 23"
            transform="translate(-174 -2840)"
          >
            <line
              id="Línea_5"
              data-name="Línea 5"
              y2="25"
              transform="translate(180 2840)"
              fill="none"
              stroke="#d5d5d5"
              strokeWidth="0.5"
            />
            <g
              id="Elipse_4"
              data-name="Elipse 4"
              transform="translate(174 2868.5)"
              fill="none"
              stroke="#d5d5d5"
              strokeWidth="1"
            >
              <circle cx="6" cy="6" r="6" stroke="none" />
              <circle cx="6" cy="6" r="5.5" fill="none" />
            </g>
          </g>
        </svg>
      </div>

      <div>
          <a className='contact-button' href='#'><GitHubIcon fill='#363DFF'/>GitHub</a>
          <a className='contact-button' href='#'><LinkedInIcon />LinkedIn</a>
          <a className='contact-button' href='#'><MailIcon />fabricioceppi</a>
      </div>
    </section>
  );
}

export default Contact;
