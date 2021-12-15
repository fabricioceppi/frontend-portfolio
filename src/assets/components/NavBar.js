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

      <div className="menu-items">
        <a className="item" href='#home' onFocus={() => setMenuState(true)}>
          <div className="item-icon">
            <Home fill="white" />
          </div>
          <div className="medium semi-bold white item-name">Inicio</div>
        </a>
        <a className="item" href='#about'>
          <div className="item-icon">
            <Person fill="white" />
          </div>
          <div className="medium semi-bold white item-name">Sobre mi</div>
        </a>
        <a className="item" href='#projects'>
          <div className="item-icon">
            <Squares fill="white" />
          </div>
          <div className="medium semi-bold white item-name">Proyectos</div>
        </a>
        <a className="item" href='#contact' onBlur={() => setMenuState(false)}>
          <div className="item-icon">
            <Plane fill="white" />
          </div>
          <div className="medium semi-bold white item-name">Contacto</div>
        </a>
      </div>
    </nav>
  );
}

export default NavBar;
