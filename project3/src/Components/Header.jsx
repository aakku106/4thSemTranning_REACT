import { useEffect, useState } from "react"
import { Link, useLocation } from "react-router-dom"
function Header() {
  let [path, setPath] = useState(window.location.pathname);
  let location = useLocation()
  useEffect(() => {
    setPath(window.location.pathname)
  }, [location])
  console.log(window.location)
  return (

    <nav style={{ display: "flex", textAlign: "center", justifyContent: "space-evenly" }}>
      <div style={{ fontSize: "2em", fontWeight: "bold" }}>React_Router</div>
      <div >

        <Link to="/"
          className={`${path == "/" ? "text-orange-500 bg-blue-400" : "text-blue-500"} `}
          style={{ fontSize: `${path == "/" ? "1.5em" : "1em"}`, textDecoration: "none" }}
        >Home</Link>
        <Link to="/about"

          className={`${path == "/about" ? "text-orange-500 bg-blue-400" : "text-blue-500"} `}
          style={{ fontSize: `${path == "/about" ? "1.5em" : "1em"}`, textDecoration: "none" }}
        >About</Link>
        <Link to="/contact"
          className={`${path == "/contact" ? "text-orange-500 bg-blue-400" : "text-blue-500"}`}
          style={{ fontSize: `${path == "/contact" ? "1.5em" : "1em"}`, textDecoration: "none" }}
        >Contact</Link>
      </div>
      <button style={{ backgroundColor: "blue", color: "white", height: "45px" }}>Login</button>
    </nav>


  )
}
export default Header
