/** @format */

import React from "react";
import Child from "./Child";

function Parent() {
  const message = "this is from parent to its great-grand-childrens";
  return (
    <div>
      <h1>Parent</h1>
      <Child message={message}></Child>
    </div>
  );
}

export default Parent;
