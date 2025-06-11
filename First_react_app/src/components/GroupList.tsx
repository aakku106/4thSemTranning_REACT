/** @format */
interface Props {
  list: string[];
  heading: string;
}

import { useState } from "react";

function GroupList(Props: Props) {
  // list = [];
  // hook : state hook
  const [sleetedIndex, setSelectedIndex] = useState(-1);
  return (
    <>
      <h1>{Props.heading}</h1>
      <ul>
        {/* {list.length === 0 ? <p>No item in List</p> : null} */}
        {Props.list.length === 0 && <p>No item in List</p>}
        {/* // this let us write a concise code */}
        {Props.list.map((item, index) => (
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
