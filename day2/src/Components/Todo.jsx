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

  const [filter, Filter] = useState("all");
  const [searchText, SearchText] = useState("");

  const filteredData = data
    .filter((todo) => {
      if (filter === "done") return todo.status === true;
      if (filter === "pending") return todo.status === false;
      return true;
    })
    .filter((todo) =>
      todo.text.toLowerCase().includes(searchText.toLowerCase())
    );

  return (
    <>
      <input
        type="text"
        placeholder="Search task..."
        value={searchText}
        onChange={(e) => SearchText(e.target.value)}
        style={{ marginBottom: "1rem", padding: "5px" }}
      />

      <div style={{ marginBottom: "1rem" }}>
        <button onClick={() => Filter("all")}>Show All 📃</button>
        <button onClick={() => Filter("done")}>Completed ✅</button>
        <button onClick={() => Filter("pending")}>Pending ❌</button>
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
