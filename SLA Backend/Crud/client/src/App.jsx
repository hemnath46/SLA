import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import {BrowserRouter,Routes,Route, Link} from 'react-router-dom';
import Navbar from './components/Navbar';
import Registration from './pages/Registration';
import Login from './pages/Login';
import Profile from './pages/Profile';
import LoginForm from './pages/LoginForm';

function App() {

  return (
    <>
      <div>
        <BrowserRouter>
        <Navbar/>
        <Routes>
          <Route path='/' element={<Registration/>}/> 
          <Route path='/Login' element={<Login/>}/> 
          <Route path='/Profile' element={<Profile/>}/> 
        </Routes>
        </BrowserRouter>

        {/* <BrowserRouter>
        <nav>
          <Link to='/'>LoginForm</Link>
        </nav>
        <Routes>
          <Route path='/' element={<LoginForm/>}/>
        </Routes>
        </BrowserRouter> */}
      </div>
    </>
  )
}

export default App
