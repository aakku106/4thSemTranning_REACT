/** @format */

export const Student = ({ name, rollNo, facility }) => {
  let handleClick = () => {
    alert(`${name} Clicked`);
  };
  return (
    <>
      <a
        onClick={handleClick}
        href="#"
        className=" subpixel-antialiased block max-w-sm m-3 p-6 bg-white border border-gray-200 rounded-lg shadow-sm hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
        <h5 className=" subpixel-antialiased mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
          {name}
        </h5>
        <p className="subpixel-antialiased font-normal text-gray-700 dark:text-gray-400">
          RollNo: {rollNo} <br></br>
          facility: {facility}
        </p>
      </a>
    </>
  );
};
