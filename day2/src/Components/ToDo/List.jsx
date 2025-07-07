export let TodoList = ({ showTodoList, deleteTodoList }) => {
  return (
    <ul className="todo-list">
      {showTodoList.map((t, i) => (
        <li key={i} className="todo-item">
          <span className="todo-text">{t}</span>
          <button className="delete-button" onClick={() => deleteTodoList(i)}>
            ❌ Delete
          </button>
        </li>
      ))}
    </ul>
  );
};
