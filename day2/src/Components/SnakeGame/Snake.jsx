export let Snake = ({ position, count, direction }) => {
  return (
    <>
      <div
        className="snake"
        style={{
          // transform: `translate(${position.x}px, ${position.y}px)`,
          width: `${count}px`,
          top: `${position.y}px`,
          left: `${position.x}px`,
          transform: `rotate(${direction[0] === "ArrowDown" ? "-90gec" : direction[0] === "ArrowUp" ? "90deg" : direction[0] === "ArrowLeft" ? "0deg" : "180deg"})`
        }}></div>
    </>
  )
}
