import { newPos } from "./Main.jsx"

export let up = ({ position, setPosition, direction, setDirecton }) => {
  newPos.y -= 10;
  setPosition(newPos);
  setDirecton(["ArrowUp", ...direction.slice(0, 1)]);
  console.log(position);
  console.log(direction);

  if (position.y === -240) {
    newPos.y = 240;
  }
};
export let down = () => {
  newPos.y += 10;
  setPosition(newPos);
  setDirecton(["ArrowDown", ...direction.slice(0, 1)]);
  console.log(position);
  console.log(direction);

  if (position.y === 240) {
    newPos.y = -240;
  }
};
export let right = () => {
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
export let left = () => {
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

export let Snake = ({ Position, SetPosition }) => {
  return (
    <>
      <div
        className="snake"
        style={{
          transform: `translate(${SetPosition.x}px, ${SetPosition.y}px)`,
        }}></div>
    </>
  )
}
