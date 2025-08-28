/** @format */

/** @format */

import axios from "axios";
import React, { useEffect, useState } from "react";

function Comments() {
  const [email, setEmail] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetch = async () => {
      try {
        setLoading(true);
        setError(null);
        const response = await axios.get(
          "https://jsonplaceholder.typicode.com/comments"
        );
      } catch (error) {
        setError("Error while fetching api");
      } finally {
        setLoading(false);
      }
    };
    fetch();
  }, []);

  return (
    <>
      <h1>Comments from email</h1>
      <section>
        {error && <p className="text-red-500"> {error}</p>}
        {loading && <p className="text-green-500">Loading...</p>}
      </section>
    </>
  );
}

export default Comments;
