import { useEffect, useState } from "react"

export let KeyMove = () => {
  let [position, setPosition] = useState({ x: 0, y: 0 })
  let [direction, setDirecton] = useState("")

  useEffect(() => {
    let newPos = { ...position }
    let up = () => {
      newPos.y -= 10;
      setPosition(newPos);
      console.log(position);
      setDirecton("ArrowUp")
      if (position.y === -240) {
        newPos.y = 240
      }
    }
    let down = () => {
      newPos.y += 10
      setPosition(newPos);
      setDirecton("ArrowDown")
      if (position.y === 240) {
        newPos.y = -240
      }
    }
    let right = () => {
      newPos.x += 10;
      setPosition(newPos)
      console.log(position);
      setDirecton("ArrowRight")
      if (position.x === 240) {
        newPos.x = -240
      }
    }
    let left = () => {
      newPos.x -= 10
      setPosition(newPos)
      console.log(position);
      setDirecton("ArrowLeft")
      if (position.x === -240) {
        newPos.x = 240
      }

    }
    function handlePress(e) {
      if (e.key === "ArrowUp") {
        up()
      } else if (e.key === "ArrowDown") {
        down()
      }
      else if (e.key === "ArrowRight") {
        right()
      }
      else if (e.key === "ArrowLeft") {
        left()
      }
    }
    window.addEventListener("keydown", handlePress);
    let autoMove = setInterval(() => {
      if (direction === "ArrowUp") { up() }
      if (direction === "ArrowDown") { down() }
      if (direction === "ArrowRight") { right() }
      if (direction === "ArrowLeft") { left() }
    }, 100)
    return () => {
      window.removeEventListener("keydown", handlePress)
      clearInterval(autoMove);
    }
  })



  return (<>
    <h1>Use buttons</h1>
    <div style={{
      height: "500px",
      width: "500px",
      backgroundColor: "tan",
      position: "relative"
    }}
    >
      <div
        className="snake"
        style={{
          height: "10px",
          width: "10px",
          backgroundColor: "blue",
          position: "absolute",
          top: `50%`,
          left: `50%`,
          transform: `translate(${position.x}px, ${position.y}px)`,
        }}
      ></div>
    </div >
  </>)
}
