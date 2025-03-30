import { Link, NavLink } from 'react-router-dom'
import {useSelector, useDispatch} from 'react-redux';
import { signoutSuccess } from '../redux/user/userSlice';
import Logo from '../../../images/logo2.png'
import { House,Building2, LogIn, FileLock, PhoneCall , BookCheck  } from 'lucide-react';
import { useState } from 'react';

export default function Header() {
  const dispatch= useDispatch()
  const {currentUser} = useSelector(state => state.user);
  const handleSignout = async () =>{
    try {
      const res = await fetch('/api/user/signout', 
        {
          method: 'POST'

        }  
      );
      const data = await res.json();
      if (!res.ok) {
        console.log(data.message);
      } else {
        dispatch(signoutSuccess());
      }

    } catch (error) {
      console.log(error.message);
    }
  }

  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen); 
  };

  return (
    
    <header className='bg-slate-200 shadow-md'>

      <>
      
<nav className="border-gray-200 ">
  <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
  <Link to='/' className='font-bold text-sm sm:text-xl flex flex-wrap'>
        
        <img src={Logo} alt="logo"
        className="h-18" />
        <span className='text-amber-500 px-2 mt-7 sm:mt-5'>Service </span>
        <span className="mt-7 sm:mt-5"> Aggregator</span>
      </Link>
      
      <ul className='font-medium  flex  border-gray-100 
      rounded-lg  flex-row space-x-8 cursor-pointer
      rtl:space-x-reverse mt-0 border-0'>
          <li className='sm:hidden md:block 
          hover:bg-amber-500 hover:text-white
           p-2 rounded-xl'>
            <NavLink to='/' className={({ isActive }) => isActive ? "bg-amber-500 text-white p-2 rounded-xl" : 
         "font-medium" }>
            Home
              </NavLink > </li>
          <li className='sm:hidden md:block 
          hover:bg-amber-500 hover:text-white
           p-2 rounded-xl'>
            <NavLink to='/contact'className={({ isActive }) => isActive ? "bg-amber-500 text-white p-2 rounded-xl" : 
         "font-medium"} >
            Contact Us
              </NavLink> </li>
          <li className='sm:hidden md:block
          hover:bg-amber-500 hover:text-white
           p-2 rounded-xl'>
            <NavLink to='/about' className={({ isActive }) => isActive ? "bg-amber-500 text-white p-2 rounded-xl" : 
         "font-medium"}>
            About us
            </NavLink>
            
            </li>

    {/* mobile view */}
    <li className='sm:block md:hidden hover:text-blue-500'>
            <NavLink to='/' className={({ isActive }) => isActive ? "text-blue-500" : 
            "font-medium"}>
            <BookCheck  />
            </NavLink>
          </li>
          <li className='sm:block md:hidden hover:text-blue-500'>
            <NavLink to='/contact'className={({ isActive }) => isActive ? "text-blue-500" : 
            "font-medium"}>
            <PhoneCall />
            </NavLink>
          </li>
          <li className='sm:block md:hidden hover:text-blue-500'>
          <NavLink to='/about'className={({ isActive }) => isActive ? "text-blue-500" : 
            "font-medium"}>
          <Building2 />
          </NavLink>
          </li>

          {currentUser ? (
              <>
               <li className='sm:hidden md:block
          hover:bg-amber-500 hover:text-white
           p-2 rounded-xl'>
            <NavLink to='/booking' className={({ isActive }) => isActive ? "bg-amber-500 text-white p-2 rounded-xl" : 
         "font-medium"}>
            My Bookings
            </NavLink>
            
            </li>

    {/* mobile view */}
    <li className='sm:block md:hidden hover:text-blue-500'>
            <NavLink to='/booking' className={({ isActive }) => isActive ? "text-blue-500" : 
            "font-medium"}>
            <House />
            </NavLink>
          </li>
             <button className='group relative border-none block text-gray-500 text-lg px-3 py-1 rounded sm:hidden md:block'>
  <img className='rounded-full h-7 w-7 ring-2 ring-gray-300' src={currentUser.profilePicture} alt="Profile" />
  <div className="absolute top-full right-0 rounded-lg p-3 mt-1 shadow-md scale-y-0 group-hover:scale-y-100 origin-top duration-200 bg-white space-y-2 w-auto">
  <div className="text-sm  block py-2 px-4 hover:font-semibold border-b-2 border-dashed border-gray-400 last:border-0">
      <div>{currentUser.username}</div>
      <div className="font-medium truncate">{currentUser.email}</div>
    </div>
    <a href="/dashboard?tab=profile" className='block py-2 px-4 text-sm hover:font-semibold hover:bg-gray-500 hover:text-white rounded-xl'>Profile</a>
    <a href="/dashboard?tab=documents" className='block py-2 px-4 text-sm hover:font-semibold hover:bg-gray-500 hover:text-white rounded-xl'>Documents</a>
    <a href="/dashboard?tab=mybooking" className='block py-2 px-4 text-sm hover:font-semibold hover:bg-gray-500 hover:text-white rounded-xl
     border-b-2 border-dashed border-gray-400 last:border-0'>Bookings</a>
    <div className="py-2">
      <div className="block px-4 py-2 text-sm  hover:cursor-pointer hover:bg-red-500 hover:text-white rounded-xl "
      onClick={handleSignout}>Sign out</div>
    </div>
  </div>
  
</button>

<button
        className="group relative border-none block text-gray-500 text-lg px-3 py-1 rounded md:hidden"
        onClick={toggleDropdown} // Attach the toggle function
      >
        <img
          className="rounded-full h-7 w-7 ring-2 ring-gray-300"
          src={currentUser.profilePicture}
          alt="Profile"
        />
        <div
          className={`absolute top-full right-0 rounded-lg p-3 mt-1 shadow-md origin-top duration-200 bg-white space-y-2 w-auto transform ${
            isOpen ? 'scale-y-100' : 'scale-y-0'
          }`}
        >
           <div className="text-sm  block py-2 px-4 hover:font-semibold border-b-2 border-dashed border-gray-400 last:border-0">
      <div>{currentUser.username}</div>
      <div className="font-medium truncate">{currentUser.email}</div>
    </div>
          <a href="/dashboard?tab=profile" className="block py-2 px-4 hover:font-semibold">
            Profile
          </a>
          <a href="/dashboard?tab=documents" className="block py-2 px-4 hover:font-semibold">
            Documents
          </a>
          <a href="/dashboard?tab=mybooking" className="block py-2 px-4 hover:font-semibold
          border-b-2 border-dashed border-gray-400 last:border-0">
            Bookings
          </a>
          <div className="py-2">
      <div className="block px-4 py-2 text-sm  hover:cursor-pointer hover:bg-red-500 hover:text-white rounded-xl "
      onClick={handleSignout}>Sign out</div>
    </div>
        </div>
      </button>

              </>

          ):(
            <>

            <li className='sm:hidden md:block
          hover:bg-amber-500 hover:text-white
           p-2 rounded-xl'>
            <NavLink to='/signin' className={({ isActive }) => isActive ? "bg-amber-500 text-white p-2 rounded-xl" : 
         "font-medium"}>
            Login
          </NavLink></li>
          <li className='sm:hidden md:block
          hover:bg-amber-500 hover:text-white
           p-2 rounded-xl'>
            <NavLink to='/admin' className={({ isActive }) => isActive ? "bg-amber-500 text-white p-2 rounded-xl" : 
         "font-medium"}>
            Admin Login
          </NavLink> </li>


          {/* mobileview */}
          
          <li className='sm:block md:hidden hover:text-blue-500'>
            <NavLink to='/signin'className={({ isActive }) => isActive ? "text-blue-500" : 
            "font-medium"}>
            <LogIn />
            </NavLink>
          
          </li>
          <li className='sm:block md:hidden hover:text-blue-500'>
          <NavLink to='/admin'className={({ isActive }) => isActive ? "text-blue-500" : 
            "font-medium"}>
          <FileLock />
              </NavLink>
        
          </li>
            </>
          )}

          
      </ul>

    
  
  </div>
</nav>

      </>
    </header>
  )
}
