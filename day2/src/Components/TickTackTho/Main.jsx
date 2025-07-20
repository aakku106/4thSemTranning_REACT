import { useState } from "react";
function Tik() {

  let [hidesubmit, setHideSubmit] = useState(true)

  return (
    <div className="Main">
      <form onSubmit={(e) => handleSubmit(e)}>
        <input type="text" placeholder="Name" onChange={(e) => setAnswer(e.target.value)} value={answer} />
        <input type="email" placeholder="Email" onChange={(e) => setAnswer(e.target.value)} value={answer} />
        <input type="number" placeholder="Phone no" onChange={(e) => setAnswer(e.target.value)} value={answer} />
      </form>
      <button onClick={() => setHideSubmit}}>Submit</button>
    </div >
  )
}
export default Tik;
