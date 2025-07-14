export let Food = ({ position }) => {
  return (
    <>
      <div className="Food"


        style={{

          transform: `translate(${position.x}px,${position.y})`
        }}

      ></div>
    </>
  )
}
