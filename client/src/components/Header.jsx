import { FaSearch } from "react-icons/fa";
import { Link, NavLink } from 'react-router-dom'

export default function Header() {
  return (
    <header className='bg-slate-200 shadow-md'>
      {/* <div className="flex justify-between items-center max-w-6xl mx-auto p-3">

      <Link to='/' className='font-bold text-sm sm:text-xl flex flex-wrap'>
        
        <img src="https://github.com/iAmVip1/serviceaggregator/blob/main/images/logo2.png?raw=true" alt="logo"
        className="h-18" />
        <span className='text-amber-500 px-2 mt-7 sm:mt-5'>Service </span>
        <span className="mt-7 sm:mt-5"> Aggregator</span>
      </Link>
      <form className='bg-slate-100 p-3 rounded-lg flex items-center'>
        <input type="text" placeholder='Search...' className='bg-transparent border border-none 
        focus:outline-none h-3 w-24 sm:w-64' />
        <FaSearch />
      </form>
      
      </div> */}
      <>
      

<nav className="border-gray-200 ">
  <div class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
  <Link to='/' className='font-bold text-sm sm:text-xl flex flex-wrap'>
        
        <img src="https://github.com/iAmVip1/serviceaggregator/blob/main/images/logo2.png?raw=true" alt="logo"
        className="h-18" />
        <span className='text-amber-500 px-2 mt-7 sm:mt-5'>Service </span>
        <span className="mt-7 sm:mt-5"> Aggregator</span>
      </Link>
    <button data-collapse-toggle="navbar-default" type="button" class="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-default" aria-expanded="false">
        <span className="sr-only">Open main menu</span>
        <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h15M1 7h15M1 13h15"/>
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
        <li>
        <NavLink to='/signup' className={({ isActive }) => isActive ?"block py-2 px-3 text-black bg-gray-400 rounded-sm md:bg-transparent md:text-gray-400 md:p-0" :
          "block py-2 px-3 text-black rounded-sm hover:bg-gray-700 hover:text-white md:hover:bg-transparent md:border-0 md:hover:text-gray-400 md:p-0 "} >Login</NavLink>
        </li>
        <li>
        <NavLink to='/admin' className={({ isActive }) => isActive ?"block py-2 px-3 text-black bg-gray-400 rounded-sm md:bg-transparent md:text-gray-400 md:p-0" :
          "block py-2 px-3 text-black rounded-sm hover:bg-gray-700 hover:text-white md:hover:bg-transparent md:border-0 md:hover:text-gray-400 md:p-0 "} >Admin Login</NavLink>
        </li>
        
        
      </ul>
    </div>
  </div>
</nav>

      </>
    </header>
  )
}
