/** @format */

import React, { useState } from "react";

export const Calc = () => {
  const [count, setCount] = useState(0);

  return (
    <>
      <p className="text-center">{count}</p>
      <div className="text-center ">
        <button onClick={() => setCount(count + 1)}>Add</button>
        <button onClick={() => setCount(count - 1)}>Sub</button>
        <button onClick={() => setCount(0)}>Reset</button>
      </div>
    </>
  );
};
