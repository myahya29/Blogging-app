import { createRoot } from 'react-dom/client'
import './index.css'
import { BrowserRouter, Route, Routes } from 'react-router'
import Home from './pages/Home.jsx'
import Login from './pages/Login.jsx'
import Register from './pages/Register.jsx'
import Dashboard from './pages/Dashboard.jsx'
import Profile from './pages/Profile.jsx'
import Navbar from './components/Navbar.jsx'

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
  <Navbar/>
  <Routes>
    

     <Route path='/' element={<Home />} />
    <Route path='login' element={<Login/>}/>
    <Route path='register' element={<Register/>}/>
   
    <Route path='profile' element={<Profile/>}/>
   
  </Routes>
  </BrowserRouter>
)


