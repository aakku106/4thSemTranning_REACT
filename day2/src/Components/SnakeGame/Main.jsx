/** @format */

import { useEffect, useState } from "react";
import { Snake } from "./Snake";
import { Food } from "./Food";
import "../../style/snake.css";

export let SnakeGame = () => {
  let [position, setPosition] = useState({ x: 200, y: 200 });
  let [Fposition, setFPosition] = useState({ x: 50, y: 50 });
  let [direction, setDirecton] = useState([]);
  let [snake, setSnake] = useState([{ x: 200, y: 200 }]);

  useEffect(() => {
    let up = () => {
      setPosition((prev) => {
        let newPos = { ...prev };
        newPos.y -= 10;
        if (newPos.y < 0) newPos.y = 500;
        return newPos;
      });
      setDirecton((prev) => ["ArrowUp", ...prev.slice(0, 1)]);
      setSnake((prev) => [position, ...prev.slice(0, -1)]);
    };
    let down = () => {
      setPosition((prev) => {
        let newPos = { ...prev };
        newPos.y += 10;
        if (newPos.y > 500) newPos.y = 0;
        return newPos;
      });
      setDirecton((prev) => ["ArrowDown", ...prev.slice(0, 1)]);
      setSnake((prev) => [position, ...prev.slice(0, -1)]);
    };
    let left = () => {
      setPosition((prev) => {
        let newPos = { ...prev };
        newPos.x -= 10;
        if (newPos.x < 0) newPos.x = 500;
        return newPos;
      });
      setDirecton((prev) => ["ArrowLeft", ...prev.slice(0, 1)]);
      setSnake((prev) => [position, ...prev.slice(0, -1)]);
    };
    let right = () => {
      setPosition((prev) => {
        let newPos = { ...prev };
        newPos.x += 10;
        if (newPos.x > 500) newPos.x = 0;
        return newPos;
      });
      setDirecton((prev) => ["ArrowRight", ...prev.slice(0, 1)]);
      setSnake((prev) => [position, ...prev.slice(0, -1)]);
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
      } else if (direction[0] === "ArrowDown") {
        down();
      } else if (direction[0] === "ArrowRight") {
        right();
      } else if (direction[0] === "ArrowLeft") {
        left();
      }
    }, 100);
    return () => {
      window.removeEventListener("keydown", handlePress);
      clearInterval(autoMove);
    };
  }, [direction]);
  useEffect(() => {
    if (position.x === Fposition.x && position.y === Fposition.y) {
      setFPosition({
        x: (Math.floor(Math.random() * 49) + 1) * 10,
        y: (Math.floor(Math.random() * 49) + 1) * 10,
      });
      setSnake((prev) => [...prev, { ...prev[prev.length - 1] }]);
    }
  }, [position]);
  useEffect(() => {
    const head = snake[0];
    const body = snake.slice(1);
    for (let segment of body) {
      if (segment.x === head.x && segment.y === head.y) {
        console.log("Game Over! Snake ate itself 🐍💀");
        window.location.reload(true);
        break;
      }
    }
  }, [position]);
  return (
    <>
      <div className="Board">
        <Snake snake={snake} />
        <Food position={Fposition} />
      </div>
    </>
  );
};
