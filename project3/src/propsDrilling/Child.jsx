/** @format */

import React from "react";
import GrandChild from "./GrandChild";

function Child({ message }) {
  return (
    <div>
      <h1>child</h1>
      <GrandChild message={message} />
    </div>
  );
}

export default Child;
