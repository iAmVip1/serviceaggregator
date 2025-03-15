import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Contact from './pages/Contact'
import Dashboard from './pages/Dashboard'
import Signin from './pages/Signin'
import Signup from './pages/Signup'
import MyBooking from './pages/MyBooking'
import Select from './pages/Select'

export default function App() {
  return (
   <BrowserRouter>
   <Routes>
    <Route path='/' element={<Home />} />
    <Route path='/about' element={<About />} />
    <Route path='/contact' element={<Contact />} />
    <Route path='/dashboard' element={<Dashboard />} />
    <Route path='/mybooking' element={<MyBooking />} />
    <Route path='/select' element={<Select />} />
    <Route path='/signin' element={<Signin />} />
    <Route path='/signup' element={<Signup />} />
    
   </Routes>
   </BrowserRouter>
  )
}
