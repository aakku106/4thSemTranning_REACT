import { useState } from "react";

export let Todo = () => {
  const data = [
    { id: 1, text: "laern ccn", status: false },
    { id: 2, text: "Learn react", status: true },
    { id: 3, text: "laern js", status: false },
    { id: 4, text: "laern C#", status: true },
    { id: 5, text: "laern weee", status: false },
    { id: 6, text: "laern cat", status: true },
  ];

  const [filter, setFilter] = useState("all");

  const filteredData = data.filter((todo) => {
    if (filter === "done") return todo.status === true;
    if (filter === "pending") return todo.status === false;
    return true;
  });

  return (
    <>
      <div style={{ marginBottom: "1rem" }}>
        <button onClick={() => setFilter("all")}>Show All 📃</button>
        <button onClick={() => setFilter("done")}>Completed ✅</button>
        <button onClick={() => setFilter("pending")}>Pending ❌</button>
      </div>

      <ul>
        {filteredData.map((value) => (
          <li key={value.id}>
            {value.text} {value.status ? "✅" : "❌"}
          </li>
        ))}
      </ul>
    </>
  );
};
