/** @format */

import axios from "axios";
import React, { useEffect, useState } from "react";
// import { tr } from "zod/v4/locales";

function AxiosPost() {
  const [post, setPost] = useState([]);
  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/posts") // APi call
      .then((response) => {
        setPost(response.data);
      }) // Don't need to convert to json
      .catch((error) => {
        console.log("Error occurred: ", error);
      }); // Error handling
  }, []);

  const handleDelete = (id) => {
    setPosts(posts.filter((post) => post.id !== id));
  };

  return (
    <div>
      <h1>AxiosPost</h1>
      {/* <ul>
        {post.map((data) => (
          <li key={data.id}> {data.title} </li>
        ))}
      </ul> */}
      <table
        style={{
          textAlign: "center",
        }}>
        <thead>
          <tr>
            <th>UserID</th>
            <th>ID</th>
            <th>Title</th>
            <th>DELETE</th>
          </tr>
        </thead>
        <tbody>
          {post.map((data, index) => (
            <tr key={index}>
              <td> {data.userId}</td>
              <td>{data.id}</td>
              <td>{data.title}</td>
              <td> </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default AxiosPost;
