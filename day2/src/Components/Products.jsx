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
            <option key={index} >{value}</option>
          ))
        }

      </select>
    </>
  )

};
