export let TodoForm = ({ add, setTempVal }) => {
  return (
    <div className="form-wrapper">
      <input
        type="text"
        className="todo-input"
        placeholder="Enter Task"
        onChange={(e) => setTempVal(e.target.value)}
      />
      <input
        type="button"
        className="todo-button"
        value="Enter"
        onClick={add}
      />
    </div>
  );
};
