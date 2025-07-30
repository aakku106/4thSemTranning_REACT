/** @format */

import { useParams } from "react-router-dom";

export let PostDetail = () => {
  const { postId } = useParams();
  return (
    <>
      <h1>Showing Post Details pf Post id: {postId}</h1>
    </>
  );
};
