import { useState } from 'react'
import Home from './Components/Home.jsx'
import Contact from './Components/Contact.jsx'
import About from './Components/About.jsx'
import Header from './Components/Header.jsx'
import { PageNotFound } from './Components/PageNotFound.jsx'
import { Routes, Route } from "react-router-dom"
import "./Style/style.css"
function MeroApp() {
  let [count, setCount] = useState(0)
  return (
    <>
      <div>
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<Home count={count} setCount={setCount} />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="*" element={<PageNotFound />} />
          </Routes>
        </main>
      </div>
    </>

  )
}

export default MeroApp
