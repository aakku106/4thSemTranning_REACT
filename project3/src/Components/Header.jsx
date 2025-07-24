import { Link } from "react-router-dom"
function Header() {
  return (

    <nav style={{ height: "8vh", width: "100vw", display: "flex", textAlign: "center", justifyContent: "space-evenly", backgroundColor: "white" }}>
      <div style={{ fontSize: "25px", fontWeight: "bold" }}>React_Router</div>
      <div style={{ display: "flex", width: "20vw", justifyContent: "space-between" }}>

        <Link to="/"
          style={{ fontSize: "20px" }}>Home</Link>
        <Link to="/about"

          style={{ fontSize: "20px" }}>About</Link>
        <Link to="/contact"
          style={{ fontSize: "20px" }}>Contact</Link>
      </div>
      <button style={{ backgroundColor: "blue", color: "white", height: "45px" }}>Login</button>
    </nav>


  )
}
export default Header
