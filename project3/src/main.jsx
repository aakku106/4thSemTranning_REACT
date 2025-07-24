import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import MeroApp from './meroApp.jsx'
import { BrowserRouter } from 'react-router-dom'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter >
      <MeroApp />
    </ BrowserRouter >
  </StrictMode>,
)
