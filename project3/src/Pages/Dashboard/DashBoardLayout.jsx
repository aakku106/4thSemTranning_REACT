/** @format */

import React from "react";
import { Link } from "react-router-dom";

function DashBoardLayout() {
  return (
    <div>
      <h2>Admin Dashboard</h2>
      <nav>
        <Link to={"analytics"}>Analytics</Link>
        <Link to={"setting"}>Setting</Link>
      </nav>
    </div>
  );
}

export default DashBoardLayout;
