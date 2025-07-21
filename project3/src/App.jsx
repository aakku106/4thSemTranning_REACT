import { useEffect, useRef, useState } from "react"

function App() {
  let [text, setText] = useState("")
  //  let [count, setCount] = useState(0)
  //  useEffect(() => {
  //    setCount(prev => prev + 1)
  //  }, [text])


  let inputref = useRef(null)
  let count = useRef(0);
  let prevValOfTxt = useRef('')
  useEffect(() => {
    count.current = count.current + 1
    prevValOfTxt.current = text
  }, [text])
  function handleFocus() {
    console.log(inputref);
    inputref.current.focus();
  }

  return (
    <>
      <div>
        <input ref={inputref} type="text" value={text} onChange={(e) => { setText(e.target.value) }} />
        <button onClick={handleFocus} >Focus</button>
        <div>You typed {text}</div>
        <div>tou rendered {count.current} {console.log(count.current)} times</div>
        <div>prev val: {prevValOfTxt.current}</div>const
      </div>
    </>
  )
}

export default App
