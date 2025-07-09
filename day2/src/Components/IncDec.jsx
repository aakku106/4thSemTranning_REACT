import React, { useEffect, useState } from "react";

export const Calc = () => {
  const [count, setCount] = useState(106);
  const [c2, setCount2] = useState(106);

  //useEffect(() => {
  //    console.log("awwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwww")
  //    let id = setInterval(() => {
  //      console.log("weeeeeeeeee")
  //    }, 1000)
  //    return () => {
  //      console.log("cattt")
  //      clearInterval(id)
  //    }
  //  }, [count, c2])

  let [locTime, setLocTIme] = useState(new Date().toLocaleTimeString())
  let [value, setValue] = useState("")
  useEffect(() => {
    let id = setInterval(() => {
      setLocTIme(new Date().toLocaleTimeString())
    }, 1000)
    return () => {
      clearInterval(id)
    }
  }, [])

  return (
    <>
      <p className="text-center">{count}-----{c2}</p>
      <div className="text-center ">
        <button className="fixSpace" onClick={async () => (
          setCount(prev => prev + 1)
        )}>
          Add</button>
        <button className="fixSpace" onClick={() => setCount(prev => prev - 1)}>Sub</button>
        <button className="fixSpace" onClick={() => setCount2(prev => prev - 1)}>Sub</button>
        <button className="fixSpace" onClick={() => { setCount(106); setCount2(106) }}>Reset</button>


        <h1>{locTime}</h1>
        <h1>
          {value === "" ? `Welcome ` : `Hellow${value}`}
        </h1>
        <input type="text" name="" placeholder="Input Topic" id="" onChange={(e) => {

          setValue(e)

        }} />
      </div >
    </>
  );
};
