export let TodoList = ({
  showTodoList,
  deleteTodoList,
  startEdit,
  editingIndex,
}) => {
  return (
    <ul className="todo-list">
      {showTodoList.map((t, i) => (
        <li
          key={i}
          className={`todo-item ${editingIndex === i ? "editing" : ""}`}>
          <span className="todo-text">{t}</span>
          <div className="action-buttons">
            <button
              className="edit-button"
              onClick={() => startEdit(i)}
              disabled={editingIndex >= 0}>
              ✏️ Edit
            </button>
            <button className="delete-button" onClick={() => deleteTodoList(i)}>
              ❌ Delete
            </button>
          </div>
        </li>
      ))}
    </ul>
  );
};
