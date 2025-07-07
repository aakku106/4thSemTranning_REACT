/** @format */

import { useState } from "react";
import { Child } from "./Child.jsx";

export let Parent = () => {
  let [count, setCount] = useState(0);
  let updater = () => {
    setCount(count + 1)
  }
  return (
    <>
      <div>
        <h2>Count: {count}</h2>
        <Child SetCount={updater} />
      </div>
    </>
  );
};
