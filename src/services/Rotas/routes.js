import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from '../../pages/Home/index'
import Onu from '../../pages/Onu/index'
import Projetos from '../../pages/Projetos/index'
import Navbar from '../Navbar'

export default function routes() {
  return (
    <>
      <Router>
        <Navbar/>
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/onu' element={<Onu/>} />
          <Route path='/projetos' element={<Projetos/>} />
        </Routes>
      </Router>
    </>
  )
}
