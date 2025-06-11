/** @format */

function GroupList() {
  let list = ["cat", "dog", "rat", "cow", "chimp", "graf"];
  list = [];

  return (
    <>
      <ul>
        {/* {list.length === 0 ? <p>No item in List</p> : null} */}
        {list.length === 0 && <p>No item in List</p>}
        {/* // this let us write a concise code */}
        {list.map((i) => (
          <li key={i}>{i}</li>
        ))}
        {/* 
              map function is used differently here we cant use { } at all 
        */}
      </ul>
    </>
  );
}
export default GroupList;
