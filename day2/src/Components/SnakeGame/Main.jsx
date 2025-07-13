import { useEffect, useState } from "react";
import "../../style/Snake.css";

export let SnakeGame = () => {
  let [position, setPosition] = useState({ x: 0, y: 0 });
  let [direction, setDirecton] = useState([]);

  useEffect(() => {
    let newPos = { ...position };
    let up = () => {
      newPos.y -= 10;
      setPosition(newPos);
      setDirecton(["ArrowUp", ...direction.slice(0, 1)]);
      console.log(position);
      console.log(direction);

      if (position.y === -240) {
        newPos.y = 240;
      }
    };
    let down = () => {
      newPos.y += 10;
      setPosition(newPos);
      setDirecton(["ArrowDown", ...direction.slice(0, 1)]);
      console.log(position);
      console.log(direction);

      if (position.y === 240) {
        newPos.y = -240;
      }
    };
    let right = () => {
      newPos.x += 10;
      setPosition(newPos);
      console.log(position);
      setDirecton(["ArrowRight", ...direction.slice(0, 1)]);
      console.log(position);
      console.log(direction);

      if (position.x === 240) {
        newPos.x = -240;
      }
    };
    let left = () => {
      newPos.x -= 10;
      setPosition(newPos);
      console.log(position);
      setDirecton(["ArrowLeft", ...direction.slice(0, 1)]);
      console.log(position);
      console.log(direction);

      if (position.x === -240) {
        newPos.x = 240;
      }
    };
    function handlePress(e) {
      if (e.key === "ArrowUp" && direction[0] !== "ArrowDown") {
        up();
      } else if (e.key === "ArrowDown" && direction[0] !== "ArrowUp") {
        down();
      } else if (e.key === "ArrowRight" && direction[0] !== "ArrowLeft") {
        right();
      } else if (e.key === "ArrowLeft" && direction[0] !== "ArrowRight") {
        left();
      }
    }
    window.addEventListener("keydown", handlePress);
    let autoMove = setInterval(() => {
      if (direction[0] === "ArrowUp") {
        up();
      }
      if (direction[0] === "ArrowDown") {
        down();
      }
      if (direction[0] === "ArrowRight") {
        right();
      }
      if (direction[0] === "ArrowLeft") {
        left();
      }
    }, 100);
    return () => {
      window.removeEventListener("keydown", handlePress);
      clearInterval(autoMove);
    };
  });

  return (
    <>
      <h1>Use buttons</h1>
      <div
        className="Board">
        <div
          className="snake"
          style={{
            transform: `translate(${position.x}px, ${position.y}px)`,
          }}></div>
      </div>
    </>
  );
};
