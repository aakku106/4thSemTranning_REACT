import { useState } from "react";

const Catagory = ["All", "footWares", "vegi", "topWear", "MotorBike", "car"];

const data = [
  { id: 1, name: "chappal", catagory: "footWares", price: 106 },
  { id: 2, name: "jhutta", catagory: "footWares", price: 1006 },
  { id: 3, name: "aalu", catagory: "vegi", price: 106 },
  { id: 4, name: "tamatar", catagory: "vegi", price: 80 },
  { id: 5, name: "t-shirt", catagory: "topWear", price: 1000 },
  { id: 6, name: "jacket", catagory: "topWear", price: 10000 },
  { id: 7, name: "n-150", catagory: "MotorBike", price: 200000 },
  { id: 8, name: "fz-5", catagory: "MotorBike", price: 200500 },
  { id: 9, name: "tesla", catagory: "car", price: 1000000 },
  { id: 10, name: "farari", catagory: "car", price: 40000000 },
  { id: 11, name: "moza", catagory: "footWares", price: 60 },
];

export let Products = () => {
  const [ProductFilter, setProductFilter] = useState("all");

  const FilterProduct = data.filter((i) => {
    if (ProductFilter === "topWear") return i.catagory === "topWear"
    else if (ProductFilter === "vegi") return i.catagory === "vegi"
    else if (ProductFilter === "footWares") return i.catagory === "footWares"
    else if (ProductFilter === "MotorBike") return i.catagory === "MotorBike"
    else if (ProductFilter === "car") return i.catagory === "car"
    else return i.catagory
  });

  return (
    <div className="p-6 bg-wrapper">
      <select
        className="dropdown"
        onChange={(e) => setProductFilter(e.target.value)}
      >
        {Catagory.map((value, index) => (
          <option key={index} value={value} onClick={() => setProductFilter(`${value}`)} >
            {value}
          </option>
        ))}
      </select>

      <div className="waterfall">
        {FilterProduct.map((value) => (
          <div key={value.id} className="card">
            <h5 className="title">{value.name}</h5>
            <p className="price">Price: Rs {value.price}</p>
            <button className="buy-btn">Buy Now</button>
          </div>
        ))}
      </div>
    </div>
  );
};
