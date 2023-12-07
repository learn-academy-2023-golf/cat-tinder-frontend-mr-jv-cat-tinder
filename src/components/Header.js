import React from 'react'
import {Nav, NavItem } from 'reactstrap'
import { NavLink } from 'react-router-dom'

const Header = () => {
  return (
    <>
      <Nav justified className='navbar'>
        <NavItem>
          <NavLink to="/">
            Home
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink to="/pigeonindex">
            See all lovebirds
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink to="/pigeonnew">
            Create a lovebird
          </NavLink>
        </NavItem>
      </Nav>
    </>
  )
}

export default Header