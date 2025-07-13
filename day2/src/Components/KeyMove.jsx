import { useEffect, useState } from "react"

export let KeyMove = () => {
  let [position, setPosition] = useState({ x: 50, y: 50 })
  useEffect(() => {
    function handlePress(e) {
      let newPos = { ...position }
      if (106) {
        if (e.key === "ArrowUp") {
          console.log(e.key);
          newPos.y -= 30;
          setPosition(newPos);
        }
        else if (e.key === "ArrowDown") {
          console.log(e.key)
          newPos.y += 30
          setPosition(newPos)
        }
        else if (e.key === "ArrowRight") {
          newPos.x += 30;
          setPosition(newPos)
        }
        else if (e.key === "ArrowLeft") {
          newPos.x -= 30
          setPosition(newPos)
        }
      }
    }
    window.addEventListener("keydown", handlePress);
    return () => {
      window.removeEventListener("keydown", handlePress)
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
          height: "1rem",
          width: "1rem",
          backgroundColor: "blue",
          position: "absolute",
          top: `50%`,
          left: `50%`,
          transform: `translate(${position.x}%, ${position.y}%)`,
        }}
      ></div>
    </div >
  </>)
}
