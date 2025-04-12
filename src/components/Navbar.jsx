import React from 'react'
import { NavLink } from 'react-router'

const Navbar = () => {
  return (
    <div className='nav'>
        <header className='container'>Course App</header>

        <nav>
            <NavLink to='/'>Home</NavLink>
            <NavLink to='/about'>About</NavLink>
            <NavLink to='/courses'>Courses</NavLink>
            <NavLink to='/help'>Help</NavLink>
        </nav>
   </div>
  )
}

export default Navbar