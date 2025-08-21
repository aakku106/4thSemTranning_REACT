/** @format */

import React, { useEffect, useState } from "react";
// import { data } from "react-router-dom";

function FetchUsers() {
  const [user, setUser] = useState([]);
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((responce) => responce.json())
      .then((data) => setUser(data))
      .catch((error) => console.log("Error fetching users:", error));
  });
  return (
    <div>
      <h1>Fetch USers</h1>
      <ul>
        {user.map((data, index) => (
          <li key={index}>
            The name is: {data.name}
            where i live ?? {data.address.street}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default FetchUsers;
