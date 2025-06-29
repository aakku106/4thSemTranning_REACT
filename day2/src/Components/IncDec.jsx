import React, { useState } from "react";

export const Calc = () => {
  const [count, setCount] = useState(106);
  console.log(setCount)

  return (
    <>
      <p className="text-center">{count}</p>
      <div className="text-center ">
        <button onClick={async () => (
          console.log(count),
          setCount(count + 1),
          console.log(count),
          setCount(count + 1),
          console.log(count),
          setCount(count + 1),
          setTimeout(() => {
            console.log("wee" + count)
          }, 500))}>
          Add</button>
        <button onClick={async () => (
          console.log(count),
          setCount(prev => prev + 1),
          console.log(count),
          setCount(prev => prev + 1),
          console.log(count)
        )}>
          Addwee</button>
        <button onClick={() => setCount(count - 1)}>Sub</button>
        <button onClick={() => setCount(106)}>Reset</button>
      </div >
    </>
  );
};
