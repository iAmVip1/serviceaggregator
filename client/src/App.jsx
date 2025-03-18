import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Contact from './pages/Contact'
import Dashboard from './pages/Dashboard'
import Signin from './pages/Signin'
import Signup from './pages/Signup'
import MyBooking from './pages/MyBooking'
import Select from './pages/Select'
import Header from './components/Header'
import Admin from './pages/Admin'
import Footer from './components/Footer'
import PrivateRoute from './components/PrivateRoute'

export default function App() {
  return (
   <BrowserRouter>
   <Header />
   <Routes>
    <Route path='/' element={<Home />} />
    <Route path='/about' element={<About />} />
    <Route path='/contact' element={<Contact />} />
    <Route element={<PrivateRoute />} >
    
    <Route path='/dashboard' element={<Dashboard />} />
    <Route path='/mybooking' element={<MyBooking />} />
    </Route>
    
    <Route path='/select' element={<Select />} />
    <Route path='/signin' element={<Signin />} />
    <Route path='/signup' element={<Signup />} />
    <Route path='/admin' element={<Admin />} />
    
   </Routes>
   <Footer />
   </BrowserRouter>
  )
}
