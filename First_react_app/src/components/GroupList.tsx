/** @format */

function GroupList() {
  let list = ["cat", "dog", "rat", "cow", "chimp", "graf"];
  // list = [];

  return (
    <>
      <ul>
        {/* {list.length === 0 ? <p>No item in List</p> : null} */}
        {list.length === 0 && <p>No item in List</p>}
        {/* // this let us write a concise code */}
        {list.map((item, index) => (
          <li
            key={item}
            onClick={(event) => console.log(item, index, "\n", event)}
            className="ccn">
            {item}
          </li>
        ))}
        {/* 
              map function is used differently here we cant use { } at all 
        */}
      </ul>
    </>
  );
}
export default GroupList;
