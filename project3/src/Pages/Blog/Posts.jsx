/** @format */

import { Link } from "react-router-dom";

export let Post = () => {
  const posts = [
    { id: 1, title: "this is post 1" },
    { id: 2, title: "this is post 2" },
    { id: 3, title: "this is post 3" },
    { id: 4, title: "this is post 4" },
    { id: 5, title: "this is post 5" },
  ];
  return (
    <ul>
      {posts.map((post) => (
        <li key={post.id}>
          <Link to={`${post.id}`}>{post.title}</Link>
        </li>
      ))}
    </ul>
  );
};
