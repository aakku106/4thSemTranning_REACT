import { useEffect, useState } from "react";
import { Snake } from "./Snake"
import { Food } from "./Food"
import "../../style/Snake.css";

export let SnakeGame = () => {

  let [position, setPosition] = useState({ x: 0, y: 0 });
  let [Fposition, setFPosition] = useState({ x: 50, y: 50 });
  let [direction, setDirecton] = useState([]);
  let [count, setCount] = useState(15);

  useEffect(() => {
    let newPos = { ...position };
    let up = () => {
      newPos.y -= 10;
      setPosition(newPos);
      setDirecton(["ArrowUp", ...direction.slice(0, 1)]);
      // console.log(position);
      // console.log(direction);

      if (position.y === 0) {
        newPos.y = 500;
      }
    };
    let down = () => {
      newPos.y += 10;
      setPosition(newPos);
      setDirecton(["ArrowDown", ...direction.slice(0, 1)]);

      if (position.y === 500) {
        newPos.y = 0;
      }
    };
    let right = () => {
      newPos.x += 10;
      setPosition(newPos);
      setDirecton(["ArrowRight", ...direction.slice(0, 1)]);

      if (position.x === 500) {
        newPos.x = 0;
      }
    };
    let left = () => {
      newPos.x -= 10;
      setPosition(newPos);
      setDirecton(["ArrowLeft", ...direction.slice(0, 1)]);

      if (position.x === 0) {
        newPos.x = 500;
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
      else if (direction[0] === "ArrowDown") {
        down();
      }
      else if (direction[0] === "ArrowRight") {
        right();
      }
      else if (direction[0] === "ArrowLeft") {
        left();
      }
    }, 100);
    return () => {
      window.removeEventListener("keydown", handlePress);
      clearInterval(autoMove);
    };
  });
  useEffect(() => {
    if (position.x === Fposition.x && position.y === Fposition.y) {
      count += 10
      setFPosition({
        x: (Math.floor(Math.random() * 49) + 1) * 10,
        y: (Math.floor(Math.random() * 49) + 1) * 10
      });
    }
  }, [direction]);
  return (
    <>
      <h1>Use buttons</h1>
      <div
        className="Board">
        <Snake position={position} count={count} />
        <Food position={Fposition} />
      </div>
    </>
  );
};
