/** @format */
import GroupList from "./components/GroupList";
function App() {
  let list = ["cat", "dog", "rat", "cow", "chimp", "graf"];

  return (
    <>
      <GroupList list={list} heading="Animals" />
    </>
  );
}
export default App;
