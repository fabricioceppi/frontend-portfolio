const DATA = {
  name: "Fabricio Ceppi",
  location: "Montevideo, Uy",
  title: "Desarrollador",
  speciality: "Front-End",
  about: `Desarrollador front-end autodidacta, apasionado por la tecnología y el diseño. Disfruto de diseñar y desarrollar sitios y aplicaciones web con HTML, CSS, JavaScript y React, haciendo foco en la accesibilidad (siguiendo los estándares de W3C), compatibilidad entre navegadores, adaptabilidad, usabilidad y riqueza en la interacción. Tengo buen ojo para el detalle y me gusta incorporar nuevas herramientas a mi skill set constantemente.`,
  skills: [
    { name: "HTML", level: 4 },
    { name: "CSS", level: 5 },
    { name: "JavaScript", level: 4 },
    { name: "React.Js", level: 3 },
    { name: "Node.Js", level: 2 },
    { name: "Git", level: 3 },
    { name: "GitHub", level: 3 },
    { name: "Adobe XD", level: 4 },
    { name: "Illustrator", level: 5 },
    { name: "Photoshop", level: 5 },
  ],
  projects: [
    {
      name: "Kodak Super 8",
      id: "kodak",
      description: `Landing page ficticia para la nueva cámara Super 8 de Kodak.
      El proyecto fue creado con fines didácticos, utilizando HTML5,
      CSS3, y Vanilla JavaScript a partir de un diseño propio.
      Se puso énfasis en las interacciones, creando transiciones suaves y
      atractivas con CSS en un gran número de elementos, entre los cuales
      se destaca el menu principal y su botón giratorio, o los bloques
      que aparecen y desaparecen según su posición en el navegador del usuario (I.E: las especificaciones de la cámara).`,
      repository: "https://github.com/fabricioceppi/Kodak_landing",
      liveSite: "https://fabricioceppi.github.io/Kodak_landing/",
      techs: ["HTML", "CSS", "JavaScript"],
      screenShot: "./images/kodak.png",
    },
    {
      name: "Mácula",
      id: "macula",
      description: `Mácula.uy es una plataforma cultural especializada en pintura contemporánea uruguaya,
      co-creada por Fabricio Ceppi y Cecilia Vidal.
      El sitio web reúne entrevistas audiovisuales a artistas uruguayos
      y textos sobre cultura visual. Fue diseñado y desarrollado pensando en la accesibilidad, por lo cual se utilizaron técnicas de maquetado compatibles con navegadores antiguos.
      Actualmente está en desarrollo una versión 2.0, más dinámica, escalable y fácil de mantener.`,
      repository: "https://github.com/fabricioceppi/Macula",
      liveSite: "https://macula.uy/",
      techs: ["HTML", "CSS", "JavaScript"],
      screenShot: "./images/macula.png",
    },
    {
      name: "Sneakers product page",
      id: "sneakers",
      description: `Página de producto con carrito de compra, creada como solución al desafío de Frontend Mentor "e-commerce-product-page".
      La composición fue construida utilizando FlexBox, y fueron añadidas transiciones adicionales a las inidicadas en el brief. A pesar de ser un proyecto
      de práctica, los componentes fueron desarrollados considerando su escalabilidad y reutilización. La versión actual consiste sólo en una página,
      sin conexión al back ni enlaces funcionales.`,
      repository: "https://github.com/fabricioceppi/e-commerce-sneakers-page",
      liveSite: "https://fabricioceppi.github.io/e-commerce-sneakers-page/",
      techs: ["React", "HTML", "CSS", "JavaScript"],
      screenShot: "./images/sneakers.png",
    },
    {
      name: "Pricing component",
      id: "princing-component",
      description: `Componente interactivo creado como solución al desafío de Frontend Mentor "Interactive pricing component", cuyo user story
      exige el uso de dos inputs, uno para seleccionar el plan de hosting y otro para alternar entre pago mensual y anual, modificando el precio final.
      Para el primero se utilizó un range, y para el segundo un set de radios. Para mejorar su apariencia y experiencia en la interacción se hizo uso de JavaScript y de sus respectivos pseudoelementos en CSS.`,
      repository: "#",
      liveSite: "#",
      techs: ["HTML", "CSS", "JavaScript"],
      screenShot: "./images/pricingcomponent.png",
    },
    {
      name: "Bamboo riser",
      id: "bamboo-riser",
      description: `Página de crowdfunding creada como solución al desafío de Frontend Mentor "Crowdfunding product page", donde el usuario debe ser
      capaz de marcar el producto como favorito, seleccionar entre distintos planes para apoyar el emprendimiento y finalmente alterar el monto final
      recaudado del mismo. El valor de lo recaudado se pinta a través de un elemento <meter>, mientras que el botón de bookmark es un checkbox controlado por JavaScript.`,
      repository: "https://github.com/fabricioceppi/Crowdfunding-product-page",
      liveSite: "https://fabricioceppi.github.io/Crowdfunding-product-page/",
      techs: ["HTML", "CSS", "JavaScript"],
      screenShot: "./images/bambooriser.png",
    },
    {
      name: "Time tracking component",
      id: "time-tracking",
      description: `Componente creado como solución al desafío "Time tracking component" de Frontend Mentor. Su función principal es mostrar la dedicación horaria de distintas actividades del usuario,
      filtrando por día, semana y mes. La información del usuario está almacenada en un archivo .JSON, que es llamada mediante fetch() y pintada dinámicamente en el componente.
      El layout fue construido utilizando CSS Grid y FlexBox.`,
      repository: "https://github.com/fabricioceppi/Time-tracking-component",
      liveSite: "https://fabricioceppi.github.io/Time-tracking-component/",
      techs: ["HTML", "CSS", "JavaScript"],
      screenShot: "./images/timetracker.png",
    },
    {
      name: "Tip splitter",
      id: "splitter",
      description: `Calculadora de propinas creada como solución al desafío "Tip calculator" de Frontend Mentor. Permite al usuario ingresar el total de una cuenta a pagar, la cantidad de personas entre las que se dividirá la cuenta
      y el porcentaje de propina que se desea dejar. Devuelve el total a pagar por cada persona y la fracción correspondiente a la propina. Incluye un botón de reset que reinicia todas las variables y el valor de los inputs.`,
      repository: "https://github.com/fabricioceppi/challenge-tip-calculator",
      liveSite: "https://fabricioceppi.github.io/challenge-tip-calculator/",
      techs: ["HTML", "CSS", "JavaScript"],
      screenShot: "./images/splitter.png",
    },
  ],
  mail: "fabricioceppi@gmail.com",
};

export default DATA;
