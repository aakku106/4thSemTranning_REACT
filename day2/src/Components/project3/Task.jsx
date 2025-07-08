import { useState } from "react";

export let Task = () => {
  const [cord, setCord] = useState({ x: 50, y: 50 });

  function Move(e) {
    setCord({ x: e.clientX, y: e.clientY });
  }

  return (
    <div
      onPointerMove={Move}
      style={{
        position: "relative",
        width: "100vw",
        height: "100vh",
        overflow: "hidden",
        pointerEvents: " none !important",
        cursor: 'none'
      }}
    >
      <div
        className="control"
        style={{
          position: "absolute",
          top: `${cord.y}px`,
          left: `${cord.x}px`,
        }}
      ></div>
    </div >
  );
};
