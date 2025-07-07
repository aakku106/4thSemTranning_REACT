export let TodoList = ({ showTodoList, deleteTodoList }) => {
  return (
    <ul>
      {showTodoList.map((t, i) =>
        <li key={i}>
          {t}
          <button onClick={() => deleteTodoList(i)}>❌ Delete</button>
        </li>
      )}
    </ul>
  );
};
