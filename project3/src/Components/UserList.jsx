/** @format */

import React from "react";
import "./UserList.css";
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
            <li key={user.id - 3}>
              {user.name}, email:{user.email}
            </li>
          </div>
        ))}
      </ul>
      <table className="bg-blue-500 p-3">
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Email</th>
          </tr>
        </thead>
        <tbody>
          {data.map((user) => (
            <tr key={user.id - 2} className="p-5">
              <td key={user.id + 1} className="p-2">
                {user.id}
              </td>
              <td key={user.id + 2} className="p-2">
                {user.name}
              </td>
              <td key={user.id - 1} className="p-2">
                {user.email}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default UserList;
