import React from 'react'
import { Link } from 'react-router-dom'

export default function Header() {
  return (
    <>    
      <nav className='border-b-2'>
        <Link to='/' className='self-center whitespace-nowrap text-sm 
        sm:text-xl font-semibold'>
        <span>Service</span> Aggregator
        </Link>
      </nav>
    </>
  )
}
