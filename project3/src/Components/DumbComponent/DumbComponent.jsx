/** @format */

import React from "react";

function DumbComponent({ message, onchange }) {
  return (
    <>
      <h2>Dumb</h2>
      <h2>{message}</h2>
      <button className="p-5 bg-amber-600 " onClick={onchange}>
        Change Message{" "}
      </button>
    </>
  );
}

export default DumbComponent;
