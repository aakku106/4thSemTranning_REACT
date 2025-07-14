export let Food = ({ position }) => {
  return (
    <>
      <div className="Food"
        style={{
          top: `${position.x}px`,
          left: `${position.y}px`
        }}
      ></div>
    </>
  )
}
