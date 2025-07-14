import { useEffect, useState } from "react";
import { Snake } from "./Snake"
import { Food } from "./Food"
import "../../style/Snake.css";

export let SnakeGame = () => {

  let [position, setPosition] = useState({ x: 0, y: 0 });
  let [Fposition, setFPosition] = useState({ x: 30, y: 60 });
  let [direction, setDirecton] = useState([]);
  let count = 0

  useEffect(() => {
    let newPos = { ...position };
    let RamdomFoodPosition = () => {
      let X = Math.floor(Math.abs(Math.random() * 100))
      let Y = Math.floor(Math.abs(Math.random() * 100))
      console.log("X: ", X, "Y: ", Y, "Count: ", count)
      setFPosition({ x: X, y: Y })
    }
    let checkPosition = () => {
      if (position.x === Fposition.x && position.y === Fposition.y) {
        RamdomFoodPosition();
        count++;
        return
      }
      return
    }
    let up = () => {
      checkPosition()
      newPos.y -= 10;
      setPosition(newPos);
      setDirecton(["ArrowUp", ...direction.slice(0, 1)]);
      //console.log(position);
      //console.log(direction);

      if (position.y === -240) {
        newPos.y = 240;
      }
    };
    let down = () => {
      checkPosition()
      newPos.y += 10;
      setPosition(newPos);
      setDirecton(["ArrowDown", ...direction.slice(0, 1)]);

      if (position.y === 240) {
        newPos.y = -240;
      }
    };
    let right = () => {
      checkPosition()
      newPos.x += 10;
      setPosition(newPos);
      setDirecton(["ArrowRight", ...direction.slice(0, 1)]);

      if (position.x === 240) {
        newPos.x = -240;
      }
    };
    let left = () => {
      checkPosition()
      newPos.x -= 10;
      setPosition(newPos);
      setDirecton(["ArrowLeft", ...direction.slice(0, 1)]);

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

  return (
    <>
      <h1>Use buttons</h1>
      <div
        className="Board">
        <Snake position={position} />
        <Food position={Fposition} />
      </div>
    </>
  );
};
