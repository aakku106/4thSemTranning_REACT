import { useEffect, useState } from "react"

export let KeyMove = () => {
  let [position, setPosition] = useState({ x: 0, y: 0 })
  useEffect(() => {
    function handlePress(e) {
      let newPos = { ...position }
      if (e.key === "ArrowUp") {
        newPos.y -= 10;
        setPosition(newPos);
        console.log(position);
        if (position.y === -240) {
          newPos.y = 240
        }
      } else if (e.key === "ArrowDown") {
        newPos.y += 10
        setPosition(newPos);
        if (position.y === 240) {
          newPos.y = -240
        }
      }
      else if (e.key === "ArrowRight") {
        newPos.x += 10;
        setPosition(newPos)
        console.log(position);
        if (position.x === 240) {
          newPos.x = -240
        }
      }
      else if (e.key === "ArrowLeft") {
        newPos.x -= 10
        setPosition(newPos)
        console.log(position);
        if (position.x === -240) {
          newPos.x = 240
        }
      }
    }

    let autoMove = setInterval(() => {

      handlePress

    }, 600)


    window.addEventListener("keydown", handlePress);
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
