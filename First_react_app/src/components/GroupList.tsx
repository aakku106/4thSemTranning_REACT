/** @format */
interface Props {
  list: string[];
  heading: string;
}

import { useState } from "react";

function GroupList({ list, heading }: Props) {
  // list = [];
  // hook : state hook
  const [sleetedIndex, setSelectedIndex] = useState(-1);
  return (
    <>
      <h1>{heading}</h1>
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
