export let Food = ({ position }) => {
  return (
    <>
      <div
        className="Food"
        style={{
          top: `${position.y}px`,
          left: `${position.x}px`,
        }}></div>
    </>
  );
};
