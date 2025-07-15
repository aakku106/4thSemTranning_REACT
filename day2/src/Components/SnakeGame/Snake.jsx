export let Snake = ({ snake }) => {
  return (
    <>
      {snake.map((val, index) => (
        <div
          className="snake"
          key={index}
          style={{
            top: `${val.y}px`,
            left: `${val.x}px`,
          }}
        >
          orewSnake
        </div>
      ))}
    </>
  );
};
