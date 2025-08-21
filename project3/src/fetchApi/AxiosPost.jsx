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
  return (
    <div>
      <h1>AxiosPost</h1>
      <ul>
        {post.map((data) => (
          <li key={data.id}> {data.title} </li>
        ))}
      </ul>
      <table
        style={{
          textAlign: "center",
        }}>
        <thead>
          <tr>
            <th>UserID</th>
            <th>ID</th>
            <th>Title</th>
          </tr>
        </thead>
        <tbody>
          {post.map((data, index) => (
            <tr key={index}>
              <td key={index}> {data.userId}</td>
              <td key={index}>{data.id}</td>
              <td key={index}>{data.title}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default AxiosPost;
