import React, { useEffect, useRef } from "react";
import "../Styles/backgroundBalls.css"


const colors = ["#cccccc", "#6bbe56ff", "#2d9673ff", "#a11cadff", "#cccccc"];
const numBalls = 50;

const BallsBackground: React.FC = () => {
  const containerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    const balls: HTMLDivElement[] = [];

    for (let i = 0; i < numBalls; i++) {
      const ball = document.createElement("div");
      ball.classList.add("ball");
      ball.style.background = colors[Math.floor(Math.random() * colors.length)];
      ball.style.left = `${Math.floor(Math.random() * 100)}vw`;
      ball.style.top = `${Math.floor(Math.random() * 100)}vh`;
      ball.style.transform = `scale(${Math.random()})`;
      const size = `${Math.random()}em`;
      ball.style.width = size;
      ball.style.height = size;

      containerRef.current.appendChild(ball);
      balls.push(ball);
    }

    balls.forEach((el, i) => {
      const to = {
        x: Math.random() * (i % 2 === 0 ? -11 : 11),
        y: Math.random() * 12,
      };

      el.animate(
        [
          { transform: `translate(0, 0)` },
          { transform: `translate(${to.x}rem, ${to.y}rem)` },
        ],
        {
          duration: (Math.random() + 1) * 2000,
          direction: "alternate",
          fill: "both",
          iterations: Infinity,
          easing: "ease-in-out",
        }
      );
    });

    // Cleanup on unmount
    return () => {
      if (containerRef.current) {
        containerRef.current.innerHTML = "";
      }
    };
  }, []);

  return <div className="balls-container" ref={containerRef}></div>;
};

export default BallsBackground;
