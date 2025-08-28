/** @format */

import React, { useEffect, useState } from "react";
import axios from "axios";

function ToDos() {
  const [todos, setTodos] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchTodos = async () => {
      try {
        setIsLoading(true);
        setError(null);
        const response = await axios.get(
          "https://jsonplaceholder.typicode.com/todos"
        );
        setTodos(response.data.slice(0, 10));
      } catch (error) {
        setError("Error while fetching");
        console.error("error fetching todos", error);
      } finally {
        setIsLoading(false);
      }
    };
    fetchTodos(); // calling the async function
  }, []);

  const deleteTodo = async (id) => {
    try {
      await axios.delete(`https://jsonplaceholder.typicode.com/todos/${id}`);
      setTodos(todos.filter((todo) => todo.id !== id));
    } catch (error) {
      console.error("error deleting todos", error);
      setError("Can't delete todo");
    }
  };

  return (
    <>
      <h1>Todo using useEffect async</h1>
      {isLoading && (
        <>
          <p>Loading...</p>
          {console.log("loading vairahxa")}
        </>
      )}
      {error && <p style={{ color: "red" }}>{error}</p>}
      {!isLoading && !error && (
        <ul>
          {todos.map((todo) => (
            <li key={todo.id}>
              <span>{todo.title}</span>
              <button
                onClick={() => {
                  deleteTodo(todo.id);
                }}>
                Delete
              </button>
            </li>
          ))}
        </ul>
      )}
    </>
  );
}

export default ToDos;
