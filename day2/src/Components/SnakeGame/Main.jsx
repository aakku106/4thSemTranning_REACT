import { useEffect, useState } from "react";
import { Snake, up, down, left, right } from "./Movments"
import "../../style/Snake.css";
export let SnakeGame = () => {
  let [position, setPosition] = useState({ x: 0, y: 0 });
  let [direction, setDirecton] = useState([]);
  let newPos = { ...position };
  useEffect(() => {
    function handlePress(e) {
      if (e.key === "ArrowUp" && direction[0] !== "ArrowDown") {
        up(position, setPosition, direction, setDirecton);
      } else if (e.key === "ArrowDown" && direction[0] !== "ArrowUp") {
        down(position, setPosition, direction, setDirecton);
      } else if (e.key === "ArrowRight" && direction[0] !== "ArrowLeft") {
        right(position, setPosition, direction, setDirecton);
      } else if (e.key === "ArrowLeft" && direction[0] !== "ArrowRight") {
        left(position, setPosition, direction, setDirecton);
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
      <div
        className="Board">
        <Snake Position={position} SetPosition={setPosition} />
      </div>
    </>
  );
};
