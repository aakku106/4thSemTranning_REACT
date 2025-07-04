/** @format */

import { useState } from "react";
import "./style/style.css";
import { NavBar } from "./Components/navBar.jsx";
import { Body, Greeting } from "./Components/Body.jsx";
import { Footer } from "./Components/Footer.jsx";
import { PlayGround } from "./Components/PlayGround1.jsx";
import { Body2 } from "./Components/Body2.jsx";
import { Body3 } from "./Components/Body3.jsx";

let App = () => {



  return (
    <div className="min-h-screen flex flex-col">
      <NavBar />

      <main className="flex-grow">
        {/* <Body /> */}
        {/*<Body2 />*/}
        <Body3 />
      </main>
      <Footer />
    </div>
  );
};

export default App;
