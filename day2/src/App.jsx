/** @format */

import { useState } from "react";
import "./style/style.css";
import { NavBar } from "./Components/navBar.jsx";
import { Body, Greeting } from "./Components/Body.jsx";
import { Footer } from "./Components/Footer.jsx";

let App = () => {
  return (
    <>
      <NavBar />
      <Body />
      <Footer />
    </>
  );
};

export default App;
