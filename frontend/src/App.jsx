import React from 'react'

import { Route,Routes } from 'react-router-dom'
import './App.css'
import Home from './Pages/Home'
import About from './Pages/Home/About'
import Contact from './Pages/Home/Contact'
import Foodpage from './Pages/Home/Foodpage'
import Cart from './Pages/Home/cart'
import Authlogin from './authlogin'

function App() {
  

  return (
    <>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/About' element={<About/>}/>
      <Route path='/Contact' element={<Contact/>}/>
      <Route path='/foodpage' element={<Foodpage/>}/>
      <Route path='/cart' element={<Cart/>}/>
      <Route path='/auth/login' element={<Authlogin/>}/>


    </Routes>
    
     
    </>
  )
}
export default App
