export let TodoForm = ({ add, setTempVal }) => {

  return (
    <>
      <input
        type="text"
        placeholder="Enter Task"
        onChange={(e) => {
          setTempVal(`${e.target.value}`)
        }}
      />
      <input
        type="button"
        value="Enter"
        onClick={() => {
          add()
        }}
      />
    </>
  );
};
