import React from 'react'
import { Link } from 'react-router-dom'
function Navbar() {
  return (
    <>
    <nav className="bg-gradient-to-r from-blue-600 to-blue-400 p-4 text-white flex justify-center space-x-8 fixed top-0 left-0 w-full shadow-lg z-10">
      <Link to="/" className="font-medium hover:text-blue-100 transition duration-300 ease-in-out transform hover:scale-105 px-3 py-1 rounded-md">
        Home
      </Link>
      <Link to="/todo" className="font-medium hover:text-blue-100 transition duration-300 ease-in-out transform hover:scale-105 px-3 py-1 rounded-md">
        To do List
      </Link>
      <Link to="/blog" className="font-medium hover:text-blue-100 transition duration-300 ease-in-out transform hover:scale-105 px-3 py-1 rounded-md">
        Blog Page
      </Link>
      <Link to="/card" className="font-medium hover:text-blue-100 transition duration-300 ease-in-out transform hover:scale-105 px-3 py-1 rounded-md">
        Card Page
      </Link>
      <Link to="/form" className="font-medium hover:text-blue-100 transition duration-300 ease-in-out transform hover:scale-105 px-3 py-1 rounded-md">
        Form
      </Link>
      
     
    </nav>
    <div className='mb-20'></div>
    </>
  )
}

export default Navbar
