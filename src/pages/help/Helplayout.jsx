import React from 'react'
import Contact from './Contact'
import { NavLink,Outlet } from 'react-router'

const Helplayout = () => {
  return (
    <div className='container-2'>
        <h1>Help Layout</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde, quod.</p>
        <div className='nav-help'>
            <NavLink to='/help/faq'>Sıkça Sorulan Sorular</NavLink>
            <NavLink to='/help/contact'>İletişim</NavLink>
        </div>
        <Outlet/>
        
    </div>
  )
}

export default Helplayout