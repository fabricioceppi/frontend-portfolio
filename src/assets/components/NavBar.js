import React, { useState } from "react";
import Home from "../icons/Home";
import Person from "../icons/Person";
import Plane from "../icons/Plane";
import Squares from "../icons/Squares";

function NavBar() {
  const [isOpened, setMenuState] = useState(false);

  return (
    <nav className={isOpened ? "menu active" : "menu"}>
      <div className="nav-back"></div>
      <div
        role="button"
        className="menu-button"
        onClick={() => setMenuState(!isOpened)}
      >
        <div></div>
        <div></div>
        <div></div>
      </div>

      <ul className="menu-items">
        <li className="item">
          <div>
            <Home fill="white" />
          </div>
          <spam className="medium semi-bold white">Inicio</spam>
        </li>
        <li className="item">
          <div>
            <Person fill="white" />
          </div>
          <spam className="medium semi-bold white">Sobre mi</spam>
        </li>
        <li className="item">
          <div>
            <Squares fill="white" />
          </div>
          <spam className="medium semi-bold white">Proyectos</spam>
        </li>
        <li className="item">
          <div>
            <Plane fill="white" />
          </div>
          <spam className="medium semi-bold white">Contacto</spam>
        </li>
      </ul>
    </nav>
  );
}

export default NavBar;
