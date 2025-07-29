/** @format */

import { Outlet } from "react-router-dom";

export let BlogLayout = () => {
  return (
    <div>
      <h1>Blog Section</h1>
      <Outlet />
    </div>
  );
};
