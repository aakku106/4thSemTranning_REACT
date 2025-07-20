import { useState } from "react";
function Tik() {

  let [hidesubmit, setHideSubmit] = useState(true)
  let button = {
    backgroundColor: "gray !important",
  }
  let handleSubmit = (e) => {
    e = 1
  }


  return (
    <div className="Main">
      <form onSubmit={(e) => handleSubmit(e)}>
        <input type="text" placeholder="Name" />
        <input type="email" placeholder="Email" />
        <input type="number" placeholder="Phone no" />
        <input type="submit" />
      </form>
    </div >
  )
}
export default Tik;
