import React from 'react'
import Navbar from './components/Navbar'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Students from './pages/Students'
import About from './pages/About'
import AddStudent from './pages/AddStudent'
import Footer from './components/Footer'
import StudentDetails from './pages/StudentDetails'

export default function App() {
  return (

    <>

      < BrowserRouter>
        <Navbar />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/students" element={<Students />} />
          <Route path="/about" element={<About />} />
          <Route path="/add-student" element={<AddStudent />} />
          <Route path="/students/:id" element={<StudentDetails />} />

        </Routes>

        <Footer />
      </BrowserRouter>

    </>
  )
}
