import React from 'react'
import { NavLink } from 'react-router'

const Home = () => {
  return (
   <div>
<nav>
        <NavLink to='/'>Home</NavLink>
        <NavLink to='/about'>About</NavLink>
        <NavLink to='/courses'>Courses</NavLink>
    </nav>
     
        <h1>Home</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque quasi aliquid autem. 
          Voluptatibus exercitationem vitae quis aut sequi, inventore ea vero, aliquam cumque corrupti veniam, 
          omnis culpa quaerat earum atque. Aliquid cumque tempore perspiciatis eligendi, temporibus animi veniam explicabo eos.
        </p>
   </div>
  )
}

export default Home