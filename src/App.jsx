import React from 'react'
import Navbar from './components/Navbar'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import Home from './pages/Home'
import Students from './pages/Students'

export default function App() {
  return (

    <>

    < BrowserRouter>
      <Navbar />

      <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/students" element={<Students />} />
      </Routes>

    </BrowserRouter>

    </>
  )
}
