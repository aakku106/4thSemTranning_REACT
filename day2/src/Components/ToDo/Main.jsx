import { useState } from "react";
import { TodoForm } from "./Form.jsx";
import { TodoList } from "./List.jsx";
import "./style.css";

export let TODO = () => {
  let [todo, setTodo] = useState([]);
  let [tempVal, setTempVal] = useState("");
  let [editingIndex, setEditingIndex] = useState(-1);

  let addTodo = () => {
    if (tempVal.trim() !== "") {
      if (editingIndex >= 0) {
        let updatedTodos = [...todo];
        updatedTodos[editingIndex] = tempVal;
        setTodo(updatedTodos);
        setEditingIndex(-1);
      } else {
        setTodo([...todo, tempVal]);
      }
      setTempVal("");
    }
  };

  let deleteTodo = (index) => {
    setTodo(todo.filter((_, i) => i !== index));
    if (editingIndex === index) {
      setEditingIndex(-1);
      setTempVal("");
    }
  };

  let startEdit = (index) => {
    setEditingIndex(index);
    setTempVal(todo[index]);
  };

  let cancelEdit = () => {
    setEditingIndex(-1);
    setTempVal("");
  };

  return (
    <div className="todo-container">
      <h1 className="todo-title">CCN's ToDoApp</h1>
      <TodoForm
        add={addTodo}
        setTempVal={setTempVal}
        tempVal={tempVal}
        isEditing={editingIndex >= 0}
        cancelEdit={cancelEdit}
      />
      <TodoList
        showTodoList={todo}
        deleteTodoList={deleteTodo}
        startEdit={startEdit}
        editingIndex={editingIndex}
      />
    </div>
  );
};
