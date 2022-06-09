import React from 'react'
import '../styles/navbar.css'
import { RiHomeLine } from 'react-icons/ri'
import { TiClipboard, TiBookmark } from 'react-icons/ti'
import { BiClipboard } from 'react-icons/bi'
import { NavLink } from 'react-router-dom'

export const Navbar = () => {
  return (
    <nav>
      <div className='logo'>
        <img src='/assets/logo.png' alt='' />
      </div>

      <ul>
        <li>
          <NavLink to='/home'>
            <RiHomeLine />
          </NavLink>
        </li>
        <li>
          <NavLink to='/'>
            <TiClipboard />
          </NavLink>
        </li>
        <li>
          <NavLink to='/other'>
            <BiClipboard />
          </NavLink>
        </li>
      </ul>

      <div className='profile'>
        <NavLink to='/'>
          <TiBookmark />
        </NavLink>
        <div className='photo'>
          <img src='/assets/profile.png' alt='' />
        </div>
      </div>
    </nav>
  )
}
