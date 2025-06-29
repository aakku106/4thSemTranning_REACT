import { useState } from "react"

export let Run = () => {
  let [cat, setRun] = useState("run")

  return (
    < section >
      <h1>weeeeeeeeeeeeeeeeeeeeeeeeeeeeee</h1>
      <p>{cat}</p>
      <button className={`${cat == "run" ? "bg-red-100" : "bg-green-100"}`}

        onClick={() => setRun(cat == "run" ? "stop" : "run")}>Change to {cat == "run" ? ` Stop` : `Walk`}</button>
    </section >
  )
}
