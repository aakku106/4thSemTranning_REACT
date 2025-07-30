/** @format */

import React from "react";
import { Link } from "react-router-dom";

function SettingLayout() {
  return (
    <div>
      <h2>setting Layout</h2>
      <nav>
        <Link to={"user"}>User</Link>
        <Link to={"admin"}>Admin</Link>
      </nav>
    </div>
  );
}

export default SettingLayout;
