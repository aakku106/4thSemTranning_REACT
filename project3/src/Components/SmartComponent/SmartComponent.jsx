/** @format */

import React, { useState } from "react";
import DumbComponent from "../DumbComponent/DumbComponent";

function SmartComponent() {
  const [text, setText] = useState("Hello ccn, from smart comp!!");
  const changeMessage = () => {
    setText((prev) =>
      prev === "Hello ccn, from smart comp!!"
        ? "Message has been changed!!"
        : "Hello ccn, from smart comp!!"
    );
  };
  return (
    <div className=" text-zinc-50-400 p-3.5 bg-blue-500 m-2.5 ">
      <DumbComponent message={text} onchange={changeMessage} />
    </div>
  );
}

export default SmartComponent;
