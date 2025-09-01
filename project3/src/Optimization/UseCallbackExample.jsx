/** @format */

// memoize the function, protect function to bw re-rendered  each time

import React from "react";

const UseButton = React.memo(({ onClick, children }) => {
  console.log("Rendering button:", children);
  return (
    <button className="p-2 bg-blue-500 text-white rounded" onClick={onClick}>
      {children}
    </button>
  );
});

export default function UseCallbackExample() {
  const [user] = React.useState(["user1", "user2", "user3"]);
  const handleClick = (name) => {
    alert(`Hello, ${name}`);
  };
  return (
    <div>
      {user.map((name) => (
        <UseButton key={name} onClick={() => handleClick(name)}>
          {name}
        </UseButton>
      ))}
    </div>
  );
}
