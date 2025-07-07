import { useState } from "react";
import { TodoForm } from "./Form.jsx";
import { TodoList } from "./List.jsx";

export let TODO = () => {
  let [todo, setTodo] = useState([]);
  let [tempVal, setTempVal] = useState("");

  let addTodo = () => {
    if (tempVal.trim() !== "") {
      setTodo([...todo, tempVal]);
      setTempVal("");
    }
  };

  let deleteTodo = (index) => {
    setTodo(todo.filter((_, i) => i !== index));
  };

  return (
    <>
      <h1>CCN's ToDoApp</h1>

      <TodoForm add={addTodo} setTempVal={setTempVal} />
      <TodoList showTodoList={todo} deleteTodoList={deleteTodo} />
    </>
  );
};
