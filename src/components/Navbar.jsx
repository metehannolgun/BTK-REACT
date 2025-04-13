import React from 'react'
import { NavLink } from 'react-router'

const Navbar = () => {
  return (
    <div className='nav'>
        
       <header className='container'>
        <h1>Course App</h1>
        <nav>
            <NavLink to='/'>Home</NavLink>
            <NavLink to='/about'>About</NavLink>
            <NavLink to='/courses'>Courses</NavLink>
            <NavLink to='/help'>Help</NavLink>
            
        </nav>
        </header>
   </div>
  )
}

export default Navbar