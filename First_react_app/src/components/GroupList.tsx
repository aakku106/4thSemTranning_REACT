/** @format */

function GroupList() {
  // list = [];
  let list = ["cat", "dog", "rat", "cow", "chimp", "graf"];

  return (
    <>
      <ul>
        {/* {list.length === 0 ? <p>No item in List</p> : null} */}
        {list.length === 0 && <p>No item in List</p>}
        {/* // this let us write a concise code */}
        {list.map((item, index) => (
          <li
            key={item}
            onClick={() => console.log(item, index)}
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
