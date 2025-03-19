import { Link, NavLink } from 'react-router-dom'
import {useSelector, useDispatch} from 'react-redux';
import { signoutSuccess } from '../redux/user/userSlice';


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

  return (
    
    <header className='bg-slate-200 shadow-md'>

      <>
      
<nav className="border-gray-200 ">
  <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
  <Link to='/' className='font-bold text-sm sm:text-xl flex flex-wrap'>
        
        <img src="https://github.com/iAmVip1/serviceaggregator/blob/main/images/logo2.png?raw=true" alt="logo"
        className="h-18" />
        <span className='text-amber-500 px-2 mt-7 sm:mt-5'>Service </span>
        <span className="mt-7 sm:mt-5"> Aggregator</span>
      </Link>
      
      

    <button data-collapse-toggle="navbar-default" type="button" className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark" aria-controls="navbar-default" aria-expanded="false">
        <span className="sr-only">Open main menu</span>
        <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15"/>
        </svg>
    </button>
    <div className="hidden w-full md:block md:w-auto" id="navbar-default">
      <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg  md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 ">
        <li>
          <NavLink to='/' className={({ isActive }) => isActive ?"block py-2 px-3 text-black bg-gray-400 rounded-sm md:bg-transparent md:text-gray-400 md:p-0" :
          "block py-2 px-3 text-black rounded-sm hover:bg-gray-700 hover:text-white md:hover:bg-transparent md:border-0 md:hover:text-gray-400 md:p-0 "} >Home</NavLink>
        </li>
        <li>
        <NavLink to='/contact' className={({ isActive }) => isActive ?"block py-2 px-3 text-black bg-gray-400 rounded-sm md:bg-transparent md:text-gray-400 md:p-0" :
          "block py-2 px-3 text-black rounded-sm hover:bg-gray-700 hover:text-white md:hover:bg-transparent md:border-0 md:hover:text-gray-400 md:p-0 "} >Contact us</NavLink>
        </li>
        <li>
        <NavLink to='/about' className={({ isActive }) => isActive ?"block py-2 px-3 text-black bg-gray-400 rounded-sm md:bg-transparent md:text-gray-400 md:p-0" :
          "block py-2 px-3 text-black rounded-sm hover:bg-gray-700 hover:text-white md:hover:bg-transparent md:border-0 md:hover:text-gray-400 md:p-0 "} >About</NavLink>
        </li>
        {currentUser ? (
          <>
        <li>
          {/* dropdown */}

        

<button id="dropdownInformationButton" data-dropdown-toggle="dropdownInformation"
className='sm:hidden md:block' type="button">
  <img className='rounded-full h-7 w-7 ring-2 ring-gray-300' src={currentUser.profilePicture} alt="" /> 
  
</button>

<div id="dropdownInformation" className="z-10 hidden bg-gray-700 divide-y divide-gray-100 rounded-lg shadow-sm w-44 ">
    <div className="px-4 py-3 text-sm text-white ">
      <div>{currentUser.username}</div>
      <div className="font-medium truncate">{currentUser.email}</div>
    </div>
    <ul className="py-2 text-sm text-white " aria-labelledby="dropdownInformationButton">
      <li>
      <Link to={'/dashboard?tab=profile'}>
        <div className="block px-4 py-2 hover:bg-gray-600">Profile</div>
        </Link>
      </li>
      <li>
      <Link to={'/dashboard?tab=mybooking'}>
        <div className="block px-4 py-2 hover:bg-gray-600">Documents</div>
        </Link>
      </li>
      <li>
      <Link to={'/dashboard?tab=documents'}>
        <div className="block px-4 py-2 hover:bg-gray-600">My Bookings</div>
        </Link>
      </li>
      
    </ul>
    <div className="py-2">
      <div className="block px-4 py-2 text-sm text-white hover:bg-gray-600 hover:cursor-pointer "
      onClick={handleSignout}>Sign out</div>
    </div>
</div>


          {/* dropdown */}
        </li>
        <li>
        <NavLink to='/dashboard?tab=profile' className={({ isActive }) => isActive ?"block py-2 px-3 text-black bg-gray-400 rounded-sm md:hidden" :
          "block py-2 px-3 text-black rounded-sm hover:bg-gray-700 hover:text-white md:hidden "} >Dashboard</NavLink>
        </li>
        </>
        ):(
          <>
        <li>
        <NavLink to='/signin' className={({ isActive }) => isActive ?"block py-2 px-3 text-black bg-gray-400 rounded-sm md:bg-transparent md:text-gray-400 md:p-0" :
          "block py-2 px-3 text-black rounded-sm hover:bg-gray-700 hover:text-white md:hover:bg-transparent md:border-0 md:hover:text-gray-400 md:p-0 "} >Login</NavLink>
        </li>
        <li>
        <NavLink to='/admin' className={({ isActive }) => isActive ?"block py-2 px-3 text-black bg-gray-400 rounded-sm md:bg-transparent md:text-gray-400 md:p-0" :
          "block py-2 px-3 text-black rounded-sm hover:bg-gray-700 hover:text-white md:hover:bg-transparent md:border-0 md:hover:text-gray-400 md:p-0 "} >Admin Login</NavLink>
        </li>
        </>
        )}
        
        
      </ul>
    </div>
  </div>
</nav>

      </>
    </header>
  )
}
