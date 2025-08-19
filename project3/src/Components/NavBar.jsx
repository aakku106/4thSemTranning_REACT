/** @format */

import { Link } from "react-router-dom";

export const NavBar = () => {
  return (
    <nav>
      <Link to="/">Home</Link>
      <Link to="/about">About</Link>
      <Link to="/blog">Blog</Link>
      <Link to="/dashBoard">Dashboard</Link>
      <Link to="/contact">Contact</Link>
      <Link to="/ecom">Ecom</Link>
    </nav>
  );
};
