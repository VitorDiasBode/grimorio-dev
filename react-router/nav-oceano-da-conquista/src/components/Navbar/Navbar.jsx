import React from 'react'
import logo from '../../assets/logo2.png'
import './style.css'
import { NavLink } from 'react-router'


export default function Navbar() {
  return (
    <nav className='navbar'>
      <div className="logo">
        <img className="logo" src={logo} alt="logo" />

        <div className="links">
          <NavLink to='/' className={({isActive}) => isActive?"active":""}>Principal</NavLink>
          <NavLink to='/piratas'className={({isActive}) => isActive?"active":""}>Piratas</NavLink>
          <NavLink to='/marinheiros'className={({isActive}) => isActive?"active":""}>Marinheiros</NavLink>
          <NavLink to='/espectros'className={({isActive}) => isActive?"active":""}>Espectros</NavLink>

        </div>
      </div>
    </nav>
  )
}
