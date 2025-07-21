import { useEffect, useRef, useState } from "react"

function App() {
  let [text, setText] = useState("")
  //  let [count, setCount] = useState(0)
  //  useEffect(() => {
  //    setCount(prev => prev + 1)
  //  }, [text])

  let [visible, setVisible] = useState(false)


  let inputref = useRef(null)
  let input = useRef(null)
  let count = useRef(0);
  let prevValOfTxt = useRef('')
  useEffect(() => {
    count.current = count.current + 1
    prevValOfTxt.current = text
  }, [text])
  function handleFocus() {
    inputref.current.focus();
  }
  function unFocus() {
    inputref.current.blur()
  }

  useEffect(() => {
    if (visible) {
      input.current.focus();
      window.addEventListener("mousedown", () => {
        input.current.blur()
      })
    }
  })

  return (
    <>
      <div style={{
        position: "relative"
      }}>
        <input ref={inputref} type="text" value={text} onChange={(e) => { setText(e.target.value) }} />
        <button onClick={handleFocus} >Focus</button>
        <button onClick={unFocus} >UnFocus</button>
        <div>You typed {text}</div>
        <div>tou rendered {count.current} times</div>
        <div>prev val: {prevValOfTxt.current}</div>
        <button onClick={() =>
          setVisible(true)
        } >Enter</button>
        {
          visible === true ? (
            <input
              ref={input}
              style={{
                position: "absolute",
                top: "50%",
                left: "35%"
              }}
              value={text}
              type="text"
              onChange={(e) => { setText(e.target.value) }}
            />

          ) :
            null
        }
      </div>
    </>
  )
}

export default App
