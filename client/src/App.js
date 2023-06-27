import React from 'react'
import { Routes, Route, Navigate } from 'react-router-dom'
import Home from './pages/Home'
import Profile from './pages/Profile'
import Login from './pages/Login'
import Signup from './pages/Signup'

const App = () => {
  
  const token = localStorage.getItem('token');

  return (
    <section className="px-[3rem] py-[1rem]">
        <Routes>
          <Route path='/signup' element={token ? <Navigate to="/" /> : <Signup />}/>
          <Route path='/login' element={token ? <Navigate to="/" /> : <Login />}/>
          <Route path='/' element={token ? <Home /> : <Navigate to="/login" />}/>
          <Route path='/profile' element={token ? <Profile /> : <Navigate to="/login" />}/>
        </Routes>
    </section>
  )
}

export default App