/** @format */

function GroupList() {
  const list = ["cat", "dog", "rat", "cow", "chimp", "graf"];
  return (
    <>
      <ul>
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
