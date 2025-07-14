export let Food = ({ position }) => {
  return (
    <>
      <div className="Food"


        style={{
          top: `${position.x}%`,
          left: `${position.y}%`
        }}

      ></div>
    </>
  )
}
