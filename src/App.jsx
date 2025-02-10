import React from 'react'
import Home from './Pages/Home'
import About from './Pages/About'
import Service from './Pages/Service'
import Menu from './Pages/Menu'
import Contact from './Pages/Contact'
import Advices from './Pages/Advices'
import { Route, Routes } from 'react-router-dom'
import Navigations from './NavBar/Navigations'

export default function App() {
  return (
    <div>
      <Navigations/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/service' element={<Service/>}/>
        <Route path='/menu' element={<Menu/>}/>
        <Route path='/contact' element={<Contact/>}/>
        <Route path='/advices' element={<Advices/>}/>
      </Routes>
    </div>
  )
}
