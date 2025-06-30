import { useState } from "react";
const Catagory = ["All", "footWares", "vegi", "topWear", "MotorBike", "car"]
const data = [
  { id: 1, name: "chappal", catagory: "footWares", price: 106 },
  { id: 1, name: "jhutta", catagory: "footWares", price: 1006 },
  { id: 1, name: "aalu", catagory: "vegi", price: 106 },
  { id: 1, name: "tamatar", catagory: "vegi", price: 80 },
  { id: 1, name: "t-shirt", catagory: "topWear", price: 1000 },
  { id: 1, name: "jacket", catagory: "TopWear", price: 10000 },
  { id: 1, name: "n-150", catagory: "MotorBike", price: 200000 },
  { id: 1, name: "fz-5", catagory: "MptorBike", price: 200500 },
  { id: 1, name: "tesla", catagory: "car", price: 1000000 },
  { id: 1, name: "farari", catagory: "footWares", price: 40000000 },
  { id: 1, name: "moza", catagory: "footWares", price: 60 },
]
export let Products = () => {
  const [ProductFilter, setProductFilter] = useState("all");
  const FilterProduct = data.filter(i => {

    return `cat ${i}`
  })

  return (
    <>
      <select>catagory
        {
          Catagory.map((value, index) => (
            <option key={index} onClick={() => setProductFilter(`${value}`)} >{value}</option>
          ))
        }
      </select>




      <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700">
        <a href="#">
          <img className="rounded-t-lg" src="/docs/images/blog/image-1.jpg" alt="" />
        </a>
        <div className="p-5">
          <a href="#">
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              Noteworthy technology acquisitions 2021
            </h5>
          </a>
          <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
            Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.
          </p>
          <a href="#" className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
            Read more
            <svg className="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
              <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
            </svg>
          </a>
        </div>
      </div>
    </>
  )

};
