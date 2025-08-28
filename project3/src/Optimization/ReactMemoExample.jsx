/** @format */

import React, { useEffect, useState } from "react";

const User = React.memo(({ user }) => {
  console.log(`rendering user : ${user.name} `); // will only log when the user prop changes
  return <div>UserName: {user.name}</div>;
});

function ReactMemoExample() {
  const [user, setUser] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((Response) => Response.json())
      .then((data) => setUser(data));
  }, []);

  const filteredUsers = user.filter((user) =>
    user.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <>
      <h1>React Memo example </h1>
      <input
        type="text"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      {filteredUsers.map((user) => (
        <User key={user.id} user={user} />
      ))}
    </>
  );
}

export default ReactMemoExample;
