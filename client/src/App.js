import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Profile from './pages/Profile'
import Login from './pages/Login'
import Signup from './pages/Signup'

const App = () => {
  return (
    <section className="px-[3rem] py-[1rem]">
        <Routes>
          <Route path='/signup' element={<Signup />}/>
          <Route path='/login' element={<Login />}/>
          <Route path='/' element={<Home />}/>
          <Route path='/profile' element={<Profile />}/>
        </Routes>
    </section>
  )
}

export default App