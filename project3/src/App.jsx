/** @format */

import { useEffect, useRef, useState } from "react";
import { NavBar } from "./Components/NavBar";
import { Route, Router, Routes } from "react-router-dom";
import { Post } from "./Pages/Blog/Posts";
import { BlogLayout } from "./Pages/Blog/BlogLayout";
import { PostDetail } from "./Pages/Blog/PostDetail";
import DashBoardLayout from "./Pages/Dashboard/DashBoardLayout";
import Analytics from "./Pages/Dashboard/Analytics";
import SettingLayout from "./Pages/Dashboard/Settings/SettingLayout";
import User from "./Pages/Dashboard/Settings/User";
import Admin from "./Pages/Dashboard/Settings/Admin";
import Contact from "./Pages/Contact/Contact";
import ContactLayout from "./Pages/Contact/Contactlayout";
import Contactdetails from "./Pages/Contact/Contactdetails";
import Parent from "./propsDrilling/Parent";
function App() {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/blog" element={<BlogLayout />}>
          <Route index element={<Post />} />
          <Route path=":postId" element={<PostDetail />} />
        </Route>
        {/* ---------------------------------------------------- */}

        <Route path="/contact" element={<ContactLayout />}>
          <Route index element={<Contact />} />
          <Route path=":contactId" element={<Contactdetails />} />
        </Route>

        {/* --------------------------------------------------------------- */}
        <Route path="/dashboard" element={<DashBoardLayout />}>
          <Route path="analytics" element={<Analytics />} />
          <Route path="settings" element={<SettingLayout />} />
          <Route path="user" element={<User />} />
          <Route path="admin" element={<Admin />} />
        </Route>
      </Routes>
      {/* props drilling  */}
      <Parent />
      {/* react flow/ nested react component */}
      {/* props drilling  */}
      {/* Next: Component reUsability */}
    </>
  );
}

export default App;
