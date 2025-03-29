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
import ApplicaionForm from './pages/ApplicaionForm'
import Application from './pages/Application'
import Search from './pages/Search'
import ScrollToTop from './components/ScrollToTop'
import UpdateApplication from './pages/UpdateApplication'

export default function App() {
  return (
   <BrowserRouter>
   <ScrollToTop />
   <Header />
   <Routes>
    <Route path='/' element={<Home />} />
    <Route path='/about' element={<About />} />
    <Route path='/contact' element={<Contact />} />
    <Route path='/application/:applicationId' element={<Application />} />
    <Route path='/search' element={<Search />} />

    <Route element={<PrivateRoute />} >
    
    <Route path='/dashboard' element={<Dashboard />} />
    <Route path='/mybooking' element={<MyBooking />} />
    <Route path='/upload-documents' element={<ApplicaionForm />} />
    <Route path='/update-documents/:applicationId' element={<UpdateApplication />} />
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
