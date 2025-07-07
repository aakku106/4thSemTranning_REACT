export let TodoForm = ({ add, setTempVal, tempVal, isEditing, cancelEdit }) => {
  return (
    <div className="form-wrapper">
      <input
        type="text"
        className="todo-input"
        placeholder={isEditing ? "Update Task" : "Enter Task"}
        value={tempVal}
        onChange={(e) => setTempVal(e.target.value)}
      />
      <div className="button-group">
        <input
          type="button"
          className={`todo-button ${isEditing ? "update-button" : ""}`}
          value={isEditing ? "Update" : "Add"}
          onClick={add}
        />
        {isEditing && (
          <input
            type="button"
            className="todo-button cancel-button"
            value="Cancel"
            onClick={cancelEdit}
          />
        )}
      </div>
    </div>
  );
};
