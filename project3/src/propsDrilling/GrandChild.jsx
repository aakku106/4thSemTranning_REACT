/** @format */

import React from "react";
import GreatGrandChild from "./GreatGrandChild";

function GrandChild({ message }) {
  return (
    <div>
      <h1>Grand child</h1>
      <p>
        Message: <span>{message}</span>{" "}
      </p>
      <GreatGrandChild message={message} />
    </div>
  );
}

export default GrandChild;
