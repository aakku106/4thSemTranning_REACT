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
            The name is: <b>{data.name}</b>
            where i live ?? <b>{data.address.street}</b>
            wot i Do ?? :<b>{data.phone}</b>
            where i work ??? : <b>{data.company.name}</b>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default FetchUsers;
