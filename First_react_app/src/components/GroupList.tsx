/** @format */

import { useState } from "react";

function GroupList() {
  // list = [];
  let list = ["cat", "dog", "rat", "cow", "chimp", "graf"];
  // hook : state hook
  const [sleetedIndex, setSelectedIndex] = useState(-1);
  return (
    <>
      <ul>
        {/* {list.length === 0 ? <p>No item in List</p> : null} */}
        {list.length === 0 && <p>No item in List</p>}
        {/* // this let us write a concise code */}
        {list.map((item, index) => (
          <li
            key={item}
            onClick={() => {
              setSelectedIndex(index);
            }}
            className={sleetedIndex === index ? "active" : "null"}>
            {item}
          </li>
        ))}
        {/* 
              map function is used differently here we cant use { } at all 
        */}
      </ul>
    </>
  );
}
export default GroupList;
