/** @format */

import { useEffect, useRef, useState } from "react";
import { NavBar } from "./Components/NavBar";
import { Route, Router, Routes } from "react-router-dom";
import { Post } from "./Pages/Blog/Posts";
import { BlogLayout } from "./Pages/Blog/BlogLayout";
function App() {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/blog" element={<BlogLayout />}></Route>
        <Route index element={<Post />}></Route>
      </Routes>
    </>
  );
}

export default App;
