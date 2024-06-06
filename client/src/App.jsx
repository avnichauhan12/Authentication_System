import { useState } from 'react'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Signup from './components/Signup'
import Login from './components/Login'
// import ForgotPassword from './Components/ForgotPassword'
import './App.css'

function App() {


  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Signup />}></Route>
      <Route path="/login" element={<Login />}></Route>
      {/* <Route path="/forgotPassword" element={<ForgotPassword />}></Route> */}
     
      </Routes>
    </BrowserRouter>
  )
}

export default App
