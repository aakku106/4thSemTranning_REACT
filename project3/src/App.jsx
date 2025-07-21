import { useEffect, useRef, useState } from "react"

function App() {
  let [text, setText] = useState("")
  let [count, setCount] = useState(0)
  useEffect(() => {
    setCount(prev => prev + 1)
  }, [text])

  return (
    <>
      <div>
        <input type="text" value={text} onChange={(e) => { setText(e.target.value) }} />
        <div>You typed {text}</div>
        <div>tou rendered {count} times</div>
      </div>
    </>
  )
}

export default App
