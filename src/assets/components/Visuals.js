import React, { useRef, useEffect } from "react";
import { Agent, random } from "./Agents";

function Visuals() {
  const canvasRef = useRef(null);
  const contextRef = useRef(null);
  const clientRef = useRef({ w: window.innerWidth, h: window.innerHeight });
  const circleRef = useRef({ pos: null, radius: null });
  const mouseRef = useRef({ x: 0, y: 0, radius: 0 });
  const agentsRef = useRef([]);
  const animationRef = useRef(null);

  setCircle();

  useEffect(() => {
    window.addEventListener("mousemove", (e) => {
      mouseRef.current.x = e.clientX;
      mouseRef.current.y = e.clientY;
      mouseRef.current.radius = circleRef.current.radius / 4;
    });
    window.addEventListener("mouseout", () => {
      mouseRef.current.radius = 0;
    });

    contextRef.current = canvasRef.current.getContext("2d");

    while (
      agentsRef.current.length <
      circleRef.current.radius * 1.5 /* Math.floor(size.w / 3) */
    ) {
      const x = random(
        circleRef.current.pos.x - circleRef.current.radius,
        circleRef.current.pos.x + circleRef.current.radius
      );
      const y = random(
        circleRef.current.pos.y - circleRef.current.radius,
        circleRef.current.pos.y + circleRef.current.radius
      );
      agentsRef.current.push(new Agent(x, y));
    }

    function animate() {
      clientRef.current.w = window.innerWidth;
      clientRef.current.h = window.innerHeight;
      canvasRef.current.width = clientRef.current.w;
      canvasRef.current.height = clientRef.current.h;

      setCircle();

      contextRef.current.clearRect(
        0,
        0,
        canvasRef.current.width,
        canvasRef.current.height
      );

      for (let i = 0; i < agentsRef.current.length; i++) {
        const agent = agentsRef.current[i];
        for (let j = i + 1; j < agentsRef.current.length; j++) {
          const otherAgent = agentsRef.current[j];
          const distance = agent.pos.getDistance(otherAgent.pos);

          if (distance > circleRef.current.radius / 5) {
            continue;
          }

          contextRef.current.lineWidth =
            (circleRef.current.radius * 0.2) / distance;
          contextRef.current.strokeStyle = setColorByDistance(
            agent,
            circleRef.current
          );
          contextRef.current.beginPath();
          contextRef.current.moveTo(agent.pos.x, agent.pos.y);
          contextRef.current.lineTo(otherAgent.pos.x, otherAgent.pos.y);
          contextRef.current.stroke();
        }
      }

      contextRef.current.lineWidth = 1;
      agentsRef.current.forEach((agent) => {
        const color = setColorByDistance(agent, circleRef.current);
        agent.bounce(clientRef.current.w, clientRef.current.h);
        agent.runFromItem(
          mouseRef.current,
          clientRef.current.w,
          clientRef.current.h
        );
        agent.update();
        agent.draw(contextRef.current, color);
      });

      animationRef.current = requestAnimationFrame(animate);
    }

    animate();
  }, []);

  function setCircle() {
    let m = clientRef.current.w > 1300 ? 150 : 0;
    if (clientRef.current.w > clientRef.current.h) {
      circleRef.current.radius = clientRef.current.h / 3;
      circleRef.current.pos = {
        x: clientRef.current.w - circleRef.current.radius * 1.5 - m,
        y: circleRef.current.radius * 1.5,
      };
    } else {
      circleRef.current.radius = clientRef.current.w / 3;
      circleRef.current.pos = {
        x: clientRef.current.w / 2,
        y: clientRef.current.h / 2 + circleRef.current.radius,
      };
    }
  }

  function setColorByDistance(v1, v2) {
    let color;
    if (v1.pos.getDistance(v2.pos) < v2.radius) {
      color = "rgb(255, 54, 74)";
    } else {
      color = "rgba(80, 20, 60, 0.3)";
    }
    return color;
  }

  return <canvas className="visuals" ref={canvasRef}></canvas>;
}

export default Visuals;
