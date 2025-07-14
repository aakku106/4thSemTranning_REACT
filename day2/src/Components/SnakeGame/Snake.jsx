export let Snake = ({ position, count }) => {
  return (
    <>
      <div
        className="snake"
        style={{
          // transform: `translate(${position.x}px, ${position.y}px)`,
          width: `${count}px`,
          top: `${position.y}px`,
          left: `${position.x}px`
        }}></div>
    </>
  )
}
