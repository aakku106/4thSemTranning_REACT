export let Snake = ({ position, count, direction, snake }) => {
  return (
    <>
      {
        snake.map((val, index) => {
          <div
            className="snake"
            key={index}
            style={{
              width: `${count}px`,
              top: `${position.y}px`,
              left: `${position.x}px`,
              transform: `rotate(${direction[0] === "ArrowDown" ? "-90deg" : direction[0] === "ArrowUp" ? "90deg" : direction[0] === "ArrowLeft" ? "0deg" : "180deg"})`
            }} ></div>
        })
      }
      <div
        className="snake"
        style={{
          // transform: `translate(${position.x}px, ${position.y}px)`,
          width: `${count}px`,
          top: `${position.y}px`,
          left: `${position.x}px`,
          transform: `rotate(${direction[0] === "ArrowDown" ? "-90deg" : direction[0] === "ArrowUp" ? "90deg" : direction[0] === "ArrowLeft" ? "0deg" : "180deg"})`
        }}></div>
    </>
  )
}
