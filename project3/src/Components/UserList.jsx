/** @format */

import React from "react";
import useFetch from "../hooks/useFetch";
import User from "../Pages/Dashboard/Settings/User";

function UserList() {
  const { data, loading } = useFetch(
    "https://jsonplaceholder.typicode.com/users"
  );
  if (loading) {
    return <div>Loading....</div>;
  }
  return (
    <div className="bg-black p-10">
      <ul>
        {data.map((user) => (
          <div className="bg-amber-300 p-2 m-2">
            <li key={user.id}>
              {user.name}, email:{user.email}
            </li>
          </div>
        ))}
      </ul>
      <table>
        <tr>
          <th>ID</th>
          <th>Name</th>
          <th>Email</th>
        </tr>
        {data.map((user) => (
          <tr>
            <td>{user.id}</td>
            <td>{user.name}</td>
            <td>{user.email}</td>
          </tr>
        ))}
      </table>
    </div>
  );
}

export default UserList;
