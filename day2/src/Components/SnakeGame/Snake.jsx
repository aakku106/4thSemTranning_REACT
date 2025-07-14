export let Snake = ({ position }) => {
  return (
    <>
      <div
        className="snake"
        style={{
          transform: `translate(${position.x}px, ${position.y}px)`,
        }}></div>
    </>
  )
}
